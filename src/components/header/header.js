$('.btn-menu, .nav-link,').click(function () {
    $('.box-links').slideToggle();
});
$('.btn-menu, .item, .nav-link').mouseout(function(){
    $('.box-links').slideToggle();
})








// jQuery(function () {
//     jQuery(window).scroll(function () {
//         if (jQuery(this).scrollTop() > 40) {
//             $('.header-component').addClass("header-component-dif");
//         } else {
//             $('.header-component').removeClass("header-component-dif");
//         }
//     });
// });

$(window).resize(function () {
    if (window.innerWidth < 990) {

        // $('.btn-menu, .nav-link').click(function () {
        //     $('.box-links').slideToggle();
        // });

        $('.header-component').addClass("header-component-dif");
    } else {
        $('.header-component').removeClass("header-component-dif");
    }
}).trigger("resize");