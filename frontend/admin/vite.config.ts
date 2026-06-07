import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import UnoCSS from 'unocss/vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/admin/',
  build: {
    outDir: '../../public/admin',
    emptyOutDir: true,
  },
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia',
        { 'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar'] }
      ],
      dts: 'src/auto-imports.d.ts',
    }),
    Components({
      resolvers: [NaiveUiResolver()],
      dts: 'src/components.d.ts',
    }),
    UnoCSS(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 3001,
    host: '0.0.0.0',
    proxy: {
      '/admin': {
        target: 'https://www.mcdmadmin.cn',
        changeOrigin: true,
      },
      '/api': {
        target: 'https://www.mcdmadmin.cn',
        changeOrigin: true,
      },
      '/market': {
        target: 'https://www.mcdmadmin.cn',
        changeOrigin: true,
      },
      '/pay': {
        target: 'https://www.mcdmadmin.cn',
        changeOrigin: true,
      },
    },
  },
})
