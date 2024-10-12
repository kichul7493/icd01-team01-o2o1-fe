
# 프로젝트 실행 방법
```bash
npm install
npm run dev
```
브라우저 : http://localhost:3000  

# 테스트 실행 방법
```bash
npm run test
```

# 폴더 구조
```md
.
├── app   * nextjs 앱 라우터 
│ ├── home    * 페이지 라우팅
│ │ └── _components    * 페이지 전용 컴포넌트 컴포넌트
├── components
│ ├── Layout    * 레이아웃 컴포넌트
│ ├── shared    * 공용 컴포넌트
│ └── ui    * shadcn/ui 컴포넌트
├── constants   * 공용 상수
├── context   * 외부 모듈 관련 
├── features    * 기능 코드
│ ├── address   * 도메인
│ │ ├── api   * api 호출 함수
│ │ ├── hooks   * 커스텀 hook
│ │ └── types   * 타입 정의
├── hooks   * 공용 커스텀 hook
├── lib   * 라이브러리
├── mocks   * msw mock api
└── store   * 전역 상태 관리
```
