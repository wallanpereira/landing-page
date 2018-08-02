jQuery(function (){
    jQuery(window).scroll(function (){
        if (jQuery(this).scrollTop() > 100) {
            $('.menu-nav').addClass("menu-nav-dif");
        } else {
            $('.menu-nav').removeClass("menu-nav-dif");
        }
    });
});