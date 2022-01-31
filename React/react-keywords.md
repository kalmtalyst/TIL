# React Keywords

- **Angular** vs **React** vs **Vue**
- *View 를 다루는 라이브러리*
- *Only Rendering & Update*
  - *NOT included another functionality (ex. http client, ...)*
- *Component Based Development*
  - *독립적인 코드 블럭 (HTML + CSS + JavaScript)*
  - *작업의 단위*
- *Virtual DOM*
  - *이제는 DOM 을 직접 다루지 않음.*
- *JSX*
  - *NOT Templates*
  - *transpile to JS (Babel, TypeScript)*
- *CSR & SSR*



## XMLHttpRequest

- [XMLHttpRequest](https://developer.mozilla.org/ko/docs/Web/API/XMLHttpRequest)는 브라우저 내장 글로벌 객체이다.
- axios 대신에 이걸 사용하여 데이터를 받아올 수 있다.

```javascript
function reqListener () {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://www.example.org/example.txt");
oReq.send();
```



## Fetch

- Fetch 는 프로미스 기반의 브라우저 메소드이다.

  (브라우저 내장 함수)

- 익스플로러에서 네이티브 API 사용 불가



## axios

- 위와 같은 상황에서 fetch를 돌아가게 해주는 라이브러리이다.
- XMLHttpRequests를 브라우저에서 사용하기 편하게 랩핑해놓은 라이브러리이다.
  - Make XMLHttpRequests from the browser
- node.js 안의의 http라는 모듈을 랩핑해놓은 라이브러리이다.
  - Make http requests from node.js

- promise 지원
  - .then
  - async - await 



## react 와 typescript

- 둘의 궁합이 좋다!
- agular vue 의 기술이 리액트와 다른 점
  - 템플릿 기반임
    - html 같은 것 -> 사실 문자열로 쓰여져 있음
    - 속안의 요소들이 js와 맞아야하는데 연역적으로 처리되지 않고 귀납적으로 처리됨
- react는 연역적으로 처리가 가능하기 때문에 궁합이 더 좋은 것이다.



## Component Based Development

:star: 어떤 컴포넌트를 어떻게 만들 것인가?

과거부터 중복되는 부분을 최소화 시키기 위한 노력이 중요했다. 

- '커스텀 태그를 만든다' 라는 개념과 일맥상통하다.
- 이를 위해 나온 기술 -> [웹 컴포넌트](https://developer.mozilla.org/ko/docs/Web/Web_Components)
  - 해당 기능을 나머지 코드로부터 캡슐화하여 재사용 가능한 커스텀 엘리먼트를 생성하고 웹 앱에서 활용할 수 있도록 해주는 다양한 기술들의 모음



### Component 란?

```html
<!-- HTMLElement -->

<img src="이미지 주소"/>
  
<button class="클래스 이름">버튼</button>

<!-- 내가 만든 컴포넌트 -->

<내가지은이름1 name="Kim" />

<내가지은이름 prop={false}>내용</내가지은이름>

```

- src, class, name, props 밖에서 넣어주는 데이터
- 문서(HTML), 스타일(CSS), 동작(JS)를 합쳐서 내가 만드는일종의 태그

- component tree = dom tree
  - 컴포넌트도 트리구조로 만들어진다.



## Why Virtual DOM?

* DOM 을 직접 제어하는 경우
  * 바뀐 부분만 정확히 바꿔야 한다.

- DOM 을 직접 제어하지 않는 경우
  - 가상의 돔 트리를 사용해서,
  - 이전 상태와 이후 상태를 비교하여,
  - 바뀐 부분을 찾아내서 자동으로 바꾼다.





## CSR vs SSR

- ### CSR

  - JS 가 전부 다운로드 되어 리액트 애플리케이션이 정상 실행되기 전까지는 화면이 보이지 않는다.
  - JS 가 전부 다운로드 되어 리액트 애플리케이션이 정상 실행된 후, 화면이 보이면서 유저가 인터렉션 가능하다.

- ### SSR

  - JS 가 전부 다운로드 되지 않아도, 일단 화면은 보이지만 유저가 사용 할 수 없다.
  - JS 가 전부 다운로드 되어 리액트 애플리케이션이 정상 실행된 후, 유저가 사용 가능하다.





## 참고자료

- XMLHttpRequest(MDN)
- 웹 컴포넌트(MDN) 

- [Woongjae Lee](https://slides.com/woongjae) - react-camp