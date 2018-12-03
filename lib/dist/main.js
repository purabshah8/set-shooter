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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const canvas = document.getElementById('canvas');\nconst ctx = canvas.getContext(\"2d\");\n\nconst cHeight = canvas.height;\nconst cWidth = canvas.width;\n\nconst gravity = 9.82;\nconst ground = cHeight - (cHeight/4);\n\n\n\n\nconst rimWidth = 48;\nconst rimHeight = 5;\n\n// let mousePos;\n// let mouseDown = false;\n// let mouseUp = false;\n\n// function getMousePos (canvas, event) {\n//     const rect = canvas.getBoundingClientRect();\n//     return {\n//         x: event.clientX,\n//         y: event.clientY,\n//     };\n// }\n\n// canvas.addEventListener('mousemove', e => {\n//     mousePos = getMousePos(canvas, e);\n//     mouseDown = true;\n//     mouseUp = false;\n// });\n\n// canvas.addEventListener('mousedown', e => {\n//     mousePos = getMousePos(canvas, e);\n//     mouseDown = true;\n//     mouseUp = false;\n// });\n\n// canvas.addEventListener('mousemove', e => {\n//     mousePos = getMousePos(canvas, e);\n//     mouseUp = true;\n//     mouseDown = false;\n// });\n\nconst drawPlayer = (x = 5, y = ground-100) => {\n    ctx.beginPath();\n    ctx.rect(x, y, 20, 100);\n    ctx.fillStyle = 'blue';\n    ctx.fill();\n    ctx.closePath();\n};\n\nconst drawScene = () => {\n    ctx.fillStyle=\"rgba(0,0, 200, 0.2)\";\n    ctx.fillRect(0,0, cWidth, ground);\n    ctx.beginPath();\n    ctx.lineTo(cWidth, ground);\n    ctx.strokeStyle=\"rgba(0, 100, 50, 0.6)\";\n    ctx.stroke();\n    ctx.fillStyle = \"rgba(0, 200, 100, 0.6)\";\n    ctx.fillRect(0, ground, cWidth, cHeight);\n};\n\nconst drawRim = () => {\n    ctx.beginPath();\n    ctx.rect(cWidth - 118, 120, rimWidth, rimHeight);\n    ctx.fillStyle = 'red';\n    ctx.fill();\n    ctx.closePath();\n};\n\nconst drawBackboard = () => {\n    ctx.beginPath();\n    ctx.rect(cWidth - 70, 60, 5, 80);\n    ctx.fillStyle = 'white';\n    ctx.fill();\n    ctx.closePath();\n};\n\nconst drawBasketball = (basketball, x = 10, y = ground-120) => {\n    ctx.drawImage(basketball, x, y);\n};\n\nconst basketball = new Image();\nbasketball.src = './assets/images/ball.png';\n\nconst draw = () => {\n    ctx.clearRect(0,0, canvas.width, canvas.height);\n    drawScene();\n    drawPlayer();\n    drawBackboard();\n    drawRim();\n    drawBasketball(basketball);\n};\nlet startTime;\nlet endTime;\nlet elapsed;\nconst keydownHandler = e => {\n    e.preventDefault();\n    if (e.keyCode === 32) {\n        startTime = e.timeStamp; \n    }\n};\n\nconst keyupHandler = e => {\n    e.preventDefault();\n    if (e.keyCode === 32) {\n        elapsed = (e.timeStamp - startTime)/1000;\n        console.log(startTime, e.timeStamp, elapsed);\n    }\n    if (e.keyCode === 37) {\n        dx = -1;\n    }\n    if (e.keyCode === 39) {\n        dx = 1;\n    }\n    if (e.keyCode === 38) {\n        dy = -1;\n    }\n    if (e.keyCode === 40) {\n        dy = 1;\n    }\n};\n\n\ndocument.addEventListener('keydown', keydownHandler);\ndocument.addEventListener('keyup', keyupHandler);\n\nsetInterval(draw, 10);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });