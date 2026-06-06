<?php
namespace app\admin\controller;

use app\common\service\TokenService;
use think\facade\Db;
use think\facade\Request;

class Auth extends Base
{
    public function login()
    {
        $input = $this->getJsonInput();
        $username = $input['username'] ?? '';
        $password = $input['password'] ?? '';

        if (empty($username) || empty($password)) {
            return $this->error('用户名和密码不能为空');
        }

        $admin = Db::name('admin')->where('username', $username)->find();
        if (!$admin) {
            return $this->error('用户名或密码错误');
        }

        if (!password_verify($password, $admin['password'])) {
            return $this->error('用户名或密码错误');
        }

        if ($admin['status'] != 1) {
            return $this->error('账号已被禁用');
        }

        // ====== 封禁检查 ======
        if (!empty($admin['is_banned'])) {
            $banUntil   = intval($admin['ban_until'] ?? 0);
            $isPermanent = ($banUntil === 0);
            $isExpired   = (!$isPermanent && $banUntil < time());

            if ($isExpired) {
                Db::name('admin')->where('id', $admin['id'])->update([
                    'is_banned'  => 0, 'ban_reason' => '', 'ban_until' => 0,
                ]);
            } else {
                return $this->error('你已违规，请联系管理员', 403, [
                    'ban_reason'   => $admin['ban_reason'] ?? '',
                    'ban_until'    => $isPermanent ? '永久封禁' : date('Y-m-d H:i:s', $banUntil),
                    'is_permanent' => $isPermanent,
                ]);
            }
        }

        Db::name('admin')->where('id', $admin['id'])->update([
            'last_login_ip'   => Request::ip(),
            'last_login_time' => time(),
        ]);

        $token = TokenService::create($admin['id'], $admin['username']);

        $levelName = '';
        if ($admin['level_id'] ?? 0) {
            $level = Db::name('member_level')->where('id', $admin['level_id'])->find();
            $levelName = $level['name'] ?? '';
        }

        return $this->success([
            'token'        => $token,
            'id'           => $admin['id'],
            'username'     => $admin['username'],
            'nickname'     => $admin['nickname'],
            'avatar'       => $admin['avatar'] ?? '',
            'mobile'       => $admin['mobile'] ?? '',
            'email'        => $admin['email'] ?? '',
            'level_id'     => intval($admin['level_id'] ?? 0),
            'level_name'   => $levelName,
            'level_expire' => intval($admin['level_expire'] ?? 0),
            'balance'      => floatval($admin['balance'] ?? 0),
            'is_banned'    => intval($admin['is_banned'] ?? 0),
        ], '登录成功');
    }

    /**
     * 注册
     */
    public function register()
    {
        $input    = $this->getJsonInput();
        $username = trim($input['username'] ?? '');
        $password = $input['password'] ?? '';
        $mobile   = trim($input['mobile'] ?? '');
        $email    = trim($input['email'] ?? '');

        if (empty($username) || empty($password)) {
            return $this->error('用户名和密码不能为空');
        }
        if (mb_strlen($username) < 2 || mb_strlen($username) > 20) {
            return $this->error('用户名长度2-20个字符');
        }
        if (strlen($password) < 6) {
            return $this->error('密码至少6位');
        }

        $exists = Db::name('admin')->where('username', $username)->find();
        if ($exists) return $this->error('用户名已存在');
        if ($mobile) {
            $exists = Db::name('admin')->where('mobile', $mobile)->find();
            if ($exists) return $this->error('手机号已被注册');
        }
        if ($email) {
            $exists = Db::name('admin')->where('email', $email)->find();
            if ($exists) return $this->error('邮箱已被注册');
        }

        $userId = Db::name('admin')->insertGetId([
            'username'    => $username,
            'password'    => password_hash($password, PASSWORD_BCRYPT),
            'nickname'    => $username,
            'mobile'      => $mobile,
            'email'       => $email,
            'status'      => 1,
            'create_time' => time(),
        ]);

        // 自动分配体验等级
        $freeLevel = Db::name('member_level')->where('level_key', 'free')->where('status', 1)->find();
        if ($freeLevel) {
            Db::name('admin')->where('id', $userId)->update(['level_id' => $freeLevel['id']]);
        }

        $token = TokenService::create($userId, $username);
        return $this->success([
            'token'    => $token, 'id' => $userId, 'username' => $username, 'nickname' => $username,
        ], '注册成功');
    }

    public function info()
    {
        $admin = Db::name('admin')->where('id', $this->adminId)->find();
        if (!$admin) return $this->error('用户不存在', 401);
        unset($admin['password']);
        $levelName = '';
        if ($admin['level_id'] ?? 0) {
            $level = Db::name('member_level')->where('id', $admin['level_id'])->find();
            $levelName = $level['name'] ?? '';
        }
        $admin['level_name'] = $levelName;
        $admin['balance']    = floatval($admin['balance'] ?? 0);
        return $this->success($admin);
    }

    public function permissions()
    {
        $role  = Db::name('role')->where('id', 1)->find();
        $rules = $role['rules'] ?? '';
        $menus = Db::name('menu')->where('status', 1)->where('type', 'in', [1, 2])
            ->order('sort', 'asc')->select()->toArray();
        return $this->success(['menus' => $this->buildTree($menus, 0), 'permissions' => $rules]);
    }

    public function logout()
    {
        return $this->success([], '退出成功');
    }

    private function buildTree($items, $parentId = 0)
    {
        $tree = [];
        foreach ($items as $item) {
            if ($item['parent_id'] == $parentId) {
                $children = $this->buildTree($items, $item['id']);
                if (!empty($children)) $item['children'] = $children;
                $tree[] = $item;
            }
        }
        return $tree;
    }
}
