'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Navigation, Pagination } from 'swiper/modules'
import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface ProgramImageSliderProps {
  mainImage: string
  additionalImages: string[]
}

export default function ProgramImageSlider({ mainImage, additionalImages }: ProgramImageSliderProps) {
  const allImages = [mainImage, ...additionalImages]

  return (
    <div 
      className="relative group h-full"
      onContextMenu={(e) => e.preventDefault()}
    >
      <Swiper
        modules={[EffectFade, Navigation, Pagination]}
        effect="fade"
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        className="h-full mySwiper"
      >
        {allImages.map((image, index) => (
          <SwiperSlide key={index} className="h-full">
            <div className="relative w-full h-full">
              <Image
                src={image}
                alt={`프로그램 이미지 ${index + 1}`}
                fill
                className="object-cover select-none"
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .mySwiper {
          --swiper-theme-color: #fff;
          --swiper-navigation-size: 22px;
        }
        .mySwiper .swiper-button-next,
        .mySwiper .swiper-button-prev {
          background-color: rgba(255, 255, 255, 0.8);
          width: 32px;
          height: 32px;
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.2s;
        }
        .mySwiper:hover .swiper-button-next,
        .mySwiper:hover .swiper-button-prev {
          opacity: 1;
        }
        .mySwiper .swiper-pagination-bullet {
          background: white;
          opacity: 0.6;
        }
        .mySwiper .swiper-pagination-bullet-active {
          opacity: 1;
        }
        
        /* 이미지 선택 방지 */
        .mySwiper img {
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -o-user-select: none;
          user-select: none;
          -webkit-user-drag: none;
        }
      `}</style>
    </div>
  )
}
