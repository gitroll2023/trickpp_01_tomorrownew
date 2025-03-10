'use client'

import Link from 'next/link'
import MainHeader from '@/components/MainHeader'
import Footer from '@/components/Footer'

const sitemapData = [
  {
    title: '소개',
    links: [
      { name: '단체 소개', href: '/about' },
      { name: '공지사항', href: '/notice' },
      { name: '자주 묻는 질문', href: '/faq' },
    ]
  },
  {
    title: '프로그램',
    links: [
      { name: '프로그램 소개', href: '/programs' },
      { name: '프로그램 일정', href: '/programs/schedule' },
    ]
  }
]

export default function Sitemap() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainHeader />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">사이트맵</h1>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sitemapData.map((section, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">{section.title}</h2>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link 
                          href={link.href}
                          className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
