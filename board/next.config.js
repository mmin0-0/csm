const withImages = require('next-images');
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js 기본 설정 추가 가능
};

module.exports = withImages(withVanillaExtract(nextConfig));