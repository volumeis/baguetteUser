$(function () {
    $(document).one("pageinit", function () {
        console.log('pageinit : storeList.js');
        $.ajax({
            url: COMMONWEBSERVER + "/store/getJsonStoreList/" + "서울", //
            method: "GET",
            dataType: "json",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            success: function (JSONData, status) {
                var storeList = JSONData.storeMap.list;
                var tempHtml;
                $.each(storeList, function (i, store) {

                    var address = $(document.createElement('div')).addClass('address');
                    address.text(store.storeAddr);
                    $(".ui-grid-solo").append(address);
                    var name = $(document.createElement('div')).addClass('name');
                    name.text(store.storeName);
                    var figcaption = $(document.createElement('figcaption'));
                    figcaption.html(address.add(name));

                    var img =
                        $(document.createElement('img')).attr({
                            src: COMMONWEBSERVER + "/image/storeImg/" + store.storeImg + ".jpg",
                            alt: "alt : " + store.storeName
                        });

                    var figuere = $(document.createElement('figure')).html(img.add(figcaption));

                    var storeLink =
                        $(document.createElement('a')).attr({
//                              href: "./storeHome.html?storeNo=2001"
//                              href: "./storeHome.html?storeNo="+store.storeNo
                            //  href: "../html-src/storeHome.html?storeNo=" + store.storeNo,
                            //  rel: "external",
                            //  class: "ui-link"
                            id : store.storeNo
                        });
                    var storeBlockA = $(document.createElement('div')).addClass('ui-block-a').html(storeLink.html(figuere));
                    $('#list-store').append(storeBlockA);
                });
            },
            complete :function(){
                console.log('complete : storeList ajax');
                callStoreHome();
            },
            error: function (JSONData, status) {
                //                alert("잘못된 요청입니다.");
            }
        });
    });
//
//    $(document).on('loadStoreHome', function () {
//        $.mobile.changePage("storeHome.html?storeNo=2001", {
//            transition: "slideup"
//        });
//    });

    jQuery(document).ready(function ($) {
        console.log('ready');
        $('#my-slider').sliderPro({
            fade: true,
            buttons: false,
            forceSize: 'fullWidth'
        });
        //                $(".sp-image").css("margin", "0px");
    });

    $(document).on('pageinit', function () {
        //        console.log("pageinit  document.html");
        //            setTimeout(function () {
        //                $.mobile.loading('show', {
        //                    text: "use $.mobile.loading(\"show\")",
        //                    textVisible: true,
        //                    theme: "e"
        //                });
        //            }, 0);
    });
    $("#storelist-page").on("pagecreate", function () {
        console.log('pagecreate  storerList.html');

    });
    $("#storelist-page").on("pagebeforecreate", function (event) {
        console.log('pagebeforecreate  storerList.html');

        //                $(".sp-image").css("margin", "0px");

    });
    $('#storelist-page').on('pagebeforeshow', function () {
        console.log('pagebeforeshow storelist-page.html');
        //                $(".sp-image").css("margin", "0px");
    });
    $(document).one('pageshow', function () {
        //        console.log('pageshow document.html');

    });
    $('#storelist-page').on('pageshow', function () {
        console.log('pageshow storerList.html');
        /* */
        $(".sp-image").css("margin", "0px");
    });

    //    $('#storelist-page').on('pageshow', function () {
    //        console.log('zzz');
    //        $('.ui-block-a img').on('click', function () {
    //            console.log('찍힘1');
    //            $(document).trigger('loadStoreHome');
    //            //                loadStoreHome();
    //        });
    //        $(document).on('loadStoreHome', function () {
    //            $.mobile.changePage("storeHome.html?storeNo=2001", {
    //                transition: "slideup"
    //            });
    //        });
    //    });
});