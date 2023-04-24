import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext',
  },
  plugins: [vue()],
  server: {
    hmr: {
      clientPort: 443,
    },
    host: '127.0.0.1',
    port: 3001,
  },
})
