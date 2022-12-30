/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cpsumsu.org',
      },
      {
        protocol: 'https',
        hostname: process.env.IMAGE_HOSTNAME,
      }
    ]
  }
}

module.exports = nextConfig
