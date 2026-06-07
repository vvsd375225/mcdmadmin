# McdmAdmin 用户后台系统

ThinkPHP 6 + Vue 3 + NaiveUI 企业级全栈后台管理系统，集成 AI 智能开发引擎。

---

## 环境要求

| 组件 | 版本 |
|------|------|
| PHP | 7.3+ (推荐 8.2) |
| MySQL | 5.7+ |
| Redis | 3.0+ (可选) |
| Nginx / Apache | 均可 |

---

## 一键安装

### 方式一：网页安装（推荐）

将项目部署到网站根目录后，浏览器访问：

```
http://你的域名/install.php
```

按提示填写数据库信息，点击安装即可。安装完成后务必删除 `public/install.php`。

### 方式二：命令行安装（Linux/Mac）

```bash
chmod +x install.sh
bash install.sh
```

### 方式三：宝塔面板

```bash
chmod +x install-bt.sh
bash install-bt.sh
```

---

## Nginx 配置（伪静态）

```nginx
server {
    listen 80;
    server_name 你的域名;
    root /www/wwwroot/你的目录/public;
    index index.html index.php;

    # 安全：禁止访问敏感文件
    location ~ /(\.env|composer\.json|composer\.lock|think|\.git) {
        deny all;
        return 404;
    }

    # 静态资源缓存
    location ~* \.(css|js|jpg|jpeg|png|gif|svg|ico|woff|woff2|ttf|eot|map)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    # 首页和前台 SPA 路由
    location / {
        try_files $uri $uri/ /index.html;
    }

    # 后台 API
    location /admin {
        try_files $uri $uri/ /index.php?$query_string;
    }

    # 外部 API
    location /api {
        try_files $uri $uri/ /index.php?$query_string;
    }

    # 支付回调
    location /pay {
        try_files $uri $uri/ /index.php?$query_string;
    }

    # PHP 处理
    location ~ \.php$ {
        fastcgi_pass 127.0.0.1:9000;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }
}
```

---

## Apache 配置（伪静态）

网站根目录指向 `public/`，`.htaccess` 文件已内置，确保 Apache 开启 `mod_rewrite`：

```apache
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.php$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.php [L]
</IfModule>
```

---

## 网站运行目录设置

部署时请将网站**运行目录**设为 `public/`：

| 面板 | 设置路径 |
|------|----------|
| 宝塔面板 | 网站设置 → 网站目录 → 运行目录选择 `public` |
| 手动 Nginx | `root` 指向 `/项目路径/public` |
| 手动 Apache | `DocumentRoot` 指向 `/项目路径/public` |

**网站首页文件顺序：** `index.html` → `index.php`

---

## 默认账号

| 账号 | 密码 |
|------|------|
| admin | admin123 |

---

## PHP 内置服务器（仅开发环境）

```bash
php -S 0.0.0.0:8001 -t public public/router.php
```

访问：`http://127.0.0.1:8001/`（前台） `http://127.0.0.1:8001/admin/`（后台）

---

## 联系方式

| 方式 | 信息 |
|------|------|
| 📧 邮箱 | 2286369875@qq.com |
| 💬 微信 | machuangRJKF |
| 🌐 官网 | https://www.mcdmadmin.cn |

---

码创软件开发工作室 © 2026
