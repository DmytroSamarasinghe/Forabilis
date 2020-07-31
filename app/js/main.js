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
        ]
    });
});
$('.menu__btn').on('click', function () {
    $('.menu__list').slideToggle();
});


function pigination(start, el) {
    $(document).ready(function () {
        let startBody = $(start).offset().top,
            height = $(start).height();
        $(document).scroll(function () {
            let scroll = $(this).scrollTop();
            let toElement = 200;
            if ((scroll >= startBody - toElement) && (scroll < (startBody + height - toElement))) {
                $(el).addClass('fixed_menu-on');
            }
            else {
                $(el).removeClass('fixed_menu-on');
            }
        })
    })
}
pigination('.expertise', '.fixed_menu-expertise');
pigination('.clients', '.fixed_menu-clients');
pigination('.about', '.fixed_menu-about');
pigination('.contact', '.fixed_menu-contact');

window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop,
        greeting = $('.greeting').height(),
        height = $('.header').height(),
        fixedMenu = $('.fixed_menu'),
        actualClientWidth = document.body.clientWidth,
        actualInnerWidth = window.innerWidth,
        scrolCss;
    if (scrollTop > (greeting + height - 200)) {
        $(fixedMenu).addClass('fixed_menu-active');

    } else {
        $(fixedMenu).removeClass('fixed_menu-active');
    }
    scrolCss = actualInnerWidth - actualClientWidth + 96;
    $(fixedMenu).css("width", `calc(100vw - ${scrolCss}px)`);


}); 

function windowSize() {
    let actualInnerWidth = window.innerWidth,
        fixedMenu = $('.fixed_menu');
    console.log(actualInnerWidth);
    if (actualInnerWidth > 1200) {
        $(fixedMenu).css("display", "block");
    } else {
        $(fixedMenu).css("display", "none");
    }
}
$(window).on('load resize', windowSize);

function animateHref(el) {

    $(el).on('click', '[href*="#"]', function (e) {
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top }, 1500);
        e.preventDefault();
    });
}
animateHref('.animate-href');



