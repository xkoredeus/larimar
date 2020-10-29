$(() => {
    $(window).on('load', function hidePreloader() {
        $('.preloader__wrp').fadeOut();
    });
});

$(() => {

    const mainSlider = new Swiper('.slider', {
        effect: 'fade',
        navigation: {
            nextEl: '.slider .swiper-button-next',
            prevEl: '.slider .swiper-button-prev',
        },
        pagination: {
            el: '.slider .swiper-pagination',
            clickable: true,
        },
    });
});

$(() => {
    const mainSlider = new Swiper('.gallery-slider', {
        spaceBetween: 20,
        slidesPerView: 2,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            1200: {
                slidesPerView: 2
            },
        }
    });
});

$(() => {
    $('[data-fancybox]').fancybox({
        animationDuration: 600,
        touch: false
    });
});

$(() => {
    if ( $(window).width() < 1200 ) {
        $('.header__nav-dropdown').hide();
        $('.header__nav-catalog-dropdown').hide();

        $('.header__nav-link').on('click', function (e) {
            e.preventDefault();
            $(this).toggleClass('active').next('.header__nav-dropdown').slideToggle();
        });

        $('.header__nav-catalog-item').on('click', function (e) {
           e.preventDefault();
           $(this).toggleClass('active').next('.header__nav-catalog-dropdown').slideToggle();
        });
    }
});

$(() => {
    const cardPreviewSlider = new Swiper('.card-slider--preview', {
        spaceBetween: 10,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        direction: 'vertical',
    });
    const cardMainSlider = new Swiper('.card-slider--main', {
        spaceBetween: 10,
        navigation: {
            nextEl: '.card-slider--main .swiper-button-next',
            prevEl: '.card-slider--main .swiper-button-prev',
        },
        thumbs: {
            swiper: cardPreviewSlider
        }
    });
})