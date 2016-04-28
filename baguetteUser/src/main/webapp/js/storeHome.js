$("#ratestar").bind('rated', function (event, value) {
    $('#ratevalue').text(value);
});
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
                    "이  름 : " + bread.name + "<br/>" + "가  격 : " + bread.price + "<br/>";
                var breadindex = i;
                var cartdiv = $(document.createElement('div')).addClass('ui-grid-a');
                var cartimgdivL = $(document.createElement('div')).addClass('ui-block-a').attr('id', 'img' + breadindex);
                var cartimgdivR = $(document.createElement('div')).addClass('ui-block-b').attr('id', 'img' + breadindex);
                var carttextL = $(document.createElement('div')).addClass('ui-block-a').attr('id', 'text' + breadindex);
                var carttextR = $(document.createElement('div')).addClass('ui-block-b').attr('id', 'text' + breadindex);
                //
                var cartimg =
                    $(document.createElement('img')).attr({
                        src: "../image/breadImg/" + storeNo + "/" + bread.img,
                        class: "img-rounded",
                        style: "height:100%; width:100%"
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
                        url: COMMONWEBSERVER+ "/cart/addJsonCart/customerNo=" + LOGIN_NO + "&breadNo=" + bread.breadNo,
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