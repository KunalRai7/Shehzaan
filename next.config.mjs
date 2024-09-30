/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['trb9yrhq5p76ro9s.public.blob.vercel-storage.com', 'avatar.vercel.sh'],
  },
  basePath: '/Shehzaan',
  assetPrefix: '/Shehzaan/',
  transpilePackages: ['framer-motion'],
};

export default nextConfig;
