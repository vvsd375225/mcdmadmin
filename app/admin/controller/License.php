<?php
namespace app\admin\controller;

use think\facade\Db;
use think\facade\Request;
use app\common\service\SiteApiClient;

class License extends Base
{
    protected $table = 'ai_licenses';

    private static $tierTokens = [
        'free'       => 100000,
        'basic'      => 1000000,
        'pro'        => 5000000,
        'enterprise' => 50000000,
    ];

    private static $tierNames = [
        'free'       => '免费版',
        'basic'      => '基础版',
        'pro'        => '专业版',
        'enterprise' => '企业版',
    ];

    private static $tierModels = [
        'free'       => ['model' => 'mcsw-lite', 'max_tokens' => 2000],
        'basic'      => ['model' => 'mcsw-plus', 'max_tokens' => 4096],
        'pro'        => ['model' => 'mcsw-pro', 'max_tokens' => 8192],
        'enterprise' => ['model' => 'mcsw-max', 'max_tokens' => 16384],
    ];

    public function index()
    {
        $page = (int)input('page', 1);
        $limit = (int)input('limit', 10);
        $map = [];
        if ($siteId = input('site_id', '')) { $map[] = ['site_id', '=', $siteId]; }
        if ($status = input('status', '')) { $map[] = ['status', '=', $status]; }
        if ($tier = input('tier', '')) { $map[] = ['tier', '=', $tier]; }

        $list = Db::name($this->table)->where($map)->order('id desc')->page($page, $limit)->select()->toArray();
        foreach ($list as &$v) {
            $site = Db::name('sites')->find($v['site_id']);
            $v['site_name'] = $site['name'] ?? '';
            $v['site_domain'] = $site['domain'] ?? '';
            $v['tier_name'] = self::$tierNames[$v['tier']] ?? $v['tier'];
            $v['activated_at'] = $v['activated_at'] ?? '';
            $v['expired_at'] = $v['expired_at'] ?? '';
            $v['created_at'] = $v['created_at'] ?? '';
            $v['updated_at'] = $v['updated_at'] ?? '';
        }
        $total = Db::name($this->table)->where($map)->count();
        return $this->success(['list' => $list, 'total' => $total]);
    }

    public function detail($id)
    {
        $l = Db::name($this->table)->find($id);
        if (!$l) { return $this->error('License不存在'); }
        $site = Db::name('sites')->find($l['site_id']);
        $l['site_name'] = $site['name'] ?? '';
        $l['site_domain'] = $site['domain'] ?? '';
        $l['tier_name'] = self::$tierNames[$l['tier']] ?? $l['tier'];
        return $this->success($l);
    }

    /**
     * 生成 License 并推送到用户站点
     */
    public function generate()
    {
        $data = $this->getJsonInput();
        if (empty($data['site_id']) || empty($data['tier']) || empty($data['days'])) {
            return $this->error('请选择站点、等级和有效天数');
        }

        $site = Db::name('sites')->find($data['site_id']);
        if (!$site) { return $this->error('站点不存在'); }
        if ($site['status'] != 1) { return $this->error('站点已禁用'); }

        $tier = $data['tier'];
        $days = (int)$data['days'];
        $domain = !empty($data['domain']) ? $data['domain'] : $site['domain'];

        try {
            $client = new SiteApiClient($data['site_id']);
            $result = $client->genLicense($domain, $days, $tier);

            if ($result['code'] != 0 || empty($result['data']['license'])) {
                return $this->error('生成License失败: ' . ($result['msg'] ?? '未知错误'));
            }

            $licenseKey = $result['data']['license'];

            Db::name($this->table)->insert([
                'site_id'        => $data['site_id'],
                'license_key'    => $licenseKey,
                'tier'           => $tier,
                'domain'         => $domain,
                'tokens_monthly' => self::$tierTokens[$tier] ?? 1000000,
                'activated_at'   => date('Y-m-d H:i:s'),
                'expired_at'     => date('Y-m-d H:i:s', time() + $days * 86400),
                'status'         => 1,
                'created_at'     => date('Y-m-d H:i:s'),
                'updated_at'     => date('Y-m-d H:i:s'),
            ]);

            return $this->success($result['data'], 'License生成成功');
        } catch (\Exception $e) {
            return $this->error('生成License异常: ' . $e->getMessage());
        }
    }

    /**
     * 续费：延长到期时间
     */
    public function renew()
    {
        $input = $this->getJsonInput();
        $id = $input['id'] ?? null;
        $days = (int)($input['days'] ?? 365);
        $license = Db::name($this->table)->find($id);
        if (!$license) { return $this->error('License不存在'); }

        $newExpiry = date('Y-m-d H:i:s', max(strtotime($license['expired_at']), time()) + $days * 86400);

        Db::name($this->table)->where('id', $id)->update([
            'expired_at'  => $newExpiry,
            'status'      => 1,
            'renew_count' => $license['renew_count'] + 1,
            'updated_at'  => date('Y-m-d H:i:s'),
        ]);

        // 推送新的 License 到用户站点
        try {
            $client = new SiteApiClient($license['site_id']);
            $client->genLicense($license['domain'], $days, $license['tier']);
        } catch (\Exception $e) {}

        return $this->success(['expired_at' => $newExpiry], '续费成功');
    }

    /**
     * 升级/降级等级，自动推送新供应商配置
     */
    public function changeTier()
    {
        $input = $this->getJsonInput();
        $id = $input['id'] ?? null;
        $newTier = $input['tier'] ?? '';
        if (!isset(self::$tierNames[$newTier])) {
            return $this->error('无效的等级');
        }

        $license = Db::name($this->table)->find($id);
        if (!$license) { return $this->error('License不存在'); }

        if ($license['tier'] === $newTier) {
            return $this->error('等级未变化');
        }

        Db::name($this->table)->where('id', $id)->update([
            'tier'           => $newTier,
            'tokens_monthly' => self::$tierTokens[$newTier],
            'updated_at'     => date('Y-m-d H:i:s'),
        ]);

        // 推送新配置到用户站点
        try {
            $client = new SiteApiClient($license['site_id']);
            $modelConfig = self::$tierModels[$newTier];
            $client->pushAiProvider('', '', $modelConfig['model'], $modelConfig['max_tokens']);
        } catch (\Exception $e) {}

        return $this->success(['tier' => $newTier, 'tier_name' => self::$tierNames[$newTier]], '等级变更成功');
    }

    /**
     * 撤销 License
     */
    public function revoke($id)
    {
        $license = Db::name($this->table)->find($id);
        if (!$license) { return $this->error('License不存在'); }

        Db::name($this->table)->where('id', $id)->update([
            'status'     => 0,
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        return $this->success(null, 'License已撤销');
    }

    public function delete($id)
    {
        $license = Db::name($this->table)->find($id);
        if (!$license) { return $this->error('License不存在'); }
        Db::name($this->table)->where('id', $id)->delete();
        return $this->success(null, '删除成功');
    }

    /**
     * 返回可用的站点列表（供前端下拉选择）
     */
    public function sites()
    {
        $sites = Db::name('sites')->where('status', 1)->field('id, name, domain')->select()->toArray();
        return $this->success($sites);
    }

    /**
     * 返回等级选项
     */
    public function tierOptions()
    {
        $options = [];
        foreach (self::$tierNames as $key => $name) {
            $options[] = [
                'value' => $key,
                'label' => $name,
                'tokens' => self::$tierTokens[$key] ?? 0,
            ];
        }
        return $this->success($options);
    }
}
