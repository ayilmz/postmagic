// Burger menus
document.addEventListener('DOMContentLoaded', function() {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 12,
        spaceBetween: 10,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 10,
            },
            1280: {
                slidesPerView: 6,
                spaceBetween: 10,
            },
            1440: {
                slidesPerView: 7,
                spaceBetween: 10,
            },
            1536: {
                slidesPerView: 8,
                spaceBetween: 10,
            },
            1699: {
                slidesPerView: 9,
                spaceBetween: 10,
            },
            1750: {
                slidesPerView: 9,
                spaceBetween: 10,
            },
            1886: {
                slidesPerView: 10,
                spaceBetween: 10,
            },
        }
    });
});
