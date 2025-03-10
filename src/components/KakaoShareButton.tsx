'use client'

import { useEffect, useState } from 'react'

interface KakaoShareButtonProps {
  title: string
  description: string
  imageUrl: string
  buttonLabel?: string
  className?: string
}

declare global {
  interface Window {
    Kakao: any
  }
}

export default function KakaoShareButton({
  title,
  description,
  imageUrl,
  buttonLabel = '카카오톡으로 공유하기',
  className = '',
}: KakaoShareButtonProps) {
  const [isKakaoLoaded, setIsKakaoLoaded] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.Kakao) {
      setIsKakaoLoaded(true)
    }
  }, [])

  const handleShare = () => {
    if (!isKakaoLoaded) {
      alert('카카오톡 공유 기능을 초기화하는 중입니다. 잠시 후 다시 시도해주세요.')
      return
    }

    const shareData = {
      objectType: 'feed',
      content: {
        title,
        description,
        imageUrl: imageUrl.startsWith('http') ? imageUrl : `${window.location.origin}${imageUrl}`,
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },
      buttons: [
        {
          title: '초대장 보기',
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
      ],
    }

    try {
      window.Kakao.Share.sendDefault(shareData)
    } catch (error) {
      console.error('카카오톡 공유 실패:', error)
      alert('카카오톡 공유에 실패했습니다. 잠시 후 다시 시도해주세요.')
    }
  }

  return (
    <button
      onClick={handleShare}
      className={`inline-flex items-center justify-center rounded-md bg-[#FEE500] px-3.5 py-2.5 text-sm font-semibold text-[#000000] shadow-sm hover:bg-[#FEE500]/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FEE500] ${className}`}
    >
      <svg
        className="mr-2 h-5 w-5"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 3c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 18.523 2 13 6.477 3 12 3zm0 2a8 8 0 100 16 8 8 0 000-16zm0 3a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H8a1 1 0 110-2h3V9a1 1 0 011-1z" />
      </svg>
      {buttonLabel}
    </button>
  )
}
