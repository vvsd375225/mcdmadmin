<template>
  <div class="home" :class="{ dark: themeStore.isDark }">
    <header class="top-bar" :class="{ dark: themeStore.isDark }">
      <div class="top-inner">
        <div class="logo" @click="goTo('/')">
          <span class="logo-text">McdmAdmin</span>
        </div>
        <div class="top-btns">
          <n-button round @click="goTo('/member')">会员中心</n-button>
          <n-button round @click="goTo('http://127.0.0.1:8000')">码创官网</n-button>
        </div>
      </div>
    </header>

    <main class="hero">
      <div class="hero-inner">
        <h1 class="hero-title">McdmAdmin</h1>
        <p class="hero-subtitle">企业级全栈后台管理系统 · 安装成功</p>
        <div class="hero-btns">
          <n-button size="large" round type="primary" @click="goTo('/member')">会员中心</n-button>
        </div>
      </div>
    </main>

    <!-- 关于码创 -->
    <section class="about" :class="{ dark: themeStore.isDark }">
      <div class="about-inner">
        <h2 class="about-title">关于码创软件开发工作室</h2>
        <p class="about-desc">
          <strong>码创软件开发工作室</strong>是一家专注于企业级软件开发与 AI 智能应用的技术团队。
          我们致力于为中小企业和个人开发者提供高效、稳定的软件解决方案。
        </p>
        <n-grid :cols="3" :x-gap="20" :y-gap="16" class="about-grid" responsive="screen">
          <n-grid-item>
            <n-card size="small" class="about-card">
              <div class="about-icon">🚀</div>
              <div class="about-card-title">企业级后台系统</div>
              <div class="about-card-text">ThinkPHP 6 + Vue 3 全栈架构，RBAC 权限体系，开箱即用</div>
            </n-card>
          </n-grid-item>
          <n-grid-item>
            <n-card size="small" class="about-card">
              <div class="about-icon">🤖</div>
              <div class="about-card-title">AI 智能开发</div>
              <div class="about-card-text">内建 AI 编程助手，支持代码生成、模块构建、一键安装</div>
            </n-card>
          </n-grid-item>
          <n-grid-item>
            <n-card size="small" class="about-card">
              <div class="about-icon">🛠️</div>
              <div class="about-card-title">模块化生态</div>
              <div class="about-card-text">模块市场 + 插件系统，快速扩展功能，支持远程安装和更新</div>
            </n-card>
          </n-grid-item>
        </n-grid>
        <div class="about-contact">
          <h3>联系我们</h3>
          <p>📧 邮箱：support@mcsw.dev</p>
          <p>💬 微信：mcsw2025</p>
          <p>🌐 官网：https://www.machuangziyuan.cn</p>
        </div>
      </div>
    </section>

    <footer class="foot" :class="{ dark: themeStore.isDark }">
      <span>&copy; {{ year }} 码创软件开发工作室</span>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()
const year = new Date().getFullYear()

function goTo(path: string) {
  window.open(path, '_self')
}
</script>

<style scoped>
.home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f8fafc;
  color: #1e293b;
  transition: background 0.3s, color 0.3s;
}
.home.dark {
  background: #0f172a;
  color: #e2e8f0;
}

/* 顶栏 */
.top-bar {
  position: sticky; top: 0; z-index: 100;
  background: rgba(255,255,255,0.9); backdrop-filter: blur(12px);
  border-bottom: 1px solid #e2e8f0;
  transition: background 0.3s, border-color 0.3s;
}
.top-bar.dark { background: rgba(15,23,42,0.9); border-bottom-color: #1e293b; }
.top-inner {
  max-width: 1200px; margin: 0 auto;
  display: flex; align-items: center; justify-content: space-between;
  height: 64px; padding: 0 24px;
}
.logo { cursor: pointer; user-select: none; }
.logo-text { font-size: 22px; font-weight: 800; color: #18A058; }
.dark .logo-text { color: #4ade80; }

/* 主内容 */
.hero {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 24px;
}
.hero-inner { text-align: center; max-width: 600px; }
.hero-title {
  font-size: 56px; font-weight: 900; margin: 0 0 16px;
  background: linear-gradient(135deg, #18A058 0%, #0d7a3e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.hero-subtitle {
  font-size: 18px; color: #64748b; margin: 0 0 40px; line-height: 1.6;
}
.dark .hero-subtitle { color: #94a3b8; }
.hero-btns { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

/* 关于码创 */
.about {
  padding: 60px 24px;
  background: #fff;
  border-top: 1px solid #e2e8f0;
  transition: background 0.3s, border-color 0.3s;
}
.about.dark { background: #0f172a; border-top-color: #1e293b; }
.about-inner { max-width: 1000px; margin: 0 auto; }
.about-title {
  text-align: center; font-size: 28px; font-weight: 800; margin: 0 0 12px;
  color: #1e293b;
}
.dark .about-title { color: #e2e8f0; }
.about-desc {
  text-align: center; max-width: 650px; margin: 0 auto 32px;
  font-size: 15px; color: #64748b; line-height: 1.8;
}
.dark .about-desc { color: #94a3b8; }
.about-desc strong { color: #18A058; }
.dark .about-desc strong { color: #4ade80; }
.about-grid { margin-bottom: 32px; }
.about-card {
  text-align: center; border-color: #e2e8f0;
  transition: transform 0.2s, box-shadow 0.2s;
}
.dark .about-card { border-color: #334155; background: #1e293b; }
.about-card:hover { transform: translateY(-4px); box-shadow: 0 8px 25px rgba(0,0,0,0.1); }
.about-icon { font-size: 36px; margin-bottom: 10px; }
.about-card-title { font-size: 16px; font-weight: 700; margin-bottom: 8px; color: #1e293b; }
.dark .about-card-title { color: #e2e8f0; }
.about-card-text { font-size: 13px; color: #94a3b8; line-height: 1.6; }
.about-contact {
  text-align: center; padding: 24px;
  border: 1px solid #e2e8f0; border-radius: 12px;
  background: #f8fafc;
}
.dark .about-contact { background: #1e293b; border-color: #334155; }
.about-contact h3 { margin: 0 0 12px; font-size: 18px; color: #18A058; }
.dark .about-contact h3 { color: #4ade80; }
.about-contact p { margin: 4px 0; font-size: 14px; color: #475569; }
.dark .about-contact p { color: #94a3b8; }

/* 页脚 */
.foot {
  text-align: center; padding: 20px; font-size: 13px;
  color: #94a3b8; border-top: 1px solid #e2e8f0;
}
.foot.dark { border-top-color: #1e293b; color: #64748b; }

@media (max-width: 640px) {
  .hero-title { font-size: 36px; }
  .hero-subtitle { font-size: 15px; }
  .top-inner { height: 56px; padding: 0 16px; }
  .logo-text { font-size: 18px; }
}
</style>
