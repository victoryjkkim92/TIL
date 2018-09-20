# Responsive Web Design | 반응형 웹디자인

## 웹환경의 변화

* 모바일 디바이스의 등장

* 모바일 환경을 위한 별도의 대응 : flash, silverlight _ Third party app

	+ 처음 다음과 네이버같은 웹사이트 m.naver.com 같은 모바일용 웹사이트 따로 만듬

* One Source Multi Use (UI만 변경해서 다양한 디바이스에서 사용할 수 있게 해줌)

## 반응형 웹의 등장

* Flexible(유동형_고주물처럼 모든 컨텐츠가 변화함 : 컨텐츠가 많거나 효과가 많으면 헬게이트 열림! 그래서 레이아웃은 심플하게 하세요) VS Adaptive(적응형_뷰포트에 따라 화면출력 상황이 다름 : 우리나라에서 활성화)

## 반응형 디자인 패턴 | RWD Design Patterns

* Mostly Fluid

* Column Drop

* Layout Shift

* Tiny Tweeks

* Off Canvas | 가장 많이 쓰이는 유형

## DeskTop First VS Mobile First(바람직함)

* css의 특성(cascading) : 성능이슈 | css 설계 중요합니다!


## RWD Architecture

* Target (900) / Context : 시안 크기 | 양쪽 여백 30씩  (960) = Result (0.9375)

> 백분율로 설계하세요

* Media Queries


/* Tablet & Destop Device  */

`@media 디바이스 명칭(ex. all)` and `(min-width:768px)`{} : 사용자 해상도가 768px 이상일 때 이 코드가 실행됨    

/* Tablet Device  */

`@media 디바이스 명칭(ex. all)` and `(min-width:768px)` and `(min-width:1024px)`{} : 사용자 해상도가 768px이상이고 1024px이하일 때 이 코다가 실행됨

* Responsive Image

	```
	img {
		max-width : 100%;  /*해상도 문제를 해결하기 위할 수 있음*/
		height : auto; /*예전에는 지정하지 않았지만 요즘엔 함! 이미지 비율 손실을 방지하기 위함*/
	}
	```

* Responsive Image Issues

	+ 성능 / 속도 및 대역폭 (이미지용량의 최적화 : .svg파일)

	+ 고해상도 디스플레이 (Normal : Retina Display)

	+ 아트 디렉션(Art Direction) 처리 : 화면의 크기가 줄어들었을 때 보여주고싶은 부분만 크롭(cropped)처리
	+ 다양한 이미지 포맷 대응 : svg, webp, JPEG-XR, FlashPix

* 해결방안

	+ srcset과 sizes 속성 :   | 쇼핑몰 사진!

	```
	<img src="small.jpg"  
				srcset="large.jpg 1024w, medium.jpg 640w, small.jpg 320w" 
				size="(min-width:36em) 33.3vw, 100vw"  
				alt="a rad wolf">
	```

	+ `<picture>` element : 
	
	```
	<picture>
  		<source media="(min-width: 650px)" srcset="img_pink_flowers.jpg">
  		<source media="(min-width: 465px)" srcset="img_white_flower.jpg">
  		<img src="fallback.jpg" alt="">
	</picture>
	```
	
	+ device-pixel-ratio



## til

드디어 고정형 웹사이트 실습을 끝내고 반응형 웹을 시작햇다. 엄청 어려울 거라고 생각하고 긴장하고있었는데, 고정형보다 훨씬 더 재밌을 것 같다! 일단 오늘은 설명만 해주시고 Grid에 대한 간단한 설명과 실습 진행했는데 띠로리 어머 그리드 세상 편한 것...너무 편리할 것 같지만 인터넷 익스플로러에서 지원이 안된다는거ㅠㅠㅠㅠㅠㅠㅠ속상하넹