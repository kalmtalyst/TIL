# 웹 접근성(Web Accessibility)

## 1. 웹 접근성의 이해

### 1) 웹 접근성이란

- 어떠한 사용자가 어떠한 기술환경에서도 전문적인 능력 없이 웹 사이트에서 제공하는 모든 정보에 접근할 수 있도록 보장하는 것
  - 모든 사용자가 모든 기기에서 웹에 접근할 수 있도록 하는 것
- 왜 준수해야할까?
  - 장애인 차별 금지법(장차법)
    - 지키지 않을 경우 법적 처벌을 받을 수 있기 때문이다.

</br>

### 2) 장애 환경

> 웹의 힘은 보편성에 있다. 장애에 구애 없이 모든 사람이 접근할 수 있도록 하는 것이 웹의 필수 요소다. 
>
> The power of the Web is in its universality. Access by everyone regerdless of disability is an essential aspect.
>
> *Tim Berners-Lee*

- 전맹 시각 장애: 스크린 리더

- 저시력 시각 장애: 화면 확대 기능, 고대비

- 중증 운동 장애: 헤드 포인터, 빅키 키보드, 키가드

- 손 운동 장애: 한 손 사용자용 키보드, 트랙볼 마우스

- 청각 장애: 안내 문구, 자막

- 맥 사용자: 위의 장애유형 외, 윈도우에서만 사용이 가능한 웹
- 느린 인터넷: 느린 로딩, 깨지는 UI 등은 비장애인들에게 웹 페이지를 인식하는데 불편을 야기

</br>

## 2. 웹 접근성 지침

### 0) 웹 접근성 지침 소개

**WCAG**

W3C에서 발표한 웹 컨텐츠 접근성 지침



**KWCAG**

해외 웹 표준 기술 동향을 토대로 국내 설정에 맞게 반영된 한국형 웹 컨텐츠 접근성 지침 (원칙 4개, 지침 13개, 항목 24개)

| 원칙          | 지침                                                         |
| ------------- | ------------------------------------------------------------ |
| 인식의 용이성 | 대체텍스트<br /> 멀티미디어 대체 수단<br /> 명료성           |
| 운용의 용이성 | 입력장치 접근성<br /> 충분한 시간 제공<br /> 광과민성 발작 예방<br /> 쉬운 내비게이션 |
| 이해의 용이성 | 가독성<br /> 예측 가능성<br /> 컨텐츠의 논리성<br /> 입력 도움 |
| 견고성        | 문법 준수<br /> 웹 애플리케이션 접근성                       |



### 1) 적절한 대체 텍스트 제공

텍스트 아닌 컨텐츠는 그 의미나 용도를 인식할 수 있도록 대체 텍스트를 제공해야 한다.

<br />

#### alt 속성으로 대체 텍스트 제공

```html
<img src="/design/theme/youth/images/main/main_logo.png" alt="서울청년포털 청년몽땅정보통">
```

<br />

#### 마크업으로 대체 텍스트 제공

- alt의 값이 장문일 경우

```html
<img src="160314.png" alt="">
<p class="blind">
  주식수수료 평생무료 비대면계좌개설 신규/온라인/유관기관 제비용 제외 2018년 12월 31일까지 선물/옵션 1년 무료, 신용이자 연 3.5% 60일 우대
</p> 
```

#### :warning: 주의

해당 마크업을 보이지 않게 처리하기 위해 아래와 같은 처리는 스크린 리더가 읽을 수 없다.

```css
.blind {display: none;...}
.blind {visibility: hidden;...}
```

#### :o: 예시

**HTML**

```html
<h1 class='logo'>
    <a href="/site/main/home">
    	<span class="blind">서울청년포털</span>
    </a>
</h1>
```

**CSS**

```css

.blind {
    display: block;
    position: absolute;
    left: -9999px;
    
}
```

<br />

#### 데이터 차트나 복잡한 컨텐츠

데이터 차트와 같이 복잡한 컨텐츠도 사용자가 해당 컨텐츠의 의미를 충분히 파악할 수 있도록 대체 텍스트를 제공해야 한다.

<br />

#### 의미 있는 이미지

의미 있는 이미지 또한 시각적으로 보는 것과 동등하게 대체 텍스트를 제공해야 한다.

<br />

#### 배경 이미지

의미 있는 이미지가 이미지 요소가 아닌 배경으로 처리된 경우에도 대체 텍스트를 제공해야 한다.

<br />

#### 의미 없는 이미지

이미지 요소에 alt속성을 제공하는 것은 필수이다. 의미 없는 이미지의 경우 대체 텍스트로 공백 문자, 즉 다음와 같이 파일명을 읽는 일이 없이 아무것도 읽어주지 않도록 alt를 빈 값으로 제공해야 한다.

```html
<img src="123456.jpg" alt="">
```

<br />

#### 이모티콘 이미지

이모티콘의 의미가 다 다른 만큼 ‘미안해하는 브라운’처럼 시각적으로 인식하는 것과 동일하게 대체 텍스트를 제공해야 한다.

```html
<img src="brown_img_5.png" alt="미안해하는 브라운"> 
```

<br />

#### QR코드 이미지

QR코드의 경우 시각적으로 인식할 수 없는 사용자들은 해당 링크 주소를 알 수 있도록 대체 텍스트를 제공해야 한다.

```html
<a href="http://www.naver.com">
    <img src="qr_code.png" alt="http://www.naver.com 바로 가기 QR코드">
</a> 
```

<br />

#### 썸네일 이미지

썸네일의 경우 이미지와 텍스트를 각각의 링크로 구현하지 않고 하나의 링크로 묶어준 뒤 alt 속성은 빈 값으로 제공한다.

```html
<a href="…">
    <img src="thumb01.jpg" alt="">
    <span>웨딩 사진을 모티브로 만든 도일리 #프랑스자수</span>
</a> 
```

<br />

#### 캡차 이미지

캡차 이미지에 대체 텍스트로 이미지에 있는 텍스트를 제공하면 스크린리더를 사용자에게는 정답을 알려주는 것이 되므로 캡차 이미지에는 대체 텍스트로 '캡차' 또는 '보안 문자'라고 제공하고 따로 음성으로 들을 수 있도록 청각적 캡차를 제공해야 한다.

> 캡차
>
> 사용자가 실제 사람인지 컴퓨터 프로그램인지 구별하기 위해 사용하는 방법

<br />

#### 사용자가 업로드하는 이미지

사용자가 업로드하는 이미지의 경우 사용자가 직접 대체 텍스트를 작성할 수 있도록 안내와 함께 툴을 제공해야 한다. 사용자가 입력한 내용이 대체 텍스트로 제공되도록 구현한다.

<br />

## 참고자료

- 한국정보화진흥원의 웹 접근성 연구소
- 부스트코스 : [**웹 UI 개발**](https://www.boostcourse.org/web344/home)