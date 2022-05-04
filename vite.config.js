import { defineConfig } from 'vitest/config'
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
  test: {
    globals: true,
    // environment: 'happy-dom',
    environment: 'jsdom',
    testTimeout: 2000,
    setupFiles: [
      './tests/unit/vitest-setup.js',
    ],
  },
})
