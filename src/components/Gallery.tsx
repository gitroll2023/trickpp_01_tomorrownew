'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const TOTAL_IMAGES = 22
const DISPLAY_COUNT = 8
const TRANSITION_INTERVAL = 7000

export default function Gallery() {
  const [mounted, setMounted] = useState(false)
  const [currentImages, setCurrentImages] = useState<number[]>([])
  const [nextImages, setNextImages] = useState<number[]>([])
  const [isTransitioning, setIsTransitioning] = useState(false)
  
  useEffect(() => {
    setMounted(true)
    const initialImages = Array.from({ length: DISPLAY_COUNT }, (_, i) => i + 1)
    setCurrentImages(initialImages)
    setNextImages(initialImages)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const generateNewImages = () => {
      const newImages = []
      const used = new Set()
      while (newImages.length < DISPLAY_COUNT) {
        const num = Math.floor(Math.random() * TOTAL_IMAGES) + 1
        if (!used.has(num)) {
          used.add(num)
          newImages.push(num)
        }
      }
      return newImages
    }

    const interval = setInterval(() => {
      const newImages = generateNewImages()
      setNextImages(newImages)
      setIsTransitioning(true)
      
      setTimeout(() => {
        setCurrentImages(newImages)
        setIsTransitioning(false)
      }, 1000)
    }, TRANSITION_INTERVAL)

    return () => clearInterval(interval)
  }, [mounted])

  if (!mounted) return null

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">나주 둘러보기</h2>
        <div 
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          onContextMenu={(e) => e.preventDefault()}
        >
          {currentImages.map((num, index) => (
            <div 
              key={`${num}-${index}`} 
              className="relative aspect-square group overflow-hidden rounded-lg select-none"
            >
              <Image
                src={`/main/${num}.jpg`}
                alt={`나주시 둘러보기 ${num}`}
                fill
                className={`object-cover ${isTransitioning ? 'opacity-0' : 'opacity-100'} select-none`}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                style={{ transition: 'opacity 1s ease-in-out' }}
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
              />
              {isTransitioning && (
                <Image
                  src={`/main/${nextImages[index]}.jpg`}
                  alt={`나주시 둘러보기 ${nextImages[index]}`}
                  fill
                  className="object-cover select-none"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                />
              )}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 mt-8 text-sm">모든 촬영물은 라온하제에서 직접 촬영하였습니다.</p>
      </div>

      <style jsx global>{`
        #gallery img {
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -o-user-select: none;
          user-select: none;
          -webkit-user-drag: none;
          pointer-events: none;
        }
      `}</style>
    </section>
  )
}
