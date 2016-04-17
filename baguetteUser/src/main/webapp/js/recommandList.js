$( document ).on( "pageshow", ".demo", function() {

혻혻혻혻var thePage = $( this ),
        title = thePage.jqmData("title");
    
혻혻혻혻$( "#header" ).text( "title" );
혻
});