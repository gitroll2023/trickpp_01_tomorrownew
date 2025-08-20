import Image from 'next/image'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">라온하제 서비스</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-4">
            라온하제는 나주 지역 청년들을 위한 문화 네트워킹 서비스를 제공하는<br />
            청년 문화 전문 기업입니다. (사업자등록번호: 123-45-67890)
          </p>
          <p className="text-lg text-gray-500">
            2023년 설립 이후 1,000명 이상의 회원과 함께<br />
            매주 10개 이상의 프로그램을 운영하고 있습니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl text-blue-600 mb-3">
                  <i className="fas fa-paint-brush"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">정기 문화 프로그램</h3>
                <p className="text-gray-600">
                  매주 금요일 저녁, 전문 강사와 함께하는 미술, 음악, 공예 클래스를 운영합니다.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl text-blue-600 mb-3">
                  <i className="fas fa-tree"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">주말 액티비티</h3>
                <p className="text-gray-600">
                  격주 토요일, 나주 근교 트레킹과 문화 탐방 프로그램을 진행합니다.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl text-blue-600 mb-3">
                  <i className="fas fa-users"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">네트워킹 이벤트</h3>
                <p className="text-gray-600">
                  월 1회 회원 전용 네트워킹 파티와 분기별 대규모 문화 행사를 개최합니다.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center md:text-left">
              <div className="mb-4">
                <span className="text-2xl font-bold text-blue-600">월 9,900원</span>
                <span className="text-gray-500 ml-2">부터</span>
              </div>
              <a
                href="contact"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                지금 가입하기
              </a>
              <p className="text-sm text-gray-500 mt-2">* 첫 달 50% 할인 이벤트 진행 중</p>
            </div>
          </div>

          <div className="relative h-[600px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/forest/3.png"
              alt="라온하제 활동 이미지"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
