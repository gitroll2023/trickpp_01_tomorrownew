import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // 나주시 빛가람동 코드와 좌표 사용
    const response = await fetch('https://www.kma.go.kr/wid/queryDFSRSS.jsp?zone=4617062000');
    const xmlText = await response.text();
    
    // XML 파싱을 위한 간단한 정규식
    const tempMatch = xmlText.match(/<temp>([^<]+)<\/temp>/);
    const weatherMatch = xmlText.match(/<wfKor>([^<]+)<\/wfKor>/);
    
    const temp = tempMatch ? parseFloat(tempMatch[1]) : null;
    const description = weatherMatch ? weatherMatch[1] : '알 수 없음';

    if (!temp) {
      throw new Error('날씨 정보를 찾을 수 없습니다');
    }

    return NextResponse.json({ 
      temp, 
      description,
      location: '나주시 빛가람동'  // 위치 정보 추가
    });
  } catch (error) {
    console.error('날씨 정보 조회 오류:', error);
    return NextResponse.json(
      { error: '날씨 정보를 가져오는데 실패했습니다' },
      { status: 500 }
    );
  }
}
