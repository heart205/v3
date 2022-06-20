/**
 * @author heart
 * @description 提取antd主题变量
 * @Date 2022-06-20
 */
const fs = require('fs')

// 提取css选择器
const cssSelectorReg = /\}[^}]+\{/g
// 提取css值
const cssValueRegexp = /\{[^{}]+\}/g

const data = fs.readFileSync(__dirname + '/../modified.css', 'utf8')

const cssSelectorMatch = data.match(cssSelectorReg)
const cssValueMatch = data.match(cssValueRegexp)

// console.log(cssSelectorMatch)
// console.log(cssValueMatch)

const rootHtml = 'html ' + cssValueMatch[0]
// console.log(rootHtml)
const result: string[] = []

cssSelectorMatch.forEach((el: string, index: number) => {
  const selector = el.replace('}', '')
  // console.log(selector)
  const cssValue = cssValueMatch[index + 1].replace('{', '')

  let cssRule = ''

  if (cssValue.includes('var(')) {
    // 将元素提取出来

    const reg = /(.*?)var\((.*)/g
    const match = cssValue.match(reg)
    cssRule = selector + match.join('').replace(',', '\n') + '}'
    if (selector.includes('@')) {
      // @keyframes  会少一个值
      console.log(cssRule)
      cssRule += '\n}'
    }

    result.push(cssRule)
  }
})

const cssString = rootHtml + result.join('')

// const cssLineArr = cssString.split('\n')
fs.writeFile(__dirname + '/var.css', cssString, 'utf8', (err: Error) => {
  if (err) {
    console.log(err)
    return
  }
})
export {}
