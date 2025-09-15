// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/Portofolio",
  assetPrefix: "/Portofolio/",
  trailingSlash: true,
};

export default nextConfig;
