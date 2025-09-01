'use client'

import { useEffect, useState } from 'react'

interface Activity {
  title: string
  description: string
  icon: string
  schedule: string
}

const activities: Activity[] = [
  {
    title: '청년 문화예술단',
    description: '다양한 문화예술 활동을 통해 나주의 새로운 문화를 만들어갑니다.',
    icon: '🎨',
    schedule: '매주 화요일 저녁 7시'
  },
  {
    title: '힐링 탐방단',
    description: '나주의 숨겨진 명소를 탐방하며 지역의 매력을 재발견합니다.',
    icon: '🚶',
    schedule: '격주 토요일 오전 10시'
  },
  {
    title: '맛집탐험대',
    description: '나주의 맛있는 음식점을 발굴하고 지역 상권 활성화에 기여합니다.',
    icon: '🍽️',
    schedule: '매월 둘째 주 금요일'
  },
  {
    title: '청년 봉사단',
    description: '지역사회를 위한 다양한 봉사활동으로 따뜻한 나주를 만듭니다.',
    icon: '🤝',
    schedule: '매월 넷째 주 일요일'
  },
  {
    title: '온라인 모임',
    description: '온라인 플랫폼을 통해 시간과 장소에 구애받지 않고 소통합니다.',
    icon: '💻',
    schedule: '매주 목요일 저녁 8시'
  },
  {
    title: '청년 네트워킹',
    description: '다양한 분야의 청년들이 만나 서로의 경험과 지식을 공유합니다.',
    icon: '🌐',
    schedule: '매월 첫째 주 수요일'
  },
  {
    title: '지역 프로젝트',
    description: '지역 발전을 위한 실질적인 프로젝트를 기획하고 실행합니다.',
    icon: '📋',
    schedule: '프로젝트별 상이'
  },
  {
    title: '특별 행사',
    description: '시즌별 특별 행사와 페스티벌을 통해 지역 주민들과 소통합니다.',
    icon: '🎉',
    schedule: '시즌별 공지'
  }
]

export default function Gallery() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="activities" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">우리의 활동</h2>
        <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          내일뉴는 다양한 장소에서 청년들과 함께 활동합니다. 
          특정 시기마다 나주 내 여러 장소를 대여하여 프로그램을 진행하며, 
          온라인을 통해서도 활발히 소통하고 있습니다.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{activity.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{activity.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{activity.description}</p>
              <div className="text-xs text-blue-600 font-semibold">
                {activity.schedule}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">활동 장소 안내</h3>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            내일뉴는 고정된 사무실이 아닌, 프로그램의 성격에 맞는 다양한 장소에서 활동합니다.
            나주시 내 카페, 사무공간, 공원, 회의실 등을 대여하여 사용하며,
            각 프로그램별 장소는 사전에 참가자들에게 안내됩니다.
            이를 통해 더 많은 청년들이 편하게 참여할 수 있는 환경을 만들고 있습니다.
          </p>
        </div>
      </div>
    </section>
  )
}
