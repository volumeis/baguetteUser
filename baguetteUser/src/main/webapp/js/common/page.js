$(document).one("pagebeforecreate", function () {
    //            $( ":mobile-pagecontainer" ).pagecontainer( "load", "storeList.html",{role : "page"} );
    //            $("body").load("storeList.html [data-role=page]");

    $.mobile.changePage("storeList.html");
    //                changeHash: false
    //            });
});
$(document).one("pagecreate", function () {
    $.get("./menuPanel.html", function (data) {
        $.mobile.pageContainer.append(data);
        $("[data-role=panel]").panel().enhanceWithin();
    }, "html");
    $.get("./cartPanel.html", function (data) {
        $.mobile.pageContainer.append(data);
        $("[data-role=panel]").panel().enhanceWithin();
    }, "html");
});