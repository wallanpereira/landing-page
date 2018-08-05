// JQuery to header-component
$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 40) {
            $('.header-component').addClass("header-component-dif");
        }

        else {
            $('.header-component').removeClass("header-component-dif");
        }
    });

    $('.btn-menu, .nav-link').click(function () {
        $('.box-links').slideToggle();
    });
});
