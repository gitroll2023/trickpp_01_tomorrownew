/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.ibb.co'], // ImgBB 이미지 도메인 허용
    unoptimized: true,
    minimumCacheTTL: 60,
  },
}

module.exports = nextConfig
