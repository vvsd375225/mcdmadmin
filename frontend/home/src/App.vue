<template>
  <n-config-provider :theme="naiveTheme" :locale="zhCN" :date-locale="dateZhCN">
    <n-message-provider>
      <router-view />
    </n-message-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { darkTheme, zhCN, dateZhCN } from 'naive-ui'
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()
const naiveTheme = computed(() => (themeStore.isDark ? darkTheme : null))
</script>
