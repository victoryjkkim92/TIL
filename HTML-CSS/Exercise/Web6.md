## Today I learned

reference : [let's learn layout](http://learnlayout.com/display.html)


오늘 실습

[비주얼영역]

보통은 마크업에 이미지를 삽입(`<img>`태그 사용)해서 디자인을 하지만 좋은 방법은 아님. 우리 실습은 (position:relative | absolute 사용해서 위치지정)

`<.h2>`사용해서 제목을 만들어 줄 수는 있지만 내용없이 그냥 비주얼이기 때문에 생략


1. 나무 / 잎 - 배경 body영역에 삽임

2. 꽃 - 배경 .visual영역에 삽입

3. 텍스트[Web Standards & Accessibility] - `<p>`태그 사용 | `.visual-text` 클래스이름 추가

### HTML Entities

Some Other Useful HTML Character Entities : [HTML Entities](https://www.w3schools.com/html/html_entities.asp)


영역의 정확한 높이를 지정하는 것은 ideal하지는 않지만 필요하다면 지정하는 것도 좋다. 

`min-height` | `min-width` 을 사용하면 좀 더 유연하게 작업할 수 있음.

multi-background : `background-color`과 `background-image : gradient` 두 개 사용



```
body{ 
    color: #181818;
    background-color: #aaa;
    background-image: linear-gradient(to bottom, #aaa, #eee),
    url("images/bg_flower.png");
    /* 1. background-image에 두개의 값을 
    	사용하고 싶으면 ','를 사용해서 추가해주면 됨
    	2. 이렇게만 적용하면 url로 적용한 이미지 파일이 출력되지 않는다.
    	 	why? 여러 레이어가 적용되면 가장 먼저 만든 것이 맨 위에 출력!*/
    font-family: "Noto Sans KR", sans-serif;
    /* 맨 위부분 참조: @import url("https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,700");*/
    font-weight: 400;
    font-size: 1.4rem;
} 
```

* 이미지 최적화를 꼭 해서 이미지를 삽입해주세요! 

* 이러한 방법으로 이미지를 삽입하면 '요소박스'의 크기만큼 '배경 이미지'가 여러 번 출력됨
	- `background-repeat: no-repeat;`를 추가해주어야 배경이미기 크기만큼 한번만 출력됨 (default = repeat)
	
`background-size: 0 0;`


* 이미지를 원하는 위치에 출력할 수 있음 (요소박스 기준) : 배경의 배치 원리

1. 30px 40px (length값을 직접 줄 경우)
2. 30% 40% (백분율로 주었을 경우)

`background-position: 0 0;`속성사용

* 이미지가 스크롤을 올렸을 때의 반응

`background-attachment: scroll | fixed;`

### background 단축표기법

```
	background-color: #aaa;
    background-image: url("images/bg_flower.png"),
   				 linear-gradient(to bottom, #aaa, #eee);
    background-repeat: no-repeat;
    background-position: 50% 0, 100px 50px;
    background-size: 1000px 500px;
    background-attachment: fixed; 
```

이 여섯개 개별속성 중 다섯개를  `background: ;`라는 대표 속성을 사용해서 표현해보자. 순서는 상관없지만, **`background-color` 속성은 대표 속성 다음에(밑에) 써주세요!**  

```
background: 
	url("images/bg_flower.png") /* */
		no-repeat 	/* */
			50% 0 		/* */
				fixed 		/* */
					/500px 200px		/* */
					, 			/* */
		linear-gradient(to bottom, #aaa, #eee) /* */ 
				repeat 	/* */
					0 0 	/* */
						/100% 100%	/* */ 
								fixed			/* */;
							
background-color: #aaa;
```




### background-attachment: scroll | fixed;

Parallax Scrolling : [Parallax Scrolling](https://www.w3schools.com/howto/howto_css_parallax.asp)



# Animation

Animation 단축표기법 : 선언 순서 중요하지 않아요

[Animation](https://www.w3schools.com/cssref/css3_pr_animation.asp)

```
animation-name: flowerAni;
    animation-duration: 2s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;  
    animation-direction: alternate; 
```
이 코드들을 단축표기법으로 다시 적어 봅시다

>animation: flowerAni 2s forwards infinite alternate; 


animation-play-state: paused;

-


 

* scenario

1. 애니메이션의 이름 정하기

	실습 : textAni
	
1. 어떤 효과를 줄 것인지 나열하기

  	실습 
  
  * 텍스트 이동 (왼쪽 상단 '0, 0' -> 오른쪽 하단'400px, 75px') 
  
  			| 여백을 조정해서 변화 만들 수 있음 (padding(배경이 없다면), margin)
  
  * 텍스트 크기 변화 (12px ->24px) 	| 		font-size속성 
  * 텍스트 투명도 변화 (0.2 -> 1) 		|	 color속성, opacity(박스자체)


# Animation 문법

@charset "utf-8";        /* HTML과 같은 인코딩 방법 선언 */


 * 애니메이션 선언

```
@keyframes textAni{
    from{}	or 	0%{}	/* 시작점 */
    to{}  or. 100%{}	/* 종료점 */
}
``` 

값을 지정해줌 

```
@keyframes textAni{
    0%{
        font-size: 12px;   		/* 시작점 폰트사이즈를 12px */
        color: rgba(0,0,0,0.2);	/* 색지정 | 투명도 0.2(투명함) */
    }
    100%{
        font-size: 24px; 			/* 종료점 폰트사이즈를 24px */
        color: rgba(0,0,0,1);		/* 색지정 | 투명도 1(불투명) */
    }
}
```


## 텍스트 이동


### 1. 텍스트 이동시키기 : 'transform:translate()' 함수를 사용  | 브라우저 성능 측에서 가장 이상적인 방법

예 : `transform: scale () | translate () | rotate()`

referenct : [transform 함수](https://developer.mozilla.org/ko/docs/Web/CSS/transform)



```
.visual{
    height: 120px; 
    overflow: hidden;
}
@keyframes textAni{
    0%{
        font-size: 12px;
        color: rgba(0,0,0,0.2);
        transform:translate(0,0); 
    }
    100%{
        font-size: 24px;
        color: rgba(0,0,0,1);
        left: 400px;
        transform:translate(400px, 75px);  
  /* overflow된 것 처럼 출력됨 _ 
  			1. 부모영역(.visual)에 overflow:hidden 추가
       	    2. 자신의 영역(.visual-text)의 display:inline-block으로 변경 */
    }
}
.visual-text{
    background: coral;
    animation-name: textAni;
    animation-duration: 3000ms; 
    				/* 애니메이션 duration까지 선언을 해야 실행됨! */
    animation-fill-mode: forwards; 
    				/* 애니메이션이 종료 된 후 어느 위치에 있을지 지정*/
    display: inline-block; /* overflow가 된 것 처럼 출력되어 해결책 2 */
}
```


### 2. 텍스트 이동시키기 : 'position'속성 사용

```
.visual{
    position: relative;
    min-height: 120px; 
}

@keyframes textAni{
    0%{
        font-size: 12px;
        color: rgba(0,0,0,0.2); /* 0.2는 투명도*/
        left:0;
        top: 0;
    }
    100%{
        font-size: 24px;
        color: rgba(0,0,0,1);
        left: 400px;
        top: 75px;
    }
}
.visual-text{
    position: absolute; /* .visual에 맞춤 */
    background: coral;
    animation-name: textAni;
    animation-duration: 3000ms; /* 애니메이션 duration까지 선언을 해야 실행됨 */
    animation-fill-mode: forwards; /* 애니메이션이 종료 된 후 어느 위치에 있을지 지정*/
}
```

### 3. 텍스트 이동시키기 : margin 

### 4. 텍스트 이동시키기 : padding



## 4개의 꽃모양 적용

1. 사진 추가하기

```
.visual{
   + 추가시켜야하는 부분 +
    background: url("images/ani_flower_01.png") no-repeat 0 -10px, 
    url("images/ani_flower_02.png") no-repeat 670px 0, 
    url("images/ani_flower_03.png") no-repeat 300px 0,
    url("images/ani_flower_04.png") no-repeat 800px 15px;
    background-color: pink;
}
```

2. 4개의 사진을 2개씩 그룹으로 묶어서 장식을 주려고 하니 background 이미지로 처리해서, 두 그룹에 다른 스타일을 적용 할 수 없게 된다. 

그래서 나온 해결책! ::before_1,2 묶어줌 | ::after_3,4 (inline속성) 선택자 사용

.visual의 position:relative로 ::before, ::after에겐 position:absolute (top좌표를 0으로 준다) + width/height 100% (부모) 


* 애니메이션 선언

시나리오 이름 : flowerAni

```
@keyframes flowerAni{
    0%{
        opacity: 1;            
    }
    100% {
        opacity: 0;			/* 상자 자체를 투명하게 한다는 의미 */
    }
}
```

값을 지정해줌

```
.visual::before, .visual::after{
    animation-name: flowerAni;
    animation-duration: 2s;
    animation-fill-mode: forwards;
    content:"";
    position:absolute;   /* .visual의 position:relative에 영향받음 */
    top: 0;
    left: 0;            
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
}
.visual::before{
    background-image: url("images/ani_flower_01.png"), 
    url("images/ani_flower_02.png");
    background-position: 0 -10px, 670px 0;
}
.visual::after{
    animation-delay: 1s; /* .visual::before가 시작된 1초 후에 애니메이션이 시작 */ 
    background-image: url("images/ani_flower_03.png"),
    url("images/ani_flower_04.png");
    background-position: 300px 0, 800px 15px;
}
.visual-text{
    position: absolute;
    z-index: 100; /* 화면 맨 위로 출력되게 만들어줌 */
    font-family: Georgia, 'Times New Roman', Times, serif; /* 로컬 폰트 사용 */
    animation-name: textAni;
    animation-duration: 3000ms; /* 애니메이션 duration까지 선언을 해야 실행됨 */
    animation-fill-mode: forwards; /* 애니메이션이 종료 된 후 어느 위치에 있을지 지정*/
}
```


### 시나리오 
반복처리

> animation-iteration-count: infinite;

```
.visual::before, .visual::after{
	+ 추가된 코드
    animation-iteration-count: infinite;   /*  */
    animation-direction: alternate; 	/*  */
 
}
```


반복처리를 여전히 하지만 ::before과 ::after의 등장 속도를 다르게 하고 싶다면

.visual::after{
    animation-delay: 1s; /* .visual::before가 시작된 1초 후에 애니메이션이 시작 */ 
}



