interface PassedApplicantsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const passedApplicants = {
  문화기획: [
    { name: '김*현', location: '전라남도 나주시', part: '행사기획' },
    { name: '이*진', location: '전라남도 화순군', part: '프로그램기획' },
    { name: '박*수', location: '전라남도 나주시', part: '홍보기획' },
  ],
  공연예술: [
    { name: '정*준', location: '전라남도 나주시', part: '연극' },
    { name: '최*리', location: '전라남도 무안군', part: '현대무용' },
    { name: '윤*현', location: '전라남도 나주시', part: '실용음악' },
  ],
  시각예술: [
    { name: '강*우', location: '전라남도 나주시', part: '사진/영상' },
    { name: '조*민', location: '전라남도 나주시', part: '그래픽디자인' },
    { name: '황*진', location: '전라남도 나주시', part: '일러스트' },
  ]
};

export default function PassedApplicantsModal({ isOpen, onClose }: PassedApplicantsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">라온하제 문화예술단 신규 멤버 발표</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="space-y-8">
            {Object.entries(passedApplicants).map(([category, applicants]) => (
              <div key={category} className="border-b pb-6 last:border-b-0 last:pb-0">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">{category} 분야</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {applicants.map((applicant, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <div className="font-medium text-lg mb-2">{applicant.name}</div>
                      <div className="text-gray-600 text-sm space-y-1">
                        <div>{applicant.location}</div>
                        <div className="text-blue-500">{applicant.part}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>라온하제 문화예술단의 새로운 멤버가 되신 것을 진심으로 축하드립니다.</p>
            <p>자세한 안내사항은 개별 연락드리겠습니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
