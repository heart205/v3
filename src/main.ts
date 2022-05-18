import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import './normalize.css'
import './index.less'
import './tailwind.less'
import 'ant-design-vue/dist/antd.less'
import './assets/theme/theme.css'
import store from './store'
import './prod.ts'
import i18n from './i18n/index'

// createApp 允许链式调用
// mount 不返回应用本身。相反，它返回的是根组件实例
createApp(App).use(router).use(store).use(i18n).mount('#app')
