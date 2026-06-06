<?php
namespace app\admin\controller;

use think\facade\Db;

class Payment extends Base
{
    protected $table = 'payment';

    public function index()
    {
        $page = (int)input('page', 1);
        $limit = (int)input('limit', 10);
        $map = [];
        if ($status = input('status', '')) { $map[] = ['status', '=', $status]; }
        if ($channel = input('channel', '')) { $map[] = ['channel', '=', $channel]; }
        if ($orderNo = input('order_no', '')) { $map[] = ['order_no', '=', $orderNo]; }
        $list = Db::name($this->table)->where($map)->order('id desc')->page($page, $limit)->select()->toArray();
        foreach ($list as &$v) {
            $v['create_time'] = !empty($v['create_time']) ? date('Y-m-d H:i:s', $v['create_time']) : '';
            $v['pay_time'] = !empty($v['pay_time']) ? date('Y-m-d H:i:s', $v['pay_time']) : '';
            $v['update_time'] = !empty($v['update_time']) ? date('Y-m-d H:i:s', $v['update_time']) : '';
        }
        $total = Db::name($this->table)->where($map)->count();
        return $this->success(['list' => $list, 'total' => $total]);
    }

    public function detail($id)
    {
        // 先按 id 查，再按 order_no 查（前端可能传 order_no）
        $p = Db::name($this->table)->find($id);
        if (!$p && !is_numeric($id)) {
            $p = Db::name($this->table)->where('order_no', $id)->find();
        }
        if ($p) {
            $p['create_time'] = !empty($p['create_time']) ? date('Y-m-d H:i:s', $p['create_time']) : '';
            $p['pay_time'] = !empty($p['pay_time']) ? date('Y-m-d H:i:s', $p['pay_time']) : '';
        }
        return $p ? $this->success($p) : $this->error('支付单不存在');
    }

    public function save()
    {
        $data = $this->getJsonInput();
        $data['order_no'] = 'PAY' . date('YmdHis') . rand(1000, 9999);
        $data['create_time'] = time();
        $data['status'] = $data['status'] ?? 0;
        Db::name($this->table)->insert($data);
        return $this->success(null, '创建成功');
    }

    public function update()
    {
        $id = $this->getJsonInput('id');
        $orderNo = $this->getJsonInput('order_no', '');
        $data = $this->getJsonInput();
        unset($data['id'], $data['order_no']);
        if (!empty($data['pay_time']) && !is_numeric($data['pay_time'])) {
            $data['pay_time'] = strtotime($data['pay_time']);
        }
        $data['update_time'] = time();
        // 优先用 id 匹配，如果不存在则用 order_no 匹配（总后台推送时 id 可能不同）
        $record = Db::name($this->table)->where('id', $id)->find();
        if (!$record && $orderNo) {
            $record = Db::name($this->table)->where('order_no', $orderNo)->find();
            if ($record) $id = $record['id'];
        }
        Db::name($this->table)->where('id', $id)->update($data);
        return $this->success(null, '更新成功');
    }

    public function delete($id)
    {
        $payment = Db::name($this->table)->find($id);
        if ($payment) {
            // 同步删除关联订阅，让用户可以重新购买
            Db::name('member_subscription')->where('order_no', $payment['order_no'])->delete();
            Db::name($this->table)->where('id', $id)->delete();
        }
        return $this->success(null, '删除成功');
    }

    public function refund($id)
    {
        $payment = Db::name($this->table)->find($id);
        if (!$payment) { return $this->error('支付单不存在'); }
        if ($payment['status'] != 2) { return $this->error('仅已支付订单可退款'); }
        Db::name($this->table)->where('id', $id)->update([
            'status' => 3,
            'update_time' => time(),
        ]);
        return $this->success(null, '退款成功');
    }

    public function summary()
    {
        $stats = [
            'total_count' => Db::name($this->table)->count(),
            'paid_count' => Db::name($this->table)->where('status', 2)->count(),
            'refund_count' => Db::name($this->table)->where('status', 3)->count(),
            'total_amount' => Db::name($this->table)->where('status', 2)->sum('amount') ?: 0,
            'refund_amount' => Db::name($this->table)->where('status', 3)->sum('amount') ?: 0,
            'wechat_count' => Db::name($this->table)->where('channel', 'wechat')->count(),
            'alipay_count' => Db::name($this->table)->where('channel', 'alipay')->count(),
        ];
        return $this->success($stats);
    }

    /**
     * 总后台推送支付配置
     */
    public function saveConfig()
    {
        $data = $this->getJsonInput();
        $file = app()->getRootPath() . 'runtime' . DIRECTORY_SEPARATOR . 'payment_config.json';
        $dir = dirname($file);
        if (!is_dir($dir)) mkdir($dir, 0755, true);
        $config = file_exists($file) ? json_decode(file_get_contents($file), true) : [];
        if (!is_array($config)) $config = [];
        $config = array_merge($config, $data);
        $config['updated_at'] = time();
        file_put_contents($file, json_encode($config, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));
        return $this->success([], '支付配置已保存');
    }

    /**
     * 读取支付配置
     */
    public function getConfig()
    {
        $file = app()->getRootPath() . 'runtime' . DIRECTORY_SEPARATOR . 'payment_config.json';
        if (!file_exists($file)) {
            return $this->success(['config' => new \stdClass()]);
        }
        $data = json_decode(file_get_contents($file), true);
        $data['updated_at'] = isset($data['updated_at']) ? date('Y-m-d H:i:s', $data['updated_at']) : '';
        return $this->success(['config' => $data]);
    }
}
