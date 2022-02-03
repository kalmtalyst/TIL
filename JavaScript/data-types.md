# 데이터 타입

데이터 타입(data type)은 값의 종류를 말한다. 자바스크립트의 모든 값은 데이터 타입을 갖는다.

자바스크립트(ES6)는 7개의 데이터 타입을 제공한다. 7개의 데이터 타입은 원시 타입(primitive type)과 객체 타입(object / reference type)으로 분류할 수 있다.

- 원시 타입(primitive type)
  - 숫자(number) 타입: 숫자. 정수와 실수 구분없이 하나의 숫자 타입만 존재
  - 문자열(string) 타입: 문자열
  - 불리언(boolean) 타입: 논리적 참(true)과 거짓(false)
  - undefined 타입: var 키워드로 선언된 변수에 암묵적으로 할당되는 값
  - null 타입: 값이 없다는 것을 의도적으로 명시할 때 사용하는 값
  - Symbol 타입: ES6에서 새롭게 추가된 7번째 타입
- 객체 타입 (object/reference type): 객체, 함수, 배열 등

각각의 데이터 타입 별로 확보해야 할 메모리 공간의 크기도 다르고 메모리에 저장되는 2진수도 다르며 읽어 들여 해석하는 방식도 다르다. 자바스크립트 엔진은 타입을 구별하여 값을 취급한다. 



## 1. 숫자 타입

C나 Java의 경우, 정수와 실수를 구분하여 int, long, oat, double 등과 같은 다양한 숫자 타입이 존재한다. 하지만 자바스크립트는 독특하게 하나의 숫자 타입만 존재한다.

ECMAScript 사양에 따르면 숫자 타입의 값은 배정밀도 64비트 부동소수점 형식(double-precision
64-bit oating-point format)을 따른다. 즉, **모든 수를 실수로 처리**하며 정수만을 표현하기 위한 데이터 타입(integer type)이 별도로 존재하지 않는다.

```javascript
// 모두 숫자 타입이다.
var integer = 10; // 정수
var double = 10.12; // 실수
var negative = -20; // 음의 정수
```

정수, 실수, 2진수, 8진수, 16진수 리터럴은 모두 메모리에 배정밀도 64비트 부동소수점 형식의 2진수로 저장된다. 자바스크립트는 2진수, 8진수, 16진수를 표현하기 위한 데이터 타입을 제공하지 않기 때문에 이들 값을 참조하면 모두 10진수로 해석된다.

```javascript
var binary = 0b1000001; // 2진수
var octal = 0o101; // 8진수
var hex = 0x41; // 16진수

// 표기법만 다를 뿐 모두 같은 값이다.
console.log(binary); // 65
console.log(octal); // 65
console.log(hex); // 65
console.log(binary === octal); // true
console.log(octal === hex); // true
```

자바스크립트의 숫자 타입은 **모든 수를 실수로 처리**한다. 정수로 표시된다 해도 사실은 실수다. 따라서 정수로 표시되는 수 끼리 나누더라도 실수가 나올 수 있다.

```javascript
// 숫자 타입은 모두 실수로 처리된다.
console.log(1 === 1.0); // true
console.log(4 / 2); // 2
console.log(3 / 2); // 1.5
```

숫자 타입은 3가지 특별한 값들도 표현할 수 있다.

1. Innity: 양의 무한대
2. -Innity: 음의 무한대
3. NaN : 산술 연산 불가(not-a-number)

```javascript
// 숫자 타입의 3가지 특별한 값 (모두 number 타입이다)
console.log(10 / 0); // Infinity
console.log(10 / -0); // -Infinity
console.log(1 * 'String'); // NaN
```

