<?php
namespace app\admin\controller;

use think\facade\Db;
use think\facade\Request;

class Module extends Base
{
    private $modulesPath;
    private $registryFile;

    public function __construct(\think\App $app)
    {
        parent::__construct($app);
        $this->modulesPath = app()->getRootPath() . 'modules' . DIRECTORY_SEPARATOR;
        $this->registryFile = app()->getRootPath() . 'runtime' . DIRECTORY_SEPARATOR . 'modules.json';
    }

    /**
     * 列出所有模块
     */
    public function index()
    {
        $installed = $this->getRegistry();
        $modules = [];

        if (is_dir($this->modulesPath)) {
            $dirs = scandir($this->modulesPath);
            foreach ($dirs as $dir) {
                if ($dir === '.' || $dir === '..') continue;
                $manifestPath = $this->modulesPath . $dir . DIRECTORY_SEPARATOR . 'manifest.json';
                if (!file_exists($manifestPath)) continue;

                $manifest = json_decode(file_get_contents($manifestPath), true);
                if (!$manifest) continue;

                $status = isset($installed[$dir]) ? $installed[$dir]['status'] : 0;
                $modules[] = [
                    'name'        => $dir,
                    'title'       => $manifest['title'] ?? $dir,
                    'version'     => $manifest['version'] ?? '1.0.0',
                    'description' => $manifest['description'] ?? '',
                    'author'      => $manifest['author'] ?? '',
                    'depends'     => $manifest['depends'] ?? [],
                    'status'      => $status,
                    'installed'   => isset($installed[$dir]),
                ];
            }
        }

        return $this->success(['list' => $modules]);
    }

    /**
     * 安装模块
     */
    public function install()
    {
        $name = Request::post('name', '');
        if (!$name) return $this->error('请指定模块名');

        $manifestPath = $this->modulesPath . $name . DIRECTORY_SEPARATOR . 'manifest.json';
        if (!file_exists($manifestPath)) {
            return $this->error('模块不存在: ' . $name);
        }

        $registry = $this->getRegistry();
        if (isset($registry[$name])) {
            return $this->error('模块已安装');
        }

        $manifest = json_decode(file_get_contents($manifestPath), true);

        if (!empty($manifest['depends'])) {
            foreach ($manifest['depends'] as $dep) {
                if (!isset($registry[$dep])) {
                    return $this->error("缺少依赖模块: {$dep}");
                }
            }
        }

        $sqlPath = $this->modulesPath . $name . DIRECTORY_SEPARATOR . 'install.sql';
        if (file_exists($sqlPath)) {
            try {
                $sql = file_get_contents($sqlPath);
                Db::execute($sql);
            } catch (\Exception $e) {
                return $this->error('安装SQL执行失败: ' . $e->getMessage());
            }
        }

        $registry[$name] = [
            'version'      => $manifest['version'] ?? '1.0.0',
            'status'       => 1,
            'install_time' => time(),
        ];
        $this->saveRegistry($registry);

        // 创建菜单
        $this->createMenuForModule($name, $manifest);

        return $this->success([], '模块安装成功');
    }

    /**
     * 卸载模块
     */
    public function uninstall()
    {
        $name = Request::post('name', '');
        if (!$name) return $this->error('请指定模块名');

        $registry = $this->getRegistry();
        if (!isset($registry[$name])) {
            return $this->error('模块未安装');
        }

        $sqlPath = $this->modulesPath . $name . DIRECTORY_SEPARATOR . 'uninstall.sql';
        if (file_exists($sqlPath)) {
            try {
                Db::execute(file_get_contents($sqlPath));
            } catch (\Exception $e) {}
        }

        // 删除菜单
        $this->removeMenuForModule($name);

        unset($registry[$name]);
        $this->saveRegistry($registry);

        return $this->success([], '模块已卸载');
    }

    /**
     * 启用模块
     */
    public function enable()
    {
        $name = Request::post('name', '');
        if (!$name) return $this->error('请指定模块名');

        $registry = $this->getRegistry();
        if (!isset($registry[$name])) {
            return $this->error('模块未安装');
        }
        $registry[$name]['status'] = 1;
        $this->saveRegistry($registry);

        // 恢复菜单
        Db::name('menu')->where('name', 'like', 'module_' . $name . '%')->update(['status' => 1]);

        return $this->success([], '模块已启用');
    }

    /**
     * 禁用模块
     */
    public function disable()
    {
        $name = Request::post('name', '');
        if (!$name) return $this->error('请指定模块名');

        $registry = $this->getRegistry();
        if (!isset($registry[$name])) {
            return $this->error('模块未安装');
        }
        $registry[$name]['status'] = 0;
        $this->saveRegistry($registry);

        // 隐藏菜单
        Db::name('menu')->where('name', 'like', 'module_' . $name . '%')->update(['status' => 0]);

        return $this->success([], '模块已禁用');
    }

    /**
     * 创建模块菜单
     */
    private function createMenuForModule($name, $manifest)
    {
        $menuConfig = $manifest['menu'] ?? null;
        if (!$menuConfig) return;

        $menus = isset($menuConfig[0]) ? $menuConfig : [$menuConfig];
        foreach ($menus as $index => $m) {
            $menuName = 'module_' . $name . ($index > 0 ? '_' . ($m['name'] ?? $index) : '');
            $menuTitle = $m['title'] ?? ($manifest['title'] ?? $name);
            $menuIcon  = $m['icon'] ?? 'CubeOutline';
            $menuPath  = $m['path'] ?? '/module/' . $name;
            $menuSort  = $m['sort'] ?? (50 + $index);

            // 检查是否已存在
            $exists = Db::name('menu')->where('name', $menuName)->find();
            if ($exists) continue;

            $data = [
                'name'       => $menuName,
                'title'      => $menuTitle,
                'icon'       => $menuIcon,
                'path'       => $menuPath,
                'component'  => $m['component'] ?? '',
                'parent_id'  => $m['parent_id'] ?? 0,
                'type'       => 1,
                'status'     => 1,
                'sort'       => $menuSort,
                'create_time' => time(),
                'update_time' => time(),
            ];
            Db::name('menu')->insert($data);
        }
    }

    /**
     * 删除模块菜单
     */
    private function removeMenuForModule($name)
    {
        Db::name('menu')->where('name', 'like', 'module_' . $name . '%')->delete();
    }

    /**
     * 扫描 aisc 目录中待安装的模块
     */
    public function scanAisc()
    {
        $aiscPath = app()->getRootPath() . 'aisc' . DIRECTORY_SEPARATOR . 'modules' . DIRECTORY_SEPARATOR;
        if (!is_dir($aiscPath)) {
            return $this->success(['list' => []]);
        }

        $registry = $this->getRegistry();
        $modules = [];
        $dirs = scandir($aiscPath);
        foreach ($dirs as $dir) {
            if ($dir === '.' || $dir === '..') continue;
            $manifestPath = $aiscPath . $dir . DIRECTORY_SEPARATOR . 'manifest.json';
            if (!file_exists($manifestPath)) continue;

            $manifest = json_decode(file_get_contents($manifestPath), true);
            if (!$manifest) continue;

            $alreadyInstalled = isset($registry[$dir]);
            $modules[] = [
                'name'        => $dir,
                'title'       => $manifest['title'] ?? $dir,
                'version'     => $manifest['version'] ?? '1.0.0',
                'description' => $manifest['description'] ?? '',
                'author'      => $manifest['author'] ?? '',
                'installed'   => $alreadyInstalled,
            ];
        }

        return $this->success(['list' => $modules]);
    }

    /**
     * 一键安装：从 aisc 复制模块到 modules 目录并安装
     */
    /**
     * 支付成功后由总后台调用，安装已购买的市场模块
     */
    public function purchaseinstall()
    {
        $name = Request::post('name', '');
        if (!$name) return $this->error('请指定模块名');

        // 从官网市场下载模块包
        $marketUrl = 'https://www.mcdmadmin.cn/api/plugins/download/' . urlencode($name);
        $zipContent = @file_get_contents($marketUrl);
        if (!$zipContent) {
            // 下载失败不中断，记录购买信息即可
            $purchased = json_decode(file_get_contents($this->modulesPath . 'purchased.json') ?: '[]', true) ?: [];
            if (!in_array($name, $purchased)) {
                $purchased[] = $name;
                file_put_contents($this->modulesPath . 'purchased.json', json_encode($purchased, JSON_UNESCAPED_UNICODE));
            }
            return $this->success(null, '购买已记录，请手动安装');
        }

        // 解压到模块目录
        $tmpFile = $this->modulesPath . $name . '.zip';
        file_put_contents($tmpFile, $zipContent);
        $zip = new \ZipArchive();
        if ($zip->open($tmpFile) === true) {
            $targetDir = $this->modulesPath . $name;
            if (!is_dir($targetDir)) mkdir($targetDir, 0755, true);
            $zip->extractTo($targetDir);
            $zip->close();
        }
        unlink($tmpFile);

        // 调用标准安装流程
        $manifestPath = $this->modulesPath . $name . DIRECTORY_SEPARATOR . 'manifest.json';
        if (file_exists($manifestPath)) {
            $registry = $this->getRegistry();
            if (!isset($registry[$name])) {
                $manifest = json_decode(file_get_contents($manifestPath), true);
                $registry[$name] = array_merge($manifest, ['installed_at' => time()]);
                $this->saveRegistry($registry);

                // 执行 install.sql
                $sqlPath = $this->modulesPath . $name . DIRECTORY_SEPARATOR . 'install.sql';
                if (file_exists($sqlPath)) {
                    try {
                        Db::execute(file_get_contents($sqlPath));
                    } catch (\Exception $e) {}
                }
                return $this->success(null, '安装成功');
            }
        }

        return $this->success(null, '模块已下载，请手动完成安装');
    }

    /**
     * 查询已购买模块列表（供前端判断购买状态）
     */
    public function purchased()
    {
        $query = Db::name('payment')
            ->where('status', 1)
            ->where('product_type', 'module');
        $userId = intval(input('user_id', 0));
        if ($userId > 0) {
            $query->where('user_id', $userId);
        }
        $list = $query->column('product_id');
        $list = array_values(array_unique($list));
        return $this->success(['modules' => $list]);
    }

    public function installFromAisc()
    {
        $name = Request::post('name', '');
        if (!$name) return $this->error('请指定模块名');

        if (strpos($name, '..') !== false || strpos($name, '/') !== false || strpos($name, '\\') !== false) {
            return $this->error('非法模块名');
        }

        $aiscModulePath = app()->getRootPath() . 'aisc' . DIRECTORY_SEPARATOR . 'modules' . DIRECTORY_SEPARATOR . $name;
        if (!is_dir($aiscModulePath)) {
            return $this->error('aisc 中未找到该模块: ' . $name);
        }

        $manifestPath = $aiscModulePath . DIRECTORY_SEPARATOR . 'manifest.json';
        if (!file_exists($manifestPath)) {
            return $this->error('模块缺少 manifest.json');
        }

        $registry = $this->getRegistry();
        if (isset($registry[$name])) {
            return $this->error('模块已安装，请先卸载');
        }

        $manifest = json_decode(file_get_contents($manifestPath), true);

        if (!empty($manifest['depends'])) {
            foreach ($manifest['depends'] as $dep) {
                if (!isset($registry[$dep])) {
                    return $this->error("缺少依赖模块: {$dep}");
                }
            }
        }

        $targetPath = $this->modulesPath . $name;
        $this->copyDir($aiscModulePath, $targetPath);

        $sqlPath = $targetPath . DIRECTORY_SEPARATOR . 'install.sql';
        if (file_exists($sqlPath)) {
            try {
                Db::execute(file_get_contents($sqlPath));
            } catch (\Exception $e) {
                $this->removeDir($targetPath);
                return $this->error('安装SQL执行失败: ' . $e->getMessage());
            }
        }

        $registry[$name] = [
            'version'      => $manifest['version'] ?? '1.0.0',
            'status'       => 1,
            'install_time' => time(),
        ];
        $this->saveRegistry($registry);

        // 创建菜单
        $this->createMenuForModule($name, $manifest);

        return $this->success(['name' => $name, 'title' => $manifest['title'] ?? $name], '一键安装成功');
    }

    private function copyDir($src, $dst)
    {
        if (!is_dir($dst)) mkdir($dst, 0755, true);
        $dir = opendir($src);
        while (($file = readdir($dir)) !== false) {
            if ($file === '.' || $file === '..') continue;
            $srcFile = $src . DIRECTORY_SEPARATOR . $file;
            $dstFile = $dst . DIRECTORY_SEPARATOR . $file;
            if (is_dir($srcFile)) {
                $this->copyDir($srcFile, $dstFile);
            } else {
                copy($srcFile, $dstFile);
            }
        }
        closedir($dir);
    }

    private function removeDir($dir)
    {
        if (!is_dir($dir)) return;
        $files = scandir($dir);
        foreach ($files as $file) {
            if ($file === '.' || $file === '..') continue;
            $path = $dir . DIRECTORY_SEPARATOR . $file;
            if (is_dir($path)) {
                $this->removeDir($path);
            } else {
                unlink($path);
            }
        }
        rmdir($dir);
    }

    private function getRegistry()
    {
        if (!file_exists($this->registryFile)) return [];
        return json_decode(file_get_contents($this->registryFile), true) ?: [];
    }

    private function saveRegistry($data)
    {
        $dir = dirname($this->registryFile);
        if (!is_dir($dir)) mkdir($dir, 0755, true);
        file_put_contents($this->registryFile, json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));
    }
}
