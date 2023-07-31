import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'
 
export default defineConfig({
  base: '/todo-app',
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@tailwindConfig': path.resolve(__dirname, 'tailwind.config.cjs')
    }
  },
  optimizeDeps: {
    include: ['@tailwindConfig']
  },
  build: {
    commonjsOptions: {
      include: ['tailwind-config.cjs', 'node_modules/**']
    }
  }
})
