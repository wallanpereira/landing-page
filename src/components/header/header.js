// JQuery to header-component
$(document).ready(function () {
    var widthMenu = $(window).width();

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 40) {
            $('.header-component').addClass("header-component-dif");
        } else {
            $('.header-component').removeClass("header-component-dif");
        }
    });

    if (widthMenu < 850) {
        $('.btn-menu, .nav-link').click(function () {
            $('.box-links').slideToggle();
        });
    }
});

$(window).resize(function () {
    var winMenu = $(this);
    var mdMenu = 900;

    if (this.window.width() < mdMenu) {
        $('.btn-menu, .nav-link').click(function () {
            $('.box-links').slideToggle();
        });
    }
})