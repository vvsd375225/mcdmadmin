<?php

namespace modules\dashboard\admin\controller;

use app\admin\controller\Base;
use think\facade\Db;

class Statistics extends Base
{
    /**
     * 获取数据概览
     */
    public function overview()
    {
        // 总用户数
        $totalUsers = Db::name('user')->count();
        // 今日新增用户
        $todayUsers = Db::name('user')
            ->whereTime('create_time', 'today')
            ->count();
        // 总订单数
        $totalOrders = Db::name('order')->count();
        // 今日订单数
        $todayOrders = Db::name('order')
            ->whereTime('create_time', 'today')
            ->count();

        return $this->success([
            'total_users'  => $totalUsers,
            'today_users'  => $todayUsers,
            'total_orders' => $totalOrders,
            'today_orders' => $todayOrders,
        ]);
    }

    /**
     * 用户增长趋势（近30天）
     */
    public function userGrowth()
    {
        $endDate   = date('Y-m-d');
        $startDate = date('Y-m-d', strtotime('-29 days'));

        $data = Db::name('user')
            ->field("DATE(create_time) as date, COUNT(*) as count")
            ->whereBetweenTime('create_time', $startDate, $endDate . ' 23:59:59')
            ->group('date')
            ->order('date', 'asc')
            ->select()
            ->toArray();

        // 生成完整日期序列
        $dates = [];
        $counts = [];
        $current = strtotime($startDate);
        $end = strtotime($endDate);
        while ($current <= $end) {
            $dateStr = date('Y-m-d', $current);
            $dates[] = $dateStr;
            $found = false;
            foreach ($data as $item) {
                if ($item['date'] == $dateStr) {
                    $counts[] = (int) $item['count'];
                    $found = true;
                    break;
                }
            }
            if (!$found) {
                $counts[] = 0;
            }
            $current = strtotime('+1 day', $current);
        }

        return $this->success([
            'dates'  => $dates,
            'counts' => $counts,
        ]);
    }

    /**
     * 订单统计（近30天）
     */
    public function orderStats()
    {
        $endDate   = date('Y-m-d');
        $startDate = date('Y-m-d', strtotime('-29 days'));

        $data = Db::name('order')
            ->field("DATE(create_time) as date, COUNT(*) as order_count, SUM(total_amount) as amount")
            ->whereBetweenTime('create_time', $startDate, $endDate . ' 23:59:59')
            ->group('date')
            ->order('date', 'asc')
            ->select()
            ->toArray();

        $dates = [];
        $orderCounts = [];
        $amounts = [];
        $current = strtotime($startDate);
        $end = strtotime($endDate);
        while ($current <= $end) {
            $dateStr = date('Y-m-d', $current);
            $dates[] = $dateStr;
            $found = false;
            foreach ($data as $item) {
                if ($item['date'] == $dateStr) {
                    $orderCounts[] = (int) $item['order_count'];
                    $amounts[] = (float) $item['amount'];
                    $found = true;
                    break;
                }
            }
            if (!$found) {
                $orderCounts[] = 0;
                $amounts[] = 0;
            }
            $current = strtotime('+1 day', $current);
        }

        return $this->success([
            'dates'       => $dates,
            'order_counts'=> $orderCounts,
            'amounts'     => $amounts,
        ]);
    }
}
