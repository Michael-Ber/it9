export const workusSliderSwiperInteraction = () => {
    const body = document.querySelector('body');
    const section = document.querySelector('.workus');
    let scrollNext = false;

    window.addEventListener('scroll', () => {
        if (section.getBoundingClientRect().top < 0 && window.innerHeight - section.getBoundingClientRect().bottom < 0 && !scrollNext) {
            body.style.overflow = 'hidden';
        }else {
            body.style.overflow = 'auto';
        }
    })

    



    const swiper = new Swiper('.workus__slider', {
        loop: false,
        speed: 400,
        slidesPerView: 1,

        mousewheel: true,

        slideActiveClass: 'workus__slider-slide_active',
        slideClass: 'workus__slider-slide',
        wrapperClass: 'workus__slider-wrapper',

        on: {
            beforeInit: function () {

                const slidesWrapper = document.querySelector('.workus__slider-wrapper');
                Array.from(slidesWrapper.children).forEach((slide, i) => {
                    if (i > 0) {
                        slide.style.marginTop = `${-240 * i}px`;
                    }
                })

            },
            init: function() {
                const slidesWrapper = document.querySelector('.workus__slider-wrapper');
                Array.from(slidesWrapper.children).forEach((slide, i) => {
                    if (i > 0) {
                        slide.style.marginTop = `${0}px`;
                    }
                })
            },
            slideChangeTransitionStart: function () {
                const slidesWrapper = document.querySelector('.workus__slider-wrapper');
                const slideWidth = Number(window.getComputedStyle(Array.from(slidesWrapper.children)[0]).width.replace(/px/ig, ''))
                Array.from(slidesWrapper.children).forEach((slide, i, arr) => {
                    if (slide.classList.contains('carousel-direction__slide_active')) {
                        for (let y = 0; y < i; y++) {
                            arr[y].style.marginLeft = 0;
                        }
                        for (let o = i + 1; o < arr.length; o++) {
                            arr[o].style.transform = `scale(${1 - ((o - i) / 10)}) translateX(${-(slideWidth - slideWidth * (1 - ((o - i) / 10))) / 2 / (1 - ((o - i) / 10))}px`;
                            arr[o].style.marginLeft = `${-(slideWidth - slideWidth * (1 - (((o - i) - 1) / 10))) - marginLeftToSlide}px`;
                            Array.from(arr[o].children).forEach(child => {
                                child.style.opacity = `${0.3 / i}`;
                            })
                        }
                    }
                })
            },
            reachBeginning: function (swiper) {
                const body = document.querySelector('body');
                body.style.overflow = 'auto';
            },
            resize: function() {
                const slidesWrapper = document.querySelector('.workus__slider-wrapper');
                const slideWidth = Number(window.getComputedStyle(Array.from(slidesWrapper.children)[0]).width.replace(/px/ig, ''))
                marginLeftToSlide = ((150 - 50) / (1920 - 390) * ((window.innerWidth - 390)) + 50);
                Array.from(slidesWrapper.children).forEach((slide, i) => {
                    if (i > 0) {
                        slide.style.marginLeft = `${-(slideWidth - slideWidth * (1 - ((i - 1) / 10))) - marginLeftToSlide}px`;

                    }
                })
                if(window.innerWidth < 576) {
                    swiper.disable();
                }else {
                    swiper.enable();
                }

            },

            reachEnd: function (swiper) {
                const body = document.querySelector('body');
                scrollNext = true;
                body.style.overflow = 'auto';
                swiper.disable();
            }
        }
    });
    
}