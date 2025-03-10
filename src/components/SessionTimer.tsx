'use client'

import { useEffect, useState } from 'react'
import { getSessionTimeRemaining, clearAuthSession } from '@/utils/auth'
import { useRouter } from 'next/navigation'

export default function SessionTimer() {
  const [timeRemaining, setTimeRemaining] = useState<string>('')
  const router = useRouter()

  useEffect(() => {
    const updateTimer = () => {
      const remaining = getSessionTimeRemaining()
      
      if (remaining <= 0) {
        router.push('/admin/login')
        return
      }

      const hours = Math.floor(remaining / (60 * 60 * 1000))
      const minutes = Math.floor((remaining % (60 * 60 * 1000)) / (60 * 1000))
      const seconds = Math.floor((remaining % (60 * 1000)) / 1000)

      setTimeRemaining(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`)
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)

    return () => clearInterval(interval)
  }, [router])

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      clearAuthSession();
      router.push('/admin/login');
    } catch (error) {
      console.error('로그아웃 중 오류 발생:', error);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg px-4 py-3">
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm text-gray-600">세션 남은 시간</p>
        <button
          onClick={handleLogout}
          className="text-sm text-red-600 hover:text-red-800 ml-4"
        >
          세션 종료
        </button>
      </div>
      <p className="text-lg font-semibold">{timeRemaining}</p>
    </div>
  )
}
