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
    question: '라온하제는 어떤 회사인가요?',
    answer: '라온하제는 나주 지역 청년들을 위한 문화 네트워킹 서비스를 제공하는 청년 문화 기업입니다. (사업자등록번호: 123-45-67890) 2023년 설립 이후 1,000명 이상의 회원과 함께 매주 10개 이상의 문화 프로그램을 운영하고 있습니다. 종교, 정치, 이념과 무관한 순수 문화 서비스 기업입니다.'
  },
  {
    question: '서비스 요금은 어떻게 되나요?',
    answer: '기본 멤버십은 월 9,900원입니다. 프리미엄 멤버십(월 19,900원)은 모든 프로그램 무제한 참여와 우선 예약 혜택을 제공합니다. 신규 가입 시 첫 달 50% 할인 이벤트를 진행 중이며, 3개월/6개월 선결제 시 추가 할인이 적용됩니다.'
  },
  {
    question: '무료 체험 기간이 종료되면 어떻게 되나요?',
    answer: '2024년 12월까지 진행된 무료 체험 기간이 종료되어, 2025년 1월부터는 정식 유료 서비스로 전환됩니다. 기존 회원님들께는 특별 할인 혜택을 제공하며, 언제든지 구독 취소가 가능합니다. 체험 기간 동안의 피드백을 반영하여 더 나은 서비스로 개선했습니다.'
  },
  {
    question: '활동 장소는 어디인가요?',
    answer: '프로그램별로 나주시 내 최적의 장소를 선정하여 진행합니다. 주요 활동 지역은 나주 혁신도시, 영산포, 남평 일대이며, 각 프로그램 예약 시 정확한 장소와 교통편을 안내해드립니다. 모든 장소는 대중교통 접근성을 고려하여 선정됩니다.'
  },
  {
    question: '어떤 프로그램들이 있나요?',
    answer: '매주 금요일 저녁 문화 클래스(미술, 음악, 공예), 격주 토요일 나주 근교 트레킹, 월 1회 네트워킹 파티, 분기별 대규모 문화 행사 등을 운영합니다. 모든 프로그램은 전문 강사와 기획자가 진행하며, 회원 투표를 통해 신규 프로그램을 개설합니다.'
  },
  {
    question: '회원 가입은 어떻게 하나요?',
    answer: '홈페이지 또는 모바일 앱을 통해 간단히 가입할 수 있습니다. 만 19세 이상 39세 이하 청년이면 누구나 가입 가능하며, 신분증 인증 후 즉시 서비스를 이용할 수 있습니다. 결제는 신용카드, 체크카드, 간편결제 모두 가능합니다.'
  },
  {
    question: '환불 정책은 어떻게 되나요?',
    answer: '가입 후 7일 이내 전액 환불이 가능하며, 이후에는 이용 기간에 따라 일할 계산하여 환불해드립니다. 프로그램 예약 후 24시간 전까지 무료 취소 가능하며, 당일 취소는 50% 수수료가 발생합니다. 자세한 내용은 이용약관을 참고해주세요.'
  },
  {
    question: '기업 후원이나 제휴는 가능한가요?',
    answer: '네, 가능합니다. 지역 기업과의 제휴를 통해 회원 복지 혜택을 확대하고 있습니다. 기업 단체 회원 가입, 프로그램 후원, 공간 제공 등 다양한 형태의 협력이 가능합니다. 자세한 문의는 partnership@raonhj.com으로 연락주세요.'
  },
  {
    question: '다른 지역에서도 서비스를 이용할 수 있나요?',
    answer: '현재는 나주시를 중심으로 서비스를 제공하고 있으며, 2025년 하반기 광주 및 목포 지역 확장을 준비 중입니다. 온라인 프로그램의 경우 지역 제한 없이 참여 가능합니다.'
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
