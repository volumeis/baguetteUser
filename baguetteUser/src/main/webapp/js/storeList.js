
$(function(){
    
    var index = 0;
    var i = 0;
    var j = 0;
    $(window).scroll(function() {
        
        if ($(window).scrollTop() == $(document).height() - $(window).height()) {
            i++;
            j++;
            index++;
            
//            var address = 'address'+ index;
//            var storename = 'storename' + index;
            
            var address =  $(document.createElement('div')).addClass('address');
            address.text("address : "+index);
            var name =  $(document.createElement('div')).addClass('name');
            name.text("name : "+index);
            var caption = $(document.createElement('div')).addClass('caption');
            caption.html(address.add(name) );
            var storeBanner = $(document.createElement('img')).attr({
                src : "../image/store03.jpg",
                alt : "alt : " + index
            });           
            
            var store = $(document.createElement('div')).addClass('storeListImageDiv').html(storeBanner.add(caption));
            var storeContainer =$(document.createElement('div')).addClass('col-xs-12').html(store);
            
            var zzz = '<div id="st'+j+'" style="display: none;" ><img src="../image/store0'+i+'.jpg"> </div>';
            
            $('#storeListDiv').append(storeContainer)
                $('#st'+j).fadeIn(1000,function(){
                    
                });
            $(window).scrollTop( $(document).height() - $(window).height()- 1);
//            alert("1 :" + $(window).height()+ "\n"+
//                  "2 :" + $(document).height());
//            
            

            if(i==3){
                i=0;
            }
//                       
//            
        }
    });
//    
//    $( ".storeListImageDiv" ).first().show( "fast", function showNext() {
//    $( this ).next( ".storeListImageDiv" ).show( "fast", showNext );
//  });
});