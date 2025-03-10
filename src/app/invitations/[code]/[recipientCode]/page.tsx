import { Invitation, Recipient } from '@/types/invitation'
import prisma from '@/lib/prisma'
import InvitationClient from '../client'
import { Metadata, ResolvingMetadata } from 'next'

async function getInvitationAndRecipient(code: string, recipientCode: string) {
  if (!code || !recipientCode) {
    throw new Error('초대장 코드가 없습니다.')
  }

  try {
    const invitation = await prisma.invitation.findUnique({
      where: {
        uniqueCode: code,
      },
      include: {
        recipients: {
          where: {
            uniqueCode: recipientCode
          }
        }
      }
    })

    if (!invitation) {
      throw new Error('초대장을 찾을 수 없습니다.')
    }

    if (!invitation.recipients || invitation.recipients.length === 0) {
      throw new Error('수신자를 찾을 수 없습니다.')
    }

    const recipient = invitation.recipients[0]

    // Format dates for serialization
    const formattedInvitation: Invitation = {
      id: invitation.id,
      uniqueCode: invitation.uniqueCode,
      title: invitation.title,
      description: invitation.description || undefined,
      imageUrl: invitation.imageUrl,
      isActive: invitation.isActive,
      createdAt: invitation.createdAt.toISOString(),
      expiresAt: invitation.expiresAt?.toISOString() || null,
      downloadCount: invitation.downloads, // downloads 필드를 downloadCount로 매핑
      recipients: [{
        id: recipient.id,
        name: recipient.name,
        uniqueCode: recipient.uniqueCode,
        isActive: recipient.isActive,
        viewCount: recipient.viewCount,
        invitationId: recipient.invitationId,
        createdAt: recipient.createdAt.toISOString(),
      }],
    }

    return { invitation: formattedInvitation, error: null }
  } catch (error) {
    console.error('Error fetching invitation:', error)
    return { invitation: null, error: error instanceof Error ? error.message : '초대장을 불러오는 중 오류가 발생했습니다.' }
  }
}

type Props = {
  params: { code: string; recipientCode: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const invitation = await prisma.invitation.findUnique({
    where: { uniqueCode: params.code },
  })
  
  if (!invitation) {
    return {
      title: '라온하제 초대장',
      description: '라온하제가 전하는 특별한 초대장입니다.',
    }
  }
  
  return {
    title: invitation.title || '라온하제 초대장',
    description: invitation.description || '라온하제가 전하는 특별한 초대장입니다.',
    openGraph: {
      title: invitation.title || '라온하제 초대장',
      description: invitation.description || '라온하제가 전하는 특별한 초대장입니다.',
      images: ['/og-image.jpg'],
      type: 'website',
      locale: 'ko_KR',
    },
  }
}

export default async function RecipientInvitationPage({
  params,
}: {
  params: { code: string; recipientCode: string }
}) {
  const { invitation, error } = await getInvitationAndRecipient(
    params.code,
    params.recipientCode
  )

  return (
    <div className="pt-12">
      <InvitationClient 
        invitation={invitation} 
        error={error} 
        recipientName={invitation?.recipients?.[0]?.name}
      />
    </div>
  )
}
