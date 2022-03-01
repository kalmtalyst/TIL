# 함수와 일급 객체

## 1. 일급 객체

아래와 같은 조건을 만족하는 객체를 일급 객체(first-class object)라 한다.

1. 무명의 리터럴로 생성할 수 있다. 즉, 런타임에 생성이 가능하다.
2. 변수나 자료 구조(객체, 배열 등)에 저장할 수 있다.
3. 함수의 매개 변수에게 전달할 수 있다.
4. 함수의 결과값으로 반환할 수 있다.

자바스크립트의 함수는 위의 조건을 모두 만족하므로 일급 객체이다. 일급 객체로서 함수가 가지는 가장 큰 특징은 값으로 평가될 수 있다는 것이다. 이는 함수형 프로그래밍을 가능케하는 자바스크립트의 장점 중에 하나이다.

```javascript
// 1. 함수는 무명의 리터럴로 생성할 수 있다.
// 2. 함수는 변수에 저장할 수 있다.
// 런타임(할당 단계)에 함수 리터럴이 평가되어 함수 객체가 생성되고 변수에 할당된다.
const increase = function (num) {
  return ++num;
};

const decrease = function (num) {
  return --num;
};

// 2. 함수는 자료 구조(객체)에 저장할 수 있다.
const predicates = { increase, decrease };

// 3. 함수는 매개 변수에게 전달될 수 있다.
// 4. 함수는 결과값으로 반환될 수 있다.
function makeCounter(predicate) {
  let num = 0;

  return function () {
    num = predicate(num);
    return num;
  };
}

// 3. 함수는 매개 변수에게 전달될 수 있다.
const increaser = makeCounter(predicates.increase);
console.log(increaser()); // 1
console.log(increaser()); // 2

// 3. 함수는 매개 변수에게 함수를 전달할 수 있다.
const decreaser = makeCounter(predicates.decrease);
console.log(decreaser()); // -1
console.log(decreaser()); // -2
```

## 2. 함수 객체의 프로퍼티

함수는 객체이므로 프로퍼티를 가질 수 있다. 브라우저 콘솔에서 `console.dir` 메소드를 사용하여 함수 객체의 내부를 들여다 보면 아래와 같이 출력된다.

<img src="C:\Users\soarm\Downloads\property.jpg" style="zoom: 80%;" />

일반 객체에는 없는 `arguments`, `caller`, `length`, `name`, `prototype ` 프로퍼티가 함수 객체에는 존재한다. square 함수의 모든 프로퍼티의 프로퍼티 어트리뷰트를 `Object.getOwnPropertyDescriptors` 메소드로 확인해 보면 아래와 같다.

```javascript
console.log(Object.getOwnPropertyDescriptors(square));
/*
{
  length: {value: 1, writable: false, enumerable: false, configurable: true},
  name: {value: "square", writable: false, enumerable: false, configurable: true},
  arguments: {value: null, writable: false, enumerable: false, configurable: false},
  caller: {value: null, writable: false, enumerable: false, configurable: false},
  prototype: {value: {...}, writable: true, enumerable: false, configurable: false}
}
*/

// __proto__는 square 함수의 프로퍼티가 아니다.
console.log(Object.getOwnPropertyDescriptor(square, "__proto__"));
// undefined

// __proto__는 Object.prototype 객체의 접근자 프로퍼티이다.
// square 함수는 Object.prototype 객체로부터 __proto__ 접근자 프로퍼티를 상속받는다.
console.log(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__"));
// {get: ƒ, set: ƒ, enumerable: false, configurable: true}
```

`arguments`, `caller`, `length`, `name`, `prototype` 프로퍼티는 모두 함수 객체의 **데이터 프로퍼티**이다. 하지만 `__proto__`는 접근자 프로퍼티이며 `Object.prototype` 객체의 프로퍼티를 상속 받은 것이다.

### 2.1. arguments 프로퍼티

함수 객체의 arguments 프로퍼티 값은 arguments 객체이다. **arguments 객체**는 함수 호출 시 전달된 인수(argument)들의 정보를 담고 있는 **순회 가능한**(iterable) **유사 배열 객체**(array-like object)이며 함수 내부에서 지역 변수처럼 사용된다. 함수 외부에서는 참조할 수 없다.

> arguments 프로퍼티
> 함수 객체의 arguments 프로퍼티는 현재 일부 브라우저에서 지원하고 있지만 ES3부터 표준에서 폐지(deprecated) 되었다. 따라서 Function.arguments와 같은 사용 방법은 권장되지 않으며 함수 내부에서 지역 변수처럼 사용할 수 있는 arguments 객체를 참조하도록 한다.

함수를 정의할 때 선언한 매개변수는 함수가 호출되면 함수 몸체 내에서 암묵적으로 매개변수가 선언되고 undefined로 초기화된 이후 인수가 할당된다.

자바스크립트는 함수의 매개변수와 인수의 개수가 일치하는지 확인하지 않는다. 따라서 함수 호출 시 매개변수 개수만큼 인수를 전달하지 않아도 에러가 발생하지 않는다. 또 초과된 인수는 버려지지 않으며 모든 인수는 암묵적으로 arguments 객체의 프로퍼티로 보관된다.

선언된 매개변수의 개수와 함수 호출 시에 전달하는 인수의 개수를 확인하지 않은 자바스크립트의 특성때문에 함수가 호출되면 인수 개수를 확인하고 이에 따라 함수의 동작을 달리 정의할 필요가 있을 수 있다. 이때 유용하게 사용되는 것이 arguments 객체이다.

arguments 객체는 매개변수 개수를 확정할 수 없는 **가변 인자 함수**를 구현할 때 유용하게 사용된다.

```javascript
function sum() {
 let res = 0;

// arguments 객체는 length 프로퍼티가 있는 유사 배열 객체이므로 for 문으로 순회할 수
있다.
 for (let i = 0; i < arguments.length; i ){
 	res += arguments[i];
 }

 return res;
}

console.log(sum()); 		// 0
console.log(sum(1, 2)); 	// 3
console.log(sum(1, 2, 3));  // 6
```

arguments 객체는 배열의 형태로 인자 정보를 담고 있지만 실제 배열이 아닌 유사 배열 객체(array-like object)이다. 유사 배열 객체란 length 프로퍼티를 가진 객체로 for 문으로 순회할 수 있는 객체를 말한다.

> 유사배열객체와 이터러블
> ES6에서 도입된 이터레이션 프로토콜을 준수하면 순회 가능한 자료 구조인 이터러블이 된다. 이터러블의 개념이 없었던 ES5에서 arguments 객체는 유사 배열 객체로 구분되었다. 하지만 이터러블이 도입된 ES6부터 arguments 객체는 유사 배열 객체이면서 동시에 이터러블이다.

유사 배열 객체는 배열이 아니므로 배열 메소드를 사용할 경우 에러가 발생한다. 따라서 배열 메소드를 사용하려면 `Function.prototype.call`, `Function.prototype.apply`를 사용해 간접 호출해야 하는 번거로움이 있다.

이러한 번거로움을 해결하기 위해 ES6에서는 Rest 파라미터를 도입했다.

```javascript
// ES6 Rest parameter
function sum(...args) {
  return args.reduce((pre, cur) => pre + cur, 0);
}

console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3, 4, 5)); // 15
```

## 2.2. caller 프로퍼티

함수 객체의 caller 프로퍼티는 함수 자신을 호출한 함수를 가리킨다.

```javascript
function foo(func) {
  return func();
}

function bar() {
  return "caller : " + bar.caller;
}

// 브라우저에서의 실행한 결과
console.log(foo(bar)); // caller : function foo(func) { ... }
console.log(bar()); // caller : null
```

## 2.3. length 프로퍼티

함수 객체의 length 프로퍼티는 함수 정의 시 선언한 **매개변수의 개수**를 가리킨다.

```javascript
function foo() {}
console.log(foo.length); // 0

function bar(x) {
  return x;
}
console.log(bar.length); // 1

function baz(x, y) {
  return x * y;
}
console.log(baz.length); // 2
```

arguments 객체의 length 프로퍼티는 인자(argument)의 개수를 가리키고, 함수 객체의
length 프로퍼티는 매개변수(parameter)의 개수를 가리킨다.

## 2.4. name 프로퍼티

name 프로퍼티는 ES5와 ES6에서 동작을 달리한다. 익명 함수 표현식의 경우, ES5에서 name 프로퍼티는 빈 문자열을 값으로 갖지만 ES6에서는 함수 객체를 가리키는 변수 이름을 값으로 갖는다.

```javascript
// 기명 함수 표현식
var namedFunc = function foo() {};
console.log(namedFunc.name);
foo;
// 익명 함수 표현식
var anonymousFunc = function () {};

// ES5: name 프로퍼티는 빈 문자열을 값으로 갖는다.
// ES6: name 프로퍼티는 함수 객체를 가리키는 변수 이름을 값으로 갖는다.
console.log(anonymousFunc.name); // anonymousFunc

// 함수 선언문(Function declaration)
function bar() {}
console.log(bar.name); // bar
```

함수 이름과 함수 객체를 가리키는 변수 이름은 의미가 다르다. 함수를 호출할 때는 함수 이름이 아닌 함수 객체를 가리키는 변수 이름으로 호출한다.

## 2.5. **proto** 접근자 프로퍼티

모든 객체는 [[Prototype]] 이라는 내부 슬롯을 갖는다. [[Prototype]] 내부 슬롯은 객체 지향 프로
그래밍의 상속을 구현하는 프로토타입 객체를 가리킨다.

`__proto__` 프로퍼티는 [[Prototype]] 내부 슬롯이 가리키는 **프로토타입 객체에 접근하기 위해 사용**하는 접근자 프로퍼티이다. 내부 슬롯에는 직접 접근할 수 없고 **간접적인 접근 방법을 제공하는 경우에 한하여 접근**할 수 있다.

## 2.6. prototype 프로퍼티

prototype 프로퍼티는 함수 객체만이 소유하는 프로퍼티이다. 일반 객체에는 prototype 프로퍼티가
없다.

```javascript
// 함수 객체는 prototype 프로퍼티를 소유한다.
console.log(function () {}.hasOwnProperty("prototype")); // true

// 일반 객체는 prototype 프로퍼티를 소유하지 않는다.
console.log({}.hasOwnProperty("prototype")); // false
```

prototype 프로퍼티는 함수가 객체를 생성하는 생성자 함수로 사용될 때, 생성자 함수가 생성할 인스턴스의 프로토타입 객체를 가리킨다.

## 참고자료

- 이웅모.(2020). 모던 자바스크립트 Deep Dive. 파주: 위키북스.
