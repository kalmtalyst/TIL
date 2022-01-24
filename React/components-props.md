# Components와 Props

## 함수 컴포넌트

- 자바스크립트 함수로 컴포넌트를 정의할 수 있다.
- 데이터를 가진 "props" 객체 인자를 받은 후 React 엘리먼트를 반환하므로 유효한 React 컴포넌트이다.

```react
// 함수 컴포넌트
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```



## 클래스 컴포넌트

- ES6 class 사용하여 컴포넌트를 정의할 수 있다.
- React의 관점에서 함수 컴포넌트와 클래스 컴포넌트는 동일하다.

```react
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```



## 컴포넌트 렌더링

- React는 DOM 태그를 사용해 엘리먼트를 나타낼 뿐만 아니라 사용자 정의 컴포넌트로 엘리먼트를 나타낼 수 있다.

```react
// DOM 태그
const element = <div />;

// 사용자 정의 컴포넌트
const element = <Welcome name="Sara" />;
```

- 사용자 정의 컴포넌트로 엘리먼트를 작성할 경우 React가 JSX 어트리뷰트와 자식을 해당 컴포넌트에 단일 객체로 전달한다.
- 이 객체가 "**props**"다.

```react
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```



### props를 사용하여 "Hello, Sara"렌더링하기

```react
function Welcome(props) { // 2. {name:'Sara'} props로 Welcome 컴포넌트 호출 
  return <h1>Hello, {props.name}</h1>; // 3. Welcome 컴포넌트가 <h1>Hello, Sara<h1> 엘리먼트 반환
}

const element = <Welcome name="Sara" />; 

ReactDOM.render( // 1. ReactDOM.render() 호출
  element,
  document.getElementById('root') 
); // 4. React DOM은 <h1>Hello, Sara</h1> 엘리먼트와 일치하도록 DOM을 효율적으로 업데이트
```

> 주의
>
> 컴포넌트 이름, 대문자로 시작할 것. React는 소문자로 시작하는 컴포넌트를 DOM 태그로 처리한다. 



## 컴포넌트 합성

- 컴포넌트에서 다른 컴포넌트를 담는 것이다.

- 컴포넌트는 자신이 출력하는 결과물 내에 또 다른 컴포넌트를 참조할 수 있다.

- props 로 전달되는 다른 컴포넌트를 함께 렌더링 후 return 한다.



## 컴포넌트 추출

- 컴포넌트를 여러 개의 작은 컴포넌트로 나누기

```react
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```



- Avatar 추출

```react
function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}
```

- props의 이름은 컴포넌트 자체의 관점에서 짓는 것이 좋다.
  - 위의 경우 Avatar를 추출하며 props의 이름을 `author`에서 일반화된 `user`로 변경했다.

```react
// Avatar 추출 후
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <Avatar user={props.author} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

- Avatar 옆, 사용자 이름을 렌더링하기 위한 UserInfo 컴포넌트 추출

```react
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}
```

```react
// UserInfo 추출 후
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

- 컴포넌트 추출은 재사용 가능한 컴포넌트를 만들기 위한 작업이다.

- UI 일부가 반복되거나 자체적으로 복잡한 경우에 별도의 컴포넌트로 만들어 줘야한다.



## props는 읽기 전용이다.

- 함수 컴포넌트나 클래스 컴포넌트 모두 컴포넌트의 자체 props를 수정해서는 안된다.

- 순수 함수는 항상 동일한 입력값에 대해 동일한 결과를 반환한다.

```react
function sum(a, b) {
  return a + b;
}
```

- 자신의 입력값을 변경하는 함수

```react
function withdraw(account, amount) {
  account.total -= amount;
}
```

- **모든 React 컴포넌트는 자신의 props를 다룰 때 반드시 순수 함수처럼 동작해야 한다.**





### 참고자료

- [Components 와 Props](https://ko.reactjs.org/docs/components-and-props.html) 