$(document).on('pageshow','#customerinfo-page', function () {
    console.log('pageshow - customerinfo-page - customerinfo.js');
    $('#cdiv').html("");
    $.ajax({
        // 회원 번호를 통해 호출
        url: COMMONWEBSERVER + "/border/listBorder/" + LOGIN_NO,
        method: "GET",
        dataType: "json",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        success: function (JSONData, status) {
            $.each(JSONData.map.list, function (i, item) {
                var cindex = i;
                var cdiv = $(document.createElement('div')).addClass('ui-grid-a');
                var cimgdiv = $(document.createElement('div')).addClass('ui-block-a').attr('id', 'cdiv' + cindex);
                var ctexttop = $(document.createElement('div')).addClass('ui-block-b').attr('id', 'ctop' + cindex);
                var ctextmid = $(document.createElement('div')).addClass('ui-block-b').attr('id', 'cmid' + cindex);
                var ctextbot = $(document.createElement('div')).addClass('ui-block-b').attr('id', 'cbot' + cindex);
                var ctextbot2 = $(document.createElement('div')).addClass('ui-block-b').attr('id', 'cbot2' + cindex);
                var ctextbot3 = $(document.createElement('div')).addClass('ui-block-b').attr('id', 'cbot3' + cindex);

                var test = GetDateString("/Date(" + JSONData.map.list[i].odate + ")/");

                var cimg =
                    $(document.createElement('img')).attr({
                        src: COMMONWEBSERVER + "/image/breadImg/" + JSONData.map.list[i].storeNo +"/" + JSONData.map.list[i].img,
                        class: "img-rounded",
                        style: "height:100%; width:100%"
                    });
                $('#cdiv').append(cdiv.html(cimgdiv.html(cimg)).append(ctexttop).append(ctextmid).append(ctextbot).append(ctextbot2).append(ctextbot3));
                $('#ctop' + cindex).append("빵이름: ").append(JSONData.map.list[i].name);
                $('#cmid' + cindex).append("개수: ").append(JSONData.map.list[i].oqty).append("개");
                $('#cbot' + cindex).append("주문상태: ").append(JSONData.map.list[i].otran);
                $('#cbot2' + cindex).append("구매일: ").append(test);
                $('#cbot3' + cindex).append("총 구매가격: ").append(JSONData.map.list[i].price * JSONData.map.list[i].oqty).append("원");
            })
        }
    })
});