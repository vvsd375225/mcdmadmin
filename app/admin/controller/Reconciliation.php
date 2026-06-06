<?php
namespace app\admin\controller;

use think\facade\Db;
use app\common\service\SiteApiClient;

/**
 * 对账系统
 * 对比总后台与用户站点的支付订单数据，发现差异
 * 对应架构文档 Section 2.2 P2
 */
class Reconciliation extends Base
{
    private function ensureTable()
    {
        $exists = Db::query("SHOW TABLES LIKE 'swift_reconciliation_log'");
        if (empty($exists)) {
            Db::execute("CREATE TABLE IF NOT EXISTS `swift_reconciliation_log` (
              `id` int unsigned NOT NULL AUTO_INCREMENT,
              `site_id` int unsigned NOT NULL COMMENT '站点ID',
              `local_orders` int DEFAULT 0,
              `local_paid` int DEFAULT 0,
              `local_amount` decimal(12,2) DEFAULT 0,
              `remote_orders` int DEFAULT NULL,
              `remote_paid` int DEFAULT NULL,
              `remote_amount` decimal(12,2) DEFAULT NULL,
              `diff_orders` int DEFAULT 0 COMMENT '差异订单数',
              `diff_amount` decimal(12,2) DEFAULT 0 COMMENT '差异金额',
              `diff_detail` text COMMENT '差异详情JSON',
              `error` varchar(255) DEFAULT '',
              `checked_at` datetime DEFAULT NULL,
              PRIMARY KEY (`id`),
              KEY `idx_site` (`site_id`),
              KEY `idx_checked` (`checked_at`)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='对账记录'");
        }
    }

    /**
     * 对账列表 — 显示所有站点的对账状态
     */
    public function index()
    {
        $sites = Db::name('sites')->where('status', 1)->field('id, name, domain')->select()->toArray();
        $result = [];
        foreach ($sites as $site) {
            $localCount = Db::name('payment')->where('site_id', $site['id'])->count();
            $localPaid = Db::name('payment')->where('site_id', $site['id'])->where('status', 1)->count();
            $localAmount = Db::name('payment')->where('site_id', $site['id'])->where('status', 1)->sum('amount') ?: 0;

            $result[] = [
                'site_id'       => $site['id'],
                'site_name'     => $site['name'],
                'site_domain'   => $site['domain'],
                'local_orders'  => $localCount,
                'local_paid'    => $localPaid,
                'local_amount'  => round((float)$localAmount, 2),
                'remote_orders' => null,
                'remote_paid'   => null,
                'remote_amount' => null,
                'diff_orders'   => null,
                'diff_amount'   => null,
                'status'        => 'unchecked',
                'error'         => '',
            ];
        }

        return $this->success($result);
    }

    /**
     * 对单个站点执行对账
     */
    public function check($siteId)
    {
        $this->ensureTable();
        $site = Db::name('sites')->find($siteId);
        if (!$site) { return $this->error('站点不存在'); }
        if ($site['status'] != 1) { return $this->error('站点已禁用'); }

        $localCount = Db::name('payment')->where('site_id', $siteId)->count();
        $localPaid = Db::name('payment')->where('site_id', $siteId)->where('status', 1)->count();
        $localAmount = Db::name('payment')->where('site_id', $siteId)->where('status', 1)->sum('amount') ?: 0;

        $remoteCount = null;
        $remotePaid = null;
        $remoteAmount = null;
        $error = '';
        $diffOrders = [];
        $diffAmount = 0;

        try {
            $client = new SiteApiClient($siteId);
            $summary = $client->getPaymentSummary();
            if (!empty($summary['data'])) {
                $remoteCount = (int)($summary['data']['total_count'] ?? 0);
                $remotePaid = (int)($summary['data']['paid_count'] ?? 0);
                $remoteAmount = (float)($summary['data']['total_amount'] ?? 0);
            }

            // 逐笔对比（拉取远程订单列表）
            try {
                $remoteOrders = $client->getPaymentList(1, 200);
                if (!empty($remoteOrders['data']['list'])) {
                    $localOrders = Db::name('payment')->where('site_id', $siteId)->column('order_no,amount,status', 'order_no');

                    foreach ($remoteOrders['data']['list'] as $ro) {
                        $orderNo = $ro['order_no'] ?? '';
                        $localOrder = $localOrders[$orderNo] ?? null;
                        if (!$localOrder) {
                            $diffOrders[] = [
                                'order_no'   => $orderNo,
                                'type'       => 'missing_local',
                                'remote_amount' => $ro['amount'] ?? 0,
                                'local_amount'  => 0,
                            ];
                            $diffAmount += (float)($ro['amount'] ?? 0);
                        } elseif (abs((float)($localOrder['amount'] ?? 0) - (float)($ro['amount'] ?? 0)) > 0.01) {
                            $diffOrders[] = [
                                'order_no'   => $orderNo,
                                'type'       => 'amount_mismatch',
                                'remote_amount' => $ro['amount'] ?? 0,
                                'local_amount'  => $localOrder['amount'] ?? 0,
                            ];
                            $diffAmount += abs((float)($ro['amount'] ?? 0) - (float)($localOrder['amount'] ?? 0));
                        }
                    }
                }
            } catch (\Exception $e) {
                // 远程列表拉取失败不影响主流程
            }
        } catch (\Exception $e) {
            $error = $e->getMessage();
        }

        // 保存对账记录
        $recordId = Db::name('reconciliation_log')->insertGetId([
            'site_id'       => $siteId,
            'local_orders'  => $localCount,
            'local_paid'    => $localPaid,
            'local_amount'  => $localAmount,
            'remote_orders' => $remoteCount,
            'remote_paid'   => $remotePaid,
            'remote_amount' => $remoteAmount,
            'diff_orders'   => count($diffOrders),
            'diff_amount'   => round($diffAmount, 2),
            'diff_detail'   => json_encode($diffOrders, JSON_UNESCAPED_UNICODE),
            'error'         => $error,
            'checked_at'    => date('Y-m-d H:i:s'),
        ]);

        return $this->success([
            'site_id'       => $siteId,
            'site_name'     => $site['name'],
            'local_orders'  => $localCount,
            'local_paid'    => $localPaid,
            'local_amount'  => round((float)$localAmount, 2),
            'remote_orders' => $remoteCount,
            'remote_paid'   => $remotePaid,
            'remote_amount' => round($remoteAmount, 2),
            'diff_orders'   => count($diffOrders),
            'diff_amount'   => round($diffAmount, 2),
            'diff_detail'   => $diffOrders,
            'status'        => $error ? 'error' : (count($diffOrders) > 0 ? 'diff' : 'ok'),
            'error'         => $error,
            'record_id'     => $recordId,
        ], $error ? "对账异常: {$error}" : (count($diffOrders) > 0 ? "发现 " . count($diffOrders) . " 笔差异" : '对账一致'));
    }

    /**
     * 批量对账（所有活跃站点）
     */
    public function batchCheck()
    {
        $sites = Db::name('sites')->where('status', 1)->column('id');
        $results = [];
        foreach ($sites as $siteId) {
            try {
                $results[] = $this->check($siteId)->getData();
            } catch (\Exception $e) {
                $results[] = ['site_id' => $siteId, 'status' => 'error', 'error' => $e->getMessage()];
            }
        }

        $ok = count(array_filter($results, fn($r) => ($r['status'] ?? 'error') === 'ok'));
        $diff = count(array_filter($results, fn($r) => ($r['status'] ?? 'error') === 'diff'));
        $errors = count(array_filter($results, fn($r) => ($r['status'] ?? 'error') === 'error'));

        return $this->success([
            'sites_checked' => count($results),
            'ok'     => $ok,
            'diff'   => $diff,
            'errors' => $errors,
            'details'=> $results,
        ], "批量对账完成: 一致{$ok}, 差异{$diff}, 异常{$errors}");
    }

    /**
     * 对账记录历史
     */
    public function logs()
    {
        $this->ensureTable();
        $page = (int)input('page', 1);
        $limit = (int)input('limit', 10);
        $siteId = input('site_id', 0);

        $map = [];
        if ($siteId) { $map[] = ['site_id', '=', $siteId]; }

        $list = Db::name('reconciliation_log')->alias('r')
            ->join('sites s', 'r.site_id = s.id', 'left')
            ->field('r.*, s.name as site_name')
            ->where($map)->order('r.id desc')->page($page, $limit)->select()->toArray();
        $total = Db::name('reconciliation_log')->alias('r')->where($map)->count();

        return $this->success(['list' => $list, 'total' => $total]);
    }
}
