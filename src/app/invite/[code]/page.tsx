'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ShareButton from '@/components/ShareButton'

interface InvitationData {
  id: string
  title: string
  description: string
  imageUrl: string
  createdAt: string
  expiresAt?: string
  isActive: boolean
}

export default function InvitationPage({ params }: { params: { code: string } }) {
  const [invitation, setInvitation] = useState<InvitationData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // TODO: API 구현 후 실제 데이터 연동
    // 임시 데이터
    setTimeout(() => {
      setInvitation({
        id: '1',
        title: '내일뉴 만두꽃피자 만들기 체험',
        description: '나주의 특산품으로 만드는 특별한 요리 체험에 여러분을 초대합니다.',
        imageUrl: '/forest/1.jpg',
        createdAt: new Date().toISOString(),
        isActive: true,
      })
      setIsLoading(false)
    }, 1000)
  }, [params.code])

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-gray-900"></div>
      </div>
    )
  }

  if (error || !invitation) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-red-600">
          {error || '초대장을 찾을 수 없습니다.'}
        </h1>
        <p className="mt-4 text-gray-600">
          URL을 다시 확인해주세요.
        </p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-lg bg-white shadow"
        >
          {/* 초대장 이미지 */}
          <div className="relative h-96 w-full sm:h-[32rem]">
            <Image
              src={invitation.imageUrl}
              alt={invitation.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* 초대장 내용 */}
          <div className="px-4 py-5 sm:p-6">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {invitation.title}
            </h1>
            <p className="mt-4 text-lg text-gray-500">
              {invitation.description}
            </p>

            {/* 버튼 그룹 */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ShareButton />
              <button
                onClick={() => window.print()}
                className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                이미지 저장하기
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
