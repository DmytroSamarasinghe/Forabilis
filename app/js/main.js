$(function () {

    $(".clients__slider-wrapper").slick({
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendArrows: $('.clients__slider-button'),
        nextArrow: '<button type="submit" class="clients__slider-button-right button-box button-slider"></button>',
        prevArrow: '<button type="submit" class="clients__slider-button-left button-box button-slider"></button>',
        // responsive: [
        //     {
        //         breakpoint: 1900,
        //         settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 3,
        //             infinite: true,
        //             dots: true
        //         }
        //     },
        //     {
        //         breakpoint: 1441,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 1,
        //         }
        //     },
        //     {
        //         breakpoint: 801,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //         }
        //     },
        // ]
    });
}); 
$('.menu__btn').on('click', function () {
    $('.menu__list').slideToggle();
});