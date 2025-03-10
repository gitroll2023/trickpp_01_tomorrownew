'use client'

import Image from 'next/image'

interface InvitationPreviewModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function InvitationPreviewModal({
  isOpen,
  onClose,
}: InvitationPreviewModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-xl font-semibold">초대장 예시</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        
        <div className="p-4">
          <div className="relative w-full h-[600px]">
            <Image
              src="/초대장_홍길동.png"
              alt="초대장 예시"
              fill
              className="object-contain"
            />
          </div>
          <p className="mt-4 text-sm text-gray-500 text-center">
            * 위 이미지는 예시이며, 실제 초대장은 신청자 정보와 함께 개별적으로 발송됩니다.
          </p>
        </div>

        <div className="p-4 border-t text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  )
}
