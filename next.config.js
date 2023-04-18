/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,

}

const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
    async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3001/api/:path*',
      },
    ];
  },
    async serverMiddleware() {
    const apiProxy = createProxyMiddleware('/api', {
      target: 'http://localhost:3001',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    });

    return [apiProxy];
  },

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}