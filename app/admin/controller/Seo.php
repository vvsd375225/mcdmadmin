<?php
namespace app\admin\controller;

use app\common\service\SitemapService;
use app\common\service\BaiduPushService;
use think\facade\Db;
use think\facade\Request;

class Seo extends Base
{
    public function config()
    {
        $list = Db::name('config')
            ->where('group', 'seo')
            ->select()
            ->toArray();

        $data = [];
        foreach ($list as $item) {
            $data[$item['name']] = $item['value'];
        }

        return $this->success($data);
    }

    public function saveConfig()
    {
        $data = Request::post();
        foreach ($data as $key => $value) {
            if (in_array($key, ['baidu_site', 'baidu_token', 'baidu_enabled'])) {
                $exists = Db::name('config')->where('name', $key)->find();
                if ($exists) {
                    Db::name('config')->where('name', $key)->update([
                        'value' => $value,
                        'update_time' => time(),
                    ]);
                } else {
                    Db::name('config')->insert([
                        'name' => $key,
                        'group' => 'seo',
                        'value' => $value,
                        'type' => 'string',
                        'description' => '',
                        'create_time' => time(),
                    ]);
                }
            }
        }

        return $this->success([], '保存成功');
    }

    public function pushLogs()
    {
        $page = (int) Request::param('page', 1);
        $limit = (int) Request::param('limit', 15);

        $list = Db::name('seo_push_log')
            ->order('id', 'desc')
            ->page($page, $limit)
            ->select()
            ->toArray();

        $total = Db::name('seo_push_log')->count();

        return $this->success(['list' => $list, 'total' => $total]);
    }

    public function generateSitemap()
    {
        $result = SitemapService::generate();
        return $this->success($result, "Sitemap已生成，包含 {$result['url_count']} 个URL");
    }

    public function pushBaidu()
    {
        $result = BaiduPushService::pushRecent(100);
        return $this->success($result, $result['message']);
    }

    public function pushUrl()
    {
        $url = Request::post('url', '');
        if (empty($url)) {
            return $this->error('URL不能为空');
        }

        $result = BaiduPushService::pushUrls([$url]);
        if ($result['success'] > 0) {
            return $this->success($result, '推送成功');
        }
        return $this->error($result['message']);
    }
}
