# React Hook

## Hook이란?

- 함수 컴포넌트에서 React state와 Lifecycle 기능을 “연동(hook into)“할 수 있게 해주는 함수이다.  (버전 16.8부터 도입)

- Hook은 class 안에서는 동작하지 않는다.(함수 컴포넌트에서 사용하기 위해 만들어졌기 때문)



## :white_check_mark: useState

- Hook을 호출하여 함수 컴포넌트에 state 변수를 선언할 수 있다.

```react
import React, { useState } from 'react';

function Example() {
  // 새로운 state 변수를 선언하고, count라고 한다.
  // "count"라는 새로운 상태 값을 정의한다.
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```



### useState 사용하기

#### To-do List

```react
import "./App.css";
import React, { useState } from "react";

function App() {
  const [todos, setTodo] = useState(["오늘 내가 해야할 일!"]);
  const [inputState, setInputState] = useState("");

  const addTodo = (e) => {
    const arrTodo = [...todos];
    arrTodo.push(inputState);
    setTodo(arrTodo);
  };

  const valueInput = (e) => {
    setInputState(e.target.value);
  };

  return (
    <div className="app">
      <div className="note">
        <h1>To-Do List</h1>
        <ul className="todos">
          {todos.map((value, index) => {
            return <li key={index}>{value}</li>;
          })}
        </ul>
        <div className="write">
          <div className="todo-form">
            <label for="todo-field">+Must</label>
            <input
              type="text"
              id="todo-field"
              className="todo-field-box"
              onChange={valueInput}
              value={inputState}
            />
            <button className="submit" onClick={addTodo}>
              ADD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

```





## :white_check_mark:useRef

#### 특정 DOM 선택

- 리액트를 사용하는 프로젝트에서 DOM 을 직접 선택해야 하는 상황에서 사용한다.
- input, textarea 등 form 관련 요소에 접근시 직접 접근이 어렵기 때문에 useRef로 해당 요소를 참조하여 접근할 수 있다.
- 함수형 컴포넌트에서, useRef(Hook)을 사용한다.
- 클래스형 컴포넌트에서, 콜백 함수를 사용하거나 React.createRef 라는 함수를 사용한다.

```react
import React from "react";
import { useRef, useEffect } from "react";

function Input() {
  useEffect(() => {
    inputBox.current.focus();
  }, []);

  const inputBox = useRef();

  return (
    <React.Fragment>
      <h2>useRef를 사용하여 input에 포커스 두기</h2>
      <input type="text" ref={inputBox} />
    </React.Fragment>
  );
}

export default Input;
```





## :white_check_mark:useEffect

- useEffect 는 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook이다.

- useEffect 를 사용하여 함수 컴포넌트에서 side effect 를 수행할 수 있다.
  - 일반적인 side effect란 정리(clean-up)가 필요한 것과 그렇지 않은 것으로 나뉜다. 
- 데이터 가져오기, 구독(subscription) 설정하기, 수동으로 React 컴포넌트의 DOM을 수정하는 것 등이 모두 side effects이다.
- 클래스형 컴포넌트의 `componentDidMount`와 `componentDidUpdate`, `componentWillUnmount` 가 합쳐진 형태로 볼 수 있다.

```react
import React, { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickName] = useState("");
  useEffect(() => {
    console.log("렌더링이 완료되었습니다!");
    console.log({ name, nickname });
  });

  const getName = (e) => {
    setName(e.target.value);
  };
  const getNickName = (e) => {
    setNickName(e.target.value);
  };
  return (
    <div>
      <div>
        <input type={"text"} value={name} onChange={getName} />
        <input type={"text"} value={nickname} onChange={getNickName} />
      </div>
      <div>
        <div>
          <b>이름: </b>
          {name}
        </div>
        <div>
          <b>닉네임: </b>
          {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;

```



#### 마운트 될 때만 실행하고 싶을 때

- 컴포넌트가 화면에 맨 처음 렌더링될 때만 useEffect 에서 설정한 함수를 실행하고, 업데이트 될 때는 실행하지 않기 위해서는 함수의 두 번째 파라미터로 빈 배열([])을 넣어 준다.
- 처음 컴포넌트가 렌더링될 때만 콘솔에 문구가 나타난다. 이후로는 input 을 수정해도 콘솔에 아무런 문구가 나타나지 않는다.

```react
useEffect(() => {
    console.log('마운트될 때만 실행된다.');
},[]);
```



#### 특정 값이 업데이트될 때만 실행하고 싶을 때

- Class를 사용하는 예시

```react
componentDidUpdate(prevProps, prevState) {
    if (prevProps.value !== this.props.value) {
        doSomething();
    }
}
```

- Hook을 이용하는 예시

```react
useEffect(() => {
    console.log("렌더링이 완료되었습니다!");
    console.log({ name, nickname });
  }, [name]);
```

<img src="C:\Users\soarm\Downloads\useeffect.jpg" style="zoom:67%;" />



### clean-up 함수

- useEffect 는 기본적으로 렌더링되고 난 직후마다 실행된다.
- 두 번째 파라미터 배열에 무엇을 넣는지에 따라 실행되는 조건이 달라진다.
- 컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 어떠한 작업을 수행하고 싶다면 useEffect에서 clean-up 함수를 반환해야 한다.

```react
 useEffect(() => {
    console.log("effect");
    console.log(name);
    return () => {
      console.log("clean-up");
      console.log(name);
    };
  }, [name]);
```

- 렌더링될 때마다 clean-up 함수가 계속 나타나며 업데이트되기 직전의 값을 보여준다.

<img src="C:\Users\soarm\Downloads\useeffect2.jpg" style="zoom: 67%;" />

- 언마운트될 때만 clean-up 함수를 호출하고 싶을 경우, useEffect 함수의 두 번째 파라미터에 빈 배열([])을 넣는다.

```react
 useEffect(() => {
    console.log("effect");
    return () => {
      console.log("clean-up");
    };
  }, []);
```



#### :sparkles: React가 effect를 clean-up하는 시점

effect는 렌더링이 실행될 때마다 일어나기 때문에 다음 순서로 실행될 effect가 실행되기 전 그 이전의 렌더링에서 파생된 effect를 정리해야 한다.



> :warning:주의
>
> clean-up 함수라고 부르는 것은 목적을 분명히 하기 위함이다.
>
> effect 에서 반환해야 하는 함수가 유명함수여야만 하는 것은 아니다. 
>
> 화살표 함수를 반환해도 되고 다른 이름으로 불러도 된다.





## 참고자료

- [Using the Effect Hook](https://ko.reactjs.org/docs/hooks-effect.html)

- 리액트를 다루는 기술, 김민준 저