import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  /*
  images: {
   domains: ['res.cloudinary.com','www.notion.so','cdn.sanity.io'], // Add Cloudinary's domain here
   },*/
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "www.notion.so",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
