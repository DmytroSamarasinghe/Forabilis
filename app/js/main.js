$(function () {

    $(".clients__slider-inner").slick({
        dots: false,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        appendArrows: $('.clients__slider-button'),
        nextArrow: '<button type="submit" class="clients__slider-button-right button-box button-slider"></button>',
        prevArrow: '<button type="submit" class="clients__slider-button-left button-box button-slider"></button>',
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true
                }
            },
            {
                breakpoint: 860,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false
                }
            },
            //     {
            //         breakpoint: 801,
            //         settings: {
            //             slidesToShow: 1,
            //             slidesToScroll: 1,
            //         }
            //     },
        ]
    });
});
$('.menu__btn').on('click', function () {
    $('.menu__list').slideToggle();
});