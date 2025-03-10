'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { setAuthSession } from '@/utils/auth'
import Link from 'next/link'

export default function AdminLoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })

      if (!response.ok) {
        throw new Error('로그인에 실패했습니다')
      }

      setAuthSession()
      router.push('/admin')
    } catch (err) {
      setError('로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* 상단 배너 */}
      <div className="bg-blue-700 text-white py-1">
        <div className="container mx-auto px-4">
          <div className="flex justify-end space-x-4 text-sm">
            <span>청년들의 즐거운 내일을 만들어갑니다</span>
          </div>
        </div>
      </div>

      {/* 상단 헤더 */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="inline-flex items-center group">
            <div className="relative">
              <div className="text-2xl sm:text-3xl font-bold text-blue-700 group-hover:text-blue-800 transition-colors font-nanum tracking-tight">
                라온하제
                <span className="absolute -top-1.5 -right-2.5 w-2 h-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full group-hover:from-blue-600 group-hover:to-blue-700" />
              </div>
              <div className="text-xs sm:text-sm text-gray-500 group-hover:text-gray-600 transition-colors font-pretendard">
                새로운 내일을 만들다
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* 메인 컨텐츠 */}
      <div className="flex-1 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <div className="max-w-lg mx-auto">
            {/* 로그인 카드 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* 상단 배너 */}
              <div className="bg-blue-600 px-6 py-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-white text-center font-nanum">
                  관리자 로그인
                </h1>
                <p className="mt-2 text-blue-100 text-center text-sm sm:text-base font-pretendard">
                  라온하제 관리자 페이지입니다
                </p>
              </div>

              {/* 로그인 폼 */}
              <div className="p-6 sm:p-8">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-yellow-700">
                        관리자 전용 페이지입니다. 허가된자만 접근할 수 있습니다.
                      </p>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 font-pretendard">
                      아이디
                    </label>
                    <input
                      type="text"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors font-pretendard"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 font-pretendard">
                      비밀번호
                    </label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors font-pretendard"
                      required
                    />
                  </div>

                  {error && (
                    <div className="bg-red-50 border-l-4 border-red-400 p-4">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm text-red-700">{error}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors font-pretendard ${
                      isLoading ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        로그인 중...
                      </>
                    ) : (
                      '로그인'
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* 하단 정보 */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500 font-pretendard">
                <Link href="/" className="text-blue-600 hover:text-blue-500">메인 홈으로 돌아가기</Link>
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
