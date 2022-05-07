import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import replace from '@rollup/plugin-replace'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.BASE_URL || '/',
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
  resolve: {
    alias: {
      '@':  fileURLToPath(new URL('./src', import.meta.url)),
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
