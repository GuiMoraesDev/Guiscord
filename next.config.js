const withImages = require('next-images');

module.exports = withImages({
  reactStrictMode: true,

  webpack(config, options) {
    return config;
  },
});
