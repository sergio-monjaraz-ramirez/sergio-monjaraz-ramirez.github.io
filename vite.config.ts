import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist', // Output directory for the build
  },
  server: {
    port: 3000, // Development server port
    open: true, // Open the browser on server start
  },
  resolve: {
    alias: {
      '@': '/src', // Alias for easier imports
    },
  },
})
