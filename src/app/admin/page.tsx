'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Invitation, Recipient } from '@/types/invitation'
import CreateInvitationModal from '@/components/CreateInvitationModal'
import EditInvitationModal from '@/components/EditInvitationModal'

export default function AdminPage() {
  const [invitations, setInvitations] = useState<Invitation[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showAddRecipient, setShowAddRecipient] = useState<string | null>(null)
  const [newRecipientName, setNewRecipientName] = useState('')
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [selectedInvitation, setSelectedInvitation] = useState<Invitation | null>(null)
  const router = useRouter()

  useEffect(() => {
    fetchInvitations()
  }, [])

  const fetchInvitations = async () => {
    try {
      const res = await fetch('/api/invitations')
      if (!res.ok) {
        throw new Error('초대장 목록을 불러오는데 실패했습니다.')
      }
      const data = await res.json()
      setInvitations(data)
    } catch (err) {
      console.error('Failed to fetch invitations:', err)
      setError('초대장 목록을 불러오는데 실패했습니다.')
    } finally {
      setLoading(false)
    }
  }

  const handleCopyLink = (uniqueCode: string) => {
    if (!uniqueCode) {
      alert('유효하지 않은 초대장 코드입니다.')
      return
    }
    const url = `${window.location.origin}/invitations/${uniqueCode}`
    navigator.clipboard.writeText(url)
    alert('초대장 링크가 복사되었습니다!')
  }

  const handleDelete = async (code: string) => {
    if (!confirm('정말로 이 초대장을 삭제하시겠습니까?')) {
      return
    }

    try {
      const res = await fetch(`/api/invitations/${code}`, {
        method: 'DELETE',
      })

      if (!res.ok) {
        throw new Error('초대장 삭제에 실패했습니다.')
      }

      fetchInvitations()
    } catch (err) {
      console.error('Failed to delete invitation:', err)
      alert('초대장 삭제에 실패했습니다.')
    }
  }

  const handleAddRecipient = async (invitationId: string) => {
    if (!newRecipientName.trim()) {
      alert('수신자 이름을 입력해주세요.')
      return
    }

    try {
      const res = await fetch(`/api/invitations/${invitationId}/recipients`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: newRecipientName.trim(),
        }),
      })

      if (!res.ok) {
        throw new Error('수신자 추가에 실패했습니다.')
      }

      setNewRecipientName('')
      setShowAddRecipient(null)
      fetchInvitations()
    } catch (err) {
      console.error('Failed to add recipient:', err)
      alert('수신자 추가에 실패했습니다.')
    }
  }

  const handleDeleteRecipient = async (invitationCode: string, recipientId: string) => {
    if (!confirm('정말로 이 수신자를 삭제하시겠습니까?')) {
      return
    }

    try {
      console.log('Deleting recipient:', { invitationCode, recipientId })
      
      const res = await fetch(`/api/invitations/${invitationCode}/recipients`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ recipientId }),
      })

      const data = await res.json()
      
      if (!res.ok) {
        throw new Error(data.error || '수신자 삭제에 실패했습니다.')
      }

      console.log('Delete response:', data)
      fetchInvitations()
    } catch (error) {
      console.error('Error in handleDeleteRecipient:', error)
      alert(error instanceof Error ? error.message : '수신자 삭제 중 오류가 발생했습니다.')
    }
  }

  const handleEdit = (invitation: Invitation) => {
    setSelectedInvitation(invitation)
    setShowEditModal(true)
  }

  const handleUpdate = (updatedInvitation: Invitation) => {
    setInvitations((prev) =>
      prev.map((inv) =>
        inv.id === updatedInvitation.id ? updatedInvitation : inv
      )
    )
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">로딩 중...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">초대장 목록</h2>
        <button
          onClick={() => setShowCreateModal(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          새 초대장 만들기
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {invitations.map((invitation) => (
          <div
            key={invitation.uniqueCode}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            {invitation.imageUrl && (
              <div className="relative h-48 bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={invitation.imageUrl}
                  alt={invitation.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            )}
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{invitation.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {invitation.description}
              </p>

              {/* 초대장 기본 링크 */}
              <div className="mb-4 p-3 bg-gray-50 rounded">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">기본 초대장 링크</span>
                  <button
                    onClick={() => {
                      const link = `${window.location.origin}/invitations/${invitation.uniqueCode}`
                      navigator.clipboard.writeText(link)
                      alert('링크가 복사되었습니다.')
                    }}
                    className="text-sm text-blue-500 hover:text-blue-600"
                  >
                    링크 복사
                  </button>
                </div>
                <div className="mt-2 text-sm text-gray-500 break-all">
                  {`${window.location.origin}/invitations/${invitation.uniqueCode}`}
                </div>
              </div>

              {/* 수신자 목록 */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold">수신자 목록</h4>
                  <button
                    onClick={() => setShowAddRecipient(invitation.uniqueCode)}
                    className="text-sm text-blue-500 hover:text-blue-600"
                  >
                    + 수신자 추가
                  </button>
                </div>
                
                {/* 수신자 추가 폼 */}
                {showAddRecipient === invitation.uniqueCode && (
                  <div className="mb-2 flex gap-2">
                    <input
                      type="text"
                      value={newRecipientName}
                      onChange={(e) => setNewRecipientName(e.target.value)}
                      placeholder="수신자 이름"
                      className="flex-1 px-2 py-1 border rounded"
                    />
                    <button
                      onClick={() => handleAddRecipient(invitation.uniqueCode)}
                      className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      추가
                    </button>
                  </div>
                )}

                {/* 수신자 리스트 */}
                <div className="space-y-2">
                  {invitation.recipients?.map((recipient) => (
                    <div
                      key={recipient.uniqueCode}
                      className="flex items-center justify-between bg-gray-50 p-2 rounded"
                    >
                      <span>{recipient.name}</span>
                      <div className="flex gap-2">
                        <Link
                          href={`/invitations/${invitation.uniqueCode}/${recipient.uniqueCode}`}
                          target="_blank"
                          className="text-sm text-blue-500 hover:text-blue-600"
                        >
                          링크 보기
                        </Link>
                        <button
                          onClick={() => {
                            const link = `${window.location.origin}/invitations/${invitation.uniqueCode}/${recipient.uniqueCode}`
                            navigator.clipboard.writeText(link)
                            alert('링크가 복사되었습니다.')
                          }}
                          className="text-sm text-blue-500 hover:text-blue-600"
                        >
                          링크 복사
                        </button>
                        <button
                          onClick={() => handleDeleteRecipient(invitation.uniqueCode, recipient.id)}
                          className="text-sm text-red-500 hover:text-red-600"
                        >
                          삭제
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                <div className="space-x-2">
                  <button
                    onClick={() => handleEdit(invitation)}
                    className="text-blue-500 hover:text-blue-600"
                  >
                    수정
                  </button>
                  <button
                    onClick={() => handleDelete(invitation.uniqueCode)}
                    className="text-red-500 hover:text-red-600"
                  >
                    초대장 삭제
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {invitations.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-600">아직 생성된 초대장이 없습니다.</p>
        </div>
      )}

      <CreateInvitationModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onSuccess={() => {
          fetchInvitations()
          setShowCreateModal(false)
        }}
      />
      {showEditModal && selectedInvitation && (
        <EditInvitationModal
          isOpen={showEditModal}
          invitation={selectedInvitation}
          onClose={() => {
            setShowEditModal(false)
            setSelectedInvitation(null)
          }}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  )
}
