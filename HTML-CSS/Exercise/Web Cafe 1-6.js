// jQuery를 활용한 인터렉션 ...
var item = $('.menu-item'); // 변수 선언
var subItem = $('.sub-menu a'); // 변수 선언 .sub-menu하위 a태그
item.attr('tabindex', '0');
subItem.attr("class", 'fas fa-angle-left'); 

item.on('mouseover focusin', function () {
    item.removeClass('menu-act');
    $(this).addClass('menu-act');
});

subItem.hover(function () {
    $(this).toggleClass('fa-angle-right');
});

//이런 이벤트가 활성화되었을 때 먼저 일어남
// 두 가지 이벤트가 선택되었을 때, menu-act클래스를 실행
//마우스가 올라가진 부분에만 적용시키고 싶을때 $(this)

