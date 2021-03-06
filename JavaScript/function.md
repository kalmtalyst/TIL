# 함수

## 1. 함수란?

- 자바스크립트에서 핵심 개념
- 함수와 관련있는 개념들
  - 스코프
  - 실행 컨텍스트
  - 클로저
  - 생성자 함수에 의한 객체 생성
  - 메소드
  - this
  - 프로토타입
  - 모듈화
- 수학의 함수는 입력(input)을 받아서 출력(output)을 내보내는 일련의 과정을 정의한 것이다. 
- 프로그래밍 언어의 함수와 수학의 함수는 같은 개념이다. 

- **함수는 일련의 과정을 문**(statement)**들로 구현하고 코드 블록으로 감싸서 하나의 실행 단위로 정의한 것이다.**

- 함수 내부로 입력을 전달받는 변수를 매개변수(parameter), 입력을 인수(argument), 출력을 반환값(return value)이라 한다. 
- 함수는 값이며 여러 개 존재할 수 있다. 
- 특정 함수를 구별하기 위해 식별자인 함수 이름을 사용할 수 있다.
- 함수는 함수 정의(Function definition)를 통해 생성한다.

```javascript
// 함수 정의
function add(x, y) {
    return x + y;
}
```



- 함수를 실행하려면 함수를 호출해야 한다.

- 인수(argument)를 매개변수를 통해 함수에게 전달하는 명시적 지시가 **함수 호출**(Function call / invoke)이다.

- 함수를 호출하면 코드 블록에 담긴 문들이 일괄적으로 실행되고 반환값(실행 결과)을 반환한다.

  ```javascript
  var result = add(2, 5);
  
  console.log(result); // 7
  ```



## 2. 함수의 사용 이유

함수는 실행 시점을 개발자가 결정할 수 있고 동일한 작업을 반복적으로 수행해야 할 경우 미리 정의된 함수를 재사용할 수 있다. 함수는 몇 번이든 호출할 수 있으므로 **코드의 재사용**이라는 측면에서 매우 유용하다.

함수를 사용하지 않고 같은 코드를 중복해서 작성한다면 코드 수정에 걸리는 시간이 증가하고 실수할 가능성도 높아진다. 따라서 **함수는 유지 보수의 편의성을 높이고 실수를 줄여 코드의 신뢰성을 높이는 효과가 있다.**

함수는 객체 타입의 값이므로 이름(식별자)를 붙일 수 있다. 함수 이름은 자신의 역할을 잘 설명해야한다. 좋은 이름은 내부 코드를 이해하지 않아도 함수의 역할을 파악할 수 있게하여 **코드의 가독성**을 향상시킨다.



## 3. 함수 리터럴

- 자바스크립트 함수는 객체 타입의 값이다.

- 함수도 함수 리터럴로 생성할 수 있다.

  - 리터럴은 값을 생성하는 표기법으로 함수 리터럴도 평가되어 값(객체)을 생성한다.
  - 즉, 함수는 객체 타입의 값이다.

- 함수 리터럴의 구성 요소: function 키워드, 함수 이름, 매개변수 목록, 함수 몸체

- 함수는 일반 객체와는 달리 호출할 수 있다. 또 함수 객체만의 고유한 프로퍼티를 갖는다.

  함수가 객체라는 것은 다른 프로그래밍 언어와 구별되는 자바스크립트의 중요한 특징이다.

```javascript
// 변수에 함수 리터럴을 할당
var add = function add(x, y) {
    return x + y;
};
```

- 함수 이름

  - 함수 이름은 식별자이다.
    - 식별자 네이밍 규칙을 준수해야 한다.
  - 함수 이름은 함수 몸체 내에서만 참조할 수 있는 식별자다.
  - 함수 이름 생략 가능
    - 기명 함수(named function)
    - 익명 함수(anonymous function)

- 매개변수 목록

  - **0개 이상의 매개변수**를 소괄호로 감싸고 쉼표로 구분한다.

  - 매개변수에는 함수호출문의 인수가 **순서대로** 할당된다.

  - 매개변수는 함수 몸체 내에서 변수와 동일하게 취급된다.
    - 매개변수도 식별자 네이밍 규칙을 준수해야 한다.

- 함수 몸체

  - 함수가 호출되었을 때 일괄적으로 실행될 문들을 하나의 실행 단위로 정의한 **코드 블록**이다.

  - 함수 몸체는 함수 호출에 의해 실행된다.



## 4. 함수 정의

- ### 함수 정의란?

  함수를 호출하기 이전에 인수를 전달받을 매개변수와 실행할 문들 그리고 반환할 값을 지정하는 것이다. 정의된 함수는 자바스크립트 엔진에 의해 평가되어 함수 객체가 된다.

  

함수를 정의하는 방법은 4가지가 있다.

- 함수 선언문(Function declaration/Function statement)

```javascript
function add(x, y) {
 return x + y;
}
```

- 함수 표현식(Function expression)

```javascript
var add = function (x, y) {
 return x + y;
};
```

- Function 생성자 함수(Function constructor)

```javascript
var add = new Function('x', 'y', 'return x + y');
```

- 화살표 함수(Arrow function): ES6

```javascript
var add = (x, y) => x + y;
```



### 4.1. 함수 선언문

```javascript
// 함수 선언문
function add(x, y) {
 return x + y;
}
// 함수 참조
console.dir(add); // ƒ add(x, y)
// 함수 호출
console.log(add(2, 5)); // 7
```

- 함수 선언문과 함수 리터럴은 형태가 동일하나, 함수 이름을 생략할 수 있는 함수 리터럴과는 달리 **함수 선언문은 함수 이름을 생략할 수 없다**.

- 함수 선언문은 표현식이 아닌 문이다.

  표현식이 아닌 문은 변수에 할당할 수 없다. 그러나 자바스크립트 엔진은 상황에 따라 동일한 함수 리터럴을 두고 두가지 경우로 해석한다.

  1. 함수 리터럴을 표현식이 아닌 문인 함수 선언문으로 해석하는 경우
  2. 표현식인 문인 함수 리터럴 표현식으로 해석하는 경우

- 자바스크립트 엔진은 함수 이름이 있는 함수 리터럴을 단독으로 사용하면 함수 선언문으로 해석하고 값으로 평가되어야만 하는 문맥, 예를 들어 함수 리터럴을 변수에 할당하거나 피연산자로 사용하면 함수 리터럴 표현식으로 해석한다.


```javascript
// 이름이 있는 함수 리터럴을 단독으로 사용하면 함수 선언문으로 해석한다.
// 함수 선언문은 함수 이름을 생략할 수 없다.
function foo() { console.log('foo'); }
foo(); // foo

// 함수 리터럴을 피연산자로 사용하면 함수 선언문이 아니라 함수 리터럴 표현식로 해석한다.
// 함수 리터럴은 함수 이름을 생략할 수 있다.
(function bar() { console.log('bar'); });
bar(); // ReferenceError: bar is not defined
```

- 위의 예제에서 함수 선언문으로 정의된 함수는 식별자로 선언한 적도, 할당한 적도 없으나 foo라는 이름으로 호출할 수 있었다. foo는 함수 이름이 아니라 자바스크립트 엔진이 암묵적으로 생성한 식별자이다.
- 자바스크립트 엔진은 생성된 함수를 호출하기 위해 함수 이름과 동일한 이름의 식별자를 암묵적으로 생성하고 생성된 함수 객체를 할당한다.
- 함수는 함수 이름으로 호출하는 것이 아니라 함수 객체를 가리키는 식별자로 호출한다. 
- 결론적으로 자바스크립트 엔진은 함수 선언문을 함수 표현식으로 변환하여 함수 객체를 생성한다고 생각할 수 있다. 단, 함수 선언문과 함수 표현식이 정확히 동일하게 동작하는 것은 아니다.



### 4.2. 함수 표현식

```javascript
// 함수 표현식
var add = function (x, y) {
 return x + y;
};
console.log(add(2, 5)); // 7
```

- 함수는 일급 객체이므로 함수 리터럴로 생성한 함수 객체를 변수에 할당할 수 있다. 이러한 함수 정의 방식을 함수 표현식(Function expression)이라 한다.

- 함수 리터럴의 함수 이름은 생략이 가능하고 이러한 함수를 익명 함수(anonymous function)라 한다. 함수 표현식의 함수 리터럴은 함수 이름을 생략하는 것이 일반적이다.

- 함수를 호출할 때는 함수 이름이 아니라 함수 객체를 가리키는 식별자를 사용하여야 한다.
- 함수 이름은 함수 몸체 내부에서만 유효한 식별자이므로 함수 이름으로 함수를 호출할 수 없다. 따라서 함수를 호출할 때는 함수 이름이 아니라 함수 객체를 가리키는 식별자를 사용하여야 한다.
- 자바스크립트 엔진은 함수 선언문의 함수 이름으로 식별자를 암묵적 생성하고 생성된 함수 객체를 할당하므로 함수 표현식과 유사하게 동작하는 것처럼 보이지만 정확히 동일하게 동작하지는 않는다.

- 함수 선언문은 “표현식이 아닌 문”이고 함수 표현식은 “표현식인 문”이다.



## 4.3. 함수 생성 시점과 함수 호이스팅

```javascript
// 함수 참조
console.dir(add); // f add(x, y)
console.dir(sub); // undefined

// 함수 호출
console.log(add(2, 5)); // 7
console.log(sub(2, 5)); // TypeError: sub is not a function

// 함수 선언문
function add(x, y) {
  return x + y;
}

// 함수 표현식
var sub = function (x, y) {
  return x - y;
};
```

**함수 선언문으로 정의한 함수와 함수 표현식으로 정의한 함수의 생성 시점은 다르다**. 따라서 함수 선언문으로 정의한 함수는 함수 선언문 이전에 호출할 수 있는 반면, 함수 표현식으로 정의한 함수는 함수 표현식 이전에 호출할 수 없다. 

함수 선언문도 모든 선언문처럼 코드가 한줄씩 순차적으로 실행되는 시점인 런타임(runtime) 이전에 자바스크립트 엔진에 의해 먼저 실행된다. 

함수 선언문으로 함수를 정의하면 런타임 이전에 함수 객체가 먼저 생성되고 자바스크립트 엔진은 함수 이름과 동일한 이름의 식별자를 암묵적으로 생성하여 생성된 함수 객체를 할당한다.

즉, 코드가 한줄씩 순차적으로 실행되기 시작하는 런타임에는 이미 함수 객체가 생성되어 있고 함수 이름과 동일한 식별자에 할당까지 완료된 상태다. 따라서 함수 선언문 이전에 함수를 참조하거나 호출할 수 있다. 

이처럼 **함수 선언문이 코드의 선두로 끌어 올려진 것처럼 동작하는 자바스크립트 고유의 특징을 함수 호이스팅(Function hoisting)이라 한다**.

함수 표현식은 변수 할당문의 값이 함수 리터럴인 문이다. 따라서 함수 표현식은 변수 선언문과 변수 할당문을 한번에 기술한 축약 표현과 동일하게 동작한다. 변수 선언은 *런타임 이전*에 실행되어 undefined로 초기화되지만, **변수 할당문의 값은 런타임에 평가되므로 함수 표현식의 함수 리터럴도 할당문이 실행되는 런타임에 평가되어 함수 객체가 된다.**

따라서 **함수 표현식으로 함수를 정의하면 함수 호이스팅이 발생하는 것이 아니라 변수 호이스팅이 발생한다.**

함수 표현식 이전에 함수를 참조하면 undefined로 평가된다. 이때 함수를 호출하면 undefined를 호출하는 것과 마찬가지이므로 타입 에러(TypeError)가 발생한다. 따라서 함수 표현식으로 정의한 함수는 반드시 함수 표현식 이후에 참조 또는 호출하여야 한다.



### 4.4. Function 생성자 함수

자바스크립트가 기본 제공하는 빌트인 함수인 Function 생성자 함수에 매개변수 목록과 함수 몸체를 문자열로 전달하면서 `new` 연산자와 함계 호출하면 함수 객체를 생성하여 반환한다.

```javascript
var add = new Function('x', 'y', 'return x + y');

console.log(add(2, 5)); // 7
```

Function 생성자 함수로 함수를 생성하는 방식은 일반적이지 않으며 바람직하지도 않다. Function 생성자 함수로 생성한 함수는 클로저를 생성하지 않는 등, 함수 선언문이나 함수 표현식으로 생성한 함수와 다르게 동작한다.



### 4.5. 화살표 함수

ES6에서 새롭게 도입된 화살표 함수(arrow function)는 function 키워드 대신 화살표(`=>`, fat arrow) 를 사용하여 간략한 방법으로 함수를 선언할 수 있다. 화살표 함수는 항상 익명 함수로 정의한다.

```javascript
// 화살표 함수
const add = (x, y) => x + y;

console.log(add(2, 5)); // 7
```

화살표 함수는 기존의 함수 선언문 또는 함수 표현식을 완전히 대체하기 위해 디자인된 것은 아니다. 화살표 함수는 기존의 함수보다 표현이 간략한 것만이 아니라 내부 동작 또한 간략화되어 있다. 화살표 함수는 생성자 함수로 사용할 수 없으며 기존의 함수와 `this` 바인딩 방식이 다르고, prototype 프로퍼티가 없으며 arguments 객체를 생성하지 않는다.



## 5. 함수 호출

함수는 함수를 가리키는 식별자와 한 쌍의 소괄호인 함수 호출 연산자로 호출한다. 함수 호출 연산자 내에는 0개 이상의 인수(argument)를 쉼표로 구분하여 나열한다. 함수를 호출하면 현재의 실행 흐름을 중단하고 호출된 함수로 컨트롤을 넘긴다. 이때 매개변수에 인수가 순서대로 할당되고 함수 몸체의 문들이 실행되기 시작한다.

  

### 5.1. 매개변수와 인수

함수의 실행을 위해 필요한 값을 함수 외부에서 함수 내부로 전달할 필요가 있는 경우, **매개변수(parameter, 인자)**를 통해 **인수(argument)**를 전달한다. **인수**는 **값으로 평가될 수 있는 표현식이어야 한다**. 인수는 함수를 호출할 때 지정하며 개수와 타입에 제한이 없다.

```javascript
// 함수 선언문
function add(x, y) {
  return x + y;
}

// 함수 호출
// 인수 1과 2는 매개변수 x와 y에 순서대로 할당되고 함수 몸체의 문들이 실행된다.
var result = add(1, 2);
```

매개변수는 함수를 정의할 때 선언하며 함수 몸체 내부에서 변수와 동일하게 취급된다. 즉, **함수가 호출되면 함수 몸체 내에서 암묵적으로 매개변수가 생성되고 일반 변수와 마찬가지로 undefined로 초기화된 이후 인수가 순서대로 할당된다**. 함수가 호출될 때마다 매개변수는 이와 같은 단계를 거친다.

```javascript
function add(x, y) {
  // 2. 매개변수 생성 및 초기화
  // var x = undefined;
  // var y = undefined;
  // x = 2;
  // y = 5;
  return x + y;
}

var result = add(2, 5); // 1. 인수(2, 5) 전달 및 호출
```

매개변수는 함수 몸체 내부에서만 참조할 수 있고 함수 몸체 외부에서는 참조할 수 없다. 즉 **매개변수의 스코프**는 **함수 내부**이다.

```javascript
function add(x, y) { 
   console.log(x, y); // 2 5 
   return x + y;
}

add(2, 5);

// 함수 add의 매개변수 x, y는 함수 몸체 내부에서만 참조할 수 있다.
console.log(x, y); // ReferenceError: x is not defined
```

함수는 매개변수의 개수와 인수의 개수가 일치하는지 체크하지 않는다. 즉, **함수를 호출할 때 매개변수의 개수만큼 인수를 전달하는 것이 일반적이지만 그렇지 않은 경우에도 에러가 발생하지는 않는다.** 인수가 부족하여 **인수가 할당되지 않은 매개변수의 값은 undefined이다**.

```javascript
function add(x, y) {
  return x + y; // 2 + undefined
}

console.log(add(2)); // NaN
```

인수가 매개변수보다 더 많은 경우, 초과되는 인수는 무시된다.

```javascript
function add(x, y) {
  return x + y;
}

console.log(add(2, 5, 10)); // 7
```

사실 초과된 인수가 그냥 버려지는 것은 아니다. 모든 인수는 암묵적으로 arguments 객체의 프로퍼티로 보관된다.

```javascript
function add(x, y) {
  console.log(arguments);
  // Arguments(3) [2, 5, 10, callee: ƒ, Symbol(Symbol.iterator): ƒ]
  
  return x + y;
}

add(2, 5, 10);
```

arguments 객체는 **매개변수 개수를 확정할 수 없는 가변 인자 함수를 구현할 때 유용하게 사용된다.**



## 5.2. 인수 확인

1. 자바스크립트 함수는 매개변수와 인수의 개수가 일치하는지 확인하지 않는다.

2. 자바스크립트 함수는 매개변수의 타입을 사전에 지정할 수 없다.



자바스크립트의 경우, 함수를 정의할 때 적절한 인수가 전달되었는지 확인이 필요하다.

```javascript
function add(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new TypeError('인수는 모두 숫자값이어야 합니다.');
  }
  return x + y;
}

console.log(add(2)); // TypeError: 인수는 모두 숫자 값이어야 합니다.
console.log(add('a', 'b')); // TypeError: 인수는 모두 숫자 값이어야 합니다.
```

이처럼 함수 내부에서 적절한 인수가 전달되었는지 확인하더라도 부적절한 호출을 사전에 방지할 수는 없고 에러는 런타임에 발생하게 된다. 따라서 TypesScript와 같은 정적 타입을 선언할 수 있는 자바스크 립트의 상위 확장을 도입하여 컴파일 시점에 부적절한 호출을 방지할 수 있도록 하는 것도 하나의 방법이 다.



인수가 전달되지 않은 경우, 단축 평가를 사용하여 매개변수에 기본값을 할당하는 방법이 있다.

```javascript
function add(a, b, c) {
  a = a || 0;
  b = b || 0;
  c = c || 0;
  return a + b + c;
}

console.log(add(1, 2, 3));  //  6
console.log(add(1, 2));  //  3
console.log(add(1));  //  1
console.log(add());  //  0
```

**ES6에서 도입된 매개변수 기본값을 사용하면 함수 내에서 수행하던 인수 체크 및 초기화를 간소화할 수 있다.** 매개변수 기본값은 매개변수에 인수를 전달하지 않았을 경우와 undefined를 전달한 경우에만 유효하다.

```javascript
function add(a = 0, b = 0, c = 0) {
  return a + b + c;
}

console.log(add(1, 2, 3));  //  6
console.log(add(1, 2));  //  3
console.log(add(1));  //  1
console.log(add());  //  0
```



### 5.3. 매개변수의 최대 개수

함수의 매개변수는 코드 이해에 방해가 되는 요소이므로 이상적인 매개변수 개수는 0개이며 적을 수록 좋다. 매개변수의 개수가 많다는 것은 함수가 여러가지 일을 한다는 증거이므로 바람직하지 않다. 또한 매개변수는 순서에 의미가 있어 여러 개의 매개변수로 함수를 호출할 때 전달해야 할 인수의 순서를 고려해야 한다.

따라서 매개변수는 최대 3개 이상을 넘지 않는 것을 권장한다. 만약 그 이상의 매개변수가 필요하다면 하나의 매개변수를 선언하고 객체를 인수로 전달받는 것이 유리하다.

아래는 jQuery의 ajax 메소드에 객체를 인수로 전달하는 예제이다.

```javascript
$.ajax({
  method: 'POST',
  url: '/user',
  data: { id: 1, name: 'Lee' },
  cache: false
});
```

객체를 인수로 사용하는 경우, 프로퍼티 키만 정확히 지정하면 매개변수의 순서를 신경쓰지 않아도 된다. 또한 명시적으로 값의 의미를 설명하는 프로퍼티 키를 사용하게 되므로 코드의 가독성도 좋아지고 실수도 줄어드는 효과가 있다.

하지만 함수 외부에서 함수 내부로 전달한 객체를 함수 내부에서 변경하면, 함수 외부의 객체가 변경되는 부수 효과가 발생한다.



### 5.4. 반환문

함수는 return 키워드와 반환값으로 이루어진 반환문을 사용하여 실행 결과를 함수 외부로 반환
(return)할 수 있다.

```javascript
function multiply(x, y) {
  return x * y; // 값의 반환
}

// 함수는 반환값으로 평가된다.
console.log(multiply(3, 5)); // 15
```

multiply 함수는 return 키워드를 사용해 두개의 인수를 전달받아서 곱한 결과값을 반환한다.

함수 호출은 표현식이다. 이때 함수 호출 표현식은 return 키워드가 반환한 값, 즉 반환값으로 평가된다.

**반환문은 두가지 역할을 한다.**

1. 함수의 실행을 중단하고 함수 몸체를 빠져나간다. 따라서 반환문 이후에 다른 문이 존재하면 그 문은 실행되지 않고 무시된다.

```javascript
function multiply(x, y) { 
    return x * y; // 반환문 
    // 반환문 이후에 다른 문이 존재하면 그 문은 실행되지 않고 무시된다.
	console.log('실행되지 않는다.');
}

console.log(multiply(3, 5));  //  15
```

2. 반환문은 return 키워드 뒤에 지정한 값을 반환한다. **return 키워드 뒤에 반환값을 명시적으로 지정하지 않으면 undefined가 반환된다.**

```javascript
function foo () {    
    // return 키워드 뒤에 반환값을 명시적으로 지정하지 않으면 undefined가 반환된다.
	return;
}

console.log(foo());  //  undefined
```



반환문은 생략할 수 있다. 이때 함수는 함수 몸체의 마지막 문까지 실행한 후 암묵적으로 undefined를 반환한다.

```javascript
function foo () { 
    // 반환문을 생략하면 암묵적으로 undefined가 반환된다.
}

console.log(foo());  //  undefined
```



**반환문은 함수 몸체 내부에서만 사용할 수 있다.** 전역에서 반환문을 사용하면 문법 에러(SyntaxError)가 발생한다.

```javascript
if (1) {
  return; // SyntaxError: Illegal return statement
}
```



## 6. 참조에 의한 전달과 외부 상태의 변경

원시 값은 값에 의한 전달(pass by value), 객체는 참조에 의한 전달(pass by reference) 방식으로 동작한다. 매개변수도 함수 몸체 내부에서 변수와 동일하게 취급되므로 매개변수 또한 타입에 따라 값에 의한 전달, 참조에 의한 전달 방식을 그대로 따른다.

함수의 매개변수에 값을 전달하는 방식을 값에 의한 호출(Call by value), 참조에 의한 호출(Call by reference)로 구별해 부르는 경우도 있으나 동작 방식은 값에 의한 전달, 참조에 의한 전달과 동일하다.

```javascript
// 매개변수 primitive는 원시값을 전달받고, 매개변수 obj는 객체를 전달 받는다.
function changeVal(primitive, obj) {
  primitive += 100;
  obj.name = 'Hwang';
}

// 외부 상태
var num = 100;
var person = { name: 'Kim' };

console.log(num); // 100
console.log(person); // { name: 'Kim' }

// 원시값은 값 자체가 복사되어 전달되고 객체는 참조값이 복사되어 전달된다.
changeVal(num, person);

// 원시 값은 원본이 훼손되지 않지만, 객체는 원본이 훼손된다.
console.log(num); // 100
console.log(person); // { name: 'Hwang' }
```

원시 타입 인수를 전달받은 매개변수 primitive의 경우, **원시 값은 변경 불가능한 값(immutable value)**이므로 직접 변경할 수 없기 때문에 재할당을 통해 할당된 원시값을 새로운 원시값으로 교체하였고, 객체 타입 인수를 전달받은 매개변수 obj의 경우, **객체는 변경 가능한 값(mutable value)**이므로 재할당 없이 직접 할당된 객체를 변경하였다.

이때 원시 타입 인수는 값 자체가 복사되어 매개변수에 전달되기 때문에 함수 몸체에서 그 값을 변경하여도 원본은 훼손되지 않는다. 즉, **함수 외부에서 함부 몸체 내부로 전달한 원시값의 원본을 변경하는 어떠한 부수 효과(side-effect)도 발생하지 않는다.**

객체 타입 인수는 참조값이 복사되어 매개변수에 전달되기 때문에 함수 몸체에서 참조값을 통해 참조한 객체를 변경할 경우 원본이 훼손된다. 즉, **함수 외부에서 함수 몸체 내부로 전달한 참조값에 의해 원본 객체가 변경되는 부수 효과가 발생한다.**

이러한 현상은 **객체가 변경할 수 있는 값이며 참조에 의한 전달 방식으로 동작하기 때문에 발생하는 부작용이다.** 복잡한 코드에서 의도치 않은 객체의 변경을 추적하는 것은 어려운 일이다.

이러한 문제의 해결 방법 중 하나는 객체를 불변 객체(immutable object)로만들어 사용하는 것이다. 객체의 복사본을 새롭게 생성하는 비용은 들지만 객체를 마치 원시 값처럼 변경 불가능한 값으로 동작하게 만드는 것이다.

이를 통해 객체의 상태 변경을 원천봉쇄하고 객체의 상태 변경이 필요한 경우에는 참조가 아닌 객체의 깊은 복사(Deep copy)를 통해 새로운 객체를 생성하여 재할당을 통해 교체한다.

외부 상태를 변경하지 않고 의존하지도 않는 함수를 순수 함수라 하며, 순수 함수를 통해 부수 효과(Side effect)를 최대한 억제하여 오류를 피하고 프로그램의 안정성을 높이려는 프로그래밍 패러다임을 함수형 프로그래밍이라 한다.



## 7. 다양한 함수의 형태

### 7.1. 즉시실행함수

함수 정의와 동시에 즉시 호출되는 함수를 즉시 실행 함수(IIFE, Immediately Invoked Function Expression)라고 한다. 

**즉시 실행 함수는 단 한번만 호출**되며 다시 호출할 수는 없다. 따라서 즉시 실행
함수는 함수 이름이 없는 **익명 함수를 사용하는 것이 일반적**이다.

```javascript
// 익명 즉시 실행 함수
(function () {
 var a = 3;
 var b = 5;
 return a * b;
}());
```



함수 이름이 있는 기명 즉시 실행 함수도 사용할 수 있다. 하지만 **그룹 연산자 (…) 내의 기명 함수는 함수 선언문이 아니라 함수 리터럴로 평가**되며 함수 이름은 함수 몸체에서만 참조할 수 있는 식별자이므로 즉시 실행 함수를 다시 호출할 수는 없다.

```javascript
// 기명 즉시 실행 함수
(function foo() {
 var a = 3;
 var b = 5;
 return a * b;
}());

foo(); // ReferenceError: foo is not defined
```

즉시 실행 함수는 반드시 그룹 연산자 (…)로 감싸 주어야 한다. 그룹 연산자로 함수를 묶은 이유는 먼저 함수를 평가하여 함수 객체를 생성하기 위함이다. 따라서 먼저 함수를 평가하여 함수 객체를 생성할 수 있다면 아래와 같이 그룹 연산자 이외의 연산자를 사용할 수 도 있다.

즉시 실행 함수도 일반 함수처럼 값을 반환할 수 있고 인수를 전달할 수도 있다.

```javascript
// 즉시 실행 함수도 일반 함수처럼 값을 반환할 수 있다.
var res = (function () {
 var a = 3;
 var b = 5;
 return a * b;
}());

console.log(res); // 15

// 즉시 실행 함수에도 일반 함수처럼 인수를 전달할 수 있다.
res = (function (a, b) {
 return a * b;
}(3, 5));

console.log(res); // 15
```

즉시 실행 함수 내에 코드를 모아 두면 혹시 있을 수도 있는 변수나 함수 이름의 충돌을 방지할 수 있다. 



## 7.2. 재귀 함수

함수가 자기 자신을 호출하는 것을 재귀 호출(recursive call)이라 한다. 재귀 함수(recursive function)는 자기 자신을 호출하는 행위, 즉 재귀 호출을 수행하는 함수를 말한다.

재귀 호출을 통해 반복 연산을 간단하게 구현할 수 있다. 예를 들어 팩토리얼은 재귀 호출로 간단히 구현할 수 있다.

```javascript
// n! = 1 * 2 * ... * (n - 1) * n
function factorial(n) {
  // 탈출 조건: n이 1 이하일 때 재귀 호출을 멈춘다.
  if (n <= 1) return 1;
  // 재귀 호출
  return n * factorial(n - 1);
}

console.log(factorial(0)); // 0! = 1
console.log(factorial(1)); // 1! = 1
console.log(factorial(2)); // 2! = 2 * 1 = 2
console.log(factorial(3)); // 3! = 3 * 2 * 1 = 6
console.log(factorial(4)); // 4! = 4 * 3 * 1 * 1 = 24
console.log(factorial(5)); // 5! = 5 * 4 * 3 * 2 * 1 = 120
```

재귀 함수는 자신을 무한 재귀 호출한다. 따라서 재귀 함수 내에는 재귀 호출을 멈출 수 있는 탈출 조건을 반드시 만들어야 한다. 그러지 않은 경우, 함수가 무한 호출되어 stack overflow 에러가 발생한다.



## 7.3. 중첩 함수

함수 내부에 정의된 함수를 중첩 함수(nested function) 또는 내부 함수(inner function)라 한다. 그리고 중첩 함수를 포함하는 함수는 외부 함수(outer function)라 부른다. 일반적으로 중첩 함수는 자신을 포함하는 외부 함수를 돕는 헬퍼 함수(helper function)의 역할을 한다.

```javascript
function outer() {
  var x = 1;
  
  // 중첩 함수
  function inner() {
    var y = 2;
    // 외부 함수의 변수를 참조할 수 있다.
    console.log(x + y); // 3
  }
  
  inner();
}

outer();
```

ES6부터 함수 정의는 **문이 위치할 수 있는 문맥**이라면 어디든지 가능하다. 함수 선언문의 경우, ES6 이전에는 코드의 최상위 또는 다른 함수 내부에서만 정의할 수 있었으나 ES6부터는 if 문이나 for 문 등의 코드 블록 내에서도 정의할 수 있다.



## 7.4. 콜백 함수

**함수의 매개변수를 통해 전달되는 함수를 콜백 함수(Callback function)라고 하며, 콜백 함수를
매개변수를 통해 전달받은 함수를 고차 함수(Higher-Order Function, HOF)라고 한다**. 매개변수를
통해 함수를 전달받거나 반환값으로 함수를 반환하는 함수를 함수형 프로그래밍 패러다임에서 고차 함수라 한다.

중첩 함수가 외부 함수를 돕는 헬퍼 함수의 역할을 하는 것처럼,  콜백 함수는 고차 함수에 전달되어 헬퍼함수의 역할을 한다. 단, 중첩 함수는 고정되어 있어서 교체하기 곤란하지만 콜백 함수는 함수 외부에서 고차 함수 내부로 주입하기 때문에 자유롭게 교체할 수 있다는 장점이 있다. 즉, **고차 함수는 콜백 함수를 자신의 일부분으로 합성한다**.

고차 함수는 매개변수를 통해 전달받은 콜백 함수의 호출 시점을 결정하여 호출한다.

콜백 함수는 고차 함수에 의해 호출되며 이때 필요에 따라 인수도 전달될 수 있다. 따라서 고차 함수에 콜백 함수를 전달할 때, **콜백 함수를 호출하지 않고 함수 자체를 전달해야 한다**.

콜백 함수가 고차 함수 내부에만 호출된다면 콜백 함수를 익명 함수 리터럴로 정의하면서 곧바로 고차 함수에 전달하는 것이 일반적이다.

```javascript
// 익명 함수 리터럴을 콜백 함수로 매개변수에 전달한다.
repeat(5, function (i) {
  if (i % 2) console.log(i);
}); // 1 3
```

이때 콜백 함수로서 전달된 함수 리터럴은 **고차 함수가 호출될 때마다 평가되어 함수 객체를 생성한다.** 따라서 콜백 함수를 다른 곳에서도 호출할 필요가 있거나, 콜백 함수를 전달받는 함수가 자주 호출된다면 함수 외부에서 콜백 함수를 정의한 후 함수 참조를 고차 함수에 전달하는 것이 효율적이다.

```javascript
// logOdds 함수는 단 한번만 생성된다.
var logOdds = function (i) {
  if (i % 2) console.log(i);
};

// 고차 함수에 함수 참조를 전달한다.
repeat(5, logOdds); // 1 3
```



### 7.5. 순수 함수와 비순수 함수

함수형 프로그래밍에서는 어떤 외부 상태에 의존하지도 않고 변경시키지도 않는, **부수 효과가 없는 함수를 순수 함수(pure function)**, 외부 상태를 변경시키는, **부수 효과가 있는 함수를 비순수 함수(impure function)**라고 부른다.

**순수 함수는 동일한 인수가 전달되면 언제나 동일한 값을 반환하는 함수를 말한다.** 즉, 순수 함수는 어떤 외부 상태에도 의존하지 않고 오직 매개변수를 통해 함수 내부로 전달된 인수에게만 의존하여 반환값을 만든다. 순수 함수의 또 다른 특징은 **함수의 외부 상태를 변경하지 않는다는 것**이다.

```javascript
var count = 0; // 현재 카운트를 나타내는 상태

// 외부 상태에 의존하지 않으며 변경하지도 않는 순수 함수
function increase(n) {
  return ++n;
}

count = increase(count); // 1
count = increase(count); // 2
```

반대로 함수의 외부 상태에 의존하여 외부 상태에 따라 반환값이 달라지는 함수를 비순수 함수라고 한다. 비순수 함수의 또 다른 특징은 함수의 외부 상태를 변경하는 부수 효과(side effect)가 있다는 것이다.

```javascript
var count = 0; // 현재 카운트를 나타내는 상태: increase 함수에 의해 변화한다.

function increase() {
  return ++count; // 외부 상태 변경
}

increase(); // count = 1
increase(); // count = 2
```

함수 내부에서 외부 상태를 직접 참조하면 외부 상태에 의존하게 되어 반환값이 변할 수 있고, 외부 상태도 변경할 수 있으므로 비순수 함수가 된다. 함수 내부에서 외부 상태를 직접 참조하지 않더라도, 매개변수를 통해 객체를 전달받으면 비순수 함수가 된다.

**함수가 외부 상태를 변경하면 상태 변화를 추적하기 어려워진다.** 따라서 함수 외부 상태의 변경을 지양하는 순수 함수를 사용하는 것이 좋다.



## 참고자료

- 이웅모.(2020). 모던 자바스크립트 Deep Dive. 파주: 위키북스.