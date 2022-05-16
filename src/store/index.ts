import { createStore } from 'vuex'
import config from './modules/config'
import user from './modules/user'
import type { storeImpl } from '../types/store'

const store = createStore<storeImpl>({
  modules: {
    config,
    user
  }
})

export default store
