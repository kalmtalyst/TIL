# HTML: 시맨틱(Semantics)

## :sparkles: 1. HTML5가 정확히 무엇인가?

- HTML을 정의하는 가장 발전된 표준으로 새로운 형태의 HTML을 말한다.
- 새로운 요소, 속성, 행동을 가진 새로운 버전의 HTML을 말한다.
- [HTML Standard](https://html.spec.whatwg.org/)(브라우저가 구현하는 사양의 표준)
- 즉, HTML5는 문서의 한 버전으로 브라우저 회사들이 최신 버전의 spec에 따라 특징들을 구현한다.



## :sparkles: 2. 블록 vs 인라인 요소 - Div와 Span

- 블록 레벨 요소의 경우 해당 줄 전체를 자동으로 잡는다.

  - `<div>`: Division, 요소를 그룹화하는 블록 제네릭 컨테이너

    div는 전체 블록을 차지하고 위아래의 콘텐츠를 밀어낸다.

- 인라인 레벨 요소는 전체 블록을 차지하지 않는다.

  - `<span>`: 인라인 제네릭 컨테이너

    텍스트나 컨텐츠를 span으로 감쌀 경우 하나의 그룹으로 묶어서 CSS로 스타일을 정할 수 있다.




## 3. 기타 요소 모음

- `<hr>`: 스크린을 수평으로 가로지르는 선 생성(문단 레벨 요소들 사이의 공백)
- `<br>`: linebreak, 줄 바꿈
- `<sup>`: 윗첨자
- `<sub>`: 아랫첨자



## 4. 엔티티 코드

- [Entity Code](https://entitycode.com/): 예약 문자 또는 특수 문자를 실행하기 위해 사용된다.

  몇몇 문자들은 브라우저가 HTML 태그와 관련된 내용으로 인식할 수 있으므로 엔티티코드를 사용하여 해당 문자를 표기하여야 한다.



## :sparkles: 5. 시맨틱 마크업

- 시맨틱 마크업이란? 

  의미있는 마크업을 의미한다.

  마크업에 의미를 부여하는 것은 매우 중요한데 부여된 의미는 다른 컴퓨터나 크롤러 프로그램에 의미가 있다. 크롤러가 페이지의 마크업을 만났을 때 네비게이션 링크를 찾는다고 가정할 때 nav 바에 있는 모든 링크나 푸터에 있는 링크를 찾아 방문과 수집을 반복하는데 의미없는 마크업을 하면 페이지의 구성이 명확하지 않기 때문이다. 또 접근성에 위배된다. 스크린 리더를 사용해야하는 사용자들에게 정확한 페이지의 구성을 전달할 수 없다. 

- 웹 페이지의 구성에서 연속적인`<div>`의 반복은 의미가 없다.

<img src="C:\Users\soarm\AppData\Roaming\Typora\typora-user-images\image-20220518123727500.png" alt="image-20220518123727500" style="zoom:67%;" />



- 시맨틱 마크업 예시

<img src="C:\Users\soarm\AppData\Roaming\Typora\typora-user-images\image-20220518123825965.png" alt="image-20220518123825965" style="zoom: 67%;" />

- 모두 div와 같은 기능을 하나 각자 의미가 있다.



## 6. 시맨틱 요소 사용법

- `<main>`: 문서의 주요 내용을 의미한다. 원칙적으로 페이지 전반에서 계속 반복되는 내용은 전부 제외한다.

  > 반복되는 내용
  >
  > navigatio link들, copyright, information, site logo들, search form들

```html
<header>Gecko facts</header>

<main>
    <p>Geckos are a group of usually small, usually nocturnal lizards. They are found on every continent except Australia.</p>
 
    <p>Many species of gecko have adhesive toe pads which enable them to climb walls and even windows.</p>
</main>
```



- `<section>`: 웹 사이트의 독립적인 내용의 한 부분을 나타낸다.

  (nav 대신 section을 사용할 수동 있으나 nav를 사용하는 것이 의미적으로 알맞음)

```html
<h1>Choosing an Apple</h1>
<section>
    <h2>Introduction</h2>
    <p>This document provides a guide to help with the important task of choosing the correct Apple.</p>
</section>

<section>
    <h2>Criteria</h2>
    <p>There are many different criteria to be considered when choosing an Apple — size, color, firmness, sweetness, tartness...</p>
</section>
```



- `<article>`: 문서 내의 독립적인 구성을 나타낸다.

```html
<article class="forecast">
    <h1>Weather forecast for Seattle</h1>
    <article class="day-forecast">
        <h2>03 March 2018</h2>
        <p>Rain.</p>
    </article>
    <article class="day-forecast">
        <h2>04 March 2018</h2>
        <p>Periods of rain.</p>
    </article>
    <article class="day-forecast">
        <h2>05 March 2018</h2>
        <p>Heavy rain.</p>
    </article>
</article>
```

 

- `<aside>`: 문서의 일부가 될 수도 있으나 엄밀히 말해 필요조건이 아니므로 문서의 일부는 아니다.

- `<header>`: 일반적으로 내용을 소개한다.

  헤더와 푸터 모두 링크들과 네비게이션 중첩된 nav 등을 포함한다. 다른 요소안에 머리말을 넣을 수도 있다.  시맨틱 요소들은 다양하게 응용할 수 있으며 각 시맨틱 요소의 의미에 맞으면 된다. 

```html
<footer>
	<p>
        This is my website
    </p>
    <ul>
        <li><a href="#">Contact</a></li>
        <li><a href="">Help</a></li>
    </ul>
</footer>
```



- `<time>`: 인라인 요소이며 시간이나 날짜를 의미하는 내용의 양옆에 입력한다.

  기계 판독 가능한 포맷에서 datetime 속성을 명시해야 한다.

- `<figure>`: 독립적인 내용을 나타내며 캡션이 달린 경우도 있다.

  일러스트나 다이어그램처럼 사람들의 시선을 끌고 캡션이 달린 것을 의미한다.

- `<abbr>`
- `<data>`





## 참고자료

- Udemy: The Web Developer 부트캠프 2022
