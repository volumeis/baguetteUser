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
}

$(document).on('pagebeforeshow', ".storehome-page", function (event, data) {
    QUERYSTRING = $(this).data("url").split("?")[1];;
    QUERYSTRING = QUERYSTRING.replace("parameter=", "");
});
