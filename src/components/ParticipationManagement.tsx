'use client'

import { useState, useEffect } from 'react'
import { format } from 'date-fns'

interface Participation {
  id: string
  name: string
  phone: string
  participants: number
  time: string
  message?: string
  status: string
  eventDate: string
  createdAt: string
  isActive: boolean
}

export default function ParticipationManagement() {
  const [participations, setParticipations] = useState<Participation[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchParticipations()
  }, [])

  const fetchParticipations = async () => {
    try {
      const res = await fetch('/api/participations')
      if (!res.ok) throw new Error('Failed to fetch participations')
      const data = await res.json()
      setParticipations(data)
    } catch (error) {
      console.error('Error fetching participations:', error)
    } finally {
      setLoading(false)
    }
  }

  const updateStatus = async (id: string, status: string) => {
    try {
      const res = await fetch(`/api/participations/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      })
      if (!res.ok) throw new Error('Failed to update status')
      fetchParticipations()
    } catch (error) {
      console.error('Error updating status:', error)
    }
  }

  const deleteParticipation = async (id: string) => {
    if (!confirm('정말 이 참가 신청을 삭제하시겠습니까?')) return

    try {
      const res = await fetch(`/api/participations/${id}`, {
        method: 'DELETE',
      })
      if (!res.ok) throw new Error('Failed to delete participation')
      fetchParticipations()
    } catch (error) {
      console.error('Error deleting participation:', error)
    }
  }

  if (loading) return <div className="text-center py-8">로딩 중...</div>

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">참가 신청 관리</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">신청일</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">참가 예정일</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">이름</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">연락처</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">인원</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">선호시간</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">상태</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">관리</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {participations.map((participation) => (
              <tr key={participation.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {format(new Date(participation.createdAt), 'yyyy-MM-dd HH:mm')}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {format(new Date(participation.eventDate), 'yyyy-MM-dd')}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {participation.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {participation.phone}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {participation.participants}명
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {participation.time}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <select
                    value={participation.status}
                    onChange={(e) => updateStatus(participation.id, e.target.value)}
                    className="text-sm border rounded px-2 py-1"
                  >
                    <option value="pending">대기중</option>
                    <option value="confirmed">확정</option>
                    <option value="cancelled">취소</option>
                  </select>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button
                    onClick={() => deleteParticipation(participation.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    삭제
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
