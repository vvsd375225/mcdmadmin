<?php
use think\facade\Route;

// Frontend Site
Route::get('/', 'Frontend/index');
Route::get('category/:id', 'Frontend/category');
Route::get('article/:id', 'Frontend/article');

// Auth
Route::post('auth/login', 'Auth/login');
Route::get('auth/info', 'Auth/info');
Route::get('auth/permissions', 'Auth/permissions');
Route::post('auth/logout', 'Auth/logout');

// Profile
Route::get('profile', 'Profile/index');
Route::post('profile', 'Profile/update');

// Role
Route::get('role/index', 'Role/index');
Route::post('role/save', 'Role/save');
Route::put('role/update', 'Role/update');
Route::delete('role/delete/:id', 'Role/delete');

// Menu
Route::get('menu/index', 'Menu/index');
Route::post('menu/save', 'Menu/save');
Route::put('menu/update', 'Menu/update');
Route::delete('menu/delete/:id', 'Menu/delete');

// Admin
Route::get('admin/index', 'Admin/index');
Route::post('admin/save', 'Admin/save');
Route::put('admin/update', 'Admin/update');
Route::delete('admin/delete/:id', 'Admin/delete');

// User
Route::get('user/index', 'User/index');
Route::post('user/save', 'User/save');
Route::put('user/update', 'User/update');
Route::delete('user/delete/:id', 'User/delete');

// Config
Route::get('config/index', 'Config/index');
Route::post('config/save', 'Config/save');
Route::put('config/update', 'Config/update');
Route::delete('config/delete/:id', 'Config/delete');

// Attachment
Route::get('attachment/index', 'Attachment/index');
Route::delete('attachment/delete/:id', 'Attachment/delete');

// Recycle
Route::get('recycle/index', 'Recycle/index');
Route::post('recycle/restore/:id', 'Recycle/restore');
Route::delete('recycle/delete/:id', 'Recycle/delete');

// Security - Data Recycle
Route::get('security_data_recycle/index', 'SecurityDataRecycle/index');
Route::post('security_data_recycle/restore/:id', 'SecurityDataRecycle/restore');
Route::delete('security_data_recycle/delete/:id', 'SecurityDataRecycle/delete');
Route::post('security_data_recycle/batchDelete', 'SecurityDataRecycle/batchDelete');
Route::post('security_data_recycle/batchRestore', 'SecurityDataRecycle/batchRestore');

// Security - Sensitive Data Log
Route::get('sensitive_data_log/index', 'SensitiveDataLog/index');
Route::get('sensitive_data_log/detail/:id', 'SensitiveDataLog/detail');
Route::post('sensitive_data_log/rollback/:id', 'SensitiveDataLog/rollback');
Route::post('sensitive_data_log/batchRollback', 'SensitiveDataLog/batchRollback');
Route::delete('sensitive_data_log/delete/:id', 'SensitiveDataLog/delete');
Route::post('sensitive_data_log/batchDelete', 'SensitiveDataLog/batchDelete');

// Security - Data Recycle Rule
Route::get('data_recycle_rule/index', 'DataRecycleRule/index');
Route::post('data_recycle_rule/save', 'DataRecycleRule/save');
Route::put('data_recycle_rule/update', 'DataRecycleRule/update');
Route::delete('data_recycle_rule/delete/:id', 'DataRecycleRule/delete');
Route::post('data_recycle_rule/toggleStatus/:id', 'DataRecycleRule/toggleStatus');

// Security - Sensitive Field Rule
Route::get('sensitive_field_rule/index', 'SensitiveFieldRule/index');
Route::post('sensitive_field_rule/save', 'SensitiveFieldRule/save');
Route::put('sensitive_field_rule/update', 'SensitiveFieldRule/update');
Route::delete('sensitive_field_rule/delete/:id', 'SensitiveFieldRule/delete');
Route::post('sensitive_field_rule/toggleStatus/:id', 'SensitiveFieldRule/toggleStatus');

// Dashboard
Route::get('dashboard/index', 'Dashboard/index');

// DataScreen
Route::get('datascreen/index', 'DataScreen/index');

// Generator
Route::get('generator/index', 'Generator/index');
Route::get('generator/fields', 'Generator/fields');
Route::get('generator/preview', 'Generator/preview');
Route::get('generator/types', 'Generator/types');
Route::post('generator/generate', 'Generator/generate');

// AI

Route::get("ai/activations", "Ai/activations");
Route::post("ai/switch-tier", "Ai/switchTier");
Route::get('ai/config', 'Ai/config');
Route::post('ai/chat', 'Ai/chat');
Route::post('ai/activate', 'Ai/activate');
Route::post('ai/setupprovider', 'Ai/setupProvider');
Route::post('ai/genlicense', 'Ai/genLicense');
Route::post('ai/savefile', 'Ai/savefile');
Route::get('ai/listfiles', 'Ai/listfiles');
// AI 会员等级价格配置
Route::get('ai/tiers', 'Ai/tierList');
Route::post('ai/tiers/save', 'Ai/tierSave');
Route::delete('ai/tiers/delete/:id', 'Ai/tierDelete');
// AI 购买下单 & 总后台对接
Route::post('ai/trial', 'Ai/trial');
Route::post('ai/order', 'Ai/order');
Route::post('ai/provider-config', 'Ai/saveProviderConfig');
Route::get('ai/settings', 'Ai/getSettings');
Route::post('ai/settings', 'Ai/saveSettings');
// AI 设置中心（总后台配置密钥+模型）
Route::get('ai/ai-settings', 'Ai/aiSettings');
Route::post('ai/model-config', 'Ai/saveModelConfig');


// Module
Route::get('module/index', 'Module/index');
Route::get('module/scanaisc', 'Module/scanAisc');
Route::post('module/install', 'Module/install');
Route::post('module/installfromaisc', 'Module/installFromAisc');
Route::post('module/uninstall', 'Module/uninstall');
Route::post('module/enable', 'Module/enable');
Route::post('module/disable', 'Module/disable');
Route::post('module/purchaseinstall', 'Module/purchaseinstall');
Route::get('module/purchased', 'Module/purchased');
Route::post('module/purchaseinstall', 'Module/purchaseinstall');

// CMS Category
Route::get('cms/category/index', 'CmsCategory/index');
Route::get('cms/category/tree', 'CmsCategory/tree');
Route::post('cms/category/save', 'CmsCategory/save');
Route::put('cms/category/update', 'CmsCategory/update');
Route::delete('cms/category/delete/:id', 'CmsCategory/delete');

// CMS Article
Route::get('cms/article/index', 'CmsArticle/index');
Route::post('cms/article/save', 'CmsArticle/save');
Route::put('cms/article/update', 'CmsArticle/update');
Route::delete('cms/article/delete/:id', 'CmsArticle/delete');
Route::get('cms/article/detail/:id', 'CmsArticle/detail');

// Notification
Route::get('notification/index', 'Notification/index');
Route::get('notification/unread', 'Notification/unread');
Route::post('notification/read/:id', 'Notification/read');
Route::post('notification/readall', 'Notification/readAll');
Route::delete('notification/delete/:id', 'Notification/delete');
Route::post('notification/send', 'Notification/send');

// Cron (5 routes)
Route::get('cron/index', 'Cron/index');
Route::post('cron/save', 'Cron/save');
Route::put('cron/update', 'Cron/update');
Route::delete('cron/delete/:id', 'Cron/delete');
Route::post('cron/execute/:id', 'Cron/execute');
Route::get('cron/logs/[:id]', 'Cron/logs');


// Payment (7 routes)
Route::get('payment/index', 'Payment/index');
Route::get('payment/detail/:id', 'Payment/detail');
Route::post('payment/save', 'Payment/save');
Route::put('payment/update', 'Payment/update');
Route::delete('payment/delete/:id', 'Payment/delete');
Route::post('payment/refund/:id', 'Payment/refund');
Route::get('payment/summary', 'Payment/summary');
// Payment 配置（总后台推送）
Route::get('payment/config', 'Payment/getConfig');
Route::post('payment/config', 'Payment/saveConfig');
// Payment 密钥配置（Epay 插件）
Route::get('payment/keys', 'Payment/getKeys');
Route::post('payment/keys', 'Payment/saveKeys');

// Monitor (4 routes)
Route::get('monitor/index', 'Monitor/index');
Route::get('monitor/requests', 'Monitor/requests');
Route::get('monitor/logs', 'Monitor/logs');
Route::get('monitor/health', 'Monitor/health');
Route::post('monitor/run-cron', 'Monitor/runCron');
Route::post('monitor/remind-licenses', 'Monitor/remindLicenses');
Route::post('monitor/degrade-licenses', 'Monitor/degradeLicenses');
Route::post('monitor/test-email', 'Monitor/testEmail');

// 管理员表
Route::resource('admin', 'Admin');

// Site 站点管理（6 routes）
Route::get('site/index', 'Site/index');
Route::get('site/detail/:id', 'Site/detail');
Route::post('site/save', 'Site/save');
Route::put('site/update', 'Site/update');
Route::delete('site/delete/:id', 'Site/delete');
Route::post('site/toggle/:id', 'Site/toggle');

// License 管理（8 routes）
Route::get('license/index', 'License/index');
Route::get('license/detail/:id', 'License/detail');
Route::post('license/generate', 'License/generate');
Route::post('license/renew', 'License/renew');
Route::post('license/change-tier', 'License/changeTier');
Route::post('license/revoke/:id', 'License/revoke');
Route::delete('license/delete/:id', 'License/delete');
Route::get('license/sites', 'License/sites');
Route::get('license/tier-options', 'License/tierOptions');

// Reconciliation 对账系统
Route::get('reconciliation/index', 'Reconciliation/index');
Route::post('reconciliation/check/:siteId', 'Reconciliation/check');
Route::post('reconciliation/batch-check', 'Reconciliation/batchCheck');
Route::get('reconciliation/logs', 'Reconciliation/logs');

// AuthLog
Route::get('auth_log/index', 'AuthLog/index');
Route::delete('auth_log/delete/:id', 'AuthLog/delete');

// Plugin 插件市场管理
Route::get('plugin/index', 'Plugin/index');
Route::get('plugin/detail/:id', 'Plugin/detail');
Route::post('plugin/save', 'Plugin/save');
Route::put('plugin/update', 'Plugin/update');
Route::delete('plugin/delete/:id', 'Plugin/delete');
Route::post('plugin/toggle/:id', 'Plugin/toggle');
Route::post('plugin/upload', 'Plugin/upload');
Route::post('plugin/distribute', 'Plugin/distribute');
Route::get('plugin/categories', 'Plugin/categories');
Route::post('plugin/category/save', 'Plugin/saveCategory');
Route::put('plugin/category/update', 'Plugin/updateCategory');
Route::delete('plugin/category/delete/:id', 'Plugin/deleteCategory');
Route::get('plugin/orders', 'Plugin/orders');
Route::get('plugin/reviews/:pluginId', 'Plugin/reviews');
Route::post('plugin/review/toggle/:id', 'Plugin/toggleReview');
Route::delete('plugin/review/delete/:id', 'Plugin/deleteReview');

// Site 批量配置推送
Route::get('site/batch-push-page', 'Site/batchPushPage');
Route::post('site/batch-push', 'Site/batchPush');

// Community 问答社区管理
Route::get('community/index', 'Community/index');
Route::get('community/detail/:id', 'Community/detail');
Route::delete('community/delete/:id', 'Community/delete');
Route::post('community/toggle/:id', 'Community/toggle');
Route::delete('community/answer/delete/:id', 'Community/deleteAnswer');
Route::post('community/answer/toggle/:id', 'Community/toggleAnswer');

// UserGroup
Route::get('user_group/index', 'UserGroup/index');
Route::post('user_group/save', 'UserGroup/save');
Route::put('user_group/update', 'UserGroup/update');
Route::delete('user_group/delete/:id', 'UserGroup/delete');

// SEO 管理
Route::get('seo/config', 'Seo/config');
Route::post('seo/config', 'Seo/saveConfig');
Route::get('seo/pushLogs', 'Seo/pushLogs');
Route::post('seo/sitemap', 'Seo/generateSitemap');
Route::post('seo/push', 'Seo/pushBaidu');
Route::post('seo/pushUrl', 'Seo/pushUrl');

// Auth 注册（管理员）
Route::post('auth/register', 'Auth/register');

// ====== 会员 API（swift_user 表 — 前台会员中心使用）======
Route::post('member_api/login', 'MemberAuth/login');
Route::post('member_api/register', 'MemberAuth/register');
Route::get('member_api/profile', 'MemberCenter/profile');
Route::post('member_api/updateProfile', 'MemberCenter/updateProfile');
Route::post('member_api/changePwd', 'MemberCenter/changePwd');
Route::get('member_api/subscriptions', 'MemberCenter/subscriptions');
Route::get('member_api/transactions', 'MemberCenter/transactions');
Route::post('member_api/recharge', 'MemberCenter/recharge');
Route::post('member_api/order', 'MemberCenter/order');
Route::post('member_api/switch-tier', 'MemberCenter/switchTier');
Route::delete('member_api/order/:id', 'MemberCenter/deleteOrder');
Route::get('member_api/status', 'MemberCenter/status');
Route::post('member_api/ticket/submit', 'MemberCenter/submitTicket');
Route::get('member_api/tickets', 'MemberCenter/tickets');

// ====== 会员管理 API（总后台调用）======
Route::get('member_api/manage/list', 'MemberManage/list');
Route::get('member_api/manage/detail', 'MemberManage/detail');
Route::post('member_api/manage/balance', 'MemberManage/balance');
Route::post('member_api/manage/level', 'MemberManage/level');
Route::post('member_api/manage/ban', 'MemberManage/ban');
Route::post('member_api/manage/unban', 'MemberManage/unban');
Route::get('member_api/manage/violations', 'MemberManage/violations');
Route::get('member_api/manage/levels', 'MemberManage/levels');
Route::delete('member_api/manage/delete/:id', 'MemberManage/delete');
Route::get('captcha', 'Captcha/image');
