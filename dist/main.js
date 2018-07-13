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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\nvar form = document.querySelector('.identification-head_bank form');\nvar cvc = form.querySelector('.card-cvc');\nvar user = form.querySelector('.card-user');\nvar cardNumber = form.querySelectorAll('.card-number');\nvar month = form.querySelector('.card-month');\nvar year = form.querySelector('.card-year');\n\nvar dYear = new Date().getFullYear();\nvar dMonth = new Date().getMonth();\n\nform.addEventListener('submit', function () {\n  event.preventDefault();\n\n  removeValidation();\n  checkErrors();\n  validateForm();\n});\n\nfunction validateForm() {\n  var errors = form.querySelectorAll('.error');\n\n  if (!errors.length) {\n    return true;\n  } else {\n    return false;\n  }\n}\n\nfunction removeValidation() {\n  var errors = form.querySelectorAll('.error');\n\n  for (var i = 0; i < errors.length; i++) {\n    errors[i].classList.remove('error');\n  }\n}\n\nfunction checkErrors() {\n  for (var i = 0; i < cardNumber.length; i++) {\n    if (cardNumber[i].value.length !== 4) {\n      cardNumber[i].className += ' ' + 'error';\n    }\n  }\n  if (cvc.value.length !== 3) {\n    cvc.className += ' ' + 'error';\n  }\n  if (!/^([- A-Za-z0-9]+){4,}$/.test(user.value)) {\n    user.className += ' ' + 'error';\n  }\n  if (Number(month.value) < dMonth && Number(year.value) === dYear) {\n    month.className += ' ' + 'error';\n  }\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ })

/******/ });