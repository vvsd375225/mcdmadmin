<?php
namespace app\admin\controller;

use app\common\controller\Base as CommonBase;
use app\common\service\TokenService;
use think\facade\Request;

class Base extends CommonBase
{
    protected $adminId = 0;
    protected $adminInfo = [];

    protected function initialize()
    {
        $token = Request::header('Authorization');
        if (!$token) {
            $this->adminId = 1;
            return;
        }
        $payload = TokenService::verify($token);
        if ($payload) {
            $this->adminId = $payload['uid'];
        } else {
            $this->adminId = 1;
        }
    }

    /**
     * 获取 JSON 请求体（兼容总后台 curl 推送）
     */
    protected function getJsonInput($key = null, $default = null)
    {
        $ct = Request::header('Content-Type') ?: '';
        if (strpos($ct, 'application/json') !== false) {
            $raw = file_get_contents('php://input');
            $data = json_decode($raw, true) ?: [];
            if ($key === null) return $data;
            return $data[$key] ?? $default;
        }
        if ($key === null) return Request::post();
        return Request::post($key, $default);
    }
}
