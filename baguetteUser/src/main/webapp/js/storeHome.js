//            방문한 페이지 다시 로드하지않음
$(function () {
    $.mobile.page.prototype.options.domCache = true;
});


$(function () {

    $("#testbutton").click(function () {

        $.ajax({
            url: "/bread/getJsonBreadList/" + 2002,
            //url: "/bread/getJsonBread/"+3002,
            method: "GET",
            dataType: "json",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            success: function (JSONData, status) {

                $.each(JSONData.breadmap.breadlist, function (i, item) {
                    var displayValue = "이  름 : " + JSONData.breadmap.breadlist[i].name + "<br/>" + "가  격 : " + JSONData.breadmap.breadlist[i].price + "<br/>";
                    var breadindex = i;
                    var cartdiv = $(document.createElement('div')).addClass('ui-grid-a');
                    var cartimgdivL = $(document.createElement('div')).addClass('ui-block-a').attr('id', 'imgL' + breadindex);
                    var cartimgdivR = $(document.createElement('div')).addClass('ui-block-b');

                    var cartimg =
                        $(document.createElement('img')).attr({
                            src: "../image/01menu02.png",
                            class: "img-rounded",
                            style: "height:100%"
                        });

                    var carttextL = $(document.createElement('div')).addClass('ui-block-a').attr('id', 'textL' + breadindex);
                    var carttextR = $(document.createElement('div')).addClass('ui-block-b');

                    if (i % 2 == 0) {
                        $('#cartdiv').append(cartdiv.html(cartimgdivL.html(cartimg).add(carttextL.append(displayValue))));

                    } else if (i % 2 == 1) {
                        breadindex = i - 1;
                        $('#imgL' + breadindex).after(cartimgdivR.html(cartimg));
                        $('#textL' + breadindex).after(carttextR.append(displayValue));
                        breadindex = i;
                    }


                });
            }

        });
    });
});