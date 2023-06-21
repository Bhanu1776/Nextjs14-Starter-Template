/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['app'],
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig
