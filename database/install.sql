-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2026-05-31 12:41:01
-- 服务器版本： 5.7.44-log
-- PHP 版本： 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `csbcsb`
--

-- --------------------------------------------------------

--
-- 表的结构 `mcdm_admin`
--

CREATE TABLE `mcdm_admin` (
  `id` int(11) UNSIGNED NOT NULL,
  `username` varchar(32) NOT NULL COMMENT '用户名',
  `password` varchar(128) NOT NULL COMMENT '密码(hash)',
  `nickname` varchar(64) DEFAULT '' COMMENT '昵称',
  `email` varchar(128) DEFAULT '' COMMENT '邮箱',
  `mobile` varchar(16) DEFAULT '' COMMENT '手机号',
  `avatar` varchar(255) DEFAULT '' COMMENT '头像',
  `role_id` int(11) UNSIGNED DEFAULT '0' COMMENT '角色ID',
  `status` tinyint(1) DEFAULT '1' COMMENT '状态:0禁用,1启用',
  `last_login_ip` varchar(64) DEFAULT '' COMMENT '最后登录IP',
  `last_login_time` int(11) DEFAULT NULL COMMENT '最后登录时间',
  `create_time` int(11) DEFAULT NULL COMMENT '创建时间',
  `update_time` int(11) DEFAULT NULL COMMENT '更新时间',
  `delete_time` int(11) DEFAULT NULL COMMENT '删除时间(软删除)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='管理员表';

--
-- 转存表中的数据 `mcdm_admin`
--

INSERT INTO `mcdm_admin` (`id`, `username`, `password`, `nickname`, `email`, `mobile`, `avatar`, `role_id`, `status`, `last_login_ip`, `last_login_time`, `create_time`, `update_time`, `delete_time`) VALUES
(1, 'admin', '$2y$10$JWSs95KlQ7hXfb3WirA1Ruy8xLVtfQZx2nP.FHveGdRUKmxrpdGIi', '超级管理员', '', '', '', 1, 1, '222.186.56.201', 1780103069, 1778850276, NULL, NULL),
(2, 'testcrud', '$2y$10$jEjZXo8RbmZLno2CDdyOLOh1guuHFlu1wGVj7qwb9kcGt9UtdCcb6', 'Test CRUD Updated', '', '', '', 0, 1, '', NULL, 1778937479, 1778937480, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `mcdm_admin_log`
--

CREATE TABLE `mcdm_admin_log` (
  `id` int(11) UNSIGNED NOT NULL,
  `admin_id` int(11) UNSIGNED DEFAULT '0',
  `username` varchar(32) DEFAULT '',
  `title` varchar(128) DEFAULT '' COMMENT '操作标题',
  `url` varchar(255) DEFAULT '' COMMENT '请求URL',
  `method` varchar(10) DEFAULT '' COMMENT '请求方法',
  `ip` varchar(64) DEFAULT '' COMMENT 'IP地址',
  `useragent` varchar(255) DEFAULT '',
  `params` text COMMENT '请求参数',
  `status` tinyint(1) DEFAULT '1' COMMENT '状态',
  `time_cost` decimal(10,4) DEFAULT '0.0000' COMMENT '耗时(秒)',
  `create_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='管理员日志表';

-- --------------------------------------------------------

--
-- 表的结构 `mcdm_ai_tier`
--

CREATE TABLE `mcdm_ai_tier` (
  `id` int(11) UNSIGNED NOT NULL,
  `name` varchar(64) NOT NULL COMMENT '等级名称',
  `tier_key` varchar(32) NOT NULL COMMENT '等级标识(free/basic/pro/enterprise)',
  `tokens_month` bigint(20) DEFAULT '0' COMMENT '每月代币数',
  `price` decimal(10,2) DEFAULT '0.00' COMMENT '月价格(元)',
  `price_yearly` decimal(10,2) DEFAULT '0.00' COMMENT '年价格(元)',
  `description` varchar(255) DEFAULT '' COMMENT '描述',
  `features` text COMMENT '功能特性(JSON数组)',
  `sort` int(11) DEFAULT '0' COMMENT '排序',
  `status` tinyint(1) DEFAULT '1' COMMENT '状态',
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='AI会员等级配置表';

--
-- 转存表中的数据 `mcdm_ai_tier`
--

INSERT INTO `mcdm_ai_tier` (`id`, `name`, `tier_key`, `tokens_month`, `price`, `price_yearly`, `description`, `features`, `sort`, `status`, `create_time`, `update_time`) VALUES
(1, '免费版', 'free', 10001, '1.00', '1.00', '试用体验', '[\"每日1万Token\",\"基础问答模式\",\"社区支持\"]', 1, 1, 1779436001, 1780070659),
(2, '基础版', 'basic', 1000000, '99.00', '299.00', '个人开发者', '[\"100万Token/月\",\"开发模式\",\"代码自动生成\",\"邮件支持\"]', 2, 1, 1779436001, 1780103069),
(3, '专业版', 'pro', 5000000, '299.00', '2990.00', '专业团队', '[\"500万Token/月\",\"开发+插件模式\",\"优先响应\",\"专属客服\",\"API开放\"]', 3, 1, 1779436001, 1780103069),
(4, '企业版', 'enterprise', 50000000, '999.00', '9990.00', '企业级', '[\"5000万Token/月\",\"全部模式\",\"专属部署\",\"7x24技术支持\",\"定制开发\"]', 4, 1, 1779436001, 1780103069),
(5, '支付测试', '一小时', 10, '0.02', '0.00', '', '[\"测试支付\"]', 0, 1, 1779926477, 1779929094),
(6, 'vip', '基础', 10000, '1.00', '1.00', '个人', '[\"开发插件\",\"深度思考\"]', 0, 1, 1780010793, 1780070495),
(7, '1', '1', 100000, '1.00', '1.00', '1', '[\"1\"]', 0, 1, 1780103069, 1780103069);

-- --------------------------------------------------------

--
-- 表的结构 `mcdm_attachment`
--

CREATE TABLE `mcdm_attachment` (
  `id` int(11) UNSIGNED NOT NULL,
  `admin_id` int(11) UNSIGNED DEFAULT '0' COMMENT '上传管理员',
  `user_id` int(11) UNSIGNED DEFAULT '0' COMMENT '上传会员',
  `name` varchar(255) DEFAULT '' COMMENT '原始文件名',
  `path` varchar(255) DEFAULT '' COMMENT '存储路径',
  `url` varchar(255) DEFAULT '' COMMENT '访问URL',
  `ext` varchar(16) DEFAULT '' COMMENT '扩展名',
  `size` bigint(20) DEFAULT '0' COMMENT '文件大小',
  `mime` varchar(128) DEFAULT '' COMMENT 'MIME类型',
  `storage` varchar(32) DEFAULT 'local' COMMENT '存储方式',
  `sha1` varchar(64) DEFAULT '' COMMENT 'SHA1',
  `create_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='附件表';

--
-- 转存表中的数据 `mcdm_attachment`
--

INSERT INTO `mcdm_attachment` (`id`, `admin_id`, `user_id`, `name`, `path`, `url`, `ext`, `size`, `mime`, `storage`, `sha1`, `create_time`) VALUES
(1, 0, 0, 'logo.png', '', '', 'png', 204800, '', 'local', '', 1778308510),
(2, 0, 0, 'banner.jpg', '', '', 'jpg', 512000, '', 'local', '', 1778481310),
(3, 0, 0, 'doc.pdf', '', '', 'pdf', 1024000, '', 'local', '', 1778654110),
(4, 0, 0, 'avatar.jpg', '', '', 'jpg', 86016, '', 'local', '', 1778913310),
(5, 0, 0, 'bg.png', '', '', 'png', 307200, '', 'local', '', 1778913310);

-- --------------------------------------------------------

--
-- 表的结构 `mcdm_cms_article`
--

CREATE TABLE `mcdm_cms_article` (
  `id` int(11) UNSIGNED NOT NULL,
  `category_id` int(11) UNSIGNED DEFAULT '0',
  `title` varchar(255) NOT NULL,
  `content` longtext COMMENT '内容',
  `cover` varchar(255) DEFAULT '' COMMENT '封面图',
  `summary` varchar(512) DEFAULT '' COMMENT '摘要',
  `tags` varchar(255) DEFAULT '' COMMENT '标签(逗号分隔)',
  `author` varchar(64) DEFAULT '',
  `seo_title` varchar(255) DEFAULT '',
  `seo_keywords` varchar(255) DEFAULT '',
  `seo_description` varchar(512) DEFAULT '',
  `views` int(11) UNSIGNED DEFAULT '0',
  `status` tinyint(1) DEFAULT '1' COMMENT '0草稿1发布',
  `publish_time` int(11) DEFAULT NULL,
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='CMS文章表';

--
-- 转存表中的数据 `mcdm_cms_article`
--

INSERT INTO `mcdm_cms_article` (`id`, `category_id`, `title`, `content`, `cover`, `summary`, `tags`, `author`, `seo_title`, `seo_keywords`, `seo_description`, `views`, `status`, `publish_time`, `create_time`, `update_time`) VALUES
(1, 0, 'AI开发指南', '内容', '', '', '', '', '', '', '', 124, 1, NULL, 1778481291, NULL),
(2, 0, 'McdmAdmin v2.0', '内容', '', '', '', '', '', '', '', 580, 1, NULL, 1778654091, NULL),
(3, 0, 'PHP8.4新特性', '内容', '', '', '', '', '', '', '', 230, 1, NULL, 1778826891, NULL),
(4, 0, 'Vue3最佳实践', '内容', '', '', '', '', '', '', '', 340, 1, NULL, 1778913291, NULL),
(6, 0, 'Hello CMS Tiptap Test', '<p>This is bold text and this is italic. Welcome to the McdmAdmin CMS powered by Tiptap!</p>', '', '', '', '', '', '', '', 0, 1, 1778917427, 1778917427, 1778917427),
(7, 1, 'API Test Article', '<p>Test</p>', '', '', '', '', '', '', '', 0, 1, 1778937480, 1778937480, 1778937480);

-- --------------------------------------------------------

--
-- 表的结构 `mcdm_cms_category`
--

CREATE TABLE `mcdm_cms_category` (
  `id` int(11) UNSIGNED NOT NULL,
  `parent_id` int(11) UNSIGNED DEFAULT '0',
  `name` varchar(100) NOT NULL,
  `sort` int(11) UNSIGNED DEFAULT '0',
  `description` varchar(255) DEFAULT '',
  `status` tinyint(1) DEFAULT '1',
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `mcdm_cms_category`
--

INSERT INTO `mcdm_cms_category` (`id`, `parent_id`, `name`, `sort`, `description`, `status`, `create_time`, `update_time`) VALUES
(1, 0, '新闻动态', 1, '公司新闻与行业动态', 1, 1778916386, 1778916386),
(2, 0, '产品中心', 2, '产品介绍与展示', 1, 1778916386, 1778916386),
(3, 0, '关于我们', 3, '公司介绍与联系方式', 1, 1778916386, 1778916386),
(4, 1, '公司新闻', 1, '', 1, 1778916386, 1778916386),
(5, 1, '行业资讯', 2, '', 1, 1778916386, 1778916386),
(6, 2, '产品A系列', 1, '', 1, 1778916386, 1778916386),
(7, 2, '产品B系列', 2, '', 1, 1778916386, 1778916386);

-- --------------------------------------------------------

--
-- 表的结构 `mcdm_config`
--

CREATE TABLE `mcdm_config` (
  `id` int(11) UNSIGNED NOT NULL,
  `name` varchar(64) NOT NULL COMMENT '配置键名',
  `group` varchar(32) DEFAULT 'site' COMMENT '分组',
  `value` text COMMENT '配置值',
  `type` varchar(16) DEFAULT 'string' COMMENT '值类型',
  `description` varchar(255) DEFAULT '' COMMENT '说明',
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='系统配置表';

--
-- 转存表中的数据 `mcdm_config`
--

INSERT INTO `mcdm_config` (`id`, `name`, `group`, `value`, `type`, `description`, `create_time`, `update_time`) VALUES
(1, 'site_name', 'site', 'McdmAdmin', 'string', '站点名称', NULL, NULL),
(2, 'site_logo', 'site', '', 'string', 'LOGO', NULL, NULL),
(3, 'site_icp', 'site', '', 'string', '备案号', NULL, NULL),
(4, 'upload_driver', 'upload', 'local', 'string', '上传驱动', NULL, NULL),
(5, 'upload_max_size', 'upload', '10485760', 'number', '最大上传(字节)', NULL, NULL),
(6, 'upload_allowed_ext', 'upload', 'jpg,jpeg,png,gif,doc,docx,pdf,zip', 'string', '允许格式', NULL, NULL),
(7, 'ai_api_url', 'ai', 'https://api.openai.com/v1', 'string', 'AI助手配置', NULL, NULL),
(8, 'ai_api_key', 'ai', 'sk-test123', 'string', 'AI助手配置', NULL, NULL),
(9, 'ai_model', 'ai', 'gpt-4', 'string', 'AI助手配置', NULL, NULL),
(10, 'ai_max_tokens', 'ai', '4000', 'string', 'AI助手配置', NULL, NULL),
(11, 'ai_trial_limit', 'ai', '10', 'number', 'AI试用每日额度', 1779283457, 1780103069),
(12, 'pay_gateway', 'payment', 'https://www.machuangziyuan.cn/api/pay', 'string', '支付配置-gateway', 1779287392, NULL),
(13, 'pay_enabled', 'payment', '1', 'string', '支付配置-enabled', 1779287392, NULL),
(14, 'ai_tiers', 'ai', '{\"1\":{\"name\":\"1\",\"limit\":100000,\"price\":1,\"price_yearly\":1,\"description\":\"1\",\"features\":\"[\\\"1\\\"]\",\"sort\":0,\"status\":1},\"basic\":{\"name\":\"基础版\",\"limit\":1000000,\"price\":99,\"price_yearly\":299,\"description\":\"个人开发者\",\"features\":\"[\\\"100万Token\\/月\\\",\\\"开发模式\\\",\\\"代码自动生成\\\",\\\"邮件支持\\\"]\",\"sort\":2,\"status\":1},\"pro\":{\"name\":\"专业版\",\"limit\":5000000,\"price\":299,\"price_yearly\":2990,\"description\":\"专业团队\",\"features\":\"[\\\"500万Token\\/月\\\",\\\"开发+插件模式\\\",\\\"优先响应\\\",\\\"专属客服\\\",\\\"API开放\\\"]\",\"sort\":3,\"status\":1},\"enterprise\":{\"name\":\"企业版\",\"limit\":50000000,\"price\":999,\"price_yearly\":9990,\"description\":\"企业级\",\"features\":\"[\\\"5000万Token\\/月\\\",\\\"全部模式\\\",\\\"专属部署\\\",\\\"7x24技术支持\\\",\\\"定制开发\\\"]\",\"sort\":4,\"status\":1}}', 'string', '', 1779928574, 1780103069);

-- --------------------------------------------------------

--
-- 表的结构 `mcdm_cron`
--

CREATE TABLE `mcdm_cron` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL COMMENT '任务名称',
  `command` varchar(255) NOT NULL COMMENT '执行命令',
  `cron_expression` varchar(50) NOT NULL COMMENT 'Cron表达式',
  `description` varchar(255) DEFAULT '' COMMENT '任务描述',
  `status` tinyint(1) DEFAULT '1' COMMENT '状态 1启用 0禁用',
  `last_run_time` int(11) DEFAULT '0' COMMENT '上次执行时间',
  `next_run_time` int(11) DEFAULT '0' COMMENT '下次执行时间',
  `run_count` int(11) DEFAULT '0' COMMENT '执行次数',
  `create_time` int(11) DEFAULT '0',
  `update_time` int(11) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='定时任务表';

--
-- 转存表中的数据 `mcdm_cron`
--

INSERT INTO `mcdm_cron` (`id`, `name`, `command`, `cron_expression`, `description`, `status`, `last_run_time`, `next_run_time`, `run_count`, `create_time`, `update_time`) VALUES
(1, '清理日志', 'php think clear:log', '0 2 * * *', '每天凌晨2点清理系统日志', 1, 0, 0, 0, 1778919925, 1778919925),
(2, '数据备份', 'php think backup:db', '0 3 * * 0', '每周日凌晨3点备份数据库', 1, 0, 0, 0, 1778919925, 1778919925),
(3, '缓存清理', 'php think clear:cache', '*/30 * * * *', '每30分钟清理缓存', 0, 0, 0, 0, 1778919925, 1778919925);

-- --------------------------------------------------------

--
-- 表的结构 `mcdm_cron_job`
--

CREATE TABLE `mcdm_cron_job` (
  `id` int(11) UNSIGNED NOT NULL,
  `name` varchar(64) NOT NULL,
  `command` varchar(255) NOT NULL,
  `cron_expression` varchar(32) NOT NULL,
  `description` varchar(255) DEFAULT '',
  `status` tinyint(1) DEFAULT '1',
  `last_run_time` int(11) DEFAULT NULL,
  `next_run_time` int(11) DEFAULT NULL,
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='定时任务表';

-- --------------------------------------------------------

--
-- 表的结构 `mcdm_cron_log`
--

CREATE TABLE `mcdm_cron_log` (
  `id` int(11) UNSIGNED NOT NULL,
  `job_id` int(11) UNSIGNED NOT NULL,
  `status` tinyint(1) DEFAULT '1' COMMENT '0失败1成功',
  `output` text COMMENT '输出内容',
  `time_cost` decimal(10,4) DEFAULT '0.0000',
  `create_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='定时任务日志';

-- --------------------------------------------------------

--
-- 表的结构 `mcdm_demo`
--

CREATE TABLE `mcdm_demo` (
  `id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL DEFAULT '',
  `create_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 表的结构 `mcdm_menu`
--

CREATE TABLE `mcdm_menu` (
  `id` int(11) UNSIGNED NOT NULL,
  `parent_id` int(11) UNSIGNED DEFAULT '0' COMMENT '父级ID',
  `name` varchar(64) NOT NULL COMMENT '路由名称',
  `title` varchar(64) NOT NULL COMMENT '菜单标题',
  `icon` varchar(64) DEFAULT '' COMMENT '图标',
  `path` varchar(128) DEFAULT '' COMMENT '路由路径',
  `component` varchar(128) DEFAULT '' COMMENT '组件路径',
  `type` tinyint(1) DEFAULT '1' COMMENT '类型:1目录,2菜单,3按钮',
  `permission` varchar(128) DEFAULT '' COMMENT '权限标识',
  `status` tinyint(1) DEFAULT '1' COMMENT '状态',
  `sort` int(11) DEFAULT '0' COMMENT '排序',
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='菜单规则表';

--
-- 转存表中的数据 `mcdm_menu`
--

INSERT INTO `mcdm_menu` (`id`, `parent_id`, `name`, `title`, `icon`, `path`, `component`, `type`, `permission`, `status`, `sort`, `create_time`, `update_time`) VALUES
(1, 0, 'dashboard', '控制台', 'HomeOutline', '/dashboard', 'views/dashboard/index', 1, '', 1, 1, 1778850276, NULL),
(2, 0, 'auth', '权限管理', 'ShieldOutline', '/auth', '', 1, '', 1, 2, 1778850276, NULL),
(3, 2, 'admin', '管理员管理', '', '/auth/admin', 'views/auth/admin', 2, 'auth:admin:list', 1, 1, 1778850276, NULL),
(4, 2, 'role', '角色管理', '', '/auth/role', 'views/auth/role', 2, 'auth:role:list', 1, 2, 1778850276, NULL),
(5, 2, 'menu', '菜单规则', '', '/auth/menu', 'views/auth/menu', 2, 'auth:menu:list', 1, 3, 1778850276, NULL),
(6, 2, 'log', '管理员日志', '', '/auth/log', 'views/auth/log', 2, 'auth:log:list', 1, 4, 1778850276, NULL),
(7, 0, 'user', '会员管理', 'PeopleOutline', '/user', '', 1, '', 1, 3, 1778850276, NULL),
(8, 7, 'user-list', '会员列表', '', '/user/index', 'views/user/index', 2, 'user:list', 1, 1, 1778850276, NULL),
(9, 7, 'user-group', '会员分组', '', '/user/group', 'views/user/group', 2, 'user:group:list', 1, 2, 1778850276, NULL),
(10, 0, 'system', '系统管理', 'SettingsOutline', '/system', '', 1, '', 1, 4, 1778850276, NULL),
(11, 10, 'config', '系统配置', '', '/system/config', 'views/system/config', 2, 'system:config', 1, 1, 1778850276, NULL),
(12, 10, 'attachment', '附件管理', '', '/system/attachment', 'views/system/attachment', 2, 'system:attachment:list', 1, 2, 1778850276, NULL),
(13, 0, 'data', '数据管理', 'ShieldCheckmarkOutline', '/data', '', 1, '', 1, 5, 1778850276, NULL),
(16, 0, 'profile', '个人资料', 'PersonOutline', '/profile', 'views/profile/index', 2, '', 1, 17, 1778850276, NULL),
(17, 0, 'AI助手', 'AI智能开发', 'FlashOutline', '/ai', '', 2, '', 1, 8, 1778908484, NULL),
(19, 13, 'sensitive-log', '敏感数据修改记录', '', '/data/sensitive-log', 'views/data/security/sensitive-log', 2, 'data:security:sensitive-log:list', 1, 2, 1779024418, NULL),
(20, 13, 'recycle-rule', '数据回收规则管理', '', '/data/recycle-rule', 'views/data/security/recycle-rule', 2, 'data:security:recycle-rule:list', 1, 3, 1779024418, NULL),
(21, 13, 'sensitive-field-rule', '敏感字段规则管理', '', '/data/sensitive-field-rule', 'views/data/security/sensitive-field-rule', 2, 'data:security:sensitive-field-rule:list', 1, 4, 1779024418, NULL),
(24, 0, 'cms', 'CMS', '', '/cms', '', 1, '', 1, 6, 1778917074, 1778938665),
(25, 24, 'CmsCategory', '栏目管理', '', '/cms/category', '', 1, '', 1, 1, 1778917074, 1778917074),
(26, 24, 'CmsArticle', '文章管理', '', '/cms/article', '', 1, '', 1, 2, 1778917074, 1778917074),
(27, 0, 'Notification', '消息通知', '', '/notification', '', 1, '', 1, 10, 1778917892, 1778917892),
(31, 10, 'monitor', '系统监控', 'monitor-outline', '/monitor', '', 1, '', 1, 13, 1778920887, NULL),
(33, 0, 'module', '模块市场', 'CubeOutline', '/module', '', 1, '', 1, 11, 1778938307, NULL),
(36, 13, 'security-recycle', '数据回收站', '', '/data/security-recycle', 'views/data/security/recycle', 2, 'data:security:recycle:list', 1, 1, 1779024657, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `mcdm_notification`
--

CREATE TABLE `mcdm_notification` (
  `id` int(11) UNSIGNED NOT NULL,
  `user_id` int(11) UNSIGNED DEFAULT '0',
  `type` varchar(32) DEFAULT 'system' COMMENT 'system/approval/message',
  `title` varchar(255) DEFAULT '',
  `content` text,
  `target_url` varchar(255) DEFAULT '',
  `is_read` tinyint(1) DEFAULT '0',
  `read_time` int(11) DEFAULT NULL,
  `create_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='消息通知表';

--
-- 转存表中的数据 `mcdm_notification`
--

INSERT INTO `mcdm_notification` (`id`, `user_id`, `type`, `title`, `content`, `target_url`, `is_read`, `read_time`, `create_time`) VALUES
(1, 1, 'system', 'Welcome to McdmAdmin', 'System initialized successfully', '/dashboard', 1, 1778917687, 1778917666);

-- --------------------------------------------------------

--
-- 表的结构 `mcdm_payment`
--

CREATE TABLE `mcdm_payment` (
  `id` int(11) UNSIGNED NOT NULL,
  `order_no` varchar(32) NOT NULL COMMENT '订单号',
  `user_id` int(11) UNSIGNED DEFAULT '0',
  `channel` varchar(16) NOT NULL COMMENT 'wechat/alipay',
  `amount` decimal(10,2) NOT NULL,
  `subject` varchar(255) DEFAULT '' COMMENT '商品描述',
  `product_type` varchar(32) DEFAULT '',
  `product_id` varchar(64) DEFAULT '',
  `return_url` varchar(500) DEFAULT '',
  `status` tinyint(1) DEFAULT '0' COMMENT '0待支付1已支付2已退款',
  `pay_time` int(11) DEFAULT NULL,
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='支付单';

--
-- 转存表中的数据 `mcdm_payment`
--

INSERT INTO `mcdm_payment` (`id`, `order_no`, `user_id`, `channel`, `amount`, `subject`, `product_type`, `product_id`, `return_url`, `status`, `pay_time`, `create_time`, `update_time`) VALUES
(1, 'PAY20260516001', 1, 'alipay', '99.00', '', '', '', '', 1, NULL, 1778394910, NULL),
(2, 'PAY20260516002', 1, 'alipay', '199.00', '', '', '', '', 1, NULL, 1778567710, NULL),
(3, 'PAY20260516003', 1, 'alipay', '299.00', '', '', '', '', 1, NULL, 1778740510, NULL),
(4, 'PAY20260516004', 1, 'alipay', '49.90', '', '', '', '', 1, NULL, 1778913310, NULL),
(5, 'AI202605202113393520', 1, 'alipay', '99.00', 'AI会员-基础版', '', '', '', 0, NULL, 1779282819, NULL),
(6, 'AI202605202114282452', 1, 'wechat', '99.00', 'AI会员-基础版', '', '', '', 0, NULL, 1779282868, NULL),
(7, 'AI202605202244411443', 1, 'alipay', '299.00', 'AI会员-专业版', '', '', '', 0, NULL, 1779288281, NULL),
(8, 'AI202605212134434546', 1, 'wechat', '99.00', 'AI会员-基础版', '', '', '', 0, NULL, 1779370483, NULL),
(9, 'AI202605221341307206', 1, 'alipay', '99.00', 'AI会员-基础版', '', '', '', 0, NULL, 1779428490, NULL),
(10, 'AI202605221343012453', 1, 'alipay', '99.00', 'AI会员-基础版', '', '', '', 0, NULL, 1779428581, NULL),
(11, 'SW1779596526985', 1, 'alipay', '99.00', 'AI会员-基础版', '', '', '', 1, 1779597209, 1779428853, 1779597209),
(12, 'AI202605231332254025', 1, 'alipay', '99.00', 'AI会员-基础版', '', '', '', 0, 1779516000, 1779514345, 1779515849),
(13, 'AI202605231357297447', 1, 'alipay', '99.00', 'AI会员-基础版', '', '', '', 0, NULL, 1779515849, NULL),
(14, 'AI202605231404202868', 1, 'alipay', '99.00', 'AI会员-基础版', '', '', '', 0, 1779519600, 1779516260, 1779516261),
(15, 'AI202605231415314689', 1, 'alipay', '99.00', 'AI会员-基础版', '', '', '', 1, 1779523200, 1779516931, 1779516931),
(16, 'AI202605231422445336', 1, 'alipay', '99.00', 'AI会员-基础版', '', '', '', 1, 1779517366, 1779517364, 1779517366),
(17, 'AI202605231424523798', 1, 'alipay', '99.00', 'AI会员-基础版', '', '', '', 0, NULL, 1779517492, NULL),
(18, 'AI202605231427436215', 1, 'alipay', '99.00', 'AI会员-基础版', '', '', '', 0, NULL, 1779517663, NULL),
(19, 'AI202605231428182223', 1, 'alipay', '99.00', 'AI会员-基础版', '', '', '', 0, NULL, 1779517698, NULL),
(20, 'AI202605241554007889', 0, 'alipay', '99.00', 'McdmAdmin AI 基础版', '', '', '', 0, NULL, 1779609240, NULL),
(21, 'AI202605241554299582', 0, 'alipay', '99.00', 'McdmAdmin AI 基础版', '', '', '', 0, NULL, 1779609269, NULL),
(22, 'AI202605241554387196', 0, 'wechat', '99.00', 'McdmAdmin AI 基础版', '', '', '', 0, NULL, 1779609278, NULL),
(23, 'AI202605241621358267', 0, 'alipay', '99.00', 'McdmAdmin AI 基础版', '', '', '', 0, NULL, 1779610895, NULL),
(24, 'AI202605241638018267', 0, 'alipay', '0.00', 'McdmAdmin AI 免费版', '', '', '', 0, NULL, 1779611881, NULL),
(25, 'AI202605241725114890', 0, 'alipay', '0.00', 'McdmAdmin AI 免费版', '', '', '', 0, NULL, 1779614711, NULL),
(26, 'AI202605241830236960', 0, 'wechat', '99.00', 'McdmAdmin AI 基础版', '', '', '', 0, NULL, 1779618623, NULL),
(27, 'AI202605241833029648', 0, 'alipay', '99.00', 'McdmAdmin AI 基础版', '', '', '', 0, NULL, 1779618782, NULL),
(28, 'AI202605241839122836', 0, 'alipay', '99.00', 'McdmAdmin AI 基础版', '', '', '', 0, NULL, 1779619152, NULL),
(29, 'AI202605241843364350', 0, 'alipay', '99.00', 'McdmAdmin AI 基础版', '', '', '', 0, NULL, 1779619416, NULL),
(30, 'AI202605241844134440', 0, 'alipay', '99.00', 'McdmAdmin AI 基础版', '', '', '', 0, NULL, 1779619453, NULL),
(31, 'AI202605241845514367', 0, 'alipay', '99.00', 'McdmAdmin AI 基础版', '', '', '', 0, NULL, 1779619551, NULL),
(32, 'AI202605241845558604', 0, 'alipay', '99.00', 'McdmAdmin AI 基础版', '', '', '', 0, NULL, 1779619555, NULL),
(33, 'AI202605241847011180', 0, 'alipay', '99.00', 'McdmAdmin AI 基础版', '', '', '', 0, NULL, 1779619621, NULL),
(34, 'AI202605241848337413', 0, 'alipay', '99.00', 'McdmAdmin AI 基础版', '', '', '', 0, NULL, 1779619713, NULL),
(35, 'AI202605241850422023', 0, 'alipay', '299.00', 'McdmAdmin AI 专业版', '', '', '', 0, NULL, 1779619842, NULL),
(36, 'AI202605241910501315', 0, 'alipay', '99.00', 'McdmAdmin AI 基础版', '', '', '', 0, NULL, 1779621050, NULL),
(37, 'AI202605242106049596', 0, 'wechat', '99.00', 'McdmAdmin AI 基础版', '', '', '', 0, NULL, 1779627964, NULL),
(38, 'AI202605242252545437', 0, 'alipay', '99.00', 'McdmAdmin AI 基础版', '', '', '', 0, NULL, 1779634374, NULL),
(39, 'AI202605242307081399', 0, 'alipay', '99.00', 'McdmAdmin AI 基础版', '', '', '', 0, NULL, 1779635228, NULL),
(40, 'AI202605242340126097', 0, 'alipay', '99.00', 'McdmAdmin AI 基础版', '', '', '', 0, NULL, 1779637212, NULL),
(41, 'AI202605250826245960', 0, 'wechat', '99.00', 'McdmAdmin AI 基础版', '', '', '', 0, NULL, 1779668784, NULL),
(42, 'AI202605250849412017', 0, 'wechat', '99.00', 'McdmAdmin AI 基础版', '', '', '', 1, NULL, 1779670181, 1779932297),
(43, 'AI202605250850337597', 0, 'alipay', '0.00', 'McdmAdmin AI 免费版', '', '', '', 0, NULL, 1779670233, NULL),
(44, 'AI202605250905316220', 0, 'alipay', '99.00', 'McdmAdmin AI 基础版', '', '', '', 0, NULL, 1779671131, NULL),
(45, 'AI202605250906001158', 0, 'alipay', '99.00', 'McdmAdmin AI 基础版', '', '', '', 0, NULL, 1779671160, NULL),
(46, 'AI202605250906372993', 0, 'alipay', '99.00', 'McdmAdmin AI 基础版', '', '', '', 1, NULL, 1779671197, 1779932297),
(47, 'AI202605250907581311', 0, 'alipay', '99.00', 'McdmAdmin AI 基础版', '', '', '', 1, NULL, 1779671278, 1779932297),
(48, 'AI202605251258481996', 0, 'wechat', '99.00', 'McdmAdmin AI 基础版', '', '', '', 1, NULL, 1779685128, 1779932297),
(49, 'AI202605251259201997', 0, 'alipay', '99.00', 'McdmAdmin AI 基础版', '', '', '', 1, NULL, 1779685160, 1779932297),
(50, 'AI202605251259353291', 0, 'alipay', '0.00', 'McdmAdmin AI 免费版', '', '', '', 0, NULL, 1779685175, NULL),
(51, 'AI202605251626357556', 0, 'alipay', '99.00', 'McdmAdmin AI 基础版', '', '', '', 1, 1779697596, 1779697595, 1779697596),
(52, 'AI202605251628015761', 0, 'wechat', '99.00', 'McdmAdmin AI 基础版', '', '', '', 1, 1779697683, 1779697681, 1779697683),
(53, 'AI202605251653049290', 0, 'alipay', '0.00', 'McdmAdmin AI 免费版', '', '', '', 0, NULL, 1779699184, NULL),
(54, 'AI202605251654276594', 0, 'alipay', '99.00', 'McdmAdmin AI 基础版', '', '', '', 0, NULL, 1779699267, NULL),
(55, 'AI202605251654454508', 0, 'alipay', '99.00', 'McdmAdmin AI 基础版', '', '', '', 0, NULL, 1779699285, NULL),
(56, 'AI202605251656327412', 0, 'alipay', '0.00', 'McdmAdmin AI 免费版', '', '', '', 0, NULL, 1779699392, NULL),
(57, 'AI202605251656481316', 0, 'alipay', '0.00', 'McdmAdmin AI 免费版', '', '', '', 0, NULL, 1779699408, NULL),
(58, 'AI202605251657026339', 0, 'alipay', '99.00', 'McdmAdmin AI 基础版', '', '', '', 0, NULL, 1779699422, NULL),
(59, 'AI202605251657367956', 0, 'wechat', '99.00', 'McdmAdmin AI 基础版', '', '', '', 0, NULL, 1779699456, NULL),
(60, 'AI202605251657481306', 0, 'alipay', '99.00', 'McdmAdmin AI 基础版', '', '', '', 0, NULL, 1779699468, NULL),
(61, 'AI202605251700227494', 0, 'alipay', '99.00', 'McdmAdmin AI 基础版', '', '', '', 0, NULL, 1779699622, NULL),
(62, 'AI202605251700223342', 0, 'alipay', '0.00', 'McdmAdmin AI 免费版', '', '', '', 0, NULL, 1779699622, NULL),
(63, 'PAY202605251700247349', 0, 'alipay', '1.00', 'Test', '', '', '', 0, NULL, 1779699624, NULL),
(64, 'AI202605251703343859', 0, 'alipay', '0.00', 'McdmAdmin AI 免费版', '', '', '', 0, NULL, 1779699814, NULL),
(65, 'AI202605251713031641', 0, 'alipay', '0.00', 'McdmAdmin AI 免费版', '', '', '', 1, 1779700385, 1779700383, 1779700385),
(66, 'AI202605252247077131', 0, 'wechat', '99.00', 'McdmAdmin AI 基础版', '', '', '', 0, NULL, 1779720427, NULL),
(67, 'AI202605252247213675', 0, 'alipay', '299.00', 'McdmAdmin AI 专业版', '', '', '', 0, NULL, 1779720441, NULL),
(68, 'AI202605252248475604', 0, 'alipay', '299.00', 'McdmAdmin AI 专业版', '', '', '', 0, NULL, 1779720527, NULL),
(69, 'AI202605252248488892', 0, 'alipay', '299.00', 'McdmAdmin AI 专业版', '', '', '', 0, NULL, 1779720528, NULL),
(70, 'AI202605252248483760', 0, 'alipay', '299.00', 'McdmAdmin AI 专业版', '', '', '', 0, NULL, 1779720528, NULL),
(71, 'AI202605252249438183', 0, 'alipay', '299.00', 'McdmAdmin AI 专业版', '', '', '', 0, NULL, 1779720583, NULL),
(72, 'AI202605260613378671', 0, 'alipay', '999.00', 'McdmAdmin AI 企业版', '', '', '', 0, NULL, 1779747217, NULL),
(73, 'AI202605260614269093', 0, 'alipay', '999.00', 'McdmAdmin AI 企业版', '', '', '', 0, NULL, 1779747266, NULL),
(74, 'AI202605260614467955', 0, 'alipay', '999.00', 'McdmAdmin AI 企业版', '', '', '', 0, NULL, 1779747286, NULL),
(75, 'AI202605260614527692', 0, 'wechat', '999.00', 'McdmAdmin AI 企业版', '', '', '', 1, 1779747294, 1779747292, 1779747294),
(76, 'AI202605260941543531', 0, 'alipay', '0.00', 'McdmAdmin AI 免费版', '', '', '', 1, 1779759714, 1779759714, 1779759714),
(77, 'AI202605260942049491', 0, 'alipay', '299.00', 'McdmAdmin AI 专业版', '', '', '', 0, NULL, 1779759724, NULL),
(78, 'AI202605260943447330', 0, 'alipay', '999.00', 'McdmAdmin AI 企业版', '', '', '', 0, NULL, 1779759824, NULL),
(79, 'AI202605260945009163', 0, 'alipay', '999.00', 'McdmAdmin AI 企业版', '', '', '', 0, NULL, 1779759900, NULL),
(80, 'AI202605260946062633', 0, 'alipay', '99.00', 'McdmAdmin AI 基础版', '', '', '', 0, NULL, 1779759966, NULL),
(81, 'AI202605260946289031', 0, 'alipay', '99.00', 'McdmAdmin AI 基础版', '', '', '', 0, NULL, 1779759988, NULL),
(82, 'AI202605260946323392', 0, 'alipay', '99.00', 'McdmAdmin AI 基础版', '', '', '', 0, NULL, 1779759992, NULL),
(83, 'AI202605261017231477', 0, 'alipay', '99.00', 'McdmAdmin AI 基础版', '', '', '', 0, NULL, 1779761843, NULL),
(84, 'AI202605261020546407', 0, 'alipay', '99.00', 'McdmAdmin AI 基础版', '', '', '', 0, NULL, 1779762054, NULL),
(85, 'AI202605261021253187', 0, 'alipay', '99.00', 'McdmAdmin AI 基础版', '', '', '', 0, NULL, 1779762085, NULL),
(86, 'AI202605261021407108', 0, 'alipay', '299.00', 'McdmAdmin AI 专业版', '', '', '', 0, NULL, 1779762100, NULL),
(87, 'AI202605261022138945', 0, 'wechat', '299.00', 'McdmAdmin AI 专业版', '', '', '', 0, NULL, 1779762133, NULL),
(88, 'AI202605261022193847', 0, 'wechat', '299.00', 'McdmAdmin AI 专业版', '', '', '', 1, 1779762143, 1779762139, 1779762143),
(89, 'AI202605261022433438', 0, 'wechat', '99.00', 'McdmAdmin AI 基础版', '', '', '', 0, NULL, 1779762163, NULL),
(90, 'AI202605261038507991', 0, 'alipay', '99.00', 'McdmAdmin AI 基础版', '', '', '', 0, NULL, 1779763130, NULL),
(91, 'AI202605261040118281', 0, 'alipay', '0.00', 'McdmAdmin AI 免费版', '', '', '', 1, 1779763212, 1779763211, 1779763212),
(92, 'AI202605261421456632', 0, 'alipay', '0.00', 'McdmAdmin AI 基础版', '', '', '', 1, 1779776506, 1779776505, 1779776506),
(93, 'AI202605261428416561', 0, 'alipay', '0.00', 'McdmAdmin AI 免费版', '', '', '', 0, NULL, 1779776921, NULL),
(94, 'AI202605261435587657', 0, 'alipay', '0.00', 'McdmAdmin AI 免费版', '', '', '', 0, NULL, 1779777358, NULL),
(95, 'AI202605261919518353', 0, 'alipay', '0.00', 'McdmAdmin AI 基础版', '', '', '', 0, NULL, 1779794391, NULL),
(96, 'AI202605261939408240', 1, 'alipay', '299.00', 'AI会员-专业版', '', '', '', 0, NULL, 1779795580, NULL),
(97, 'AI202605261949287920', 1, 'alipay', '299.00', 'AI会员-专业版', '', '', '', 0, NULL, 1779796168, NULL),
(98, 'AI202605262008162300', 1, 'alipay', '999.00', 'AI会员-企业版', '', '', '', 1, NULL, 1779797296, 1779932297),
(99, 'AI202605262009174453', 1, 'wechat', '299.00', 'AI会员-专业版', '', '', '', 0, NULL, 1779797357, NULL),
(100, 'AI202605262009338655', 1, 'alipay', '299.00', 'AI会员-专业版', '', '', '', 0, NULL, 1779797373, NULL),
(101, 'AI202605262016015329', 1, 'wechat', '299.00', 'AI会员-专业版', '', '', '', 0, NULL, 1779797761, NULL),
(102, 'AI202605262016238243', 1, 'wechat', '299.00', 'AI会员-专业版', '', '', '', 0, NULL, 1779797783, NULL),
(103, 'AI202605262017022243', 1, 'alipay', '299.00', 'AI会员-专业版', '', '', '', 0, NULL, 1779797822, NULL),
(104, 'AI202605262024466660', 1, 'wechat', '299.00', 'AI会员-专业版', '', '', '', 0, NULL, 1779798286, NULL),
(105, 'AI202605262028266083', 1, 'wechat', '299.00', 'AI会员-专业版', '', '', '', 1, NULL, 1779798506, 1779932297),
(106, 'AI202605262033099831', 1, 'alipay', '999.00', 'AI会员-企业版', '', '', '', 0, NULL, 1779798789, NULL),
(107, 'AI202605262033209361', 1, 'wechat', '999.00', 'AI会员-企业版', '', '', '', 0, NULL, 1779798800, NULL),
(108, 'AI202605262145237622', 1, 'wechat', '299.00', 'AI会员-专业版', '', '', '', 0, NULL, 1779803123, NULL),
(109, 'AI202605272025115792', 1, 'alipay', '299.00', 'AI会员-专业版', '', '', '', 0, NULL, 1779884711, NULL),
(110, 'AI202605280728376546', 1, 'wechat', '299.00', 'AI会员-专业版', '', '', '', 0, NULL, 1779924517, NULL),
(111, 'AI202605280814178896', 1, 'wechat', '0.02', 'AI会员-支付测试', '', '', '', 1, NULL, 1779927257, 1779932297),
(112, 'AI202605280828575100', 1, 'alipay', '0.02', 'AI会员-支付测试', '', '', '', 0, NULL, 1779928137, NULL),
(113, 'AI202605280847218776', 1, 'alipay', '0.02', 'AI会员-支付测试', '', '', '', 0, NULL, 1779929241, NULL),
(114, 'AI202605280901263322', 1, 'alipay', '99.00', 'AI会员-基础版', '', '', '', 1, 1779930087, 1779930086, 1779930087),
(115, 'AI202605280903228693', 1, 'alipay', '99.00', 'AI会员-基础版', '', '', '', 1, 1779930202, 1779930202, 1779930203),
(116, 'AI202605280904316493', 1, 'wechat', '299.00', 'AI会员-专业版', '', '', '', 0, NULL, 1779930271, NULL),
(117, 'AI202605280908013850', 1, 'wechat', '0.02', 'AI会员-支付测试', '', '', '', 1, NULL, 1779930481, 1779932297),
(118, 'AI202605280928176375', 1, 'wechat', '0.02', 'AI会员-支付测试', '', '', '', 1, NULL, 1779931697, 1779932297),
(119, 'AI202605280937293807', 1, 'alipay', '299.00', 'AI会员-专业版', '', '', '', 1, 1779932249, 1779932249, 1779932250),
(120, 'PAY202605281034016924', 1, 'alipay', '9.99', 'test模块购买', '', '', '', 0, NULL, 1779935641, NULL),
(121, 'PAY202605281034455614', 1, 'alipay', '29.99', '购买模块:测试插件', '', '', '', 1, 1779935687, 1779935685, 1779935687),
(122, 'AI202605281044221700', 1, 'wechat', '0.02', 'AI会员-支付测试', '', '', '', 1, 1779936280, 1779936262, 1779936280),
(123, 'PAY202605281045081295', 1, 'alipay', '1.00', '购买模块: 2', '', '', '', 0, NULL, 1779936308, NULL),
(124, 'PAY202605281045094304', 1, 'alipay', '1.00', '购买模块: 2', '', '', '', 1, 1779936338, 1779936309, 1779936338),
(125, 'PAY202605281103101948', 1, 'alipay', '19.99', 'E2E测试', '', '', '', 0, NULL, 1779937390, NULL),
(126, 'AI202605281111393378', 1, 'wechat', '0.02', 'AI会员-支付测试', '', '', '', 1, 1779937917, 1779937899, 1779937917),
(127, 'PAY202605281116025641', 1, 'alipay', '1.00', '购买模块: 2', 'module', '1', '', 1, 1779938182, 1779938162, 1779938182),
(128, 'PAY202605281229043830', 1, 'alipay', '1.00', '购买模块: Hello World 测试插件', 'module', '123', '', 0, NULL, 1779942544, NULL),
(129, 'PAY202605281232271847', 1, 'alipay', '11.00', '购买模块: Hello World 测试插件', 'module', '22233', '', 0, NULL, 1779942747, NULL),
(130, 'PAY202605281354182317', 1, 'alipay', '11.00', '购买模块: Hello World 测试插件', 'module', '22233', '', 0, NULL, 1779947658, NULL),
(131, 'AI202605281355017187', 1, 'wechat', '0.02', 'AI会员-支付测试', '', '', '', 0, NULL, 1779947701, NULL),
(132, 'PAY202605281418557130', 1, 'alipay', '11.00', '购买模块: Hello World 测试插件', 'module', '22233', '', 0, NULL, 1779949135, NULL),
(133, 'PAY202605281420178746', 1, 'alipay', '11.00', '购买模块: Hello World 测试插件', 'module', '22233', '', 0, NULL, 1779949217, NULL),
(134, 'PAY202605281420519463', 1, 'alipay', '11.00', '购买模块: Hello World 测试插件', 'module', '22233', '', 0, NULL, 1779949251, NULL),
(135, 'PAY202605281614024562', 1, 'wechat', '1.00', '购买模块: Hello World 测试插件', 'module', '123', '', 0, NULL, 1779956042, NULL),
(136, 'PAY202605281619397692', 1, 'wechat', '11.00', '购买模块: Hello World 测试插件', 'module', '22233', '', 0, NULL, 1779956379, NULL),
(137, 'PAY202605281625198643', 1, 'wechat', '11.00', '购买模块: Hello World 测试插件', 'module', '22233', '', 0, NULL, 1779956719, NULL),
(138, 'PAY202605281627474043', 1, 'wechat', '11.00', '购买模块: Hello World 测试插件', 'module', '22233', '', 0, NULL, 1779956867, NULL),
(139, 'PAY202605281631231156', 1, 'alipay', '11.00', '购买模块: Hello World 测试插件', 'module', '22233', '', 0, NULL, 1779957083, NULL),
(140, 'PAY202605281632593199', 1, 'wechat', '11.00', '购买模块: Hello World 测试插件', 'module', '22233', '', 0, NULL, 1779957179, NULL),
(141, 'PAY202605281641118761', 1, 'wechat', '11.00', '购买模块: 插件', 'module', '22233', '', 0, NULL, 1779957671, NULL),
(142, 'PAY202605281645461707', 1, 'wechat', '11.00', '购买模块: 插件', 'module', '22233', '', 0, NULL, 1779957946, NULL),
(143, 'PAY202605281650511433', 1, 'wechat', '11.00', '购买模块: 插件', 'module', '22233', '', 0, NULL, 1779958251, NULL),
(144, 'PAY202605281659405362', 1, 'wechat', '11.00', '购买模块: 插件', 'module', '22233', '', 0, NULL, 1779958780, NULL),
(145, 'PAY202605281700068109', 1, 'wechat', '11.00', '购买模块: 插件', 'module', '22233', '', 0, NULL, 1779958806, NULL),
(146, 'PAY202605281700518966', 1, 'wechat', '11.00', '购买模块: 插件', 'module', '22233', '', 0, NULL, 1779958851, NULL),
(147, 'PAY202605281708122144', 1, 'wechat', '11.00', '购买模块: 插件', 'module', '22233', '', 0, NULL, 1779959292, NULL),
(148, 'AI202605281714021269', 1, 'wechat', '99.00', 'AI会员-基础版', '', '', '', 0, NULL, 1779959642, NULL),
(149, 'PAY202605281726572725', 1, 'wechat', '11.00', '购买模块: 插件', 'module', '22233', '', 0, NULL, 1779960417, NULL),
(150, 'PAY202605281737504607', 1, 'wechat', '11.00', '购买模块: 插件', 'module', '22233', '', 0, NULL, 1779961070, NULL),
(151, 'PAY202605281807192123', 1, 'wechat', '11.00', '购买模块: 插件', 'module', '22233', '', 0, NULL, 1779962839, NULL),
(152, 'PAY202605281820281399', 1, 'wechat', '11.00', '购买模块: 插件', 'module', '22233', '', 0, NULL, 1779963628, NULL),
(153, 'PAY202605281820559909', 1, 'wechat', '11.00', '购买模块: 插件', 'module', '22233', '', 0, NULL, 1779963655, NULL),
(154, 'PAY202605281844385803', 1, 'wechat', '11.00', '购买模块: 插件', 'module', '22233', '', 0, NULL, 1779965078, NULL),
(155, 'PAY202605281845113261', 1, 'wechat', '11.00', '购买模块: 插件', 'module', '22233', '', 0, NULL, 1779965111, NULL),
(156, 'PAY202605281845307609', 1, 'wechat', '11.00', '购买模块: 插件', 'module', '22233', '', 0, NULL, 1779965130, NULL),
(157, 'PAY202605281910278322', 0, 'wechat', '11.00', '购买模块: 插件', 'module', '22233', '', 0, NULL, 1779966627, NULL),
(158, 'PAY202605281928527940', 0, 'wechat', '11.00', '购买模块: 插件', 'module', '22233', '', 0, NULL, 1779967732, NULL),
(159, 'PAY202605282013511022', 0, 'wechat', '11.00', '购买模块: 插件', 'module', '22233', '', 0, NULL, 1779970431, NULL),
(160, 'PAY202605282040102880', 1, 'wechat', '11.00', '购买模块: 插件', 'module', '22233', '', 0, NULL, 1779972010, NULL),
(161, 'AI202605282109027251', 1, 'wechat', '0.02', 'AI会员-支付测试', '', '', '', 0, NULL, 1779973742, NULL),
(162, 'AI202605282109072816', 1, 'alipay', '0.02', 'AI会员-支付测试', '', '', '', 1, 1779986186, 1779973747, 1779986186),
(163, 'AI202605282111013475', 1, 'alipay', '0.02', 'AI会员-支付测试', '', '', '', 0, NULL, 1779973861, NULL),
(164, 'AI202605282151262736', 1, 'alipay', '0.02', 'AI会员-支付测试', '', '', '', 1, 1779981458, 1779976286, 1779981458),
(165, 'PAY202605282155304238', 2, 'alipay', '1.00', '购买模块: Hello World 测试插件', 'module', 'hello_world', '', 1, 1779981690, 1779976530, 1779981690),
(166, 'PAY202605282203555687', 2, 'wechat', '1.00', '购买模块: Hello World 测试插件', 'module', 'hello_world', '', 0, NULL, 1779977035, NULL),
(167, 'PAY202605282204073298', 2, 'alipay', '1.00', '购买模块: Hello World 测试插件', 'module', 'hello_world', '', 0, NULL, 1779977047, NULL),
(168, 'AI202605282216206886', 1, 'wechat', '0.02', 'AI会员-支付测试', '', '', '', 1, 1779977810, 1779977780, 1779977810),
(169, 'AI202605282254444508', 1, 'wechat', '299.00', 'AI会员-专业版', '', '', '', 0, NULL, 1779980084, NULL),
(170, 'AI202605282254561920', 1, 'alipay', '299.00', 'AI会员-专业版', '', '', '', 0, NULL, 1779980096, NULL),
(171, 'PAY202605282255158333', 2, 'wechat', '1.00', '购买模块: Hello World 测试插件', 'module', 'hello_world', '', 1, 1779980124, 1779980115, 1779980125),
(172, 'AI202605282343235212', 1, 'wechat', '99.00', 'AI会员-基础版', '', '', '', 0, NULL, 1779983003, NULL),
(173, 'AI202605290727441159', 1, 'wechat', '1.00', 'AI会员-会员', '', '', '', 0, NULL, 1780010864, NULL),
(174, 'AI202605290728384084', 1, 'wechat', '1.00', 'AI会员-会员', '', '', '', 1, 1780010927, 1780010918, 1780010927),
(175, 'AI202605291410266036', 1, 'wechat', '0.02', 'AI会员-支付测试', '', '', '', 0, NULL, 1780035026, NULL),
(176, 'AI202605291410304706', 1, 'wechat', '0.02', 'AI会员-支付测试', '', '', '', 0, NULL, 1780035030, NULL),
(177, 'AI202605291410366795', 1, 'alipay', '0.02', 'AI会员-支付测试', '', '', '', 0, NULL, 1780035036, NULL),
(178, 'AI202605291410599117', 1, 'wechat', '0.02', 'AI会员-支付测试', '', '', '', 0, NULL, 1780035059, NULL),
(179, 'AI202605291411005938', 1, 'wechat', '0.02', 'AI会员-支付测试', '', '', '', 0, NULL, 1780035060, NULL),
(180, 'AI202605291411065906', 1, 'wechat', '99.00', 'AI会员-基础版', '', '', '', 0, NULL, 1780035066, NULL),
(181, 'AI202605291411135561', 1, 'wechat', '99.00', 'AI会员-基础版', '', '', '', 0, NULL, 1780035073, NULL),
(182, 'AI202605291411163848', 1, 'wechat', '99.00', 'AI会员-基础版', '', '', '', 0, NULL, 1780035076, NULL),
(183, 'AI202605291411171854', 1, 'wechat', '99.00', 'AI会员-基础版', '', '', '', 0, NULL, 1780035077, NULL),
(184, 'AI202605291411186727', 1, 'wechat', '99.00', 'AI会员-基础版', '', '', '', 0, NULL, 1780035078, NULL),
(185, 'AI202605291411195690', 1, 'wechat', '99.00', 'AI会员-基础版', '', '', '', 0, NULL, 1780035079, NULL),
(186, 'AI202605291411199250', 1, 'wechat', '99.00', 'AI会员-基础版', '', '', '', 0, NULL, 1780035079, NULL),
(187, 'AI202605291411204171', 1, 'wechat', '99.00', 'AI会员-基础版', '', '', '', 0, NULL, 1780035080, NULL),
(188, 'AI202605291411211783', 1, 'wechat', '99.00', 'AI会员-基础版', '', '', '', 0, NULL, 1780035081, NULL),
(189, 'AI202605291411221148', 1, 'wechat', '99.00', 'AI会员-基础版', '', '', '', 0, NULL, 1780035082, NULL),
(190, 'AI202605291411357761', 1, 'wechat', '0.02', 'AI会员-支付测试', '', '', '', 1, 1780035115, 1780035095, 1780035115),
(191, 'AI202605291449316515', 1, 'wechat', '99.00', 'AI会员-基础版', '', '', '', 0, NULL, 1780037371, NULL),
(192, 'PAY202605291847158904', 2, 'wechat', '11.00', '购买模块: 插件', 'module', '22233', '', 0, NULL, 1780051635, NULL),
(193, 'PAY202605292004489482', 2, 'wechat', '11.00', '购买模块: 插件', 'module', '22233', '', 0, NULL, 1780056288, NULL),
(194, 'AI202605300904456067', 1, 'wechat', '1.00', 'AI会员-1', '', '', '', 1, 1780103111, 1780103085, 1780103111),
(195, 'AI202605300905433254', 1, 'wechat', '0.02', 'AI会员-支付测试', '', '', '', 1, 1780103161, 1780103143, 1780103161),
(196, 'AI202605300932416787', 0, 'wechat', '99.00', 'McdmAdmin AI 基础版', '', '', '', 0, NULL, 1780104761, NULL),
(197, 'AI202605301003142199', 0, 'wechat', '99.00', 'McdmAdmin AI 基础版', '', '', '', 0, NULL, 1780106594, NULL),
(198, 'AI202605301006128204', 0, 'wechat', '99.00', 'McdmAdmin AI 基础版', '', '', '', 0, NULL, 1780106772, NULL),
(199, 'AI202605301017536165', 0, 'alipay', '99.00', 'McdmAdmin AI 基础版', '', '', '', 0, NULL, 1780107473, NULL),
(200, 'AI202605301021329630', 0, 'wechat', '99.00', 'McdmAdmin AI 基础版', '', '', '', 0, NULL, 1780107692, NULL),
(201, 'AI202605301021407851', 0, 'alipay', '99.00', 'McdmAdmin AI 基础版', '', '', '', 0, NULL, 1780107700, NULL),
(202, 'AI202605301028313118', 0, 'wechat', '99.00', 'McdmAdmin AI 基础版', '', '', '', 0, NULL, 1780108111, NULL),
(203, 'AI202605301031457266', 0, 'alipay', '99.00', 'McdmAdmin AI 基础版', '', '', '', 0, NULL, 1780108305, NULL),
(204, 'AI202605301032461951', 0, 'wechat', '99.00', 'McdmAdmin AI 基础版', '', '', '', 0, NULL, 1780108366, NULL),
(205, 'AI202605301131564505', 0, 'alipay', '99.00', 'McdmAdmin AI 基础版', '', '', '', 0, NULL, 1780111916, NULL),
(206, 'AI202605301207453137', 0, 'alipay', '0.00', 'McdmAdmin AI 免费版', '', '', '', 0, NULL, 1780114065, NULL),
(207, 'AI202605301212533752', 0, 'wechat', '99.00', 'McdmAdmin AI 基础版', '', '', '', 0, NULL, 1780114373, NULL),
(208, 'AI202605301231171319', 0, 'wechat', '99.00', 'McdmAdmin AI 基础版', '', '', '', 0, NULL, 1780115477, NULL),
(209, 'AI202605301231373428', 0, 'alipay', '99.00', 'McdmAdmin AI 基础版', '', '', '', 0, NULL, 1780115497, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `mcdm_recycle`
--

CREATE TABLE `mcdm_recycle` (
  `id` int(11) UNSIGNED NOT NULL,
  `table_name` varchar(64) NOT NULL COMMENT '原表名',
  `data_id` int(11) UNSIGNED NOT NULL COMMENT '原数据ID',
  `data` longtext COMMENT '序列化的完整数据',
  `admin_id` int(11) UNSIGNED DEFAULT '0' COMMENT '操作人',
  `create_time` int(11) DEFAULT NULL COMMENT '删除时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='回收站表';

-- --------------------------------------------------------

--
-- 表的结构 `mcdm_role`
--

CREATE TABLE `mcdm_role` (
  `id` int(11) UNSIGNED NOT NULL,
  `name` varchar(64) NOT NULL COMMENT '角色名称',
  `description` varchar(255) DEFAULT '' COMMENT '描述',
  `rules` text COMMENT '权限规则(JSON)',
  `status` tinyint(1) DEFAULT '1' COMMENT '状态',
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='角色表';

--
-- 转存表中的数据 `mcdm_role`
--

INSERT INTO `mcdm_role` (`id`, `name`, `description`, `rules`, `status`, `create_time`, `update_time`) VALUES
(1, '超级管理员', '拥有所有权限', NULL, 1, 1778850276, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `mcdm_security_data_recycle`
--

CREATE TABLE `mcdm_security_data_recycle` (
  `id` int(11) UNSIGNED NOT NULL,
  `admin_id` int(11) UNSIGNED DEFAULT '0' COMMENT '操作管理员',
  `rule_name` varchar(64) DEFAULT '' COMMENT '规则名称',
  `controller` varchar(128) DEFAULT '' COMMENT '来源控制器',
  `connect_id` int(11) UNSIGNED DEFAULT '0' COMMENT '数据库连接ID',
  `table_name` varchar(64) NOT NULL COMMENT '原表名',
  `data` longtext COMMENT '被删数据JSON',
  `ip` varchar(64) DEFAULT '' COMMENT '操作IP',
  `create_time` int(11) DEFAULT NULL COMMENT '删除时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='安全数据回收站';

-- --------------------------------------------------------

--
-- 表的结构 `mcdm_security_data_recycle_rule`
--

CREATE TABLE `mcdm_security_data_recycle_rule` (
  `id` int(11) UNSIGNED NOT NULL,
  `name` varchar(64) NOT NULL COMMENT '规则名称',
  `controller` varchar(128) NOT NULL COMMENT '控制器',
  `connect_id` int(11) UNSIGNED DEFAULT '0' COMMENT '数据库连接ID',
  `table_name` varchar(64) NOT NULL COMMENT '数据表名',
  `primary_key` varchar(32) DEFAULT 'id' COMMENT '主键字段',
  `status` tinyint(1) DEFAULT '1' COMMENT '状态:0禁用,1启用',
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='数据回收规则';

-- --------------------------------------------------------

--
-- 表的结构 `mcdm_security_sensitive_data_log`
--

CREATE TABLE `mcdm_security_sensitive_data_log` (
  `id` int(11) UNSIGNED NOT NULL,
  `admin_id` int(11) UNSIGNED DEFAULT '0' COMMENT '操作管理员',
  `rule_name` varchar(64) DEFAULT '' COMMENT '规则名称',
  `controller` varchar(128) DEFAULT '' COMMENT '来源控制器',
  `connect_id` int(11) UNSIGNED DEFAULT '0' COMMENT '数据库连接ID',
  `table_name` varchar(64) NOT NULL COMMENT '数据表名',
  `row_id` int(11) UNSIGNED DEFAULT '0' COMMENT '被修改行ID',
  `field_name` varchar(64) DEFAULT '' COMMENT '修改字段',
  `before_value` text COMMENT '修改前值',
  `after_value` text COMMENT '修改后值',
  `ip` varchar(64) DEFAULT '' COMMENT '操作IP',
  `create_time` int(11) DEFAULT NULL COMMENT '修改时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='敏感数据修改记录';

-- --------------------------------------------------------

--
-- 表的结构 `mcdm_security_sensitive_field_rule`
--

CREATE TABLE `mcdm_security_sensitive_field_rule` (
  `id` int(11) UNSIGNED NOT NULL,
  `name` varchar(64) NOT NULL COMMENT '规则名称',
  `controller` varchar(128) NOT NULL COMMENT '控制器',
  `connect_id` int(11) UNSIGNED DEFAULT '0' COMMENT '数据库连接ID',
  `table_name` varchar(64) NOT NULL COMMENT '数据表名',
  `primary_key` varchar(32) DEFAULT 'id' COMMENT '主键字段',
  `sensitive_fields` text COMMENT '敏感字段(JSON数组)',
  `status` tinyint(1) DEFAULT '1' COMMENT '状态:0禁用,1启用',
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='敏感字段规则';

-- --------------------------------------------------------

--
-- 表的结构 `mcdm_tenant`
--

CREATE TABLE `mcdm_tenant` (
  `id` int(11) UNSIGNED NOT NULL,
  `name` varchar(64) NOT NULL COMMENT '租户名称',
  `domain` varchar(128) DEFAULT '' COMMENT '独立域名',
  `logo` varchar(255) DEFAULT '',
  `theme_color` varchar(16) DEFAULT '#18A058',
  `package_id` int(11) DEFAULT '0' COMMENT '套餐ID',
  `expire_time` int(11) DEFAULT NULL COMMENT '到期时间',
  `status` tinyint(1) DEFAULT '1',
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='租户表';

--
-- 转存表中的数据 `mcdm_tenant`
--

INSERT INTO `mcdm_tenant` (`id`, `name`, `domain`, `logo`, `theme_color`, `package_id`, `expire_time`, `status`, `create_time`, `update_time`) VALUES
(1, '默认租户', 'demo.mcdmadmin.local', '', '#18A058', 3, 1810456457, 1, 1778920457, 1778920457),
(2, '测试企业', 'test.mcdmadmin.local', '', '#18A058', 1, 1794472457, 1, 1778920457, 1778920457);

-- --------------------------------------------------------

--
-- 表的结构 `mcdm_user`
--

CREATE TABLE `mcdm_user` (
  `id` int(11) UNSIGNED NOT NULL,
  `username` varchar(32) NOT NULL,
  `password` varchar(128) NOT NULL,
  `nickname` varchar(64) DEFAULT '',
  `email` varchar(128) DEFAULT '',
  `mobile` varchar(16) DEFAULT '',
  `avatar` varchar(255) DEFAULT '',
  `group_id` int(11) UNSIGNED DEFAULT '0' COMMENT '分组ID',
  `level` tinyint(2) DEFAULT '1' COMMENT '等级',
  `balance` decimal(10,2) DEFAULT '0.00' COMMENT '余额',
  `score` int(11) DEFAULT '0' COMMENT '积分',
  `gender` tinyint(1) DEFAULT '0' COMMENT '0未知1男2女',
  `status` tinyint(1) DEFAULT '1',
  `last_login_ip` varchar(64) DEFAULT '',
  `last_login_time` int(11) DEFAULT NULL,
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL,
  `delete_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='会员表';

--
-- 转存表中的数据 `mcdm_user`
--

INSERT INTO `mcdm_user` (`id`, `username`, `password`, `nickname`, `email`, `mobile`, `avatar`, `group_id`, `level`, `balance`, `score`, `gender`, `status`, `last_login_ip`, `last_login_time`, `create_time`, `update_time`, `delete_time`) VALUES
(1, 'test1', 'e10adc3949ba59abbe56e057f20f883e', '测试员A', '', '', '', 0, 0, '0.00', 0, 0, 1, '', NULL, 1778394891, NULL, NULL),
(2, 'test2', 'e10adc3949ba59abbe56e057f20f883e', '测试员B', '', '', '', 0, 0, '0.00', 0, 0, 1, '', NULL, 1778481291, NULL, NULL),
(3, 'test3', 'e10adc3949ba59abbe56e057f20f883e', 'VIP用户', '', '', '', 0, 1, '0.00', 0, 0, 1, '', NULL, 1778654091, NULL, NULL),
(4, 'test4', 'e10adc3949ba59abbe56e057f20f883e', '新会员', '', '', '', 0, 0, '0.00', 0, 0, 1, '', NULL, 1778826891, NULL, NULL),
(5, 'test5', 'e10adc3949ba59abbe56e057f20f883e', '今日新用户', '', '', '', 0, 0, '0.00', 0, 0, 1, '', NULL, 1778913291, NULL, NULL),
(6, 'zhang', '$2y$10$7xOZ8JbI3ghYzehFSY6.tep4Nf5BQJMJ3NLAeQUpxwOx8rg7x5V9y', 'zhang', '2286369875@qq.com', '', '', 0, 1, '0.00', 0, 0, 1, '', NULL, 1779200337, 1779200337, NULL),
(7, 'testuser', '$2y$10$8ewRJNEGQCxhBoN.q7kMbOk7ckyYMp6ajVGYUvUpfPd7c5v5bbxYq', 'testuser', 'test@mcdmadmin.com', '', '', 0, 1, '0.00', 0, 0, 1, '127.0.0.1', 1779201283, 1779201225, 1779201225, NULL),
(8, 'newmember', '$2y$10$ryDbbG0.jmQC4hfxqdmVLeUrh9Wth3NGrz/aVs9G8zNd4mwzWrxLK', 'newmember', 'newmember@mcdmadmin.com', '', '', 0, 1, '0.00', 0, 0, 1, '', NULL, 1779201307, 1779201307, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `mcdm_user_group`
--

CREATE TABLE `mcdm_user_group` (
  `id` int(11) UNSIGNED NOT NULL,
  `name` varchar(64) NOT NULL,
  `description` varchar(255) DEFAULT '',
  `rules` text COMMENT '权限JSON',
  `status` tinyint(1) DEFAULT '1',
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='会员分组表';

-- --------------------------------------------------------

--
-- 表的结构 `mcdm_workflow_definition`
--

CREATE TABLE `mcdm_workflow_definition` (
  `id` int(11) UNSIGNED NOT NULL,
  `name` varchar(64) NOT NULL,
  `description` varchar(255) DEFAULT '',
  `category_id` int(11) DEFAULT '0',
  `nodes` longtext COMMENT '节点JSON',
  `edges` longtext COMMENT '连线JSON',
  `status` tinyint(1) DEFAULT '1',
  `version` int(11) DEFAULT '1',
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='工作流定义表';

--
-- 转存表中的数据 `mcdm_workflow_definition`
--

INSERT INTO `mcdm_workflow_definition` (`id`, `name`, `description`, `category_id`, `nodes`, `edges`, `status`, `version`, `create_time`, `update_time`) VALUES
(1, 'test_leave', 'Employee leave', 0, '[{\"id\":\"node_1\",\"assignee\":\"1\"}]', '[]', 1, 1, 1778914988, 1778914988),
(2, 'test_leave', 'Employee leave', 0, '[{\"id\":\"node_1\",\"assignee\":\"1\"}]', '[]', 1, 1, 1778915003, 1778915003),
(3, 'test_wf', 'API Test', 0, '[]', '[]', 1, 1, 1778937480, 1778937480);

-- --------------------------------------------------------

--
-- 表的结构 `mcdm_workflow_instance`
--

CREATE TABLE `mcdm_workflow_instance` (
  `id` int(11) UNSIGNED NOT NULL,
  `definition_id` int(11) UNSIGNED NOT NULL,
  `title` varchar(128) DEFAULT '',
  `form_data` text COMMENT '表单数据JSON',
  `status` tinyint(1) DEFAULT '0' COMMENT '0进行中1通过2驳回3撤回',
  `applicant_id` int(11) UNSIGNED DEFAULT '0',
  `current_node` varchar(64) DEFAULT '',
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='工作流实例表';

--
-- 转存表中的数据 `mcdm_workflow_instance`
--

INSERT INTO `mcdm_workflow_instance` (`id`, `definition_id`, `title`, `form_data`, `status`, `applicant_id`, `current_node`, `create_time`, `update_time`) VALUES
(1, 1, 'Test Leave Request', '{}', 1, 1, 'node_1', 1778915031, 1778915031),
(2, 1, 'Test Leave Request 2', '{}', 1, 1, 'node_1', 1778915997, 1778916043);

-- --------------------------------------------------------

--
-- 表的结构 `mcdm_workflow_record`
--

CREATE TABLE `mcdm_workflow_record` (
  `id` int(11) UNSIGNED NOT NULL,
  `instance_id` int(11) UNSIGNED NOT NULL,
  `node_id` varchar(64) DEFAULT '',
  `assignee_id` int(11) UNSIGNED DEFAULT '0' COMMENT '审批人',
  `action` varchar(16) DEFAULT '' COMMENT 'agree/reject/transfer',
  `comment` text COMMENT '审批意见',
  `create_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='工作流审批记录';

--
-- 转存表中的数据 `mcdm_workflow_record`
--

INSERT INTO `mcdm_workflow_record` (`id`, `instance_id`, `node_id`, `assignee_id`, `action`, `comment`, `create_time`) VALUES
(1, 1, 'node_1', 1, 'agree', 'Approved', 1778915031),
(2, 2, 'node_1', 1, 'agree', 'Approved by Admin - looks good', 1778916043);

-- --------------------------------------------------------

--
-- 表的结构 `mcdm_yy`
--

CREATE TABLE `mcdm_yy` (
  `id` int(11) NOT NULL COMMENT 'ID'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='yy';

--
-- 转储表的索引
--

--
-- 表的索引 `mcdm_admin`
--
ALTER TABLE `mcdm_admin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uk_username` (`username`),
  ADD KEY `idx_role_id` (`role_id`),
  ADD KEY `idx_status` (`status`);

--
-- 表的索引 `mcdm_admin_log`
--
ALTER TABLE `mcdm_admin_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_admin_id` (`admin_id`),
  ADD KEY `idx_create_time` (`create_time`);

--
-- 表的索引 `mcdm_ai_tier`
--
ALTER TABLE `mcdm_ai_tier`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uk_tier_key` (`tier_key`);

--
-- 表的索引 `mcdm_attachment`
--
ALTER TABLE `mcdm_attachment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_admin_id` (`admin_id`),
  ADD KEY `idx_ext` (`ext`);

--
-- 表的索引 `mcdm_cms_article`
--
ALTER TABLE `mcdm_cms_article`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_category` (`category_id`),
  ADD KEY `idx_status` (`status`),
  ADD KEY `idx_publish_time` (`publish_time`);

--
-- 表的索引 `mcdm_cms_category`
--
ALTER TABLE `mcdm_cms_category`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_parent` (`parent_id`);

--
-- 表的索引 `mcdm_config`
--
ALTER TABLE `mcdm_config`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uk_name` (`name`);

--
-- 表的索引 `mcdm_cron`
--
ALTER TABLE `mcdm_cron`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `mcdm_cron_job`
--
ALTER TABLE `mcdm_cron_job`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `mcdm_cron_log`
--
ALTER TABLE `mcdm_cron_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_job_id` (`job_id`);

--
-- 表的索引 `mcdm_demo`
--
ALTER TABLE `mcdm_demo`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `mcdm_menu`
--
ALTER TABLE `mcdm_menu`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_parent_id` (`parent_id`),
  ADD KEY `idx_type` (`type`);

--
-- 表的索引 `mcdm_notification`
--
ALTER TABLE `mcdm_notification`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_user_read` (`user_id`,`is_read`);

--
-- 表的索引 `mcdm_payment`
--
ALTER TABLE `mcdm_payment`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uk_order_no` (`order_no`),
  ADD KEY `idx_user_id` (`user_id`);

--
-- 表的索引 `mcdm_recycle`
--
ALTER TABLE `mcdm_recycle`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_table_data` (`table_name`,`data_id`);

--
-- 表的索引 `mcdm_role`
--
ALTER TABLE `mcdm_role`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `mcdm_security_data_recycle`
--
ALTER TABLE `mcdm_security_data_recycle`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_table_name` (`table_name`),
  ADD KEY `idx_admin_id` (`admin_id`);

--
-- 表的索引 `mcdm_security_data_recycle_rule`
--
ALTER TABLE `mcdm_security_data_recycle_rule`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_controller` (`controller`),
  ADD KEY `idx_status` (`status`);

--
-- 表的索引 `mcdm_security_sensitive_data_log`
--
ALTER TABLE `mcdm_security_sensitive_data_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_table_name` (`table_name`),
  ADD KEY `idx_admin_id` (`admin_id`),
  ADD KEY `idx_create_time` (`create_time`);

--
-- 表的索引 `mcdm_security_sensitive_field_rule`
--
ALTER TABLE `mcdm_security_sensitive_field_rule`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_controller` (`controller`),
  ADD KEY `idx_status` (`status`);

--
-- 表的索引 `mcdm_tenant`
--
ALTER TABLE `mcdm_tenant`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_domain` (`domain`);

--
-- 表的索引 `mcdm_user`
--
ALTER TABLE `mcdm_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uk_username` (`username`),
  ADD KEY `idx_mobile` (`mobile`),
  ADD KEY `idx_group_id` (`group_id`);

--
-- 表的索引 `mcdm_user_group`
--
ALTER TABLE `mcdm_user_group`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `mcdm_workflow_definition`
--
ALTER TABLE `mcdm_workflow_definition`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `mcdm_workflow_instance`
--
ALTER TABLE `mcdm_workflow_instance`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_definition` (`definition_id`),
  ADD KEY `idx_applicant` (`applicant_id`);

--
-- 表的索引 `mcdm_workflow_record`
--
ALTER TABLE `mcdm_workflow_record`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_instance` (`instance_id`);

--
-- 表的索引 `mcdm_yy`
--
ALTER TABLE `mcdm_yy`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `mcdm_admin`
--
ALTER TABLE `mcdm_admin`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用表AUTO_INCREMENT `mcdm_admin_log`
--
ALTER TABLE `mcdm_admin_log`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `mcdm_ai_tier`
--
ALTER TABLE `mcdm_ai_tier`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- 使用表AUTO_INCREMENT `mcdm_attachment`
--
ALTER TABLE `mcdm_attachment`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- 使用表AUTO_INCREMENT `mcdm_cms_article`
--
ALTER TABLE `mcdm_cms_article`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- 使用表AUTO_INCREMENT `mcdm_cms_category`
--
ALTER TABLE `mcdm_cms_category`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- 使用表AUTO_INCREMENT `mcdm_config`
--
ALTER TABLE `mcdm_config`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- 使用表AUTO_INCREMENT `mcdm_cron`
--
ALTER TABLE `mcdm_cron`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 使用表AUTO_INCREMENT `mcdm_cron_job`
--
ALTER TABLE `mcdm_cron_job`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `mcdm_cron_log`
--
ALTER TABLE `mcdm_cron_log`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `mcdm_demo`
--
ALTER TABLE `mcdm_demo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `mcdm_menu`
--
ALTER TABLE `mcdm_menu`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- 使用表AUTO_INCREMENT `mcdm_notification`
--
ALTER TABLE `mcdm_notification`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- 使用表AUTO_INCREMENT `mcdm_payment`
--
ALTER TABLE `mcdm_payment`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=210;

--
-- 使用表AUTO_INCREMENT `mcdm_recycle`
--
ALTER TABLE `mcdm_recycle`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `mcdm_role`
--
ALTER TABLE `mcdm_role`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- 使用表AUTO_INCREMENT `mcdm_security_data_recycle`
--
ALTER TABLE `mcdm_security_data_recycle`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `mcdm_security_data_recycle_rule`
--
ALTER TABLE `mcdm_security_data_recycle_rule`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `mcdm_security_sensitive_data_log`
--
ALTER TABLE `mcdm_security_sensitive_data_log`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `mcdm_security_sensitive_field_rule`
--
ALTER TABLE `mcdm_security_sensitive_field_rule`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `mcdm_tenant`
--
ALTER TABLE `mcdm_tenant`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用表AUTO_INCREMENT `mcdm_user`
--
ALTER TABLE `mcdm_user`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- 使用表AUTO_INCREMENT `mcdm_user_group`
--
ALTER TABLE `mcdm_user_group`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `mcdm_workflow_definition`
--
ALTER TABLE `mcdm_workflow_definition`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 使用表AUTO_INCREMENT `mcdm_workflow_instance`
--
ALTER TABLE `mcdm_workflow_instance`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用表AUTO_INCREMENT `mcdm_workflow_record`
--
ALTER TABLE `mcdm_workflow_record`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用表AUTO_INCREMENT `mcdm_yy`
--
ALTER TABLE `mcdm_yy`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID';
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
