import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* 단체 소개 */}
          <div className="col-span-2">
            <div className="relative mb-4">
              <h3 className="text-xl font-bold text-white font-nanum inline-block relative">
                라온하제
                <span className="absolute -top-0.5 -right-2 w-1.5 h-1.5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full" />
              </h3>
              <div className="text-sm text-gray-400 font-pretendard mt-1">
                나주시 청년문화예술단체
              </div>
            </div>
            <p className="mb-4 text-gray-300">
              나주시의 청년들이 모여 문화예술 활동과 지역 탐방을 통해<br />
              즐겁고 행복한 나주의 새로운 문화를 만들어가는 청년 단체
            </p>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">바로가기</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  단체 소개
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-white transition-colors">
                  프로그램
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  자주 묻는 질문
                </Link>
              </li>
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">이메일</h3>
            <p className="text-gray-400">naju.raon.enjoy@gmail.com</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400">
          <p> {new Date().getFullYear()} 라온하제. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
