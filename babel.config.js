module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript'
  ],
  plugins: [['import', { libraryName: 'ant-design-vue', style: true }]]
}
