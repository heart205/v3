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
const app = createApp(App)
app.use(router)
app.use(store)
app.use(i18n)
app.mount('#app')
