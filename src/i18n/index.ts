import * as VueI18n from 'vue-i18n'
import zhCN from './zh-CN'
import enUS from './en-US'

const i18n = VueI18n.createI18n({
  locale: 'zh-CN',
  messages: {
    'zh-CN': zhCN,
    'en-US': enUS
  }
})

export default i18n
// @see: https://blog.csdn.net/shenenhua/article/details/79150053
// @see: https://kazupon.github.io/vue-i18n/zh/guide/formatting.html#html-%E6%A0%BC%E5%BC%8F%E5%8C%96
/**
 * template
 * {{ $t('hello') }}
 */
