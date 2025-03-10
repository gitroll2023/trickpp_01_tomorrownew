'use client'

import Script from 'next/script'

export default function KakaoInitializer() {
  return (
    <>
      <Script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js"
        integrity="sha384-6MFdIr0zOira1CHQkedUqJVql0YtcZA1P0nbPrQYJXVJZUkTk/oX4U9GhUIs3/z8"
        crossOrigin="anonymous"
      />
      <Script id="kakao-init">
        {`
          if (typeof window !== 'undefined' && window.Kakao) {
            if (!window.Kakao.isInitialized()) {
              window.Kakao.init('${process.env.NEXT_PUBLIC_KAKAO_API_KEY || ''}');
            }
          }
        `}
      </Script>
    </>
  )
}
