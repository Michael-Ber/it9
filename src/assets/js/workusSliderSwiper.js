export const workusSliderSwiperInteraction = () => {
    const body = document.querySelector('body');
    const section = document.querySelector('.workus');
    const slider = document.querySelector('.workus__slider');
    const slidesWrapper = document.querySelector('.workus__slider-wrapper');
    const slideWidth = Number(window.getComputedStyle(Array.from(slidesWrapper.children)[0]).width.replace(/px/ig, ''))



    let sliderOn = false;
    let sliderOff = false;


    const swiper = new Swiper('.workus__slider', {
        loop: false,
        speed: 400,
        grabCursor: true,
        mousewheel: true,
        slideActiveClass: 'workus__slider-slide_active',
        slideClass: 'workus__slider-slide',
        wrapperClass: 'workus__slider-wrapper',
        breakpoints: {
            //ширина совместно с кол-вом слайдов определяют transform wrapper'a
            1730: {
                slidesPerView: 4,
                width: 4 * ((430 - 340) / (1920 - 390) * (window.innerWidth - 390) + 340)
            },
            1230: {
                slidesPerView: 3,
                width: 3 * ((430 - 340) / (1920 - 390) * (window.innerWidth - 390) + 340)
            },
            768: {
                slidesPerView: 2,
                width: 2 * ((430 - 340) / (1920 - 390) * (window.innerWidth - 390) + 340)
            },
            576: {
                slidesPerView: 1,
                width: 1 * ((390 - 300) / (1920 - 390) * (window.innerWidth - 390) + 300)
            }
        },

        on: {
            resize: function () {
                if (window.innerWidth < 576) {
                    swiper.disable();
                } else {
                    swiper.enable();
                }
            },
            reachEnd: function (swiper) {
                swiper.disable();
                body.style.overflow = 'auto';
            },
            reachBeginning: function () {
                swiper.disable()
                body.style.overflow = 'auto';
            }
        }
    });

    window.addEventListener('wheel', checkSectionReached);
    window.addEventListener('scroll', checkSectionReached);

    function checkSectionReached(e, sliderEl, wrapperEl, bodyEl, swiperEl, sliderOnBool) {
        console.log(slidesWrapper.getBoundingClientRect().top)
        if (slidesWrapper.getBoundingClientRect().top < 400 && slidesWrapper.getBoundingClientRect().top > 100 && !sliderOn) {
            sliderOn = true;
            Array.from(slidesWrapper.children).forEach((slide, i) => {
                if (i > 0) {
                    slide.style.marginTop = `${0}px`;
                }
            })
            slider.style.margitTop = '0px';
            swiper.enable();
            body.style.overflow = 'hidden';
        }
        if (slidesWrapper.getBoundingClientRect().top <= 100 || slidesWrapper.getBoundingClientRect().top >= 400) {
            sliderOn = false;
            Array.from(slidesWrapper.children).forEach((slide, i) => {
                if (i > 0) {
                    slide.style.marginTop = `${-170 * i}px`;

                }
            })
            slider.style.margitTop = '-170px';
            swiper.disable()
            body.style.overflow = 'auto';
        }

    }
}

