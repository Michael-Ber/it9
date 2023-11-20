/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/animateDevelopment.js":
/*!*********************************************!*\
  !*** ./src/assets/js/animateDevelopment.js ***!
  \*********************************************/
/*! exports provided: animateDevelopment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animateDevelopment", function() { return animateDevelopment; });
const animateDevelopment = () => {
  try {
    const list = document.querySelector('.development__list');
    const listItems = document.querySelectorAll('.development__item');
    window.addEventListener('scroll', () => {
      listItems.forEach(item => {
        if (item.getBoundingClientRect().top - window.innerHeight < -230) {
          item.style.opacity = 1;
        } else {
          item.style.opacity = 0;
        }
      });
    });
  } catch (error) {
    console.log(error);
  }
};

/***/ }),

/***/ "./src/assets/js/animateIntro.js":
/*!***************************************!*\
  !*** ./src/assets/js/animateIntro.js ***!
  \***************************************/
/*! exports provided: animateIntro */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animateIntro", function() { return animateIntro; });
const animateIntro = () => {
  const titleTop = document.querySelector('.part-up');
  const titleBottom = document.querySelector('.part-bottom');
  const subtitle = document.querySelector('.intro__bottom');
  const titleTimer = setTimeout(() => {
    titleTop.classList.add('part-up_loaded');
    titleBottom.classList.add('part-bottom_loaded');
    const subtitleTimer = setTimeout(() => {
      subtitle.classList.add('intro__bottom_loaded');
    }, 1000);
  }, 500);
};

/***/ }),

/***/ "./src/assets/js/animateSport.js":
/*!***************************************!*\
  !*** ./src/assets/js/animateSport.js ***!
  \***************************************/
/*! exports provided: animateSport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animateSport", function() { return animateSport; });
const animateSport = () => {
  try {
    const arrows = document.querySelectorAll('.title-arrow-common');
    const code = document.querySelector('#code-num');
    let num = 910576823;
    window.addEventListener('scroll', () => {
      arrows.forEach(arrow => {
        if (arrow.getBoundingClientRect().top - window.innerHeight < -150) {
          arrow.classList.add('title-arrow-common_active');
        } else {
          arrow.classList.remove('title-arrow-common_active');
        }
      });
    });
    const numTimer = setInterval(() => {
      code.textContent = String(++num).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    }, 300);

    // window.addEventListener('focus', () => {
    //     clearInterval(numTimer);
    // })  
  } catch (error) {
    console.log(error);
  }
};

/***/ }),

/***/ "./src/assets/js/burger.js":
/*!*********************************!*\
  !*** ./src/assets/js/burger.js ***!
  \*********************************/
/*! exports provided: burgerInteraction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "burgerInteraction", function() { return burgerInteraction; });
const burgerInteraction = () => {
  try {
    const burgerBtn = document.querySelector('.header-burger__btn');
    const menu = document.querySelector('.header-burger__menu');
    const close = document.querySelector('.header-burger__close');
    burgerBtn.addEventListener('click', () => {
      menu.classList.toggle('header-burger__menu_active');
    });
    close.addEventListener('click', () => {
      menu.classList.remove('header-burger__menu_active');
    });
    window.addEventListener('scroll', () => {
      menu.classList.remove('header-burger__menu_active');
    });
  } catch (error) {
    console.log(error);
  }
};

/***/ }),

/***/ "./src/assets/js/directionSlider.js":
/*!******************************************!*\
  !*** ./src/assets/js/directionSlider.js ***!
  \******************************************/
/*! exports provided: directionSliderInteraction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directionSliderInteraction", function() { return directionSliderInteraction; });
const directionSliderInteraction = () => {
  try {
    const body = document.querySelector('body');
    const section = document.querySelector('.direction');
    const wrapper = document.querySelector('.carousel-direction__wrapper');
    const slides = document.querySelectorAll('.carousel-direction__slide');
    let slideWidth = Number(window.getComputedStyle(slides[0]).width.replace(/px/ig, ''));
    let slideIndex = 0;
    let offset = 0;
    let stopScrolling = false;
    let deltaYPlus = 0;
    let deltaYMinus = 0;
    window.addEventListener('resize', () => {
      if (window.innerWidth > 576) {
        setTimeout(sliderInit, 1000); //костыль, 1сек задержки на обновление после ресайза
      } else {
        sliderReset();
      }
    });
    if (window.innerWidth > 576) {
      sliderInit();
      wheelMouse();
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
      });
    }
    function wheelMouse() {
      window.addEventListener('wheel', e => {
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
      });
    }
    function setSlidesSizes(slide, i) {
      if (i > 0) {
        if (i < 9) {
          slide.style.transform = `scale(${1 - i / 10})`;
        } else {
          slide.style.transform = `scale(0.1)`; //ограничение по масштабу при превышении кол-ва слайдов 10
        }

        slide.style.zIndex = `${100 - i}`; //уменьшение z-index
        slide.style.marginLeft = `${(-272 - -150) / (1920 - 390) * (window.innerWidth - 390) + -150}px`; //отрицательный margin для наезда слайдов
        Array.from(slide.children).forEach(child => {
          child.style.opacity = `${0.3 / i}`; //уменьшение opacity
        });

        slideWidth = Number(window.getComputedStyle(slides[0]).width.replace(/px/ig, ''));
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
        });
      });
    }
    function nextHandler() {
      if (slideIndex < slides.length - 1) {
        offset += -slideWidth;
        slideIndex++;
      }
      if (slideIndex > slides.length - 2) {
        stopScrolling = true;
      }
      wrapper.style.transform = `translateX(${offset}px)`;
      slides.forEach(slide => {
        slide.classList.remove('carousel-direction__slide_active');
        // setSlidesSizes(slides[slideIndex], slideIndex);
      });

      slides[slideIndex].classList.add('carousel-direction__slide_active');
      for (let i = 1; i < slideIndex; i++) {
        slides[i].style.marginLeft = 0; //при движении влево чтобы слайды правильно позиционировались слайдам что остались слева делаем margin 0 
      }

      for (let i = slideIndex + 1; i < slides.length; i++) {
        slides[i].style.transform = `scale(${1 - (i - slideIndex) / 10})`; //в цепочке слайдов при движении влево пересчитываем масштаб для слайдов справа
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
      });
      slides[slideIndex].classList.add('carousel-direction__slide_active');
      for (let i = 1; i < slideIndex; i++) {
        slides[i].style.marginLeft = 0; //по аналогии с next
      }

      for (let i = slideIndex + 1; i < slides.length; i++) {
        slides[i].style.transform = `scale(${1 - (i - slideIndex) / 10})`; //по аналогии с next
      }
    }
  } catch (error) {
    console.log(error);
  }
};

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

/***/ }),

/***/ "./src/assets/js/directionSliderSwiper.js":
/*!************************************************!*\
  !*** ./src/assets/js/directionSliderSwiper.js ***!
  \************************************************/
/*! exports provided: directionSliderSwiperInteraction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directionSliderSwiperInteraction", function() { return directionSliderSwiperInteraction; });
const directionSliderSwiperInteraction = () => {
  const body = document.querySelector('body');
  const section = document.querySelector('.direction');
  window.addEventListener('scroll', () => {
    if (section.getBoundingClientRect().top < 0 && window.innerHeight - section.getBoundingClientRect().bottom < 0) {
      body.style.overflow = 'hidden';
      // swiper.enable();
    }
  });

  const swiper = new Swiper('.swiper', {
    loop: false,
    speed: 400,
    slidesPerView: 1,
    mousewheel: true,
    on: {
      init: function () {
        const slidesWrapper = document.querySelector('.swiper-wrapper');
        const slideWidth = Number(window.getComputedStyle(Array.from(slidesWrapper.children)[0]).width.replace(/px/ig, ''));
        Array.from(slidesWrapper.children).forEach((slide, i) => {
          if (i > 0) {
            slide.style.opacity = `${0.3 / i}`;
            slide.style.transform = `scale(${1 - i / 10}) translateX(${-(slideWidth - slideWidth * (1 - i / 10)) / 2 / (1 - i / 10)}px`;
            slide.style.marginLeft = `${-(slideWidth - slideWidth * (1 - (i - 1) / 10)) - 150}px`;
          }
        });
      },
      slideChangeTransitionStart: function () {
        const slidesWrapper = document.querySelector('.carousel-direction__wrapper');
        const slideWidth = Number(window.getComputedStyle(Array.from(slidesWrapper.children)[0]).width.replace(/px/ig, ''));
        Array.from(slidesWrapper.children).forEach((slide, i, arr) => {
          if (slide.classList.contains('swiper-slide-active')) {
            for (let y = 0; y < i; y++) {
              arr[y].style.marginLeft = 0;
            }
            for (let o = i + 1; o < arr.length; o++) {
              arr[o].style.transform = `scale(${1 - (o - i) / 10}) translateX(${-(slideWidth - slideWidth * (1 - (o - i) / 10)) / 2 / (1 - (o - i) / 10)}px`;
              arr[o].style.marginLeft = `${-(slideWidth - slideWidth * (1 - (o - i - 1) / 10)) - 150}px`;
              arr[o].style.opacity = `${0.3 / (o - i)}`;
            }
          }
        });
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
};

/***/ }),

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./burger */ "./src/assets/js/burger.js");
/* harmony import */ var _animateIntro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animateIntro */ "./src/assets/js/animateIntro.js");
/* harmony import */ var _animateDevelopment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animateDevelopment */ "./src/assets/js/animateDevelopment.js");
/* harmony import */ var _directionSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directionSlider */ "./src/assets/js/directionSlider.js");
/* harmony import */ var _animateSport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animateSport */ "./src/assets/js/animateSport.js");
/* harmony import */ var _workusSlider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./workusSlider */ "./src/assets/js/workusSlider.js");
/* harmony import */ var _directionSliderSwiper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directionSliderSwiper */ "./src/assets/js/directionSliderSwiper.js");







window.addEventListener('DOMContentLoaded', () => {
  Object(_burger__WEBPACK_IMPORTED_MODULE_0__["burgerInteraction"])();
  Object(_animateIntro__WEBPACK_IMPORTED_MODULE_1__["animateIntro"])();
  Object(_animateDevelopment__WEBPACK_IMPORTED_MODULE_2__["animateDevelopment"])();
  // directionSliderInteraction();
  Object(_animateSport__WEBPACK_IMPORTED_MODULE_4__["animateSport"])();
  Object(_workusSlider__WEBPACK_IMPORTED_MODULE_5__["workusSliderInteraction"])();
  Object(_directionSliderSwiper__WEBPACK_IMPORTED_MODULE_6__["directionSliderSwiperInteraction"])();
});

/***/ }),

/***/ "./src/assets/js/workusSlider.js":
/*!***************************************!*\
  !*** ./src/assets/js/workusSlider.js ***!
  \***************************************/
/*! exports provided: workusSliderInteraction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "workusSliderInteraction", function() { return workusSliderInteraction; });
const workusSliderInteraction = () => {
  try {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 576) {
        sliderOn();
      }
    });
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
          resetSlider();
        }
      });
      sliderInit();
      wheelMouse();
      function sliderInit() {
        slideWidth = Number(window.getComputedStyle(slide).width.replace(/px/ig, ''));
        sliderWrapper.style.width = `${slideWidth * sliderWrapper.children.length}px`;
      }
      function wheelMouse() {
        window.addEventListener('wheel', e => {
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
        });
      }
      function defineNumberOfSlidesOnViewport() {
        let numSlidesOnScreen = (window.innerWidth - Number(window.getComputedStyle(section).paddingLeft.replace(/px/ig, ''))) / (slideWidth + 30); //30 подгонка
        return Math.floor(numSlidesOnScreen);
      }
      function nextHandler() {
        if (window.innerWidth > 576) {
          const slidesLength = sliderWrapper.children.length;
          if (slideIndex < slidesLength - defineNumberOfSlidesOnViewport()) {
            offset += -slideWidth - 40;
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
          });
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
          });
        }
      }
      function resetSlider() {
        sliderWrapper.style.transform = 'translateX(0)';
        sliderWrapper.style.transform = '100%';
      }
    }
  } catch (error) {
    console.log(error);
  }
};

/***/ })

/******/ });
//# sourceMappingURL=script.js.map