import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: 'localhost',
    port: 5173,
    strictPort: true,
    // Add these headers
    headers: {
      'Content-Security-Policy': `frame-src https://*.youtube.com http://*.youtube.com`
    }
  },
  plugins: [react()],
})
