import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path'
import monacoEditorPlugin from 'vite-plugin-monaco-editor'

function resolve(path) {
  return join(__dirname, path)
}

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    // https://blog.csdn.net/m0_67394002/article/details/123419806 主题定制
    // themePreprocessorPlugin({
    //   less: {
    //     multipleScopeVars: [
    //       {
    //         scopeName: 'theme-dark',
    //         path: resolve('src/assets/less/dark.less')
    //       },
    //       {
    //         scopeName: 'theme-default',
    //         path: resolve('src/assets/less/default.less')
    //       }
    //     ]
    //   }
    // }),
    // themePreprocessorHmrPlugin(),
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
