import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output:'export',
    experimental: {
    turbo:{}
  },
  images: {
    // unoptimized:true,
    domains: ['media.istockphoto.com','images.pexels.com'], // Add your CDN domain here
  },
  
};

export default nextConfig;
