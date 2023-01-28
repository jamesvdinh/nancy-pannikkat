document.addEventListener( 'DOMContentLoaded', function() {
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
    window.onload = function() {
        uncheck('menu-btn');
    };
    function uncheck(id) {
        document.getElementById(id).checked = false;
    }

    //Email Replace
    function setAttributes(elem, attrs) {
        for(var key in attrs) {
          elem.setAttribute(key, attrs[key]);
        }
    }
  
    const tech_emails = document.querySelectorAll('.email-replace');
    tech_emails.forEach(entry => {
        setAttributes(entry, {"href": "mailto:nancypannikkat" + "@" + "gmail.com?subject=Art Purchase Inquiry", "target": "_blank"});
        entry.innerHTML = "nancypannikkat" + "@" + "gmail.com";
    });
});