var swiper = new Swiper('.swiper-container', {
    slidesPerView: 5,
    loop: true,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-paginationz',
        clickable: true
    }
});

//  SCRIPT ABAIXO ARRUMAR PARA EXIBIR APENAS DOIS EM TELAS MENORES

// $(windows).resize(function () {
//     if (windows.innerWidth < 768) {
//         var swiper = new Swiper('.swiper-container', {
//             slidesPerView: 2,
//             loop: true,
//             spaceBetween: 30,
//             pagination: {
//                 el: '.swiper-pagination',
//                 clickable: true
//             }
//         });
//     } else {
//         var swiper = new Swiper('.swiper-container', {
//             slidesPerView: 5,
//             loop: true,
//             spaceBetween: 30,
//             pagination: {
//                 el: '.swiper-pagination',
//                 clickable: true
//             }
//         });
//     }
// }).trigger("resize");

// $(window).on('resize', function(){
//     var win = $(this);
//     if (win.hei)

// })