import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@layout': resolve(__dirname, 'src/layout'),
      '@router': resolve(__dirname, 'src/router'),
      '@store': resolve(__dirname, 'src/store'),
      '@components': resolve(__dirname, 'src/components'),
      '@api': resolve(__dirname, 'src/api')
    }
  },
  base: './',
  server: {
    port: 4000,
    open: true,
    cors: true,
    proxy: {}
  }
})
