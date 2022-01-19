# this

## 1. this 키워드

#### 왜 this가 필요한가?

- this 는 객체의 프로퍼티에 접근하기 위해 필요하다.



**객체**는 프로퍼티와 메소드를 하나의 논리적인 단위로 묶은 복합적인 자료 구조이다.  여기서 메소드가 자신이 속한 객체의 프로퍼티를 참조하고 변경할 수 있으려면 자신이 속한 객체를 가리키는 식별자를 참조할 수 있어야 한다.

객체 리터럴 방식으로 생성한 객체의 경우, 메소드 내부에서 메소드 자신이 속한 객체를 가리키는 식별자를 재귀적으로 참조할 수 있다. 하지만 자기 자신이 속한 객체를 재귀적으로 참조하는 방식은 일반적이지 않으며 바람직하지도 않다. 

생성자 함수 방식으로 인스턴스를 생성하는 경우에는 먼저 생성자 함수를 정의한 이후, new 연산자와 함께 생성자 함수를 호출하는 단계가 추가로 필요하다. 따라서 생성자 함수를 정의하는 시점에는 아직 인스턴스를 생성하지 않았으므로 자바스크립트는 this라는 특수한 식별자를 제공하여 자신이 속한 객체나 자신이 생성할 인스턴스를 가리킨다.

- this는 자기 참조 변수(Self-referencing variable)이다.
- this를 통해 자신이 속한 객체 또는 자신이 생성할 인스턴스의 프로퍼티나 메소드를 참조할 수 있다.
  - this는 자기 참조 변수이므로 일반적으로 객체의 메소드 내부 또는 생성자 함수 내부에서만 의미가 있다.

- this는 자바스크립트 엔진에 의해 암묵적으로 생성된다.
- 코드 어디에서든지 참조할 수 있다.(전역 및 함수 내부)
- 함수 호출시, arguments 객체와 this가 암묵적으로 함수 내부에 전달된다.
- 함수 내부에서 arguments 객체와 마찬가지로 this 역시 지역 변수처럼 사용할 수 있다.
- 단, **this가 가리키는 값, 즉 this 바인딩은 함수 호출 방식에 의해 동적으로 결정된다.**



> 바인딩
>
> 바인딩(binding)이란 식별자와 값을 연결하는 과정을 의미한다. 예를 들어 변수는 할당에 의해 값이 바인딩된다.





## 2. 함수 호출 방식과 this 바인딩

**this가 가리키는 값**, 즉 **this 바인딩은 함수가 어떻게 호출되었는지에 따라 동적으로 결정된다**.



렉시컬 스코프와 this 바인딩은 결정 시기가 다르다.

함수의 상위 스코프를 결정하는 방식인 렉시컬 스코프(Lexical scope)는 함수 정의가 평가되어 함수 객체가 생성되는 시점에 정적으로 상위 스코프를 결정한다. 반면 this에 바인딩될 객체는 함수 호출 시점에 동적으로 결정된다.



**함수 호출 방식**은 아래와 같이 다양하다.

※ 동일한 함수도 다양한 방식으로 호출할 수 있음에 주의

1. 일반 함수 호출

2. 메소드 호출

3. 생성자 함수 호출

4. Function.prototype.apply/call/bind 메소드에 의한 간접 호출



![](C:\Users\soarm\Downloads\this.jpg)3



### 2.1. 일반 함수 호출

- 기본적으로 this에는 전역 객체(Global object)가 바인딩된다.
- 중첩 함수를 일반 함수로 호출하면 함수 내부의 this에는 전역 객체가 바인딩 된다.
- 자기 참조 변수인 this는 객체를 생성하지 않는 일반 함수에서 의미가 없다.
- 따라서 strict mode가 적용된 일반 함수 내부의 this에는 undefined가 바인딩된다.

- 메소드 내에서 정의한 중첩 함수도 일반 함수로 호출되면 중첩 함수 내부의 this에는 전역 객체가 바인딩 된다.

```javascript
// var 키워드로 선언한 변수 value는 전역 객체의 프로퍼티이다.
var value = 1;

// const 키워드로 선언한 변수 value는 전역 객체의 프로퍼티가 아니다.(전역 변수 O)
// const value = 1;

const obj = {
    value: 100,
    foo() {
        console.log("foo's this", this); //{value: 100, foo: ƒ}
        console.log("foo's this.value", this.value); // 100
    
        // 메소드 내에서 정의한 중첩 함수
        function bar() {
            console.log("bar's this", this); // window
            console.log("bar's this.value", this.value); // 1
        }
        
        // 메소드 내에서 정의한 중첩 함수도 일반 함수로 호출되면
        // 중첩 함수 내부의 this에는 전역 객체가 바인딩된다.
        bar();
    }
};

obj.foo();
```



콜백 함수 내부의 this에도 전역 객체가 바인딩된다. **어떠한 함수라도 일반 함수로 호출되면 this에 전역 객체가 바인딩된다.**

```javascript
var value = 1;

const obj = {
    value: 100,
    foo() {
        console.log("foo's this: ", this); // {value: 100, foo: ƒ}
        // 콜백 함수(setTimeout 함수의 첫번째 매개변수에 전달된 함수) 내부의 this = 전역 객체
        setTimout(function () {
            console.log("callback's this", this); // window
            console.log("callback's this.value", this.value); // 1
        }, 1000);
    }
};
```



하지만 메소드 내에서 정의한 중첩 함수 또는 메소드에게 전달한 콜백 함수(보조 함수)의 this가 전역 객체를 바인딩하는 것은 메소드와 중첩 함수의 this가 일치하지 않다는 것이고 이는 콜백 함수가 외부 함수를 돕는 헬퍼 함수로서의 역할을 어렵게 하기 때문에 문제가 있다.

메소드 내부의 중첩 함수나 콜백 함수의 this 바인딩을 메소드의 this 바인딩과 일치시키기 위한 방법을 살펴보자.

```javascript
// 원시적인 방법
var value = 1;

const obj = {
    value: 100,
    foo() {
        // this 바인딩(obj)를 변수 that에 할당한다.
        const that = this;
        
        // 콜백 함수 내부에서 this 대신 that을 참조!
        setTimeout(function () {
            console.log(that.value); // 100
        })
    }
}
```



자바스크립트는 this를 명시적으로 바인딩할 수 있는 `Function.prototype.apply`, `Function.prototype.call`, `Function.prototype.bind` 메소드를 제공한다.

```javascript
var value = 1;

const obj = {
    value: 100,
    foo() {
        // 콜백 함수에 명시적으로 this를 바인딩한다.
        setTimeout(function () {
            console.log(this.value); // 100
        }.bind(this),1000);
    }
}
```



### 2.2. 메소드 호출

메소드 내부의 this는 메소드를 호출한 객체, 즉 메소드 이름 앞의 마침표(.) 연산자 앞에 기술한 객체에 바인딩된다.

※ 메소드를 소유한 객체가 아닌 **메소드를 호출한 객체**

```javascript
const obj = {
    value: 100,
    getValue() {
        // 메소드의 this는 메소드를 호출한 객체에 바인딩된다.
        return this.value;
    }
};
// getValue를 호출한 객체는 obj이다.
console.log(obj.getValue()); // 100
```

메소드는 프로퍼티에 바인딩된 함수이므로 다른 객체의 프로퍼티에 할당하는 것으로 다른 객체의 메소드가 될 수도 있고 일반 변수에 할당하여 일반 함수로 호출될 수도 있다.

따라서 메소드 내부의 this는 메소드를 소유한 객체와는 관계가 없고 메소드를 호출한 객체에 바인딩된다.



### 2.3. 생성자 함수 호출

생성자 함수 내부의 this에는 생성자 함수가 (미래에) 생성할 인스턴스가 바인딩된다.

```javascript
// 생성자 함수
function Circle(radius) {
    // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}

// 인스턴스의 생성
// 반지름이 5인 Circle 객체를 생성
const circle1 = new Circle(5);
// 반지름이 10인 Circle 객체를 생성
const circle1 = new Circle(10);

console.log(circle1.getDiameter()); // 10
console.log(circle2.getDiameter()); // 20
```



- 생성자 함수는 객체(인스턴스)를 생성하는 함수다.
- 생성자 함수를 정의하고 new 연산자와 함께 호출하면 해당 함수는 생성자 함수로 동작한다.
- new 연산자와 함께 생성자 함수를 호출하지 않으면 일반 함수로 동작한다.

```javascript

// new 연산자와 함께 호출하지 않으면 생성자 함수로 동작하지 않는다.
// 즉, 일반적인 함수의 호출이다.
const circle3 = Circle(15);
// 일반 함수 Circle은 반환문이 없으므로 암묵적으로 undefined를 반환한다.
console.log(circle3); // undefined
// 일반 함수 Circle내의 this는 전역 객체를 가리킨다.
console.log(radius); // 15
```



### 2.4. Function.prototype.apply/call/bind 메소드에 의한 간접 호출
apply, call, bind 메소드는 인수로 this와 인수 리스트를 전달 받아 함수를 호출한다. apply와 call은 Function.prototype의 메소드로 Function 생성자 함수를 constructor 프로퍼티로 가리키는 모든 함수가 상속받아 사용할 수 있다.

- apply와 call 메소드는 함수를 호출한다.
- 첫번째 인수로 전달한 특정 객체를 호출한 함수의 this에 바인딩한다.