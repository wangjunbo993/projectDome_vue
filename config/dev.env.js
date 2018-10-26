'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const vuxLoader = require('vux-loader')
const originalConfig = merge(prodEnv, {
  NODE_ENV: '"development"'
})
const webpackConfig = originalConfig // 原来的 module.exports 代码赋值给变量 webpackConfig

module.exports = vuxLoader.merge(webpackConfig, {
  plugins: ['vux-ui']
})

