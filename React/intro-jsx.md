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

</br>

### JSX = 표현식이다.

- 컴파일 후, JSX 표현식이 JavaScript 함수로 호출 되고 JavaScript 객체로 인식된다.
- 즉, JSX를 if 문, for문, 변수에 할당하고 함수 호출시 arguments로 전달 및 함수의 return값 등으로 사용할 수 있다.

</br>

### JSX 어트리뷰트 정의

- 어트리뷰트 값의 타입이 String인 경우, 문자열 리터럴을 따옴표로 감싸 정의할 수 있다.

```react
const element = <div tabIndex="0"></div>;
```

- 어트리뷰트 값으로 자바스크립트 표현식을 할당할 경우 중괄호를 사용하여 감싼다.

```react
const element = <img src={user.avatarUrl}></img>;
```

- 어트리뷰트 값에 자바스크립트 표현식을 삽입할 때 중괄호 주변을 따옴표로 감싸선 안된다. 
- 따옴표(문자열 리터럴)나 중괄호(표현식) 중 하나만 사용하고 동일한 어트리뷰트에 두 가지를 동시에 사용하지 말 것.

```react
const element = <img src="{user.avatarUrl}"></img>; // X
```

> 주의
>
> JSX는 HTML 보다 자바스크립트에 가까우므로 React DOM은 HTML 어트리뷰트 이름 대신 camelCase 프로퍼티 명명 규칙을 사용한다.
>
> ex) HTML 요소의 `class`, `tabindex`는 `className`, `tabIndex` 로 작성

</br>

### JSX 자식 요소 정의

- 태그가 비어있는 경우 닫는 태그(`/>`)를 바로 사용한다.

```react
const element = <img src="{user.avatarUrl}" />;
```

- JSX 태그는 자식 요소를 포함할 수 있다.

```react
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
```



### JSX는 주입 공격(XSS)를 방지한다.

> XSS란? ([참고](https://developer.mozilla.org/ko/docs/Learn/Server-side/First_steps/Website_security))
>
> 격자가 클라이언트 측 스크립트를 웹 사이트에 삽입하여 다른 사용자의 부라우저에서 수행되게 하는 공격의 유형을 말한다.

```react
const title = response.petentiallyDangerousInput; // 이 코드는 안전하다.
const element = <h1>{title}</h1>;
```

</br>

### JSX는 객체를 나타낸다.

Babel은 JSX를 `React.createElement()` 호출로 컴파일한다.

다음 두 예시는 동일하다.

```react
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```

```react
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```

`React.createElement()`는 버그가 없는 코드를 작성하는 데 도움이 되도록 몇 가지 검사를 수행하며, 다음과 같은 객체를 생성한다.

```react
// 다음 객체의 구조는 단순화된 것이다.
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
```

</br>

## 참고자료

- [JSX 소개](https://ko.reactjs.org/docs/introducing-jsx.html)

