const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',  // Здесь '/api' - это префикс вашего API, настроенного на бэкенд сервере
    createProxyMiddleware({
      target: 'http://localhost:4000',  // Укажите адрес вашего бэкенд сервера
      changeOrigin: true,
    })
  );
};