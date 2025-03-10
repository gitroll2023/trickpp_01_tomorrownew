'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import MainHeader from '@/components/MainHeader'
import ProgramImageSlider from '@/components/ProgramImageSlider'
import Footer from '@/components/Footer'

const programs = [
  {
    id: 1,
    title: '청년 문화 예술단',
    description: '나주의 젊은 예술가들이 모여 도시의 문화를 새롭게 만들어갑니다.',
    image: '/group/8.jpg',
    additionalImages: ['/group/7.jpg', '/group/16.jpg', '/group/17.jpg', '/group/18.jpg']
  },
  {
    id: 2,
    title: '힐링 탐방단',
    description: '국립나주박물관, 산림자원연구소, 느러지 전망대 등 나주의 아름다운 명소를 찾아 떠나는 힐링 여행. 도시를 벗어나 자연과 문화 속에서 쉬어가요.',
    image: '/main/14.jpg',
    additionalImages: ['/main/4.jpg', '/main/8.jpg', '/main/9.jpg', '/main/16.jpg']
  },
  {
    id: 3,
    title: '베이킹 클래스',
    description: '전문 강사와 함께 케이크, 마카롱 등 달콤한 디저트를 만들어봅니다.',
    image: '/group/11.jpg',
    additionalImages: ['/group/21.jpg', '/group/22.jpg', '/group/23.jpg']
  },
  {
    id: 4,
    title: '맛집탐험대',
    description: '숨은 맛집을 찾아 떠나는 미식 여행. 전통 맛집부터 트렌디한 카페까지 함께 발굴해봐요.',
    image: '/food/1.jpg',
    additionalImages: [
      '/food/2.jpg', '/food/3.jpg', '/food/4.jpg', '/food/5.jpg', 
      '/food/6.jpg', '/food/7.jpg', '/food/8.jpg', '/food/9.jpg', 
      '/food/10.jpg', '/food/11.jpg', '/food/12.jpg', '/food/13.jpg',
      '/food/14.jpg', '/food/15.jpg', '/food/16.jpg', '/food/17.jpg',
      '/food/18.jpg', '/food/19.jpg', '/food/20.jpg', '/food/21.jpg',
      '/food/22.jpg'
    ]
  },
  {
    id: 5,
    title: '칵테일 파티',
    description: '전문 바텐더와 함께하는 특별한 칵테일 클래스. 나만의 시그니처 칵테일을 만들어보세요.',
    image: '/group/9.jpg',
    additionalImages: ['/group/3.jpg', '/group/4.jpg', '/group/10.jpg', '/group/5.jpg']
  },
  {
    id: 6,
    title: '청년 봉사단',
    description: '지역 사회를 위한 다양한 봉사 활동을 기획하고 실천합니다.',
    image: '/group/24.jpg',
    additionalImages: ['/group/25.jpg']
  }
]

console.log(programs)

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <MainHeader />
      <main>
        {/* Hero Section */}
        <section className="relative h-[500px] bg-black">
          <Image
            src="/group/13.jpg"
            alt="나주시 청년 프로그램"
            fill
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <motion.h1 
                className="text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                나주시 청년 프로그램
              </motion.h1>
              <motion.p 
                className="text-xl max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                노잼나주? 꿀잼나주! 청년들의 열정으로 만들어가는 새로운 나주
              </motion.p>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
            >
              {programs.map((program) => (
                <motion.div
                  key={program.id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative h-64">
                    {program.additionalImages ? (
                      <ProgramImageSlider 
                        mainImage={program.image}
                        additionalImages={program.additionalImages}
                      />
                    ) : (
                      <Image
                        src={program.image}
                        alt={program.title}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                    <p className="text-gray-600">{program.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-8">
                함께 만들어가는 나주의 미래
              </h2>
              <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                나주시 청년 프로그램은 여러분의 참여를 기다립니다.
                <br/>
                다양한 소모임을 통해 지역의 변화를 함께 만들어가요.
              </p>
              <Link 
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                프로그램 신청하기
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
