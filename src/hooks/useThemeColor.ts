import { toggleTheme } from '@zougt/vite-plugin-theme-preprocessor/dist/browser-utils.js'
import { ThemeColor } from '../constant/enum'
export function toggleThemeColor(themeColor: ThemeColor) {
  console.log(themeColor)
  if ((themeColor = ThemeColor.DARK)) {
    toggleTheme({ scopeName: 'theme-dark' })
  } else {
    toggleTheme({ scopeName: 'theme-default' })
  }
}
