import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['res.cloudinary.com','www.notion.so','cdn.sanity.io'], // Add Cloudinary's domain here
  },
};

export default nextConfig;
