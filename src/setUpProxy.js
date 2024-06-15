// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/dapi', // Match all requests starting with /dapi
    createProxyMiddleware({
      target: 'https://www.swiggy.com',
      changeOrigin: true,
      onProxyReq: (proxyReq, req, res) => {
        proxyReq.setHeader('csrfToken', 'mGnaGls9MByA-8G5HnFVbvgIpTpzWuKFlgPh_DFA');
        proxyReq.setHeader('deviceId', 'd4880769-87ed-f812-5ce9-f2a2370e5239');
      }
    })
  );
};
