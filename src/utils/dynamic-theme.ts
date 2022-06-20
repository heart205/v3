/**
 * @author heart
 * @description 生成暗黑主题 会过滤@keyframes 的文件 需要主动去删除
 * @Date 2022-06-20
 */
import * as fs from 'fs'

// 提取css选择器
const cssSelectorReg = /\}[^}]+\{/g
// 提取css值
const reg = /\{[^{}]+\}/g
const css = fs.readFileSync(__dirname + '/../modified.css', 'utf8')
// 读取dark主题
const dark = fs.readFileSync(__dirname + '/../custom-dark.css', 'utf8')
// 匹配出来的变量的选择
const cssValue = css.match(reg)
const cssTitle = css.match(cssSelectorReg)

const cssDarkValue = dark.match(reg)
const cssDarkTitle = dark.match(cssSelectorReg)

const commonArr: Array<string[]> = []

cssTitle?.forEach((val, index) => {
  const title = val.replace('}', '')

  let cssVal = (cssValue && cssValue[index + 1].replace('{', '')) || ''

  if (title.includes('@')) {
    // @keyframes
    cssVal += '\n}'
  }
  commonArr.push([title, cssVal])
})

const darkArr: Array<string[]> = []
cssDarkTitle?.forEach((val, index) => {
  const title = val.replace('}', '')

  const cssVal =
    (cssDarkValue && cssDarkValue[index + 1].replace('{', '')) || ''

  // 过滤动画
  // 暂时没有好的提取动画的方式 暂时先过滤
  if (!title.includes('@keyframes')) {
    // cssVal += '\n}'
    darkArr.push([title, cssVal])
  }
})

commonArr.forEach((val) => {
  const data = darkArr.find((el) => el[0] === val[0])
  // 比较两个值的不同
  if (!data) return
  if (data[1] !== val[1]) {
    // val 是否有var()
    // 有则替换
    const r = /(.*?)var\((.*)/g
    const d = val[1].match(r)
    if (d) {
      // 遍历d 根据名字来替换值
      if (d instanceof Array) {
        d.forEach((v) => {
          const name = v.split(':')[0] + '.*'
          const value1 = data[1].match(new RegExp(name, 'g'))
          if (value1) {
            data[1] = data[1].replace(new RegExp(value1[0]), v)
          }
        })
      }
    }
  }
})

const result = darkArr.reduce((pre, cur) => {
  return (pre += cur[0] + cur[1]), pre
}, '')

fs.writeFile(__dirname + '/./dark.css', result, 'utf-8', (err) => {
  if (err) {
    console.log(err)
    return
  }
})
