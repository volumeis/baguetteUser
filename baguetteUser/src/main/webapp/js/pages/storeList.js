$(function () {
    $.ajax({
        url: COMMONWEBSERVER + "/store/getStoreListShort/" + "서울", //초기 가게 리스팅 부분 구현 중 . 민호 . 05.18.16
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
                var figcaption = $(document.createElement('div')).addClass('fig');
                figcaption.html(address.add(name));

                var img =
                    $(document.createElement('img')).attr({
                        src: COMMONWEBSERVER + "/image/storeImg/" + store.storeImg + ".jpg",
                        alt: "alt : " + store.storeName
                    });

                var figuere = $(document.createElement('div')).html(img.add(figcaption)).addClass('figre');

                var storeLink = $(document.createElement('a')).attr({
                    //                        id: store.storeNo
                    id: TESTSTORENO
                });
                var storeBlockA = $(document.createElement('div')).addClass('ui-block-a').html(storeLink.html(figuere));
                $('#list-store').append(storeBlockA);
                TESTSTORENO++;
                if (TESTSTORENO > 2005) {
                    TESTSTORENO = 2001;
                }
            });
        },
        complete: function () {
            console.log('complete : storeList ajax');
            callStoreHome();
            $('#MyPosDlg').modal();

        },
        error: function (JSONData, status) {
            console.log('error : storeList ajax');
            console.log(status);
        }
    });
});

$('#myLocBtn').on('click', function () {
    MYLOCATION.set();
});