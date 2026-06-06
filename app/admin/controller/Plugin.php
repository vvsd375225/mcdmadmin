<?php
namespace app\admin\controller;

use think\facade\Db;
use think\facade\Request;
use app\common\service\SiteApiClient;

class Plugin extends Base
{
    protected $table = 'plugins';

    public function index()
    {
        $page = (int)input('page', 1);
        $limit = (int)input('limit', 10);
        $map = [];
        if ($category = input('category', '')) { $map[] = ['category', '=', $category]; }
        if ($status = input('status', '')) { $map[] = ['status', '=', $status]; }
        if ($keyword = input('keyword', '')) { $map[] = ['title|name', 'like', "%{$keyword}%"]; }

        $list = Db::name($this->table)->where($map)->order('id desc')->page($page, $limit)->select()->toArray();
        foreach ($list as &$v) {
            $v['created_at'] = $v['created_at'] ?? '';
            $v['updated_at'] = $v['updated_at'] ?? '';
        }
        $total = Db::name($this->table)->where($map)->count();
        return $this->success(['list' => $list, 'total' => $total]);
    }

    public function detail($id)
    {
        $p = Db::name($this->table)->find($id);
        return $p ? $this->success($p) : $this->error('插件不存在');
    }

    public function save()
    {
        $input = $this->getJsonInput();
        $data = [];
        foreach (['name', 'title', 'version', 'description', 'excerpt', 'author', 'cover', 'category', 'price', 'depends', 'requires', 'tags', 'files', 'install_sql', 'uninstall_sql', 'changelog'] as $f) {
            if (isset($input[$f])) { $data[$f] = $input[$f]; }
        }
        if (empty($data['name']) || empty($data['title'])) { return $this->error('请填写插件标识和名称'); }
        if (Db::name($this->table)->where('name', $data['name'])->find()) {
            // 同名插件已存在（可能由 upload 自动入库），转为更新
            $data['updated_at'] = date('Y-m-d H:i:s');
            Db::name($this->table)->where('name', $data['name'])->update($data);
            return $this->success(null, '插件已更新');
        }
        $data['status'] = 1;
        $data['created_at'] = date('Y-m-d H:i:s');
        $data['updated_at'] = date('Y-m-d H:i:s');
        Db::name($this->table)->insert($data);
        return $this->success(null, '插件添加成功');
    }

    public function update()
    {
        $input = $this->getJsonInput();
        $id = $input['id'] ?? null;
        if (!$id) { return $this->error('缺少插件ID'); }
        $p = Db::name($this->table)->find($id);
        if (!$p) { return $this->error('插件不存在'); }
        $update = [];
        foreach (['title', 'version', 'description', 'excerpt', 'author', 'cover', 'category', 'price', 'depends', 'requires', 'tags', 'files', 'install_sql', 'uninstall_sql', 'changelog', 'is_recommended'] as $f) {
            if (array_key_exists($f, $input)) { $update[$f] = $input[$f]; }
        }
        if (!empty($update)) {
            $update['updated_at'] = date('Y-m-d H:i:s');
            Db::name($this->table)->where('id', $id)->update($update);
        }
        return $this->success(null, '插件更新成功');
    }

    public function delete($id)
    {
        Db::name($this->table)->where('id', $id)->delete();
        return $this->success(null, '删除成功');
    }

    public function toggle($id)
    {
        $p = Db::name($this->table)->find($id);
        if (!$p) { return $this->error('插件不存在'); }
        $ns = $p['status'] == 1 ? 0 : 1;
        Db::name($this->table)->where('id', $id)->update(['status' => $ns, 'updated_at' => date('Y-m-d H:i:s')]);
        return $this->success(['status' => $ns], $ns ? '已上架' : '已下架');
    }

    /**
     * 上传插件包 → 解析 manifest.json → 自动填充表单
     */
    public function upload()
    {
        $file = request()->file('file');
        if (!$file) { return $this->error('请上传插件包'); }

        $ext = strtolower(pathinfo($file->getOriginalName(), PATHINFO_EXTENSION));
        if ($ext !== 'zip') { return $this->error('仅支持 .zip 格式的插件包'); }

        $tmpDir = app()->getRuntimePath() . 'plugin_upload_' . uniqid();
        try {
            $zip = new \ZipArchive();
            if ($zip->open($file->getPathname()) !== true) {
                return $this->error('无法打开压缩包');
            }
            mkdir($tmpDir, 0755, true);
            $zip->extractTo($tmpDir);
            $zip->close();

            // 查找 manifest.json
            $manifestPath = $this->findFile($tmpDir, 'manifest.json');
            if (!$manifestPath) { return $this->error('插件包中未找到 manifest.json'); }

            $manifest = json_decode(file_get_contents($manifestPath), true);
            if (!$manifest) { return $this->error('manifest.json 格式错误'); }

            // 提取字段
            $data = [
                'name'         => $manifest['name'] ?? '',
                'title'        => $manifest['title'] ?? '',
                'version'      => $manifest['version'] ?? '1.0.0',
                'description'  => $manifest['description'] ?? '',
                'excerpt'      => $manifest['excerpt'] ?? '',
                'author'       => $manifest['author'] ?? '',
                'cover'        => $manifest['cover'] ?? '',
                'category'     => $manifest['category'] ?? 'uncategorized',
                'price'        => $manifest['price'] ?? 0,
                'depends'      => isset($manifest['depends']) ? json_encode($manifest['depends'], JSON_UNESCAPED_UNICODE) : null,
                'requires'     => isset($manifest['requires']) ? json_encode($manifest['requires'], JSON_UNESCAPED_UNICODE) : null,
                'tags'         => isset($manifest['tags']) ? (is_array($manifest['tags']) ? implode(',', $manifest['tags']) : $manifest['tags']) : '',
                'changelog'    => isset($manifest['changelog']) ? json_encode($manifest['changelog'], JSON_UNESCAPED_UNICODE) : null,
            ];

            // 构建文件列表 (相对路径 => base64内容)
            $files = [];
            $moduleDir = $this->findModuleDir($tmpDir);
            $baseDir = $moduleDir ?: $tmpDir;
            $this->collectFiles($baseDir, $baseDir, $files);

            // 读取 install.sql / uninstall.sql
            $installSql = '';
            $uninstallSql = '';
            if ($moduleDir) {
                $is = $moduleDir . '/install.sql';
                $us = $moduleDir . '/uninstall.sql';
                if (file_exists($is)) { $installSql = file_get_contents($is); }
                if (file_exists($us)) { $uninstallSql = file_get_contents($us); }
            }

            $data['files'] = json_encode($files, JSON_UNESCAPED_UNICODE);
            $data['install_sql'] = $installSql;
            $data['uninstall_sql'] = $uninstallSql;

            // 同名插件 → 更新；新插件 → 入库
            $exists = Db::name($this->table)->where('name', $data['name'])->find();
            if ($exists) {
                $data['status'] = $exists['status'];
                $data['updated_at'] = date('Y-m-d H:i:s');
                Db::name($this->table)->where('id', $exists['id'])->update($data);
                $data['id'] = $exists['id'];
                return $this->success($data, '插件包已更新');
            }

            $data['status'] = 1;
            $data['created_at'] = date('Y-m-d H:i:s');
            $data['updated_at'] = date('Y-m-d H:i:s');
            $data['id'] = Db::name($this->table)->insertGetId($data);
            return $this->success($data, '插件包已上传并添加');
        } catch (\Exception $e) {
            return $this->error('解析失败: ' . $e->getMessage());
        } finally {
            $this->rmDir($tmpDir);
        }
    }

    private function findFile($dir, $name)
    {
        $it = new \RecursiveIteratorIterator(new \RecursiveDirectoryIterator($dir, \RecursiveDirectoryIterator::SKIP_DOTS));
        foreach ($it as $f) {
            if ($f->getFilename() === $name) return $f->getPathname();
        }
        return null;
    }

    private function findModuleDir($dir)
    {
        // 查找包含 manifest.json 的子目录（通常为插件名/）
        $it = new \RecursiveIteratorIterator(new \RecursiveDirectoryIterator($dir, \RecursiveDirectoryIterator::SKIP_DOTS));
        foreach ($it as $f) {
            if ($f->getFilename() === 'manifest.json') {
                return dirname($f->getPathname());
            }
        }
        return null;
    }

    private function collectFiles($dir, $baseDir, &$files)
    {
        $it = new \RecursiveIteratorIterator(new \RecursiveDirectoryIterator($dir, \RecursiveDirectoryIterator::SKIP_DOTS));
        foreach ($it as $f) {
            if (!$f->isFile()) continue;
            $relPath = str_replace('\\', '/', substr($f->getPathname(), strlen($baseDir) + 1));
            // 跳过根目录的 install.sql / uninstall.sql (已单独处理)
            if (in_array($relPath, ['install.sql', 'uninstall.sql'])) continue;
            $files[$relPath] = base64_encode(file_get_contents($f->getPathname()));
        }
    }

    private function rmDir($dir)
    {
        if (!is_dir($dir)) return;
        $it = new \RecursiveIteratorIterator(new \RecursiveDirectoryIterator($dir, \RecursiveDirectoryIterator::SKIP_DOTS), \RecursiveIteratorIterator::CHILD_FIRST);
        foreach ($it as $f) {
            $f->isDir() ? rmdir($f->getPathname()) : unlink($f->getPathname());
        }
        rmdir($dir);
    }

    /**
     * 一键分发：选站点 → 推送文件 + 安装模块
     */
    public function distribute()
    {
        $pluginId = $this->getJsonInput('plugin_id');
        $siteIds  = $this->getJsonInput('site_ids', []);
        if (empty($pluginId) || empty($siteIds)) { return $this->error('请选择插件和目标站点'); }

        $plugin = Db::name($this->table)->find($pluginId);
        if (!$plugin) { return $this->error('插件不存在'); }

        $files = json_decode($plugin['files'], true) ?: [];
        $success = [];
        $failed  = [];

        foreach ($siteIds as $siteId) {
            try {
                $client = new SiteApiClient($siteId);
                // 写入所有文件
                foreach ($files as $path => $content) {
                    $client->saveFile($path, $content);
                }
                // 执行安装
                $client->installModule($plugin['name']);

                Db::name('plugin_orders')->insert([
                    'site_id'         => $siteId,
                    'plugin_id'       => $pluginId,
                    'plugin_name'     => $plugin['name'],
                    'plugin_version'  => $plugin['version'],
                    'amount'          => 0,
                    'installed'       => 1,
                    'installed_at'    => date('Y-m-d H:i:s'),
                    'created_at'      => date('Y-m-d H:i:s'),
                ]);
                $success[] = $siteId;
            } catch (\Exception $e) {
                $failed[] = ['site_id' => $siteId, 'error' => $e->getMessage()];
            }
        }

        if (!empty($success)) {
            Db::name($this->table)->where('id', $pluginId)->inc('download_count', count($success))->update();
        }

        return $this->success([
            'success' => $success,
            'failed'  => $failed,
        ], "分发完成: 成功" . count($success) . ", 失败" . count($failed));
    }

    // ─── 分类管理 ────────────────────────────────

    public function categories()
    {
        $list = Db::name('plugin_categories')->order('sort asc')->select()->toArray();
        return $this->success($list);
    }

    public function saveCategory()
    {
        $input = $this->getJsonInput();
        $data = [];
        foreach (['name', 'slug', 'description', 'sort'] as $f) {
            if (isset($input[$f])) { $data[$f] = $input[$f]; }
        }
        if (empty($data['name']) || empty($data['slug'])) { return $this->error('请填写名称和标识'); }
        $data['created_at'] = date('Y-m-d H:i:s');
        Db::name('plugin_categories')->insert($data);
        return $this->success(null, '分类添加成功');
    }

    public function updateCategory()
    {
        $input = $this->getJsonInput();
        $id = $input['id'] ?? null;
        if (!$id) { return $this->error('缺少分类ID'); }
        $update = [];
        foreach (['name', 'slug', 'description', 'sort'] as $f) {
            if (array_key_exists($f, $input)) { $update[$f] = $input[$f]; }
        }
        if (!empty($update)) { Db::name('plugin_categories')->where('id', $id)->update($update); }
        return $this->success(null, '分类更新成功');
    }

    public function deleteCategory($id)
    {
        Db::name('plugin_categories')->where('id', $id)->delete();
        return $this->success(null, '分类删除成功');
    }

    // ─── 购买记录 ────────────────────────────────

    public function orders()
    {
        $page = (int)input('page', 1);
        $limit = (int)input('limit', 10);
        $list = Db::name('plugin_orders')->alias('o')
            ->join('sites s', 'o.site_id = s.id', 'left')
            ->field('o.*, s.name as site_name')
            ->order('o.id desc')->page($page, $limit)->select()->toArray();
        $total = Db::name('plugin_orders')->count();
        return $this->success(['list' => $list, 'total' => $total]);
    }

    // ─── 评价管理 ────────────────────────────────

    public function reviews($pluginId)
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
        $page = (int)input('page', 1);
        $limit = (int)input('limit', 10);
        $list = Db::name('plugin_reviews')
            ->where('plugin_id', $pluginId)
            ->order('id desc')->page($page, $limit)->select()->toArray();
        foreach ($list as &$v) {
            $v['created_at'] = $v['created_at'] ?? '';
        }
        $total = Db::name('plugin_reviews')->where('plugin_id', $pluginId)->count();
        return $this->success(['list' => $list, 'total' => $total]);
    }

    public function toggleReview($id)
    {
        $exists = Db::query("SHOW TABLES LIKE 'swift_plugin_reviews'");
        if (empty($exists)) { return $this->error('评价表不存在'); }
        $r = Db::name('plugin_reviews')->find($id);
        if (!$r) { return $this->error('评价不存在'); }
        $ns = $r['status'] == 1 ? 0 : 1;
        Db::name('plugin_reviews')->where('id', $id)->update(['status' => $ns]);
        return $this->success(['status' => $ns], $ns ? '已显示' : '已隐藏');
    }

    public function deleteReview($id)
    {
        $exists = Db::query("SHOW TABLES LIKE 'swift_plugin_reviews'");
        if (empty($exists)) { return $this->error('评价表不存在'); }
        $r = Db::name('plugin_reviews')->find($id);
        if (!$r) { return $this->error('评价不存在'); }
        Db::name('plugin_reviews')->where('id', $id)->delete();
        // 重算评分
        $pid = $r['plugin_id'];
        $avg = Db::name('plugin_reviews')->where('plugin_id', $pid)->where('status', 1)->avg('rating');
        $count = Db::name('plugin_reviews')->where('plugin_id', $pid)->where('status', 1)->count();
        Db::name('plugins')->where('id', $pid)->update([
            'rating' => round($avg ?? 0, 1),
            'review_count' => $count,
        ]);
        return $this->success(null, '评价已删除');
    }
}
