const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');

module.exports = {
  webpack: (config) => {
    config.plugins.push(new VanillaExtractPlugin());
    config.resolve.fallback = {
      fs: false,
      dns: false,
      net: false,
      tls: false,
    };
    return config;
  },
};