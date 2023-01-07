document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide', {
        type   : 'loop',
        perPage: 3,
        focus  : 'center',
        autoWidth: true,
        autoplay: true,
        mediaQuery: 'max',
        breakpoints: {
            950: {
                destroy: true,
            },
        },
        lazyLoad: true,
        keyboard: true,
        isNavigation: true,
        pauseOnFocus: true,
        speed: 2000,
    } );
    splide.mount();
});