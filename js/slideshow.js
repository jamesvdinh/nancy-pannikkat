var splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 1,
    focus  : 'center',
    autoWidth: true,
    autoplay: true,
    mediaQuery: 'max',
    breakpoints: {
        1000: {
            destroy: true,
        },
    },
    lazyLoad: true,
    keyboard: true,
    isNavigation: true,
    pauseOnFocus: true,
    speed: 2000,
    interval: 7000,
} );
splide.mount();