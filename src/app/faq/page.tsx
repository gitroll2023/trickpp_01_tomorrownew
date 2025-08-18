'use client'

import { useState } from 'react'
import MainHeader from '@/components/MainHeader'
import Footer from '@/components/Footer'

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: '라온하제는 어떤 단체인가요?',
    answer: '라온하제는 나주시의 청년들이 모여 문화예술 활동과 지역 탐방을 통해 즐겁고 행복한 나주의 새로운 문화를 만들어가는 청년 단체입니다. 온라인 플랫폼을 적극 활용하여 시간과 장소의 제약 없이 청년들이 소통하고 협력할 수 있는 환경을 제공합니다.'
  },
  {
    question: '라온하제는 어떻게 운영되나요?',
    answer: '라온하제는 지역 발전에 관심이 있는 기업들의 후원으로 운영되고 있습니다. 후원 기업들은 보안상의 이유와 기업 정책에 따라 비공개를 원칙으로 하고 있으나, 그들의 지원 덕분에 청년들을 위한 다양한 프로그램을 무료 또는 최소 비용으로 제공할 수 있습니다. 모든 활동과 재정 운영은 투명하게 관리되고 있습니다.'
  },
  {
    question: '활동 장소는 어디인가요?',
    answer: '라온하제는 별도의 고정된 건물을 보유하지 않고, 프로그램의 성격과 참여자의 편의를 고려하여 나주시 내 다양한 장소를 대여하여 사용합니다. 카페, 사무공간, 공원, 회의실 등 각 활동에 적합한 공간을 그때그때 섭외하여 운영하며, 이를 통해 더 많은 청년들이 접근하기 쉬운 환경을 만들고 있습니다.'
  },
  {
    question: '온라인으로도 참여가 가능한가요?',
    answer: '네, 가능합니다. 라온하제는 온라인 플랫폼을 적극 활용하여 시간적, 공간적 제약 없이 청년들이 참여할 수 있도록 하고 있습니다. 정기적인 온라인 모임, 화상 회의, SNS를 통한 소통 등 다양한 온라인 채널을 운영하며, 오프라인 활동이 어려운 분들도 충분히 참여하실 수 있습니다.'
  },
  {
    question: '어떤 활동들을 하나요?',
    answer: '청년 문화예술단, 힐링 탐방단, 맛집탐험대, 청년 봉사단, 온라인 모임, 청년 네트워킹 등 다양한 활동을 진행합니다. 각 프로그램은 시즌별로 운영되며, 특정 시기마다 나주시 내 여러 장소에서 진행됩니다.'
  },
  {
    question: '단체 가입은 어떻게 하나요?',
    answer: '현재 저희 단체는 별도의 회원 가입을 받지 않고 있습니다. 프로그램별 참여를 통해 활동하실 수 있으며, 온라인 채널을 통해 언제든 소통하실 수 있습니다.'
  },
  {
    question: '활동 비용은 어떻게 되나요?',
    answer: '대부분의 기본 활동은 무료로 진행됩니다. 단, 특별 프로그램이나 원거리 탐방 등의 경우 최소한의 참가비가 있을 수 있습니다.'
  },
  {
    question: '정기 모임은 언제인가요?',
    answer: '온라인 모임은 매주 정기적으로 진행되며, 오프라인 모임은 프로그램별로 다양한 시간대에 운영됩니다. 시즌별로 진행되는 특별 모임의 경우 메인페이지 팝업창과 SNS를 통해 공지됩니다.'
  },
  {
    question: '다른 지역 거주자도 참여할 수 있나요?',
    answer: '기본적으로 나주시 거주자를 우선으로 하지만, 인근 지역 거주자도 참여 가능합니다. 특히 온라인 활동의 경우 지역 제한 없이 참여하실 수 있습니다.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <MainHeader />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-16">자주 묻는 질문</h1>
          <div className="max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="mb-4 bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                  onClick={() => toggleAnswer(index)}
                >
                  <span className="text-lg font-semibold text-gray-800">
                    {item.question}
                  </span>
                  <svg
                    className={`w-5 h-5 transform transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`px-6 py-4 bg-gray-50 transition-all duration-300 ${
                    openIndex === index ? 'block' : 'hidden'
                  }`}
                >
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
