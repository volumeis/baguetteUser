/*
 *Swipe 구현 
 * 좌 -> 우 : 메뉴바 
 * 우 -> 좌 : searchtel
 *
 * 민호
 * 
 * 05.10.16
 */
//$(function () {
    //좌 -> 우 스와이프
    $(document).on("swiperight", function (e) {
        if ($.mobile.activePage.jqmData("panel") !== "open") {
            console.log('swiperight on ! ')
            $("#menuPanel").panel("open");
        }
    });
    //우 -> 좌 스와이프
    $(document).on("swipeleft", function (e) {
        if ($.mobile.activePage[0].id != 'cart-page') {
            console.log('swipeleft on ! ')
             $.mobile.changePage("cart.html",{
                 direction : "reverse",
                 transition : "slide"
             });
        }
    });
//});