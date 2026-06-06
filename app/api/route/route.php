<?php
use think\facade\Route;

// API v1
Route::get('v1/article/index', 'v1.Article/index');
Route::get('v1/article/detail/:id', 'v1.Article/detail');

Route::get('v1/notification/index', 'v1.Notification/index');
Route::get('v1/notification/unread', 'v1.Notification/unread');
Route::post('v1/notification/read/:id', 'v1.Notification/read');
Route::post('v1/notification/readall', 'v1.Notification/readAll');
Route::delete('v1/notification/delete/:id', 'v1.Notification/delete');

Route::post('v1/auth/login', 'v1.Auth/login');
Route::get('v1/auth/profile', 'v1.Auth/profile');

Route::get('captcha', 'Captcha/index');
Route::post('register', 'Register/index');
Route::post('login', 'Login/index');

// Payment (API endpoints under /api/)
Route::any('pay', 'Pay/index')->completeMatch(true);
Route::get('pay/page', 'Pay/page');
Route::post('pay/page', 'Pay/processPay');
	Route::get('pay/result', 'Pay/result');
Route::post('pay/notify/alipay', 'Pay/notifyAlipay');
Route::post('pay/notify/wechat', 'Pay/notifyWechat');
Route::any('pay/notify', 'Pay/notify');

// Epay plugin callbacks (rewritten from /addons/epay/api/)
Route::post('epay/notifyx/type/wechat', 'Epay/notifyx')->pattern(['type' => 'wechat']);
Route::post('epay/notifyx/type/alipay', 'Epay/notifyx')->pattern(['type' => 'alipay']);
Route::any('epay/returnx/type/wechat', 'Epay/returnx')->pattern(['type' => 'wechat']);
Route::any('epay/returnx/type/alipay', 'Epay/returnx')->pattern(['type' => 'alipay']);

// Plugin marketplace
Route::get('plugins', 'Plugins/index');
Route::get('plugins/:id/download', 'Plugins/download');
Route::get('plugins/:id/reviews', 'Plugins/reviews');
Route::get('plugins/:id', 'Plugins/detail');
Route::post('plugins/:id/reviews', 'Plugins/submitReview');

// Q&A Community
Route::get('community/:id', 'Community/detail');
Route::get('community', 'Community/index');
Route::post('community/answer/:answerId/vote', 'Community/vote');
Route::post('community/:questionId/best/:answerId', 'Community/best');
Route::post('community/:questionId/answer', 'Community/answer');
Route::post('community', 'Community/save');
