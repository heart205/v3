import type { systemConfig } from '../../types/store'
import { ThemeColor } from '../../constant/enum'
const state: systemConfig = {
  pageNotFoundIsContainContent: true, // 404页面是否包含在页面中 false则全局页面展示
  sideBarDeepNumber: 3, //侧边栏深度
  toggle: false,
  isSystemCollapsed: false,
  footerHeight: 0, // 页脚的高度
  tabsList: [],
  isShowTabsList: true,
  contentPadding: 16,
  isLoading: false,
  themeColor: ThemeColor.LIGHT
}

const mutations = {
  CHANGETOGGLE(state: systemConfig) {
    state.toggle = !state.toggle
  },
  CHANGE_IS_SYSTEM_COLLAPSED_VISIBLE(state: systemConfig, payload: boolean) {
    state.isSystemCollapsed = payload
  },
  CHANGE_LOADING_STATE(state: systemConfig, payload: boolean) {
    state.isLoading = payload
    console.log(state.isLoading)
  },
  CHANGE_THEME_COLOR(state: systemConfig, payload: ThemeColor) {
    state.themeColor = payload
    if (state.themeColor === ThemeColor.DARK) {
      document.body.classList.add('dark')
      document.body.classList.remove('light')
    } else {
      document.body.classList.add('light')
      document.body.classList.remove('dark')
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
