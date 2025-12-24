/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  // Remove standalone output for Vercel deployment
  // output: 'standalone', // Only use for Docker/self-hosting
  
  // Performance optimizations
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['motion', 'three', '@lottiefiles/dotlottie-react'],
  },
  
  // Compress and optimize assets
  compress: true,
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1 year
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lottie.host',
        port: '',
        pathname: '/**',
      },
    ],
  },
  
  // Turbopack configuration for Next.js 16
  turbopack: {
    rules: {},
  },
};

export default nextConfig;
