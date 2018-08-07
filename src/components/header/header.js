// JQuery to header-component
$(document).ready(function () {
    var widthMenu = $(window).width();

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 40) {
            $('.header-component').addClass("scroll-top");
        } else {
            $('.header-component').removeClass("scroll-top");
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
});

// Scroll sections between
$('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 20
            }, 700);
            return false;
        }
    }
});