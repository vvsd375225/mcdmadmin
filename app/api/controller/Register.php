<?php
namespace app\api\controller;

use think\facade\Cache;
use think\facade\Db;

class Register
{
    public function index()
    {
        $username = input('username', '');
        $password = input('password', '');
        $email = input('email', '');
        $captcha = input('captcha', '');
        $captchaKey = input('captcha_key', '');

        if (!$username || !$password || !$email || !$captcha || !$captchaKey) {
            return json(['code' => 1, 'msg' => '请填写完整信息', 'data' => []]);
        }

        if (strlen($username) < 3 || strlen($username) > 32) {
            return json(['code' => 1, 'msg' => '用户名长度3-32个字符', 'data' => []]);
        }

        if (strlen($password) < 6) {
            return json(['code' => 1, 'msg' => '密码长度不能少于6位', 'data' => []]);
        }

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return json(['code' => 1, 'msg' => '邮箱格式不正确', 'data' => []]);
        }

        $storedCode = Cache::get($captchaKey);
        if (!$storedCode || strtolower($captcha) !== $storedCode) {
            return json(['code' => 1, 'msg' => '验证码不正确', 'data' => []]);
        }
        Cache::delete($captchaKey);

        $exists = Db::name('user')
            ->where('username', $username)
            ->whereOr('email', $email)
            ->find();
        if ($exists) {
            $msg = $exists['username'] === $username ? '用户名已存在' : '邮箱已被注册';
            return json(['code' => 1, 'msg' => $msg, 'data' => []]);
        }

        $now = time();
        $userId = Db::name('user')->insertGetId([
            'username' => $username,
            'password' => password_hash($password, PASSWORD_BCRYPT),
            'nickname' => $username,
            'email' => $email,
            'status' => 1,
            'create_time' => $now,
            'update_time' => $now,
        ]);

        return json([
            'code' => 0,
            'msg' => '注册成功',
            'data' => ['id' => $userId, 'username' => $username],
        ]);
    }
}
