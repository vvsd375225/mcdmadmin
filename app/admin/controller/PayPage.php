<?php
namespace app\admin\controller;

use think\facade\Db;
use think\facade\Request;
use app\common\service\SiteApiClient;

class PayPage extends Base
{
    /**
     * 支付页面 GET /pay/page
     * 集成真实支付宝/微信支付 + 模拟支付兜底
     */
    public function page()
    {
        $orderId   = input('order_id', 0);
        $channel   = input('channel', 'alipay');
        $returnUrl = input('return_url', '');

        $order = Db::name('payment')->find($orderId);
        if (!$order) {
            return '<h2 style="text-align:center;margin-top:50px;">订单不存在</h2>';
        }
        if ($order['status'] == 1) {
            $url = htmlspecialchars($returnUrl);
            return '<h2 style="text-align:center;margin-top:50px;">订单已支付</h2><script>setTimeout(function(){ location.href="' . $url . '"; }, 2000);</script>';
        }

        $amountFormatted = number_format($order['amount'], 2);
        $orderNoSafe = htmlspecialchars($order['order_no']);
        $subjectSafe = htmlspecialchars($order['subject']);
        $returnUrlSafe = htmlspecialchars($returnUrl ?: '/');

        // 尝试真实支付
        $alipayUrl = '';
        $wechatQr = '';
        $isRealPay = false;

        try {
            if ($channel === 'alipay') {
                $result = \app\common\service\PaymentService::alipayPagePay(
                    $order['order_no'], $order['amount'], $order['subject'],
                    $returnUrl, 'https://www.mcdmadmin.cn/api/pay/notify/alipay'
                );
                $alipayUrl = $result['pay_url'];
                $isRealPay = true;
            } elseif ($channel === 'wechat') {
                $result = \app\common\service\PaymentService::wechatNativePay(
                    $order['order_no'], $order['amount'], $order['subject'],
                    'https://www.mcdmadmin.cn/api/pay/notify/wechat'
                );
                $wechatQr = $result['qr_code'];
                $isRealPay = true;
            }
        } catch (\Exception $e) {
            $isRealPay = false;
        }

        $channelName = $channel == 'wechat' ? '微信支付' : '支付宝';

        // 真实支付按钮区
        $payActionSection = '';
        if ($isRealPay && $alipayUrl) {
            $payActionSection = "<a href=\"" . htmlspecialchars($alipayUrl) . "\" class=\"btn-pay\">去支付宝支付 ¥{$amountFormatted}</a>";
        } elseif ($isRealPay && $wechatQr) {
            $payActionSection = "
            <div class=\"qr-section\">
              <img src=\"{$wechatQr}\" alt=\"微信扫码支付\" style=\"width:200px;height:200px;margin:10px auto;display:block\">
              <p style=\"color:#07c160;margin-bottom:12px\">请用微信扫一扫支付 ¥{$amountFormatted}</p>
            </div>";
        }

        // 模拟支付按钮（始终显示作为兜底）
        $simSection = '
        <form method="post" action="/pay/page" style="margin-top:12px">
            <input type="hidden" name="order_id" value="' . $orderId . '">
            <input type="hidden" name="return_url" value="' . $returnUrlSafe . '">
            <input type="hidden" name="action" value="pay">
            <button type="submit" class="btn-sim">模拟支付 (测试用)</button>
        </form>';

        $notice = $isRealPay
            ? '<p class="test-notice" style="background:#d4edda;color:#155724">已对接真实支付网关</p>'
            : '<p class="test-notice">测试模式：支付未配置，使用模拟支付。<br>配置支付宝/微信密钥后自动切换真实支付。</p>';

        $html = <<<HTML
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>支付页面 - McdmAdmin</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f5f5f5;display:flex;justify-content:center;align-items:center;min-height:100vh}
.pay-card{background:#fff;border-radius:12px;box-shadow:0 2px 20px rgba(0,0,0,.1);padding:40px;width:420px;text-align:center}
.pay-card h2{font-size:20px;color:#333;margin-bottom:8px}
.pay-card .order-no{color:#999;font-size:13px;margin-bottom:24px}
.pay-card .amount{font-size:36px;color:#e74c3c;font-weight:bold;margin-bottom:4px}
.pay-card .amount small{font-size:16px}
.pay-card .subject{color:#666;margin-bottom:30px}
.pay-card .channel-badge{display:inline-block;background:#1677ff;color:#fff;padding:4px 16px;border-radius:20px;font-size:13px;margin-bottom:24px}
.btn-pay{display:block;width:100%;padding:14px;background:#1677ff;color:#fff;border:none;border-radius:8px;font-size:16px;cursor:pointer;margin-bottom:12px;text-decoration:none}
.btn-pay:hover{background:#0958d9}
.btn-sim{display:block;width:100%;padding:10px;background:#fff;color:#999;border:1px dashed #ddd;border-radius:8px;font-size:13px;cursor:pointer}
.btn-return{display:block;width:100%;padding:10px;background:#fff;color:#666;border:1px solid #ddd;border-radius:8px;font-size:13px;cursor:pointer;text-decoration:none;text-align:center;margin-top:8px}
.test-notice{background:#fff3cd;padding:8px;border-radius:6px;font-size:12px;color:#856404;margin-top:16px}
.qr-section{padding:10px;border:1px solid #eee;border-radius:8px;margin:10px 0}
</style>
</head>
<body>
<div class="pay-card">
    <h2>McdmAdmin 支付中心</h2>
    <p class="order-no">订单号: {$orderNoSafe}</p>
    <div class="amount"><small>¥</small>{$amountFormatted}</div>
    <p class="subject">{$subjectSafe}</p>
    <span class="channel-badge">{$channelName}</span>
    {$payActionSection}
    {$simSection}
    <a href="{$returnUrlSafe}" class="btn-return">返回站点</a>
    {$notice}
</div>
</body>
</html>
HTML;
        return $html;
    }

    /**
     * 处理支付 POST /pay/page
     */
    public function processPay()
    {
        $this->completePayment(Request::post('order_id', 0), Request::post('return_url', ''), 'payment_page');
    }

    /**
     * 完成支付（供模拟支付和回调共用）
     */
    public static function completePayment($orderId, $returnUrl = '', $source = 'callback')
    {
        $order = Db::name('payment')->find($orderId);
        if (!$order || $order['status'] != 0) {
            return $returnUrl ? redirect($returnUrl) : redirect('/pay/result?order_id=' . $orderId);
        }

        $update = [
            'status'       => 1,
            'pay_time'     => time(),
            'update_time'  => time(),
            'callback_log' => $source === 'callback' ? '支付回调' : '模拟支付',
        ];
        if ($source !== 'callback') {
            $update['ali_trade_no'] = 'SIM' . date('YmdHis');
        }
        Db::name('payment')->where('id', $orderId)->update($update);

        // 调用用户站点
        if ($order['site_id']) {
            try {
                $client = new SiteApiClient($order['site_id']);
                $client->updatePayment($orderId, 1, time(), $order['order_no'] ?? '');
                if ($order['product_type'] == 'ai_tier') {
                    $site = Db::name('sites')->find($order['site_id']);
                    $client->genLicense($site['domain'], 365, $order['product_id'] ?: 'basic');
                    $client->pushAiProvider('', '', 'mcsw-pro', 8192);
                }
            } catch (\Exception $e) {}
        }

        return $returnUrl ? redirect($returnUrl) : redirect('/pay/result?order_id=' . $orderId);
    }

    /**
     * 支付结果页 GET /pay/result
     */
    public function result()
    {
        $orderId = input('order_id', 0);
        $order = Db::name('payment')->find($orderId);
        $status = $order['status'] ?? 0;
        $isSuccess = $status == 1;

        $orderNoSafe = htmlspecialchars($order['order_no'] ?? '-');
        $amountFormatted = number_format($order['amount'] ?? 0, 2);
        $icon = $isSuccess ? '&#x2705;' : '&#x274C;';
        $title = $isSuccess ? '支付成功' : ($status == 2 ? '已退款' : '待支付');
        $payTime = $isSuccess ? date('Y-m-d H:i:s', $order['pay_time'] ?? time()) : '';
        $extra = $isSuccess ? "<div>支付时间: {$payTime}</div>" : '';

        $html = <<<HTML
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>支付结果</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f5f5f5;display:flex;justify-content:center;align-items:center;min-height:100vh}
.card{background:#fff;border-radius:12px;box-shadow:0 2px 20px rgba(0,0,0,.1);padding:40px;width:420px;text-align:center}
.icon{font-size:64px;margin-bottom:16px}
h2{font-size:20px;color:#333;margin-bottom:8px}
.info{color:#666;font-size:14px;margin-bottom:24px;line-height:1.8}
.btn{display:inline-block;padding:12px 40px;background:#1677ff;color:#fff;border-radius:8px;text-decoration:none;font-size:14px}
</style>
</head>
<body>
<div class="card">
    <div class="icon">{$icon}</div>
    <h2>{$title}</h2>
    <div class="info">
        <div>订单号: {$orderNoSafe}</div>
        <div>金额: ¥{$amountFormatted}</div>
        {$extra}
    </div>
    <a href="/" class="btn">返回首页</a>
</div>
</body>
</html>
HTML;
        return $html;
    }
}
