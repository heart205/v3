import './normalize.css'
import './index.less'
import './tailwind.less'

import './assets/theme/theme.css'
import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './routers'
import { setupStore } from './store'
import { setupI18n } from './i18n/index'
import setupInitConfig from './prod'
import './custom-default.css'
import './custom-dark.css'
import './modified.css'
import './modified-default.css'
// createApp 允许链式调用
// mount 不返回应用本身。相反，它返回的是根组件实例
console.log(import.meta.env)
async function bootstrap() {
  const app = createApp(App)

  setupRouter(app)

  setupStore(app)

  setupI18n(app)

  // 设置初始化配置
  setupInitConfig()

  app.mount('#app')
}

bootstrap()
