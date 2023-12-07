import { defineConfig } from 'vite'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    devSourcemap: true
  },
  plugins: [react(), chunkSplitPlugin()],
  build: {
    sourcemap: true
  },
  server: {
    open: true,
    port: 8000,
  },
  define: { global: 'window' }
})
