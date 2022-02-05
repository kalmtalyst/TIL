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



## 2. 문자열 타입

문자열(string) 타입은 텍스트를 나타내는데 사요한다. 문자열은 0개 이상의 16bit 유니코드 문자(UTF-16)들의 집합으로 전세계 대부분의 문자를 표현할 수 있다.

```javascript
// 문자열 타입
var string;
string = '문자열'; // 작은 따옴표
string = "문자열"; // 큰 따옴표
string = `문자열`; // 백틱 (ES6)
string = '작은 따옴표로 감싼 문자열 내의 "큰 따옴표"는 문자열로 인식된다.';
string = "큰 따옴표로 감싼 문자열 내의 '작은 따옴표'는 문자열로 인식된다.";
```

키워드나 식별자와 같은 토큰과 구분하기 위하여 문자열을 따옴표로 감싼다. 따옴표로 감싸지 않을 경우 자바스크립트 엔진은 문자열을 키워드나 식별자와 같은 토큰으로 인식한다. 또 공백 문자도 포함시킬 수 없다.



## 3. 템플릿 리터럴

- ES6부터 새롭게 도입된 문자열 표기법이다. 

- 편리한 문자열 처리 기능을 제공한다.
  - 멀티라인 문자열(multi-line string)
  - 표현식 삽입(expression interpolation)
  - 태그드 템플릿(tagged template) ...

- 런타임에 일반 문자열로 변환되어 처리된다. 
- 템플릿 리터럴은 일반 문자열과 비슷해 보이지만 일반적인 따옴표 대신 백틱(backtick) `를 사용한다.

```javascript
var template = `Template literal`;
console.log(template); // Template literal
```



### 3.1. 멀티라인 문자열

일반 문자열 내에서 줄바꿈(개행)을 하려면 백슬래시(\)로 시작하는 이스케이프 시퀀스(escape
sequence)를 사용하여야 한다.

예를 들어, 줄바꿈과 들여쓰기가 적용된 문자열은 아래와 같이 이스케이프 시퀀스를 사용하여 작성한다.

```javascript
var template = '<ul>\n\t<li><a href="#">Home</a></li>\n</ul>';
console.log(template);
/*
<ul>
 <li><a href="#">Homea>li>
ul>
*/
```

일반 문자열과 달리 템플릿 리터럴 내에서는 이스케이프 시퀀스 사용 없이도 줄바꿈이 허용되며 모든 공백(white space)도 있는 그대로 적용된다.

```javascript
var template = `<ul>
 <li><a href="#">Home<a></li>
</ul>`;

console.log(template);
/*
<ul>
 <li><a href="#">Home</a></li>
ul>
*/
```



### 3.2. 표현식 삽입

문자열은 문자열 연산자 `+`를 사용해 연결할 수 있다. `+` 연산자는 피연산자 중 하나 이상이 문자열인 경우, 문자열 연결 연산자로 동작한다. 그 외의 경우는 덧셈 연산자로 동작한다.

```javascript
var first = 'Jimin';
var last = 'Park';

// ES5
// 문자열 연결
console.log('My name is ' + first + ' ' + last + '.');
// My name is Jimin Park.
```

템플릿 리터럴 내에서는 표현식 삽입(expression interpolation)을 통해 간단히 문자열을 삽입할 수 있다. 이를 통해 문자열 연산자보다 가독성 좋고 간편하게 문자열을 조합할 수 있다.

```javascript
var first = 'Jimin';
var last = 'Park';

// ES6
// 표현식 삽입
console.log(`My name is ${first} ${last}.`);
// My name is Jimin Park.

```

표현식 삽입은 `${ }` 으로 표현식을 감싼다. 이때 표현식의 평가 결과가 문자열이 아니더라도 문자열로 강제 타입 변환되어 삽입된다. 표현식 삽입은 반드시 템플릿 리터럴 내에서 사용해야 한다. 템플릿 리터럴이 아닌 일반 문자열에서 표현식 삽입은 문자열 취급을 받는다.

```javascript
// 템플릿 리터럴
console.log(`1 + 2 = ${1 + 2}`); // 1 + 2 = 3

// 일반 문자열
console.log('1 + 2 = ${1 + 2}'); // 1 + 2 = ${1 + 2}
```



## 4. 불리언 타입

불리언(boolean) 타입의 값은 논리적 참, 거짓을 나타내는 true와 false 뿐이다.

불리언 타입의 값은 참과 거짓으로 구분되는 조건에 의해 프로그램의 흐름을 제어하는 조건문에서 자주 사용한다.

```javascript
var foo = true;
console.log(foo); // true

foo = false;
console.log(foo); // false
```



## 5. undefined타입
undefined 타입의 값은 undefined가 유일하다. undefined는 개발자가 의도적으로 할당하기 위한 값이 아니라 자바스크립트 엔진이 변수를 초기화할 때 사용하는 값이다. 변수를 참조했을 때 undefined가 반환된다면 참조한 변수가 선언 이후 값이 할당된 적인 없는, 즉 초기화되지 않은 변수라는 것을 간파할 수 있다.

개발자가 의도적으로 undefined를 할당하는 것은 혼란을 줄 수 있으므로 변수에 값이 없다는 것을 명시하고 싶은 경우, null을 할당한다.



## 6. null 타입

null 타입의 값은 null이 유일하다. 자바스크립트는 대소문자를 구별(case-sensitive)하므로, null은 Null, NULL 등과 다르다. 프로그래밍 언어에서 null은 변수에 값이 없다는 것을 의도적으로 명시(의도적 부재 Intentional absence)할 때 사용한다.

변수에 null을 할당하는 것은 변수가 이전에 참조하던 값을 더이상 참조하지 않겠다는 의미이다. 이는 이전에 할당되어 있던 값에 대한 참조를 명시적으로 제거하는 것을 의미하며 자바스크립트 엔진은 누구도 참조하지 않는 메모리 공간에 대해 가비지 콜렉션을 수행할 것이다.

```javascript
var foo = 'bar';

// 이전에 할당되어 있던 값에 대한 참조를 제거. 변수 foo는 더이상 'bar'를 참조하지 않는다.
foo = null;
```



## 7. symbol 타입

ES6에서 새롭게 추가된 7번째 타입으로 변경 불가능한 원시 타입의 값이다. 심볼은 주로 이름의 충돌 위험이 없는 객체의 유일한 프로퍼티 키를 만들기 위해 사용한다. 심볼은 Symbol 함수를 호출하여 생성하며 생성된 심볼 값은 노출되지 않는다. 또 다른 값과 절대 중복되지 않는 유일무이한 값이다.

```javascript
// 심볼 값 생성
var key = Symbol('key');
console.log(typeof key); // symbol

// 객체 생성
var obj = {};

// 심볼 key를 이름의 충동 위험이 없는 유일한 프로퍼티 키로 사용한다.
obj[key] = 'value';
console.log(obj[key]); // value
```



## 8. 객체 타입

자바스크립트의 데이터 타입이 원시 타입과 객체 타입으로 분류된다는 것은 이 두 타입이 근본적으로 다르다는 의미이다. 

중요한 것은 자바스크립트는 객체 기반의 언어이며 자바스크립트를 이루고 있는 거의 모든 것이 객체라는 것이다. 지금까지 살펴본 6가지의 데이터 타입 이외의 값은 모두 객체 타입이다.