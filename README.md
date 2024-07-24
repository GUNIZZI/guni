# GUNI website

### 목차

1. [History](#history)
2. [Project 정보](#project-정보)
3. [라이브러리](#라이브러리)
4. [Local Server 설정](#local-server-설정)
5. [배포](#배포)

---

### History

| 일자       | 버전  | 내용          |
| ---------- | ----- | ------------- |
| 2024-07-22 | 0.0.1 | 프로젝트 생성 |

---

### Project 정보

-   GUNI
-   개인 웹사이트(포트폴리오, 블로그...)
-   node: - v18
-   SSL

---

### 라이브러리

-   `mui/material`: MUI 디자인 시스템
-   `mui/icons-material`: MUI 디자인 시스템 - 아이콘
-   `emotion/styled`: MUI CSS-in-JS
-   `vite-plugin-mkcert`: 로컬 개발용 SSL
-   `zustand`: 상태관리
-   `react-cookie`: 쿠키관리
-   `react-query`: 패칭
-   `isomorphic-dompurify`: XSS보안
-   `eslint-plugin-import`: eslint import 관리(순서)
-   `lodash`: 유틸리티
-   `rsn-react-ui`: 커스텀 UI(자체 제작한 UI로 추후에 추가)

---

### Local Server 설정

-   https://guni.devel.com
-   SSL(자체적으로 SSL키 생성 후 사용)

```
// 서버 시작
npm run dev
```

---

### 배포

`개발` : CI/CD
`운영` : 백엔드에서만 배포

```
// 배포 버전 생성
npm run build

// 개발 버전 생성
npm run build:dev

// 개발/배포 버전 한번에 생성
npm run generate
```
