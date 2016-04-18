$(function () {

    var index = 0;
    var i = 0;
    var j = 0;
    $(document).scrollstop(function () {
        if ($(window).scrollTop() == $(document).height() - $(window).height()) {
            i++;
            j++;
            index++;
            var address = 'address' + index;
            var storename = 'storename' + index;
            var address = $(document.createElement('div')).addClass('address');
            address.text("address : " + index);
            $(".ui-grid-solo").append(address);
            var name = $(document.createElement('div')).addClass('name');
            name.text("name : " + index);
            var figcaption = $(document.createElement('figcaption'));
            figcaption.html(address.add(name));

            var img =
                $(document.createElement('img')).attr({
                    src: "../image/store03.jpg",
                    alt: "alt : " + index
                });

            var figuere = $(document.createElement('figure')).html(img.add(figcaption));

            var storeLink =
                $(document.createElement('a')).attr({
                    href: "storeHomeTest.html",
                    class : "ui-link"
                });

            var storeBlockA = $(document.createElement('div')).addClass('ui-block-a').html(storeLink.html(figuere));

            $('#list-store').append(storeBlockA);
            $('#st' + j).fadeIn(1000, function () {});
            $(window).scrollTop($(document).height() - $(window).height() - 1);

            if (i == 3) {
                i = 0;
            }
        }
    });
});