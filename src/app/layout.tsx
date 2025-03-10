import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '라온하제 - 새로운 내일을 만들다',
  description: '나주시의 청년들이 모여 문화예술 활동과 지역 탐방을 통해 즐겁고 행복한 나주의 새로운 문화를 만들어가는 청년 단체',
  openGraph: {
    title: '라온하제 - 새로운 내일을 만들다',
    description: '나주시의 청년들이 모여 문화예술 활동과 지역 탐방을 통해 즐겁고 행복한 나주의 새로운 문화를 만들어가는 청년 단체',
    images: ['/og-image.jpg'],
    type: 'website',
    locale: 'ko_KR',
  },
  icons: {
    icon: 'https://em-content.zobj.net/source/microsoft-teams/363/grinning-face_1f600.png',
  },
  verification: {
    google: 'JII9GClDk2nsnpFFMx1-b4j2HepZ6mJel89NicslG1I',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link href="https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2107@1.1/Pretendard-Regular.woff" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/NanumSquareNeo-Variable.woff2" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: `
          :root {
            --font-pretendard: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;
            --font-nanum: 'NanumSquareNeo', sans-serif;
          }
          body {
            font-family: var(--font-pretendard);
          }
          h1, h2, h3, h4, h5, h6 {
            font-family: var(--font-nanum);
          }
        `}} />
      </head>
      <body className={inter.className + " antialiased"}>{children}</body>
    </html>
  )
}
