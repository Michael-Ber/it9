export const workusSliderInteraction = () => {
    try {
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
            sliderInit();
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
                    if (sliderWrapper.getBoundingClientRect().top < 500 && !stopScrolling) {
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
            const slidesLength = sliderWrapper.children.length 

            if (slideIndex < slidesLength - defineNumberOfSlidesOnViewport()) {
                offset += (-slideWidth-40);
                slideIndex++;
            } else {
                body.style.overflow = 'auto';
                stopScrolling = true;
            }
            sliderWrapper.style.transform = `translateX(${offset}px)`;
    
        }


        function setSliderSlidesPositionBeforeScroll() {
            Array.from(sliderWrapper.children).forEach((slide, i) => {
                if(i > 0) {
                    slide.style.marginTop = `${-240 * i}px`;
                }
            })
            sliderWrapper.style.transform = 'translateX(0)';
            slideIndex = 0;
            offset = 0;
            stopScrolling = false;
        }

        function setSliderSlidesPositionOnScroll() {
            Array.from(sliderWrapper.children).forEach((slide, i) => {
                if(i > 0) {
                    slide.style.marginTop = `${0}px`;
                }
            })
        }


    } catch (error) {
        console.log(error)
    }
}