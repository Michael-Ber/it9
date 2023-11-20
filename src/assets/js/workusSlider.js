export const workusSliderInteraction = () => {
    try {

        window.addEventListener('resize', () => {
            if (window.innerWidth > 576) {
                sliderOn();
            }
        })

        if (window.innerWidth > 576) {
            sliderOn();
        }





        function sliderOn() {
            const body = document.querySelector('body');
            const section = document.querySelector('.workus');
            const sliderWrapper = document.querySelector('.workus__slider-wrapper');
            const slide = document.querySelector('.workus__slider-slide');

            let slideWidth = 0;

            let stopScrolling = false;
            let deltaYPlus = 0;
            let deltaYMinus = 0;
            let slideIndex = 0;
            let offset = 0;

            setSliderSlidesPositionBeforeScroll();

            window.addEventListener('resize', () => {
                if (window.innerWidth > 576) {
                    sliderInit();
                } else {
                    resetSlider()
                }
            })
            sliderInit();

            wheelMouse();

            function sliderInit() {
                slideWidth = Number((window.getComputedStyle(slide).width).replace(/px/ig, ''));
                sliderWrapper.style.width = `${slideWidth * sliderWrapper.children.length}px`;
            }


            function wheelMouse() {
                window.addEventListener('wheel', (e) => {
                    if (e.deltaY > 0) {
                        if (sliderWrapper.getBoundingClientRect().top < 500 && !stopScrolling && sliderWrapper.getBoundingClientRect().top < 500 && sliderWrapper.getBoundingClientRect().top > 200) {
                            body.style.overflow = 'hidden';
                            setSliderSlidesPositionOnScroll();
                            if (e.deltaY > 0) {
                                deltaYPlus += e.deltaY;
                                deltaYMinus = 0;
                                if (deltaYPlus > 200) {
                                    nextHandler();
                                    deltaYPlus = 0;
                                }
                            }
                        }
                    } else {
                        setSliderSlidesPositionBeforeScroll();
                        body.style.overflow = 'auto';
                    }
                })


            }

            function defineNumberOfSlidesOnViewport() {
                let numSlidesOnScreen = (window.innerWidth - Number(window.getComputedStyle(section).paddingLeft.replace(/px/ig, ''))) / (slideWidth + 30);//30 подгонка
                return Math.floor(numSlidesOnScreen)
            }

            function nextHandler() {
                if (window.innerWidth > 576) {
                    const slidesLength = sliderWrapper.children.length

                    if (slideIndex < slidesLength - defineNumberOfSlidesOnViewport()) {
                        offset += (-slideWidth - 40);
                        slideIndex++;
                    } else {
                        body.style.overflow = 'auto';
                        stopScrolling = true;
                    }
                    sliderWrapper.style.transform = `translateX(${offset}px)`;
                }

            }


            function setSliderSlidesPositionBeforeScroll() {
                if (window.innerWidth > 576) {
                    Array.from(sliderWrapper.children).forEach((slide, i) => {
                        if (i > 0) {
                            slide.style.marginTop = `${-240 * i}px`;
                        }
                    })
                    sliderWrapper.style.transform = 'translateX(0)';
                    slideIndex = 0;
                    offset = 0;
                    stopScrolling = false;
                }
            }

            function setSliderSlidesPositionOnScroll() {
                if (window.innerWidth > 576) {
                    Array.from(sliderWrapper.children).forEach((slide, i) => {
                        if (i > 0) {
                            slide.style.marginTop = `${0}px`;
                        }
                    })
                }
            }

            function resetSlider() {
                sliderWrapper.style.transform = 'translateX(0)';
                sliderWrapper.style.transform = '100%';
            }
        }





    } catch (error) {
        console.log(error)
    }
}