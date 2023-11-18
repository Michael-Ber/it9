export const directionSliderInteraction = () => {
    try {
        const body = document.querySelector('body');
        const section = document.querySelector('.direction');
        const wrapper = document.querySelector('.carousel-direction__wrapper');
        const slides = document.querySelectorAll('.carousel-direction__slide');
        let slideWidth = Number((window.getComputedStyle(slides[0]).width).replace(/px/ig, ''));

        let slideIndex = 0;
        let offset = 0;
        let stopScrolling = false;

        let deltaYPlus = 0
        let deltaYMinus = 0


        window.addEventListener('resize', () => {
            if (window.innerWidth > 576) {
                setTimeout(sliderInit, 1000);//костыль, 1сек задержки на обновление после ресайза
            } else {
                sliderReset();
            }
        })
        if (window.innerWidth > 576) {
            sliderInit();
            wheelMouse(section, body, stopScrolling, deltaYPlus, deltaYMinus, nextHandler);
            
        } else {
            sliderReset();
        }

        function sliderInit() {
            offset = 0;
            slideIndex = 0;
            stopScrolling = false;
            wrapper.style.transform = `translateX(${offset}px)`;
            slides.forEach((slide, i) => {
                setSlidesSizes(slide, i);
                slide.classList.remove('carousel-direction__slide_active');
                slides[slideIndex].classList.add('carousel-direction__slide_active');
            })
        }

        function wheelMouse() {
            
            window.addEventListener('wheel', (e) => {
                if (e.deltaY > 0 && !stopScrolling) {
                    if (section.getBoundingClientRect().top < 0 && window.innerHeight - section.getBoundingClientRect().bottom < 0) {
                        body.style.overflow = 'hidden';
                        if (e.deltaY > 0) {
                            deltaYPlus += e.deltaY;
                            deltaYMinus = 0;
                            if (deltaYPlus > 149) {
                                nextHandler();
                                deltaYPlus = 0;
                            }
                        }
                    }
                } else {
                    body.style.overflow = 'auto';
                }
            })
        }

        function setSlidesSizes(slide, i) {
            if (i > 0) {
                if (i < 9) {
                    slide.style.transform = `scale(${1 - i / 10})`;
                } else {
                    slide.style.transform = `scale(0.1)`;//ограничение по масштабу при превышении кол-ва слайдов 10
                }
                slide.style.zIndex = `${(100 - i)}`;//уменьшение z-index
                slide.style.marginLeft = `${(-272 - (-150)) / (1920 - (390)) * (window.innerWidth - 390) + (-150)}px`; //отрицательный margin для наезда слайдов
                Array.from(slide.children).forEach(child => {
                    child.style.opacity = `${0.3 / i}`;//уменьшение opacity
                })
                slideWidth = Number((window.getComputedStyle(slides[0]).width).replace(/px/ig, ''));
                wrapper.style.width = slides.length * slideWidth + 'px';
            }
        }

        function sliderReset() {
            wrapper.style.transform = `translateX(${0}px)`;
            wrapper.style.width = '100%';
            slides.forEach(slide => {
                slide.style.marginLeft = 0;
                slide.style.zIndex = 100;
                slide.style.transform = 'scale(1)';
                Array.from(slide.children).forEach(child => {
                    child.style.opacity = 1;
                })
            })
        }

        

        function nextHandler() {

            if (slideIndex < slides.length - 1) {
                offset += -slideWidth;
                slideIndex++;
            } else {
                // offset = 0;
                // slideIndex = 0;
                // slides.forEach((slide, i) => {
                //     setSlidesSizes(slide, i);
                // })
            }
            if (slideIndex > slides.length - 2) {
                stopScrolling = true;
            }
            console.log(stopScrolling)
            wrapper.style.transform = `translateX(${offset}px)`;
            slides.forEach(slide => {
                slide.classList.remove('carousel-direction__slide_active');
                // setSlidesSizes(slides[slideIndex], slideIndex);
            })
            slides[slideIndex].classList.add('carousel-direction__slide_active');

            for (let i = 1; i < slideIndex; i++) {
                slides[i].style.marginLeft = 0;//при движении влево чтобы слайды правильно позиционировались слайдам что остались слева делаем margin 0 
            }
            for (let i = slideIndex + 1; i < slides.length; i++) {
                slides[i].style.transform = `scale(${1 - (i - (slideIndex)) / 10})`;//в цепочке слайдов при движении влево пересчитываем масштаб для слайдов справа
            }
        }

        function prevHandler() {
            if (slideIndex <= 0) {
                offset = -slideWidth * (slides.length - 1);
                slideIndex = slides.length - 1;
            } else {
                slideIndex--;
                offset += slideWidth;

            }
            wrapper.style.transform = `translateX(${offset}px)`;
            slides.forEach(slide => {
                slide.classList.remove('carousel-direction__slide_active');
                setSlidesSizes(slides[slideIndex], slideIndex);
            })

            slides[slideIndex].classList.add('carousel-direction__slide_active')
            for (let i = 1; i < slideIndex; i++) {
                slides[i].style.marginLeft = 0;//по аналогии с next
            }
            for (let i = slideIndex + 1; i < slides.length; i++) {
                slides[i].style.transform = `scale(${1 - (i - (slideIndex)) / 10})`;//по аналогии с next
            }
        }
        


    } catch (error) {
        console.log(error)
    }
}




// window.addEventListener('wheel', (e) => {
            //     if (e.deltaY > 0 && !stopScrolling) {
            //         if (section.getBoundingClientRect().top < 0 && window.innerHeight - section.getBoundingClientRect().bottom < 0) {
            //             body.style.overflow = 'hidden';
            //             if (e.deltaY > 0) {
            //                 deltaYPlus += e.deltaY;
            //                 deltaYMinus = 0;
            //                 if (deltaYPlus > 100) {
            //                     nextHandler();
            //                     deltaYPlus = 0;
            //                 }
            //             }
            //         }
            //     } else {
            //         body.style.overflow = 'auto';
            //     }

            // })

// section.addEventListener('wheel', (e) => {
            //     console.log(e)
            //     if (e.deltaY > 0) {
            //         deltaYPlus += e.deltaY;
            //         deltaYMinus = 0;
            //         if (deltaYPlus > 100) {
            //             nextHandler();
            //             deltaYPlus = 0;
            //         }
            //     }
            //     // else {
            //     //     deltaYMinus += e.deltaY;
            //     //     deltaYPlus = 0;
            //     //     if (deltaYMinus < -200) {
            //     //         prevHandler();
            //     //         deltaYMinus = 0;
            //     //     }
            //     // }
            // })
