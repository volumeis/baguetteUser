$(function () {

    $("#select-qty").change(function () {
            var str = 0;

            $("#select-qty option:selected").each(function () {
                str += +($(this).val() * $("#price").text());
            });

            $("#money").text(str);

        })
        .change();

    $("#select-qty1").change(function () {
            var str = 0;

            $("#select-qty1 option:selected").each(function () {
                str += +($(this).val() * $("#price1").text());
            });

            $("#money1").text(str);

        })
        .change();
    
   /* $("select").change(function () {
            var sum = 0;

            sum += parseInt($("#money").text()) + parseInt($("#money1").text());
            $("#totalmoney").text(sum);
        })
        .change();*/

    $('#delect-cart').click(function () {
        $('#cartcon').remove();
    });

    $('#add-cart').click(function () {
        $('#cartcon').append($('cartcon'));
    });
});

$(function () {

});