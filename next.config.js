/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains:[`https:/images-na.ssl-images-amazon.com/`]
  }
}

module.exports = nextConfig
