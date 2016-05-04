    $(document).one('pageshow', '#cart-page', function () {
        console.log("cart.js 호출")
        $.ajax({
            // 회원 번호를 통해 호출

            url: COMMONWEBSERVER + "/cart/getJsonCart/" + LOGIN_NO,
            method: "GET",
            dataType: "json",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            success: function (JSONData, status) {

                $.each(JSONData.cartmap.cartlist, function (i, item) {

                    var cindex = i;
                    var cdiv = $(document.createElement('div')).addClass('ui-grid-a').attr('id', 'cdiv' + cindex);
                    var cimgdiv = $(document.createElement('div')).addClass('ui-block-a').attr('id', 'cimgdiv' + cindex);
                    var ctexttop = $(document.createElement('div')).addClass('ui-block-b')
                        .attr({
                            id: 'ctop' + cindex,
                            style: 'height:50px; text-align: right'
                        });
                    var ctextmid = $(document.createElement('div')).addClass('ui-block-b tprice')
                        .attr({
                            id: 'cmid' + cindex,
                            style: 'height:50px; text-align: right'

                        });
                    var ctextbot = $(document.createElement('div')).addClass('ui-block-b')
                        .attr({
                            id: 'cbot' + cindex,
                            style: 'height:50px'
                        });

                    var cimg =
                        $(document.createElement('img')).attr({
                            src: "../image/breadImg/" + JSONData.cartmap.cartlist[i].breadDesc.storeNo + "/" + JSONData.cartmap.cartlist[i].breadDesc.img,
                            class: "img-rounded",
                            style: "height:100%; width:100%"
                        });

                    var cdel = $(document.createElement('div'))
                        .addClass('ui-btn ui-icon-delete ui-btn-icon-notext ui-corner-all').attr({
                            id: "cdel" + cindex,
                            style: "float:right"
                        });

                    var cselect =
                        $(document.createElement('select')).data('mini', true).attr({
                            name: "cselect" + cindex,
                            id: "cselect" + cindex,
                            style: "float:right"
                        });

                    // Cart 스토어 정보 var 선언부
                    // 04.29 경철

                    var storeDiv = $(document.createElement('div')).addClass('ui-grid-a').attr('id', 'sdiv' + cindex);
                    var storeDivImg = $(document.createElement('div')).addClass('ui-block-a').attr('id', 'sdiv' + cindex);
                    var storeDivName = $(document.createElement('div')).addClass('ui-block-b').attr('id', 'sname' + cindex);
                    
                    var storeDivSolo = $(document.createElement('div')).addClass('ui-grid-solo').attr('id', 'sdivsolo' + cindex);
                    
                    var simg =
                        $(document.createElement('img')).attr({
                            src: "../image/storeImg/store_" + JSONData.cartmap.cartlist[i].breadDesc.storeNo + ".jpg",
                            class: "img-rounded",
                            style: "height:100%; width:100%"
                        });



                    for (var j = 0; j < 5; j++) {
                        var option = document.createElement('option');
                        option.text = j + 1;
                        option.value = j + 1;

                        if (option.text == 1) {
                            option.selected = true;
                        }

                        cselect.append(option);
                    }

                    // 스토어 정보 빵보다 우선시 되게 넣기 위해서
                    if (i == 0) {
                        $('#maincdiv').append(storeDiv.html(storeDivImg.html(simg)).append(storeDivName));
                        $('#sname' + cindex).append(JSONData.cartmap.cartlist[i].storeName);
                    }

                    $('#maincdiv').append(cdiv.html(cimgdiv.html(cimg)).append(ctexttop).append(ctextmid).append(ctextbot));
                    $('#ctop' + cindex).append(JSONData.cartmap.cartlist[i].breadDesc.name);
                    $('#cbot' + cindex).append(cdel).append(cselect);

                    if (i != (Object.keys(JSONData.cartmap.cartlist).length) - 1) {
                        if (JSONData.cartmap.cartlist[i].breadDesc.storeNo != JSONData.cartmap.cartlist[i + 1].breadDesc.storeNo) {

                            var simg1 =
                                $(document.createElement('img')).attr({
                                    src: "../image/storeImg/store_" + JSONData.cartmap.cartlist[i + 1].breadDesc.storeNo + ".jpg",
                                    class: "img-rounded",
                                    style: "height:100%; width:100%"
                                });
                            $('#maincdiv').append(storeDiv.html(storeDivImg.html(simg1)).append(storeDivName));
                            $('#sname' + cindex).append(JSONData.cartmap.cartlist[i + 1].storeName);
                        }
                    }

                    $("#cselect" + cindex).change(function () {
                            var str = 0;
                            $("#cselect" + cindex).each(function () {
                                str += +($(this).val() * JSONData.cartmap.cartlist[i].breadDesc.price);
                            });
                            $('#cmid' + cindex).text(str);

                            $.ajax({
                                url: "/cart/updateJsonCart/buyQty=" + $(this).val() + "&cartNo=" + JSONData.cartmap.cartlist[i].cartNo,
                                method: "GET",
                                dataType: "json",
                                headers: {
                                    "Accept": "application/json",
                                    "Content-Type": "application/json"
                                }
                            });
                        })
                        .change();


                    $("#cselect" + cindex).change(function () {
                            var sum = 0;
                            $(".tprice").each(function () {
                                sum += +($(this).text());
                                $("#totalprice").text(sum);
                            });
                        })
                        .change();

                    $('#cdel' + cindex).click(function () {
                        $.ajax({
                            url: "/cart/delJsonCart/" + JSONData.cartmap.cartlist[i].cartNo,
                            method: "GET",
                            dataType: "json",
                            headers: {
                                "Accept": "application/json",
                                "Content-Type": "application/json"
                            }

                        });

                        $('#cdiv' + cindex).remove();
                        var sum = 0;
                        $(".tprice").each(function () {
                            sum += +($(this).text());
                            $("#totalprice").text(sum);
                        });
                    });

                })
            }
        })

        $("#breadPayment").on("click", function () {

            alert("결제가 진행됩니다.");

            $.ajax({
                // 회원 번호를 통해 호출
                url: COMMONWEBSERVER + "/border/addBorder/" + LOGIN_NO,
                method: "GET",
                dataType: "json",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                success: function (JSONData, status) {
                    //나중에 결제
                    location.href = "./lastpurchaseend.html";
                }

            });
        });
    });