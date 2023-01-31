const withImages = require('next-images');

module.exports = withImages({
  experimental: { esmExternals: true },
  images: {
    disableStaticImages: true
  },
  esModule: true
});
