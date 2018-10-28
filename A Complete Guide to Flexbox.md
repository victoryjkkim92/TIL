# A Complete Guide to Flexbox (플랙스 박스를 이해하기 위한 가이드)

##Background (배경)

> The Flexbox Layout (Flexible Box) module (currently a W3C Last Call Working Draft) aims at providing a more efficient way to lay out, align and distribute space among items in a container, even when their size is unknown and/or dynamic (thus the word "flex").

- 플랙스 박스 레이아웃(플랙스 박스) 모듈(현재 W3C 가장 최근 규격 초안)은 아이템들의 사이즈를 알 수 없거나 혹은 동적일 때, 그것들을 감싸고 있는 컨테이너 안에서 아이템들의 분배, 정렬, 배열을 효율적으로 할 수 있게 도와주는 역할을 한다.

> The main idea behind the flex layout is to give the container the ability to alter its items' width/height (and order) to best fill the available space (mostly to accommodate to all kind of display devices and screen sizes). A flex container expands items to fill available free space, or shrinks them to prevent overflow.

- 	플랙스 모델의 주된 목적은 컨테이너가 그 안의 아이템들의 너비/높이(그리고 순서)를 최적의 공간(대게 디스플레이 장치들과 화면 크기들의 모든 종류를 수용하기 위함)에 채우기 위해 값을 사용해 변경을 할 수 있게 하는 능력(재량)을 주기 위함이다. 플랙스 컨테이너는 아이템들을 사용 가능한 공간에 채워 넣고자 늘리거나, 줄여서 오버플로우가 되는 것을 막는다. 

> Most importantly, the flexbox layout is direction-agnostic as opposed to the regular layouts (block which is vertically-based and inline which is horizontally-based). While those work well for pages, they lack flexibility (no pun intended) to support large or complex applications (especially when it comes to orientation changing, resizing, stretching, shrinking, etc.).

- 가장 중요한 것은, 플렉스 박스 레이아웃은 
 

<strong> Note: Flexbox layout is most appropriate to the components of an application, and small-scale layouts, while the Grid layout is intended for larger scale layouts. 
