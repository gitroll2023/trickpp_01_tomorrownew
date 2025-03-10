import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { nanoid } from 'nanoid'

// 수신자 추가
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ code: string }> }
) {
  try {
    const { name } = await request.json()
    const { code } = await params

    // 초대장 찾기
    const invitation = await prisma.invitation.findUnique({
      where: { uniqueCode: code },
    })

    if (!invitation) {
      return NextResponse.json(
        { error: '초대장을 찾을 수 없습니다.' },
        { status: 404 }
      )
    }

    // 수신자 생성
    const recipient = await prisma.recipient.create({
      data: {
        name,
        uniqueCode: nanoid(8),
        invitationId: invitation.id,
      },
      include: {
        invitation: true,
      },
    })

    return NextResponse.json({ success: true, recipient })
  } catch (error) {
    return NextResponse.json(
      { error: '수신자 추가 중 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
}

// 수신자 삭제
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ code: string }> }
) {
  try {
    const { code } = await params
    const { recipientId } = await request.json()

    console.log('Deleting recipient:', { code, recipientId })

    // 초대장 찾기
    const invitation = await prisma.invitation.findUnique({
      where: { uniqueCode: code },
    })

    if (!invitation) {
      console.log('Invitation not found:', code)
      return NextResponse.json(
        { error: '초대장을 찾을 수 없습니다.' },
        { status: 404 }
      )
    }

    console.log('Found invitation:', invitation)

    const recipient = await prisma.recipient.delete({
      where: { id: recipientId },
      include: {
        invitation: true,
      },
    })

    console.log('Deleted recipient:', recipient)
    return NextResponse.json({ success: true, recipient })
  } catch (error) {
    console.error('Error deleting recipient:', error)
    return NextResponse.json(
      { error: '수신자 삭제 중 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
}
