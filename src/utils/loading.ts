import store from '../store/index'
/**
 * @author heart
 * @description 添加loading效果 防止点击事件
 * @Date 2022-05-27
 */
interface loadingInter {
  (): void
}

// 添加loading事件
let num = 0
export const addLoading: loadingInter = function () {
  if (num <= 0) {
    // store.commit('config/CHANGE_LOADING_STATE', true)
    store.state.config.isLoading = true
    num++
  }
}

export const cancelLoading: loadingInter = function () {
  num--
  if (num <= 0) {
    // store.commit('config/CHANGE_LOADING_STATE', false)
    store.state.config.isLoading = false
    num = 0
  }
}
