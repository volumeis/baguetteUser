$( document ).on( "pageshow", ".demo", function() {

	var thePage = $( this ),
    title = thePage.jqmData("title");
    
	$( "#header" ).text( "title" );

});