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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_actionPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/actionPage */ \"./src/modules/actionPage.js\");\n/* harmony import */ var _modules_addCart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/addCart */ \"./src/modules/addCart.js\");\n/* harmony import */ var _modules_getData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _modules_renderCards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/renderCards */ \"./src/modules/renderCards.js\");\n/* harmony import */ var _modules_renderCatalog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/renderCatalog */ \"./src/modules/renderCatalog.js\");\n/* harmony import */ var _modules_toggleCart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/toggleCart */ \"./src/modules/toggleCart.js\");\n/* harmony import */ var _modules_toggleCheckbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/toggleCheckbox */ \"./src/modules/toggleCheckbox.js\");\n\n\n\n\n\n\n\n\n\n\n\n(async function () {\n   const db = await Object(_modules_getData__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n        Object(_modules_renderCards__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(db);\n        Object(_modules_renderCatalog__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n        Object(_modules_actionPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        Object(_modules_addCart__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        Object(_modules_toggleCart__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n        Object(_modules_toggleCheckbox__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n}());\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/actionPage.js":
/*!***********************************!*\
  !*** ./src/modules/actionPage.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return actionPage; });\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ \"./src/modules/filter.js\");\n\n\nfunction actionPage() {\n    const cards = document.querySelectorAll(\".goods .card\"),\n        discountCheckbox = document.getElementById(\"discount-checkbox\"),\n        goods = document.querySelector(\".goods\"),\n        min = document.getElementById(\"min\"),\n        max = document.getElementById(\"max\"),\n        search = document.querySelector(\".search-wrapper_input\"),\n        searchBtn = document.querySelector(\".search-btn\"),\n        inputSearch = document.querySelector('input');\n\n    discountCheckbox.addEventListener(\"click\", _filter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n    max.addEventListener(\"change\", _filter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n    min.addEventListener(\"change\", _filter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n    //===================================================    \n    // search engine\n    function searchFunc() {\n        const searchText = new RegExp(search.value.trim(), 'i');\n        cards.forEach(card => {\n            const title = card.querySelector(\".card-title\");\n            if (!searchText.test(title.textContent)) {\n                card.parentNode.style.display = 'none';\n            } else {\n                card.parentNode.style.display = '';\n            }\n        });\n        search.value = '';\n    }\n    //button search\n    searchBtn.addEventListener(\"click\", () => {\n        searchFunc();\n    });\n    //enter search\n    inputSearch.addEventListener('keydown', (ev) => {\n        if (ev.keyCode === 13) {\n            searchFunc();\n        }\n    });\n    //==============================================    \n}\n\n//# sourceURL=webpack:///./src/modules/actionPage.js?");

/***/ }),

/***/ "./src/modules/addCart.js":
/*!********************************!*\
  !*** ./src/modules/addCart.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return addCart; });\nfunction addCart() {\n    const cards = document.querySelectorAll(\".goods .card\"),\n        cartWrapper = document.querySelector(\".cart-wrapper\"),\n        cartEmpty = document.querySelector(\"#cart-empty\"),\n        countGoods = document.querySelector(\".counter\");\n\n    cards.forEach(card => {\n        const btn = card.querySelector(\".btn\");\n        btn.addEventListener(\"click\", () => {\n            const cardClone = card.cloneNode(true);\n            cartWrapper.append(cardClone);\n            showData();\n\n            const removeBtn = cardClone.querySelector(\".btn\");\n            removeBtn.textContent = \"Удалить из корзины\";\n            removeBtn.style.cssText = \"background: red; border: 1px solid red\";\n            removeBtn.addEventListener(\"click\", () => {\n                cardClone.remove();\n                showData();\n            });\n        });\n    });\n\n    function showData() {\n        const cardsCart = cartWrapper.querySelectorAll(\".card\"),\n            cardsPrice = cartWrapper.querySelectorAll(\".card-price\"),\n            cardTotal = document.querySelector(\".cart-total span\");\n        let sum = 0;\n\n        countGoods.textContent = cardsCart.length;\n\n        cardsPrice.forEach(cardPrice => {\n            let price = parseFloat(cardPrice.textContent);\n            sum += price;\n        });\n\n        cardTotal.textContent = sum;\n\n        if (cardsCart.length !== 0) {\n            cartEmpty.remove();\n        } else {\n            cartWrapper.append(cartEmpty);\n        }\n    }\n}\n\n//# sourceURL=webpack:///./src/modules/addCart.js?");

/***/ }),

/***/ "./src/modules/filter.js":
/*!*******************************!*\
  !*** ./src/modules/filter.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return filter; });\nfunction filter() {\n    const cards = document.querySelectorAll(\".goods .card\"),\n        discountCheckbox = document.getElementById(\"discount-checkbox\"),\n        min = document.getElementById(\"min\"),\n        max = document.getElementById(\"max\"),\n        activeLi = document.querySelector('.catalog-list li.active'),\n        allGoods = 'Все товары';\n\n    cards.forEach((card) => {\n        const cardPrice = card.querySelector(\".card-price\");\n        const price = parseFloat(cardPrice.textContent);\n        const discount = card.querySelector('.card-sale');\n        card.parentNode.style.display = '';\n\n        if ((min.value && price < min.value) ||\n            (max.value && price > max.value)) {\n            card.parentNode.style.display = 'none';\n        } else if (discountCheckbox.checked && !discount) {\n            card.parentNode.style.display = 'none';\n        } else if (activeLi) {\n            if (activeLi.textContent === allGoods) {\n                card.parentNode.style.display = '';\n            } else if (card.dataset.categories !== activeLi.textContent) {\n                card.parentNode.style.display = 'none';\n            }\n        } else {\n            card.parentNode.style.display = '';\n        }\n    });\n}\n\n//# sourceURL=webpack:///./src/modules/filter.js?");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getData; });\nfunction getData() {\n  const goodsWrapper = document.querySelector(\".goods\");\n  return fetch(\"../../db/db.json\")\n    .then(res => {\n      if (res.ok) {\n        return res.json();\n      } else {\n        throw new Error(res.status);\n      }\n    })\n    .then(data => {\n      return data;\n    })\n    .catch(err => {\n      console.warn(err);\n      goodsWrapper.innerHTML =\n        '<div style=\"color: red; font-size: 30px\">Упс, что -то пошло не так ...</div>';\n    });\n}\n\n\n//# sourceURL=webpack:///./src/modules/getData.js?");

/***/ }),

/***/ "./src/modules/renderCards.js":
/*!************************************!*\
  !*** ./src/modules/renderCards.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return renderCards; });\nfunction renderCards(data) {\n    const goodsWrapper = document.querySelector('.goods');\n    data.goods.forEach(good => {\n        const card = document.createElement('div');\n        card.className = 'col-12 col-md-6 col-lg-4 col-xl-3';\n        card.innerHTML =\n            `\n                                <div class=\"card\" data-categories=\"${good.category}\">\n                                ${\n                                    good.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''\n                                }\n\t\t\t\t\t\t\t\t\t<div class=\"card-img-wrapper\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"card-img-top\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"background-image: url('${good.img}')\"></span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"card-body justify-content-between\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"card-price\" style=${good.sale ? 'color:red' : ''}>${good.price} ₽</div>\n\t\t\t\t\t\t\t\t\t\t<h5 class=\"card-title\">${good.title}</h5>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">В корзину</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n        `;\n        goodsWrapper.append(card);\n    });\n\n}\n\n//# sourceURL=webpack:///./src/modules/renderCards.js?");

/***/ }),

/***/ "./src/modules/renderCatalog.js":
/*!**************************************!*\
  !*** ./src/modules/renderCatalog.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return renderCatalog; });\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ \"./src/modules/filter.js\");\n\n\nfunction renderCatalog() {\n    const cards = document.querySelectorAll('.goods .card');\n    const catalogList = document.querySelector('.catalog-list');\n    const catalogBtn = document.querySelector('.catalog-button');\n    const catalogWrapper = document.querySelector('.catalog');\n    const categories = new Set();\n    const filterTitle = document.querySelector('.filter-title h5');\n\n    cards.forEach(card => {\n        categories.add(card.dataset.categories);\n    });\n\n    categories.forEach((item) => {\n        const li = document.createElement('li');\n        li.textContent = item;\n        catalogList.append(li);\n    });\n    // все товары в меню\n    const allGoods = document.createElement('li');\n    allGoods.textContent = 'Все товары';\n    catalogList.prepend(allGoods);\n\n\n    const allLi = catalogList.querySelectorAll('li');\n\n    catalogBtn.addEventListener('click', (event) => {\n        if (catalogWrapper.style.display) {\n            catalogWrapper.style.display = '';\n        } else {\n            catalogWrapper.style.display = 'block';\n        }\n\n        if (event.target.tagName === 'LI') {\n            allLi.forEach((el) => {\n                if (el === event.target) {\n                    el.classList.add('active');\n                } else {\n                    el.classList.remove('active');\n                }\n            });\n            filterTitle.textContent = event.target.textContent;\n            Object(_filter__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        }\n    });\n}\n\n//# sourceURL=webpack:///./src/modules/renderCatalog.js?");

/***/ }),

/***/ "./src/modules/toggleCart.js":
/*!***********************************!*\
  !*** ./src/modules/toggleCart.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return toggleCart; });\nfunction toggleCart() {\n    const btnCart = document.getElementById(\"cart\");\n    const modalCart = document.querySelector(\".cart\");\n    const cartClose = document.querySelector(\".cart-close\");\n\n    btnCart.addEventListener(\"click\", () => {\n        modalCart.style.display = \"flex\";\n        document.body.style.overflow = \"hidden\";\n    });\n    cartClose.addEventListener(\"click\", () => {\n        modalCart.style.display = \"none\";\n        document.body.style.overflow = \"\";\n    });\n}\n\n//# sourceURL=webpack:///./src/modules/toggleCart.js?");

/***/ }),

/***/ "./src/modules/toggleCheckbox.js":
/*!***************************************!*\
  !*** ./src/modules/toggleCheckbox.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return toggleCheckbox; });\nfunction toggleCheckbox() {\n    const checkbox = document.querySelectorAll(\".filter-check_checkbox\");\n\n    checkbox.forEach(elem => {\n        elem.addEventListener(\"change\", function () {\n            if (this.checked === true) {\n                this.nextElementSibling.classList.add(\"checked\");\n            } else {\n                this.nextElementSibling.classList.remove(\"checked\");\n            }\n        });\n    });\n}\n\n//# sourceURL=webpack:///./src/modules/toggleCheckbox.js?");

/***/ })

/******/ });