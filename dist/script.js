/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../Project\u0000#3/bringitup-vanila-JS/src/js/modules/difference.js":
/*!*************************************************************************!*\
  !*** ../../Project #3/bringitup-vanila-JS/src/js/modules/difference.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Difference)
/* harmony export */ });
class Difference {
  constructor(oldOfficer, newOfficer, items) {
    try {
      this.oldOfficer = document.querySelector(oldOfficer);
      this.newOfficer = document.querySelector(newOfficer);
      this.newItems = this.newOfficer.querySelectorAll(items);
      this.oldItems = this.oldOfficer.querySelectorAll(items);
      this.items = items;
      this.oldCounter = 0;
      this.newCounter = 0;
    } catch (error) {}
  }
  bindTriggers(container, items, counter) {
    container.querySelector('.plus').addEventListener('click', () => {
      if (counter !== items.length - 2) {
        items[counter].style.display = 'flex';
        counter++;
      } else {
        items[counter].style.display = 'flex';
        items[items.length - 1].remove();
      }
    });
  }
  hideItems(items) {
    items.forEach((item, i, arr) => {
      if (i !== arr.length - 1) {
        item.style.display = 'none';
      }
    });
  }
  init() {
    try {
      this.hideItems(this.oldItems);
      this.hideItems(this.newItems);
      this.bindTriggers(this.oldOfficer, this.oldItems, this.oldCounter);
      this.bindTriggers(this.newOfficer, this.newItems, this.newCounter);
    } catch (error) {}
  }
}

/***/ }),

/***/ "../../Project\u0000#3/bringitup-vanila-JS/src/js/modules/download.js":
/*!***********************************************************************!*\
  !*** ../../Project #3/bringitup-vanila-JS/src/js/modules/download.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DownLoad)
/* harmony export */ });
class DownLoad {
  constructor(triggers) {
    this.btn = document.querySelectorAll(triggers);
    this.path = 'assets/img/mainbg.jpg';
  }
  downloadItem(path) {
    const elem = document.createElement('a');
    elem.setAttribute('href', path);
    elem.setAttribute('download', 'nice_picture');
    elem.style.display = 'none';
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);
  }
  init() {
    this.btn.forEach(item => {
      item.addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();
        this.downloadItem(this.path);
      });
    });
  }
}

/***/ }),

/***/ "../../Project\u0000#3/bringitup-vanila-JS/src/js/modules/form.js":
/*!*******************************************************************!*\
  !*** ../../Project #3/bringitup-vanila-JS/src/js/modules/form.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Form)
/* harmony export */ });
class Form {
  constructor(forms) {
    this.forms = document.querySelectorAll(forms);
    this.inputs = document.querySelectorAll('input');
    this.message = {
      loading: 'Loading....',
      success: 'Thanks!',
      failure: 'Error.....'
    };
    this.path = 'assets/question.php';
  }
  checkMailInputs() {
    const mailInputs = document.querySelectorAll('[type="email"]');
    mailInputs.forEach(input => {
      input.addEventListener('keypress', function (e) {
        if (e.key.match(/[^a-z 0-9 @ \.]/gi)) {
          e.preventDefault();
        }
      });
    });
  }
  clearInputs() {
    this.inputs.forEach(item => {
      item.value = '';
    });
  }
  async postData(url, data) {
    let res = await fetch(url, {
      method: 'POST',
      body: data
    });
    return await res.text();
  }
  initMask() {
    let setCursorPosition = (pos, elem) => {
      elem.focus();
      if (elem.setSelectionRange) {
        elem.setSelectionRange(pos, pos);
      } else if (elem.createTextRange) {
        let range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
      }
    };
    function createMask(event) {
      let matrix = '+1 (___) ___-____',
        i = 0,
        def = matrix.replace(/\D/g, ''),
        val = this.value.replace(/\D/g, '');
      if (def.length >= val.length) {
        val = def;
      }
      this.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
      });
      if (event.type === 'blur') {
        if (this.value.length == 2) {
          this.value = '';
        }
      } else {
        setCursorPosition(this.value.length, this);
      }
    }
    let inputs = document.querySelectorAll('[name="phone"]');
    inputs.forEach(input => {
      input.addEventListener('input', createMask);
      input.addEventListener('keypress', createMask);
      input.addEventListener('focus', createMask);
      input.addEventListener('blur', createMask);
    });
  }
  init() {
    this.initMask();
    this.checkMailInputs();
    this.forms.forEach(item => {
      item.addEventListener('submit', e => {
        e.preventDefault();
        let statusMessage = document.createElement('div');
        statusMessage.style.cssText = `
         margin-top:15px;
         font-size:18px;
         color:gray;`;
        item.parentNode.appendChild(statusMessage);
        statusMessage.textContent = this.message.loading;
        const formData = new FormData(item);
        this.postData(this.path, formData).then(res => {
          console.log(res);
          statusMessage.textContent = this.message.success;
        }).catch(() => {
          statusMessage.textContent = this.message.failure;
        }).finally(() => {
          this.clearInputs();
          setTimeout(() => {
            statusMessage.remove();
          }, 6000);
        });
      });
    });
  }
}

/***/ }),

/***/ "../../Project\u0000#3/bringitup-vanila-JS/src/js/modules/playVideo.js":
/*!************************************************************************!*\
  !*** ../../Project #3/bringitup-vanila-JS/src/js/modules/playVideo.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VideoPlayer)
/* harmony export */ });
class VideoPlayer {
  constructor(triggers, overlay) {
    this.btn = document.querySelectorAll(triggers);
    this.overlay = document.querySelector(overlay);
    this.close = this.overlay.querySelector('.close');
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
  }
  bindTriggers() {
    this.btn.forEach((btn, i) => {
      try {
        const blockedElem = btn.closest('.module__video-item').nextElementSibling;
        if (i % 2 === 0) {
          blockedElem.setAttribute('data-disabled', 'true');
        }
      } catch (error) {}
      btn.addEventListener('click', () => {
        if (!btn.closest('.module__video-item') || btn.closest('.module__video-item').getAttribute('data-disabled') !== 'true') {
          this.activeBtn = btn;
          if (document.querySelector('iframe#frame')) {
            this.overlay.style.display = 'flex';
            if (this.path !== btn.getAttribute('data-url')) {
              this.path = btn.getAttribute('data-url');
              this.player.loadVideoById({
                videoId: this.path
              });
            }
          } else {
            this.path = btn.getAttribute('data-url');
            this.createPlayer(this.path);
          }
        }
      });
    });
  }
  bindCloseBtn() {
    this.close.addEventListener('click', () => {
      this.overlay.style.display = 'none';
      this.player.stopVideo();
    });
  }
  createPlayer(url) {
    this.player = new YT.Player('frame', {
      height: '100%',
      width: '100%',
      videoId: `${url}`,
      events: {
        onStateChange: this.onPlayerStateChange
      }
    });
    this.overlay.style.display = 'flex';
  }
  onPlayerStateChange(state) {
    try {
      const blockedElem = this.activeBtn.closest('.module__video-item').nextElementSibling;
      const playBtn = this.activeBtn.querySelector('svg').cloneNode(true);
      if (state.data === 0) {
        if (blockedElem.querySelector('.play__circle').classList.contains('closed')) {
          blockedElem.querySelector('.play__circle').classList.remove('closed');
          blockedElem.querySelector('svg').remove();
          blockedElem.querySelector('.play__circle').appendChild(playBtn);
          blockedElem.querySelector('.play__text').textContent = 'play video';
          blockedElem.querySelector('.play__text').classList.remove('attention');
          blockedElem.style.opacity = 1;
          blockedElem.style.filter = 'none';
          blockedElem.setAttribute('data-disabled', 'false');
        }
      }
    } catch (error) {}
  }
  init() {
    if (this.btn.length > 0) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      this.bindTriggers();
      this.bindCloseBtn();
    }
  }
}

/***/ }),

/***/ "../../Project\u0000#3/bringitup-vanila-JS/src/js/modules/showInfo.js":
/*!***********************************************************************!*\
  !*** ../../Project #3/bringitup-vanila-JS/src/js/modules/showInfo.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShowInfo)
/* harmony export */ });
class ShowInfo {
  constructor(triggers) {
    this.btns = document.querySelectorAll(triggers);
  }
  init() {
    this.btns.forEach(btn => {
      btn.addEventListener('click', () => {
        const sibling = btn.closest('.module__info-show').nextElementSibling;
        sibling.classList.toggle('msg');
        sibling.style.marginTop = '20px';
      });
    });
  }
}

/***/ }),

/***/ "../../Project\u0000#3/bringitup-vanila-JS/src/js/modules/slider/slider-main.js":
/*!*********************************************************************************!*\
  !*** ../../Project #3/bringitup-vanila-JS/src/js/modules/slider/slider-main.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainSlider)
/* harmony export */ });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "../../Project\u0000#3/bringitup-vanila-JS/src/js/modules/slider/slider.js");

class MainSlider extends _slider__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(btns) {
    super(btns);
  }
  showSlides(n) {
    const slidesArray = Array.from(this.slides);
    if (n > slidesArray.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = slidesArray.length;
    }
    try {
      this.hanson.style.opacity = '0';
      if (n === 3) {
        this.hanson.classList.add('animated');
        setTimeout(() => {
          this.hanson.style.opacity = '1';
          this.hanson.classList.add('animated', 'slideInUp');
        }, 3000);
      } else {
        this.hanson.classList.remove('slideInUp');
      }
    } catch (error) {}
    slidesArray.forEach(slide => {
      slide.style.display = 'none';
      slide.classList.remove('animated', 'fadeIn');
    });
    slidesArray[this.slideIndex - 1].style.display = 'block';
    slidesArray[this.slideIndex - 1].classList.add('animated', 'fadeIn');
  }
  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }
  bindTriggers() {
    this.btns.forEach(item => {
      item.addEventListener('click', () => {
        this.plusSlides(1);
      });
      item.parentNode.previousElementSibling.addEventListener('click', e => {
        e.preventDefault();
        this.slideIndex = 1;
      });
    });
    this.showSlides(this.slideIndex);
    document.querySelectorAll('.prevmodule').forEach(item => {
      item.addEventListener('click', e => {
        e.stopPropagation();
        e.preventDefault();
        this.plusSlides(-1);
      });
    });
    document.querySelectorAll('.nextmodule').forEach(item => {
      item.addEventListener('click', e => {
        e.stopPropagation();
        e.preventDefault();
        this.plusSlides(1);
      });
    });
  }
  render() {
    if (this.container) {
      try {
        this.hanson = document.querySelector('.hanson');
      } catch (error) {}
      this.showSlides(this.slideIndex);
      this.bindTriggers();
    }
  }
}

/***/ }),

/***/ "../../Project\u0000#3/bringitup-vanila-JS/src/js/modules/slider/slider-mini.js":
/*!*********************************************************************************!*\
  !*** ../../Project #3/bringitup-vanila-JS/src/js/modules/slider/slider-mini.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MiniSlider)
/* harmony export */ });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "../../Project\u0000#3/bringitup-vanila-JS/src/js/modules/slider/slider.js");

class MiniSlider extends _slider__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(container, next, prev, activeClass, animate, autoplay) {
    super(container, next, prev, activeClass, animate, autoplay);
    this.paused = false;
  }
  decoratingSlides() {
    const {
      activeClass,
      animate
    } = this;
    const slidesArr = Array.from(this.slides);
    slidesArr.forEach(slide => {
      slide.classList.remove(activeClass);
      if (animate) {
        slide.querySelector('.card__title').style.opacity = '0.4';
        slide.querySelector('.card__controls-arrow').style.opacity = '0';
      }
    });
    slidesArr[0].classList.add(activeClass);
    if (animate) {
      slidesArr[0].querySelector('.card__title').style.opacity = '1';
      slidesArr[0].querySelector('.card__controls-arrow').style.opacity = '1';
    }
  }
  nextSlide() {
    const {
      container,
      slides,
      prev
    } = this;
    const slidesArr = Array.from(slides);
    if (prev.parentNode === container) {
      container.insertBefore(slidesArr[0], prev);
    } else {
      container.appendChild(slidesArr[0]);
    }
    this.decoratingSlides();
  }
  prevSlide() {
    const {
      container,
      slides
    } = this;
    for (let i = slides.length - 1; i > 0; i--) {
      if (slides[i].tagName !== 'BUTTON') {
        let active = slides[i];
        container.insertBefore(active, slides[0]);
        this.decoratingSlides();
        break;
      }
    }
  }
  bindTriggers() {
    const {
      next,
      prev
    } = this;
    next.addEventListener('click', () => {
      this.nextSlide();
    });
    prev.addEventListener('click', () => {
      this.prevSlide();
    });
  }
  activateAnimation() {
    this.paused = setInterval(() => this.nextSlide(), 3000);
  }
  init() {
    try {
      this.container.style.cssText = `
     display:flex;
     flex-wrap:wrap;
     overflow:hidden;
     align-items:flex-start;
     `;
      this.bindTriggers();
      this.decoratingSlides();
      if (this.autoplay) {
        this.container.addEventListener('mouseenter', () => clearInterval(this.paused));
        this.next.addEventListener('mouseenter', () => clearInterval(this.paused));
        this.prev.addEventListener('mouseenter', () => clearInterval(this.paused));
        this.container.addEventListener('mouseleave', () => this.activateAnimation());
        this.next.addEventListener('mouseleave', () => this.activateAnimation());
        this.prev.addEventListener('mouseleave', () => this.activateAnimation());
        this.activateAnimation();
      }
    } catch (error) {}
  }
}

/***/ }),

/***/ "../../Project\u0000#3/bringitup-vanila-JS/src/js/modules/slider/slider.js":
/*!****************************************************************************!*\
  !*** ../../Project #3/bringitup-vanila-JS/src/js/modules/slider/slider.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Slider)
/* harmony export */ });
class Slider {
  constructor({
    container = null,
    btns = null,
    next = null,
    prev = null,
    activeClass = '',
    animate,
    autoplay
  } = {}) {
    this.container = document.querySelector(container);
    try {
      this.slides = this.container.children;
    } catch (e) {}
    this.btns = document.querySelectorAll(btns);
    this.prev = document.querySelector(prev);
    this.next = document.querySelector(next);
    this.activeClass = activeClass;
    this.animate = animate;
    this.autoplay = autoplay;
    this.slideIndex = 1;
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************************************************!*\
  !*** ../../Project #3/bringitup-vanila-JS/src/js/main.js ***!
  \***********************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_difference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/difference */ "../../Project\u0000#3/bringitup-vanila-JS/src/js/modules/difference.js");
/* harmony import */ var _modules_download__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/download */ "../../Project\u0000#3/bringitup-vanila-JS/src/js/modules/download.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/form */ "../../Project\u0000#3/bringitup-vanila-JS/src/js/modules/form.js");
/* harmony import */ var _modules_playVideo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/playVideo */ "../../Project\u0000#3/bringitup-vanila-JS/src/js/modules/playVideo.js");
/* harmony import */ var _modules_showInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/showInfo */ "../../Project\u0000#3/bringitup-vanila-JS/src/js/modules/showInfo.js");
/* harmony import */ var _modules_slider_slider_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider/slider-main */ "../../Project\u0000#3/bringitup-vanila-JS/src/js/modules/slider/slider-main.js");
/* harmony import */ var _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider/slider-mini */ "../../Project\u0000#3/bringitup-vanila-JS/src/js/modules/slider/slider-mini.js");







window.addEventListener('DOMContentLoaded', () => {
  const moduleSlider = new _modules_slider_slider_main__WEBPACK_IMPORTED_MODULE_5__["default"]({
    container: '.moduleapp',
    btns: '.next'
  });
  moduleSlider.render();
  const slider = new _modules_slider_slider_main__WEBPACK_IMPORTED_MODULE_5__["default"]({
    btns: '.next',
    container: '.page'
  });
  slider.render();
  new _modules_playVideo__WEBPACK_IMPORTED_MODULE_3__["default"]('.showup .play', '.overlay').init();
  new _modules_playVideo__WEBPACK_IMPORTED_MODULE_3__["default"]('.module__video-item .play', '.overlay').init();
  const showUpSlider = new _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_6__["default"]({
    container: '.showup__content-slider',
    prev: '.showup__prev',
    next: '.showup__next',
    activeClass: 'card-active',
    animate: true,
    autoplay: true
  });
  showUpSlider.init();
  const modulesSlider = new _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_6__["default"]({
    container: '.modules__content-slider',
    prev: '.modules__info-btns .slick-prev',
    next: '.modules__info-btns .slick-next',
    activeClass: 'card-active',
    animate: true,
    autoplay: true
  });
  modulesSlider.init();
  const feedSlider = new _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_6__["default"]({
    container: '.feed__slider',
    prev: '.feed__slider .slick-prev',
    next: '.feed__slider .slick-next',
    activeClass: 'feed__item-active',
    autoplay: true,
    animate: false
  });
  feedSlider.init();
  new _modules_difference__WEBPACK_IMPORTED_MODULE_0__["default"]('.officerold', '.officernew', '.officer__card-item').init();
  new _modules_form__WEBPACK_IMPORTED_MODULE_2__["default"]('.form').init();
  new _modules_showInfo__WEBPACK_IMPORTED_MODULE_4__["default"]('.plus__content').init();
  new _modules_download__WEBPACK_IMPORTED_MODULE_1__["default"]('.download').init();
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map