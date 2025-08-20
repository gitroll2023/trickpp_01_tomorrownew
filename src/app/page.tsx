'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import MainHeader from '@/components/MainHeader'
import HeroSlider from '@/components/HeroSlider'
import Gallery from '@/components/Gallery'
import AboutSection from '@/components/AboutSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <MainHeader />
      <main>
        <HeroSlider />
        
        {/* 주요 링크 */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">서비스 소개</h3>
                <p className="text-gray-600 mb-4">나주 청년들을 위한 문화 네트워킹 플랫폼과 오프라인 활동을 제공하는 청년 문화 기업입니다.</p>
                <Link href="/about" className="text-blue-600 hover:text-blue-700">서비스 안내 →</Link>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">프로그램 & 요금</h3>
                <p className="text-gray-600 mb-4">월 9,900원부터 시작하는 합리적인 요금으로 다양한 문화 프로그램에 참여하세요.</p>
                <Link href="/programs" className="text-blue-600 hover:text-blue-700">요금제 확인 →</Link>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">공지사항</h3>
                <p className="text-gray-600 mb-4">서비스 업데이트와 이벤트 소식을 확인하실 수 있습니다.</p>
                <Link href="/notice" className="text-blue-600 hover:text-blue-700">공지사항 →</Link>
              </div>
            </div>
          </div>
        </section>

        <AboutSection />
        <Gallery />

        

      </main>
      <Footer />
    </div>
  )
}
