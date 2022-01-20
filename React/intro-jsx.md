# JSX

- JSX는 React에서 제공하는 특별한 문법(syntax extension to JavaScript)이다.
  - 자바스크립트를 확장한 언어

- 자바스크립트 코드 안에서 출력할 HTML 구조를 그대로 작성하여 직관적인 코드 작성이 가능하다.

```react
import React from "react";

function Button() {
  return <button>Button1</button>
}

export default Button;
```

- 여러 줄에 걸쳐 JSX를 작성할 경우
  - 소괄호로 감싸는 것이 좋다.

```react
import React from "react";

function Hello() {
  return ( // 소괄호로 감싸준다.(세미콜론 자동 삽입 방지)
  	<div>
    	<h1>HELLO!</h1>  
    </div>
  )
}

export default Hello;
```



### JSX = 표현식이다.

- 컴파일 후, JSX 표현식이 JavaScript 함수로 호출 되고 JavaScript 객체로 인식된다.
- 즉, JSX를 if 문, for문, 변수에 할당하고 함수 호출시 arguments로 전달 및 함수의 return값 등으로 사용할 수 있다.



### JSX 어트리뷰트 정의

- 어트리뷰트 값의 타입이 String인 경우, 문자열 리터럴을 따옴표로 감싸 정의할 수 있다.

```react
const element = <div tabIndex="0"></div>;
```

- 어트리뷰트 값으로 자바스크립트 표현식을 할당할 경우 중괄호를 사용하여 감싼다.

```react
const element = <img src={user.avatarUrl}></img>;
```