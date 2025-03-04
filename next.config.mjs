/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  basePath: process.env.NODE_ENV === "production" ? "/roop" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/roop/" : "",
};

export default nextConfig;
