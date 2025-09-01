'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import MainHeader from '@/components/MainHeader';
import Footer from '@/components/Footer';
import InvitationPreviewModal from '@/components/InvitationPreviewModal';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    participants: '',
    time: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [nextSaturday, setNextSaturday] = useState('');
  const [isApplicationPeriod, setIsApplicationPeriod] = useState(false);
  const [applicationDeadline, setApplicationDeadline] = useState('');
  const [showInvitationModal, setShowInvitationModal] = useState(false);

  useEffect(() => {
    const updateDates = () => {
      const now = new Date();
      const koreanTime = new Date(now.getTime() + (9 * 60 * 60 * 1000)); // UTC+9
      
      // 이번주 토요일 찾기
      const saturday = new Date(koreanTime);
      while (saturday.getDay() !== 6) {
        saturday.setDate(saturday.getDate() + 1);
      }
      
      // 이번주 금요일 23:59 찾기
      const friday = new Date(saturday);
      friday.setDate(friday.getDate() - 1);
      friday.setHours(23, 59, 59);

      // 다음주 월요일 00:00 찾기
      const nextMonday = new Date(saturday);
      nextMonday.setDate(nextMonday.getDate() + 2);
      nextMonday.setHours(0, 0, 0);

      // 신청 가능 기간인지 확인
      const isAvailable = koreanTime < friday || koreanTime >= nextMonday;

      setNextSaturday(saturday.toLocaleDateString('ko-KR', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        weekday: 'long' 
      }));
      setApplicationDeadline(friday.toLocaleDateString('ko-KR', { 
        month: 'long', 
        day: 'numeric',
        weekday: 'long',
        hour: '2-digit',
        minute: '2-digit'
      }));
      setIsApplicationPeriod(isAvailable);
    };

    updateDates();
    const interval = setInterval(updateDates, 60000); // 1분마다 업데이트

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const res = await fetch('/api/participations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('참가 신청에 실패했습니다.');
      }

      setSubmitted(true);
    } catch (error) {
      console.error('Failed to submit participation:', error);
      alert('참가 신청 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (!isApplicationPeriod) {
    return (
      <div className="min-h-screen flex flex-col">
        <MainHeader />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
            <h1 className="text-2xl font-bold text-center text-red-600 mb-4">
              현재는 신청 기간이 아닙니다
            </h1>
            <p className="text-center text-gray-600">
              소모임 신청은 월요일 00시부터 금요일 밤 11시 59분까지 가능합니다.<br />
              다음 신청 시작일까지 기다려주세요.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <MainHeader />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold text-center mb-8">이번 주 소모임 참가신청</h1>
          
          <div className="mb-6 text-center">
            <p className="text-lg font-semibold text-blue-600">{nextSaturday} 일정</p>
            <p className="text-sm text-gray-600 mt-2">
              신청 마감: {applicationDeadline}까지
            </p>
          </div>

          <div className="mb-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-2">필수 안내사항</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• 참가자는 <span className="text-blue-600 font-medium">반드시 실명으로 신청</span>해 주시기 바랍니다.</li>
              <li>• 이번주 소모임 주제에 대해서는 별도의 카카오톡으로 공지해드립니다.</li>
              <li>• 최종 참여의사는 카카오톡에서 확인하며, 참가비가 있을 경우 별도 공지해드립니다.</li>
              <li>
                • 참가가 확정된 분들께는 <span className="text-blue-600 font-medium">개별 초대장이 발송</span>됩니다.
                <button
                  onClick={() => setShowInvitationModal(true)}
                  className="ml-2 text-sm text-blue-500 hover:text-blue-700 underline"
                >
                  초대장 예시 보기
                </button>
              </li>
              <li>• 현장 방문 시 발송된 초대장을 반드시 제시해 주셔야 합니다.</li>
              <li className="text-red-600 font-medium">• 청소년(만 19세 미만)은 반드시 보호자와 동반 참여를 부탁드립니다.</li>
            </ul>
          </div>

          {/* 초대장 모달 */}
          <InvitationPreviewModal
            isOpen={showInvitationModal}
            onClose={() => setShowInvitationModal(false)}
          />

          {submitted ? (
            <div className="text-center py-8">
              <h2 className="text-2xl font-semibold text-green-600 mb-4">사전 신청이 완료되었습니다!</h2>
              <div className="text-gray-600 space-y-2">
                <p>카카오톡으로 최종 참여 의사를 확인하실 수 있습니다.</p>
                <p>소모임 주제와 참가비 관련 사항도 카카오톡으로 안내드리겠습니다.</p>
                <p>최종 확인 후 초대장이 발송되며, 현장 입장 시 필요하니 잘 보관해 주세요.</p>
                <p className="pt-4">내일뉴와 함께해 주셔서 감사합니다.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  이름 *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="실명을 입력해 주세요"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={formData.name}
                  onChange={handleChange}
                />
                <p className="mt-1 text-sm text-gray-500">
                  ※ 초대장에 표시될 이름이므로 실명으로 작성해 주세요
                </p>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  연락처 *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="participants" className="block text-sm font-medium text-gray-700 mb-1">
                  참여 인원 수 *
                </label>
                <select
                  id="participants"
                  name="participants"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={formData.participants}
                  onChange={handleChange}
                >
                  <option value="">인원을 선택해주세요</option>
                  <option value="1">1명</option>
                  <option value="2">2명</option>
                  <option value="3">3명</option>
                  <option value="4">4명</option>
                  <option value="5">5명</option>
                </select>
                <p className="mt-1 text-sm text-gray-500">
                  ※ 청소년 참여 시 보호자 인원도 포함해주세요
                </p>
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                  희망 시간 *
                </label>
                <select
                  id="time"
                  name="time"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={formData.time}
                  onChange={handleChange}
                >
                  <option value="">시간을 선택해주세요</option>
                  <option value="14:00">오후 2시쯤</option>
                  <option value="17:00">오후 5시쯤</option>
                  <option value="19:00">오후 7시쯤</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  기타 문의사항
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  신청하기
                </button>
              </div>
            </form>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
