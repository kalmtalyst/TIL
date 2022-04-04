# 이벤트 핸들링

- React 의 이벤트는 캐멀케이스(camelCase)를 사용한다.
- JSX를 이용하여 함수를 이벤트 핸들러로 전달한다.

예를 들어, HTML은 다음과 같다.

```react
<button onclick="activateLasers()">
  Activate Lasers
</button>
```

React에서는 이벤트에 핸들러로서 함수를 전달한다. 

```react
<button onClick={activateLasers}>
  Activate Lasers
</button>
```

- React에서는 `false` 반환시 기본 동작 방지가 불가능하다.

- 따라서 `preventDefault`를 명시적으로 호출해야 한다.
- 아래는 HTML에서 form을 제출할 때 가지고 있는 기본 동작을 방지하기 위해 작성한 코드이다.

```react
<form onsubmit="console.log('You clicked submit.'); return false">
  <button type="submit">Submit</button>
</form>
```

- React에서는 다음과 같이 작성할 수 있다.

```react
function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
```

- 위의 예제에서 e는 합성 이벤트(synthetic event)이다.
- React 는 W3C  명세에 따라 합성 이벤트를 정의하므로 브라우저 호환성에 대해 걱정하지 않아도 된다. React 이벤트는 브라우저 고유 이벤트와 똑같이 동작하지는 않는다.

- React를 사용할 때는 DOM 요소가 생성된 이후에 `addEventListener` 메소드로 리스너를 바인드할 필요가 없다. DOM 요소가 처음 렌더링될 때 리스너를 바인드해주면 된다 (인라인 이벤트 핸들러).

- ES6 클래스를 사용하여 컴포넌트를 정의할 때, 이벤트 핸들러를 사용하는 가장 일반적인 방법은 클래스 몸체에 메소드로 정의하는 방법이다.
- 다음의 `Toggle` 컴포넌트는 사용자가 "ON"과 "OFF" 상태를 토글할 수 있는 버튼을 렌더링한다.

```react
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // 콜백에서 `this`가 작동하려면 아래와 같이 바인딩 해주어야 합니다.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
```



## 참고자료

- [이벤트 처리하기](https://ko.reactjs.org/docs/handling-events.html)