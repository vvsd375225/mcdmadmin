<?php
namespace app\admin\controller;

use app\common\service\AiService;
use think\facade\Db;
use think\facade\Request;

class Ai extends Base
{
    /**
     * 获取 AI 状态（不暴露供应商细节）
     */
    public function trial()
    {
        AiService::saveActivation([
            'license' => 'TRIAL', 'domain' => $_SERVER['HTTP_HOST'] ?? 'localhost',
            'expiry' => strtotime('+1 day'), 'tier' => 'free', 'tier_name' => '免费体验',
            'activated_at' => time(), 'user_id' => $this->adminId,
        ], $this->adminId);
        return $this->success([], '试用已激活');
    }

    public function config()
    {
        $activated = AiService::isActivated($this->adminId);
        $info = AiService::getActivationInfo($this->adminId);
        $isTrial = !$activated;
        $trialQuota = $isTrial ? AiService::getTrialQuotaInfo() : null;

        $quota = $activated ? AiService::getQuotaInfo($this->adminId) : $trialQuota;

        return $this->success([
            'activated'    => $activated,
            'is_trial'     => $isTrial,
            'tier'         => $info['tier'] ?? 'trial',
            'tier_name'    => $isTrial ? '免费体验' : ($quota['tier_name'] ?? '免费版'),
            'expiry'       => $info['expiry'] ?? null,
            'expiry_at'    => $info ? date('Y-m-d', $info['expiry']) : null,
            'domain'       => $info['domain'] ?? null,
            'brand'        => '码创软件开发工作室',
            'has_provider' => AiService::hasProvider(),
            'quota'        => $quota,
            'tiers'        => AiService::getTiers(),
            'has_master'   => AiService::getMasterKey() !== null,
        ]);
    }

    /**
     * 激活 License（自动注入供应商配置）
     */
    public function activate()
    {
        $licenseKey = $this->getJsonInput('license', '');
        if (!$licenseKey) {
            return $this->error('请输入License密钥');
        }

        $result = AiService::validateLicense($licenseKey);
        if (!$result['valid']) {
            return $this->error($result['msg']);
        }

        AiService::saveActivation([
            'license'      => $licenseKey,
            'domain'       => $result['domain'],
            'expiry'       => $result['expiry'],
            'tier'         => $result['tier'],
            'tier_name'    => $result['name'],
            'activated_at' => time(),
        ], $this->adminId);

        // 自动注入供应商配置（用户无感）
        $autoConfigured = AiService::autoConfigProvider($result['tier']);

        return $this->success([
            'expiry'        => $result['expiry'],
            'expiry_at'     => date('Y-m-d', $result['expiry']),
            'tier'          => $result['tier'],
            'tier_name'     => $result['name'],
            'auto_configured' => $autoConfigured,
        ], $result['msg']);
    }

    /**
     * AI 对话
     */
    public function chat()
    {
        if (!AiService::canUseAi()) {
            return $this->error("[!] 体验额度已用完 — 今日免费额度已耗尽，明天0点自动重置\n   购买 License 解除限制 → 联系码创软件开发工作室");
        }

        $isTrial = !AiService::isActivated($this->adminId);

        if (!$isTrial && !AiService::hasProvider()) {
            return $this->error('[!] 系统未就绪 — 请联系管理员配置AI服务');
        }

        if ($isTrial && !AiService::getMasterKey()) {
            return $this->error('[!] 系统未就绪 — 请联系管理员配置AI服务');
        }

        $messages = $this->getJsonInput('messages', []);
        $mode = $this->getJsonInput('mode', 'chat');

        if (empty($messages)) {
            return $this->error('请输入消息');
        }

        $result = AiService::chat($messages, $mode, $this->adminId);

        if (isset($result['error'])) {
            return $this->error($result['error']);
        }

        return $this->success([
            'reply' => $result['reply'],
            'quota' => $result['quota'] ?? null,
        ]);
    }

    /**
     * 配置主密钥（仅管理员，加密存储，对用户不可见）
     */
    public function setupProvider()
    {
        $apiUrl = $this->getJsonInput('api_url', '');
        $apiKey = $this->getJsonInput('api_key', '');

        if (!$apiUrl || !$apiKey) {
            return $this->error('接口地址和API密钥不能为空');
        }

        AiService::saveMasterKey($apiUrl, $apiKey);

        // 如果已激活，自动更新供应商配置
        if (AiService::isActivated($this->adminId)) {
            $info = AiService::getActivationInfo($this->adminId);
            AiService::autoConfigProvider($info['tier'] ?? 'basic');
        }

        return $this->success([], '主密钥已加密保存，用户将自动调用');
    }

    /**
     * 保存AI生成的代码到 aisc 目录
     */
    public function savefile()
    {
        $path = $this->getJsonInput('path', '');
        $content = $this->getJsonInput('content', '');

        if (!$path || !$content) {
            return $this->error('path和content不能为空');
        }

        // 安全检查：禁止路径穿越
        if (strpos($path, '..') !== false || strpos($path, '~') !== false) {
            return $this->error('非法路径');
        }

        $fullPath = AiService::saveGeneratedFile($path, $content);
        return $this->success(['path' => $path, 'full_path' => $fullPath], '文件已保存');
    }

    /**
     * 获取 aisc 目录文件列表
     */
    public function listfiles()
    {
        $files = AiService::listGeneratedFiles();
        return $this->success(['files' => $files, 'count' => count($files)]);
    }

    /**
     * 生成 License 并自动激活（总后台推送用）
     */
    public function genLicense()
    {
        $domain = $this->getJsonInput('domain', $_SERVER['HTTP_HOST'] ?? 'localhost');
        $days = $this->getJsonInput('days', '365');
        $tier = $this->getJsonInput('tier', 'basic');
        $key = AiService::generateLicense($domain, intval($days), $tier);

        // 购买后自动激活
        $result = AiService::validateLicense($key);
        if ($result['valid']) {
            AiService::saveActivation([
                'license'      => $key,
                'domain'       => $result['domain'],
                'expiry'       => $result['expiry'],
                'tier'         => $result['tier'],
                'tier_name'    => $result['name'],
                'activated_at' => time(),
            ], $this->adminId);
        }

        return $this->success(['license' => $key, 'domain' => $domain, 'expiry_days' => intval($days), 'tier' => $tier]);
    }

    /**
     * 创建 AI 套餐订单
     */
    public function order()
    {
        $tier     = $this->getJsonInput('tier', 'basic');
        $channel  = $this->getJsonInput('channel', 'alipay');
        $memberId = intval($this->getJsonInput('member_id', 0));
        $tiers = AiService::getTiers();
        if (!isset($tiers[$tier])) return $this->error('无效套餐');
        $tierInfo = $tiers[$tier];
        $price    = floatval($tierInfo['price'] ?? 0);

        $orderNo   = 'AI' . date('YmdHis') . rand(1000, 9999);
        $userId    = $memberId ?: $this->adminId;
        $userTable = $memberId ? 'user' : 'admin';

        // 防止重复购买
        $exists = Db::name('member_subscription')->where('user_id', $userId)->where('level_name', $tierInfo['name'] ?? $tier)->where('status', 'active')->find();
        if ($exists) return $this->error('你已购买过此套餐，不能重复购买');

        // 余额支付
        if ($channel === 'balance') {
            $user = Db::name($userTable)->where('id', $userId)->find();
            $balance = floatval($user['balance'] ?? 0);
            if ($balance < $price && $price > 0) {
                return $this->error('余额不足，当前 ¥' . number_format($balance, 2) . '，需 ¥' . number_format($price, 2));
            }
            $newBalance = round($balance - $price, 2);
            Db::name($userTable)->where('id', $userId)->update(['balance' => $newBalance]);
            Db::name('payment')->insert([
                'order_no' => $orderNo, 'subject' => 'McdmAdmin AI ' . $tierInfo['name'],
                'amount' => $price, 'channel' => 'balance', 'status' => 2, 'create_time' => time(),
            ]);
            Db::name('member_transaction')->insert([
                'user_id' => $this->adminId, 'type' => 'consume', 'amount' => -$price,
                'balance_after' => $newBalance, 'order_no' => $orderNo,
                'remark' => '购买 ' . $tierInfo['name'], 'create_time' => time(),
            ]);
            AiService::saveActivation([
                'license' => 'BALANCE-' . $orderNo, 'domain' => $_SERVER['HTTP_HOST'] ?? 'localhost',
                'expiry' => strtotime('+1 month'), 'tier' => $tier, 'tier_name' => $tierInfo['name'],
                'activated_at' => time(), 'user_id' => $userId,
            ], $userId);

            // 创建订阅记录
            Db::name('member_subscription')->insert([
                'user_id' => $userId, 'level_id' => $userId,
                'level_name' => $tierInfo['name'], 'amount' => $price,
                'period' => 'month', 'order_no' => $orderNo,
                'status' => 'active', 'pay_time' => time(),
                'expire_time' => strtotime('+1 month'), 'create_time' => time(),
            ]);
            // 同步更新会员等级到 swift_user
            if ($memberId) {
                Db::name('user')->where('id', $userId)->update([
                    'level_expire' => strtotime('+1 month'),
                ]);
            }
            return $this->success(['order_no' => $orderNo, 'amount' => $price, 'balance' => $newBalance, 'tier_name' => $tierInfo['name']], '购买成功，AI已激活');
        }

        // 外部支付
        Db::name('payment')->insert([
            'order_no' => $orderNo, 'subject' => 'McdmAdmin AI ' . $tierInfo['name'],
            'amount' => $price, 'channel' => $channel, 'status' => 0, 'create_time' => time(),
        ]);
        return $this->success(['order_no' => $orderNo, 'amount' => $price, 'tier' => $tier], '订单已创建');
    }

    /**
     * 总后台注入 AI 供应商配置
     */
    public function providerConfig()
    {
        $data = $this->getJsonInput();
        if (empty($data['api_url']) || empty($data['api_key'])) {
            return $this->error('api_url 和 api_key 不能为空');
        }
        AiService::saveProviderConfig([
            'api_url'    => $data['api_url'],
            'api_key'    => $data['api_key'],
            'model'      => $data['model'] ?? 'mcsw-plus',
            'max_tokens' => $data['max_tokens'] ?? 4096,
        ]);
        return $this->success([], 'AI供应商配置已保存');
    }

    /**
     * 总后台推送 AI 全局设置
     */
    public function saveSettings()
    {
        $data = $this->getJsonInput();
        $file = app()->getRootPath() . 'runtime' . DIRECTORY_SEPARATOR . 'ai_settings.json';
        $dir = dirname($file);
        if (!is_dir($dir)) mkdir($dir, 0755, true);
        file_put_contents($file, json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));
        return $this->success([], 'AI全局设置已保存');
    }

    /**
     * 读取 AI 全局设置
     */
    public function getSettings()
    {
        $file = app()->getRootPath() . 'runtime' . DIRECTORY_SEPARATOR . 'ai_settings.json';
        if (!file_exists($file)) {
            return $this->success(['settings' => new \stdClass()]);
        }
        $data = json_decode(file_get_contents($file), true);
        return $this->success(['settings' => $data]);
    }
}
