## Today I Learned


Friday Quiz

[vertical-align]

vertical-align은 오로지 **inline**과 **table-cell** 엘리먼트에만 적용된다는 것에 주의하세요:

> 이 속성을 block level 엘리먼트에 사용할 수 없습니다.

```
/* keyword values */
vertical-align: baseline;
vertical-align: sub;
vertical-align: super;
vertical-align: text-top;
vertical-align: text-bottom;
vertical-align: middle;
vertical-align: top;
vertical-align: bottom;

/* <length> values */
vertical-align: 10em;
vertical-align: 4px;

/* <percentage> values */
vertical-align: 20%;

/* Global values */
vertical-align: inherit;
vertical-align: initial;
vertical-align: unset;

```

Know more about CSS selector : [css selector](https://code.tutsplus.com/ko/tutorials/the-30-css-selectors-you-must-memorize--net-16048)

 
## `<main>` 태그 중 group1 마크업 _ 첫번째

[formsfree](https://formspree.io/)

### 로그인 영역 : 

* div태그가 아닌 section(.login) 태그로 영역 감싸기

*	h2(.login-heading) 태그로 제목 레벨을 지정
	 `<h2 class="login-heading">로그인</h2>`

* form태그로 하위영역 감싸기 
	`<form class="login -form" action="url" or [method="GET" | "POST"]> </form>`

* form태그 하위에 fieldset영역 -> 그 하위에 legend (로그인폼)로 묶어줌 
	
	- div가 범용 폼 서식이라면 fieldset은 form태그에만 사용되는 서식

### 아이디 | 비밀번호 영역 : 

* div 태그로 묶어줌 


아이디  `<div class="user-id"></div>`
                               
비밀번호 `<div class="user-pw"></div>`

* div태그 안에 label 태그 추가

> 아이디

```
<div class="user-id">
	<label for="user-id">아이디</label>
</div>
```	

>비밀번호

```
<div class="user-pw">
    <label for="user-pw">비밀번호</label>
</div>
```	

* 아이디와 비밀번호를 쓰는 입력란이 있어야 하므로 input를 각각 추가해준다
* 레이블과 입력서식(input id의 값과 lable for의 값을) 을 연결을 해줌으로써 접근성과 사용성을 높인다.

-
>아이디

```
<div class="user-id">
    <label for="user-id">아이디</label>
    <input type="email" id="user-id" name="user-id" required placeholder="이메일 주소">
</div>
``` 

### **`<input>`**태그의 속성으로 사용할 수 있는 몇가지

| 		Attribute		|	Value		|		Descripton |
|-------------------|------------|-----------------|
|alt |	text |	Specifies an alternate text for images (only for type="image")
|max	| number , date | 	Specifies the maximum value for an `<input>` element
| maxlength | 	number	| Specifies the maximum number of characters allowed in an `<input>` element|
| placeholder |	text	|	Specifies a short hint that describes the expected value of an `<input>` element|
|required	|	required		|	Specifies that an input field must be filled out before submitting the form|
|type | button, checkbox, color, date, datetime-local, email, file, hidden, image ,month , number ,password, radio, range , reset, search, submit, tel, text, time , url, week |Specifies the type `<input>` element to display|
|value	|	text	|  Specifies the value of an `<input>` element |




>비밀번호

```
<div class="user-pw">
    <label for="user-pw">비밀번호</label>
    <input type="password" id="user-pw" name="user-pw" required maxlength="8" placeholder="8자리 이하">
</div>

```

* maxlength="8"`를 추가하면 여덟 글자만 입력하게 제어
* placeholder="8자리 이하"

>로그인 버튼 :

* `<button type ="submit" class = "btn-login"></button>` 


### `>회원가입 | >아이디/비밀번호 찾기`

ul태그 -> li -> a 구조

```
<ul class="sign">
 <li><a href="#">회원가입</a></li>
 <li><a href="#">아이디/비밀번호 찾기</a></li>
</ul>
```



## CSS를 이용한 디자인하기 

코드 작성 전에 설계부터 하고 가세요!!!


1. .login (배경, 상자 그림자 효과) : width 250px, padding 10px, 
1. .login-heading (글자색상, 글꼴): padding or margin사용가능 | 들여쓰기(10px)
1. .login-form (여백) : margin 위쪽방향 10px, border-radius 5px, background #fff, padding 왼쪽 오른쪽 위쪽 10px,  
1. fieldset : m/p/b 0
1. legend : readable-hiddle으로 화면에 출력되지 않게함
1. .user-id | . user-pw 하위 label : width값 지정 (display:inline-block; 
1. input상자 : width 10px height 22px 
1. .btn-login를 position:absolute, top:0, r:0 (fieldset을 position:relative처리) 


추가된 css코드

```
/* 로그인 */
.login{
    background-color: #F37335;
    background-image: radial-gradient(circle at left top, #F37335 , #FDC830);
    box-shadow: 5px 5px 0 0 #aaa; /*박스 크기에 영향을 주지 않는다*/
    padding:10px;
    border-radius: 5px;
}
.login-heading{
    color:#ff0;
    font-weight: 700;
    /* padding-left:10px | margin-left: 10px;*/
    text-indent: 10px; /* block 요소일때만 사용가능 | 박스 크기에 영향을 주지 않는다 */
}
.login-form{
    background-color: #fff;
    margin-top: 10px;
    border-radius: 5px 5px 0 0;
    padding: 10px 10px 0 10px;
}
.login-form fieldset{
    border:0;
    padding: 0;
    margin:0;
    position: relative;
    border-bottom: 1px solid #aaa;
    padding-bottom: 10px;
}
.user-pw{
    margin-top: 6px;
}
.login-form label{
    width:4em;
    display: inline-block;
}
.login-form input{
    width: 95px;
    height:22px;
    padding-left: 5px;
    /* border: 0;
    border-bottom: 1px solid #666; 입력란 보더 디자인에 따라 바꿔줄 수 있음*/
}
.btn-login{
    width:50px;
    height: 50px;
    border:0;       /* 브라우저마다 에이전트스타일값이 있어 꼭 m.p.b같은 기본적인 값을 0으로 지정해주어야함 */
    padding: 0; 
    margin:0; 
    background-color: #F37335;
    color: #fff;
    position: absolute;
    top:0;
    right:0;
    border-radius: 3px;
}
.sign{
    background-color: #fff;
    border-radius: 0 0 5px 5px;
    padding: 2px 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.sign li::before {
    content: "g";
    font-family: "webcafeIcon";
    position: relative;
    top: 2px;
    color: #F37335;

}
.sign a{
    display: inline-block;
    letter-spacing: -1px; /* 자간 조정 | 본문내용일 경우엔 가독성이 떨어져 비추 */
    padding: 8px 0;
}
```



## `<main>` 태그 중 group1 마크업 _ 두번째


### 유효성검사 배너링크 


1. section태그를 사용하고 .validation
1. h2.readable-hidden 유효성 검사 베너
1. ul.validation_list를 만들고 그 안에 a태그를 감싸고 있는 li태그를 두개 만든다.

추가된 html코드

```
<section class="validation">
                    <h2 class="readable-hidden">유효성 검사 배너</h2>
                    <ul class="validation-list">
                        <li><a href="https://validator.w3.org/" target="_blank" title="마크업 유효성검사 서비스로 이동">W3C Markup Validation</a></li>
                        <li><a href="https://jigsaw.w3.org/css-validator/" target="_blank" title="CSS 유효성검사 서비스로 이동">CSS Validation Service</a></li>
                    </ul>
 </section>
```


## CSS를 이용한 디자인하기


1. 위 아래 padding 20px 
2. 각자 높이는 30px | 두 부분 사이의 간격은 10px

### **`<img>`**태그의 속성으로 사용할 수 있는 몇가지
|Attribute	|	Value	|	Description|
|------------|----------|-------------|
|alt	|text	|Specifies an alternate text for an image|
|src	| URL	| Specifies the URL of an image|

>이 외에도 여러가지 속성이 있음 | 참조 :[html <img>](https://www.w3schools.com/tags/tag_img.asp)


link태그를 선택해서 디자인하는 방법

```
.validation-list{
    margin-top: 20px;
}
.validation-list a{
  display: block;
  border: 1px solid #999;
  border-radius: 15px;
  margin-top: 10px;
  height: 30px;
  line-height: 30px;
  text-indent: 45px;
  background: url("images/validation_icon.png") no-repeat 20px 50%, linear-gradient(to bottom, #aaa, #eee);
}
```


## `<main>` 태그 중 group1 마크업 _세번째

마크업

`<section>`태그로 전체를 감싼 후 

1. 웹관련 용어 `<h2>` .term-heading
1. 웹표준이랑?
1.	이미지
1. 설명단락

`<dl>태그` : 용어정리태그를 사용 | .term-list

1. 웹표준이랑? `<dt>` .term-list-subject
1. 이미지	`<dd>` .term-list-thumnail
1. 설명단락	`<dd>` .term-list-brief


```
<section class="term">
   <h2 class="term-heading">웹 관련 용어</h2>
      <dl class="term-list">
          <div class="odd">
            <dt class="term-list-subject">웹표준 이란?</dt>
              <dd class="term-list-thumbnail">
                <img src="images/web_standards.gif" alt="W3C">
                	 </dd>
                    <dd class="term-list-brief">
          W3C 단체에서 규정한 웹 기술 사양에 대한 규칙을 말하며 표준 규격은...
               	 </dd>
      		</div>
    </dl>
</section>
```

## `<dl>`: The Description List element [ `<dl>` 태그에 관한 설명 중...]

### Wrapping name-value groups in `<div>` elements  [`<div>`태그을 사용해 같은 성향이 요소 그룹화하기]


WHATWG HTML allows wrapping each name-value group in a `<dl>` element in a `<div>` element. This can be useful when using microdata, or when global attributes apply to a whole group, or for styling purposes.

예제

```
<dl>
  <div>
    <dt>Name</dt>
    <dd>Godzilla</dd>
  </div>
  <div>
    <dt>Born</dt>
    <dd>1952</dd>
  </div>
  <div>
    <dt>Birthplace</dt>
    <dd>Japan</dd>
  </div>
  <div>
    <dt>Color</dt>
    <dd>Green</dd>
  </div>
</dl>

```

[Wrapping name-value groups in <div> elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl)

