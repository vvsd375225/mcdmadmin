<?php
namespace app\admin\controller;

use app\common\service\TokenService;
use think\facade\Db;

class MemberAuth extends Base
{
    protected $table = 'user'; // swift_user — 会员表

    public function login()
    {
        $input    = $this->getJsonInput();
        $account  = trim($input['username'] ?? '');
        $password = $input['password'] ?? '';

        if (empty($account) || empty($password)) {
            return $this->error('用户名和密码不能为空');
        }
        $captcha = $input['captcha'] ?? '';
        $isLocal = in_array(request()->ip(), ['127.0.0.1', '::1']);
        if (!$isLocal && !\app\admin\controller\Captcha::verify($captcha)) {
            return $this->error('验证码错误');
        }

        $user = Db::name($this->table)
            ->where('username', $account)
            ->whereOr('email', $account)
            ->whereOr('mobile', $account)
            ->find();

        if (!$user) {
            $remote = $this->remoteLogin($account, $password);
            if ($remote) $user = $remote;
        }
        if (!$user) return $this->error('用户名或密码错误');
        if (!password_verify($password, $user['password'])) return $this->error('用户名或密码错误');
        if ($user['status'] != 1) return $this->error('账号已被禁用');

        // 封禁检查
        if (!empty($user['is_banned'])) {
            $banUntil    = intval($user['ban_until'] ?? 0);
            $isPermanent = ($banUntil === 0);
            if ($isPermanent || $banUntil > time()) {
                return $this->error('你已违规，请联系管理员', 403, [
                    'ban_reason'   => $user['ban_reason'] ?? '',
                    'ban_until'    => $isPermanent ? '永久封禁' : date('Y-m-d H:i:s', $banUntil),
                    'is_permanent' => $isPermanent,
                ]);
            }
            // 到期自动解封
            Db::name($this->table)->where('id', $user['id'])->update(['is_banned'=>0,'ban_reason'=>'','ban_until'=>0]);
        }

        Db::name($this->table)->where('id', $user['id'])->update([
            'last_login_ip'   => request()->ip(),
            'last_login_time' => time(),
        ]);

        $token = TokenService::create($user['id'], $user['username']);

        $levelName = '';
        if ($user['level_id'] ?? 0) {
            $level = Db::name('ai_tier')->where('id', $user['level_id'])->find();
            $levelName = $level['name'] ?? '';
        }

        unset($user['password']);
        return $this->success([
            'token'        => $token,
            'id'           => $user['id'],
            'username'     => $user['username'],
            'nickname'     => $user['nickname'],
            'avatar'       => $user['avatar'] ?? '',
            'mobile'       => $user['mobile'] ?? '',
            'email'        => $user['email'] ?? '',
            'level_id'     => intval($user['level_id'] ?? 0),
            'level_name'   => $levelName,
            'level_expire' => intval($user['level_expire'] ?? 0),
            'balance'      => floatval($user['balance'] ?? 0),
        ], '登录成功');
    }

    public function register()
    {
        $input    = $this->getJsonInput();
        $username = trim($input['username'] ?? '');
        $password = $input['password'] ?? '';
        $mobile   = trim($input['mobile'] ?? '');
        $email    = trim($input['email'] ?? '');

        if (empty($username) || empty($password)) return $this->error('用户名和密码不能为空');
        $captcha = $input['captcha'] ?? '';
        if (!\app\admin\controller\Captcha::verify($captcha)) return $this->error('验证码错误');
        if (mb_strlen($username) < 2 || mb_strlen($username) > 20) return $this->error('用户名2-20字符');
        if (strlen($password) < 6) return $this->error('密码至少6位');

        if (Db::name($this->table)->where('username', $username)->find()) return $this->error('用户名已存在');
        if ($mobile && Db::name($this->table)->where('mobile', $mobile)->find()) return $this->error('手机号已被注册');
        if ($email && Db::name($this->table)->where('email', $email)->find()) return $this->error('邮箱已被注册');

        $userId = Db::name($this->table)->insertGetId([
            'username'    => $username,
            'password'    => password_hash($password, PASSWORD_BCRYPT),
            'nickname'    => $username,
            'mobile'      => $mobile,
            'email'       => $email,
            'status'      => 1,
            'create_time' => time(),
        ]);

        $freeLevel = Db::name('ai_tier')->where('tier_key', 'free')->where('status', 1)->find();
        if ($freeLevel) {
            Db::name($this->table)->where('id', $userId)->update(['level_id' => $freeLevel['id']]);
        }

        $token = TokenService::create($userId, $username);
        return $this->success(['token'=>$token,'id'=>$userId,'username'=>$username,'nickname'=>$username], '注册成功');
    }

    private function remoteLogin($account, $password)
    {
        try {
            $ch = curl_init('https://www.mcdmadmin.cn/admin/member_api/login');
            curl_setopt_array($ch, [
                CURLOPT_POST => true, CURLOPT_TIMEOUT => 5,
                CURLOPT_POSTFIELDS => json_encode(['username'=>$account,'password'=>$password,'captcha'=>'']),
                CURLOPT_HTTPHEADER => ['Content-Type: application/json'],
                CURLOPT_RETURNTRANSFER => true,
            ]);
            $resp = json_decode(curl_exec($ch), true); curl_close($ch);
            if (($resp['code']??1)!==0) return null;
            $remoteUser = $resp['data'] ?? [];
            $local = Db::name($this->table)->where('username', $account)->find();
            if (!$local) {
                Db::name($this->table)->insert([
                    'username'=>$account, 'password'=>$password,
                    'nickname'=>$remoteUser['nickname']??$account, 'status'=>1, 'create_time'=>time(),
                ]);
            }
            return Db::name($this->table)->where('username', $account)->find();
        } catch (\Exception $e) { return null; }
    }
}
