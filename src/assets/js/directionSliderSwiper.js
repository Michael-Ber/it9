

export const directionSliderSwiperInteraction = () => {
    const body = document.querySelector('body');
    const section = document.querySelector('.direction');
    const slidesWrapper = document.querySelector('.carousel-direction__wrapper');
    let sliderOn = false;
    let marginLeftToSlide = 150;


    const swiper = new Swiper('.direction__carousel', {
        loop: false,
        speed: 400,
        slidesPerView: 1,
        mousewheel: true,
        grabCursor: true,
        slideActiveClass: 'carousel-direction__slide_active',
        slideClass: 'carousel-direction__slide',
        wrapperClass: 'carousel-direction__wrapper',

        on: {
            init: function () {
                const slideWidth = Number(window.getComputedStyle(Array.from(slidesWrapper.children)[0]).width.replace(/px/ig, ''))
                Array.from(slidesWrapper.children).forEach((slide, i) => {
                    if (i > 0) {
                        Array.from(slide.children).forEach(child => {
                            child.style.opacity = `${0.3 / i}`;
                        })
                        slide.style.zIndex = 100 - i;
                        slide.style.transform = `scale(${1 - i / 10}) translateX(${-(slideWidth - slideWidth * (1 - i / 10)) / 2 / (1 - i / 10)}px`;
                        slide.style.marginLeft = `${-(slideWidth - slideWidth * (1 - ((i - 1) / 10))) - marginLeftToSlide}px`;

                    }
                })

            },
            slideChangeTransitionStart: function () {
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
            resize: function () {
                const slideWidth = Number(window.getComputedStyle(Array.from(slidesWrapper.children)[0]).width.replace(/px/ig, ''))
                marginLeftToSlide = ((150 - 50) / (1920 - 390) * ((window.innerWidth - 390)) + 50);
                Array.from(slidesWrapper.children).forEach((slide, i) => {
                    if (i > 0) {
                        slide.style.marginLeft = `${-(slideWidth - slideWidth * (1 - ((i - 1) / 10))) - marginLeftToSlide}px`;

                    }
                })
                if (window.innerWidth < 576) {
                    swiper.disable();
                } else {
                    swiper.enable();
                }
            },
            reachBeginning: function (swiper) {
                body.style.overflow = 'auto';
                swiper.disable();
            },
            reachEnd: function (swiper) {
                body.style.overflow = 'auto';
                swiper.disable();
            }
        }
    });

    window.addEventListener('scroll', checkSectionReached)
    window.addEventListener('wheel', checkSectionReached)

    function checkSectionReached(e, sliderEl, wrapperEl, bodyEl, swiperEl, sliderOnBool) {
        if (section.getBoundingClientRect().top < 0 && section.getBoundingClientRect().top > -200 && !sliderOn) {
            sliderOn = true;
            body.style.overflow = 'hidden';
            swiper.enable();
        }
        if (section.getBoundingClientRect().top >= 0 || section.getBoundingClientRect().top <= -200) {
            sliderOn = false;
            body.style.overflow = 'auto';
            swiper.disable();
        }

    }
}

