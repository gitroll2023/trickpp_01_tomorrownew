'use client'

import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { isSessionValid } from '@/utils/auth'

const menuItems = [
  { href: '/', label: '홈' },
  { href: '/programs', label: '프로그램' },
  { href: '/notice', label: '공지사항' },
  { href: '/about', label: '소개' },
  { href: '/contact', label: '문의하기' }
]

export default function MainHeader() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    setIsLoggedIn(isSessionValid())
  }, [])

  return (
    <header>
      {/* 최상단 배너 */}
      <div className="bg-blue-700 text-white py-1">
        <div className="container mx-auto px-4">
          <div className="flex justify-end space-x-4 text-sm">
            <span>청년들의 즐거운 내일을 만들어갑니다</span>
          </div>
        </div>
      </div>

      {/* 상단 유틸리티 메뉴 */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex space-x-6 text-sm text-gray-600">
              <Link href="/notice" className="hover:text-blue-600">공지사항</Link>
              <Link href="/faq" className="hover:text-blue-600">자주 묻는 질문</Link>
              <Link href="/sitemap" className="hover:text-blue-600">사이트맵</Link>
            </div>
            <div className="flex space-x-6 text-sm text-gray-600">
              <Link href={isLoggedIn ? "/admin" : "/admin/login"} className="hover:text-blue-600">
                관리자{isLoggedIn ? "(로그인됨)" : ""}
              </Link>
            
            </div>
          </div>
        </div>
      </div>

      {/* 메인 헤더 */}
      <div className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* 로고 */}
            <Link href="/" className="group flex items-center space-x-2">
              <div className="relative">
                <div className="text-2xl sm:text-3xl font-bold text-blue-700 group-hover:text-blue-800 transition-colors font-nanum tracking-tight">
                  내일뉴
                  <span className="absolute -top-1.5 -right-2.5 w-2 h-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full group-hover:from-blue-600 group-hover:to-blue-700 transition-all" />
                </div>
                <div className="text-xs sm:text-sm text-gray-500 group-hover:text-gray-600 transition-colors font-pretendard">
                  새로운 내일을 만들다
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* 메인 네비게이션 */}
        <div className="border-t">
          <div className="container mx-auto px-4">
            <nav className="flex overflow-x-auto whitespace-nowrap hide-scrollbar">
              {menuItems.map((menuItem, index) => (
                <Link 
                  key={index} 
                  href={menuItem.href} 
                  className="px-4 py-4 text-gray-700 hover:text-blue-600 hover:bg-gray-50 font-medium flex-shrink-0"
                >
                  {menuItem.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
