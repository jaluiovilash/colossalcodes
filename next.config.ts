import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true
  },

  webpack: (config) => {
    config.cache = false;
    return config;
  },

};

export default nextConfig;
