// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  // basePath: "/Portofolio",
  // assetPrefix: "/Portofolio/",
  // trailingSlash: true,
};

export default nextConfig;
