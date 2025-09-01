'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

import 'swiper/css'
import 'swiper/css/effect-fade'

const slides = [
  {
    image: '/main/1.jpg',
    title: '나주 청년 문화\n네트워킹 서비스',
    description: '월 9,900원으로 시작하는\n프리미엄 청년 문화 플랫폼'
  },
  {
    image: '/main/2.jpg',
    title: '매주 새로운\n문화 프로그램',
    description: '전문 기획자가 준비한\n다채로운 오프라인 활동'
  },
  {
    image: '/main/3.jpg',
    title: '나주 청년\n1,000명이 선택',
    description: '검증된 프로그램과\n체계적인 운영 시스템'
  },
  {
    image: '/main/4.jpg',
    title: '지금 가입하면\n첫 달 50% 할인',
    description: '신규 회원 특별 혜택\n월 4,950원에 시작하세요'
  }
]

export default function HeroSlider() {
  return (
    <section className="relative h-[600px]">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <Image
                src={slide.image}
                alt={`내일뉴 메인 이미지 ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
              <div className="relative z-10 h-full flex items-center">
                <div className="container mx-auto px-4">
                  <motion.h1 
                    className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 whitespace-pre-line leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p 
                    className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl line-clamp-2 whitespace-pre-line"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    {slide.description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <Link 
                      href="/#about"
                      className="inline-block bg-blue-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-blue-700 transition-colors text-sm sm:text-base"
                    >
                      자세히 보기
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
