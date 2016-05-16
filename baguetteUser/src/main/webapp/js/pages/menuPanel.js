$('#logout').css({
    "margin-top": $(window).height() - $('#logout').height() * 2 - $($('#menuPanel div')[$('#menuPanel div').size() - 2]).outerHeight()*3 - 14 - 48 -210
});
$('#menuPanel img').attr({
	src : COMMONWEBSERVER + "/image/bbubbu_fire.gif"
});