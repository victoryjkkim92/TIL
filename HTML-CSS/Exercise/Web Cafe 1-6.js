// jQuery를 활용한 인터렉션 ...
var item = $('.menu-item'); // 변수 선언
var subItem = $('.sub-menu a'); // 변수 선언 .sub-menu하위 a태그
var tab = $('.tab'); // 변수선언 
var list= $('.related-list');

// 메인 메뉴 제어를 위한 함수 

item.attr('tabindex', '0');
subItem.attr("class", 'fas fa-angle-left'); 
tab.attr("tabindex", "0");

item.on('mouseover focusin', function (){
    item.removeClass('menu-act');
    $(this).addClass('menu-act');
});

//이런 이벤트가 활성화되었을 때 먼저 일어남
// 두 가지 이벤트가 선택되었을 때, menu-act클래스를 실행
//마우스가 올라가진 부분에만 적용시키고 싶을때 $(this)

subItem.hover(function (){
    $(this).toggleClass('fa-angle-right');
});

// 탭 메뉴 제어를 위한 함수
tab.on('click focusin',function(){
    $(this).parent().siblings().removeClass('tab-act');
    $(this).parent().addClass('tab-act');
});

// 관련사이트 목록 에니메이션을 위한 함수

// list.hover(function(){
//     $(this).toggleClass('related-act');
// });

list.on('mouseover focusin', function () {
    $(this).addClass('related-act');
});

list.on('mouseout focusout', function () {
    $(this).removeClass('related-act');
});



// 변수로 선언해준 tab부분에 click이나 focusin이라는 이벤트가 일어났을 떄, 
// 1. 선택된 this의(이벤트가 일어난 부분) 부모요소와 형제관계에 있는 요소를 찾아, 
//'tab-act'를 삭제한다.
// 2. 선택된 this의 (이벤트가 일어난 부분) 부모요소에 'tab-act'라는 클래스를 추가해준다












