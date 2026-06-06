<?php
// +----------------------------------------------------------------------
// | McdmAdmin 一键安装向导
// | 独立运行，不依赖框架
// +----------------------------------------------------------------------

define('INSTALL_ROOT', dirname(__DIR__));
define('IS_INSTALL', true);

// 已安装则提示
if (file_exists(INSTALL_ROOT . '/.env') && filesize(INSTALL_ROOT . '/.env') > 0) {
    $installed = true;
}

// 处理AJAX请求
if (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && $_SERVER['HTTP_X_REQUESTED_WITH'] === 'XMLHttpRequest') {
    header('Content-Type: application/json; charset=utf-8');
    $act = $_POST['act'] ?? '';
    try {
        switch ($act) {
            case 'check':
                echo json_encode(checkEnv(), JSON_UNESCAPED_UNICODE);
                break;
            case 'install':
                echo json_encode(doInstall($_POST), JSON_UNESCAPED_UNICODE);
                break;
            default:
                echo json_encode(['code' => 1, 'msg' => '未知操作']);
        }
    } catch (\Throwable $e) {
        echo json_encode(['code' => 1, 'msg' => $e->getMessage()]);
    }
    exit;
}

/**
 * 环境检测
 */
function checkEnv(): array
{
    $items = [];

    $phpVer = PHP_VERSION;
    $phpOk = version_compare($phpVer, '7.2.5', '>=');
    $items[] = [
        'name' => 'PHP 版本',
        'current' => $phpVer,
        'require' => '>= 7.2.5',
        'ok' => $phpOk,
        'msg' => $phpOk ? '通过' : '不满足要求',
    ];

    $extensions = [
        'pdo'        => 'PDO',
        'pdo_mysql'  => 'PDO MySQL',
        'mbstring'   => 'MBString',
        'fileinfo'   => 'Fileinfo',
        'gd'         => 'GD',
        'zip'        => 'Zip',
        'openssl'    => 'OpenSSL',
        'curl'       => 'cURL',
    ];
    foreach ($extensions as $ext => $label) {
        $loaded = extension_loaded($ext);
        $items[] = [
            'name' => $label . ' 扩展',
            'current' => $loaded ? '已安装' : '未安装',
            'require' => '已安装',
            'ok' => $loaded,
            'msg' => $loaded ? '通过' : '请在 php.ini 中开启',
        ];
    }

    $dirs = [
        'runtime'         => INSTALL_ROOT . '/runtime',
        'public/uploads'  => INSTALL_ROOT . '/public/uploads',
        'public/static'   => INSTALL_ROOT . '/public/static',
    ];
    foreach ($dirs as $label => $dir) {
        if (!is_dir($dir)) {
            @mkdir($dir, 0777, true);
        }
        $writable = is_writable($dir);
        $items[] = [
            'name' => $label . ' 目录',
            'current' => $writable ? '可写' : '不可写',
            'require' => '可写',
            'ok' => $writable,
            'msg' => $writable ? '通过' : '请设置目录权限为 777',
        ];
    }

    $rootWritable = is_writable(INSTALL_ROOT);
    $items[] = [
        'name' => '根目录写入权限',
        'current' => $rootWritable ? '可写' : '不可写',
        'require' => '可写',
        'ok' => $rootWritable,
        'msg' => $rootWritable ? '通过' : '请设置项目根目录权限为 755',
    ];

    $allOk = !in_array(false, array_column($items, 'ok'));
    return ['code' => 0, 'all_ok' => $allOk, 'items' => $items];
}

/**
 * 执行安装
 */
function doInstall(array $data): array
{
    $host     = $data['db_host'] ?? '127.0.0.1';
    $port     = $data['db_port'] ?? '3306';
    $user     = $data['db_user'] ?? '';
    $pass     = $data['db_pass'] ?? '';
    $name     = $data['db_name'] ?? '';
    $prefix   = $data['db_prefix'] ?? 'mcdm_';
    $adminPwd = $data['admin_pwd'] ?? 'admin123';

    if (empty($user) || empty($name)) {
        return ['code' => 1, 'msg' => '数据库用户名和数据库名不能为空'];
    }
    if (strlen($adminPwd) < 6) {
        return ['code' => 1, 'msg' => '管理员密码至少6位'];
    }

    // 检查 vendor 目录
    if (!file_exists(INSTALL_ROOT . '/vendor/autoload.php')) {
        return ['code' => 1, 'msg' => '缺少 vendor/autoload.php，请确保上传的zip包包含 vendor 目录'];
    }

    try {
        $dsn = "mysql:host={$host};port={$port};charset=utf8mb4";
        $pdo = new PDO($dsn, $user, $pass, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_TIMEOUT => 5,
        ]);
    } catch (\PDOException $e) {
        return ['code' => 1, 'msg' => '数据库连接失败: ' . $e->getMessage()];
    }

    $pdo->exec("CREATE DATABASE IF NOT EXISTS `{$name}` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");
    $pdo->exec("USE `{$name}`");

    $sqlFile = INSTALL_ROOT . '/database/install.sql';
    if (file_exists($sqlFile)) {
        $sql = file_get_contents($sqlFile);
        if ($prefix !== 'mcdm_') {
            $sql = str_replace('`mcdm_', "`{$prefix}", $sql);
            $sql = str_replace("'mcdm_", "'{$prefix}", $sql);
        }
        $sql = preg_replace('/UNIX_TIMESTAMP\(\)/', (string)time(), $sql);

        $statements = parseSql($sql);
        foreach ($statements as $stmt) {
            $stmt = trim($stmt);
            if (empty($stmt)) continue;
            try {
                $pdo->exec($stmt);
            } catch (\PDOException $e) {
                if ($e->getCode() !== '42S02') {
                    return ['code' => 1, 'msg' => 'SQL执行失败: ' . $e->getMessage()];
                }
            }
        }
    }

    if ($adminPwd !== 'admin123') {
        $hash = password_hash($adminPwd, PASSWORD_BCRYPT);
        $pdo->exec("UPDATE `{$prefix}admin` SET `password` = " . $pdo->quote($hash) . " WHERE `username` = 'admin'");
    }

    // 检测数据库连接信息中的特殊字符
    // parse_ini_file 不能正确处理 # ; " ' \ ，需要拒绝
    $checkMsg = validateIniValue($pass, '数据库密码');
    if ($checkMsg !== null) return ['code' => 1, 'msg' => $checkMsg];
    $checkMsg = validateIniValue($user, '数据库用户名');
    if ($checkMsg !== null) return ['code' => 1, 'msg' => $checkMsg];
    $checkMsg = validateIniValue($name, '数据库名');
    if ($checkMsg !== null) return ['code' => 1, 'msg' => $checkMsg];

    $env = <<<EOF
APP_DEBUG = true

[DATABASE]
TYPE = mysql
HOSTNAME = {$host}
DATABASE = {$name}
USERNAME = {$user}
PASSWORD = {$pass}
HOSTPORT = {$port}
CHARSET = utf8mb4
PREFIX = {$prefix}

[REDIS]
HOST = 127.0.0.1
PORT = 6379
PASSWORD =
SELECT = 0

[CACHE]
DRIVER = file
EOF;

    file_put_contents(INSTALL_ROOT . '/.env', $env);

    // 验证 .env 可被正确解析
    $parsed = @parse_ini_file(INSTALL_ROOT . '/.env', true, INI_SCANNER_RAW);
    if ($parsed === false) {
        return ['code' => 1, 'msg' => '.env 文件写入成功但解析失败，请检查数据库密码是否包含特殊字符（如 # ; " \\ 等）'];
    }

    // 确保关键目录存在且有权限
    $dirs = ['runtime', 'public/uploads', 'public/static'];
    foreach ($dirs as $dir) {
        $path = INSTALL_ROOT . '/' . $dir;
        if (!is_dir($path)) mkdir($path, 0777, true);
        if (!is_writable($path)) @chmod($path, 0777);
    }
    // 清理 runtime 缓存
    array_map('unlink', glob(INSTALL_ROOT . '/runtime/*/*.php') ?: []);
    array_map('unlink', glob(INSTALL_ROOT . '/runtime/*.php') ?: []);

    return ['code' => 0, 'msg' => '安装成功'];
}

/**
 * 验证 INI 值是否包含 parse_ini_file 无法处理的特殊字符
 * # 和 ; 在 INI 文件中是注释分隔符，即使 INI_SCANNER_RAW 也无法避免
 */
function validateIniValue(string $val, string $fieldName): ?string
{
    if (preg_match('/[#;"\'\\\\]/', $val)) {
        return $fieldName . ' 包含特殊字符（# ; " \' \\ 等），会破坏配置文件。请修改后重试。';
    }
    return null;
}

function parseSql(string $sql): array
{
    $sql = preg_replace('/\/\*.*?\*\//s', '', $sql);
    $sql = preg_replace('/--[^\n]*/', '', $sql);
    $sql = preg_replace('/^#.*$/m', '', $sql);
    $sql = str_replace("\r", '', $sql);

    $statements = [];
    $buffer = '';
    $inString = false;
    $len = strlen($sql);
    for ($i = 0; $i < $len; $i++) {
        $char = $sql[$i];
        if ($char === "'" || $char === '"') {
            $inString = !$inString;
        }
        if ($char === ';' && !$inString) {
            $buffer = trim($buffer);
            if ($buffer !== '') {
                $statements[] = $buffer;
            }
            $buffer = '';
        } else {
            $buffer .= $char;
        }
    }
    $buffer = trim($buffer);
    if ($buffer !== '') $statements[] = $buffer;

    return $statements;
}

?>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>McdmAdmin - 一键安装向导</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
            min-height: 100vh;
            display: flex; align-items: center; justify-content: center;
            color: #e4e6eb;
            line-height: 1.6;
        }
        .container {
            width: 90%; max-width: 760px;
            background: rgba(255,255,255,0.05);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 20px; padding: 48px 40px 36px;
            box-shadow: 0 25px 60px rgba(0,0,0,0.4);
        }
        .header {
            text-align: center; margin-bottom: 36px;
        }
        .header h1 {
            font-size: 28px; font-weight: 700;
            background: linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7);
            -webkit-background-clip: text; -webkit-text-fill-color: transparent;
            margin-bottom: 8px;
        }
        .header p { color: #9ca3af; font-size: 14px; }
        .steps {
            display: flex; justify-content: center; gap: 0;
            margin-bottom: 36px;
        }
        .step {
            text-align: center; position: relative; padding: 0 32px;
        }
        .step-num {
            width: 40px; height: 40px; border-radius: 50%;
            display: flex; align-items: center; justify-content: center;
            font-weight: 700; font-size: 16px;
            margin: 0 auto 8px;
            background: rgba(255,255,255,0.08); color: #6b7280;
            transition: all 0.3s;
        }
        .step.active .step-num { background: #6366f1; color: #fff; box-shadow: 0 0 20px rgba(99,102,241,0.4); }
        .step.done .step-num { background: #10b981; color: #fff; }
        .step-label { font-size: 13px; color: #6b7280; }
        .step.active .step-label, .step.done .step-label { color: #e4e6eb; }
        .step:not(:last-child)::after {
            content: ''; position: absolute; top: 20px; right: -16px;
            width: 32px; height: 1px; background: rgba(255,255,255,0.15);
        }
        .panel { display: none; }
        .panel.active { display: block; }
        .form-group { margin-bottom: 18px; }
        .form-group label {
            display: block; font-size: 13px; color: #9ca3af;
            margin-bottom: 6px; font-weight: 500;
        }
        .form-group input {
            width: 100%; padding: 11px 14px;
            background: rgba(255,255,255,0.06);
            border: 1px solid rgba(255,255,255,0.12);
            border-radius: 10px; color: #e4e6eb;
            font-size: 14px; outline: none;
            transition: border-color 0.2s;
        }
        .form-group input:focus {
            border-color: #6366f1; box-shadow: 0 0 0 3px rgba(99,102,241,0.15);
        }
        .row { display: flex; gap: 16px; }
        .row .form-group { flex: 1; }
        .btn {
            display: inline-flex; align-items: center; justify-content: center;
            gap: 8px; padding: 12px 32px;
            border: none; border-radius: 10px; font-size: 15px;
            font-weight: 600; cursor: pointer; transition: all 0.2s;
            color: #fff;
        }
        .btn-primary { background: linear-gradient(135deg, #6366f1, #8b5cf6); }
        .btn-primary:hover { box-shadow: 0 8px 25px rgba(99,102,241,0.35); transform: translateY(-1px); }
        .btn-primary:disabled { opacity: 0.5; cursor: not-allowed; transform: none; box-shadow: none; }
        .btn-outline {
            background: transparent; border: 1px solid rgba(255,255,255,0.2); color: #9ca3af;
        }
        .btn-outline:hover { border-color: #6366f1; color: #e4e6eb; }
        .btns { display: flex; gap: 12px; margin-top: 28px; justify-content: center; }
        .check-list { list-style: none; }
        .check-list li {
            display: flex; align-items: center; justify-content: space-between;
            padding: 14px 16px; margin-bottom: 8px;
            background: rgba(255,255,255,0.03); border-radius: 10px;
            border: 1px solid rgba(255,255,255,0.06);
        }
        .check-name { font-weight: 500; font-size: 14px; }
        .check-status {
            font-size: 13px; display: flex; align-items: center; gap: 8px;
        }
        .check-ok { color: #34d399; }
        .check-fail { color: #f87171; }
        .check-result { font-size: 12px; color: #6b7280; }
        .icon-ok::before { content: '\2713'; font-weight: 700; }
        .icon-fail::before { content: '\2717'; font-weight: 700; }
        .spinner {
            display: none; width: 18px; height: 18px;
            border: 2px solid rgba(255,255,255,0.2);
            border-top-color: #fff; border-radius: 50%;
            animation: spin 0.6s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        .progress-bar {
            height: 4px; background: rgba(255,255,255,0.1); border-radius: 2px;
            margin: 16px 0; overflow: hidden; display: none;
        }
        .progress-bar .fill {
            height: 100%; background: linear-gradient(90deg, #6366f1, #8b5cf6);
            border-radius: 2px; transition: width 0.5s;
            animation: progress-anim 2s ease-in-out infinite;
        }
        @keyframes progress-anim {
            0%, 100% { width: 30%; }
            50% { width: 90%; }
        }
        .success-box {
            text-align: center; padding: 32px 0;
        }
        .success-icon {
            width: 72px; height: 72px; border-radius: 50%;
            background: linear-gradient(135deg, #10b981, #34d399);
            display: flex; align-items: center; justify-content: center;
            font-size: 36px; color: #fff; margin: 0 auto 20px;
            box-shadow: 0 10px 30px rgba(16,185,129,0.3);
        }
        .success-box h3 { font-size: 22px; margin-bottom: 8px; }
        .success-box p { color: #9ca3af; margin-bottom: 6px; font-size: 14px; }
        .info-table {
            width: 100%; max-width: 420px; margin: 20px auto 0;
            border-collapse: collapse;
        }
        .info-table td {
            padding: 8px 12px; font-size: 14px; text-align: left;
            border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .info-table td:first-child { color: #6b7280; width: 90px; }
        .info-table td:last-child { color: #e4e6eb; font-weight: 500; }
        .alert { padding: 14px 16px; border-radius: 10px; font-size: 13px; margin-bottom: 16px; }
        .alert-warn { background: rgba(251,191,36,0.1); border: 1px solid rgba(251,191,36,0.2); color: #fbbf24; }
        .alert-danger { background: rgba(248,113,113,0.1); border: 1px solid rgba(248,113,113,0.2); color: #f87171; }
        .alert-info { background: rgba(99,102,241,0.1); border: 1px solid rgba(99,102,241,0.2); color: #818cf8; }
    </style>
</head>
<body>
<div class="container">
    <div class="header">
        <h1>McdmAdmin 安装向导</h1>
        <p>上传zip → 解压 → 浏览器安装，三步上线</p>
    </div>

    <div class="steps">
        <div class="step active" id="step1">
            <div class="step-num">1</div>
            <div class="step-label">环境检测</div>
        </div>
        <div class="step" id="step2">
            <div class="step-num">2</div>
            <div class="step-label">数据库配置</div>
        </div>
        <div class="step" id="step3">
            <div class="step-num">3</div>
            <div class="step-label">安装完成</div>
        </div>
    </div>

    <div class="progress-bar" id="progressBar"><div class="fill"></div></div>

    <div class="panel active" id="panel1">
        <?php if (isset($installed) && $installed): ?>
        <div class="alert alert-warn">系统已安装 (.env 文件已存在)。如需重新安装，请删除项目根目录下的 .env 文件后刷新本页面。</div>
        <div class="btns">
            <a href="/" class="btn btn-primary">前往首页</a>
            <a href="/admin" class="btn btn-outline">前往后台</a>
        </div>
        <?php else: ?>
        <ul class="check-list" id="checkList">
            <li><span class="check-name">正在检测...</span><span class="check-status">-</span></li>
        </ul>
        <div class="btns">
            <button class="btn btn-primary" id="btnRecheck" onclick="recheck()">重新检测</button>
            <button class="btn btn-primary" id="btnNext1" onclick="goStep2()" disabled>下一步</button>
        </div>
        <?php endif; ?>
    </div>

    <div class="panel" id="panel2">
        <div class="alert alert-info">请填入 MySQL 数据库信息。<br>管理员密码请使用 6 位以上、包含字母和数字的组合。</div>
        <div class="row">
            <div class="form-group">
                <label>数据库主机</label>
                <input type="text" id="db_host" value="127.0.0.1">
            </div>
            <div class="form-group">
                <label>端口</label>
                <input type="text" id="db_port" value="3306">
            </div>
        </div>
        <div class="row">
            <div class="form-group">
                <label>数据库用户名</label>
                <input type="text" id="db_user" value="root">
            </div>
            <div class="form-group">
                <label>数据库密码</label>
                <input type="password" id="db_pass" placeholder="请输入数据库密码">
            </div>
        </div>
        <div class="row">
            <div class="form-group">
                <label>数据库名</label>
                <input type="text" id="db_name" placeholder="mcdmadmin">
            </div>
            <div class="form-group">
                <label>表前缀</label>
                <input type="text" id="db_prefix" value="mcdm_">
            </div>
        </div>
        <div class="row">
            <div class="form-group" style="flex:1;max-width:380px;">
                <label>管理员密码（默认 admin123）</label>
                <input type="password" id="admin_pwd" placeholder="建议修改，至少6位">
            </div>
        </div>
        <div class="btns">
            <button class="btn btn-outline" onclick="goStep1()">上一步</button>
            <button class="btn btn-primary" id="btnInstall" onclick="install()">
                <span class="spinner" id="installSpinner"></span> 开始安装
            </button>
        </div>
        <div class="alert alert-danger" id="installError" style="display:none;margin-top:16px;"></div>
    </div>

    <div class="panel" id="panel3">
        <div class="success-box">
            <div class="success-icon">&#10003;</div>
            <h3>安装完成！</h3>
            <p>McdmAdmin 已成功安装到您的服务器</p>
            <table class="info-table">
                <tr><td>后台地址</td><td><a href="/admin" style="color:#818cf8;">/admin</a></td></tr>
                <tr><td>管理员账号</td><td>admin</td></tr>
                <tr><td>管理员密码</td><td id="finalPwd">admin123</td></tr>
            </table>
            <div class="alert alert-warn" style="margin-top:20px;">
                安全提示：请立即删除 <code style="background:rgba(0,0,0,0.3);padding:2px 6px;border-radius:4px;">public/install.php</code> 文件，防止被他人利用！
            </div>
        </div>
        <div class="btns">
            <a href="/admin" class="btn btn-primary">进入后台管理</a>
            <a href="/" class="btn btn-outline">访问首页</a>
        </div>
    </div>
</div>

<script>
function $(id) { return document.getElementById(id); }
function showPanel(n) {
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    $('panel' + n).classList.add('active');
    document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
    for (let i = 1; i <= 3; i++) {
        let s = $('step' + i);
        s.classList.remove('active', 'done');
        if (i < n) s.classList.add('done');
        if (i === n) s.classList.add('active');
    }
    $('progressBar').style.display = 'none';
}
function goStep1() { showPanel(1); }
function goStep2() {
    if (!allEnvOk) { alert('环境检测未通过，请先解决红色标记的问题'); return; }
    showPanel(2);
}
let allEnvOk = false;

function post(data) {
    let form = new FormData();
    for (let k in data) form.append(k, data[k]);
    return fetch(location.href, {
        method: 'POST',
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
        body: form
    }).then(r => r.json());
}

function recheck() {
    $('btnRecheck').disabled = true;
    $('btnNext1').disabled = true;
    let list = $('checkList');
    list.innerHTML = '<li><span class="check-name">检测中...</span><span class="check-status">-</span></li>';
    post({act: 'check'}).then(res => {
        if (res.code !== 0) { list.innerHTML = '<li class="check-fail">检测失败: ' + res.msg + '</li>'; return; }
        allEnvOk = res.all_ok;
        list.innerHTML = res.items.map(item => {
            let cls = item.ok ? 'check-ok' : 'check-fail';
            let icon = item.ok ? '<span class="icon-ok"></span>' : '<span class="icon-fail"></span>';
            return '<li>'
                + '<span class="check-name">' + item.name + '</span>'
                + '<span class="check-status">'
                + '<span class="' + cls + '">' + icon + ' ' + item.msg + '</span>'
                + '<span class="check-result">' + item.current + ' (需要 ' + item.require + ')</span>'
                + '</span></li>';
        }).join('');
        if (res.all_ok) $('btnNext1').disabled = false;
        $('btnRecheck').disabled = false;
    }).catch(err => {
        list.innerHTML = '<li class="check-fail">网络错误: ' + err.message + '</li>';
        $('btnRecheck').disabled = false;
    });
}

function install() {
    let btn = $('btnInstall');
    let errBox = $('installError');
    errBox.style.display = 'none';
    btn.disabled = true;
    $('installSpinner').style.display = 'inline-block';
    $('progressBar').style.display = 'block';

    let adminPwd = $('admin_pwd').value.trim();
    if (adminPwd && adminPwd.length < 6) {
        errBox.textContent = '管理员密码至少6位';
        errBox.style.display = 'block';
        btn.disabled = false;
        $('installSpinner').style.display = 'none';
        $('progressBar').style.display = 'none';
        return;
    }

    post({
        act: 'install',
        db_host: $('db_host').value.trim() || '127.0.0.1',
        db_port: $('db_port').value.trim() || '3306',
        db_user: $('db_user').value.trim() || 'root',
        db_pass: $('db_pass').value,
        db_name: $('db_name').value.trim(),
        db_prefix: $('db_prefix').value.trim() || 'mcdm_',
        admin_pwd: adminPwd || 'admin123'
    }).then(res => {
        $('installSpinner').style.display = 'none';
        $('progressBar').style.display = 'none';
        btn.disabled = false;
        if (res.code === 0) {
            $('finalPwd').textContent = adminPwd || 'admin123';
            showPanel(3);
        } else {
            errBox.textContent = res.msg;
            errBox.style.display = 'block';
        }
    }).catch(err => {
        errBox.textContent = '请求失败: ' + err.message;
        errBox.style.display = 'block';
        $('installSpinner').style.display = 'none';
        $('progressBar').style.display = 'none';
        btn.disabled = false;
    });
}

window.addEventListener('DOMContentLoaded', function() {
    <?php if (!isset($installed) || !$installed): ?>
    recheck();
    <?php endif; ?>
});
</script>
</body>
</html>
