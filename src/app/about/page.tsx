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
                우리는 지역의 청년들이 함께 모여 문화예술 활동을 통해 서로 소통하고,
                나주의 아름다운 자연과 문화를 탐방하며, 지역 사회에 긍정적인 변화를
                만들어가고자 합니다.
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
                  세대와 직업을 넘어 다양한 청년들이 만나 서로의 생각과 
                  경험을 나누며 함께 성장합니다.
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

          {/* 참여 방법 */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-12">참여 방법</h2>
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm">
              <div className="space-y-6">
                <p className="text-gray-600">
                  라온하제는 나주 지역의 모든 청년들에게 열려있습니다.
                  프로그램별 참여가 가능하며, 관심 있는 활동에 자유롭게 참여할 수 있습니다.
                </p>
                <p className="text-gray-600">
                  시즌별로 진행되는 특별 프로그램의 경우, 메인페이지 팝업창을 통해
                  모집 일정과 참여 방법을 안내해드립니다.
                </p>
                <p className="text-gray-600">
                  주 1회 진행되는 소모임은 수시로 참여가 가능하며,
                  처음 오시는 분들도 부담 없이 참여하실 수 있습니다.
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
