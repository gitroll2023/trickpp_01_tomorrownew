/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.ibb.co'], // ImgBB 이미지 도메인 허용
    unoptimized: false,
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        pathname: '/**',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // 빌드 중 ESLint 검사 비활성화
  },
  typescript: {
    ignoreBuildErrors: true, // 빌드 중 TypeScript 오류 무시
  },
}

module.exports = nextConfig
