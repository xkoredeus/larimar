$(() => {
    $(window).on('load', function hidePreloader() {
        $('.preloader__wrp').fadeOut();
    });
});

$(() => {
    $('.slider').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: true,
        smartSpeed: 800,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 5000,
        mouseDrag: false,
        touchDrag: false,
        navText: ["<span><svg width='17' height='20'><use xlink:href='#arrow--prev'></svg></span>", "<span><svg width='17' height='20'><use xlink:href='#arrow--next'></svg></span>"],
    });
});

$(() => {
    $('.gallery-slider').owlCarousel({
        dots: false,
        loop: true,
        touchDrag: true,
        smartSpeed: 800,
        mouseDrag: true,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 5000,
        navText: ["<span><svg width='17' height='20'><use xlink:href='#arrow--prev'></svg></span>", "<span><svg width='17' height='20'><use xlink:href='#arrow--next'></svg></span>"],
        margin: 20,
        responsive : {
            0 : {
                items: 1,
            },
            1200 : {
                items: 2,
            },
        }
    });
});