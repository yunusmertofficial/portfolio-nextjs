/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  images: {
    //  domains: ["images.pexels.com"],
    remotePatterns: [{ protocol: "https", hostname: "images.pexels.com" }],
  },
  config: {
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "../src/components"),
      },
    },
  },
};

module.exports = nextConfig;
