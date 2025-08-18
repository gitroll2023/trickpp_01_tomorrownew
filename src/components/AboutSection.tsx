import Image from 'next/image'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">라온하제 소개</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-4">
            라온하제는 나주시의 청년들이 모여 문화예술 활동과 지역 탐방을 통해<br />
            즐겁고 행복한 나주의 새로운 문화를 만들어가는 청년 단체입니다.
          </p>
          <p className="text-lg text-gray-500">
            온라인 플랫폼과 나주시 곳곳의 다양한 공간에서 활동하며,<br />
            시간과 장소에 구애받지 않는 유연한 커뮤니티를 운영합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl text-blue-600 mb-3">
                  <i className="fas fa-paint-brush"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">청년 문화예술단</h3>
                <p className="text-gray-600">
                  청년들의 창의적인 문화예술 활동을 통해 나주시의 새로운 문화를 창조하고 공유합니다.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl text-blue-600 mb-3">
                  <i className="fas fa-tree"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">나주 힐링 탐방단</h3>
                <p className="text-gray-600">
                  국립나주박물관, 산림자원연구소 등 나주의 아름다운 명소들을 탐방하며 힐링을 경험합니다.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl text-blue-600 mb-3">
                  <i className="fas fa-users"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">지역사회 참여</h3>
                <p className="text-gray-600">
                  맛집탐험대와 청년 봉사단 활동을 통해 지역의 맛과 멋을 발견하고, 함께 성장합니다.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center md:text-left">
              <a
                href="contact"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                참여하기
              </a>
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
