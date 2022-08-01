# 프론트엔드 개발자 과제 [퀴즈]

[배포 링크](https://classting-quiz-donghakang.netlify.app)

## 👨🏻‍💻 라이브러리 및 기술 스택

**📚 &nbsp; 기술**

- react
- netlify
- gitflow
- Context API

**💼 &nbsp; 라이브러리**

- chart.js
- emotion.js
- cypress
- react-router-dom
- husky, lint-staged, commitlint, eslint, prettier

---

## 💡 요구사항

### [필수 구현]

- [x] 사용자는 '퀴즈 풀기' 버튼을 클릭하여 퀴즈 풀기를 시작할 수 있다.
- [x] 사용자는 문항에 대한 답안을 4개 보기 중에 선택할 수 있다.
- [x] 사용자는 답안을 선택하면 다음 문항을 볼 수 있다.
  - [x] 답안 선택 후 다음 문항 버튼을 볼 수 있다.
  - [x] 답안이 맞았는지 틀렸는지 바로 알 수 있다.
  - [x] 다음 문항 버튼을 클릭하여 다음 문항으로 이동할 수 있다.
- [x] 모든 문항을 다 풀면 사용자는 다음과 같은 결과 정보를 볼 수 있다.
  - [x] 퀴즈를 마칠 때까지 소요된 시간
  - [x] 정답 개수
  - [x] 오답 개수

### [추가 구현]

- [x] 정 오답에 대한 비율을 차트로 표기
- [x] 다시 풀기
- [x] 오답 노트

---

## 📝 추가 설명

#### Context API 사용 이유

우선, react-router-dom을 이용하여 첫 페이지, 퀴즈 페이지, 결과 페이지를 나누고 싶었습니다. 그 결과 다른 페이지 별로 정보들을 공유를 해야했고, 공유를 하는 과정에서 props로 퀴즈, 시간, 정답 여부를 전달 하기 보다 큰 Context를 사용하여 모든 페이지에 편하게 공유하기 위해 Context API를 사용했습니다.
MobX, 혹은 Redux를 사용할 정도의 복잡함은 없었다고 판단하여 Context API로 간단하게 구현했습니다.

#### 🧪 Testing 정보

Unit Testing은 react에 기본으로 있는 jest 를 이용하였고, E2E 테스팅은 cypress를 이용하여 구현했습니다.

```bash
# 전체 테스트 확인
yarn test
```

```bash
# cypress 만
yarn cypress:open
yarn cypress:run
```

**Unit Test**

- `App.test.tsx`: 첫 화면 snapshot 확인
- `api.test.tsx`: `fetchQuiz`, API 호출 여부 확인. 불러오는 퀴즈의 갯수로 파악한다.
- `numberToTime.test.tsx`: 숫자(integer)가 올바르게 시간을 보여주는 문장(string)으로 변환하는지 확인한다.
- `scoreboard.test.tsx`: 주어진 답안지와 제출한 답안지로 맞은 문제의 갯수를 리턴하는지 확인한다.

**E2E Test**

- Test1 (_Reroute - 페이지 우회_): 초기 페이지는 항상 Start Page에서 시작하기 때문에 어떤 경로로 접근해도 Start Page로 다시 Navigate하는지 확인한다.
- Test2 (_Quiz Question - 문제 페이지_): 버튼을 누르고 문제를 받으면 초기 문제화면은 질문과 옵션만 보이는데, 이때 답을 선택하면 next 버튼이 생성되고 정답인지 오답인지 보여주는 메시지도 생성되는지 확인한다.
- Test3 (_Quiz Start - 문제 결과 페이지_): 문제 결과 페이지 모든 요소가 있는지 확인한다 (총 문제 수, 정답 수, 오답 수, 시간, 그래프, 다시 풀기 버튼, 오답 노트 버튼). 또한, 정답 수와 오답 수의 합이 총 문제 수 와 일치 하는지 확인한다.
- Test4 (_Quiz Time - 시간 계산_): 마지막 문제에서 10초를 기다리고 결과 페이지에서 소요시간이 10초 보다 큰지 확인한다.
- Test5 (_Quiz Restart - 다시 풀기_): 모든 문제를 다 풀고 '다시 풀기' 버튼을 누르면 다시 첫 화면으로 돌아가는지 확인한다.
- Test6 (_Quiz Review - 오답 노트_): 모든 문제를 다 풀고 '오답 노트' 버튼을 누르면 Modal이 생성되고 오답 노트가 정리 되어있는 테이블이 보여지는지 확인한다. 또한 그 테이블의 줄 수가 퀴즈 수와 동일 하는지 또한 확인한다.
