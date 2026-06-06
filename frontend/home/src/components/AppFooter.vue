<template>
  <footer class="footer" :class="{ dark: themeStore.isDark }">
    <div class="footer-inner">
      <p class="footer-text">版权所有 @ 2020~2026 码创McdmAdmin 版权所有</p>
      <p class="footer-icp">
        <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener">渝ICP备2020013067号-2</a>
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'
const themeStore = useThemeStore()
</script>

<style scoped>
.footer { padding: 24px; text-align: center; border-top: 1px solid #e2e8f0; background: #fff; transition: all 0.3s; }
.footer.dark { background: #0f172a; border-top-color: #1e293b; }
.footer-inner { max-width: 1200px; margin: 0 auto; }
.footer-text { font-size: 14px; color: #64748b; margin: 0 0 4px; }
.dark .footer-text { color: #94a3b8; }
.footer-icp a { font-size: 13px; color: #94a3b8; text-decoration: none; }
.footer-icp a:hover { color: #18A058; }
.dark .footer-icp a:hover { color: #4ade80; }
</style>
