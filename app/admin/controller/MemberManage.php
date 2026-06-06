<?php
namespace app\admin\controller;

use think\facade\Db;

class MemberManage extends Base
{
    protected $table = 'user';

    private function input($key = null, $default = null)
    {
        static $data = null;
        if ($data === null) $data = $this->getJsonInput();
        return $key ? ($data[$key] ?? $default) : $data;
    }

    public function list()
    {
        $page     = request()->get('page', 1);
        $limit    = request()->get('limit', 20);
        $keyword  = request()->get('keyword', '');
        $levelId  = request()->get('levelId', '');
        $isBanned = request()->get('isBanned', '');

        $query = Db::name($this->table)->alias('u')
            ->field('u.*, l.name as level_name')
            ->leftJoin('ai_tier l', 'u.level_id = l.id')
            ->order('u.id desc');

        if ($keyword) {
            $query->where(function ($q) use ($keyword) {
                $q->where('u.username|u.mobile|u.email', 'like', "%{$keyword}%");
            });
        }
        if ($levelId !== '') $query->where('u.level_id', intval($levelId));
        if ($isBanned !== '') $query->where('u.is_banned', intval($isBanned));

        $total = $query->count();
        $list  = $query->page($page, $limit)->select();

        foreach ($list as &$row) {
            $row['create_time'] = $row['create_time'] ? date('Y-m-d H:i:s', $row['create_time']) : '-';
            $row['last_login_time'] = !empty($row['last_login_time']) ? date('Y-m-d H:i:s', $row['last_login_time']) : '-';
            $row['level_expire_text'] = $row['level_expire'] > 0 ? date('Y-m-d', $row['level_expire']) : ($row['level_id'] > 0 ? '永久' : '-');
            $row['ban_status_text'] = $row['is_banned'] ? '已封禁' : '正常';
            unset($row['password']);
        }
        return $this->success(['list' => $list, 'total' => $total]);
    }

    public function detail()
    {
        $userId = request()->get('user_id', 0);
        if (!$userId) return $this->error('缺少用户ID');
        $user = Db::name($this->table)->where('id', $userId)->find();
        if (!$user) return $this->error('用户不存在');
        unset($user['password']);
        if ($user['level_id']) {
            $level = Db::name('ai_tier')->where('id', $user['level_id'])->find();
            $user['level_name'] = $level['name'] ?? '';
        }
        $user['subscriptions'] = Db::name('member_subscription')->where('user_id', $userId)->order('id desc')->limit(20)->select();
        $user['transactions']  = Db::name('member_transaction')->where('user_id', $userId)->order('id desc')->limit(30)->select();
        $user['violations']    = Db::name('member_violation')->where('user_id', $userId)->order('id desc')->select();
        return $this->success($user);
    }

    public function balance()
    {
        $userId = $this->input('userId', 0);
        $amount = floatval($this->input('amount', 0));
        $remark = $this->input('remark', '');
        if (!$userId || $amount == 0) return $this->error('参数错误');
        $user = Db::name($this->table)->where('id', $userId)->find();
        if (!$user) return $this->error('用户不存在');
        $newBalance = round($user['balance'] + $amount, 2);
        if ($newBalance < 0) return $this->error('余额不足');
        Db::name($this->table)->where('id', $userId)->update(['balance' => $newBalance]);
        Db::name('member_transaction')->insert([
            'user_id' => $userId, 'type' => 'adjust', 'amount' => $amount,
            'balance_after' => $newBalance, 'remark' => $remark, 'create_time' => time(),
        ]);
        return $this->success(['balance' => $newBalance]);
    }

    public function level()
    {
        $userId  = $this->input('userId', 0);
        $levelId = $this->input('levelId', 0);
        if (!$userId || !$levelId) return $this->error('参数错误');
        Db::name($this->table)->where('id', $userId)->update(['level_id' => $levelId, 'level_expire' => 0]);
        return $this->success([]);
    }

    public function ban()
    {
        $userId = $this->input('userId', 0);
        $reason = $this->input('reason', '');
        $days   = intval($this->input('days', 0));
        if (!$userId || !$reason) return $this->error('参数错误');
        $bannedUntil = $days > 0 ? time() + $days * 86400 : null;
        Db::name($this->table)->where('id', $userId)->update([
            'is_banned' => 1, 'ban_reason' => $reason, 'ban_until' => $bannedUntil ?? 0,
        ]);
        Db::name('member_violation')->insert([
            'user_id' => $userId, 'reason' => $reason, 'ban_days' => $days,
            'banned_until' => $bannedUntil, 'status' => 'active', 'create_time' => time(),
        ]);
        return $this->success([]);
    }

    public function unban()
    {
        $userId = $this->input('userId', 0);
        $reason = $this->input('reason', '');
        if (!$userId) return $this->error('缺少用户ID');
        Db::name($this->table)->where('id', $userId)->update(['is_banned' => 0, 'ban_reason' => '', 'ban_until' => 0]);
        Db::name('member_violation')->where('user_id', $userId)->where('status', 'active')->update([
            'status' => 'resolved', 'resolve_reason' => $reason, 'update_time' => time(),
        ]);
        return $this->success([]);
    }

    public function violations()
    {
        $userId = request()->get('user_id', 0);
        $query  = Db::name('member_violation');
        if ($userId) $query->where('user_id', $userId);
        return $this->success(['list' => $query->order('id desc')->select()]);
    }

    public function delete($id)
    {
        if (!$id) return $this->error('缺少用户ID');
        Db::name($this->table)->where('id', $id)->delete();
        Db::name('member_subscription')->where('user_id', $id)->delete();
        Db::name('member_transaction')->where('user_id', $id)->delete();
        @unlink(app()->getRootPath() . 'runtime/ai_license_' . $id . '.dat');
        return $this->success([], '已删除');
    }

    public function levels()
    {
        return $this->success(['list' => Db::name('ai_tier')->where('status', 1)->order('sort asc')->select()]);
    }
}
