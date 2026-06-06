<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006~2019 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------
// $Id$

$uri = $_SERVER['REQUEST_URI'];
$path = parse_url($uri, PHP_URL_PATH);

// Static file extensions — serve directly
$staticExts = ['css', 'js', 'jpg', 'jpeg', 'png', 'gif', 'svg', 'ico', 'woff', 'woff2', 'ttf', 'eot', 'map', 'html', 'htm'];
$ext = pathinfo($path, PATHINFO_EXTENSION);

if (in_array($ext, $staticExts)) {
    return false;
}

// Exact file path match
$filePath = $_SERVER["DOCUMENT_ROOT"] . $path;
if (is_file($filePath)) {
    return false;
}

// Directory -> serve index.html if exists
if (is_dir($filePath)) {
    $indexFile = rtrim($filePath, '/') . '/index.html';
    if (is_file($indexFile)) {
        // Determine MIME type and serve the file
        $mimeTypes = [
            'html' => 'text/html',
            'css'  => 'text/css',
            'js'   => 'application/javascript',
            'json' => 'application/json',
            'png'  => 'image/png',
            'jpg'  => 'image/jpeg',
            'jpeg' => 'image/jpeg',
            'gif'  => 'image/gif',
            'svg'  => 'image/svg+xml',
        ];
        $ext = pathinfo($indexFile, PATHINFO_EXTENSION);
        $mime = $mimeTypes[$ext] ?? 'application/octet-stream';
        header('Content-Type: ' . $mime);
        readfile($indexFile);
        return true;
    }
}

// Route everything else through ThinkPHP
// API and admin paths go to ThinkPHP; everything else serves the home SPA
if (strpos($path, '/api') === 0 || strpos($path, '/admin') === 0) {
    $_SERVER["SCRIPT_FILENAME"] = __DIR__ . '/index.php';
    $_SERVER["SCRIPT_NAME"] = '/index.php';
    $_SERVER["PHP_SELF"] = '/index.php';
    $_SERVER["PATH_INFO"] = $path;
    require __DIR__ . "/index.php";
} else {
    // SPA fallback — serve index.html for client-side routing
    header('Content-Type: text/html');
    readfile(__DIR__ . '/index.html');
    return true;
}
