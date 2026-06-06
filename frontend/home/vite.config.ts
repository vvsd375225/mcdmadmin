import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'

export default defineConfig({
  base: '/',
  build: {
    outDir: '../../public',
    emptyOutDir: false,
    rollupOptions: {
      input: { main: resolve(__dirname, 'index.html') },
      output: {
        assetFileNames: 'assets/home-[name]-[hash][extname]',
        chunkFileNames: 'assets/home-[name]-[hash].js',
        entryFileNames: 'assets/home-[name]-[hash].js',
      },
    },
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      dts: 'src/auto-imports.d.ts',
    }),
    Components({
      resolvers: [NaiveUiResolver()],
      dts: 'src/components.d.ts',
    }),
  ],
  resolve: {
    alias: { '@': resolve(__dirname, 'src') },
  },
  server: {
    port: 3002,
    proxy: {
      '/api': { target: 'http://127.0.0.1:8000', changeOrigin: true },
      '/admin': { target: 'http://127.0.0.1:8001', changeOrigin: true },
    },
  },
})
