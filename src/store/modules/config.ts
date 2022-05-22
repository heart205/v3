import type { systemConfig } from '../../types/store'
const state: systemConfig = {
  pageNotFoundIsContainContent: true, // 404页面是否包含在页面中 false则全局页面展示
  sideBarDeepNumber: 3, //侧边栏深度
  sideBarTheme: 'light',
  toggle: false,
  isSystemCollapsed: false,
  footerHeight: 0, // 页脚的高度
  tabsList: [],
  isShowTabsList: true,
  contentPadding: 16
}

const mutations = {
  CHANGETOGGLE(state: systemConfig) {
    state.toggle = !state.toggle
  },
  CHANGE_IS_SYSTEM_COLLAPSED_VISIBLE(state: systemConfig, payload: boolean) {
    state.isSystemCollapsed = payload
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
