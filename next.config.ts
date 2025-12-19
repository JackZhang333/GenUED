import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  devIndicators: false,
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imagedelivery.net",
      },
      {
        protocol: "https",
        hostname: "i.scdn.co",
      },
      // Tencent COS domains
      {
        protocol: "https",
        hostname: "**.myqcloud.com",
      },
      {
        protocol: "http",
        hostname: "**.myqcloud.com",
      },
    ],
  },
};

export default nextConfig;
