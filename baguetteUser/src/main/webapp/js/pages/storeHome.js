/*
* storeHome 페이지 엘리먼트 주입
*
* 경철
* 05.02.16
*/
function loadStoreHome(storeNo) {
    
    $.ajax({
        url: COMMONWEBSERVER + "/bread/getJsonBreadList/" + storeNo,
        method: "GET",
        dataType: "json",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        success: function (JSONData, status) {
            var breadList = JSONData.breadmap.breadlist;

            $.each(breadList, function (i, bread) {
                var displayValue =
                    '<font size="4">'+bread.name + "</font><br/><b>"+ bread.price + "원</b><br/>";
                var breadindex = i;
                var cartdiv = $(document.createElement('div')).addClass('ui-grid-a');
                var cartimgdivL = $(document.createElement('div')).addClass('ui-block-a').attr({
					id:'img'+breadindex,
					style: "padding: 10px 5px 10px 5px"
					});
				var cartimgdivR = $(document.createElement('div')).addClass('ui-block-b').attr({
									id:'img'+breadindex,
									style: "padding: 10px 5px 10px 5px"
									});
				var carttextL = $(document.createElement('div')).addClass('ui-block-a').attr({
									id:'text'+breadindex,
									style: "padding-right:15px;text-align:right"
									});
				var carttextR = $(document.createElement('div')).addClass('ui-block-b').attr({
									id:'text'+breadindex,
									style: "padding-right:15px;text-align:right"
									});
                
                var cartimg = $(document.createElement('img')).attr({
                        src: "../image/breadImg/" + storeNo + "/" + bread.img,
                        class: "img-rounded",
                        style: "height:100%; width:100%; border: 1px solid lightgray"
                    });
                //
                if (i % 2 == 0) {
                    $('#cartdiv').append(cartdiv.html(cartimgdivL.html(cartimg).add(carttextL.append(displayValue))));
                } else if (i % 2 == 1) {
                    breadindex = i - 1;
                    $('#img' + breadindex).after(cartimgdivR.html(cartimg));
                    $('#text' + breadindex).after(carttextR.append(displayValue));
                    breadindex = i;
                }

                $('#img' + breadindex).click(function () {
                    console.log(bread.breadNo);
                    $.ajax({
                        url: COMMONWEBSERVER + "/cart/addJsonCart/customerNo=" + LOGIN_NO + "&breadNo=" + bread.breadNo,
                        method: "GET",
                        dataType: "json",
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json"
                        }
                    });
                });
            });
        },
        error: function () {
            $('#cartdiv').append('<div>메롱</div>')
        }
    });
}

/*storehome의 경우 기존 page-cashed 방법에서 none-cash방법으로 변경. 
* 때문에 one pageshow 이벤트는 처음 페이지가 열릴 때 한번 호출됨
*
* 민호
* 05.02.16
*/
$(document).one('pageshow', "#storehome-page", function (event, data) {
    console.log('pageshow #sotrehome-page')
    loadStoreHome(QUERYSTRING);
    
    $("#ratestar").bind('rated', function (event, value) {
        $('#ratevalue').text(value);
    });

});