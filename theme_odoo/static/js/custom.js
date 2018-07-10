$(document).ready(function(){
	console.log($('footer').height());
if ($(window).width() > 991) {
    $(".homepage").css("padding-bottom", $('footer').height()+"px");
}
else {
   
}
	$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".o_main_header").addClass("o_scrolled");
    } else {
        $(".o_main_header").removeClass("o_scrolled");
    }
});
	
});