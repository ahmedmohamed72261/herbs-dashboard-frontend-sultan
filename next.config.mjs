/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    domains: ['res.cloudinary.com'],
    unoptimized: true,
  },
};

export default nextConfig;
