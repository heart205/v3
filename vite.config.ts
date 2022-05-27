import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path'
import monacoEditorPlugin from 'vite-plugin-monaco-editor'
function resolve(path) {
  return join(__dirname, path)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), monacoEditorPlugin()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve('src')
    }
  },
  server: {
    hmr: true
  }
})
