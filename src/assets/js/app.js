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
    const gallerySlider = new Swiper('.gallery-slider', {
        spaceBetween: 20,
        slidesPerView: 2,
        loop: true,
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
        animationEffect   : 'slide-in-in',
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
});

$(() => {
    $('.quantity').on('click', '.quantity-minus, .quantity-plus', function quantityClick() {
        const input = $( this ).siblings( '.quantity-num' );
        if ( (input.val() > 1) && ($( this ).hasClass( 'quantity-minus' ) ) ) {
            input.val( +input.val() - 1 );
        } else if (  (input.val() < +input.attr('max') ) && ( $( this ).hasClass( 'quantity-plus' ) ) ) {
            input.val( +input.val() + 1 );
        };
    });
});

$(() => {
    $('.tabs__content-item:not(:first-child)').hide();
    $('.tabs__content-item:first-child').addClass('active');
    $('.tabs__list-item:first-child').addClass('active');
    $('.tabs__list > .tabs__list-item').click(function tabListLiClick() {
        if (!($(this).hasClass('active'))) {
            const thisLi = $(this);
            const numLi = thisLi.index();
            thisLi.addClass('active').siblings().removeClass('active');
            thisLi.parent().next().children('div').hide().removeClass('active')
                .eq(numLi)
                .addClass('active')
                .fadeIn('slow');
        }
    });
});

$(() => {
    const matchSlider = new Swiper('.match', {
        spaceBetween: 20,
        navigation: {
            nextEl: '.match__nav .swiper-button-next',
            prevEl: '.match__nav .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            500: {
                slidesPerView: 2
            },
            800: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 4
            },
        }
    });
});