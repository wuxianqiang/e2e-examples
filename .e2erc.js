const PluginReport = require('@mpxjs/e2e/report-server/server')

module.exports = {
  plugins: [new PluginReport()],
  sequence: [ // spec 文件顺序
    // 'preTest',
    'list',
    // 'home'
  ],
  devServer: {
    open: true
  },
  testSuitsDir: 'test/e2e/components' // spec 文件存放目录
}
