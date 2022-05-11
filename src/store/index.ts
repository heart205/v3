import { createStore } from 'vuex'
import config from './modules/config'
import type { storeImpl } from '../types/store'

const store = createStore<storeImpl>({
  modules: {
    config
  }
})

export default store
