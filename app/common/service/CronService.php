<?php
namespace app\common\service;

use think\facade\Db;

/**
 * 定时任务业务逻辑
 * 对应架构文档 Section 9: License到期提醒/降级/数据一致性巡检
 */
class CronService
{
    /**
     * License 到期提醒（7天内到期）
     * 建议每天 00:00 执行
     * @return array{reminded: int, list: array}
     */
    public static function remindExpiringLicenses()
    {
        $soon = Db::name('ai_licenses')
            ->where('status', 1)
            ->where('expired_at', '>', date('Y-m-d H:i:s'))
            ->where('expired_at', '<', date('Y-m-d H:i:s', strtotime('+7 days')))
            ->select()->toArray();

        $reminded = 0;
        $notifications = [];

        foreach ($soon as $license) {
            $site = Db::name('sites')->find($license['site_id']);
            $siteName = $site['name'] ?? 'Unknown';
            $daysLeft = max(1, (int)ceil((strtotime($license['expired_at']) - time()) / 86400));

            // 写入站内通知
            Db::name('notification')->insert([
                'user_id'    => 0,
                'type'       => 'system',
                'title'      => "License即将到期",
                'content'    => "站点【{$siteName}】的 License（{$license['license_key']}）将在 {$daysLeft} 天后到期，请及时续费。",
                'target_url' => '/license',
                'is_read'    => 0,
                'create_time'=> time(),
            ]);

            $notifications[] = [
                'license_id'  => $license['id'],
                'site_id'     => $license['site_id'],
                'site_name'   => $siteName,
                'tier'        => $license['tier'],
                'expired_at'  => $license['expired_at'],
                'days_left'   => $daysLeft,
            ];

            // 发送邮件提醒
            $contactEmail = $site['contact_email'] ?? '';
            if (!empty($contactEmail)) {
                try {
                    EmailService::sendLicenseExpiryReminder(
                        $contactEmail, $siteName, $license['license_key'],
                        $license['tier'], $license['expired_at'], $daysLeft
                    );
                } catch (\Exception $e) {}
            }

            $reminded++;
        }

        // 写执行日志
        self::log('remind_expiring', $reminded, $reminded > 0 ? json_encode($notifications, JSON_UNESCAPED_UNICODE) : '无即将到期License');

        return ['reminded' => $reminded, 'list' => $notifications];
    }

    /**
     * License 到期降级（已过期的 License → 降级为 free）
     * 建议每天 00:00 执行
     * @return array{degraded: int, failed: int, list: array}
     */
    public static function degradeExpiredLicenses()
    {
        $expired = Db::name('ai_licenses')
            ->where('status', 1)
            ->where('expired_at', '<', date('Y-m-d H:i:s'))
            ->select()->toArray();

        $degraded = 0;
        $failed = 0;
        $results = [];

        foreach ($expired as $license) {
            try {
                // 1. 标记为过期
                Db::name('ai_licenses')->where('id', $license['id'])->update([
                    'status'     => 2,
                    'updated_at' => date('Y-m-d H:i:s'),
                ]);

                // 2. 尝试降级用户站点的 AI 配置
                try {
                    $client = new SiteApiClient($license['site_id']);
                    // 推送 free 等级配置
                    $client->pushAiProvider('', '', 'deepseek-v4-flash', 2000);
                    // 生成新的 free License (30天)
                    $client->genLicense($license['domain'], 30, 'free');
                } catch (\Exception $e) {
                    // 调用失败不影响主流程
                }

                // 发送降级通知邮件
                $site = Db::name('sites')->find($license['site_id']);
                $contactEmail = $site['contact_email'] ?? '';
                if (!empty($contactEmail)) {
                    try {
                        EmailService::sendLicenseDegradedNotice(
                            $contactEmail, $site['name'] ?? '', $license['license_key'],
                            $license['tier'], $license['expired_at']
                        );
                    } catch (\Exception $e) {}
                }

                $results[] = [
                    'license_id' => $license['id'],
                    'site_id'    => $license['site_id'],
                    'tier'       => $license['tier'],
                    'expired_at' => $license['expired_at'],
                    'status'     => 'degraded',
                ];
                $degraded++;
            } catch (\Exception $e) {
                $results[] = [
                    'license_id' => $license['id'],
                    'site_id'    => $license['site_id'],
                    'error'      => $e->getMessage(),
                    'status'     => 'failed',
                ];
                $failed++;
            }
        }

        self::log('degrade_expired', $degraded, json_encode($results, JSON_UNESCAPED_UNICODE));

        return ['degraded' => $degraded, 'failed' => $failed, 'list' => $results];
    }

    /**
     * 数据一致性巡检
     * 建议每天 03:00 执行
     * @return array{healthy: bool, issues: array}
     */
    public static function healthCheck()
    {
        $issues = [];

        // 1. 检查过期 License 状态异常
        $expiredActive = Db::name('ai_licenses')
            ->where('status', 1)
            ->where('expired_at', '<', date('Y-m-d H:i:s'))
            ->count();
        if ($expiredActive > 0) {
            $issues[] = ['type' => 'critical', 'message' => "{$expiredActive} 个License已过期但状态仍为有效"];
        }

        // 2. 检查禁用站点
        $disabledSites = Db::name('sites')->where('status', 0)->count();
        if ($disabledSites > 0) {
            $issues[] = ['type' => 'info', 'message' => "{$disabledSites} 个站点已禁用"];
        }

        // 3. 检查7天内到期的License
        $soon = Db::name('ai_licenses')
            ->where('status', 1)
            ->where('expired_at', '>', date('Y-m-d H:i:s'))
            ->where('expired_at', '<', date('Y-m-d H:i:s', strtotime('+7 days')))
            ->count();
        if ($soon > 0) {
            $issues[] = ['type' => 'warning', 'message' => "{$soon} 个License将在7天内到期"];
        }

        // 4. 检查24小时未支付订单
        $oldUnpaid = Db::name('payment')
            ->where('status', 0)
            ->where('create_time', '<', time() - 86400)
            ->count();
        if ($oldUnpaid > 0) {
            $issues[] = ['type' => 'info', 'message' => "{$oldUnpaid} 个超过24小时的未支付订单"];
        }

        // 5. 检查无 License 的活跃站点
        $activeSites = Db::name('sites')->where('status', 1)->column('id');
        $licensedSiteIds = Db::name('ai_licenses')->where('status', 1)->column('site_id');
        $unlicensed = array_diff($activeSites, $licensedSiteIds);
        if (!empty($unlicensed)) {
            $names = Db::name('sites')->whereIn('id', $unlicensed)->column('name');
            $issues[] = ['type' => 'warning', 'message' => "以下站点无有效License: " . implode(', ', $names)];
        }

        self::log('health_check', empty($issues) ? 1 : 0, json_encode($issues, JSON_UNESCAPED_UNICODE));

        return [
            'healthy'    => empty($issues),
            'issues'     => $issues,
            'checked_at' => date('Y-m-d H:i:s'),
        ];
    }

    /**
     * 手动执行全部定时任务（供管理后台一键触发）
     * @return array
     */
    public static function runAll()
    {
        return [
            'remind'   => self::remindExpiringLicenses(),
            'degrade'  => self::degradeExpiredLicenses(),
            'health'   => self::healthCheck(),
            'time'     => date('Y-m-d H:i:s'),
        ];
    }

    /**
     * 写执行日志
     */
    private static function log($task, $result, $output = '')
    {
        try {
            Db::name('cron_log')->insert([
                'job_id'      => 0,
                'output'      => "[{$task}] " . $output,
                'status'      => $result ? 1 : 0,
                'time_cost'   => 0,
                'create_time' => time(),
            ]);
        } catch (\Exception $e) {}
    }
}
