'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import MainHeader from '@/components/MainHeader'
import Footer from '@/components/Footer'

const programs = [
  {
    id: 1,
    title: '문화 클래스',
    description: '전문 강사와 함께하는 미술, 음악, 공예 클래스. 매주 금요일 저녁 2시간 진행.',
    location: '나주 혁신도시 문화센터',
    type: 'offline',
    schedule: '매주 금요일 19:00-21:00',
    participants: '클래스당 15명',
    price: '기본 멤버십 포함',
    benefit: '재료비 제공, 완성작 전시 기회'
  },
  {
    id: 2,
    title: '주말 트레킹',
    description: '나주 근교 산과 강변을 걸으며 스트레스를 해소하는 힘링 프로그램.',
    location: '금성산, 영산강 둥치 등',
    type: 'offline',
    schedule: '격주 토요일 09:00-12:00',
    participants: '회차당 20명',
    price: '프리미엄 멤버십 포함',
    benefit: '교통 지원, 간식 제공, 프로 가이드'
  },
  {
    id: 3,
    title: '네트워킹 파티',
    description: '매월 마지막 금요일, 회원들이 만나 친목을 도모하는 소셜 이벤트.',
    location: '나주 시내 카페 & 레스토랑',
    type: 'offline',
    schedule: '매월 마지막 금요일 19:00',
    participants: '회차당 50명',
    price: '별도 참가비 15,000원',
    benefit: '음료 및 다과 제공, 경품 추첨'
  },
  {
    id: 4,
    title: '온라인 프로그램',
    description: 'ZOOM을 통한 온라인 강연, 워크샵, 네트워킹 모임.',
    location: '온라인 (ZOOM)',
    type: 'online',
    schedule: '매주 화, 목 20:00',
    participants: '프로그램당 100명',
    price: '모든 멤버십 포함',
    benefit: '녹화본 제공, 자료 다운로드'
  },
  {
    id: 5,
    title: '분기별 특별 행사',
    description: '계절별 대규모 문화 행사 (봄 페스티벌, 여름 캘핑, 가을 전시회, 겨울 송년회).',
    location: '나주 시민공원 등',
    type: 'offline',
    schedule: '3, 6, 9, 12월',
    participants: '행사당 200명',
    price: '회원 50% 할인',
    benefit: '풀 패키지 행사, 초청 아티스트'
  },
  {
    id: 6,
    title: '신규 회원 특별 혜택',
    description: '첫 달 50% 할인, 3개월 선결제 20% 할인, 6개월 선결제 30% 할인.',
    location: '온라인 신청',
    type: 'hybrid',
    schedule: '상시',
    participants: '제한 없음',
    price: '기본: 월 9,900원 / 프리미엄: 월 19,900원',
    benefit: '모든 프로그램 참여 가능'
  }
]

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <MainHeader />
      <main>
        {/* Hero Section */}
        <section className="relative h-[500px] bg-gradient-to-br from-blue-600 to-purple-700">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <motion.h1 
                className="text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                프로그램 & 요금제
              </motion.h1>
              <motion.p 
                className="text-xl max-w-2xl mx-auto mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                월 9,900원으로 시작하는 나주 청년 문화 네트워킹 서비스
              </motion.p>
              <motion.div
                className="flex flex-wrap justify-center gap-4 text-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  💳 월 9,900원부터
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  🎉 첫 달 50% 할인
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  ✨ 모든 프로그램 참여
                </div>
              </motion.div>
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
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="text-white text-center p-6">
                      <div className="text-5xl mb-3">
                        {program.id === 1 ? '🎨' : 
                         program.id === 2 ? '🚶' :
                         program.id === 3 ? '💻' :
                         program.id === 4 ? '🍽️' :
                         program.id === 5 ? '📋' : '🤝'}
                      </div>
                      <h3 className="text-2xl font-bold">{program.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start">
                        <span className="text-blue-600 mr-2">📍</span>
                        <span className="text-gray-700 flex-1">{program.location}</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-blue-600 mr-2">📅</span>
                        <span className="text-gray-700 flex-1">{program.schedule}</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-blue-600 mr-2">👥</span>
                        <span className="text-gray-700 flex-1">{program.participants}</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-blue-600 mr-2">💰</span>
                        <span className="text-gray-700 flex-1">{program.price}</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-blue-600 mr-2">✨</span>
                        <span className="text-gray-700 flex-1">{program.benefit}</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t flex justify-between items-center">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        program.type === 'online' ? 'bg-green-100 text-green-700' :
                        program.type === 'offline' ? 'bg-blue-100 text-blue-700' :
                        'bg-purple-100 text-purple-700'
                      }`}>
                        {program.type === 'online' ? '온라인' :
                         program.type === 'offline' ? '오프라인' : '온·오프라인'}
                      </span>
                      <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                        신청하기 →
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Venue Information */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">활동 방식 안내</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="font-bold text-lg mb-2">다양한 활동 장소</h3>
                <p className="text-gray-600 text-sm">
                  고정 사무실 없이 프로그램에 맞는 최적의 장소를 대여하여 활용합니다.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="font-bold text-lg mb-2">온라인 참여 가능</h3>
                <p className="text-gray-600 text-sm">
                  온라인 플랫폼을 통해 시간과 장소의 제약 없이 참여할 수 있습니다.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="font-bold text-lg mb-2">유연한 운영</h3>
                <p className="text-gray-600 text-sm">
                  참가자의 편의를 고려하여 온·오프라인을 병행하여 운영합니다.
                </p>
              </div>
            </div>
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
                온라인과 오프라인을 넘나들며 지역의 변화를 함께 만들어가요.
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
