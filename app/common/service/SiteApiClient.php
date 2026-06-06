<?php
namespace app\common\service;

use think\facade\Db;

class SiteApiClient
{
    private $siteId;
    private $site;
    private $maxRetries = 3;
    private static $cipher = 'AES-256-CBC';

    public function __construct($siteId)
    {
        $this->siteId = $siteId;
        $this->site = Db::name('sites')->find($siteId);
        if (!$this->site) {
            throw new \Exception("站点不存在: id={$siteId}");
        }
    }

    // ─── 加解密（与 Site.php 一致）─────────────────

    private static function getSecret()
    {
        return env('app.master_secret', 'mcdmadmin_master_secret_2026');
    }

    public static function encrypt($plaintext)
    {
        $key = hash('sha256', self::getSecret(), true);
        $iv = openssl_random_pseudo_bytes(16);
        $encrypted = openssl_encrypt($plaintext, self::$cipher, $key, OPENSSL_RAW_DATA, $iv);
        return base64_encode($iv . $encrypted);
    }

    public static function decrypt($ciphertext)
    {
        $key = hash('sha256', self::getSecret(), true);
        $data = base64_decode($ciphertext);
        $iv = substr($data, 0, 16);
        $encrypted = substr($data, 16);
        return openssl_decrypt($encrypted, self::$cipher, $key, OPENSSL_RAW_DATA, $iv);
    }

    // ─── Token 管理 ─────────────────────────────

    public function getToken()
    {
        // 重新从 DB 读取最新数据
        $this->site = Db::name('sites')->find($this->siteId);

        $token = $this->site['api_token'] ?? null;
        $expire = $this->site['token_expire'] ?? 0;

        // Token 有效（距离过期 > 1小时）
        if ($token && $expire && ($expire - time()) > 3600) {
            return $token;
        }

        // 重新登录获取 Token
        $password = self::decrypt($this->site['admin_pass']);
        $domain = rtrim($this->site['domain'], '/');

        $ch = curl_init($domain . '/admin/auth/login');
        curl_setopt_array($ch, [
            CURLOPT_POST           => true,
            CURLOPT_POSTFIELDS     => json_encode(['username' => $this->site['admin_user'], 'password' => $password]),
            CURLOPT_HTTPHEADER     => ['Content-Type: application/json'],
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT        => 15,
            CURLOPT_SSL_VERIFYPEER => false,
            CURLOPT_SSL_VERIFYHOST => false,
        ]);

        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $error = curl_error($ch);
        curl_close($ch);

        if ($error) {
            throw new \Exception("登录站点 {$domain} 失败: {$error}");
        }

        $data = json_decode($response, true);
        if ($httpCode !== 200 || !isset($data['code']) || $data['code'] != 0 || empty($data['data']['token'])) {
            $msg = $data['msg'] ?? "HTTP {$httpCode}";
            throw new \Exception("登录站点 {$domain} 获取Token失败: {$msg}");
        }

        $newToken = $data['data']['token'];
        $newExpire = time() + 86400;

        Db::name('sites')->where('id', $this->siteId)->update([
            'api_token' => $newToken,
            'token_expire' => $newExpire,
        ]);

        $this->site['api_token'] = $newToken;
        $this->site['token_expire'] = $newExpire;

        return $newToken;
    }

    // ─── 底层 HTTP 调用 ──────────────────────────

    private function call($method, $path, $body = null, $retry = 0)
    {
        $startTime = microtime(true);
        $domain = rtrim($this->site['domain'], '/');
        $url = $domain . $path;
        $token = $this->getToken();
        $bodyJson = $body ? json_encode($body, JSON_UNESCAPED_UNICODE) : null;

        $ch = curl_init($url);
        $headers = [
            'Content-Type: application/json',
            'Authorization: Bearer ' . $token,
        ];

        curl_setopt_array($ch, [
            CURLOPT_CUSTOMREQUEST  => strtoupper($method),
            CURLOPT_POSTFIELDS     => $bodyJson,
            CURLOPT_HTTPHEADER     => $headers,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT        => 30,
            CURLOPT_SSL_VERIFYPEER => false,
            CURLOPT_SSL_VERIFYHOST => false,
        ]);

        $response = curl_exec($ch);
        $httpStatus = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $error = curl_error($ch);
        curl_close($ch);

        $durationMs = intval((microtime(true) - $startTime) * 1000);
        $responseData = json_decode($response, true);
        $responseCode = $responseData['code'] ?? null;

        // 记录日志
        $this->log($method, $path, $bodyJson, $responseCode, $response, $httpStatus, $durationMs, $error);

        // 401 → 清除 Token → 重试
        if ($httpStatus === 401 && $retry < $this->maxRetries) {
            Db::name('sites')->where('id', $this->siteId)->update(['api_token' => null, 'token_expire' => null]);
            $this->site['api_token'] = null;
            $this->site['token_expire'] = null;
            return $this->call($method, $path, $body, $retry + 1);
        }

        if ($error) {
            return ['code' => -1, 'msg' => "请求失败: {$error}", 'data' => null];
        }

        return $responseData ?: ['code' => -1, 'msg' => "HTTP {$httpStatus}", 'data' => null];
    }

    // ─── API 日志 ────────────────────────────────

    private function log($method, $path, $requestBody, $responseCode, $responseBody, $httpStatus, $durationMs, $error)
    {
        try {
            Db::name('api_logs')->insert([
                'site_id'       => $this->siteId,
                'method'        => strtoupper($method),
                'path'          => $path,
                'request_body'  => $requestBody ?: '',
                'response_code' => $responseCode,
                'response_body' => is_string($responseBody) ? $responseBody : json_encode($responseBody, JSON_UNESCAPED_UNICODE),
                'http_status'   => $httpStatus,
                'duration_ms'   => $durationMs,
                'error'         => $error ?: '',
                'created_at'    => date('Y-m-d H:i:s'),
            ]);
        } catch (\Throwable $e) {
            // 日志写入失败不影响主流程
        }
    }

    // ─── AI 相关便捷方法 ─────────────────────────

    public function pushAiProvider($apiUrl, $apiKey, $model, $maxTokens = 8192)
    {
        return $this->call('POST', '/admin/ai/provider-config', [
            'api_url'    => $apiUrl,
            'api_key'    => $apiKey,
            'model'      => $model,
            'max_tokens' => $maxTokens,
        ]);
    }

    public function genLicense($domain, $days, $tier)
    {
        return $this->call('POST', '/admin/ai/genlicense', [
            'domain' => $domain,
            'days'   => $days,
            'tier'   => $tier,
        ]);
    }

    public function setupProvider($apiUrl, $apiKey)
    {
        return $this->call('POST', '/admin/ai/setupprovider', [
            'api_url' => $apiUrl,
            'api_key' => $apiKey,
        ]);
    }

    public function pushAiSettings($tiers, $contact, $trialLimit = 10)
    {
        return $this->call('POST', '/admin/ai/settings', [
            'tiers'       => $tiers,
            'contact'     => $contact,
            'trial_limit' => $trialLimit,
        ]);
    }

    public function getAiConfig()
    {
        return $this->call('GET', '/admin/ai/config');
    }

    public function saveFile($path, $content)
    {
        return $this->call('POST', '/admin/ai/savefile', [
            'path'    => $path,
            'content' => $content,
        ]);
    }

    // ─── 支付相关 ────────────────────────────────

    public function pushPayConfig($config)
    {
        return $this->call('POST', '/admin/payment/config', $config);
    }

    public function getPayConfig()
    {
        return $this->call('GET', '/admin/payment/config');
    }

    public function updatePayment($id, $status, $payTime = null, $orderNo = '')
    {
        return $this->call('PUT', '/admin/payment/update', [
            'id'       => $id,
            'order_no' => $orderNo,
            'status'   => $status,
            'pay_time' => $payTime ?: time(),
        ]);
    }

    public function refundPayment($id)
    {
        return $this->call('POST', '/admin/payment/refund/' . $id);
    }

    public function getPaymentSummary()
    {
        return $this->call('GET', '/admin/payment/summary');
    }

    public function getPaymentList($page = 1, $limit = 50)
    {
        return $this->call('GET', "/admin/payment/index?page={$page}&limit={$limit}");
    }

    // ─── 模块相关 ────────────────────────────────

    public function installModule($name)
    {
        return $this->call('POST', '/admin/module/install', ['name' => $name]);
    }

    public function uninstallModule($name)
    {
        return $this->call('POST', '/admin/module/uninstall', ['name' => $name]);
    }

    public function enableModule($name)
    {
        return $this->call('POST', '/admin/module/enable', ['name' => $name]);
    }

    public function disableModule($name)
    {
        return $this->call('POST', '/admin/module/disable', ['name' => $name]);
    }

    public function getModuleList()
    {
        return $this->call('GET', '/admin/module/index');
    }

    // ─── 通用 ────────────────────────────────────

    public function getSite()
    {
        return $this->site;
    }
}
