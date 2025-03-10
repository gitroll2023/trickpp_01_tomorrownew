import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// 참가 신청 목록 조회
export async function GET() {
  try {
    const participations = await prisma.participation.findMany({
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json(participations)
  } catch (error) {
    console.error('Failed to fetch participations:', error)
    return NextResponse.json(
      { error: '참가 신청 목록 조회 중 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
}

// 새로운 참가 신청 생성
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, phone, participants, time, message } = body

    // 필수 필드 검증
    if (!name || !phone || !participants || !time) {
      return NextResponse.json(
        { error: '필수 정보가 누락되었습니다.' },
        { status: 400 }
      )
    }

    // 다음 토요일 날짜 계산
    const now = new Date()
    const saturday = new Date(now)
    while (saturday.getDay() !== 6) {
      saturday.setDate(saturday.getDate() + 1)
    }
    saturday.setHours(0, 0, 0, 0) // 시간을 00:00:00으로 설정

    // 참가 신청 생성
    const newParticipation = await prisma.participation.create({
      data: {
        name,
        phone,
        participants: parseInt(participants),
        time,
        message: message || '',
        eventDate: saturday,
      },
    })

    return NextResponse.json(newParticipation)
  } catch (error) {
    console.error('Failed to create participation:', error)
    return NextResponse.json(
      { error: '참가 신청 중 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
}
