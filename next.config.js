/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["flagcdn.com", "upload.wikimedia.org"],
  },
  swcMinify: true,
}

module.exports = nextConfig
