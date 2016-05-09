$(document).one('pageshow','#customerinfo-page', function () {
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
                var cimgdiv = $(document.createElement('div')).addClass('ui-block-a').attr('id', 'cidiv' + cindex);
                
                var ctexttotal = $(document.createElement('div')).addClass('citotal').attr('id', 'citotal'+cindex);
                var ctexttop = $(document.createElement('div')).addClass('ui-block-b').attr('id', 'citop' + cindex);
                var ctextmid = $(document.createElement('div')).addClass('ui-block-b').attr('id', 'cimid' + cindex);
                var ctextbot = $(document.createElement('div')).addClass('ui-block-b').attr('id', 'cibot' + cindex);
                var ctextbot2 = $(document.createElement('div')).addClass('ui-block-b').attr('id', 'cibot2' + cindex);
                var ctextbot3 = $(document.createElement('div')).addClass('ui-block-b').attr('id', 'cibot3' + cindex);

                var test = GetDateString("/Date(" + JSONData.map.list[i].odate + ")/");

                var ciimg =
                    $(document.createElement('img')).attr({
                        src: COMMONWEBSERVER + "/image/breadImg/" + JSONData.map.list[i].storeNo +"/" + JSONData.map.list[i].img,
                        class: "img-rounded",
                        style: "height:100%"
                    });
                $('#cidiv').append(cdiv.html(cimgdiv.html(ciimg)).append(ctexttotal));
                $('#citotal'+cindex).append(ctexttop).append(ctextmid).append(ctextbot).append(ctextbot2).append(ctextbot3);
                $('#citop' + cindex).append("이름 : ").append(JSONData.map.list[i].name);
                $('#cimid' + cindex).append("개수 : ").append(JSONData.map.list[i].oqty).append("개");
                $('#cibot' + cindex).append("주문상태 : ").append(JSONData.map.list[i].otran);
                $('#cibot2' + cindex).append("구매일 : ").append(test);
                $('#cibot3' + cindex).append("구매가격 : ").append(JSONData.map.list[i].price * JSONData.map.list[i].oqty).append("원");
            })
        }
    })
});