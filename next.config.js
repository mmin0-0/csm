/** @type {import('next').NextConfig} */
const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      dns: false,
      net: false,
      tls: false,
    };

    config.plugins.push(new VanillaExtractPlugin());

    return config;
  },
};

module.exports = nextConfig;