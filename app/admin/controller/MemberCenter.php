<?php
namespace app\admin\controller;

use think\facade\Db;

class MemberCenter extends Base
{
    protected $table = 'user';

    protected function initialize()
    {
        parent::initialize();
        $action = request()->action();
        // profile 和 status 允许被封禁用户访问（用于显示封禁信息）
        if (in_array($action, ['profile', 'status'])) return;
        // 其他请求检查封禁状态
        $user = Db::name($this->table)->where('id', $this->adminId)->find();
        if ($user && !empty($user['is_banned'])) {
            $banUntil = intval($user['ban_until'] ?? 0);
            if ($banUntil === 0 || $banUntil > time()) {
                $msg = '你已违规，请联系管理员';
                if ($banUntil === 0) $msg .= '（永久封禁）';
                else $msg .= '（至 ' . date('Y-m-d H:i', $banUntil) . '）';
                $this->error($msg, 403);
                exit;
            }
        }
    }

    public function profile()
    {
        $user = Db::name($this->table)->where('id', $this->adminId)->find();
        if (!$user) return $this->error('用户不存在', 401);
        unset($user['password']);

        $levelName = ''; $level = null;
        if ($user['level_id'] ?? 0) {
            $level = Db::name('ai_tier')->where('id', $user['level_id'])->find();
            $levelName = $level['name'] ?? '';
        }
        $user['level_name']   = $levelName;
        $user['balance']      = floatval($user['balance'] ?? 0);
        $user['level_expire'] = intval($user['level_expire'] ?? 0);

        // 使用与 /#/ai/tiers 相同的数据源
        $tiers = \app\common\service\AiService::getTiers();
        $levels = [];
        foreach ($tiers as $key => $t) {
            $levels[] = [
                'id'         => $key,
                'name'       => $t['name'] ?? $key,
                'tier_key'   => $key,
                'price'      => floatval($t['price'] ?? 0),
                'price_yearly' => floatval($t['price_yearly'] ?? 0),
                'tokens_month' => intval($t['limit'] ?? 0),
                'features'   => $t['features'] ?? [],
            ];
        }

        return $this->success(['user'=>$user, 'level'=>$level, 'levels'=>$levels]);
    }

    public function updateProfile(){
        $this->checkBan();
        $data = $this->getJsonInput();
        $update = [];
        foreach (['mobile','email','real_name','avatar','nickname'] as $f) {
            if (isset($data[$f])) $update[$f] = $data[$f];
        }
        if (empty($update)) return $this->error('无修改内容');
        if (!empty($update['mobile'])) {
            $e = Db::name($this->table)->where('mobile', $update['mobile'])->where('id', '<>', $this->adminId)->find();
            if ($e) return $this->error('手机号已被使用');
        }
        Db::name($this->table)->where('id', $this->adminId)->update($update);
        return $this->success([], '更新成功');
    }

    public function changePwd()
    {
        $input = $this->getJsonInput();
        $oldPwd = $input['old_password'] ?? ''; $newPwd = $input['new_password'] ?? '';
        if (!$oldPwd || !$newPwd) return $this->error('请填写新旧密码');
        if (strlen($newPwd) < 6) return $this->error('新密码至少6位');
        $user = Db::name($this->table)->where('id', $this->adminId)->find();
        if (!password_verify($oldPwd, $user['password'])) return $this->error('旧密码错误');
        Db::name($this->table)->where('id', $this->adminId)->update(['password'=>password_hash($newPwd, PASSWORD_BCRYPT)]);
        return $this->success([], '密码修改成功');
    }

    public function subscriptions()
    {
        $status = request()->get('status', '');
        $query = Db::name('member_subscription')->where('user_id', $this->adminId)->order('id desc');
        if ($status) $query->where('status', $status);
        $list = $query->select();
        foreach ($list as &$s) {
            $s['pay_time'] = $s['pay_time'] ? date('Y-m-d H:i:s', $s['pay_time']) : '-';
            $s['expire_time'] = $s['expire_time'] ? date('Y-m-d H:i:s', $s['expire_time']) : '-';
            $s['create_time'] = date('Y-m-d H:i:s', $s['create_time']);
        }
        return $this->success(['list'=>$list]);
    }

    public function transactions()
    {
        $list = Db::name('member_transaction')->where('user_id', $this->adminId)->order('id desc')->limit(50)->select();
        foreach ($list as &$t) {
            $t['create_time'] = date('Y-m-d H:i:s', $t['create_time']);
            $t['type_text'] = ['recharge'=>'充值','consume'=>'消费','refund'=>'退款','adjust'=>'调整'][$t['type']] ?? $t['type'];
        }
        return $this->success(['list'=>$list]);
    }

    public function recharge()
    {
        $input = $this->getJsonInput();
        $amount = floatval($input['amount'] ?? 0);
        if ($amount <= 0) return $this->error('金额必须大于0');
        $orderNo = 'RE' . date('YmdHis') . rand(1000,9999);
        Db::name('payment')->insert(['order_no'=>$orderNo,'subject'=>'钱包充值','amount'=>$amount,'channel'=>$input['channel']??'alipay','status'=>0,'create_time'=>time()]);
        return $this->success(['order_no'=>$orderNo,'amount'=>$amount], '充值订单已创建');
    }

    public function switchTier()
    {
        $input = $this->getJsonInput();
        $subId = intval($input['subscription_id'] ?? 0);
        if (!$subId) return $this->error('参数错误');
        $sub = Db::name('member_subscription')->where('id', $subId)->where('user_id', $this->adminId)->find();
        if (!$sub) return $this->error('订阅不存在');
        // 获取 ai_tier 信息
        $tiers = \app\common\service\AiService::getTiers();
        $tier = '';
        foreach ($tiers as $k => $t) {
            if (($t['name'] ?? '') === $sub['level_name']) { $tier = $k; break; }
        }
        // 更新用户当前等级
        Db::name($this->table)->where('id', $this->adminId)->update([
            'level_id' => $sub['level_id'], 'level_expire' => $sub['expire_time'] ?? 0,
        ]);
        // 更新 AI 激活
        \app\common\service\AiService::saveActivation([
            'license' => 'SWITCH-' . $subId, 'domain' => $_SERVER['HTTP_HOST'] ?? 'localhost',
            'expiry' => $sub['expire_time'] ?? strtotime('+1 month'),
            'tier' => $tier ?: 'basic', 'tier_name' => $sub['level_name'],
            'activated_at' => time(), 'user_id' => $this->adminId,
        ], $this->adminId);
        return $this->success(['level_name' => $sub['level_name']], '已切换');
    }

    public function order()
    {
        $input   = $this->getJsonInput();
        $tier = $input['level_id'] ?? ''; // 支持字符串 key (如 'basic', 'pro')
        $period  = $input['period'] ?? 'month';
        $channel = $input['channel'] ?? 'alipay';

        $tiers = \app\common\service\AiService::getTiers();
        if (!isset($tiers[$tier])) return $this->error('套餐不存在');
        $level = $tiers[$tier];
        $price = $period === 'year' ? floatval($level['price_yearly'] ?? 0) : floatval($level['price'] ?? 0);
        if ($price <= 0) return $this->error('价格异常');

        // 防止重复购买
        $exists = Db::name('member_subscription')->where('user_id', $this->adminId)->where('level_name', ($level['name'] ?? $tier))->where('status', 'active')->find();
        if ($exists) return $this->error('你已购买过此套餐，不能重复购买');

        // ====== 余额支付 ======
        if ($channel === 'balance') {
            $user = Db::name($this->table)->where('id', $this->adminId)->find();
            $balance = floatval($user['balance'] ?? 0);
            if ($balance < $price) {
                return $this->error('余额不足，还需 ¥' . number_format($price - $balance, 2));
            }

            $orderNo = 'AI' . date('YmdHis') . rand(1000,9999);
            $newBalance = round($balance - $price, 2);

            // 扣减余额
            Db::name($this->table)->where('id', $this->adminId)->update(['balance' => $newBalance]);

            // 消费流水
            Db::name('member_transaction')->insert([
                'user_id'       => $this->adminId,
                'type'          => 'consume',
                'amount'        => -$price,
                'balance_after' => $newBalance,
                'order_no'      => $orderNo,
                'remark'        => '购买 ' . ($level['name'] ?? $tier) . ' (' . $period . ')',
                'create_time'   => time(),
            ]);

            // 支付记录
            Db::name('payment')->insert([
                'order_no'    => $orderNo,
                'subject'     => 'McdmAdmin ' . ($level['name'] ?? $tier) . ' (' . $period . ')',
                'amount'      => $price,
                'channel'     => 'balance',
                'status'      => 2,
                'create_time' => time(),
            ]);

            // 订阅记录
            $expireTime = null;
            switch ($period) {
                case 'month': $expireTime = strtotime('+1 month'); break;
                case 'year': $expireTime = strtotime('+1 year'); break;
                case 'lifetime': $expireTime = null; break;
            }
            Db::name('member_subscription')->insert([
                'user_id'     => $this->adminId,
                'level_id'    => 0, // tier_key 是字符串，存0占位
                'level_name'  => ($level['name'] ?? $tier),
                'amount'      => $price,
                'period'      => $period,
                'order_no'    => $orderNo,
                'status'      => 'active',
                'pay_time'    => time(),
                'expire_time' => $expireTime,
                'create_time' => time(),
            ]);

            // 更新会员到期时间
            Db::name($this->table)->where('id', $this->adminId)->update([
                'level_expire' => $expireTime ?? 0,
            ]);

            // 激活 AI
            \app\common\service\AiService::saveActivation([
                'license'      => 'BALANCE-' . $orderNo,
                'domain'       => $_SERVER['HTTP_HOST'] ?? 'localhost',
                'expiry'       => $expireTime ?? strtotime('+100 years'),
                'tier'         => $level['tier_key'] ?? ($level['name'] ?? $tier),
                'tier_name'    => ($level['name'] ?? $tier),
                'activated_at' => time(),
                'user_id'      => $this->adminId,
            ], $this->adminId);

            return $this->success([
                'order_no'    => $orderNo,
                'amount'      => $price,
                'balance'     => $newBalance,
                'level_name'  => ($level['name'] ?? $tier),
                'level_id'    => 0, // tier_key 是字符串，存0占位
                'level_expire'=> $expireTime,
            ], '购买成功，已激活');
        }

        // ====== 外部支付 ======
        $orderNo = 'AI' . date('YmdHis') . rand(1000,9999);
        Db::name('payment')->insert(['order_no'=>$orderNo,'subject'=>'McdmAdmin '.($level['name'] ?? $tier).' ('.$period.')','amount'=>$price,'channel'=>$channel,'status'=>0,'create_time'=>time()]);
        Db::name('member_subscription')->insert(['user_id'=>$this->adminId,'level_id'=>0,'level_name'=>($level['name'] ?? $tier),'amount'=>$price,'period'=>$period,'order_no'=>$orderNo,'status'=>'pending','create_time'=>time()]);
        return $this->success(['order_no'=>$orderNo,'amount'=>$price,'level_name'=>($level['name'] ?? $tier)], '订单已创建');
    }

    public function submitTicket()
    {
        $input = $this->getJsonInput();
        $title = trim($input['title'] ?? ''); $content = trim($input['content'] ?? '');
        if (empty($title) || empty($content)) return $this->error('请填写标题和内容');
        Db::name('member_ticket')->insert(['user_id'=>$this->adminId,'title'=>$title,'content'=>$content,'status'=>'pending','create_time'=>time()]);
        return $this->success([], '工单已提交');
    }

    public function tickets()
    {
        $list = Db::name('member_ticket')->where('user_id', $this->adminId)->order('id desc')->select();
        foreach ($list as &$t) {
            $t['create_time'] = date('Y-m-d H:i:s', $t['create_time']);
            $t['reply_time'] = $t['reply_time'] ? date('Y-m-d H:i:s', $t['reply_time']) : '-';
            $t['status_text'] = ['pending'=>'待处理','processing'=>'处理中','replied'=>'已回复','closed'=>'已关闭'][$t['status']] ?? $t['status'];
        }
        return $this->success(['list'=>$list]);
    }

    public function deleteOrder($id)
    {
        if (!$id) return $this->error('缺少订单ID');
        $sub = Db::name('member_subscription')->where('id', $id)->where('user_id', $this->adminId)->find();
        if (!$sub) return $this->error('订单不存在');
        if ($sub['status'] === 'active') return $this->error('已支付的订单不能删除');
        Db::name('member_subscription')->where('id', $id)->delete();
        Db::name('payment')->where('order_no', $sub['order_no'])->delete();
        return $this->success([], '已删除');
    }

    public function status()
    {
        $user = Db::name($this->table)->where('id', $this->adminId)->find();
        if (!$user) return $this->error('用户不存在');
        if (!empty($user['is_banned'])) {
            $banUntil = intval($user['ban_until'] ?? 0);
            if ($banUntil === 0 || $banUntil > time()) {
                return $this->error('你已违规，请联系管理员', 403, ['ban_reason'=>$user['ban_reason']??'','ban_until'=>$banUntil===0?'永久':date('Y-m-d H:i:s',$banUntil)]);
            }
        }
        return $this->success(['balance'=>floatval($user['balance']??0),'level_id'=>intval($user['level_id']??0),'level_expire'=>intval($user['level_expire']??0),'is_banned'=>intval($user['is_banned']??0)]);
    }
}
