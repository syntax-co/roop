/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  basePath: process.env.NODE_ENV === "production" ? "/roop" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/roop/" : "",
  images: {
    unoptimized: true, // Required for GitHub Pages
  }
};

export default nextConfig;
