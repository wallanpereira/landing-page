$(document).ready(function () {
    var cliswiper = new Swiper('.clients .swiper-testemonial', {
        loop: true,
        autoplay: 4000,
        reventClicks: false,
        preventClicksPropagation: false,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    });
});