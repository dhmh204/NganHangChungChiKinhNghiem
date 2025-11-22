import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // hoặc plugin vue tuỳ dự án
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Định nghĩa alias '@' trỏ đến thư mục 'src'
      '~': path.resolve(__dirname, './src'),
    },
  },
})