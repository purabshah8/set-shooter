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

/***/ "./src/basketball.js":
/*!***************************!*\
  !*** ./src/basketball.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Basketball; });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\nclass Basketball {\n    constructor() {\n        this.mass = 0.625;\n        this.image = new Image();\n        this.image.src = './assets/images/ball.png';\n    }\n\n    draw(ctx, x, y) {\n        if (x && y)\n            this.setPosition(x,y);\n        ctx.drawImage(this.image, this.position.x, this.position.y);\n    }\n    \n    throw(time, angle) {\n        // const { x, y } = this.position;\n        const initialVelocity = time*20;\n        // debugger\n        return {\n            vX: initialVelocity * Math.cos(angle * Math.PI/180),\n            vY: initialVelocity * Math.sin(angle * Math.PI/180)\n        };\n        // const initialVelocity = Math.sqrt( (x*x*gravity) / (x*Math.sin(2*angle) - (2*y * Math.cos(angle) * Math.cos(angle)) ) );\n        // const force = (time * 10);\n        // const forceX = force * Math.cos(angle);\n        // const forceY = force * Math.sin(angle);\n        // const accX = 0;\n        // const accY = -gravity;\n        // const xDelta = initialVelocity * Math.cos(angle);\n        // const yDelta = initialVelocity * Math.sin(angle) - 0.5 * gravity * time;\n        // return {xDelta, yDelta};\n    }\n    \n    setPosition(x, y) {\n        if (x < 0)\n            x = 0;\n        if (x > _index_js__WEBPACK_IMPORTED_MODULE_0__[\"cWidth\"]-24)\n            x = _index_js__WEBPACK_IMPORTED_MODULE_0__[\"cWidth\"]-24;\n        if (y > _index_js__WEBPACK_IMPORTED_MODULE_0__[\"ground\"])\n            y = _index_js__WEBPACK_IMPORTED_MODULE_0__[\"ground\"];\n        this.position = { x, y };\n    }\n}\n\n//# sourceURL=webpack:///./src/basketball.js?");

/***/ }),

/***/ "./src/hoop.js":
/*!*********************!*\
  !*** ./src/hoop.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Hoop; });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\nclass Hoop {\n    constructor() {}\n\n    draw(ctx) {\n        this.drawPole(ctx);\n        this.drawBackboard(ctx);\n        this.drawNet(ctx);\n        this.drawRim(ctx);\n    }\n\n    drawRim(ctx) {\n        ctx.beginPath();\n        ctx.rect(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"cWidth\"] - 120, 120, 52, 5);\n        ctx.fillStyle = 'red';\n        ctx.fill();\n        ctx.closePath();\n    }\n\n    drawNet(ctx) {\n        ctx.beginPath();\n        ctx.moveTo(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"cWidth\"]-118, 125);\n        ctx.lineTo(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"cWidth\"]-106, 165);\n        ctx.strokeStyle = 'white';\n        ctx.stroke();\n        ctx.moveTo(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"cWidth\"]-112, 125);\n        ctx.lineTo(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"cWidth\"]-100, 165);\n        ctx.strokeStyle = 'white';\n        ctx.stroke();\n        ctx.moveTo(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"cWidth\"]-106, 125);\n        ctx.lineTo(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"cWidth\"]-94, 165);\n        ctx.strokeStyle = 'white';\n        ctx.stroke();\n        ctx.moveTo(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"cWidth\"]-100, 125);\n        ctx.lineTo(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"cWidth\"]-88, 165);\n        ctx.strokeStyle = 'white';\n        ctx.moveTo(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"cWidth\"]-94, 125);\n        ctx.lineTo(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"cWidth\"]-82, 160);\n        ctx.strokeStyle = 'white';\n        ctx.stroke();\n        ctx.moveTo(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"cWidth\"]-88, 125);\n        ctx.lineTo(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"cWidth\"]-78, 152);\n        ctx.strokeStyle = 'white';\n        ctx.stroke();\n        ctx.moveTo(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"cWidth\"]-82, 125);\n        ctx.lineTo(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"cWidth\"]-74, 144);\n        ctx.strokeStyle = 'white';\n        ctx.stroke();\n        ctx.moveTo(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"cWidth\"]-76, 125);\n        ctx.lineTo(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"cWidth\"]-72, 134);\n        ctx.strokeStyle = 'white';\n        ctx.stroke();\n    \n        ctx.moveTo(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"cWidth\"]-70, 125);\n        ctx.lineTo(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"cWidth\"]-82, 165);\n        ctx.strokeStyle = 'white';\n        ctx.stroke();\n        ctx.moveTo(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"cWidth\"]-76, 125);\n        ctx.lineTo(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"cWidth\"]-88, 165);\n        ctx.strokeStyle = 'white';\n        ctx.stroke();\n        ctx.moveTo(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"cWidth\"]-82, 125);\n        ctx.lineTo(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"cWidth\"]-94, 165);\n        ctx.strokeStyle = 'white';\n        ctx.stroke();\n        ctx.moveTo(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"cWidth\"]-88, 125);\n        ctx.lineTo(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"cWidth\"]-100, 165);\n        ctx.strokeStyle = 'white';\n        ctx.stroke();\n        ctx.moveTo(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"cWidth\"]-94, 125);\n        ctx.lineTo(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"cWidth\"]-106, 165);\n        ctx.strokeStyle = 'white';\n        ctx.stroke();\n        ctx.moveTo(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"cWidth\"]-100, 125);\n        ctx.lineTo(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"cWidth\"]-110, 160);\n        ctx.strokeStyle = 'white';\n        ctx.stroke();\n        ctx.moveTo(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"cWidth\"]-106, 125);\n        ctx.lineTo(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"cWidth\"]-112, 148);\n        ctx.strokeStyle = 'white';\n        ctx.stroke();\n        ctx.moveTo(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"cWidth\"]-112, 125);\n        ctx.lineTo(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"cWidth\"]-116, 138);\n        ctx.strokeStyle = 'white';\n        ctx.stroke();\n    \n        ctx.closePath();\n    }\n\n    drawBackboard(ctx) {\n        ctx.beginPath();\n        ctx.rect(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"cWidth\"] - 68, 60, 5, 80);\n        ctx.fillStyle = 'white';\n        ctx.fill();\n        ctx.closePath();\n    }\n\n    drawPole(ctx) {\n        ctx.beginPath();\n        ctx.rect(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"cWidth\"]-65, 100, 40, 8);\n        ctx.rect(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"cWidth\"] - 25, 100, 8, 350);\n        ctx.fillStyle = 'gray';\n        ctx.fill();\n        ctx.closePath();\n    }\n}\n\n//# sourceURL=webpack:///./src/hoop.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: canvas, cHeight, cWidth, gravity, ground */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"canvas\", function() { return canvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cHeight\", function() { return cHeight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cWidth\", function() { return cWidth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gravity\", function() { return gravity; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ground\", function() { return ground; });\n/* harmony import */ var _basketball_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basketball.js */ \"./src/basketball.js\");\n/* harmony import */ var _hoop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hoop.js */ \"./src/hoop.js\");\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n\n\n\n\nconst canvas = document.getElementById('canvas');\nconst ctx = canvas.getContext(\"2d\");\n\nconst cHeight = canvas.height;\nconst cWidth = canvas.width;\nconst gravity = 9.81;\nconst ground = cHeight - (cHeight/4);\n\nconst drawScene = () => {\n    ctx.fillStyle=\"rgba(0,0, 200, 0.2)\";\n    ctx.fillRect(0,0, cWidth, ground);\n    ctx.beginPath();\n    ctx.lineTo(cWidth, ground);\n    ctx.strokeStyle=\"rgba(0, 100, 50, 0.6)\";\n    ctx.stroke();\n    ctx.fillStyle = \"rgba(0, 200, 100, 0.6)\";\n    ctx.fillRect(0, ground, cWidth, cHeight);\n};\n\nconst playerHeight = 175;\nlet playerX = 8;\nlet playerY = ground-playerHeight;\nlet basketballX = playerX + 5;\nlet basketballY = playerY - 20;\nlet isThrown = false;\nlet initialVelocites;\nlet t;\n\nconst basketball = new _basketball_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconst hoop = new _hoop_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nconst player = new _player_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](playerHeight);\nconst draw = () => {\n    ctx.clearRect(0,0, cWidth, cHeight);\n    drawScene();\n    player.draw(ctx, playerX, playerY);\n    hoop.draw(ctx, cWidth);\n    if (isThrown) {\n        t += 10;\n       [basketballX, basketballY] = moveBall(initialVelocites, t);\n    }\n    basketball.draw(ctx, basketballX, basketballY);\n};\n\nconst moveBall = ({vX, vY}, time) => {\n    if (basketballX > cWidth || basketballY > cHeight) {\n        basketballX = playerX + 5;\n        basketballY = playerY - 20;\n        isThrown = false;\n        t = null;\n        return [basketballX, basketballY];\n    }\n    basketballX += vX;\n    basketballY -= vY - (gravity * time/1000);\n    return [basketballX, basketballY];\n};\n\n\nlet startTime;\nlet elapsed;\nconst keydownHandler = e => {\n    e.preventDefault();\n    if (e.keyCode === 32) {\n        startTime = startTime || Date.now();  \n    }\n    if (e.keyCode === 37) {\n        playerX += -8;\n        basketballX += -8;\n    }\n    if (e.keyCode === 39) {\n        playerX += 8;\n        basketballX += 8;\n    }\n};\n\nconst keyupHandler = e => {\n    e.preventDefault();\n    if (e.keyCode === 32) {\n        if (!isThrown) {\n            elapsed = (Date.now() - startTime)/1000;\n            startTime = null;\n            console.log(elapsed);\n            initialVelocites = basketball.throw(elapsed, 45);\n            isThrown = true;\n            t = 0;\n        }\n    }\n    if (e.keyCode === 37) {\n        playerX += -8;\n        basketballX += -8;\n    }\n    if (e.keyCode === 39) {\n        playerX += 8;\n        basketballX += 8;\n    }\n    if (e.keyCode === 38) {\n        dy = -1;\n    }\n    if (e.keyCode === 40) {\n        dy = 1;\n    }\n};\n\n\n\ndocument.addEventListener('keydown', keydownHandler);\ndocument.addEventListener('keyup', keyupHandler);\n\nsetInterval(draw, 10);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\nclass Player {\n    constructor(height) {\n        this.height = height;\n    }\n\n    draw(ctx, x=5, y=_index_js__WEBPACK_IMPORTED_MODULE_0__[\"ground\"]-this.height) {\n        if (x < 0)\n            x = 0;\n        if (x > _index_js__WEBPACK_IMPORTED_MODULE_0__[\"cWidth\"]-20)\n            x = _index_js__WEBPACK_IMPORTED_MODULE_0__[\"cWidth\"]-20;\n        ctx.beginPath();\n        ctx.rect(x, y, 20, this.height);\n        ctx.fillStyle = 'blue';\n        ctx.fill();\n        ctx.closePath();\n    }\n\n}\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ })

/******/ });