import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default {
  server: {
    mimeTypes: {
      'application/javascript': ['jsx'],
      'text/javascript': ['js'],
    }
  }
}
