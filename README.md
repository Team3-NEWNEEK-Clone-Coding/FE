# clone coding - newneek

## 프로젝트 소개
세상의 모든 기사를 찾아서

<p align="center">
<img src="https://github.com/Haegnim/reveal_example/assets/84562770/cd3fbdba-de4b-46d9-a0c8-03bb5397656b">
</p>

### 배포

📎[서비스 링크](https://fe-newneek.vercel.app/)
🎬[시연 영상](https://www.youtube.com/watch?v=jdSk7j4KiFE&feature=youtu.be)
---
### 기획 / 설계

📘[S.A 링크](https://stealth-screw-ec8.notion.site/Team3-NEWNEEK-Clone-Coding-ba274ad8be504cbfba203b9848809228?pvs=4)
<br />
<br />
📕[팀 일정관리 - 노션](https://stealth-screw-ec8.notion.site/Frontend-2db5a4601ab2411ca44ce58eecb42142?pvs=4)



## 주요 기능

### 구현 기능

|                                                       구현된 기능                                                        |                                                         기능 설명                                                         |
| :----------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------: |
| <img src="https://github.com/Haegnim/reveal_example/assets/84562770/ecf37cc6-547a-40e0-9c6e-ed4c285e61a4" width="360px"> |                                               회원가입 기능을 구현했습니다.                                               |
| <img src="https://github.com/Haegnim/reveal_example/assets/84562770/1fe8b4de-7bb3-436e-89c6-9c94e3de5881" width="360px"> |                                                로그인 기능을 구현했습니다.                                                |
| <img src="https://github.com/Haegnim/reveal_example/assets/84562770/7520f06b-0244-4bbc-a10b-ca9f460b2386" width="360px"> |                   뉴스레터 구독 신청이 가능합니다.<br /> 구독 후 해당 이메일 주소로 메일이 발송됩니다.                    |
| <img src="https://github.com/Haegnim/reveal_example/assets/84562770/da2de772-67ca-44da-b3c2-8478f56c7926" width="360px"> |                                             더보기 버튼 기능을 구현했습니다.                                              |
| <img src="https://github.com/Haegnim/reveal_example/assets/84562770/d81c39d0-3237-4cba-855f-36a7e2269b16" width="360px"> |                                            카테고리 조회 기능을 구현했습니다.                                             |
| <img src="https://github.com/Haegnim/reveal_example/assets/84562770/0c7d9cd8-1c3c-49d0-821d-4d19c8bd5040" width="360px"> | 기사의 상세한 내용을 확인할 수 있습니다.<br>프로그레스바를 구현했습니다.<br />마음에 든 기사는 좋아요를 누를 수 있습니다. |

<br />

## 👩‍👧‍👧팀원

FE

|  팀원👩‍💻  | git 주소                                       | 맡은 기능                                                                                                                           |
| :----: | :--------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------- |
|  이도영  | [@doyoung1002](https://github.com/doyoung1002) | 로그인 & 회원가입 페이지 기능 구현 / 공통 UI button & input                                                                         |
|  손규리  | [@gyurison7](https://github.com/gyurison7)     | 상세페이지,좋아요 기능 구현/ 로딩페이지 기능 구현/ 구독 신청 기능 구현 / 프로그레스바 구현 & footer banner 인피니티 애니메이션 구현 |
|  김혜경  | [@Haegnim](https://github.com/Haegnim)         | 메인페이지, 카테고리 페이지, 검색 페이지, 검색 결과 페이지 기능 구현 / 더보기 기능 구현                                             |

## 🌲 기술 스택

### FRONT-END

| 사용 기술             | 기술 설명                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Styled-Components** | - CSS in JS라는 접근 방식으로 동적 스타일링이 가능해집니다. <br> -각 요소에 고유의 클래스 이름 부여로 className으로 인한 스타일 충돌 문제를 효과적으로 방지할 수 있습니다.                                                                                                                                                                                                                              |
| **Vercel**            | - Github에 Push를 하면 자동적으로 빌드와 배포 과정이 이루어집니다.                                                                                                                                                                                                            |
| **Axios**             | - axios는 간단하고 직관적인 API를 제공합니다. 요청과 응답을 받는 과정을 단순화하여 쉽게 데이터를 가져올 수 있어서 사용하였습니다.                                                                                                                                                                                                                                                                             |
| **React-Query**       | - react-query는 서버 상태 관리에 최적화 된 라이브러리입니다. 비동기 데이터 로딩에 대한 로딩 상태와 에러 핸들링을 용이하게 합니다. 캐싱된 데이터를 사용해서 더보기 버튼 기능을 구현하는 데 사용하였습니다. useQuery에서 제공하는 isLoading을 통해 로딩페이지를 구현했습니다.|
| **Redux**             | - redux는 전역 상태 관리 라이브러리입니다. 전체 조회시 받아온 데이터를 각각 다른 컴포넌트에 props로 내려주기 위해 사용하였습니다.                                                                                                                         |

## 🧨 트러블 슈팅

<details>
<summary>페이지를 벗어났다가 다시 돌아올 때, 데이터가 중복되어 보여지는 현상</summary>
<br>

**`문제`**
다른 사이트 페이지에 나갔다가 다시 돌아오면 마운트 단계에서 데이터를 호출하고 호출한 데이터를 state에 저장하기 때문에 더보기 버튼을 누르지 않아도 데이터가 계속 불러나가지는 오류가 발생.

**`해결`**
useQuery로 불러올 때 캐싱된 데이터와 새로 호출된 데이터를 보여주도록 수정하여 호출 될 때마다 데이터가 state에 누적 저장되는 문제를 해결하였다.

</details>
<details>
<summary>상세페이지 나갔다 돌아올 때 남아있는 캐시와 새로 불러온 데이터가 중복되어 보여짐</summary>
<br>

**`문제`**
상세페이지를 들어갔다가 다시 메인으로 돌아올 때 남아있는 캐시와 페이지 1로 호출한 데이터가 보이게 된다. 문제는 둘이 중복데이터라서 같은 데이터를 2번 호출한 것 처럼 보이게 된다.

**`해결`**
페이지가 1번째일 경우 남아있는 캐시는 제외하고 호출한 데이터만 보여주도록 수정하였다.

</details>
<details>
<summary>조회 시 일부 데이터가 중복해서 들어옴</summary>
<br>

**`문제`**
페이지 1과 페이지 2를 호출 할 시, 랜덤하게 일부 데이터가 중복해서 들어왔다.

**`해결`**
백엔드와 상의하여 문제를 해결했다. 백엔드의 요청대로 데이터 정렬을 최신 기사 정렬에서 카테고리 정렬로 수정하였다.

</details>
<details>
<summary>로그인 후에 사용자 정보를 가져오는데 실패</summary>
<br>

**`문제`**
로그인 시 로컬에 토큰이 안 들어가짐.

**`해결`**
받아오는 로직을 두번이나 작성했기 때문에 이를 받아들이지 못하는 것 같았다. 원래라면 처음 요청에 대해 완료가 된 후 두번 째 요청을 했어야 했는데, 병렬로 실행되어 첫번째 요청의 결과가 두번 째 요청에 영향을 미치지 못했다. 또한 이 두번 째 요청이 첫 번째 요청을 무시할 수도 있다. 두번째 요청을 지웠더니 바로 되었다.

</details>
