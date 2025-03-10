'use client'

import Image from 'next/image'
import { useRef } from 'react'
import html2canvas from 'html2canvas'
import { Invitation } from '@/types/invitation'
import Link from 'next/link'

interface InvitationClientProps {
  invitation: Invitation | null
  error: string | null
  recipientName?: string
}

export default function InvitationClient({
  invitation,
  error,
  recipientName,
}: InvitationClientProps) {
  const invitationRef = useRef<HTMLDivElement>(null)

  const downloadInvitation = async () => {
    if (!invitationRef.current) return

    try {
      const targetElement = invitationRef.current
      const originalBg = targetElement.style.background
      targetElement.style.background = 'white'

      const canvas = await html2canvas(targetElement, {
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
        scale: 2,
        logging: false,
      })

      targetElement.style.background = originalBg

      const link = document.createElement('a')
      link.download = `초대장_${recipientName || 'download'}.png`
      link.href = canvas.toDataURL('image/png')
      link.click()
    } catch (error) {
      console.error('Failed to download invitation:', error)
      alert('초대장 다운로드에 실패했습니다.')
    }
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', color: '#ef4444' }}>
        <p>{error}</p>
      </div>
    )
  }

  if (!invitation) {
    return (
      <div style={{ textAlign: 'center' }}>
        <p>초대장을 불러오는 중...</p>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: '100%', margin: '0 auto', padding: '1rem' }}>
      <div 
        ref={invitationRef} 
        style={{ 
          backgroundColor: 'white',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        {recipientName && (
          <h1 style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '2rem',
            color: '#111827'
          }}>
            "{recipientName}"님을 초대합니다
          </h1>
        )}
        
        <div style={{ 
          position: 'relative', 
          width: '100%',
          height: '800px',
          marginBottom: '2rem',
        }}>
          <Image
            src={invitation.imageUrl}
            alt="초대장 이미지"
            fill
            style={{ objectFit: 'contain' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            quality={100}
          />
        </div>

        <div style={{ 
          width: '100%',
          maxWidth: '24rem',
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          <h2 style={{ 
            fontSize: '1.25rem',
            fontWeight: '600',
            color: '#111827',
            marginBottom: '1.5rem'
          }}>
            {invitation.title}
          </h2>
          {invitation.description && (
            <p style={{ 
              whiteSpace: 'pre-wrap',
              color: '#4b5563'
            }}>
              {invitation.description}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-3 max-w-sm mx-auto mt-8">
        <button
          onClick={downloadInvitation}
          className="w-full py-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
        >
          초대장 다운로드
        </button>

        <Link 
          href="/"
          className="block w-full py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-xl font-medium text-center hover:bg-blue-50 transition-colors"
        >
          라온하제 둘러보기
        </Link>
      </div>
    </div>
  )
}
