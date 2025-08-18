'use client'

import MainHeader from '@/components/MainHeader'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <MainHeader />
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* 소개 섹션 */}
          <section className="mb-20">
            <h1 className="text-4xl font-bold text-center mb-8">라온하제 소개</h1>
            <div className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed space-y-6">
              <p>
                라온하제는 &apos;즐거운 날&apos;이라는 의미의 순우리말로, 나주시의 청년들이 모여
                지역의 새로운 문화를 만들어가는 청년 문화예술 단체입니다.
              </p>
              <p>
                우리는 고정된 사무실 없이 나주시 곳곳의 다양한 공간을 활용하여 활동합니다.
                카페, 사무공간, 공원, 회의실 등 프로그램에 맞는 장소를 대여하여 사용하며,
                온라인 플랫폼을 통해서도 활발히 소통하고 있습니다.
              </p>
              <p>
                이러한 유연한 운영 방식은 더 많은 청년들이 부담 없이 참여할 수 있는 환경을 만들고,
                나주의 다양한 공간을 경험하며 지역과 더욱 친밀해지는 기회를 제공합니다.
              </p>
            </div>
          </section>

          {/* 핵심 가치 */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">핵심 가치</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-3xl text-blue-600 mb-4">
                  <i className="fas fa-heart"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">즐거움</h3>
                <p className="text-gray-600">
                  모든 활동의 중심에는 즐거움이 있습니다. 우리는 함께 모여 웃고, 
                  이야기하며, 새로운 경험을 만들어갑니다.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-3xl text-blue-600 mb-4">
                  <i className="fas fa-users"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">소통</h3>
                <p className="text-gray-600">
                  온·오프라인을 넘나들며 시간과 장소에 구애받지 않고
                  다양한 청년들이 만나 서로의 생각과 경험을 나눕니다.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-3xl text-blue-600 mb-4">
                  <i className="fas fa-seedling"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">성장</h3>
                <p className="text-gray-600">
                  지역 사회와 함께 호흡하며 나주의 새로운 문화를 만들어가는 
                  과정에서 우리도 함께 성장합니다.
                </p>
              </div>
            </div>
          </section>

          {/* 주요 활동 */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">주요 활동</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">청년 문화예술단</h3>
                  <p className="text-gray-600 mb-4">
                    지역의 청년들이 모여 다양한 문화예술 활동을 기획하고 실행합니다.
                    전시회, 공연, 워크샵 등을 통해 나주의 문화예술 발전에 기여합니다.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">힐링 탐방단</h3>
                  <p className="text-gray-600 mb-4">
                    나주의 아름다운 자연과 문화유산을 탐방하며, 지역의 숨은 매력을
                    발견하고 공유합니다. 국립나주박물관, 산림자원연구소 등을 방문합니다.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">맛집탐험대</h3>
                  <p className="text-gray-600 mb-4">
                    지역의 숨은 맛집을 발굴하고 소개하는 활동을 통해 나주의 식문화를
                    알리고 지역 상권 활성화에 기여합니다.
                  </p>
                </div>
              </div>
              <div className="relative h-[600px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/group/5.jpg"
                  alt="라온하제 활동 이미지"
                  fill
                  className="object-cover"
                  style={{ objectPosition: '30% center' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </section>

          {/* 운영 방식 */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">운영 방식</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">온라인 중심 소통</h3>
                <p className="text-gray-600 mb-4">
                  라온하제는 온라인 플랫폼을 적극 활용하여 청년들이 시간과 장소에 구애받지 않고
                  참여할 수 있도록 합니다. 화상 회의, SNS, 메신저 등 다양한 채널을 통해
                  일상적인 소통과 프로젝트 협업이 이루어집니다.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• 매주 정기 온라인 모임 진행</li>
                  <li>• SNS를 통한 일상 소통</li>
                  <li>• 온라인 워크샵 및 세미나</li>
                </ul>
              </div>
              <div className="bg-green-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">유연한 오프라인 활동</h3>
                <p className="text-gray-600 mb-4">
                  고정된 사무실 없이 나주시 내 다양한 장소를 활용합니다.
                  각 프로그램의 성격에 맞는 최적의 공간을 선택하여 대여하며,
                  이를 통해 나주의 다양한 공간을 경험할 수 있습니다.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• 카페, 사무공간, 공원 등 다양한 장소 활용</li>
                  <li>• 프로그램별 최적 장소 선택</li>
                  <li>• 참가자 접근성 고려한 장소 선정</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 참여 방법 */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-12">참여 방법</h2>
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm">
              <div className="space-y-6">
                <p className="text-gray-600">
                  라온하제는 나주 지역의 모든 청년들에게 열려있습니다.
                  온라인과 오프라인을 통해 다양한 방식으로 참여가 가능합니다.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-3">온라인 참여</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• 정기 온라인 모임 참여 (매주 목요일 저녁 8시)</li>
                    <li>• SNS 채널을 통한 일상 소통</li>
                    <li>• 온라인 프로젝트 협업</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-3">오프라인 참여</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• 프로그램별 오프라인 모임 참여</li>
                    <li>• 시즌별 특별 행사 참가</li>
                    <li>• 지역 탐방 및 봉사 활동</li>
                  </ul>
                </div>
                <p className="text-gray-600 text-sm">
                  * 모든 오프라인 활동 장소는 사전에 공지되며, 나주시 내 접근성이 좋은 곳으로 선정됩니다.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
