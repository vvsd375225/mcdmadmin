<template>
  <header class="header" :class="{ dark: themeStore.isDark }">
    <div class="header-inner">
      <div class="logo" @click="goTo('/')">
        <img src="@/assets/logo.svg" alt="logo" class="logo-img" />
        <span class="logo-text">码创McdmAdmin</span>
      </div>

      <nav class="nav-desktop">
        <span
          v-for="item in navItems"
          :key="item.key"
          class="nav-item"
          :class="{ active: item.key === activeKey }"
          @click="handleNav(item)"
        >
          <template v-if="item.children">
            <n-dropdown trigger="hover" :options="item.children" @select="(k: string) => handleChild(item.key, k)">
              <span class="nav-item-label">{{ item.label }}</span>
            </n-dropdown>
          </template>
          <template v-else>{{ item.label }}</template>
        </span>
        <n-switch :value="themeStore.isDark" @update:value="themeStore.toggleTheme()" class="theme-switch">
          <template #checked-icon><svg class="nav-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"/></svg></template>
          <template #unchecked-icon><svg class="nav-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 7a5 5 0 015 5 5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5m0 2a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3z"/></svg></template>
        </n-switch>
      </nav>

      <div class="nav-mobile-btn" @click="showDrawer = true">
        <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2z"/></svg>
      </div>
    </div>

    <n-drawer v-model:show="showDrawer" placement="right" :width="260">
      <n-drawer-content title="导航菜单" closable>
        <div class="drawer-nav">
          <span v-for="item in navItems" :key="item.key" class="drawer-item" :class="{ active: item.key === activeKey }" @click="handleNav(item); showDrawer = false">
            <template v-if="item.children">
              <span class="drawer-parent">{{ item.label }}</span>
              <span v-for="child in item.children" :key="child.key" class="drawer-child" @click.stop="handleChild(item.key, child.key); showDrawer = false">{{ child.label }}</span>
            </template>
            <template v-else>{{ item.label }}</template>
          </span>
          <div class="drawer-theme">
            <span>主题切换</span>
            <n-switch :value="themeStore.isDark" @update:value="themeStore.toggleTheme()" />
          </div>
        </div>
      </n-drawer-content>
    </n-drawer>
  </header>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useThemeStore } from '@/stores/theme'
import type { DropdownOption } from 'naive-ui'

const themeStore = useThemeStore()
const route = useRoute()
const showDrawer = ref(false)

const activeKey = computed(() => {
  if (route.path === '/register' || route.path === '/login') return 'member'
  return 'home'
})

const repoChildren: DropdownOption[] = [
  { label: 'Gitee', key: 'gitee' },
  { label: 'GitHub', key: 'github' },
]
const langChildren: DropdownOption[] = [
  { label: '中文简体', key: 'zh' },
  { label: 'English', key: 'en' },
]

const navItems = [
  { key: 'home', label: '首页' },
  { key: 'community', label: '✨问答社区' },
  { key: 'market', label: '模块市场' },
  { key: 'official', label: '官网' },
  { key: 'docs', label: '文档' },
  { key: 'repo', label: '代码仓库', children: repoChildren },
  { key: 'member', label: '会员中心' },
  { key: 'lang', label: '语言', children: langChildren },
]

const linkMap: Record<string, string> = {
  home: '/', community: '/community', market: '/market',
  official: '/', docs: '/docs', member: '/register',
}

function goTo(path: string) { window.open(path, '_self') }

function handleNav(item: (typeof navItems)[number]) {
  if (!item.children) goTo(linkMap[item.key] || '/')
}

function handleChild(parentKey: string, childKey: string) {
  if (parentKey === 'repo') {
    if (childKey === 'gitee') window.open('https://gitee.com/your-repo', '_blank')
    else if (childKey === 'github') window.open('https://github.com/vvsd375225/mcdmadmin', '_blank')
  }
}
</script>

<style scoped>
.header {
  position: sticky; top: 0; z-index: 100;
  background: rgba(255,255,255,0.85); backdrop-filter: blur(12px);
  border-bottom: 1px solid #e2e8f0;
  transition: background 0.3s, border-color 0.3s;
}
.header.dark { background: rgba(15,23,42,0.85); border-bottom-color: #1e293b; }
.header-inner { max-width: 1200px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; height: 64px; padding: 0 24px; }
.logo { display: flex; align-items: center; gap: 10px; cursor: pointer; user-select: none; }
.logo-img { width: 32px; height: 32px; }
.logo-text { font-size: 18px; font-weight: 700; color: #18A058; }
.dark .logo-text { color: #4ade80; }
.nav-desktop { display: flex; align-items: center; gap: 6px; }
.nav-item { padding: 6px 14px; border-radius: 6px; font-size: 14px; cursor: pointer; color: #475569; transition: all 0.2s; white-space: nowrap; }
.nav-item:hover { color: #18A058; background: #f0fdf4; }
.dark .nav-item { color: #94a3b8; }
.dark .nav-item:hover { color: #4ade80; background: rgba(74,222,128,0.1); }
.nav-item.active { color: #18A058; font-weight: 600; }
.dark .nav-item.active { color: #4ade80; }
.nav-item-label { display: inline-block; }
.theme-switch { margin-left: 8px; }
.nav-icon { width: 16px; height: 16px; }
.nav-mobile-btn { display: none; cursor: pointer; color: #475569; padding: 4px; }
.dark .nav-mobile-btn { color: #94a3b8; }
.drawer-nav { display: flex; flex-direction: column; gap: 4px; }
.drawer-item { padding: 10px 12px; border-radius: 6px; cursor: pointer; font-size: 15px; color: #334155; transition: all 0.2s; }
.drawer-item:hover { background: #f1f5f9; }
.drawer-item.active { color: #18A058; font-weight: 600; }
.drawer-parent { display: block; margin-bottom: 6px; font-weight: 600; }
.drawer-child { display: block; padding: 6px 12px 6px 20px; font-size: 14px; color: #64748b; cursor: pointer; }
.drawer-child:hover { color: #18A058; }
.drawer-theme { display: flex; align-items: center; justify-content: space-between; padding: 12px; margin-top: 8px; border-top: 1px solid #e2e8f0; font-size: 15px; }

@media (max-width: 768.98px) {
  .nav-desktop { display: none; }
  .nav-mobile-btn { display: block; }
}
</style>
