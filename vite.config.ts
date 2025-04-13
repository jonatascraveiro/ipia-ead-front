import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills()],
  optimizeDeps: {
    include: ['@ckeditor/ckeditor5-build-classic'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
