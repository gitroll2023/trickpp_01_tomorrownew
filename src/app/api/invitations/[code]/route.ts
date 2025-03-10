import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { cookies } from 'next/headers'

export async function GET(
  request: NextRequest,
  { params }: { params: { code: string } }
) {
  try {
    const { code } = params

    const invitation = await prisma.invitation.findUnique({
      where: { uniqueCode: code },
      include: {
        recipients: {
          select: {
            id: true,
            name: true,
            uniqueCode: true,
            viewCount: true,
            isActive: true,
            createdAt: true,
          },
        },
      },
    })

    if (!invitation) {
      return NextResponse.json(
        { error: '초대장을 찾을 수 없습니다.' },
        { status: 404 }
      )
    }

    // 다운로드 수 증가
    await prisma.invitation.update({
      where: {
        id: invitation.id,
      },
      data: {
        downloads: {
          increment: 1,
        },
      },
    })

    return NextResponse.json(invitation)
  } catch (error) {
    console.error('Error fetching invitation:', error)
    return NextResponse.json(
      { error: '초대장을 불러오는데 실패했습니다.' },
      { status: 500 }
    )
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { code: string } }
) {
  // 관리자 인증 확인
  const cookieStore = await cookies()
  const adminCookie = cookieStore.get('admin-auth')
  const isAdmin = adminCookie?.value === 'true'

  if (!isAdmin) {
    return NextResponse.json({ error: '권한이 없습니다.' }, { status: 401 })
  }

  const { code } = params
  const invitation = await prisma.invitation.findUnique({
    where: {
      uniqueCode: code,
    },
  })
  if (!invitation) {
    return NextResponse.json(
      { error: '초대장을 찾을 수 없습니다.' },
      { status: 404 }
    )
  }

  try {
    const data = await request.json()
    const updatedInvitation = await prisma.invitation.update({
      where: {
        uniqueCode: code,
      },
      data: {
        title: data.title,
        description: data.description,
        imageUrl: data.imageUrl,
        expiresAt: data.expiresAt ? new Date(data.expiresAt) : null,
        isActive: data.isActive,
      },
    })
    return NextResponse.json(updatedInvitation)
  } catch (error) {
    console.error('초대장 수정 중 오류:', error)
    return NextResponse.json(
      { error: '초대장 수정에 실패했습니다.' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { code: string } }
) {
  // 관리자 인증 확인
  const cookieStore = await cookies()
  const adminCookie = cookieStore.get('admin-auth')
  const isAdmin = adminCookie?.value === 'true'

  if (!isAdmin) {
    return NextResponse.json({ error: '권한이 없습니다.' }, { status: 401 })
  }

  const { code } = params

  try {
    // 먼저 관련된 수신자들을 삭제
    const invitation = await prisma.invitation.findUnique({
      where: { uniqueCode: code },
    })

    if (!invitation) {
      return NextResponse.json(
        { error: '초대장을 찾을 수 없습니다.' },
        { status: 404 }
      )
    }

    // 수신자 삭제
    await prisma.recipient.deleteMany({
      where: { invitationId: invitation.id },
    })

    // 초대장 삭제
    const deletedInvitation = await prisma.invitation.delete({
      where: { uniqueCode: code },
    })

    return NextResponse.json(deletedInvitation)
  } catch (error) {
    console.error('Error deleting invitation:', error)
    return NextResponse.json(
      { error: '초대장 삭제에 실패했습니다.' },
      { status: 500 }
    )
  }
}
