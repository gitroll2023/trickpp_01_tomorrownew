import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { PrismaClient } from '@prisma/client'
import { v4 as uuidv4 } from 'uuid'

const prisma = new PrismaClient()

// 임시로 메모리에 초대장 저장 (실제로는 데이터베이스를 사용해야 함)
let invitations: any[] = []

// 초대장 목록 조회
export async function GET() {
  try {
    // 관리자 인증 확인
    const cookieStore = await cookies()
    const adminCookie = cookieStore.get('admin-auth')
    const isAdmin = adminCookie?.value === 'true'

    if (!isAdmin) {
      return NextResponse.json({ error: '권한이 없습니다.' }, { status: 401 })
    }

    const invitations = await prisma.invitation.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        recipients: true,
      },
    })
    return NextResponse.json(invitations)
  } catch (error) {
    console.error('Failed to fetch invitations:', error)
    return NextResponse.json(
      { error: '초대장 목록을 불러오는데 실패했습니다.' },
      { status: 500 }
    )
  }
}

// 초대장 생성
export async function POST(request: Request) {
  try {
    // 관리자 인증 확인
    const cookieStore = await cookies()
    const adminCookie = cookieStore.get('admin-auth')
    const isAdmin = adminCookie?.value === 'true'

    if (!isAdmin) {
      return NextResponse.json({ error: '권한이 없습니다.' }, { status: 401 })
    }

    const data = await request.json()
    console.log('Creating invitation with data:', data)

    // 고유한 코드 생성 (8자리)
    const uniqueCode = Math.random().toString(36).substring(2, 10)

    const invitation = await prisma.invitation.create({
      data: {
        uniqueCode,
        title: data.title,
        description: data.description,
        imageUrl: data.imageUrl,
        isActive: true,
        createdAt: new Date(),
        expiresAt: data.expiresAt ? new Date(data.expiresAt) : null,
      },
    })

    console.log('Created invitation:', invitation)
    return NextResponse.json(invitation)
  } catch (error) {
    console.error('Failed to create invitation:', error)
    return NextResponse.json(
      { error: '초대장 생성에 실패했습니다.' },
      { status: 500 }
    )
  }
}

// 초대장 삭제
export async function DELETE(request: Request) {
  // 관리자 인증 확인
  const cookieStore = await cookies()
  const adminCookie = cookieStore.get('admin-auth')
  const isAdmin = adminCookie?.value === 'true'
  if (!isAdmin) {
    return NextResponse.json({ error: '권한이 없습니다.' }, { status: 401 })
  }

  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json(
        { error: '초대장 ID가 필요합니다.' },
        { status: 400 }
      )
    }

    const index = invitations.findIndex((inv) => inv.id === id)
    if (index === -1) {
      return NextResponse.json(
        { error: '초대장을 찾을 수 없습니다.' },
        { status: 404 }
      )
    }

    invitations.splice(index, 1)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('초대장 삭제 중 오류:', error)
    return NextResponse.json(
      { error: '초대장 삭제에 실패했습니다.' },
      { status: 500 }
    )
  }
}
