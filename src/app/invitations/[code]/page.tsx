import { Invitation } from '@/types/invitation'
import InvitationClient from './client'
import prisma from '@/lib/prisma'

async function getInvitation(code: string) {
  if (!code) {
    throw new Error('초대장 코드가 없습니다.')
  }

  try {
    console.log('Fetching invitation with code:', code)
    
    const invitation = await prisma.invitation.findUnique({
      where: {
        uniqueCode: code,
      },
    })

    if (!invitation) {
      throw new Error('초대장을 찾을 수 없습니다.')
    }

    // Prisma의 Date 타입을 ISO string으로 변환
    const formattedInvitation: Invitation = {
      id: invitation.uniqueCode,
      uniqueCode: invitation.uniqueCode,
      title: invitation.title,
      description: invitation.description || undefined,
      imageUrl: invitation.imageUrl,
      isActive: invitation.isActive,
      createdAt: invitation.createdAt.toISOString(),
      expiresAt: invitation.expiresAt?.toISOString() || null,
      downloadCount: invitation.downloads
    }

    console.log('Formatted invitation data:', formattedInvitation)
    return formattedInvitation
  } catch (err) {
    console.error('Error fetching invitation:', err)
    throw err
  }
}

export default async function InvitationPage({
  params,
}: {
  params: { code: string }
}) {
  console.log('Received params:', params)
  if (!params?.code) {
    return <InvitationClient invitation={null} error="잘못된 초대장 코드입니다." />
  }

  const { code } = params
  let invitation: Invitation | null = null
  let error: string | null = null

  try {
    invitation = await getInvitation(code)
  } catch (err) {
    console.error('Error in InvitationPage:', err)
    error = '초대장을 불러오는데 실패했습니다.'
  }

  return <InvitationClient invitation={invitation} error={error} />
}
