$(function () {
    $(document).one("pageinit", function () {
        console.log('pageinit : storeList.js');

        $.ajax({
            //            url: "/store/getJsonStoreList/" + "서울",//COMMONWEBSERVER + 
            url: COMMONWEBSERVER + "/store/getJsonStoreList/" + "서울", //
            /*encodeURIComponent(storeAddress),*/
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
                            src: "http://java78bit404.iptime.org:8025" + store.storeImg,
                            alt: "alt : " + store.storeName
                        });

                    var figuere = $(document.createElement('figure')).html(img.add(figcaption));

                    var storeLink =
                        $(document.createElement('a')).attr({
                            href: "storeHome.html?storeNo=" + store.storeNo,
                            //                        	href:"/html-src/storeHome.html?storeNo="+store.storeNo,
                            //                        	rel:"external",
                            class: "ui-link"
                        });

                    var storeBlockA = $(document.createElement('div')).addClass('ui-block-a').html(storeLink.html(figuere));

                    $('#list-store').append(storeBlockA);

                });

            },
            error: function (JSONData, status) {
                //                alert("잘못된 요청입니다.");
            }
        });
    });

    //
    //    var index = 0;
    //    var i = 0;
    //    var j = 0;
    //    $(document).scrollstop(function () {
    //        if ($(window).scrollTop() == $(document).height() - $(window).height()) {
    //            i++;
    //            j++;
    //            index++;
    //            var address = 'address' + index;
    //            var storename = 'storename' + index;
    //            var address = $(document.createElement('div')).addClass('address');
    //            address.text("address : " + index);
    //            $(".ui-grid-solo").append(address);
    //            var name = $(document.createElement('div')).addClass('name');
    //            name.text("name : " + index);
    //            var figcaption = $(document.createElement('figcaption'));
    //            figcaption.html(address.add(name));
    //
    //            var img =
    //                $(document.createElement('img')).attr({
    //                    src: "../image/store03.jpg",
    //                    alt: "alt : " + index
    //                });
    //
    //            var figuere = $(document.createElement('figure')).html(img.add(figcaption));
    //
    //            var storeLink =
    //                $(document.createElement('a')).attr({
    //                    href: "storeHome.html",
    //                    class: "ui-link"
    //                });
    //
    //            var storeBlockA = $(document.createElement('div')).addClass('ui-block-a').html(storeLink.html(figuere));
    //
    //            $('#list-store').append(storeBlockA);
    //            $('#st' + j).fadeIn(1000, function () {});
    //            $(window).scrollTop($(document).height() - $(window).height() - 1);
    //
    //            //http://java78bit404.iptime.org:8025/image/storeImg/artisee_sansungtown.jpg
    //            if (i == 3) {
    //                i = 0;
    //            }
    //        }
    //    });

    if ($(window).scrollTop() == 0 || ($(window).height() >= $(document).height())) {
        //        alert("123");
    }
});
