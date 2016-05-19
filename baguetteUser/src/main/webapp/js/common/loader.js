/*storelist loader
 *
 * 민호
 *
 * 05.18.16
 */
$(document).one('pagebeforeshow', '#storelist-page', function () {
    console.log('loader started - storelist-page');
    $("#confirmloader").fakeLoader({
        timeToHide: 4000,
        zIndex: "9999",
        bgColor: "#FFFFFF",
        imagePath: COMMONWEBSERVER + "/image/brandImg/mainLoader.gif"
    });
    $(".fl").css({
        "top": $(window).height() / 2 - 200 / 2,
        "left": $(window).width() / 2 - 200 / 2,
    });
});


/*storehome loader
 *
 * 민호
 *
 * 05.16.16
 */

$(document).on('pagebeforeshow', '#storehome-page', function () {
    console.log('Loader started- storehome-page ');
    $("#homeloader").fakeLoader({
        timeToHide: 2300,
        zIndex: "9999",
                bgColor: "rgba(255, 255, 255, 0.2)",
        bgColor: "transperant",
        imagePath: COMMONWEBSERVER + "/image/brandImg/homeLoader.gif"
    });
    $(".fl").css({
        "top": $(window).height() / 2 - 180 / 2,
        "left": $(window).width() / 2 - 180 / 2,
        //180 은 이미지 파일 크기
    });
})
$(document).on('pagebeforehide', '#storehome-page', function () {
    console.log('Loader exit- storehome-page ');
    $("#homeloader").attr({
        style: ""
    });
    $("#homeloader").html("");
})

/*cofirm loader
 *
 * 민호
 *
 * 05.16.16
 */
$(document).on('pagebeforeshow', '#confirm-page', function () {
    console.log('Loader started - confirm-page ');
    $("#confirmloader").fakeLoader({
        timeToHide: 4000,
        zIndex: "9999",
        bgColor: "#FFFFFF",
        imagePath: COMMONWEBSERVER + "/image/brandImg/confirmLoader.gif"
    });
    $(".fl").css({
        "top": $(window).height() / 2 - 210 / 2,
        "left": $(window).width() / 2 - 210 / 2,
    });
})
$(document).on('pagebeforehide', '#confirm-page', function () {
    console.log('Loader exit - confirm-page ');
    $("#confirmloader").attr({
        style: ""
    });
    $("#confirmloader").html("");
});