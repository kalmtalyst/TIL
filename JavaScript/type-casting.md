# 타입 변환과 단축 평가

## 1. 타입 변환이란?

- 자바스크립트의 모든 값은 타입이 있다.

- 명시적 타입 변환(Explicit coercion) 또는 타입캐스팅(Type casting)

  개발자가 의도적으로 값의 타입을 변환하는 것을 말한다.

```javascript
var x = 10;
// 명시적 타입 변환
// 숫자를 문자열로 타입캐스팅한다.
var str = x.toString();
console.log(typeof str, str); // string 10
// 변수 x의 값이 변경된 것은 아니다.
console.log(typeof x, x); // number 10
```



- 암묵적 타입 변환(Implicit coercion) 또는 타입 강제 변환(Type coercion)

  개발자의 의도와는 상관없이 표현식을 평가하는 도중 자바스크립트 엔진에 의해 암묵적으로 타입이 자동 변환되는 것을 말한다.

```javascript
var x = 10;
// 암묵적 타입 변환
// 문자열 연결 연산자는 숫자 타입 x의 값을 바탕으로 새로운 문자열을 생성한다.
var str = x + '';
console.log(typeof str, str); // string 10
// 변수 x의 값이 변경된 것은 아니다.
console.log(typeof x, x); // number 10
```

- 명시적 타입 변환이나 암묵적인 타입 변환이 기존 원시값을 직접 변경하는 것은 아니다.
- 원시값은 변경 불가능한 값이므로 변경할 수 없다.
- 타입 변환이란 **기존 원시값을 사용해 다른 타입의 새로운 원시값을 생성하는 것**이다.

```javascript
// 원시값 1이 '1'로 직접 변경되는 것이 아니다.
// 1을 사용해 타입이 다른 '1'을 새롭게 생성하여 '1' + ''을 평가한다.
1 + '' // '1'
```



- **암묵적 타입 변환**은 변수의 값을 재할당해서 변경하는 것이 아니라 자바스크립트 엔진이 표현식을 에러없이 평가하기 위해 변수의 값을 바탕으로 새로운 타입의 값을 만들어 **단 한번 사용하고 버린다.**

- 때로는 명시적 타입 변환보다 암묵적 타입 변환이 가독성 측면에서 더 좋을 수도 있다.

```javascript
var x = (10).toString(); // 명시적
var x = 10 + ''; // 암묵적
```



## 2. 암묵적 타입 변환

```javascript
// 피연산자가 모두 문자열 타입이여야 하는 문맥
'10' + 2 // '102'

// 피연산자가 모두 숫자 타입이여야 하는 문맥
5 * '10' // 50

// 피연산자 또는 표현식이 불리언 타입이여야 하는 문맥
!0 // true
if (1) { }
```

- 자바스크립트 엔진은 표현식을 평가할 때 코드의 문맥을 고려하여 암묵적으로 데이터 타입을 강제 변환한다.
- 이러한 암묵적 타입 변환이 발생하면 문자열, 숫자, 불리언과 같은 원시 타입 중 하나로 타입을 자동 변환한다.



### 2.1. 문자열 타입으로 변환

자바스크립트 엔진은 문자열 타입 아닌 값을 문자열 타입으로 암묵적 타입 변환을 수행할 때 아래와 같이 동작한다.

```javascript
// 숫자 타입
0 + '' // "0"
-0 + '' //"0"
1 + '' // "1"
-1 + '' // "-1"
NaN + '' // "NaN"
Infinity + '' // "Infinity"
-Infinity + '' // "-Infinity"

// 불리언 타입
true + '' // "true"
false + '' // "false"

// null 타입
null + '' // "null"

// undefined 타입
undefined + '' // "undefined"

// 심볼 타입
(Symbol()) + ''// TypeError: Cannot convert a Symbol value to a string

// 객체 타입
({}) + '' // "[object Object]"
Math + '' // "[object Math]"
[] + '' // ""
[10, 20] + '' // "10,20"
(function(){}) + '' // "function(){}"
Array + '' // "function Array() { [native code] }"


```



### 2.2. 숫자 타입으로 변환

- **산술 연산자**의 모든 피연산자는 코드의 문맥 상 모두 숫자 타입이여야 하므로 숫자 타입이 아닌 피연산자는 자바스크립트 엔진에 의해 숫자 타입으로 암묵적 타입 변환된다.

- 피연산자를 숫자 타입으로 변환할 수 없는 경우는 산술 연산을 수행할 수 없으므로 표현식의 평가 결과는 NaN이 된다.

```javascript
1 - '1' // 0
1 * '10' // 10
1 / 'one' // NaN
```

- **비교 연산자** 또한 피연산자의 크기를 비교하므로 코드의 문맥 상 피연산자는 숫자 타입이여야 한다.

```javascript
'1' > 0 // true
```

- **+ 단항 연산자**는 피연산자가 숫자 타입의 값이 아니면 숫자 타입의 값으로 암묵적 타입 변환을 수행한다.

```javascript
// 문자열 타입
+'' // 0
+'0' // 0
+'1' // 1
+'string' // NaN

// 불리언 타입
+true // 1
+false // 0

//null 타입
+null // 0

// undefined 타입
+undefined // NaN

// 심볼 타입
+Symbol() // TypeError: Cannot convert a Symbol value to a number

// 객체 타입
+{} // NaN
+[] // 0
+[10, 20] // NaN
+(function(){}) // NaN
```



### 2.3. 불리언 타입으로 변환

- 자바스크립트 엔진은 조건식의 평가 결과를 불리언 타입으로 암묵적 타입 변환한다.

- 제어문의 조건식과 같이 불리언 값으로 평가되어야 할 문맥에서 Truthy 값은 true로, Falsy 값은 false로 암묵적 타입 변환된다.

```javascript
if ('') console.log('1');
if (true) console.log('2');
if (0) console.log('3');
if ('str') console.log('4');
if (null) console.log('5');

// 2 4
```

* false 로 평가되는 Falsy 값
  * false
  * undefined
  * null
  * 0, -0
  * NaN
  * " "(빈 문자열)



## 3. 명시적 타입 변환

개발자는 표준 빌트인 생성자 함수(String,Number, Boolean)를 new 연산자 없이 호출하거나 자바스크립트에서 제공하는 빌트인 메소드를 사용하여 명시적으로 타입을 변경할 수 있다.



### 3.1. 문자열 타입으로 변환

문자열 타입이 아닌 값을 문자열 타입으로 변환하는 방법은 아래와 같다.

1. String 생성자 함수를 new 연산자 없이 호출하는 방법
2. Object.prototype.toString 메소드를 사용하는 방법
3. 문자열 연결 연산자를 이용하는 방법

```javascript
// 1. String 생성자 함수를 new 연산자 없이 호출하는 방법
// 숫자 타입 => 문자열 타입
console.log(String(1)); // "1"
console.log(String(NaN)); // "NaN"
console.log(String(Infinity)); // "Infinity"
// 불리언 타입 => 문자열 타입
console.log(String(true)); // "true"
console.log(String(false)); // "false"

// 2. Object.prototype.toString 메소드를 사용하는 방법
// 숫자 타입 => 문자열 타입
console.log((1).toString()); // "1"
console.log((NaN).toString()); // "NaN"
console.log((Infinity).toString()); // "Infinity"
// 불리언 타입 => 문자열 타입
console.log((true).toString()); // "true"
console.log((false).toString()); // "false"

// 3. 문자열 연결 연산자를 이용하는 방법
// 숫자 타입 => 문자열 타입
console.log(1 + ''); // "1"
console.log(NaN + ''); // "NaN"
console.log(Infinity + ''); // "Infinity"
// 불리언 타입 => 문자열 타입
console.log(true + ''); // "true"
console.log(false + ''); // "false"
```



### 3.2. 숫자 타입으로 변환

숫자 타입이 아닌 값을 숫자 타입으로 변환하는 방법은 아래와 같다

1. Number 생성자 함수를 new 연산자 없이 호출하는 방법
2. parseInt, parseFloat 함수를 사용하는 방법(문자열만 숫자 타입으로 변환 가능)
3. '+'단항 산술 연산자를 이용하는 방법
4. '*'산술 연산자를 이용하는 방법

```javascript
// 1. Number 생성자 함수를 new 연산자 없이 호출하는 방법
// 문자열 타입 => 숫자 타입
console.log(Number('0')); // 0
console.log(Number('-1')); // -1
console.log(Number('10.53')); // 10.53
// 불리언 타입 => 숫자 타입
console.log(Number(true)); // 1
console.log(Number(false)); // 0

//2. parseInt, parseFloat 함수를 사용하는 방법(문자열만 변환 가능)
// 문자열 타입 => 숫자 타입
console.log(parseInt('0')); // 0
console.log(parseInt('-1')); // -1
console.log(parseFloat('10.53')); // 10.53

// 3. + 단항 산술 연산자를 이용하는 방법
// 문자열 타입 => 숫자 타입
console.log(+'0'); // 0
console.log(+'-1'); // -1
console.log(+'10.53'); // 10.53
// 불리언 타입 => 숫자 타입
console.log(+true); // 1
console.log(+false); // 0

// 4. * 산술 연산자를 이용하는 방법
// 문자열 타입 => 숫자 타입
console.log('0' * 1); // 0
console.log('-1' * 1); // -1
console.log('10.53' * 1); // 10.53
// 불리언 타입 => 숫자 타입
console.log(true * 1); // 1
console.log(false * 1); // 0
```



### 3.3. 불리언 타입으로 변환

불리언 타입이 아닌 값을 불리언 타입으로 변환하는 방법은 아래와 같다.

1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
2. ! 부정 논리 연산자를 두번 사용하는 방법

```javascript
// 1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
// 문자열 타입 => 불리언 타입
console.log(Boolean('x')); // true
console.log(Boolean('')); // false
console.log(Boolean('false')); // true
// 숫자 타입 => 불리언 타입
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean(NaN)); //false
console.log(Boolean(Infinity)); // true
// null 타입 => 불리언 타입
console.log(Boolean(null)); // false
// undefined 타입 => 불리언 타 입
console.log(Boolean(undefined)); // false
// 객체 타입 => 불리언 타입
console.log(Boolean({})); // true
console.log(Boolean([])); // true

// 2. ! 부정 논리 연산자를 두번 사용하는 방법
// 문자열 타입 => 불리언 타입
console.log(!!'x'); // true
console.log(!!''); // false
console.log(!!'false'); // true
// 숫자 타입 => 불리언 타입
console.log(!!0); // false
console.log(!!1); // true
console.log(!!NaN); // false
console.log(!!Infinity); // true
// null 타입 => 불리언 타입
console.log(!!null); // false
// undefined 타입 => 불리언 타입
console.log(!!undefined); // false
// 객체 타입 => 불리언 타입
console.log(!!{}); // true
console.log(!![]); // true
```



## 4. 단축 평가

AND 연산자와 OR 연산자는 논리 연산의 결과를 결정한 피연산자를 타입 변환하지 않고 그대로 반환한다. 이를 단축 평가(short-circuit evaluation)라 부른다.

**단축 평가는 표현식을 평가하는 도중에 평가 결과가 확정된 경우, 나머지 평가 과정을 중단하는 것이다.** 대부분의 프로그래밍 언어는 단축 평가를 통해 논리 연산을 수행한다.



#### AND(논리곱) 연산자

- 두개의 피연산자가 모두 true로 평가될 때 true를 반환한다.
- 논리곱 연산자는 첫번째 피연산자가 true로 평가된다할지라도 두번째 피연산자까지 평가해 보아야 해당 표현식을 평가할 수 있다.
- 논리곱 연산자는 논리 연산의 결과를 결정한 두번째 피연산자를 그대로 반환한다.

```javascript
'Cat' && 'Dog' // 'Dog'
```



#### OR(논리합) 연산자

- 두개의 피연산자 중 하나만 true로 평가되어도 true를 반환한다. 
-  논리합 연산자도 왼쪽에서 오른쪽으로 평가가 진행된다.

```javascript
'Cat' || 'Dog' // 'Cat'
```

- 논리합 연산자는 논리 연산의 결과를 결정한 첫번째 피연산자 즉, 문자열 ‘Cat’를 그대로 반환한다.



단축 평가는 아래의 규칙을 따른다.

| 단축 평가 표현식    | 평가 결과 |
| ------------------- | --------- |
| true \|\| anything  | true      |
| false \|\| anything | anything  |
| true && anything    | anything  |
| false && anything   | false     |

```javascript
// OR(논리합) 연산자
'Cat' || 'Dog' // 'Cat'
false || 'Dog' // 'Dog'
'Cat' || false // 'Cat'

// AND(논리곱) 연산자
'Cat' && 'Dog' // Dog
false && 'Dog' // false
'Cat' && false // false
```



단축 평가는 아래와 같은 상황에서 유용하게 사용된다. 

**객체를 가리키는 변수가 null(또는 undefined)인지 확인하고 프로퍼티를 참조할 때**

```javascript
var elem = null;
var value = elem.value; // TypeError: Cannot read property 'value' of null
var value = elem && elem.value; // null
```

**함수 매개변수에 기본값을 설정할 때**

```javascript
// 단축 평가를 사용한 매개변수의 기본값 설정
function getStringLength(str) {
 str = str || '';
 return str.length;
}
getStringLength(); // 0
getStringLength('hi'); // 2

// ES6의 매개변수의 기본값 설정
function getStringLength(str = '') {
 return str.length;
}
getStringLength(); // 0
getStringLength('hi'); // 2

```



## 참고자료

- 모던 자바스크립트 Deep Dive, 이웅모 저