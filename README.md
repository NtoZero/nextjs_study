# Next.js 학습 프로젝트

이 프로젝트는 Next.js를 체계적으로 학습하기 위한 단계별 학습 프로젝트입니다. "한입 크기로 잘라 먹는 Next.js" 강의를 기반으로 구성되었습니다.

## 🎯 프로젝트 개요

이 레포지토리는 Next.js의 핵심 개념들을 단계별로 학습할 수 있도록 구성된 멀티 프로젝트 구조입니다. 각 섹션(s2~s9)은 독립적인 Next.js 애플리케이션으로, 특정 주제에 집중하여 학습할 수 있습니다.

### 📂 프로젝트 구조

```
nextjs_study/
├── s2/                 # Pages Router 기반 기본 구조
├── s3/                 # App Router 기본 구조  
├── s4/                 # 라우팅 및 데이터 페칭
├── s5/                 # 고급 라우팅 기법
├── s6/                 # 유틸리티 및 헬퍼 함수
├── s7/                 # Server Actions
├── s8/                 # 고급 기능들
├── s9/                 # 최종 프로젝트 (도서 리뷰 사이트)
├── _docs/              # 학습 문서 및 오류 해결 가이드
└── README.md
```

## 🚀 시작하기

### 필수 조건
- Node.js 18.17 이상
- npm 또는 yarn

### 전체 프로젝트 클론
```bash
git clone https://github.com/NtoZero/nextjs_study.git
cd nextjs_study
```

### 개별 섹션 실행
각 섹션별로 독립적으로 실행할 수 있습니다:

```bash
# 예: s9 섹션 실행
cd s9
npm install
npm run dev
```

개발 서버가 실행되면 [http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

## 📚 학습 단계별 가이드

### Section 2 (s2) - Pages Router 기초
- **주요 개념**: Pages Router 구조, 기본 라우팅
- **기술 스택**: Next.js 15.1.6, TypeScript, Prettier
- **학습 목표**: 
  - [ ] Pages Router 구조 이해
  - [ ] 사전 렌더링과 데이터 페칭 (SSG/SSR)
  - [ ] 기본적인 페이지 구성

### Section 3 (s3) - App Router 전환
- **주요 개념**: App Router 구조, 라우팅 시스템
- **특징**: Pages Router에서 App Router로의 전환
- **학습 목표**:
  - [ ] App Router 구조 이해
  - [ ] 새로운 라우팅 시스템 습득

### Section 4 (s4) - 라우팅 및 데이터 페칭
- **주요 개념**: 동적 라우팅, 데이터 페칭 전략
- **문서**: Request Memoization 오류 해결 가이드 포함
- **학습 목표**:
  - [ ] 동적 라우팅 구현
  - [ ] 서버 컴포넌트 데이터 페칭
  - [ ] searchParams와 params 비동기 처리 (Next.js 15 변경사항)

### Section 5-6 - 고급 기능 구현
- **주요 개념**: 유틸리티 함수, 컴포넌트 구조화
- **학습 목표**:
  - [ ] 재사용 가능한 컴포넌트 설계
  - [ ] 유틸리티 함수 구현

### Section 7-8 - Server Actions 및 고급 기능
- **주요 개념**: Server Actions, 폼 처리
- **디렉토리**: `src/actions/` 추가
- **학습 목표**:
  - [ ] Server Actions 구현
  - [ ] 폼 데이터 처리
  - [ ] 서버사이드 로직 구현

### Section 9 (s9) - 최종 프로젝트: 도서 리뷰 사이트
- **프로젝트**: 완전한 도서 리뷰 웹 애플리케이션
- **주요 기능**: 
  - 도서 검색 및 상세 정보
  - 리뷰 작성 및 관리
  - SEO 최적화
  - 병렬 라우팅 (`@modal`)
  - 라우트 그룹 `(with-searchbar)`

**기술적 특징**:
```typescript
// 타입 정의 (src/types.ts)
interface BookData {
  id: number;
  title: string;
  subTitle: string;
  author: string;
  publisher: string;
  description: string;
  coverImgUrl: string;
}

interface ReviewData {
  id: number;
  content: string;
  author: string;
  createdAt: string;
  bookId: number;
}
```

**학습 목표**:
- [ ] 병렬 라우팅 (`@modal`) 구현
- [ ] 라우트 그룹 활용
- [ ] SEO 최적화 (metadata 생성)
- [ ] 완전한 CRUD 기능 구현

## 🛠️ 기술 스택

- **프레임워크**: Next.js 15.1.6
- **언어**: TypeScript 5
- **React**: 19.0.0
- **스타일링**: CSS Modules
- **린팅**: ESLint 9, Prettier
- **개발 도구**: IntelliJ IDEA

## 📋 Next.js 15 주요 변경사항

이 프로젝트는 Next.js 15의 최신 기능을 반영합니다:

### 🔄 비동기 Request APIs
```typescript
// Before (Next.js 14)
export default function Page({ searchParams, params }) {
  const { q } = searchParams;
  const { id } = params;
}

// After (Next.js 15)
export default async function Page({ 
  searchParams, 
  params 
}: {
  searchParams: Promise<{ q: string }>;
  params: Promise<{ id: string }>;
}) {
  const { q } = await searchParams;
  const { id } = await params;
}
```

### 📚 관련 문서
- `_docs/searchParams와 params 변경사항.md` - Next.js 15 변경사항 상세 가이드
- `_docs/강의 Update 내용.md` - 강의 업데이트 내역
- `_docs/오류 발생 일지.md` - 학습 중 발생한 오류 및 해결 방법

## 🎨 주요 학습 주제

- **라우팅**: 파일 기반 라우팅, 동적 라우팅, 병렬 라우팅
- **렌더링**: SSR, SSG, CSR, ISR
- **데이터 페칭**: Server Components, Client Components
- **Server Actions**: 폼 처리, 서버사이드 로직
- **최적화**: 이미지 최적화, SEO, 성능 최적화
- **고급 기능**: Middleware, API Routes, 에러 처리

## 📖 학습 진행 상황

### 완료된 섹션
- [ ] Section 2: Pages Router 기초
- [ ] Section 3: App Router 전환  
- [ ] Section 4: 라우팅 및 데이터 페칭
- [ ] Section 5: 고급 라우팅
- [ ] Section 6: 유틸리티 구현
- [ ] Section 7: Server Actions
- [ ] Section 8: 고급 기능
- [ ] Section 9: 최종 프로젝트

### 학습 노트

#### 중요한 발견사항
- Next.js 15에서 searchParams와 params가 비동기로 변경됨
- Request Memoization 관련 오류 해결 경험
- App Router와 Pages Router의 차이점 체험

## 🔗 참고 자료

- [Next.js 공식 문서](https://nextjs.org/docs)
- [Next.js 15 릴리즈 노트](https://nextjs.org/blog/next-15)
- [React 공식 문서](https://react.dev/)
- [TypeScript 공식 문서](https://www.typescriptlang.org/)

## 🏃‍♂️ 빠른 실행 가이드

최종 프로젝트(도서 리뷰 사이트)를 바로 실행하려면:

```bash
cd s9
npm install
npm run dev
```

특정 섹션부터 시작하려면 해당 폴더로 이동 후 동일한 명령어를 실행하세요.

## 📄 라이센스

이 프로젝트는 학습 목적으로 만들어졌습니다.

---

**프로젝트 저장소**: [GitHub Repository](https://github.com/NtoZero/nextjs_study)