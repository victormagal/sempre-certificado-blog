/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true
  },
  experimental: {
    appDir: true
  },
  images: {
    domains: ['res.cloudinary.com']
  },
  reactStrictMode: true
};

module.exports = nextConfig;
