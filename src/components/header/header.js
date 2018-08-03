// jQuery(function () {
//     jQuery(window).scroll(function () {
//         if (jQuery(this).scrollTop() > 40) {
//             $('.header-component').addClass("header-component-dif");
//         } else {
//             $('.header-component').removeClass("header-component-dif");
//         }
//     });
// });

// $(window).resize(function () {
//     if (window.innerWidth < 800) {

//         $('.btn-menu').click(function () {
//             $('.box-links').slideToggle();
//         });
//     }
// }).trigger("resize");

$('.btn-menu').click(function () {
    $('.box-links').slideToggle();
})