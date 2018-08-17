const webpack = require('webpack')
const webpackConfig = require('../config/webpack.config.js')

console.log('初始化...')
webpack(webpackConfig, (err, stats) => {
  console.log(stats.toString())
})