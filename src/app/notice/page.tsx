'use client'

import { useState } from 'react'
import MainHeader from '@/components/MainHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import PassedApplicantsModal from '@/components/PassedApplicantsModal'

interface Notice {
  id: number
  title: string
  date: string
  location?: string
  content: string
  important?: boolean
  applyLink?: string
  isExpired?: boolean
  showPassedApplicants?: boolean
}

const notices: Notice[] = [
  {
    id: 11,
    title: '2025년 봄 시즌 라온하제 소모임 프로젝트 안내',
    date: '2025-03-01',
    content: `3-4월 봄 시즌을 맞아 라온하제 소모임 프로젝트가 매주 토요일마다 진행됩니다.

[진행 일정]
- 기간: 2025년 3월 2일 ~ 4월 27일 (매주 토요일)
- 시간: 오후 2시 / 5시 / 7시 중 진행 예정 (정확한 시간은 매주 월요일 개별 공지)

매주 다양한 문화예술 활동과 지역 탐방이 진행될 예정이며,
상세 프로그램은 매주 월요일까지 참가자들에게 개별 공지됩니다.

[참여 방법]
- 라온하제 회원: 매주 금요일까지 신청톡으로 신청
- 일반 참가자: 매주 금요일까지 홈페이지에서 신청 (선착순 마감)

각 소모임은 참가자들의 적극적인 교류와 협업을 중심으로 운영됩니다.

함께 만들어가는 나주의 새로운 문화 이야기에 많은 관심과 참여 부탁드립니다.`,
    important: true,
    location: '나주혁신도시'
  },
  {
    id: 10,
    title: '라온하제와 함께할 신규 문화예술단 멤버를 발표합니다',
    date: '2025-02-28',
    content: `라온하제 문화예술단 신규 멤버 모집에 많은 관심을 가져주셔서 감사합니다.
    아래 버튼을 클릭하여 최종 선발된 멤버 명단을 확인하실 수 있습니다.`,
    important: true,
    showPassedApplicants: true
  },
  {
    id: 9,
    title: '라온하제 문화예술단 신규 멤버 모집',
    date: '2025-01-15',
    content: `라온하제 문화예술단 신규 멤버를 모집합니다.
     문화예술에 관심 있는 청년들의 많은 참여 바랍니다. 
     모집 마감일: 2025년 2월 28일`,
    important: true,
    applyLink: '/apply/2025-culture',
    isExpired: true
  },
  {
    id: 8,
    title: '겨울 맛집탐험대 참가자 모집',
    date: '2024-12-20',
    location: '동신대앞',
    content: '겨울 시즌 맛집탐험대 참가자를 모집합니다. 이번 시즌은 따뜻한 국물요리와 전통 차를 중심으로 진행됩니다.'
  },
  {
    id: 7,
    title: '2024 송년회 및 활동 발표회',
    date: '2024-12-10',
    location: '나주혁신도시',
    content: '2024년 한 해 동안의 활동을 돌아보고 내년 계획을 공유하는 송년회를 개최합니다.',
    important: true
  },
  {
    id: 6,
    title: '가을 힐링 탐방 프로그램 안내',
    date: '2024-09-15',
    location: '구도심',
    content: '단풍 시즌을 맞아 나주의 아름다운 명소들을 탐방하는 프로그램을 진행합니다.'
  },
  {
    id: 5,
    title: '청년 봉사단 특별 활동',
    date: '2024-08-20',
    location: '나주혁신도시',
    content: '무더운 여름을 맞아 지역 어르신들을 위한 특별 봉사 활동을 진행합니다.'
  },
  {
    id: 4,
    title: '여름 문화예술 페스티벌',
    date: '2024-07-01',
    location: '구도심',
    content: '청년들이 준비한 다양한 문화예술 공연과 전시가 펼쳐질 예정입니다.',
    important: true
  },
  {
    id: 3,
    title: '봄 시즌 첫 모임 안내',
    date: '2024-04-05',
    location: '동신대앞',
    content: '2024년 봄 시즌 첫 모임을 진행합니다. 새로운 회원들과 함께하는 오리엔테이션도 진행될 예정입니다.'
  },
  {
    id: 2,
    title: '설날 맞이 지역 탐방',
    date: '2024-02-10',
    location: '구도심',
    content: '설날을 맞아 나주의 전통 시장과 문화 유적지를 탐방하는 프로그램을 진행합니다.'
  },
  {
    id: 1,
    title: '2024년 신년회 및 운영계획 발표',
    date: '2024-01-05',
    location: '나주혁신도시',
    content: '2024년 라온하제의 운영 계획을 공유하고 새로운 시작을 알리는 신년회를 개최합니다.',
    important: true
  }
]

export default function NoticePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <MainHeader />
      <main className="py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16 font-nanum">공지사항</h1>
          <div className="max-w-4xl mx-auto">
            {notices.map((notice) => (
              <div
                key={notice.id}
                className={`mb-4 sm:mb-6 bg-white rounded-lg shadow-sm overflow-hidden border-l-4 ${
                  notice.important ? 'border-blue-500' : 'border-gray-200'
                }`}
              >
                <div className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 mb-3 sm:mb-4">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900 font-nanum">
                      {notice.important && (
                        <span className="inline-block bg-blue-100 text-blue-600 text-xs sm:text-sm px-2 py-1 rounded mr-2">
                          중요
                        </span>
                      )}
                      {notice.title}
                    </h2>
                    <span className="text-xs sm:text-sm text-gray-500 font-pretendard">{notice.date}</span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 whitespace-pre-line font-pretendard">{notice.content}</p>
                  {notice.location && (
                    <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-500 font-pretendard">
                      <span>장소: {notice.location}</span>
                      <span className="px-2 py-1 bg-gray-100 rounded text-xs">상세 위치는 별도 공지</span>
                    </div>
                  )}
                  {notice.showPassedApplicants && (
                    <div className="mt-4">
                      <button
                        onClick={() => setIsModalOpen(true)}
                        className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium bg-green-500 text-white hover:bg-green-600 font-pretendard"
                      >
                        합격자 명단 확인
                        <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  )}
                  {notice.applyLink && !notice.showPassedApplicants && (
                    <div className="mt-4">
                      <Link
                        href={notice.applyLink}
                        className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium font-pretendard ${
                          notice.isExpired
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-blue-500 text-white hover:bg-blue-600'
                        }`}
                        onClick={(e) => notice.isExpired && e.preventDefault()}
                      >
                        {notice.isExpired ? '모집 마감' : '신청하기'}
                        <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <PassedApplicantsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Footer />
    </div>
  )
}
