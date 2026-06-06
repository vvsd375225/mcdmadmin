<?php
namespace app\api\controller;

use think\facade\Db;
use think\facade\Request;

class Plugins extends Base
{
    private function ensureReviewsTable()
    {
        $exists = Db::query("SHOW TABLES LIKE 'swift_plugin_reviews'");
        if (empty($exists)) {
            Db::execute("CREATE TABLE IF NOT EXISTS `swift_plugin_reviews` (
              `id` int unsigned NOT NULL AUTO_INCREMENT,
              `plugin_id` int unsigned NOT NULL COMMENT '插件ID',
              `site_id` int unsigned NOT NULL COMMENT '站点ID',
              `user_name` varchar(64) DEFAULT '' COMMENT '用户名',
              `rating` tinyint(1) NOT NULL DEFAULT 5 COMMENT '评分1-5',
              `content` text COMMENT '评价内容',
              `status` tinyint(1) NOT NULL DEFAULT 1 COMMENT '0=隐藏 1=显示',
              `created_at` datetime DEFAULT NULL,
              PRIMARY KEY (`id`),
              KEY `idx_plugin` (`plugin_id`),
              KEY `idx_site` (`site_id`)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='插件评价'");
        }
    }

    /**
     * 插件目录 GET /api/plugins
     */
    public function index()
    {
        $page     = (int)input('page', 1);
        $limit    = (int)input('limit', 12);
        $category = input('category', '');
        $keyword  = input('keyword', '');
        $sort     = input('sort', 'newest'); // newest / popular / price

        $map = [['status', '=', 1]];
        if ($category && $category !== 'all') { $map[] = ['category', '=', $category]; }
        if ($keyword) { $map[] = ['title|name|tags', 'like', "%{$keyword}%"]; }

        $orderMap = ['newest' => 'id desc', 'popular' => 'download_count desc', 'price' => 'price asc'];
        $order = $orderMap[$sort] ?? 'id desc';

        $list = Db::name('plugins')->where($map)->order($order)->page($page, $limit)->select()->toArray();
        foreach ($list as &$v) {
            unset($v['files'], $v['install_sql'], $v['uninstall_sql']);
            $v['category_name'] = Db::name('plugin_categories')->where('slug', $v['category'])->value('name') ?: $v['category'];
            $v['is_free'] = (float)$v['price'] == 0;
        }

        $total = Db::name('plugins')->where($map)->count();

        // 分类列表（含计数）
        $cats = Db::name('plugin_categories')->where('status', 1)->order('sort asc')->select()->toArray();
        foreach ($cats as &$c) {
            $c['count'] = Db::name('plugins')->where('status', 1)->where('category', $c['slug'])->count();
        }

        return $this->success(['list' => $list, 'total' => $total, 'categories' => $cats]);
    }

    /**
     * 插件详情 GET /api/plugins/:id
     */
    public function detail($id)
    {
        $p = Db::name('plugins')->find($id);
        if (!$p || $p['status'] != 1) { return $this->error('插件不存在或已下架'); }
        unset($p['files'], $p['install_sql'], $p['uninstall_sql']);
        $p['category_name'] = Db::name('plugin_categories')->where('slug', $p['category'])->value('name') ?: $p['category'];
        $p['is_free'] = (float)$p['price'] == 0;

        // 加载评价
        $this->ensureReviewsTable();
        $reviews = Db::name('plugin_reviews')
            ->where('plugin_id', $id)->where('status', 1)
            ->order('id desc')->limit(10)->select()->toArray();
        $p['reviews'] = $reviews;
        $p['review_count'] = Db::name('plugin_reviews')->where('plugin_id', $id)->where('status', 1)->count();

        return $this->success($p);
    }

    /**
     * 提交评价 POST /api/plugins/:id/reviews
     */
    public function submitReview($pluginId)
    {
        $this->ensureReviewsTable();
        $p = Db::name('plugins')->find($pluginId);
        if (!$p || $p['status'] != 1) { return $this->error('插件不存在'); }

        $ct = Request::header('Content-Type') ?: '';
        if (strpos($ct, 'application/json') !== false) {
            $raw = file_get_contents('php://input');
            $data = json_decode($raw, true) ?: [];
        } else {
            $data = Request::post();
        }

        $rating = (int)($data['rating'] ?? 5);
        $rating = max(1, min(5, $rating));
        $content = $data['content'] ?? '';
        $userName = $data['user_name'] ?? '';
        $siteId = (int)($data['site_id'] ?? 0);

        if (empty($content)) { return $this->error('请填写评价内容'); }

        Db::name('plugin_reviews')->insert([
            'plugin_id' => $pluginId,
            'site_id'   => $siteId,
            'user_name' => $userName,
            'rating'    => $rating,
            'content'   => $content,
            'status'    => 1,
            'created_at'=> date('Y-m-d H:i:s'),
        ]);

        // 更新插件评分
        $avg = Db::name('plugin_reviews')->where('plugin_id', $pluginId)->where('status', 1)->avg('rating');
        $count = Db::name('plugin_reviews')->where('plugin_id', $pluginId)->where('status', 1)->count();
        Db::name('plugins')->where('id', $pluginId)->update([
            'rating' => round($avg ?? 5, 1),
            'review_count' => $count,
        ]);

        return $this->success(null, '评价提交成功');
    }

    /**
     * 获取评价列表 GET /api/plugins/:id/reviews
     */
    public function reviews($pluginId)
    {
        $this->ensureReviewsTable();
        $page = (int)input('page', 1);
        $limit = (int)input('limit', 10);
        $list = Db::name('plugin_reviews')
            ->where('plugin_id', $pluginId)->where('status', 1)
            ->order('id desc')->page($page, $limit)->select()->toArray();
        $total = Db::name('plugin_reviews')->where('plugin_id', $pluginId)->where('status', 1)->count();
        return $this->success(['list' => $list, 'total' => $total]);
    }

    /**
     * 下载插件包 GET /api/plugins/:id/download
     * 返回文件列表(base64) + install.sql / uninstall.sql
     */
    public function download($id)
    {
        $p = Db::name('plugins')->find($id);
        if (!$p || $p['status'] != 1) { return $this->error('插件不存在或已下架'); }

        $files = json_decode($p['files'], true) ?: [];

        Db::name('plugins')->where('id', $id)->inc('download_count', 1)->update();

        return $this->success([
            'name'         => $p['name'],
            'title'        => $p['title'],
            'version'      => $p['version'],
            'files'        => $files,
            'install_sql'  => $p['install_sql'] ?? '',
            'uninstall_sql'=> $p['uninstall_sql'] ?? '',
            'depends'      => json_decode($p['depends'] ?? '[]', true) ?: [],
        ]);
    }
}
