'use client'

import { useEffect, useState } from 'react'

interface WeatherData {
  temp: number;
  description: string;
  location: string;
}

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async () => {
    try {
      setLoading(true);
      setError(null);

      // 내부 API 호출
      const response = await fetch('/api/weather');
      
      if (!response.ok) {
        throw new Error('날씨 정보를 가져오는데 실패했습니다');
      }

      const data = await response.json();
      console.log('날씨 데이터:', data);

      if (data.error) {
        throw new Error(data.error);
      }

      setWeather({
        temp: Math.round(data.temp),
        description: data.description,
        location: data.location
      });
    } catch (error) {
      console.error('날씨 정보 조회 오류:', error);
      setError(error instanceof Error ? error.message : '날씨 정보를 가져오는데 실패했습니다');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
    const interval = setInterval(fetchWeather, 30 * 60 * 1000); // 30분마다 업데이트
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center space-x-2 text-sm text-gray-600">
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        <span>날씨 정보 로딩중...</span>
      </div>
    );
  }

  if (error) {
    console.log('날씨 위젯 에러:', error);
    return (
      <div className="flex items-center space-x-2 text-sm text-gray-600">
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <span>날씨 정보를 불러올 수 없습니다</span>
      </div>
    );
  }

  if (!weather) {
    return null;
  }

  return (
    <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
      <span>{weather.location} {weather.temp}°C</span>
      <span className="hidden sm:inline text-gray-400">({weather.description})</span>
    </div>
  );
}
