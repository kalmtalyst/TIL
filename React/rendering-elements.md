# Rendering Elements

### 엘리먼트란?

- 엘리먼트 : React app의 가장 작은 단위이다.
  - 익숙하게 접근하기 위하여 이하 요소라고 기재한다.
- 요소는 화면에 표시할 내용을 기술한다.

```react
const element = <h1>Hello, world</h1>;
```

- 브라우저 DOM 요소와는 달리 React 요소는 일반 객체로 쉽게 생성할 수 있고 React DOM은 React 요소와 일치하도록 DOM을 업데이트한다.

</br>

### DOM에 요소 렌더링하기

HTML 파일 어딘가에 `<div>` 요소가 있다고 하자.

```react
<div id="root"></div>
```

- 이것을 '루트(root)' DOM 노드라고 부른다.
  - 모든 요소들이 해당 root 노드 아래에 들어가 React DOM에 의해서 관리된다.
- React로 구현된 app은 일반적으로 하나의 root DOM 노드가 있다.
- React를 기존 app에 통합하려는 경우 원하는 만큼의 독립된 root DOM 노드가 있을 수 있다.
- React 요소를 root DOM 노드에 렌더링하려면 `ReactDOM.render()`에 React 요소와 root DOM 노드를 전달하면 된다.

```react
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

</br>

### 렌더링 된 요소 업데이트하기

- React 요소는 불변객체(immutable object) 이다.
- 요소 생성 이후, 해당 요소의 자식이나 속성을 변경할 수 없다.
- 지금까지 살펴본 내용만으로 UI를 업데이트 할 수 있는 방법은 새로운 요소를 생성하고 이를 `ReactDOM.render()`로 전달하는 것이다.

```react
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
```

- 위 함수는 `setInterval()` 의 콜백이 매초 `ReactDOM.render()`를 호출한다.

</br>

### 변경된 부분만 업데이트하기

- React DOM은 해당 요소와 그 자식 요소를 이전에 렌더된 요소와 비교하여 변경이 필요한 경우에만 DOM을 업데이트한다.

- 위 예제의 함수는 `<div>` 를 포함하여 모든 하위 요소들을 매초마다 새롭게 렌더링 하는데 실질적으로 React DOM은 내용이 변경된 `<h2>`의 텍스트 노드만을 업데이트한다.

</br>

## 참고자료

- [엘리먼트 렌더링](https://ko.reactjs.org/docs/rendering-elements.html)