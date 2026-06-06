<?php
namespace app\admin\controller;

use think\facade\Db;
use think\facade\Request;

class Member extends Base
{
    /**
     * 个人中心 — 完整状态
     */
    public function profile()
    {
        $user = Db::name('admin')->where('id', $this->adminId)->find();
        if (!$user) return $this->error('用户不存在', 401);
        unset($user['password']);

        $levelName = '';
        $level     = null;
        if ($user['level_id'] ?? 0) {
            $level = Db::name('member_level')->where('id', $user['level_id'])->find();
            $levelName = $level['name'] ?? '';
        }

        $user['level_name']   = $levelName;
        $user['balance']      = floatval($user['balance'] ?? 0);
        $user['level_expire'] = intval($user['level_expire'] ?? 0);

        // 可用等级（用于升级）
        $levels = Db::name('member_level')->where('status', 1)->order('sort asc')->select();
        foreach ($levels as &$l) {
            $l['features'] = json_decode($l['features'] ?? '[]', true) ?: [];
        }

        return $this->success([
            'user'   => $user,
            'level'  => $level,
            'levels' => $levels,
        ]);
    }

    /**
     * 更新个人信息
     */
    public function updateProfile()
    {
        $data = $this->getJsonInput();
        $allowed = ['mobile', 'email', 'real_name', 'avatar', 'nickname'];
        $update = [];
        foreach ($allowed as $f) {
            if (isset($data[$f])) $update[$f] = $data[$f];
        }
        if (empty($update)) return $this->error('无修改内容');

        // 唯一性检查
        if (!empty($update['mobile'])) {
            $exists = Db::name('admin')->where('mobile', $update['mobile'])->where('id', '<>', $this->adminId)->find();
            if ($exists) return $this->error('手机号已被使用');
        }
        if (!empty($update['email'])) {
            $exists = Db::name('admin')->where('email', $update['email'])->where('id', '<>', $this->adminId)->find();
            if ($exists) return $this->error('邮箱已被使用');
        }

        Db::name('admin')->where('id', $this->adminId)->update($update);
        return $this->success([], '更新成功');
    }

    /**
     * 修改密码
     */
    public function changePwd()
    {
        $input   = $this->getJsonInput();
        $oldPwd  = $input['old_password'] ?? '';
        $newPwd  = $input['new_password'] ?? '';

        if (!$oldPwd || !$newPwd) return $this->error('请填写新旧密码');
        if (strlen($newPwd) < 6) return $this->error('新密码至少6位');

        $user = Db::name('admin')->where('id', $this->adminId)->find();
        if (!$user) return $this->error('用户不存在');
        if (!password_verify($oldPwd, $user['password'])) return $this->error('旧密码错误');

        Db::name('admin')->where('id', $this->adminId)->update([
            'password' => password_hash($newPwd, PASSWORD_BCRYPT),
        ]);
        return $this->success([], '密码修改成功');
    }

    /**
     * 购买记录
     */
    public function subscriptions()
    {
        $status = Request::get('status', '');
        $query  = Db::name('member_subscription')->where('user_id', $this->adminId)->order('id desc');
        if ($status) $query->where('status', $status);
        $list = $query->select();
        foreach ($list as &$s) {
            $s['pay_time']    = $s['pay_time'] ? date('Y-m-d H:i:s', $s['pay_time']) : '-';
            $s['expire_time'] = $s['expire_time'] ? date('Y-m-d H:i:s', $s['expire_time']) : '-';
            $s['create_time'] = date('Y-m-d H:i:s', $s['create_time']);
        }
        return $this->success(['list' => $list]);
    }

    /**
     * 交易流水
     */
    public function transactions()
    {
        $list = Db::name('member_transaction')->where('user_id', $this->adminId)->order('id desc')->limit(50)->select();
        foreach ($list as &$t) {
            $t['create_time'] = date('Y-m-d H:i:s', $t['create_time']);
            $t['type_text']   = ['recharge'=>'充值','consume'=>'消费','refund'=>'退款','adjust'=>'调整'][$t['type']] ?? $t['type'];
        }
        return $this->success(['list' => $list]);
    }

    /**
     * 充值
     */
    public function recharge()
    {
        $input   = $this->getJsonInput();
        $amount  = floatval($input['amount'] ?? 0);
        $channel = $input['channel'] ?? 'alipay';

        if ($amount <= 0) return $this->error('充值金额必须大于0');

        $orderNo = 'RE' . date('YmdHis') . rand(1000, 9999);
        Db::name('payment')->insert([
            'order_no'    => $orderNo,
            'subject'     => '钱包充值',
            'amount'      => $amount,
            'channel'     => $channel,
            'status'      => 0,
            'create_time' => time(),
        ]);

        return $this->success(['order_no' => $orderNo, 'amount' => $amount], '充值订单已创建');
    }

    /**
     * 购买套餐
     */
    public function order()
    {
        $input   = $this->getJsonInput();
        $levelId = intval($input['level_id'] ?? 0);
        $period  = $input['period'] ?? 'month';
        $channel = $input['channel'] ?? 'alipay';

        $level = Db::name('member_level')->where('id', $levelId)->find();
        if (!$level) return $this->error('套餐不存在');

        $price = 0;
        switch ($period) {
            case 'year':     $price = floatval($level['price_year'] ?? 0); break;
            case 'lifetime': $price = floatval($level['price_lifetime'] ?? 0); break;
            default:         $price = floatval($level['price_month'] ?? 0);
        }
        if ($price <= 0) return $this->error('价格配置异常');

        $orderNo = 'AI' . date('YmdHis') . rand(1000, 9999);

        // 创建支付记录
        Db::name('payment')->insert([
            'order_no'    => $orderNo,
            'subject'     => 'McdmAdmin ' . $level['name'] . ' (' . $period . ')',
            'amount'      => $price,
            'channel'     => $channel,
            'status'      => 0,
            'create_time' => time(),
        ]);

        // 创建订阅记录
        Db::name('member_subscription')->insert([
            'user_id'     => $this->adminId,
            'level_id'    => $levelId,
            'level_name'  => $level['name'],
            'amount'      => $price,
            'period'      => $period,
            'order_no'    => $orderNo,
            'status'      => 'pending',
            'create_time' => time(),
        ]);

        return $this->success(['order_no' => $orderNo, 'amount' => $price, 'level_name' => $level['name']], '订单已创建');
    }

    /**
     * 工单提交
     */
    public function submitTicket()
    {
        $input   = $this->getJsonInput();
        $title   = trim($input['title'] ?? '');
        $content = trim($input['content'] ?? '');

        if (empty($title)) return $this->error('请输入工单标题');
        if (empty($content)) return $this->error('请输入工单内容');

        Db::name('member_ticket')->insert([
            'user_id'     => $this->adminId,
            'title'       => $title,
            'content'     => $content,
            'status'      => 'pending',
            'create_time' => time(),
        ]);
        return $this->success([], '工单已提交');
    }

    /**
     * 工单列表
     */
    public function tickets()
    {
        $list = Db::name('member_ticket')->where('user_id', $this->adminId)->order('id desc')->select();
        foreach ($list as &$t) {
            $t['create_time'] = date('Y-m-d H:i:s', $t['create_time']);
            $t['reply_time']  = $t['reply_time'] ? date('Y-m-d H:i:s', $t['reply_time']) : '-';
            $t['status_text'] = ['pending'=>'待处理','processing'=>'处理中','replied'=>'已回复','closed'=>'已关闭'][$t['status']] ?? $t['status'];
        }
        return $this->success(['list' => $list]);
    }

    /**
     * 工单详情
     */
    public function ticketDetail()
    {
        $id = Request::get('id', 0);
        if (!$id) return $this->error('缺少工单ID');
        $ticket = Db::name('member_ticket')->where('id', $id)->where('user_id', $this->adminId)->find();
        if (!$ticket) return $this->error('工单不存在');
        $ticket['create_time'] = date('Y-m-d H:i:s', $ticket['create_time']);
        $ticket['reply_time']  = $ticket['reply_time'] ? date('Y-m-d H:i:s', $ticket['reply_time']) : '-';
        return $this->success($ticket);
    }

    /**
     * 检查会员状态（前端轮询）
     */
    public function status()
    {
        $user = Db::name('admin')->where('id', $this->adminId)->find();
        if (!$user) return $this->error('用户不存在');

        // 封禁检查
        if (!empty($user['is_banned'])) {
            $banUntil    = intval($user['ban_until'] ?? 0);
            $isPermanent = ($banUntil === 0);
            $isExpired   = (!$isPermanent && $banUntil < time());
            if (!$isExpired) {
                return $this->error('你已违规，请联系管理员', 403, [
                    'ban_reason' => $user['ban_reason'] ?? '',
                    'ban_until'  => $isPermanent ? '永久' : date('Y-m-d H:i:s', $banUntil),
                ]);
            }
        }

        return $this->success([
            'balance'      => floatval($user['balance'] ?? 0),
            'level_id'     => intval($user['level_id'] ?? 0),
            'level_expire' => intval($user['level_expire'] ?? 0),
            'is_banned'    => intval($user['is_banned'] ?? 0),
        ]);
    }
}
