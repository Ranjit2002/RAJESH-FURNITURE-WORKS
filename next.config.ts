import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const basePath = process.env.BASE_PATH ?? (isProd ? "/RAJESH-FURNITURE-WORKS" : "");

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
    qualities: [75, 95],
  },
};

export default nextConfig;