<?php
namespace app\api\controller;

use app\common\service\TokenService;
use think\facade\Cache;
use think\facade\Db;

class Login
{
    public function index()
    {
        $username = input('username', '');
        $password = input('password', '');
        $captcha = input('captcha', '');
        $captchaKey = input('captcha_key', '');

        if (!$username || !$password || !$captcha || !$captchaKey) {
            return json(['code' => 1, 'msg' => '请填写完整信息', 'data' => []]);
        }

        $storedCode = Cache::get($captchaKey);
        if (!$storedCode || strtolower($captcha) !== $storedCode) {
            return json(['code' => 1, 'msg' => '验证码不正确', 'data' => []]);
        }
        Cache::delete($captchaKey);

        $user = Db::name('user')
            ->where('username', $username)
            ->whereOr('email', $username)
            ->whereOr('mobile', $username)
            ->find();

        if (!$user) {
            return json(['code' => 1, 'msg' => '用户不存在', 'data' => []]);
        }

        if (!password_verify($password, $user['password'])) {
            return json(['code' => 1, 'msg' => '密码错误', 'data' => []]);
        }

        if ($user['status'] == 0) {
            return json(['code' => 1, 'msg' => '账号已禁用', 'data' => []]);
        }

        Db::name('user')->where('id', $user['id'])->update([
            'last_login_ip' => request()->ip(),
            'last_login_time' => time(),
        ]);

        $token = TokenService::create($user['id'], $user['username']);

        return json([
            'code' => 0,
            'msg' => '登录成功',
            'data' => [
                'token' => $token,
                'user' => [
                    'id' => $user['id'],
                    'username' => $user['username'],
                    'nickname' => $user['nickname'] ?: $user['username'],
                    'email' => $user['email'] ?? '',
                    'avatar' => $user['avatar'] ?? '',
                ],
            ],
        ]);
    }
}
