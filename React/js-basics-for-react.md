# React를 위한 JavaScript 문법 정리

- const, let
- template string
- arrow function
- .bind(this)
- const {children} = this.props;
- ...props
- Promise
- async await
- Generator



## const와 let

### var

```javascript
(function() {
    console.log(variable);
    
    var variable = 'hoisted';
})();

(function() {
    var variable;
    
    console.log(variable);
    
    variable = 'hoisted';
})();
```



### let (ES6)

- 블록 레벨 스코프
- 중복 선언 => SyntaxError
- 호이스팅 => ReferencError

> SyntaxError란?
>
> JavaScript 엔진이 코드를 분석할 때 문법을 준수하지 않은 코드를 만나면 발생하는 에러다.
>
> - 여기서 에러는 브라우저 혹은 node.js에 있는 전역 객체이다. 이 전역 객체를 상속 받은 SyntaxError라고 하는 클래스를 new하여 new한 것을 throw 한다.



1. 블록 레벨 스코프

```javascript
{
    let variable = 'block scope';
    
    console.log(variable);
}
```

2. 중복 선언 => SyntaxError

```javascript
{
    let variable = 'block scope';
    let variable = 'duplicated';
    
    console.log(variable);
}
```

3. 호이스팅 => ReferencError

```javascript
{
    console.log(variable); // 자바스크립트 엔진이 이 코드를 읽으려고 할 때 variable이 참조하고 있는 값이 없다. 
    let variable = 'hoisted';
}
```



- let은 변경이 가능하다.

- const는 변경이 불가능하다.

  - Primitive

  ```javascript
  let a = 'a';
  a = 'b';
  a;
  ```

  ```javascript
  const c = 'c';
  c = 'd'; // TypeError
  c;
  ```

  

  > TypeError란?
  >
  > 함수나 연산자의 인자가, 그 함수나 연산자가 예상하던 타입과 호환되지 않을 때 TypeError  오류가 던져진다.

  

  - Reference

  ```javascript
  let e = {
      foo: 'foo',
  };
  
  e = {
      bar: 'bar',
  };
  e;
  ```

  ```javascript
  const f = {
      foo: 'foo',
  };
  
  // f = {
  //    foo: 'bar',
  // }; TypeError
  
  f.foo = 'bar';
  f;
  ```



const 와 let 성능의 차이는 미미하다.

무엇을 써야할까? const 자리에 let 사용시 아래에서 이것을 바꾸겠구나. 하는 "의도"를 담게된다. const 자리에 const를 쓰지 않을 경우 코드를 읽는 사람에게 혼란을 줄 수 있다. 가독성을 위해 잘 사용해야 한다.



## template string

```javascript
// `문자열`
// `${자바스크립트 표현식}`

const name = 'Kim';

console.log('Hello! \nThis is' + name +'!' );

console.log(`Hello! This is ${name} !`);
```



## arrow function

- 자신의 this 를 만들지 않는다.
- 생성자로 사용할 수 없다.
- 항상 익명 함수
- return 만 있으면 { } 생략
- 인자가 하나일 경우 ( ) 생략

------

- 자신의 this 를 만들지 않는다.

```javascript
  function Foo() {
    console.log('What is my name?')
    this.name = 'Kim';

    setTimeout(() => {
      console.log(this.name) // 자신의 this를 만들지 않으므로 여기서 this는 생성자 함수가 생성할 인스턴스가 된다.
    }, 2000);
  }

  const foo = new Foo();
```

- 익명 함수를 변수에 대입해서 사용

```javascript
const a = () => {
    return '리턴';
};

console.log(a());
```

- 리턴 표현이 바로 가능하다면 { return } 생략

```javascript
const b = () => '리턴';

console.log(b());
```

- 매개변수가 한개면 ( ) 생략

```javascript
const c = props => `리턴 ${props}`;

console.log(c());
```



## 함수.bind(디스)

- 함수의 this 로 인자로 넣은 "디스" 를 사용하는 함수를 만들어 리턴

```javascript
function hello() {
    console.log(`Hello! This is ${this.name}`);
}

const park = {
    name: 'Park',
};

const helloPark = hello.bind(park); // helloPark에 hello.bind(park)이 리턴한 함수가 할당됨

helloPark(); // helloPark을 호출
```



## Destructuring assignment

- 구조 분해 할당
- 배열, 객체 모두 가능

```javascript
const foo = {
    a: '에이',
    b: '비이',
};

const {a, b} = foo; // 순서에 주의
console.log(a, b); // 에이 비이

const bar = ['씨이', '디이'];

const [c, d] = bar;
console.log(c, d); // 씨이 디이

const { a: newA, b: newB } = foo;
console.log(newA, newB);

```



## Spread 와 Rest

### Spread

- ...
- 배열, 객체
- 1 레벨 깊이 복사

```javascript
function sum(a, b, c) {
    return a + b + c;
};

console.log(sum(1,2,3));

const numbers = [1,2,3];

console.log(sum(...numbers));
```

```javascript
// 1 레벨 깊이
const obj = { a: 3, b: 4, c: 5 };

const cloned = {...obj, a: 100};
cloned.c = 200;

console.log(obj, cloned);
```



![](C:\Users\soarm\Downloads\spread.jpg)

```javascript
// 2 레벨 깊이
const obj1 = { a: { b: 100 } };

const obj1Cloned = { ...obj1 };
obj1Cloned.a.b = 200;

console.log(obj1, obj1Cloned); // obj1의 a 또한 변경됨, 문제다.

const obj2 = { a: {b: 100} };

const obj2Cloned = { ...obj2, a: { ...obj2.a } };
obj2Cloned.a.b = 200;

console.log(obj2, obj2Cloned);
```



### Rest

```javascript
function rest1(...args) {
    console.log(args);
}

rest1('Kim', 20, 'Korea');

function rest2(name, ...args) {
    console.log(name, args);
}

rest2('Kim', 20, 'Korea');
```



## callback

- 과거 비동기 처리를 위한 선택

```javascript
function foo(callback) {
    setTimeout(() => {
        // 로직
        callback();
    }, 1000);
}

foo(() => {
    console.log('end');
});
console.log('이 친구가 먼저 실행 된다!')
```

> 콜백 기반으로 설계된 플랫폼이 바로 node.js이다.
>
> ex) fs.readFile(path[,options], callback)
>
> node.js 문제점을 지적하며 나온 것이 프로미스 기반의 Deno이다. 

- 콜백 시스템의 문제는 사고의 흐름과 코드의 흐름이 다르다는 것이다.



## Promise

- 콜백 지옥을 타파하기 위해 출현
- Promise 객체를 만들고, 로직 처리 후 성공과 실패를 알려준다.
- then 과 catch 를 통해 메인 로직에 전달한다.

```javascript
function foo() {
    return new Promise(() => {
        setTimeout(() => {
            // 로직
            resolve();
        }, 1000);
    });
}

foo().then(() => {
    console.log('end');
});
console.log('이 친구가 먼저 실행된다!')
```



## async - await

- 기본적으로 Promise 를 사용한다.
- 비동기 로직을 실행하는 부분에서 사용한다.
- then 과 catch 를 통해 메인 로직에 전달한다.
- async 키워드가 붙은 함수 안에서만 await 키워드를 사용할 수 있다.

```javascript
function foo() {
    return new Promise(() => {
        setTimeout(() => {
            // 로직
            resolve();
        }, 1000);
    });
}

(async () => {
    await foo();
    console.log('end');
    console.log('이 친구가 먼저 실행된다!')
})();
```



## Generator 객체

- function* 으로 만들어진 함수를 호출하면 반환되는 객체이다.
- function* 에서 yield 를 호출하여, 다시 제어권을 넘겨준다.
- 제너레이터 객체에 next() 함수를 호출하면, 다음 yield 지점까지 간다.

```javascript
function* foo() {
    console.log(0.5);
    yield 1;
    console.log(1.5);
    yield 2;
    console.log(2.5);
    yield 3;
    console.log(3.5);
}

const g = foo();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
```

- 실제 비동기에 활용하기
  - 이 작업은 redux-saga가 처리하므로 개념을 이해해 두자.

```javascript
// 핸들
let handle = null;

// 비동기 함수
function bar() {
    setTimeout(() => {
        handle.next('hello');
    }, 1000);
}

// 핸들을 통해 컨트롤을 넘기는 제너레이터 함수
function* baz() {
    const text = yield bar();
    console.log(text);
}

handle = baz();
handle.next();
```

