export interface Recipient {
  id: string
  name: string
  uniqueCode: string
  viewCount: number
  isActive: boolean
  createdAt: string
  invitationId: string
}

export interface Invitation {
  id: string
  uniqueCode: string
  title: string
  description?: string
  imageUrl: string
  isActive: boolean
  createdAt: string // ISO string format
  expiresAt: string | null
  downloadCount: number
  recipients?: Recipient[]
}
