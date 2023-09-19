/** @type {import('next').NextConfig} */  
const nextConfig = {  
  reactStrictMode: true,  
  images: {  
    remotePatterns: [  
      {  
        protocol: 'https',  
        hostname: 'cpsumsu.org',  
        port: '',  
        pathname: '/path/to/images/**'  
      },  
      {  
        protocol: 'https',  
        hostname: process.env.IMAGE_HOSTNAME,  
        port: '',  
        pathname: '/path/to/images/**'  
      }  
    ]  
  }  
}  
  
module.exports = nextConfig;
