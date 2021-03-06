# 프로토타입

자바스크립트는 **명령형**(Imperative), **함수형**(Functional), **프로토타입 기반**(Prototype-based) **객체지향 프로그래밍**(OOP, Object Oriented Programming)을 지원하는 멀티 패러다임 프로그래밍 언어다.

자바스크립트는 클래스 기반 객체지향 프로그래밍 언어보다 효율적이며 더 강력한 객체지향 프로그래밍 능력을 지니고 있는 프로토타입 기반의 객체지향 프로그래밍 언어이다.

> 클래스(class)
> ES6에서 클래스가 새롭게 도입되었다. 하지만 ES6의 클래스가 기존의 프로토타입 기반 객체지향 모델을 폐지하고 새로운 객체지향 모델을 제공하는 것은 아니다. 사실 클래스도 함수이며 기존 프로토타입 기반 패턴의 문법적 설탕(Syntactic sugar)이라고 볼 수 있다.
>
> 하지만 클래스와 생성자 함수가 모두 프로토타입 기반의 인스턴스를 생성하지만 정확히 동일하게 동작하지는 않는다. 클래스는 생성자 함수보다 엄격하며 클래스는 생성자 함수에서는 제공하지 않는 기능도 제공한다.
>
> 따라서 클래스를 프로토타입 기반 객체 생성 패턴의 단순한 문법적 설탕이라고 보기 보다는 새로운 객체생성 메카니즘으로 보는 것이 보다 합당하다고 할 수 있다.

자바스크립트는 원시 타입(primitive type)의 값을 제외한 나머지 값들(함수, 배열, 정규표현식 등)은 모두 객체이다.



## 1. 객체지향 프로그래밍

프로그램을 명령어 또는 함수의 목록으로 보는 전통적인 명령형 프로그래밍(Imperative programming)의 절차지향적 관점에서 벗어나 여러 개의 독립적 단위, 즉 객체(object)들의 집합으로 프로그램을 표현하려는 프로그래밍 패러다임이다.

> 객체
>
> 속성을 통해 여러 개의 값을 하나의 단위로 구성한 복합적인 자료 구조이다.



#### 추상화(abstraction)

객체지향 프로그래밍은 실세계의 실체를 인식하는 철학적 사고를 프로그래밍에 접목하려는 시도에서 시작하며, 실체가 갖고 있는 특징이나 성질을 나타내는 속성들 중, 프로그램에 필요한 속성만을 간추려 내어 표현하는 것을 추상화라 한다.

추상화를 통해 사람의 다양한 속성 중 “이름”과  “주소”라는 속성을 갖는 person이라는 객체를 자바스크립트로 표현해보자.

```javascript
// 이름과 주소 속성을 갖는 객체
const person = {
 name: 'Park',
 address: 'Seoul'
};

console.log(person); // {name: "Park", address: "Seoul"}
```

프로그래머(subject, 주체)는 이름과 주소 속성으로 표현된 객체(object)인 person을 다른 객체와
구별하여 인식할 수 있다. 

객체지향 프로그래밍은 객체의 상태(state)를 나타내는 데이터와 상태 데이터를 조작할 수 있는 동작(behavior)을 하나의 논리적인 단위로 묶어 생각한다. 따라서 객체는 상태 데이터와 동작을 하나의논리적인 단위로 묶은 복합적인 자료 구조라고 할 수 있다. 객체의 **상태 데이터를 프로퍼티**(property), **동작을 메소드**(method)라 부른다.



## 2. 상속과 프로토타입

#### 상속(Inheritance)이란?

객체지향 프로그래밍의 핵심 개념으로 어떤 객체의 프로퍼티 또는 메소드를 다른 객체가 상속받아 그대로 사용할 수 있는 것을 말한다.

자바스크립트는 프로토타입을 기반으로 상속을 구현하여 기존의 코드를 적극적으로 재사용 하므로서 불필요한 중복을 제거한다. 



### 생성자 함수에 의한 객체 생성

```javascript
// 생성자 함수
function Circle(radius) {
 this.radius = radius;
 this.getArea = function () {
   // Math.PI는 원주율을 나타내는 상수이다.
   // Math.pow는 첫번째 인수를 두번째 인수로 거듭제곱한 값을 반환한다.
   return Math.PI * Math.pow(this.radius, 2);
 };
}

// 인스턴스 생성
// 반지름이 1인 인스턴스 생성
const circle1 = new Circle(1);
// 반지름이 2인 인스턴스 생성
const circle2 = new Circle(2);

// Circle 생성자 함수는 인스턴스를 생성할 때마다 동일한 동작을 하는
// getArea 메소드를 중복 생성하고 모든 인스턴스가 중복 소유한다.
// 따라서 getArea 메소드는 하나만 생성하여 모든 인스턴스가 공유하는 것이 바람직하다.
console.log(circle1.getArea === circle2.getArea); // false

console.log(circle1.getArea()); // 3.141592653589793
console.log(circle2.getArea()); // 12.566370614359172
```



### 프로토타입 기반 상속을 통한 중복 제거하기

```javascript
// 생성자 함수
function Circle(radius) {
 this.radius = radius;
}

// Circle 생성자 함수가 생성한 모든 인스턴스가 공유할 수 있도록 getArea 메소드를 프로토타입에 추가한다.
// 프로토타입은 Circle 생성자 함수의 prototype 프로퍼티에 바인딩되어 있다.
Circle.prototype.getArea = function () {
 return Math.PI * Math.pow(this.radius, 2);
};

// 인스턴스 생성
const circle1 = new Circle(1);
const circle2 = new Circle(2);

// Circle 생성자 함수가 생성한 모든 인스턴스는 부모 객체의 역할을 하는
// 프로토타입 Circle.prototype로부터 getArea 메소드를 상속받는다.
// 즉, Circle 생성자 함수가 생성하는 모든 인스턴스는 하나의 getArea 메소드를 공유한다.
console.log(circle1.getArea === circle2.getArea); // true

console.log(circle1.getArea()); // 3.141592653589793
console.log(circle2.getArea()); // 12.566370614359172
```

상속은 코드의 재사용이란 관점에서 매우 유용하다. 생성자 함수가 생성할 모든 인스턴스가 공통적으로 사용할 프로퍼티나 메소드를 프로토타입에 미리 구현에 놓으면 생성자 함수가 생성할 모든 인스턴스는 별도의 구현없이 상위(부모) 객체인 프로토타입의 자산을 공유하여 사용할 수 있다.



## 3. 프로토타입 객체

프로토타입 객체(또는 줄여서 프로토타입)란 객체 지향 프로그래밍의 근간을 이루는 **객체간 상속**(inheritance)을 구현하기 위해 사용된다. 프로토타입은 어떤 객체의 상위(부모) 객체의 역할을 하는 객체로서 다른 객체에 공유 프로퍼티(메소드 포함)를 제공한다. 프로토타입을 상속받은 하위(자식) 객체는 상위 객체의 프로퍼티를 자신의 프로퍼티처럼 자유롭게 사용할 수 있다.

모든 객체는 `[[Prototype]]` 이라는 내부 슬롯을 가지며 이 내부 슬롯의 값은 프로토타입의 참조(null인 경우도 있다)이다.  객체가 생성될 때 객체 생성 방식에 따라 프로토타입이 결정되고 `[[Prototype]]`에 저장된다.

객체 리터럴에 의해 생성된 객체의 프로토타입은 `Object.prototype`이고 생성자 함수에 의해 생성된 객체의 프로토타입은 생성자 함수의 `prototype` 프로퍼티에 바인딩되어 있는 객체이다.

모든 객체는 하나의 프로토타입을 갖는다.(`[[Prototype]]` 내부 슬롯의 값이 null인 객체는 프로토타입이 없다.) 그리고 모든 프로토타입은 생성자 함수와 연결되어 있다. 즉, 객체와 프로토타입과 생성자 함수는 서로 연결되어 있다.

객체는 `__proto__` 접근자 프로퍼티를 통해 자신의 프로토타입, 즉 자신의 `[[Prototype]]` 내부 슬롯이 가리키는 프로토타입에 간접적으로 접근할 수 있다. 그리고 프로토타입은 자신의 `constructor` 프로퍼티를 통해 생성자 함수에 접근할 수 있고, 생성자 함수는 자신의 `prototype` 프로퍼티를 통해 프로토타입에 접근할 수 있다.



### 3.1. `__proto__` 접근자 프로퍼티

모든 객체는 `__proto__` 접근자 프로퍼티를 통해 자신의 프로토타입, 즉 프로토타입을 가리키는 `[[Prototype]]` 내부 슬롯에 간접적으로 접근할 수 있다.

접근자 프로퍼티는 자체적으로는 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 사용하는 접근자 함수(Accessor function)로 구성된 프로퍼티다.



### 3.2. 함수 객체의 prototype 프로퍼티

함수 객체는 `prototype` 프로퍼티도 소유한다. 함수 객체만이 소유하는 `prototype` 프로퍼티는 **생성자 함수가 생성할 인스턴스의 프로토타입**을 가리킨다.

```javascript
// 함수 객체는 prototype 프로퍼티를 소유한다.
console.log((function () {}).hasOwnProperty('prototype')); // true
// 일반 객체는 prototype 프로퍼티를 소유하지 않는다.
console.log({}.hasOwnProperty('prototype')); // false
```

`prototype` 프로퍼티는 생성자 함수가 생성할 객체(인스턴스)의 프로토타입을 가리킨다. 따라서 생성자 함수로서 호출할 수 없는 함수, 즉 non-constructor인 화살표 함수와 메소드는 `prototype` 프로퍼티를 소유하지 않으며 프로토타입도 생성하지 않는다.

```javascript
// 화살표 함수는 nonconstructor이다.
const Person = name 
{
 this.name = name;
};

// nonconstructor는 prototype 프로퍼티를 소유하지 않는다.
console.log(Person.hasOwnProperty('prototype')); // false

// nonconstructor는 프로토타입을 생성하지 않는다.
console.log(Person.prototype); // undefined

// ES6의 메소드 축약 표현으로 정의한 메소드는 nonconstructor이다.
const obj = {
 foo() {}
};

// nonconstructor는 prototype 프로퍼티를 소유하지 않는다.
console.log(obj.foo.hasOwnProperty('prototype')); // false

// nonconstructor는 프로토타입을 생성하지 않는다.
console.log(obj.foo.prototype); // undefined
```

모든 객체가 가지고 있는(엄밀히 말하면 Object.prototype로부터 상속받은) `__proto__` 접근자 프로퍼티와 함수 객체만이 가지고 있는 `prototype` 프로퍼티는 결국 동일한 프로토타입을 가리킨다. 하지만 이들 프로퍼티를 사용하는 주체가 다르다.

| 구분                        | 소유     | 값                | 사용 주체   | 사용 목적                                                    |
| --------------------------- | -------- | ----------------- | ----------- | ------------------------------------------------------------ |
| `__proto__` 접근자 프로퍼티 | 모든객체 | 프로토타입의 참조 | 모든객체    | 객체가 자신의 프로토타입에 접근 또는 교체하기위해 사용       |
| prototype 프로퍼티          | 함수객체 | 프로토타입의 참조 | 생성자 함수 | 생성자 함수가 자신이 생성할 객체(인스턴스)의 프로토타입을 할당하기 위해 사용 |

예를 들어 생성자 함수로 객체를 생성한 후 `__proto__` 접근자 프로퍼티와 `prototype` 프로퍼티로 프로토타입 객체에 접근해보자.

```javascript
// 생성자 함수
function Person(name) {
 this.name = name;
}

const me = new Person('Park');

// 결국 Person.prototype와 me.proto는 결국 동일한 프로토타입을 가리킨다.
console.log(Person.prototype === me.__proto__); // true
```







