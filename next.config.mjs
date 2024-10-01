/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Add assetPrefix and basePath
  assetPrefix: process.env.NODE_ENV === 'production' ? '/' : '',
  basePath: '',
  images: {
    unoptimized: true,
  },
  // Add trailing slash option
  trailingSlash: true,
}

export default nextConfig
