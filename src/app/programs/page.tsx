'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import MainHeader from '@/components/MainHeader'
import Footer from '@/components/Footer'

const programs = [
  {
    id: 1,
    title: '청년 문화 예술단',
    description: '나주의 젊은 예술가들이 모여 도시의 문화를 새롭게 만들어갑니다. 매월 다른 문화공간에서 진행됩니다.',
    location: '나주시 내 사무공간, 갤러리, 카페 등',
    type: 'hybrid',
    schedule: '매월 첫째, 셋째 주 화요일',
    participants: '20-30명',
    benefit: '문화예술 활동 지원, 네트워킹 기회 제공'
  },
  {
    id: 2,
    title: '힐링 탐방단',
    description: '국립나주박물관, 산림자원연구소, 느러지 전망대 등 나주의 아름다운 명소를 찾아 떠나는 힐링 여행.',
    location: '나주시 내 다양한 명소',
    type: 'offline',
    schedule: '격주 토요일 오전',
    participants: '15-20명',
    benefit: '교통 지원, 입장료 지원, 간식 제공'
  },
  {
    id: 3,
    title: '온라인 네트워킹',
    description: '시간과 장소에 구애받지 않는 온라인 모임. 화상회의를 통해 프로젝트를 진행하고 아이디어를 공유합니다.',
    location: '온라인 플랫폼 (Zoom, Discord 등)',
    type: 'online',
    schedule: '매주 목요일 저녁 8시',
    participants: '제한 없음',
    benefit: '온라인 툴 지원, 프로젝트 멘토링'
  },
  {
    id: 4,
    title: '맛집탐험대',
    description: '숨은 맛집을 찾아 떠나는 미식 여행. 매번 다른 맛집에서 모여 나주의 맛을 탐험합니다.',
    location: '나주시 내 다양한 음식점',
    type: 'offline',
    schedule: '매월 둘째 주 금요일',
    participants: '10-15명',
    benefit: '식사비 일부 지원, 맛집 정보 공유'
  },
  {
    id: 5,
    title: '청년 프로젝트팀',
    description: '온·오프라인을 넘나들며 지역 발전 프로젝트를 기획하고 실행합니다. 유연한 참여가 가능합니다.',
    location: '온라인 + 프로젝트별 오프라인 장소',
    type: 'hybrid',
    schedule: '프로젝트별 상이',
    participants: '팀별 5-10명',
    benefit: '프로젝트 예산 지원, 전문가 멘토링'
  },
  {
    id: 6,
    title: '청년 봉사단',
    description: '지역 사회를 위한 다양한 봉사 활동을 기획하고 실천합니다. 활동 장소는 봉사 내용에 따라 달라집니다.',
    location: '봉사 활동 장소 (사전 공지)',
    type: 'offline',
    schedule: '매월 넷째 주 일요일',
    participants: '20-30명',
    benefit: '봉사활동 인증서, 활동비 지원'
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
                나주시 청년 프로그램
              </motion.h1>
              <motion.p 
                className="text-xl max-w-2xl mx-auto mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                노잼나주? 꿀잼나주! 청년들의 열정으로 만들어가는 새로운 나주
              </motion.p>
              <motion.div
                className="flex flex-wrap justify-center gap-4 text-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  🏢 다양한 장소에서 활동
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  💻 온라인 참여 가능
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  🤝 무료 참여
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
                        참여 신청 →
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
