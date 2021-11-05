import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import replace from '@rollup/plugin-replace'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
    VitePWA({
      mode: 'development',
      base: '/',
    }),
    replace({
      __DATE__: new Date().toISOString(),
    }),
  ],
  base: process.env.BASE_URL || '/',
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
