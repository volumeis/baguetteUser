function callStoreHome() {
    $('#storelist-page').on('click', '.ui-block-a a', function () {
        var storeId = $(this).attr("id");
        $.mobile.changePage("storeHome.html", {
            dataUrl: "storeHome.html?parameter=" + storeId,
            data: {
                'parameter': storeId
            },
            transition: "slideup"
        });
    });
    $('#map-page').on('click', '.desc a', function () {
        var storeId = $(this).attr("id");
        $.mobile.changePage("storeHome.html", {
            dataUrl: "storeHome.html?parameter=" + storeId,
            data: {
                'parameter': storeId
            },
            transition: "slideup"
        });
    });
}
	
$(document).on('click', '#customerinfo', function(){
	$.mobile.changePage("#customerinfo-page");
	 
});

$(document).on('click', '#storelist', function(){
	$.mobile.changePage("#storelist-page");
	 
});


$(document).on('pagebeforeshow', "#storehome-page", function (event, data) {
    QUERYSTRING = $(this).data("url").split("?")[1];;
    QUERYSTRING = QUERYSTRING.replace("parameter=", "");
});




