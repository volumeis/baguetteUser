/*storelist loader
 *
 * 민호
 *
 * 05.18.16
 */
$(document).one('pagebeforeshow', '#storelist-page', function () {
    console.log('loader started - storelist-page');
    $("#fakeloader").fakeLoader({
        timeToHide: 4000, //Time in milliseconds for fakeLoader disappear
        zIndex: "9999", //Default zIndex
        spinner: "spinner1" //Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7'
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
        timeToHide: 1800,
        zIndex: "9999",
        //        bgColor: "#FFFFFF",
        bgColor: "transperant",
        imagePath: COMMONWEBSERVER + "/image/brandImg/appStart.gif"
    });
    $(".fl").css({
        "top": $(window).height() / 2 - 170 / 2,
        "left": $(window).width() / 2 - 170 / 2,
        //170 은 이미지 파일 크기
        //        "width": $(window).width(),
        //        "height": "auto" 
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
        imagePath: COMMONWEBSERVER + "/image/brandImg/loader02.gif"
    });
    $(".fl").css({
        "top": $(window).height() / 2 - 170 / 2,
        "left": $(window).width() / 2 - 170 / 2,
    });
})
$(document).on('pagebeforehide', '#confirm-page', function () {
    console.log('Loader exit - confirm-page ');
    $("#confirmloader").attr({
        style: ""
    });
    $("#confirmloader").html("");
});