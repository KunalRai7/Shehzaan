/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/Shehzaan',
  assetPrefix: '/Shehzaan/',
  transpilePackages: ['framer-motion'],
};

export default nextConfig;
