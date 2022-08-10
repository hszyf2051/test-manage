const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // 代理跨域
  devServer: {
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
