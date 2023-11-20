

export const directionSliderSwiperInteraction = () => {
    const body = document.querySelector('body');
    const section = document.querySelector('.direction');
    window.addEventListener('scroll', () => {
        if (section.getBoundingClientRect().top < 0 && window.innerHeight - section.getBoundingClientRect().bottom < 0) {
            body.style.overflow = 'hidden';
            // swiper.enable();
        }
    })



    const swiper = new Swiper('.swiper', {
        loop: false,
        speed: 400,
        slidesPerView: 1,

        mousewheel: true,

        on: {
            init: function () {

                const slidesWrapper = document.querySelector('.swiper-wrapper');
                const slideWidth = Number(window.getComputedStyle(Array.from(slidesWrapper.children)[0]).width.replace(/px/ig, ''))
                Array.from(slidesWrapper.children).forEach((slide, i) => {
                    if (i > 0) {
                        slide.style.opacity = `${0.3 / i}`;
                        slide.style.transform = `scale(${1 - i / 10}) translateX(${-(slideWidth - slideWidth * (1 - i / 10)) / 2 / (1 - i / 10)}px`;
                        slide.style.marginLeft = `${-(slideWidth - slideWidth * (1 - ((i - 1) / 10))) - 150}px`;

                    }
                })

            },
            slideChangeTransitionStart: function () {
                const slidesWrapper = document.querySelector('.carousel-direction__wrapper');
                const slideWidth = Number(window.getComputedStyle(Array.from(slidesWrapper.children)[0]).width.replace(/px/ig, ''))
                Array.from(slidesWrapper.children).forEach((slide, i, arr) => {
                    if (slide.classList.contains('swiper-slide-active')) {
                        for (let y = 0; y < i; y++) {
                            arr[y].style.marginLeft = 0;
                        }
                        for (let o = i + 1; o < arr.length; o++) {
                            arr[o].style.transform = `scale(${1 - ((o - i) / 10)}) translateX(${-(slideWidth - slideWidth * (1 - ((o - i) / 10))) / 2 / (1 - ((o - i) / 10))}px`;
                            arr[o].style.marginLeft = `${-(slideWidth - slideWidth * (1 - (((o - i) - 1) / 10))) - 150}px`;
                            arr[o].style.opacity = `${0.3 / (o - i)}`;
                        }
                    }
                })
            },
            reachBeginning: function (swiper) {
                const body = document.querySelector('body');
                body.style.overflow = 'auto';
            },

            reachEnd: function (swiper) {
                const body = document.querySelector('body');
                body.style.overflow = 'auto !important';
                swiper.disable();
            }
        }
    });
}

