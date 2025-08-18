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
    title: '온라인으로 연결되는\n청년 커뮤니티',
    description: '시간과 장소에 구애받지 않고\n온라인 플랫폼을 통해 소통합니다'
  },
  {
    image: '/main/2.jpg',
    title: '다양한 장소에서\n만나는 청년들',
    description: '나주 곳곳의 공간을 활용하여\n유연하고 창의적인 활동을 펼칩니다'
  },
  {
    image: '/main/3.jpg',
    title: '함께 성장하는\n나주의 청년들',
    description: '문화, 예술, 봉사활동을 통해\n지역사회와 소통하며 성장합니다'
  },
  {
    image: '/main/4.jpg',
    title: '변화를 만드는\n청년 네트워크',
    description: '온오프라인을 넘나들며\n지역 발전을 위한 프로젝트를 진행합니다'
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
