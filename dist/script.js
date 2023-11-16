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


window.addEventListener('DOMContentLoaded', () => {
  Object(_burger__WEBPACK_IMPORTED_MODULE_0__["burgerInteraction"])();
  Object(_animateIntro__WEBPACK_IMPORTED_MODULE_1__["animateIntro"])();
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map