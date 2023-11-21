export const workusSliderSwiperInteraction = () => {
    const body = document.querySelector('body');
    const section = document.querySelector('.workus');
    const slider = document.querySelector('.workus__slider');
    const slidesWrapper = document.querySelector('.workus__slider-wrapper');
    const slideWidth = Number(window.getComputedStyle(Array.from(slidesWrapper.children)[0]).width.replace(/px/ig, ''))

    let scrollNext = false;


    const swiper = new Swiper('.workus__slider', {
        loop: false,
        speed: 400,
        slidesPerView: 4,

        mousewheel: true,

        slideActiveClass: 'workus__slider-slide_active',
        slideClass: 'workus__slider-slide',
        wrapperClass: 'workus__slider-wrapper',
        on: {
            resize: function () {
                if (window.innerWidth < 576) {
                    swiper.disable();
                } else {
                    swiper.enable();
                }

            },
            reachBeginning: function (swiper) {
                // body.style.overflow = 'auto';
                // swiper.disable();
            },
            reachEnd: function (swiper) {
                // const body = document.querySelector('body');
                scrollNext = true;
                // body.style.overflow = 'auto';
                // swiper.destroy(false, false);
                swiper.disable();

            }
        }
    });

    window.addEventListener('scroll', () => {
        if (section.getBoundingClientRect().top < -200 && section.getBoundingClientRect().top > -400 && !scrollNext) {
            // body.style.overflow = 'hidden';
            // swiper.enable();
        } else if (section.getBoundingClientRect().top < -400) {
            // body.style.overflow = 'auto';
            // swiper.disable();
        }
    })


    window.addEventListener('wheel', () => {
        if (slidesWrapper.getBoundingClientRect().top < 500 && slidesWrapper.getBoundingClientRect().top > 100) {
            swiper.enable();
            Array.from(slidesWrapper.children).forEach((slide, i) => {
                if (i > 0) {
                    slide.style.marginTop = `${0}px`;
                }
            })
            slider.style.margitTop = '0px';
        } else {
            swiper.disable();
            swiper.setTranslate('0');
            Array.from(slidesWrapper.children).forEach((slide, i) => {
                if (i > 0) {
                    slide.style.marginTop = `${-170 * i}px`;

                }
            })
            slider.style.margitTop = '-170px';
        }
    })



}