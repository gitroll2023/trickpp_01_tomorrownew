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
    title: '즐거운 내일을\n만들어갑니다',
    description: '지역 발전을 위한 청년들의\n다양한 아이디어와 프로젝트'
  },
  {
    image: '/main/2.jpg',
    title: '지역의 미래를\n이끌어갑니다',
    description: '나주의 청년들이 모여\n더 나은 지역사회를 만들어가는 공간'
  },
  {
    image: '/main/3.jpg',
    title: '함께 꿈꾸는\n나주의 내일',
    description: '문화, 예술, 교육을 통해\n지역사회와 소통하는 청년들의 이야기'
  },
  {
    image: '/main/4.jpg',
    title: '변화의 시작은\n청년에게서',
    description: '지역 발전을 위한\n청년들의 다양한 아이디어와 프로젝트'
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
                alt={`라온하제 메인 이미지 ${index + 1}`}
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
