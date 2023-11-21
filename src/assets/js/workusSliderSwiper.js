export const workusSliderSwiperInteraction = () => {
    const body = document.querySelector('body');
    const section = document.querySelector('.workus');
    const slider = document.querySelector('.workus__slider');
    const slidesWrapper = document.querySelector('.workus__slider-wrapper');
    const slideWidth = Number(window.getComputedStyle(Array.from(slidesWrapper.children)[0]).width.replace(/px/ig, ''))

    let scrollNext = false;

    let sliderOn = false;
    let sliderOffOnEnd = false;


    const swiper = new Swiper('.workus__slider', {
        loop: false,
        speed: 400,
        slidesPerView: 4,
        grabCursor: true,
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
            reachEnd: function (swiper) {
                scrollNext = true;
                sliderOffOnEnd = true;
                swiper.disable();
                console.log('end')
            }
        }
    });




    window.addEventListener('wheel', () => {
        if (slidesWrapper.getBoundingClientRect().top < 500 && slidesWrapper.getBoundingClientRect().top > 100) {
            Array.from(slidesWrapper.children).forEach((slide, i) => {
                if (i > 0) {
                    slide.style.marginTop = `${0}px`;
                }
            })
            slider.style.margitTop = '0px';
        } else {
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