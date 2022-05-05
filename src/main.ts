import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import './normalize.css'
import './index.less'
import './tailwind.less'
import 'ant-design-vue/dist/antd.less'
import store from './store'
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
