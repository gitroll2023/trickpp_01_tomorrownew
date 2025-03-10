import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json()

    // 환경 변수에서 관리자 정보 가져오기
    const validUsername = process.env.ADMIN_USERNAME
    const validPassword = process.env.ADMIN_PASSWORD

    if (!validUsername || !validPassword) {
      return NextResponse.json(
        { error: '관리자 계정이 설정되지 않았습니다.' },
        { status: 500 }
      )
    }

    if (username !== validUsername || password !== validPassword) {
      return NextResponse.json(
        { error: '아이디 또는 비밀번호가 일치하지 않습니다.' },
        { status: 401 }
      )
    }

    // 인증 성공 시 쿠키 설정
    const response = NextResponse.json({ 
      success: true,
      sessionDuration: 2 * 60 * 60 * 1000 // 2시간
    })
    response.cookies.set('admin-auth', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 2 * 60 * 60 // 2시간
    })
    
    return response
  } catch (error) {
    return NextResponse.json(
      { error: '로그인 처리 중 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
}
