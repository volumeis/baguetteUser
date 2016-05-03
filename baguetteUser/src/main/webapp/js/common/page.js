/**
 * 초기 페이지 주입
 *
 * 민호
 * 04.28.16 
 *
 * last update : 05.02.16
 * -> 페이지 로드 순서 개선 및 이름 수정
 *
 * 
 */
$(document).one("pagecreate", function () {
    $.get("./menuPanel.html", function (data) {
        $.mobile.pageContainer.append(data);
        $("[data-role=panel]").panel().enhanceWithin();
    }, "html");
    
    
    $("#cart-page").load("cart.html [data-role=main]",function(){
        console.log('cart.js init');
        $.getScript("../js/pages/cart.js");
    });
    $("#map-page").load("map.html [data-role=main]",function(){
        console.log('map.js init');
        $.getScript("../js/pages/map.js");
    });
    $("#customerinfo-page").load("customerInfo.html [data-role=main]",function(){
//        console.log('customerInfo.js init');
//        $.getScript("../js/pages/customerInfo.js");
    });
    
    $.mobile.changePage("storeList.html",function(){
        console.log('storeList.js init');
//        $.getScript("../js/pages/storeList.js");   html안에서 로딩
    });
    
    
});