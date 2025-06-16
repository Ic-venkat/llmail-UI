import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    FASTAPI_BACKEND_URL: process.env.FASTAPI_BACKEND_URL,
 },
};

export default nextConfig;
