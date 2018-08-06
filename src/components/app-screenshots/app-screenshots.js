$(document).ready(function() {
    var tela = $(window).width();

    if(tela < 992) {
        var swiper = new Swiper('.app-screenshots-component .swiper-container', {
            slidesPerView: 2,
            loop: true,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            }
        });
    } else {
        var swiper = new Swiper('.app-screenshots-component .swiper-container', {
            slidesPerView: 5,
            loop: true,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            }
        });
    }
});

$(window).resize(function() {
    var win = $(this); //this = window
    var md = 800;
    
    if (win.width() < md) {
       var swiper = new Swiper('.app-screenshots-component .swiper-container', {
           slidesPerView: 2,
           loop: true,
           spaceBetween: 30,
           pagination: {
               el: '.swiper-pagination',
               clickable: true
           }
       });
    } else {
        var swiper = new Swiper('.app-screenshots-component .swiper-container', {
            slidesPerView: 5,
            loop: true,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            }
        });
    }
});
