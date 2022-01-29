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
};
