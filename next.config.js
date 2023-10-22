/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  images: {
    //  domains: ["images.pexels.com"],
    remotePatterns: [{ protocol: "https", hostname: "images.pexels.com" }],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
