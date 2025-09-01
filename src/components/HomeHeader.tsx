'use client'

import Link from 'next/link'

export default function HomeHeader() {
  return (
    <header className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            <Link href="/" className="hover:text-gray-600">
              내일뉴 초대장
            </Link>
          </h1>
          <Link
            href="/admin"
            className="text-gray-600 hover:text-gray-900 font-medium"
          >
            관리자
          </Link>
        </div>
      </div>
    </header>
  )
}
