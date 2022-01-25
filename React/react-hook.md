# React Hook

## Hook이란?

- 함수 컴포넌트에서 React state와 Lifecycle 기능을 “연동(hook into)“할 수 있게 해주는 함수이다.  (버전 16.8부터 도입)

- Hook은 class 안에서는 동작하지 않는다.(함수 컴포넌트에서 사용하기 위해 만들어졌기 때문)



## useState

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



## useState 사용하기

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



## useRef

### 특정 DOM 선택

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
