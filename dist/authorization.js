/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize.css */ \"./node_modules/normalize.css/normalize.css\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n\n\nvar email = document.querySelector('input[type=\"email\"]');\nvar password = document.querySelector('input[type=\"password\"]');\nvar checkbox = document.querySelector('input[type=\"checkbox\"]');\nvar button = document.querySelector('.authorization__button');\nbutton.addEventListener('click', function (e) {\n  localStorage.setItem('email', 'kamalov_albert@mail.ru');\n  localStorage.setItem('password', '12345');\n  var userPassword = localStorage.getItem('password');\n  var userEmail = localStorage.getItem('email');\n\n  for (var _i = 0, _arr = [email, password, checkbox]; _i < _arr.length; _i++) {\n    var input = _arr[_i];\n    errReset(input);\n\n    if (input.value === '' || input.type === 'checkbox' && !input.checked) {\n      invalid(input);\n      addErrorDescription(input, 'Поле обязательно для заполнения');\n      continue;\n    } else if (input.type === 'email' && !validateEmail(input.value)) {\n      invalid(input);\n      addErrorDescription(input, 'Email невалидный');\n      continue;\n    } else if (input.type === 'password' && input.value.length < 5) {\n      invalid(input);\n      addErrorDescription(input, 'Пароль должен содержать как минимум 5 символов');\n      continue;\n    } else if (input.type === 'password' && input.value !== userPassword) {\n      invalid(input);\n      addErrorDescription(input, 'Пароль неверен');\n      continue;\n    } else if (input.type === 'email' && input.value !== userEmail) {\n      invalid(input);\n      addErrorDescription(input, 'Email неверен');\n      continue;\n    }\n  }\n\n  if (email.value == userEmail && password.value == userPassword && checkbox.checked) window.location.href = './catalog.html';\n  e.preventDefault();\n});\n\nfunction invalid(input) {\n  if (input.type === 'checkbox') {\n    input.nextElementSibling.classList.add('checkbox__label--err');\n  } else {\n    input.style.borderColor = '#CB2424';\n    input.previousElementSibling.style.color = '#CB2424';\n  }\n}\n\nfunction errReset(input) {\n  var errDesc = input.parentElement.querySelector('.error-description');\n  if (errDesc !== null) errDesc.remove();\n\n  if (input.type === 'checkbox') {\n    input.nextElementSibling.classList.remove('checkbox__label--err');\n  } else {\n    input.style.borderColor = '#787878';\n    input.previousElementSibling.style.color = '#787878';\n  }\n}\n\nfunction addErrorDescription(input, desc) {\n  var err = document.createElement('p');\n  err.classList.add('error-description');\n  err.innerText = desc;\n  input.parentElement.appendChild(err);\n}\n\nfunction validateEmail(email) {\n  var re = /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n  return re.test(String(email).toLowerCase());\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBSixHQUFnQkgsSUFBaEI7QUFDQXZCLEVBQUFBLEtBQUssQ0FBQ3FCLGFBQU4sQ0FBb0JNLFdBQXBCLENBQWdDSCxHQUFoQztBQUNIOztBQUVELFNBQVNqQixhQUFULENBQXVCcEIsS0FBdkIsRUFBOEI7QUFDMUIsTUFBTXlDLEVBQUUsR0FBRyx1SkFBWDtBQUNBLFNBQU9BLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRQyxNQUFNLENBQUMzQyxLQUFELENBQU4sQ0FBYzRDLFdBQWQsRUFBUixDQUFQO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdub3JtYWxpemUuY3NzJ1xyXG5pbXBvcnQgJy4vc2Nzcy9zdHlsZS5zY3NzJ1xyXG5cclxuY29uc3QgZW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiZW1haWxcIl0nKTtcclxuY29uc3QgcGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0nKTtcclxuY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKTtcclxuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF1dGhvcml6YXRpb25fX2J1dHRvbicpO1xyXG5cclxuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2VtYWlsJywgJ2thbWFsb3ZfYWxiZXJ0QG1haWwucnUnKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwYXNzd29yZCcsICcxMjM0NScpO1xyXG4gICAgY29uc3QgdXNlclBhc3N3b3JkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Bhc3N3b3JkJyk7XHJcbiAgICBjb25zdCB1c2VyRW1haWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZW1haWwnKTtcclxuXHJcbiAgICBmb3IgKGxldCBpbnB1dCBvZiBbZW1haWwsIHBhc3N3b3JkLCBjaGVja2JveF0pIHtcclxuICAgICAgICBlcnJSZXNldChpbnB1dCk7XHJcbiAgICAgICAgaWYgKGlucHV0LnZhbHVlID09PSAnJyB8fCAoaW5wdXQudHlwZSA9PT0gJ2NoZWNrYm94JyAmJiAhaW5wdXQuY2hlY2tlZCkpIHtcclxuICAgICAgICAgICAgaW52YWxpZChpbnB1dCk7XHJcbiAgICAgICAgICAgIGFkZEVycm9yRGVzY3JpcHRpb24oaW5wdXQsICfQn9C+0LvQtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC00LvRjyDQt9Cw0L/QvtC70L3QtdC90LjRjycpO1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGlucHV0LnR5cGUgPT09ICdlbWFpbCcgJiYgIXZhbGlkYXRlRW1haWwoaW5wdXQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGludmFsaWQoaW5wdXQpO1xyXG4gICAgICAgICAgICBhZGRFcnJvckRlc2NyaXB0aW9uKGlucHV0LCAnRW1haWwg0L3QtdCy0LDQu9C40LTQvdGL0LknKTtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpbnB1dC50eXBlID09PSAncGFzc3dvcmQnICYmIGlucHV0LnZhbHVlLmxlbmd0aCA8IDUpIHtcclxuICAgICAgICAgICAgaW52YWxpZChpbnB1dCk7XHJcbiAgICAgICAgICAgIGFkZEVycm9yRGVzY3JpcHRpb24oaW5wdXQsICfQn9Cw0YDQvtC70Ywg0LTQvtC70LbQtdC9INGB0L7QtNC10YDQttCw0YLRjCDQutCw0Log0LzQuNC90LjQvNGD0LwgNSDRgdC40LzQstC+0LvQvtCyJyk7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaW5wdXQudHlwZSA9PT0gJ3Bhc3N3b3JkJyAmJiBpbnB1dC52YWx1ZSAhPT0gdXNlclBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgIGludmFsaWQoaW5wdXQpO1xyXG4gICAgICAgICAgICBhZGRFcnJvckRlc2NyaXB0aW9uKGlucHV0LCAn0J/QsNGA0L7Qu9GMINC90LXQstC10YDQtdC9Jyk7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaW5wdXQudHlwZSA9PT0gJ2VtYWlsJyAmJiBpbnB1dC52YWx1ZSAhPT0gdXNlckVtYWlsKSB7XHJcbiAgICAgICAgICAgIGludmFsaWQoaW5wdXQpO1xyXG4gICAgICAgICAgICBhZGRFcnJvckRlc2NyaXB0aW9uKGlucHV0LCAnRW1haWwg0L3QtdCy0LXRgNC10L0nKTtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChlbWFpbC52YWx1ZSA9PSB1c2VyRW1haWwgJiYgcGFzc3dvcmQudmFsdWUgPT0gdXNlclBhc3N3b3JkICYmIGNoZWNrYm94LmNoZWNrZWQpIHdpbmRvdy5sb2NhdGlvbi5ocmVmPScuL2NhdGFsb2cuaHRtbCc7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gaW52YWxpZChpbnB1dCkge1xyXG4gICAgaWYgKGlucHV0LnR5cGUgPT09ICdjaGVja2JveCcpIHtcclxuICAgICAgICBpbnB1dC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3hfX2xhYmVsLS1lcnInKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW5wdXQuc3R5bGUuYm9yZGVyQ29sb3IgPSAnI0NCMjQyNCc7XHJcbiAgICAgICAgaW5wdXQucHJldmlvdXNFbGVtZW50U2libGluZy5zdHlsZS5jb2xvciA9ICcjQ0IyNDI0JztcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZXJyUmVzZXQoaW5wdXQpIHtcclxuICAgIGxldCBlcnJEZXNjID0gaW5wdXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3ItZGVzY3JpcHRpb24nKTtcclxuICAgIGlmIChlcnJEZXNjICE9PSBudWxsKSBlcnJEZXNjLnJlbW92ZSgpO1xyXG5cclxuICAgIGlmIChpbnB1dC50eXBlID09PSAnY2hlY2tib3gnKSB7XHJcbiAgICAgICAgaW5wdXQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2NoZWNrYm94X19sYWJlbC0tZXJyJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlucHV0LnN0eWxlLmJvcmRlckNvbG9yID0gJyM3ODc4NzgnO1xyXG4gICAgICAgIGlucHV0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuc3R5bGUuY29sb3IgPSAnIzc4Nzg3OCc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZEVycm9yRGVzY3JpcHRpb24oaW5wdXQsIGRlc2MpIHtcclxuICAgIGxldCBlcnIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBlcnIuY2xhc3NMaXN0LmFkZCgnZXJyb3ItZGVzY3JpcHRpb24nKTtcclxuICAgIGVyci5pbm5lclRleHQgPSBkZXNjO1xyXG4gICAgaW5wdXQucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChlcnIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZUVtYWlsKGVtYWlsKSB7XHJcbiAgICBjb25zdCByZSA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcclxuICAgIHJldHVybiByZS50ZXN0KFN0cmluZyhlbWFpbCkudG9Mb3dlckNhc2UoKSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImVtYWlsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFzc3dvcmQiLCJjaGVja2JveCIsImJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInVzZXJQYXNzd29yZCIsImdldEl0ZW0iLCJ1c2VyRW1haWwiLCJpbnB1dCIsImVyclJlc2V0IiwidmFsdWUiLCJ0eXBlIiwiY2hlY2tlZCIsImludmFsaWQiLCJhZGRFcnJvckRlc2NyaXB0aW9uIiwidmFsaWRhdGVFbWFpbCIsImxlbmd0aCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInByZXZlbnREZWZhdWx0IiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiY2xhc3NMaXN0IiwiYWRkIiwic3R5bGUiLCJib3JkZXJDb2xvciIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJjb2xvciIsImVyckRlc2MiLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlIiwiZGVzYyIsImVyciIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lclRleHQiLCJhcHBlbmRDaGlsZCIsInJlIiwidGVzdCIsIlN0cmluZyIsInRvTG93ZXJDYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2QvLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzP2ZiNTciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/normalize.css/normalize.css\n");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9zdHlsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2QvLi9zcmMvc2Nzcy9zdHlsZS5zY3NzPzk4YWYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scss/style.scss\n");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;