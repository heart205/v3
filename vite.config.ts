import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path'
import monacoEditorPlugin from 'vite-plugin-monaco-editor'

import {
  themePreprocessorPlugin,
  themePreprocessorHmrPlugin
} from '@zougt/vite-plugin-theme-preprocessor'

function resolve(path) {
  return join(__dirname, path)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    themePreprocessorPlugin({
      less: {
        multipleScopeVars: [
          {
            scopeName: 'theme-default',
            path: resolve('src/assets/less/default.less')
          },
          {
            scopeName: 'theme-dark',
            path: resolve('src/assets/less/dark.less')
          }
        ]
      }
    }),
    themePreprocessorHmrPlugin(),
    monacoEditorPlugin()
  ],
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
