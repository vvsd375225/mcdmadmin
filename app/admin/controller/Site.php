<?php
namespace app\admin\controller;

use think\facade\Db;
use think\facade\Request;

class Site extends Base
{
    protected $table = 'sites';
    private static $cipher = 'AES-256-CBC';

    private static function getSecret()
    {
        return env('app.master_secret', 'mcdmadmin_master_secret_2026');
    }

    private static function encrypt($plaintext)
    {
        $key = hash('sha256', self::getSecret(), true);
        $iv = openssl_random_pseudo_bytes(16);
        $encrypted = openssl_encrypt($plaintext, self::$cipher, $key, OPENSSL_RAW_DATA, $iv);
        return base64_encode($iv . $encrypted);
    }

    private static function decrypt($ciphertext)
    {
        $key = hash('sha256', self::getSecret(), true);
        $data = base64_decode($ciphertext);
        $iv = substr($data, 0, 16);
        $encrypted = substr($data, 16);
        return openssl_decrypt($encrypted, self::$cipher, $key, OPENSSL_RAW_DATA, $iv);
    }

    public function index()
    {
        $page = (int)input('page', 1);
        $limit = (int)input('limit', 10);
        $map = [];
        if ($status = input('status', '')) { $map[] = ['status', '=', $status]; }
        if ($keyword = input('keyword', '')) {
            $map[] = ['name|domain', 'like', "%{$keyword}%"];
        }
        $list = Db::name($this->table)->where($map)->order('id desc')->page($page, $limit)->select()->toArray();
        foreach ($list as &$v) {
            unset($v['admin_pass']);
            $v['created_at'] = $v['created_at'] ?? '';
            $v['updated_at'] = $v['updated_at'] ?? '';
        }
        $total = Db::name($this->table)->where($map)->count();
        return $this->success(['list' => $list, 'total' => $total]);
    }

    public function detail($id)
    {
        $s = Db::name($this->table)->find($id);
        if (!$s) { return $this->error('站点不存在'); }
        unset($s['admin_pass'], $s['api_token']);
        return $this->success($s);
    }

    public function save()
    {
        $input = $this->getJsonInput();
        $data = [];
        foreach (['name', 'domain', 'admin_user', 'admin_pass', 'contact_name', 'contact_phone'] as $f) {
            if (isset($input[$f])) { $data[$f] = $input[$f]; }
        }
        if (empty($data['name']) || empty($data['domain']) || empty($data['admin_user']) || empty($data['admin_pass'])) {
            return $this->error('请填写站点名称、域名、管理员用户名和密码');
        }
        $exists = Db::name($this->table)->where('domain', $data['domain'])->find();
        if ($exists) { return $this->error('该域名已存在'); }
        $data['admin_pass'] = self::encrypt($data['admin_pass']);
        $data['status'] = 1;
        $data['created_at'] = date('Y-m-d H:i:s');
        $data['updated_at'] = date('Y-m-d H:i:s');
        $siteId = Db::name($this->table)->insertGetId($data);

        // 新站点自动推送配置
        try {
            $client = new \app\common\service\SiteApiClient($siteId);
            $s = $client->getSite();

            // AI 配置
            $masterKey = \app\common\service\AiService::getMasterKey();
            if ($masterKey) {
                $mk = json_decode($masterKey, true);
                $client->setupProvider($mk['api_url'] ?? '', $mk['api_key'] ?? '');
                $client->pushAiSettings(
                    json_encode(\app\common\service\AiService::getTiers(), JSON_UNESCAPED_UNICODE),
                    json_encode(self::getAiContact(), JSON_UNESCAPED_UNICODE),
                    intval(\think\facade\Db::name('config')->where('name', 'ai_trial_limit')->value('value') ?: 10)
                );
            }

            // 支付配置
            $payCfg = \think\facade\Db::name('config')->where('group', 'payment')->column('value', 'name');
            if (!empty($payCfg)) {
                $client->pushPayConfig($payCfg);
            }

            // 30天免费License
            $client->genLicense($s['domain'], 30, 'free');
        } catch (\Exception $e) {
            // 推送失败不影响站点创建
        }

        return $this->success(['site_id' => $siteId], '站点添加成功，配置已自动推送');
    }

    public function update()
    {
        $input = $this->getJsonInput();
        $id = $input['id'] ?? null;
        if (!$id) { return $this->error('缺少站点ID'); }
        $site = Db::name($this->table)->find($id);
        if (!$site) { return $this->error('站点不存在'); }

        $update = [];
        foreach (['name', 'domain', 'admin_user', 'contact_name', 'contact_phone'] as $f) {
            if (isset($input[$f]) && $input[$f] !== '') { $update[$f] = $input[$f]; }
        }

        if (!empty($update['domain'])) {
            $dup = Db::name($this->table)->where('domain', $update['domain'])->where('id', '<>', $id)->find();
            if ($dup) { return $this->error('该域名已被其他站点使用'); }
        }

        if (!empty($input['admin_pass'])) {
            $update['admin_pass'] = self::encrypt($input['admin_pass']);
        }

        if (!empty($update)) {
            $update['updated_at'] = date('Y-m-d H:i:s');
            Db::name($this->table)->where('id', $id)->update($update);
        }
        return $this->success(null, '站点更新成功');
    }

    public function delete($id)
    {
        $site = Db::name($this->table)->find($id);
        if (!$site) { return $this->error('站点不存在'); }
        Db::name($this->table)->where('id', $id)->delete();
        return $this->success(null, '删除成功');
    }

    public function toggle($id)
    {
        $site = Db::name($this->table)->find($id);
        if (!$site) { return $this->error('站点不存在'); }
        $newStatus = $site['status'] == 1 ? 0 : 1;
        Db::name($this->table)->where('id', $id)->update([
            'status' => $newStatus,
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        return $this->success(['status' => $newStatus], $newStatus ? '站点已启用' : '站点已禁用');
    }

    /**
     * 批量推送配置到选中站点
     */
    public function batchPush()
    {
        $input = $this->getJsonInput();
        $siteIds   = $input['site_ids'] ?? [];
        $pushTypes = $input['push_types'] ?? []; // ai_config, pay_config, license

        if (empty($siteIds)) { return $this->error('请选择目标站点'); }

        $success = [];
        $failed  = [];

        foreach ($siteIds as $siteId) {
            try {
                $client = new \app\common\service\SiteApiClient($siteId);
                $s = $client->getSite();

                if (in_array('ai_config', $pushTypes)) {
                    $masterKey = \app\common\service\AiService::getMasterKey();
                    if ($masterKey) {
                        $mk = json_decode($masterKey, true);
                        $client->setupProvider($mk['api_url'] ?? '', $mk['api_key'] ?? '');
                        $client->pushAiSettings(
                    json_encode(\app\common\service\AiService::getTiers(), JSON_UNESCAPED_UNICODE),
                    json_encode(self::getAiContact(), JSON_UNESCAPED_UNICODE),
                    intval(\think\facade\Db::name('config')->where('name', 'ai_trial_limit')->value('value') ?: 10)
                );
                    }
                }

                if (in_array('pay_config', $pushTypes)) {
                    $payCfg = \think\facade\Db::name('config')->where('group', 'payment')->column('value', 'name');
                    $client->pushPayConfig($payCfg);
                }

                if (in_array('license', $pushTypes)) {
                    $client->genLicense($s['domain'], 30, 'free');
                }

                $success[] = $siteId;
            } catch (\Exception $e) {
                $failed[] = ['site_id' => $siteId, 'error' => $e->getMessage()];
            }
        }

        return $this->success([
            'success' => $success,
            'failed'  => $failed,
        ], "推送完成: 成功" . count($success) . ", 失败" . count($failed));
    }

    /**
     * 批量推送配置页面 GET /admin/site/batch-push-page
     */
    public function batchPushPage()
    {
        $sites = Db::name('sites')->where('status', 1)->field('id,name,domain,contact_name,updated_at')->order('id desc')->select()->toArray();

        $rows = '';
        foreach ($sites as $s) {
            $name = htmlspecialchars($s['name']);
            $domain = htmlspecialchars($s['domain']);
            $contact = htmlspecialchars($s['contact_name'] ?: '-');
            $rows .= <<<ROW
            <tr>
                <td><input type="checkbox" class="site-cb" value="{$s['id']}" data-name="{$name}"></td>
                <td>{$s['id']}</td>
                <td>{$name}</td>
                <td>{$domain}</td>
                <td>{$contact}</td>
            </tr>
            ROW;
        }

        $totalCount = count($sites);
        $html = <<<HTML
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>批量推送配置</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f0f2f5;padding:20px}
.card{background:#fff;border-radius:8px;box-shadow:0 1px 4px rgba(0,0,0,.08);padding:24px;max-width:1100px;margin:0 auto}
h2{font-size:18px;color:#1a1a2e;margin-bottom:4px}
.sub{color:#999;font-size:13px;margin-bottom:20px}
.toolbar{display:flex;gap:12px;align-items:center;margin-bottom:16px;flex-wrap:wrap}
.btn{border:none;padding:8px 20px;border-radius:6px;font-size:13px;cursor:pointer;transition:.2s}
.btn-default{background:#fff;color:#333;border:1px solid #d9d9d9}
.btn-default:hover{border-color:#1677ff;color:#1677ff}
.btn-primary{background:#1677ff;color:#fff}
.btn-primary:hover{background:#0958d9}
.btn-success{background:#52c41a;color:#fff}
.btn-success:hover{background:#73d13d}
.btn-danger{background:#ff4d4f;color:#fff}
.btn-danger:hover{background:#ff7875}
table{width:100%;border-collapse:collapse;font-size:13px}
th,td{padding:10px 12px;text-align:left;border-bottom:1px solid #f0f0f0}
th{background:#fafafa;color:#666;font-weight:500}
tr:hover td{background:#fafafa}
.check-group{display:flex;gap:16px;align-items:center;flex-wrap:wrap;margin-bottom:16px}
.check-group label{display:flex;align-items:center;gap:5px;font-size:13px;cursor:pointer;color:#333}
.result{display:none;margin-top:16px;padding:12px 16px;border-radius:6px;font-size:13px}
.result.success{background:#f6ffed;border:1px solid #b7eb8f;color:#389e0d}
.result.error{background:#fff2f0;border:1px solid #ffccc7;color:#cf1322}
.result.partial{background:#fffbe6;border:1px solid #ffe58f;color:#d48806}
.empty{text-align:center;padding:40px;color:#999}
</style>
</head>
<body>
<div class="card">
    <h2>批量推送配置</h2>
    <p class="sub">共 <strong>{$totalCount}</strong> 个启用站点，选择目标站点和推送内容后执行</p>

    <div class="toolbar">
        <button class="btn btn-default" onclick="selectAll()">全选</button>
        <button class="btn btn-default" onclick="deselectAll()">取消全选</button>
        <span style="color:#999;font-size:12px" id="selected-count">已选 0 个站点</span>
    </div>

    <div class="check-group">
        <label><input type="checkbox" class="push-cb" value="ai_config" checked> AI 配置（密钥+套餐+联系方式）</label>
        <label><input type="checkbox" class="push-cb" value="pay_config" checked> 支付配置（网关+渠道）</label>
        <label><input type="checkbox" class="push-cb" value="license"> License（30天免费试用）</label>
    </div>

    <table>
    <thead><tr><th style="width:40px"><input type="checkbox" id="select-all-cb" onclick="toggleAll(this)"></th><th>ID</th><th>站点名称</th><th>域名</th><th>联系人</th></tr></thead>
    <tbody>{$rows}</tbody>
    </table>

    <div style="margin-top:16px">
        <button class="btn btn-primary" onclick="doPush()" id="btn-push" style="padding:10px 32px;font-size:14px">执行推送</button>
        <span id="push-status" style="margin-left:12px;color:#1677ff;font-size:13px;display:none">推送中...</span>
    </div>
    <div id="result" class="result"></div>
</div>

<script>
const token = localStorage.getItem('admin_token') || '';

function updateCount() {
    const n = document.querySelectorAll('.site-cb:checked').length;
    document.getElementById('selected-count').textContent = '已选 ' + n + ' 个站点';
}
document.querySelectorAll('.site-cb').forEach(cb => cb.addEventListener('change', updateCount));

function selectAll() { document.querySelectorAll('.site-cb').forEach(c => { c.checked = true; }); updateCount(); }
function deselectAll() { document.querySelectorAll('.site-cb').forEach(c => { c.checked = false; }); updateCount(); }
function toggleAll(el) {
    document.querySelectorAll('.site-cb').forEach(c => { c.checked = el.checked; });
    updateCount();
}

async function doPush() {
    const siteIds = Array.from(document.querySelectorAll('.site-cb:checked')).map(c => c.value);
    if (siteIds.length === 0) { alert('请选择至少一个站点'); return; }

    const pushTypes = Array.from(document.querySelectorAll('.push-cb:checked')).map(c => c.value);
    if (pushTypes.length === 0) { alert('请选择至少一种推送类型'); return; }

    const btn = document.getElementById('btn-push');
    const status = document.getElementById('push-status');
    const resultDiv = document.getElementById('result');

    btn.disabled = true;
    status.style.display = 'inline';

    try {
        const resp = await fetch('/admin/site/batch-push', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
            body: JSON.stringify({ site_ids: siteIds, push_types: pushTypes })
        });
        const data = await resp.json();

        resultDiv.style.display = 'block';
        if (data.code === 0 || data.code === 200) {
            const d = data.data || {};
            const succ = d.success || [];
            const fail = d.failed || [];
            if (fail.length === 0) {
                resultDiv.className = 'result success';
                resultDiv.innerHTML = '全部推送成功！站点ID: ' + succ.join(', ');
            } else if (succ.length === 0) {
                resultDiv.className = 'result error';
                resultDiv.innerHTML = '全部推送失败<br>' + fail.map(f => '站点 ' + f.site_id + ': ' + f.error).join('<br>');
            } else {
                resultDiv.className = 'result partial';
                resultDiv.innerHTML = '部分成功: 成功 ' + succ.join(', ') + '<br>失败: ' + fail.map(f => '站点 ' + f.site_id + ': ' + f.error).join('<br>');
            }
        } else {
            resultDiv.className = 'result error';
            resultDiv.textContent = '推送失败: ' + (data.msg || '未知错误');
        }
    } catch (e) {
        resultDiv.style.display = 'block';
        resultDiv.className = 'result error';
        resultDiv.textContent = '网络错误: ' + e.message;
    } finally {
        btn.disabled = false;
        status.style.display = 'none';
    }
}
</script>
</body>
</html>
HTML;
        return $html;
    }

    /**
     * 获取 AI 联系方式设置
     */
    public static function getAiContact()
    {
        $cfg = \think\facade\Db::name('config')->where('group', 'ai')->column('value', 'name');
        return [
            'email'      => $cfg['ai_contact_email'] ?? 'support@mcsw.dev',
            'wechat'     => $cfg['ai_contact_wechat'] ?? 'mcsw2025',
            'qqgroup'    => $cfg['ai_contact_qqgroup'] ?? '123456789',
            'notice'     => $cfg['ai_contact_notice'] ?? '请联系客服获取激活码',
            'pay_notice' => $cfg['ai_contact_pay_notice'] ?? '',
        ];
    }
}
