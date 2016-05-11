$('#logout').css({
    "margin-top": $(window).height() - $('#logout').height() * 2 - $($('#menuPanel div')[$('#menuPanel div').size() - 2]).outerHeight()*3 - 14 - 48 -210
});
//console.log('$(window).height() : ' + $(window).height());
//console.log("$('#logout').height() : " + $('#logout').height());
//console.log("$($('#menuPanel div')[$('#menuPanel div').size() - 2]).offset().top : " + $($('#menuPanel div')[$('#menuPanel div').size() - 2]).offset().top);
//alert();