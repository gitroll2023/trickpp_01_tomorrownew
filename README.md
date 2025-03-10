# 라온하제 초대장 웹사이트

라온하제의 초대장 관리 및 발송을 위한 웹 애플리케이션입니다.

## 주요 기능

- 초대장 생성 및 관리
- 수신자별 고유 초대장 링크 생성
- 초대장 다운로드
- 관리자 대시보드
- 모바일 반응형 디자인

## 기술 스택

- **Frontend**: Next.js 14, React, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Hosting**: Vercel
- **Style**: Tailwind CSS, Framer Motion

## 개발 환경 설정

1. 저장소 클론
```bash
git clone [repository-url]
cd web
```

2. 의존성 설치
```bash
npm install
```

3. 환경 변수 설정
```bash
cp .env.example .env.local
```
`.env.local` 파일을 열고 필요한 환경 변수를 설정합니다:
```
DATABASE_URL=your_database_url
NEXTAUTH_SECRET=your_nextauth_secret
```

4. 개발 서버 실행
```bash
npm run dev
```
[http://localhost:3000](http://localhost:3000)에서 웹사이트를 확인할 수 있습니다.

## 배포

이 프로젝트는 Vercel에 배포됩니다. main 브랜치에 push하면 자동으로 배포가 진행됩니다.

1. GitHub 저장소에 push
```bash
git add .
git commit -m "your commit message"
git push origin main
```

2. Vercel에서 프로젝트 import
- [Vercel 대시보드](https://vercel.com/new)에서 GitHub 저장소를 import
- 환경 변수 설정
- 배포 확인

## 라이선스

이 프로젝트는 라온하제의 소유입니다.
