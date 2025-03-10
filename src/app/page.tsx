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
                <h3 className="text-2xl font-bold text-gray-800 mb-4">라온하제 소개</h3>
                <p className="text-gray-600 mb-4">나주시 청년들의 문화예술 활동을 통해 즐겁고 행복한 나주를 만들어갑니다.</p>
                <Link href="/about" className="text-blue-600 hover:text-blue-700">단체 소개 →</Link>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">활동 프로그램</h3>
                <p className="text-gray-600 mb-4">문화예술 활동, 지역 탐방, 청년 모임 등 다양한 프로그램을 운영합니다.</p>
                <Link href="/programs" className="text-blue-600 hover:text-blue-700">프로그램 보기 →</Link>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">공지사항</h3>
                <p className="text-gray-600 mb-4">라온하제의 새로운 소식과 프로그램 안내를 확인하실 수 있습니다.</p>
                <Link href="/notice" className="text-blue-600 hover:text-blue-700">공지사항 보기 →</Link>
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
