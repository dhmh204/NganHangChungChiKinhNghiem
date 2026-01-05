import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/job-portal/api': {
        target: 'https://my-springboot-jobportal.onrender.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})