# HTML 이해하기

## 1. HTML 소개

### 1.1. HTML이란?

- Hyper Text Markup Language의 줄임말

- 웹 페이지를 만드는 언어
- Hyper Text 
  - 단순한 텍스트를 넘어 웹 페이지의 특정 부분과 연결할 수 있는 기능을 가진 텍스트
  - 즉, 링크를 의미
- Markup Language
  - 정보를 구조적, 계층적으로 표현 가능한 언어
- 확장자 : html

</br>

### 1.2. HTML의 역사

- 1990년대 영국의 물리학자 팀 버너스리가 제안하여 개발

- 초기 개발 목적 : 연구소의 연구원들간 신속한 정보와 문서 공유

</br>

## 2. HTML 문법

### 2.1. 태그(Tag)

#### 태그란? 

- HTML에서 가장 주요하고 기본이 되는 규칙
- '무언가를 표시하기 위한 꼬리표, 이름표'라는 의미(HTML에서도 비슷한 의미로 해석)
- 태그들을 이요해 코드 작성 시 브라우저가 이를 인식해 내용을 표현

</br>

#### 태그 사용 방법

- `<`, `>` 기호로 표현하며 `<`, `>` 기호 사이에 태그 이름을 삽입

- 시작 태그, 종료 태그로 이루어짐

```html
<h1>Hello World!</h1>
```

</br>

#### 요소란?

- 내용을 포함한 태그 전체를 요소(Element)라고 한다.
- 태그와 요소의 의미는 다르므로 주의하자

</br>

#### 정리

- HTML은 태그들의 집합이다.

- HTML에는 많은 종류의 태그들이 있다.
- 각가의 태그들은 고유의 의미를 가지며 이에 맞게 사용해야 한다.
- 태그는 다양한 마크업 언어(`XML`, `SGML`, `XHTML`)에서 사용된다.

</br>

### 2.2. 속성(Attribute)

#### 속성이란?

- 태그에 추가로 정보를 제공하거나 태그의 동작이나 표현을 제어할 수 있는 설정값

</br>

#### 속성 사용 방법

- 이름과 값으로 이루어짐
- 시작 태그에서 태그 이름 뒤에 공백으로 구분 후 속성 이름="속성값"으로 표현
- 속성값은 홑따옴표(')와 쌍따옴표(")로 감싸 표현

```html
<h1 id="title">Hello World!</h1>
```

</br>

#### 여러 속성을 사용하는 방법

- 속성은 의미, 용도에 따라 여러가지가 존재, 하나의 태그에 여러 속성 선언 가능
- 여러 개의 속성 선언 시, 공백으로 구분

```html
<h1 id="title" class="main">
    Hello World!
</h1>
```

- 동일한 속성 중복 선언 불가능

``` html
<!-- 틀린 경우 -->
<p style="color:red;" style="background:yellow">HTML5</p>

<!-- 올바른 경우 -->
<p style="color:red; background:yellow">HTML5</p>
```

</br>

### 속성의 종류

- 글로벌 속성
- 특정 태그에서만 사용 가능 속성
- 선택적 사용 가능 속성
- 특정 태그 필수 속성

</br>

### 2.3. 태그 중첩(Nesting tags)

- 태그 안에 다른 태그를 선언 가능
- 태그를 중첩해서 사용 시 중첩되는 태그는 부모 태그를 벗어서는 안됨

```html
<!-- 틀린 경우 -->
<h1>Hello, <i>HTML</h1></i>

<!-- 올바른 경우 -->
<h1>Hello, <i>HTML</i></h1>
```

</br>

### 2.4. 빈 태그(Empty tag)

- 빈 태그는 중첩된 태그나 내용을 갖지 않음 
- 종료 태그는 무효함

- 예시

  - `<area>`
  - `<base>`

  - `<br>`
  - `<col>`
  - `<embed>`

  - `<img src="">`

  - `<input type="">`

  - `<hr>`

  - `<link>`

  - `<meta>`
  - `<param>`
  - `<source>`
  - `<track>`
  - `<wbr>`

</br>

#### 빈 태그의 특징

- replacement tag라고도 함

- 속성을 통해서 화면에 나타내거나 화면에 표시되지 않더라도 문서 내부적으로 부가정보 제공 등의 다른 용도로 사용

</br>

### 2.5. 공백(Space)

- HTML은 두 칸 이상의 공백을 무시한다.

```html
<!-- 아래 출력 결과는 모두 동일하다. -->
<h1>Hello, HTML</h1>
<h1>Hello,     HTML</h1>
<h1>
    Hello,
    HTML
</h1>
```

</br>

### 2.6. 주석

- 주석은 화면에 노출되지 않고 메모의 목적으로만 사용한다.
- HTML 파일 내에 주석 표시는 브라우저가 해당 부분을 인식하여 해석하지 않는다.
-  `<!--` 로 표시하고, `-->` 표시로 종료

```html
<!-- 여기에 작성되는 내용들은 모두 주석 처리가 됩니다. -->
<!-- 주석은 여러 줄로 작성할 수도 있습니다.
    <h1>Hello, HTML</h1>
    위 <h1>태그는 브라우저가 해석하지 않습니다.
-->
```

</br>

## 3. 문서의 기본 구조

### 3.1. HTML의 기본 구조

- 문서 타입(DOCTYPE)
- `<html>` 요소

```html
<!DOCTYPE html>
<!-- HTML 문서의 시작 -->
<html lang="ko-KR">
<!-- head 요소의 시작 -->
<head>
 <!-- 문자 인코딩 선언 -->
 <meta charset="utf-8">
 <!-- title 요소의 시작 -->
 <title>문서 제목</title>
 <!-- title 요소의 종료 -->
</head>
<!-- head 요소의 종료 -->
<!-- body 요소의 시작 -->
<body>
 본문
</body>
<!-- body 요소의 종료 -->
</html>
<!-- HTML 문서의 종료 -->
```

#### 문서형 정의(DOCTYPE)

- 이 문서가 어떤 버전으로 작성되었는지 브라우저에 알려주는 선언문이며 반드시 문서 내 최상단에 선언되어야 한다.

- HTML5에서는 문서의 버전 및 문서 타입이 생략된, 간소화된 형식을 가진다.
- 모든 웹브라우저에서 표준 모드(Standards Mode)로 렌더링될 수 있도록 하는 역할 만을 담당하기 때문이다.

```html
<!-- HTML5 DOCTYPE(DTD) -->
<!DOCTYPE html>
```

</br>

#### `<html>`요소

- 모든 웹 페이지의 콘텐츠는 `<html>` 태그와 `</html>` 태그 안에 선언해야 한다.
- `<html>`에 lang 속성을 사용하여 기본 언어를 지정 가능

- `<head>`태그에 위치하는 태그들은 브라우저 화면에 표시되지 않음

  문서의 기본 정보 설정이나 외부 스타일 시트 파일 및 js 파일을 연결하는 등의 역할을 한다.

- `<meta>태그의 charset 속성은 문자의 인코딩 방식을 지정

- `<body>`태그에는 실제 브라우저 화면에 나타나는 내용을 선언

  즉, HTML 문서의 본문 부분에 해당함

</br>

</br>

## 참고자료

- [boostcourse : 비전공자를 위한 HTML/CSS](https://www.boostcourse.org/)

- [MDN : Empty element](https://developer.mozilla.org/en-US/docs/Glossary/Empty_element)

- [웹접근성과 웹표준 : HTML 마크업](https://seulbinim.github.io/WSA/html-basic.html)



