<?php
namespace app\common\service;

use think\facade\Db;

/**
 * 支付 SDK 服务
 * 支付宝电脑网站支付 + 微信 Native 支付 + 回调验签
 * 对应架构文档 Section 7
 */
class PaymentService
{
    // ─── 支付宝 ────────────────────────────────

    /**
     * 支付宝电脑网站支付
     * @return array{pay_url: string, qr_code: string}
     */
    public static function alipayPagePay($orderNo, $amount, $subject, $returnUrl = '', $notifyUrl = '')
    {
        $config = self::getPayConfig('alipay');
        if (empty($config['app_id']) || empty($config['private_key'])) {
            throw new \Exception('支付宝未配置');
        }

        $biz = [
            'out_trade_no'  => $orderNo,
            'total_amount'  => number_format($amount, 2, '.', ''),
            'subject'       => $subject,
            'product_code'  => 'FAST_INSTANT_TRADE_PAY',
        ];

        $params = [
            'app_id'        => $config['app_id'],
            'method'        => 'alipay.trade.page.pay',
            'format'        => 'JSON',
            'charset'       => 'utf-8',
            'sign_type'     => 'RSA2',
            'timestamp'     => date('Y-m-d H:i:s'),
            'version'       => '1.0',
            'notify_url'    => $notifyUrl ?: ($config['notify_url'] ?? ''),
            'return_url'    => $returnUrl ?: ($config['return_url'] ?? ''),
            'biz_content'   => json_encode($biz, JSON_UNESCAPED_UNICODE),
        ];

        $params['sign'] = self::alipaySign($params, $config['private_key']);
        $query = http_build_query($params);
        $gateway = $config['mode'] === 'dev'
            ? 'https://openapi.alipaydev.com/gateway.do'
            : 'https://openapi.alipay.com/gateway.do';

        return [
            'pay_url'  => $gateway . '?' . $query,
            'qr_code'  => '',
            'order_no' => $orderNo,
            'amount'   => number_format($amount, 2, '.', ''),
        ];
    }

    /**
     * 支付宝签名
     */
    private static function alipaySign($params, $privateKey)
    {
        ksort($params);
        $str = '';
        foreach ($params as $k => $v) {
            if ($v !== '' && $v !== null && $k !== 'sign' && substr($k, 0, 1) !== '_') {
                $str .= $k . '=' . $v . '&';
            }
        }
        $str = rtrim($str, '&');
        $key = "-----BEGIN RSA PRIVATE KEY-----\n" . wordwrap($privateKey, 64, "\n", true) . "\n-----END RSA PRIVATE KEY-----";
        openssl_sign($str, $sign, $key, OPENSSL_ALGO_SHA256);
        return base64_encode($sign);
    }

    /**
     * 支付宝回调验签
     */
    public static function alipayVerify($params, $publicKey = null)
    {
        $config = self::getPayConfig('alipay');
        $pubKey = $publicKey ?: ($config['ali_public_key'] ?? '');
        if (empty($pubKey)) { return false; }

        $sign = $params['sign'] ?? '';
        $signType = $params['sign_type'] ?? 'RSA2';
        unset($params['sign'], $params['sign_type']);

        ksort($params);
        $str = '';
        foreach ($params as $k => $v) {
            if ($v !== '' && $v !== null) {
                $str .= $k . '=' . $v . '&';
            }
        }
        $str = rtrim($str, '&');

        $key = "-----BEGIN PUBLIC KEY-----\n" . wordwrap($pubKey, 64, "\n", true) . "\n-----END PUBLIC KEY-----";
        $algo = $signType === 'RSA2' ? OPENSSL_ALGO_SHA256 : OPENSSL_ALGO_SHA1;
        return openssl_verify($str, base64_decode($sign), $key, $algo) === 1;
    }

    // ─── 微信支付 V2 ──────────────────────────

    /**
     * 微信 Native 支付 (扫码付)
     * @return array{pay_url: string, qr_code: string, code_url: string}
     */
    public static function wechatNativePay($orderNo, $amount, $subject, $notifyUrl = '')
    {
        $config = self::getPayConfig('wechat');
        if (empty($config['mch_id']) || empty($config['api_key_v2'])) {
            throw new \Exception('微信支付未配置');
        }

        $amountFen = (int)round($amount * 100);

        $params = [
            'appid'            => $config['app_id'] ?? '',
            'mch_id'           => $config['mch_id'],
            'nonce_str'        => self::nonceStr(32),
            'body'             => mb_substr($subject, 0, 128),
            'out_trade_no'     => $orderNo,
            'total_fee'        => $amountFen,
            'spbill_create_ip' => $_SERVER['REMOTE_ADDR'] ?? '127.0.0.1',
            'notify_url'       => $notifyUrl ?: ($config['notify_url'] ?? ''),
            'trade_type'       => 'NATIVE',
            'product_id'       => $orderNo,
        ];

        $params['sign'] = self::wechatSign($params, $config['api_key_v2']);

        $xml = self::toXml($params);
        $response = self::curlPost('https://api.mch.weixin.qq.com/pay/unifiedorder', $xml);
        $result = self::fromXml($response);

        if (($result['return_code'] ?? '') === 'SUCCESS' && ($result['result_code'] ?? '') === 'SUCCESS') {
            return [
                'pay_url'  => '',
                'qr_code'  => self::generateQrDataUri($result['code_url'] ?? ''),
                'code_url' => $result['code_url'] ?? '',
                'order_no' => $orderNo,
                'amount'   => number_format($amount, 2, '.', ''),
            ];
        }

        throw new \Exception($result['return_msg'] ?? $result['err_code_des'] ?? '微信下单失败');
    }

    /**
     * 微信回调验签
     */
    public static function wechatVerify($xmlStr)
    {
        $config = self::getPayConfig('wechat');
        $data = self::fromXml($xmlStr);
        if (empty($data['sign']) || empty($config['api_key_v2'])) { return false; }

        $sign = $data['sign'];
        unset($data['sign']);
        $calcSign = self::wechatSign($data, $config['api_key_v2']);

        return strtoupper($sign) === strtoupper($calcSign) ? $data : false;
    }

    /**
     * 微信签名
     */
    private static function wechatSign($params, $key)
    {
        ksort($params);
        $str = '';
        foreach ($params as $k => $v) {
            if ($v !== '' && $v !== null && $k !== 'sign') {
                $str .= $k . '=' . $v . '&';
            }
        }
        $str .= 'key=' . $key;
        return strtoupper(md5($str));
    }

    // ─── 退款 ──────────────────────────────────

    /**
     * 支付宝退款
     */
    public static function alipayRefund($orderNo, $amount, $refundNo = '')
    {
        $config = self::getPayConfig('alipay');
        $refundNo = $refundNo ?: 'RF' . $orderNo;

        $biz = [
            'out_trade_no'   => $orderNo,
            'refund_amount'  => number_format($amount, 2, '.', ''),
            'out_request_no' => $refundNo,
        ];

        $params = [
            'app_id'      => $config['app_id'],
            'method'      => 'alipay.trade.refund',
            'format'      => 'JSON',
            'charset'     => 'utf-8',
            'sign_type'   => 'RSA2',
            'timestamp'   => date('Y-m-d H:i:s'),
            'version'     => '1.0',
            'biz_content' => json_encode($biz, JSON_UNESCAPED_UNICODE),
        ];

        $params['sign'] = self::alipaySign($params, $config['private_key']);
        $gateway = $config['mode'] === 'dev'
            ? 'https://openapi.alipaydev.com/gateway.do'
            : 'https://openapi.alipay.com/gateway.do';

        $response = self::curlPost($gateway, http_build_query($params));
        return json_decode($response, true) ?: [];
    }

    /**
     * 微信退款
     */
    public static function wechatRefund($orderNo, $amount, $totalAmount, $refundNo = '')
    {
        $config = self::getPayConfig('wechat');
        $refundNo = $refundNo ?: 'RF' . $orderNo;

        $params = [
            'appid'         => $config['app_id'] ?? '',
            'mch_id'        => $config['mch_id'],
            'nonce_str'     => self::nonceStr(32),
            'out_trade_no'  => $orderNo,
            'out_refund_no' => $refundNo,
            'total_fee'     => (int)round($totalAmount * 100),
            'refund_fee'    => (int)round($amount * 100),
        ];

        $params['sign'] = self::wechatSign($params, $config['api_key_v2']);

        $xml = self::toXml($params);
        // 微信退款需要证书，这里留接口
        $response = self::curlPost('https://api.mch.weixin.qq.com/secapi/pay/refund', $xml, true);
        return self::fromXml($response);
    }

    // ─── 辅助 ──────────────────────────────────

    /**
     * 获取支付配置
     */
    private static function getPayConfig($channel)
    {
        $config = Db::name('config')->where('group', 'payment')->column('value', 'name');
        $epayConfig = Db::name('config')->where('name', 'epay')->value('value');
        $epay = $epayConfig ? json_decode($epayConfig, true) : [];

        if ($channel === 'alipay') {
            return [
                'app_id'         => $config['pay_alipay_app_id'] ?? ($epay['alipay']['app_id'] ?? ''),
                'private_key'    => $config['pay_alipay_private_key'] ?? ($epay['alipay']['private_key'] ?? ''),
                'ali_public_key' => $config['pay_alipay_public_key'] ?? ($epay['alipay']['ali_public_key'] ?? ''),
                'notify_url'     => $config['pay_notify_url'] ?? '',
                'return_url'     => $config['pay_return_url'] ?? '',
                'mode'           => $config['pay_alipay_mode'] ?? 'dev',
            ];
        }

        return [
            'app_id'      => $config['pay_wechat_app_id'] ?? ($epay['wechat']['app_id'] ?? ''),
            'mch_id'      => $config['pay_wechat_mch_id'] ?? ($epay['wechat']['mch_id'] ?? ''),
            'api_key_v2'  => $config['pay_wechat_key_v2'] ?? ($epay['wechat']['api_key_v2'] ?? ''),
            'api_key_v3'  => $config['pay_wechat_key_v3'] ?? ($epay['wechat']['api_key_v3'] ?? ''),
            'serial_no'   => $config['pay_wechat_serial'] ?? ($epay['wechat']['serial_no'] ?? ''),
            'notify_url'  => $config['pay_notify_url'] ?? '',
        ];
    }

    /**
     * 生成支付页面 HTML
     */
    public static function renderPayPage($order, $alipayUrl = '', $wechatCodeUrl = '')
    {
        $title = htmlspecialchars($order['subject'] ?: '订单支付');
        $amount = number_format($order['amount'] ?? 0, 2);
        $orderNo = htmlspecialchars($order['order_no'] ?? '');

        $alipayBtn = $alipayUrl ? "<a href=\"{$alipayUrl}\" class=\"btn btn-alipay\">使用支付宝支付 ¥{$amount}</a>" : '';
        $wechatQr  = $wechatCodeUrl ? "
        <div class=\"wechat-section\">
          <h3>微信扫码支付</h3>
          <img src=\"" . self::generateQrDataUri($wechatCodeUrl) . "\" alt=\"微信支付二维码\" style=\"width:200px;height:200px\" />
          <p>请使用微信扫描二维码支付 ¥{$amount}</p>
        </div>" : '';

        return <<<HTML
<!DOCTYPE html>
<html><head><meta charset="UTF-8"><title>{$title}</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Microsoft YaHei',sans-serif;background:#f5f5f5;display:flex;justify-content:center;align-items:center;min-height:100vh}
  .card{background:#fff;border-radius:12px;box-shadow:0 2px 12px rgba(0,0,0,.1);padding:40px;max-width:500px;width:90%;text-align:center}
  h2{margin-bottom:8px;color:#333} .order-no{color:#999;font-size:13px;margin-bottom:20px}
  .amount{font-size:36px;color:#e4393c;font-weight:bold;margin:20px 0}
  .btn{display:inline-block;padding:14px 40px;color:#fff;border-radius:6px;text-decoration:none;font-size:16px;margin:10px;cursor:pointer}
  .btn-alipay{background:#1677ff} .btn-alipay:hover{background:#0958d9}
  .wechat-section{margin:20px 0;padding:20px;border-top:1px solid #eee}
  .wechat-section h3{color:#07c160;margin-bottom:12px}
</style></head>
<body>
  <div class="card">
    <h2>{$title}</h2>
    <p class="order-no">订单号: {$orderNo}</p>
    <div class="amount">¥{$amount}</div>
    {$alipayBtn}
    {$wechatQr}
  </div>
</body></html>
HTML;
    }

    private static function nonceStr($length = 32)
    {
        $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        $str = '';
        for ($i = 0; $i < $length; $i++) { $str .= $chars[random_int(0, strlen($chars) - 1)]; }
        return $str;
    }

    private static function toXml($data)
    {
        $xml = '<xml>';
        foreach ($data as $k => $v) { $xml .= "<{$k}><![CDATA[{$v}]]></{$k}>"; }
        return $xml . '</xml>';
    }

    private static function fromXml($xml)
    {
        $data = [];
        $xml = @simplexml_load_string($xml, null, LIBXML_NOCDATA);
        if (!$xml) return $data;
        foreach ($xml as $k => $v) { $data[$k] = (string)$v; }
        return $data;
    }

    private static function curlPost($url, $body, $useCert = false, $timeout = 15)
    {
        $ch = curl_init($url);
        curl_setopt_array($ch, [
            CURLOPT_POST           => true,
            CURLOPT_POSTFIELDS     => $body,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT        => $timeout,
            CURLOPT_SSL_VERIFYPEER => false,
            CURLOPT_SSL_VERIFYHOST => false,
        ]);
        $response = curl_exec($ch);
        curl_close($ch);
        return $response;
    }

    public static function generateQrDataUri($url)
    {
        // 返回一个简单的数据 URI placeholder — 实际环境应使用 QR 库生成
        return 'data:image/svg+xml,' . rawurlencode(
            '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#fff"/>' .
            '<text x="100" y="100" text-anchor="middle" font-size="12" fill="#999">微信支付二维码</text>' .
            '<text x="100" y="120" text-anchor="middle" font-size="8" fill="#ccc">' . htmlspecialchars(substr($url, 0, 50)) . '</text></svg>'
        );
    }
}
