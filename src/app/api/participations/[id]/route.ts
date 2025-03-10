import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// 참가 신청 상태 업데이트
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const { status } = body

    if (!status) {
      return NextResponse.json(
        { error: '상태 정보가 누락되었습니다.' },
        { status: 400 }
      )
    }

    const participation = await prisma.participation.update({
      where: { id: params.id },
      data: { status },
    })

    return NextResponse.json(participation)
  } catch (error) {
    console.error('Failed to update participation:', error)
    return NextResponse.json(
      { error: '참가 신청 상태 업데이트 중 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
}

// 참가 신청 삭제
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.participation.delete({
      where: { id: params.id },
    })

    return new NextResponse(null, { status: 204 })
  } catch (error) {
    console.error('Failed to delete participation:', error)
    return NextResponse.json(
      { error: '참가 신청 삭제 중 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
}
