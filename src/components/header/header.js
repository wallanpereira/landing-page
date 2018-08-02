jQuery(function (){
    jQuery(window).scroll(function (){
        if (jQuery(this).scrollTop() > 40) {
            $('.header-component').addClass("header-component-dif");
        } else {
            $('.header-component').removeClass("header-component-dif");
        }
    });
});