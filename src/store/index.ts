import { createStore } from 'vuex'
import config from './modules/config'
const store = createStore({
  modules: {
    config
  }
})

export default store
