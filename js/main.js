//$(document).ready(function(){
//    $("#show").click(function(){
//        $(".transit").toggleClass("thumb-box");
//        var $this = $(this); 
//    });
//});
jQuery(function($){
    // nav toggle
    $('.nav-toggle').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.main-menu-wrapper').toggleClass('open');
        $('html, body, header').toggleClass('menu-open');
    });
    // nav bottom bit toggle olerlay
    $('.nav-bottom').click(function(e) {
        e.preventDefault();
        $('.nav-toggle').toggleClass('active');
        $('.main-menu-wrapper').toggleClass('open');
        $('html, body, header').toggleClass('menu-open');
    });
    // nav คลิกเมนูจากแฮมเบอเก้อ
    $('.subnav1, .subnav2, .subnav3').click(function(e) {
        e.preventDefault();
        $('.nav-toggle').toggleClass('active');
        $('.main-menu-wrapper').toggleClass('open');
        $('html, body, header').toggleClass('menu-open');
    });
    $('.subnav1').click(function(e) {
        e.preventDefault();
        location.href=['#products'];
    });
    $('.subnav2').click(function(e) {
        e.preventDefault();
        location.href=['#about-us'];
    });
    $('.subnav3').click(function(e) {
        e.preventDefault();
        location.href=['#about-us'];
    });
    
});
$(window).scroll(function(){
    if ($(this).scrollTop() > 0) {
       $('#navbar').addClass('scrolled');
    } else {
       $('#navbar').removeClass('scrolled');
    }
});