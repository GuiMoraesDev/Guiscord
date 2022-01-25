const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  reactStrictMode: true,

  images: {
    domains: ['github.com'],
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true,
      },
    ];
  },

  webpack: (config, options) => {
    config.plugins.push(new StylelintPlugin());

    return config;
  },
};
