# 배열

## 1. 배열이란?

- 배열(array)은 여러 개의 값을 순차적으로 나열한 자료 구조이다.
- 배열이 가지고 있는 값을 '요소(element)'라고 부른다.

- 원시값, 객체, 함수 ,배열 등 값으로 평가되는 모든 것이 요소가 될 수 있다.
- 배열의 요소는 인덱스(index)를 갖는다.
  - 인덱스 : 배열에서 *자신의 위치*를 나타내는 0 이상의 정수
  - 배열의 요소에 접근시 사용하며 대부분의 프로그래밍 언어에서 인덱스는 0부터 시작
- 요소에 접근시 대괄호 표기법을 사용한다.
- 배열의 길이를 나타내는 `length 프로퍼티`를 갖는다.
- 자바스크립트에 배열이라는 타입은 존재하지 않는다.

```javascript
const array = ['red', 'green', 'black'];

array[0] // 'red'
array[1] // 'green'
array[2] // 'black'

// length 프로퍼티
array.length // 3

// 배열의 타입
typeof array // object
```

</br>

- 배열은 배열 리터럴 또는 Array 생성자 함수로 생성할 수 있다. 
  - 두 경우 모두 배열의 생성자 함수 : Array
  - 배열의 프로토타입 객체 : Array.prototype (배열을 위한 빌트인 메소드 들을 제공)

```javascript
const arr = [1, 2, 3];

arr.constructor === Array // true
Object.getPrototypeOf(arr) === Array.prototype // true
```

</br>

#### 배열과 일반 객체의 구분

- 배열은 index와 length 프로퍼티를 갖기 때문에 반복문을 통해 순차적으로 값에 접근하기 적합한 자료구조이다.

| 구분             |           객체            |     배열      |
| ---------------- | :-----------------------: | :-----------: |
| 구조             | 프로퍼티 키 & 프로퍼티 값 | 인덱스 & 요소 |
| 값의 참조        |        프로퍼티 키        |    인덱스     |
| 값의 순서(index) |             x             |       ○       |
| length 프로퍼티  |             x             |       ○       |

</br>

## 2. 자바스크립트 배열은 배열이 아니다.

#### 일반적인 배열

- 동일한 크기의 메모리 공간이 빈틈없이 연속적으로 나열된 자료 구조이다.
- 배열의 요소는 하나의 데이터 타입으로 통일되어 있으며 서로 연속적으로 인접해 있다.
- 이를 **밀집 배열**(dense array)이라 한다.

</br>

#### 자바스크립트의 배열

- 자바스크립트의 배열은 일반적인 의미의 배열과 다르다.
- 배열의 요소를 위한 각각의 메모리 공간은 동일한 크기를 갖지 않아도 되며 연속적으로 이어져 있지 않을 수도 있다.
- 배열의 요소가 연속적으로 이어져 있지 않는 배열을 **희소 배열**(sparse array)이라 한다.

- 자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체이다.

</br>

#### 일반적인 배열과 자바스크립트 배열의 장단점

- 일반적인 배열은 인덱스로 배열 요소에 빠르게 접근할 수 있다. 하지만 특정 요소를 검색하거나 요소를 삽입 또는 삭제하는 경우에는 효율적이지 않다.
- 자바스크립트 배열은 해시 테이블로 구현된 객체이므로 인덱스로 배열 요소에 접근하는 경우, 일반적인 배열보다 성능적인 면에서 느릴 수 밖에 없는 구조적인 단점을 갖는다. 하지만 특정 요소를 검색하거나 요소를 삽입 또는 삭제하는 경우에는 일반적인 배열보다 빠른 성능을 기대할 수 있다.

- 자바스크립트 배열은 인덱스로 접근하는 경우의 성능 대신 특정 요소를 검색하거나 배열 요소를 삽입 또는 삭제하는 경우의 성능을 선택한 것이다.

</br>

## 3. length 프로퍼티와 희소 배열

- length 프로퍼티는 요소의 개수(=배열의 길이)를 나타내는 정수를 값으로 갖는다.

```javascript
// length 프로퍼티의 값은 빈 배열일 경우, 0이며 
// 빈 배열이 아닐 경우, 가장 큰 인덱스에 1을 더한 것과 같다.
[].length // 0
[1, 2, 3].length // 3
```

- length 프로퍼티의 값은 0과 2 - 1(4,294,967,296 - 1) 미만의 양의 정수이다.
- 배열에서 사용할 수 있는 가장 작은 인덱스는 0이며 가장 큰 인덱스는 2 – 2(4,294,967,294)이다.

- length 프로퍼티의 값은 배열에 요소를 추가하거나 삭제하면 자동 갱신된다.
- length 프로퍼티의 값은 배열의 길이를 바탕으로 결정되지만 임의의 숫자 값을 명시적으로 할당할 수도 있다.

```javascript
const arr = [1, 2, 3, 4, 5];

// length 프로퍼티에 현재 length 프로퍼티 값보다 작은 숫자 값을 할당
arr.length = 3;

// 배열의 길이가 줄어든다.
console.log(arr); // [1, 2, 3]


const arr = [1];

// length 프로퍼티에 현재 length 프로퍼티 값보다 큰 숫자 값을 할당
arr.length = 3;

// length 프로퍼티 값은 변경되지만 실제로 배열의 길이가 늘어나지는 않는다.
console.log(arr.length); // 3
console.log(arr); // [1, empty × 2]
```

위 예제의 출력 결과에서 empty × 2는 실제로 추가된 배열의 요소가 아니다. 

즉, arr[1]과 arr[2]에는 값이 존재하지 않는다. 실제 배열에도 아무런 변함이 없다. 값이 없이 비어있는 요소를 위해 메모리 공간을 확보하지 않으며 빈 요소를 생성하지도 않는다.

이처럼 배열의 요소가 연속적으로 위치하지 않고 일부가 비어있는 배열을 희소 배열이라 한다. 자바스크립트는 희소 배열을 문법적으로 허용한다. 

```javascript
// 희소 배열
const sparse = [, 2, , 4];

// 희소 배열의 length 프로퍼티 값은 요소의 개수와 일치하지 않는다.
console.log(sparse.length); // 4
console.log(sparse); // [empty, 2, empty, 4]

console.log(Object.getOwnPropertyDescriptors(sparse));
/* {1: {…}, 3: {…}, length: {…}}
	{
	1: {value: 2, writable: true, enumerable: true, configurable: true}
	3: {value: 4, writable: true, enumerable: true, configurable: true}
	length: {value: 4, writable: true, enumerable: false, configurable: false}
	[[Prototype]]: Object
	}
*/
```

희소 배열은 사용하지 않는 것이 좋다. 의도적으로 희소 배열을 만들어야 하는 상황은 발생하지 않는다. 희소 배열은 연속적인 값의 집합이라는 배열의 기본적인 개념과 맞지 않으며 성능에도 좋지 않은 영향을 준다. 배열에는 같은 타입의 요소를 연속적으로 위치시키는 것이 최선이다.

</br>

## 4. 배열 생성

### 4.1. 배열 리터럴

-  0개 이상의 요소를 쉼표로 구분하여 대괄호([])로 묶는다.
  -  값만 존재(프로퍼티 이름 X)

```javascript
const arr = [1, 2, 3];
console.log(arr.length); // 3

// 희소 배열
const arr = [1, , 3];

// 희소 배열의 length > 배열의 실제 요소 개수
console.log(arr.length); // 3
console.log(arr); // [1, empty, 3]
console.log(arr[1]); // undefined -> 사실은 객체인 arr에 프로퍼티 키가 ‘1’인 프로퍼티가 존재하지 않기 때문
```



### 4.2. Array 생성자 함수

- 전달된 인수가 1개이고 숫자인 경우, 인수를 length 프로퍼티의 값으로 갖는 배열을 생성한다.
- 최대 2 – 1(4,294,967,295)개의 요소를 갖을 수 있다.
- Array 생성자 함수에 전달할 인수는 0 또는 2 (4,294,967,296) 미만의 양의 정수여야 한다.
- 전달된 인수가 없는 경우, 빈 배열을 생성한다. 
- 전달된 인수가 2개 이상이거나 숫자가 아닌 경우, 인수를 요소로 갖는 배열을 생성한다.
- Array 생성자 함수는 new 연산자와 함께 호출하지 않더라도, 즉 함수로 호출하더라도 배열을 생성하는 생성자 함수로 동작한다. 이는 Array 생성자 함수 내부에서 new.target을 확인하기 때문이다.

```javascript
const arr = new Array(10);
console.log(arr); // [empty × 10]
console.log(arr.length); // 10

// 실제 배열의 요소는 존재하지 않음
console.log(Object.getOwnPropertyDescriptors(arr));
/*
{
 length: {value: 10, writable: true, enumerable: false, configurable: fals
e}
}
*/

// 전달된 인수가 음수이면 에러가 발생한다.
new Array(-1); 
RangeError: Invalid array length
// 배열은 요소를 최대 4,294,967,295개 갖을 수 있다.
new Array(4294967296); 
RangeError: Invalid array length

// 전달된 인수가 음수이면 에러가 발생한다.
new Array(-1); // RangeError: Invalid array length
// 배열은 요소를 최대 4,294,967,295개 갖을 수 있다.
new Array(4294967296); // RangeError: Invalid array length

// 전달된 인수가 없을 경우
const empty = new Array();
console.log(empty); // []

// 전달된 인수가 2개 이상이면 인수를 요소로 갖는 배열을 생성한다.
const arr1 = new Array(1, 2, 3);
console.log(arr1); // [1, 2, 3]
// 전달된 인수가 1개지만 숫자가 아니면 인수를 요소로 갖는 배열을 생성한다.
const arr2 = new Array({});
console.log(arr2); // [{}]

// Array 생성자 함수를 함수로 호출시
const arr = Array(1, 2, 3);
console.log(arr); // [1, 2, 3]
```



























## 참고자료

- 이웅모.(2020). 모던 자바스크립트 Deep Dive. 파주: 위키북스.