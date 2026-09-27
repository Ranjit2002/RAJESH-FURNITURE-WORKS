import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/RAJESH-FURNITURE-WORKS",
  images: {
    unoptimized: true,
  },
  devIndicators: false
};

export default nextConfig;