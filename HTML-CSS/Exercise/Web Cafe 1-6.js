// jQuery를 활용한 인터렉션 ...
var item = $('.menu-item'); // 변수 선언
var subItem = $('.sub-menu a'); // 변수 선언 .sub-menu하위 a태그
var tab = $('.tab'); // 변수선언 


// 메인 메뉴 제어를 위한 함수 

item.attr('tabindex', '0');
subItem.attr("class", 'fas fa-angle-left'); 
tab.attr("tabindex", "0");

item.on('mouseover focusin', function (){
    item.removeClass('menu-act');
    $(this).addClass('menu-act');
});

subItem.hover(function (){
    $(this).toggleClass('fa-angle-right');
});

// 탭 메뉴 제어를 위한 함수
tab.on('click focusin',function(){
    $(this).parent().siblings().removeClass('tab-act');
    $(this).parent().addClass('tab-act');
});






//이런 이벤트가 활성화되었을 때 먼저 일어남
// 두 가지 이벤트가 선택되었을 때, menu-act클래스를 실행
//마우스가 올라가진 부분에만 적용시키고 싶을때 $(this)




