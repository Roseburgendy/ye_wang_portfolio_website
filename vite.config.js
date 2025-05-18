import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  server: {
    host: 'localhost',  // 使用 localhost 代替 ::1
    port: 3000,         // 更改端口为 3000
  },
})
