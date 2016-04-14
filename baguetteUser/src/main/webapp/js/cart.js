$(function(){
    
     $("#select-qty").change(function(){
                            var str ="";
                            $("select option:selected").each(function(){
//                                str += $(this).val()*$("#price").val();
                                str += $(this).val()*$("#price").text();
                            });
                            $("#money").text(str);
                            $("#totalmoney").text(str);
                        })
                       .change();
    
    $('#delect-cart').click(function() {
                    $('#cartcon').remove();
                });
    
    $('#add-cart').click(function() {
                 $('#cartcon').append($('cartcon'));
             });
});