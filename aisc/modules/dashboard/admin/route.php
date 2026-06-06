<?php
use think\facade\Route;

Route::group('dashboard', function () {
    Route::get('stats', 'Dashboard/stats');
});
