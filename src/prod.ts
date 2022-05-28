/**
 * @author heart
 * @description 前置操作
 * @Date 2022-05-11
 */
import { title } from './config/index'
import { ThemeColor } from './constant/enum'
import store from './store/index'

export default function () {
  title && (document.title = title)

  const theme = localStorage.getItem('themeColor')
  store.commit(
    'config/CHANGE_THEME_COLOR',
    theme === ThemeColor.DARK ? ThemeColor.DARK : ThemeColor.LIGHT
  )
}
