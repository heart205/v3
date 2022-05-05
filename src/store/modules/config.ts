import type { systemConfig } from '../../types/store'
const state: systemConfig = {
  pageNotFoundIsContainContent: true // 404页面是否包含在页面中 false则全局页面展示
}

export default {
  namespaced: true,
  state
}
