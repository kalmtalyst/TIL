# 객체 리터럴

## 1. 객체란?

원시 값을 제외한 나머지 값들은 모두 객체이다.

객체 타입(object/reference type)은 다양한 타입의 값(원시 값 또는 다른 객체)들을 하나의 단위로 구성한 복합적인 자료 구조(Data structure)이다. **원시 값은 변경 불가능한 값(immutable value)이지만 객체는 변경 가능한 값(mutable value)이다**.

- 0개 이상의 프로퍼티의 집합이다.
- 프로퍼티는 key 와 value로 구성된다.

```javascript
var person = {
    // 프로퍼티 키: 프로퍼티 값
    name: 'Park',
    age: 20
};
```



자바스크립트에서 사용할 수 있는 모든 값은 프로퍼티의 값이 될 수 있다. 그러므로 일급 객체인 자바스크립트의 함수를 프로퍼티 값으로 취급할 수 있다. 프로퍼티 값이 함수일 경우, 일반 함수와 구분하기 위해 메서드(method)라 부른다.

```javascript
var counter = {
    num: 0,
    increase: function () {
        this.num++;
    }
};
```

프로퍼티와 메서드의 역할은 다음과 같다.

- 프로퍼티 : 객체의 상태를 나타내는 값(data)
- 메서드 : 프로퍼티(상태 데이터)를 참조하고 조작할 수 있는 동작(behavior)

객체는 프로퍼티와 메서드를 모두 포함할 수 있기 때문에 상태와 동작을 하나의 단위로 구조화할 수 있어 유용하다.

객체들의 집합으로 프로그램을 표현하려는 프로그래밍 패러다임을 객체지향 프로그래밍이라 한다.



## 2. 객체 리터럴에 의한 객체 생성

C++과 자바와 같은 클래스 기반 객체지향 언어의 객체 생성 방식은 클래스를 사전에 정의하고 필요한 시점에 new 연산자와 함께 생성자(constructor)를 호출하여 인스턴스를 생성하는 식이다.



#### 인스턴스

인스턴스(instance)란 **클래스에 의해 생성되어 메모리에 저장된 실체**이다. 객체지향 프로그래밍에서 객체는 클래스와 인스턴스를 포함한 개념이다. 

- 클래스 : 인스턴스를 생성하기 위한 템플릿 역할
- 인스턴스 : 객체가 메모리에 저장되어 존재하는 것에 초점을 맞춘 용어

하지만 자바스크립트는 프로토타입 기반 객체지향 언어로서 클래스 기반 객체지향 언어와는 다른 다양한 객체 생성 방법을 지원한다.

- 객체 리터럴

- Object 생성자 함수
- 생성자 함수
- Object.create 메서드
- 클래스 (ES6)

이 중 가장 일반적이고 간단한 객체 생성 방법은 객체 리터럴을 사용하는 방법이다. 객체 리터럴은 객체를 생성하기 위한 표기법이다.

> 리터럴(literal)
>
> 사람이 이해할 수 있는 문자 또는 약속된 기호를 사용해서 값을 생성하는 표기법을 말한다.

객체 리터럴은 중괄호 내에 0개 이상의 프로퍼티를 정의한다. 변수에 할당이 이루어지는 시점에 자바스크립트 엔진은 객체 리터럴을 해석해서 객체를 생성한다.



```javascript
var person = {
    name: 'Park',
 	sayHi: function () {
        console.log('Hi! My name is $(this.name).')
    }  
};

console.log(typeof person); // object
console.log(person); // {name: "Park", sayHi: f}
```



만약 중괄호 내에 프로퍼티를 정의하지 않으면 빈 객체가 생성된다.

```javascript
var empty = {}; // 빈 객체
console.log(typeof empty); // object
```



객체 리터럴의 중괄호는 코드 블록을 의미하지 않는다.

코드 블록의 닫는 중괄호 뒤에는 세미콜론을 붙이지 않지만 객체 리터럴의 닫는 중괄호 뒤에는 세미콜론을 붙인다. 객체 리터럴이 값으로 평가되는 표현식이기 때문이다.

객체 리터럴은 프로퍼티를 포함시켜 객체를 생성함과 동시에 프로퍼티를 만들 수도 있고, 객체를 생성한 이후에 프로퍼티를 동적으로 추가할 수도 있어 자바스크립트의 유연함과 강력함을 대표하는 객체 생성 방식으로 볼 수 있다. 객체 리터럴 외의 객체 생성 방식은 모두 함수를 사용해 객체를 생성한다.



## 3.프로퍼티

객체는 프로퍼티(property)들의 집합이며 프로퍼티는 키(key)와 값(value)으로 구성된다.

프로퍼티 나열시 쉽표(,)로 구분한다. 일반적으로 마지막 프로퍼티 뒤에는 쉼표를 사용하지 않으나 사용해도 좋다.



```javascript
var person = {
    name: 'Kim', // 프로퍼티 키 = name, 프로퍼티 값 = 'Kim'
    address: 'Seoul'// 프로퍼티 키 = adress, 프로퍼티 값 = 'Seoul'
};
```



프로퍼티 키와 프로퍼티 값으로 사용할 수 있는 값

- 프로퍼티 키 : 빈 문자열을 포함하는 모든 문자열 또는 심벌 값
- 프로퍼티 값 : 자바스크립트에서 사용할 수 있는 모든 값



프로퍼티 키는 프로퍼티 값에 접근할 수 있는 이름으로서 식별자 역할을 한다. 하지만 반드시 식별자 네이밍 규칙을 따라야 하는 것은 아니다. 단, 식별자 네이밍 규칙을 준수하는 프로퍼티 키와 그렇지 않은 프로퍼티 키는 미묘한 차이가 있다.

심벌 값도 프로퍼티 키로 사용 가능 하지만 일반적으로 문자열을 사용한다. 이때 프로퍼티 키는 문자열이므로 따옴표로 묶어야 한다. 하지만 자바스크립트에서 사용 가능한 유효한 이름인 경우 따옴표를 생략할 수 있다. 

다시 말해 **식별자 네이밍 규칙을 따르지 않는 이름에는 반드시 따옴표를 사용해야 한다.**

- 프로퍼티 키로 사용한 firstName은 식별자 네이밍 규칮 준수, 따옴표 생략 가능

- last-name은 식별자 네이밍 규칙 준수하지 않음. 따라서 따옴표 생략 불가

  (자바스크립트  엔진은 따옴표를 생략한 last-name을 -연산자가 있는 표현식으로 해석)

```javascript
var person = {
    firstName: 'Brian',
    'last-name': 'Park'
};

console.log(person); // {firstName: 'Brian', last-name: 'Park'}
```

```javascript
var person = {
    firstName: 'Brian',
    last-name: 'Park'
};

console.log(person); // SyntaxError: Unexpected token '-'
```



문자열 또는 문자열로 평가할 수 있는 표현식을 사용해 프로퍼티 키를 동적으로 생성할 수도 있다. 이 경우, 프로퍼티 키로 사용할 표현식을 대괄호([...])로 묶어야 한다.

```javascript
var obj = {};
var key = 'hello';

// ES5: 프로퍼티 키 동적 생성
obj[key] = 'world';
// ES6: 프로퍼티 키 동적 생성
var obj = { [key]: 'world' };

console.log(obj); // {hello: 'world'}
```



빈 문자열을 프로퍼티 키로 사용해도 에러는 발생하지 않으나 의미가 없으므로 권장하지 않는다.

```javascript
var foo = {
    '': ''
}

console.log(foo) // {"": ""}
```



프로퍼티 키에 문자열이나 심벌 값 이외의 값을 사용하면 암묵적 타입 변환을 통해 문자열이 된다.

```javascript
var foo = {
    0: 1,
    1: 2,
    2: 3
};

console.log(foo); // {0: 1, 1: 2, 2: 3}
```



var , function과 같은 예약어를 프로퍼티 키로 사용해도 에러가 발생하지 않는다.

다만 예상치 못한 에러가 발생할 여지가 있으므로 권상하지 않는다.



이미 존재하는 프로퍼티 키를 중복 선언하면 나중에 선언한 프로퍼티가 먼저 선언한 프로퍼티를 덮어쓴다. 이때 에러가 발생하지 않으므로 주의해야 한다.

```javascript
var person = {
    name: 'Park',
    name: 'Kim'
};

console.log(person); // { name: "Kim"}
```





## 4. 메서드

- 자바스크립트의 함수는 객체(일급 객체)이다.
- 함수는 값으로 취급할 수 있기 때문에 프로퍼티 값으로 사용할 수 있다.

- 프로퍼티 값이 함수일 경우, 일반 함수와 구분하기 위해 메서드(method)라 부른다. 
- 메서드는 객체에 묶여있는 함수를 의미한다.



## 5. 프로퍼티 접근

#### 프로퍼티 값 접근법

- 마침표 연산자(.)를 사용하는 마침표 기법(dot notation) 
- 대괄호 연산자([...])를 사용하는 대괄호 표기법(bracket notation)

프로퍼티키가 자바스크립트에서 사용 가능한 유효한 이름일 경우 위의 두가지 표기법 모두 사용할 수 있다.

마침표 연산자 또는 대괄호 연산자의 좌측에는 객체로 평가되는 표현식을 기술한다. 마침표 연산자의 우측 또는 대괄호 연산자의 내부에는 프로퍼티 키를 지정한다.

대괄호 표기법 사용시 **대괄호 연산자 내부에 지정하는 프로퍼티 키는 반드시 따옴표로 감싼 문자열이어야 한다.** 따옴표로 감싸지 않은 이름을 프로퍼티 키로 사용하면 자바스크립트 엔진은 이를 식별자로 해석한다.

```javascript
var person = {
    name: 'Kim'
};

console.log(person[name]); // ReferenceError: name is not defined
```

위의 경우 대괄호 연산자 내에 따옴표로 감싸지 않은 name을 식별자로 해석해 이를 평가하기 위해 선언된 name을 찾았지만 찾지 못하였기 때문에 ReferenceError가 발생했다.



**객체에 존재하지 않는 프로퍼티에 접근하면** undefined**를 반환한다.**

```javascript
var person = {
    name: 'Kim'
};

console.log(person.address); // undefined
```



프로퍼티 키가 식별자 네이밍 규칙을 준수하지 않는 이름일 경우 반드시 대괄호 표기법을 사용해야 한다. 이때 대괄호 내에 들어가는 프로퍼티 키는 반드시 따옴표로 감싼 문자열이어야 한다. 단, 프로퍼티 키가 숫자로 이뤄진 문자열인 경우 따옴표를 생략할 수 있다. 

```javascript
var person = {
    'last-name': 'Lee',
 	1: 10
};

person.'last-name'; // SyntaxError: Unexpected string
person.last-name; // -> 브라우저 환경: NaN
				  // Node.js 환경: ReferenceError: name is not defined
person[last-name]; // ReferenceError: last is not defined
person['last-name']; // Lee

// 프로퍼티 키가 숫자로 이뤄진 문자열인 경우 따옴표를 생략할 수 있다.
person.1; // SyntaxError: Unexpected number
person.'1'; // SyntaxError: Unexpected string
person[1]; // 10 : person[1] -> person['1']
person['1']; // 10
```



## 6. 프로퍼티 값 갱신

```javascript
var person = {
    name: 'Kim'
};

person.name= 'Hwang';
console.log(person.name); // {name: "Hwang"}
```



## 7. 프로퍼티 동적 생성

```javascript
var person = {
    name: 'Kim'
};

person.age = 25;

console.log(person); // {name: "Kim", age: 25}
```



## 8. 프로퍼티 삭제

- delete 연산자 : 객체의 프로퍼티를 삭제

- delete 연산자의 피연산자 : 프로퍼티 값에 접근할 수 있는 표현식
- 존재하지 않는 프로퍼티 삭제시 에러없이 무시

```javascript
var person = {
    name: 'Park'
};

person.age = 25;

delete person.age;

delete person.address;

console.log(person); // {name: 'Park'}
```



## 9. ES6에서 추가된 객체 리터럴의 확장 기능

### 9.1. 프로퍼티 축약 표현

프로퍼티 값은 변수에 할당된 값, 즉 식별자 표현식일 수도 있다.

```javascript
// ES5
var x = 1, y = 2;

var obj = {
    x: x,
    y: y
};

console.log(obj); // {x: 1, y: 2}
```



ES6에서는 프로퍼티 값으로 변수를 사용하는 경우 변수 이름과 프로퍼티 키가 동일한 이름일 때, 프로퍼티 키를 생략할 수 있다. 이때 프로퍼티 키는 변수 이름으로 자동 생성된다.

```javascript
// ES6
let x = 1, y = 2;

const obj = { x, y }; // 프로퍼티 축약 표현

console.log(obj); // {x: 1, y: 2}
```



### 9.2. 계산된 프로퍼티 이름

문자열 또는 문자열로 타입 변환할 수 있는 값으로 평가되는 표현식을 사용해 프로퍼티를 동적으로 생성할 수 있다. 단 프로퍼티 키로 사용할 표현식을 대괄호로 묶어야 한다. 이를 계산된 프로퍼티 이름(Computed property name)이라 한다.

ES5에서 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성하려면 **객체 리터럴 외부에서** 대괄호 표기법을 사용해야 한다.

```javascript
// ES5
var prefix = 'prop';
var i = 0;

var obj = {};

// 프로퍼티 키 동적 생성
obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;

console.log(obj); // { prop-1: 1, prop-2: 2 }
```

ES6에서는 **객체 리터럴 내부에서도** 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성할 수 있다.

```javascript
// ES6
const prefix = 'prop';
let i = 0;

// 객체 리터럴 내부에서 프로퍼티 키 동적 생성
const obj = {
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i
};

console.log(obj); // { prop-1: 1, prop-2: 2 }
```



### 9.3. 메서드 축약 표현

ES5에서 메서드를 정의하려면 프로퍼티 값으로 함수를 할당한다.

```javascript
// ES5
var person = {
  name: 'Hwang',
  sayHi: function () {
    console.log('Hi! ' + this.name);
  }
};

console.log(person.sayHi()); // Hi! Hwang
```

ES6에서는 메서드를 정의할 때, function 키워드를 생략한 축약 표현을 사용할 수 있다.

```javascript
// ES6
const person = {
  name: 'Kim',
  sayHi() {
    console.log(`Hi! ${this.name}`);
  }
};

console.log(person.sayHi()); // Hi! Kim
```

ES6의 메서드 축약 표현으로 정의한 메서드는 프로퍼티에 할당한 함수와 다르게 동작한다.





## 참고자료

- 이웅모.(2020). 모던 자바스크립트 Deep Dive. 파주: 위키북스.







