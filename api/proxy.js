// 该服务为vercel serve跨域处理
const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = (req,res) => {
  let target = ''
  // 代理目标地址
  if(req.url.startsWith('/api')){
      target = 'http://152.136.185.210:7878'
  }
  // 创建代理对象并转发请求
  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      '^/api/': '/'
    }
  })(req,res)
}