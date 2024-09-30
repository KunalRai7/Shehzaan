/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['kunalrai7.github.io'],
  },
  basePath: '/Shehzaan',
  assetPrefix: '/Shehzaan/',
  transpilePackages: ['framer-motion'],
};

export default nextConfig;
