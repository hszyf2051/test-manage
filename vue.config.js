const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // 代理跨域
  devServer: {
    port: 8083,
    host: '127.0.0.1', // 本地服务器
    proxy: {
      '/api': {
        target: 'http://localhost:8181', // 跨域地址
        ws: true,
        changOrigin: true, //允许跨域
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
  transpileDependencies: true,
  // 关闭eslint
  lintOnSave: false,
})
