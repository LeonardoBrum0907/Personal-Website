const withImages = require('next-images');

module.exports = withImages({
  experimental: { esmExternals: true },
  output: 'standalone',
  images: {
    disableStaticImages: true
  },
  esModule: true
});
