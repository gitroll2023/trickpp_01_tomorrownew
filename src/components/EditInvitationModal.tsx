'use client'

import { useState, useRef } from 'react'
import { Invitation } from '@/types/invitation'

interface EditInvitationModalProps {
  invitation: Invitation
  isOpen: boolean
  onClose: () => void
  onUpdate: (updatedInvitation: Invitation) => void
}

export default function EditInvitationModal({
  invitation,
  isOpen,
  onClose,
  onUpdate,
}: EditInvitationModalProps) {
  const [loading, setLoading] = useState(false)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [formData, setFormData] = useState({
    title: invitation.title,
    description: invitation.description || '',
    imageUrl: invitation.imageUrl,
    isActive: invitation.isActive,
  })

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Show preview
    const reader = new FileReader()
    reader.onloadend = () => {
      setImagePreview(reader.result as string)
    }
    reader.readAsDataURL(file)

    // Upload to ImgBB
    setLoading(true)
    try {
      const formData = new FormData()
      formData.append('image', file)

      const res = await fetch('/api/upload/imgbb', {
        method: 'POST',
        body: formData,
      })

      if (!res.ok) {
        throw new Error('이미지 업로드에 실패했습니다.')
      }

      const data = await res.json()
      setFormData((prev) => ({ ...prev, imageUrl: data.url }))
    } catch (error) {
      console.error('Failed to upload image:', error)
      alert('이미지 업로드에 실패했습니다.')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch(`/api/invitations/${invitation.uniqueCode}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        throw new Error('초대장 수정에 실패했습니다.')
      }

      const updatedInvitation = await res.json()
      onUpdate(updatedInvitation)
      onClose()
    } catch (error) {
      console.error('Failed to update invitation:', error)
      alert('초대장 수정에 실패했습니다.')
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">초대장 수정</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              제목
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, title: e.target.value }))
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              설명
            </label>
            <textarea
              value={formData.description}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, description: e.target.value }))
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              이미지
            </label>
            <div className="space-y-4">
              {/* 이미지 미리보기 */}
              {(imagePreview || formData.imageUrl) && (
                <div className="relative h-48 rounded overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imagePreview || formData.imageUrl}
                    alt="미리보기"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              )}
              {/* 이미지 업로드 버튼 */}
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  ref={fileInputRef}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200 transition-colors"
                >
                  이미지 {formData.imageUrl ? '변경' : '업로드'}
                </button>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={formData.isActive}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, isActive: e.target.checked }))
                }
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-gray-700">활성화</span>
            </label>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
              disabled={loading}
            >
              취소
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              disabled={loading}
            >
              {loading ? '수정 중...' : '수정하기'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
