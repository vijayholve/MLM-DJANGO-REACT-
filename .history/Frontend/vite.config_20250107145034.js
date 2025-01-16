import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    sourcemap: false  // Disable source map loading in development
  },
  build: {
    sourcemap: false  // Disable source map generation in production
  }
})