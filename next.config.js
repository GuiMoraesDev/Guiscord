const withImages = require('next-images');

module.exports = withImages({
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true,
      },
    ];
  },

  webpack(config, options) {
    return config;
  },
});
