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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Basketball; });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\nclass Basketball {\n    constructor() {\n        this.mass = 0.625;\n        this.image = new Image();\n        this.image.src = './assets/images/ball.png';\n        this.diameter = 36;\n    }\n\n    draw(ctx, x, y) {\n        if (x && y)\n            this.setPosition(x,y);\n        // ctx.beginPath();\n        // ctx.arc(this.position.x, this.position.y, 12 , 2*Math.PI, false);\n        // ctx.clip();\n        // ctx.stroke();\n        // ctx.closePath();\n        ctx.drawImage(this.image, this.position.x, this.position.y, 36, 36);\n        // ctx.restore();\n    }\n    \n    getInitialVelocity(time, angle) {\n        const initialVelocity = time*20;\n        return {\n            vX: initialVelocity * Math.cos(angle * Math.PI/180),\n            vY: initialVelocity * Math.sin(angle * Math.PI/180)\n        };\n    }\n    \n    setPosition(x, y) {\n        if (x < 0)\n            x = 0;\n        if (x > _index_js__WEBPACK_IMPORTED_MODULE_0__[\"cWidth\"]-24)\n            x = _index_js__WEBPACK_IMPORTED_MODULE_0__[\"cWidth\"]-24;\n        if (y > _index_js__WEBPACK_IMPORTED_MODULE_0__[\"ground\"])\n            y = _index_js__WEBPACK_IMPORTED_MODULE_0__[\"ground\"];\n        this.position = { x, y };\n    }\n}\n\n//# sourceURL=webpack:///./src/basketball.js?");

/***/ }),

/***/ "./src/hoop.js":
/*!*********************!*\
  !*** ./src/hoop.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Hoop; });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\nclass Hoop {\n    constructor() {\n        this.rim = {\n            x: _index_js__WEBPACK_IMPORTED_MODULE_0__[\"cWidth\"] - 136,\n            y: _index_js__WEBPACK_IMPORTED_MODULE_0__[\"cHeight\"] - 610,\n            width: 72,\n            height: 5,\n        };\n\n        this.backboard = {\n            x: _index_js__WEBPACK_IMPORTED_MODULE_0__[\"cWidth\"] - 64,\n            y: _index_js__WEBPACK_IMPORTED_MODULE_0__[\"cHeight\"]-690,\n            width: 5,\n            height: 120,\n        };\n    }\n\n    draw(ctx) {\n        this.drawPole(ctx);\n        this.drawBackboard(ctx);\n        this.drawNet(ctx);\n        this.drawRim(ctx);\n    }\n\n    drawRim(ctx) {\n        const { x, y, width, height } = this.rim;\n        ctx.beginPath();\n        ctx.rect(x, y, width, height);\n        ctx.fillStyle = 'red';\n        ctx.fill();\n        ctx.closePath();\n    }\n\n    drawNet(ctx) {\n        const netLength = 64;\n        const { x, y, width } = this.rim;\n        const startX = x + 2;\n        const endX = x + width - 2;\n        const startY = y + 2;\n        const endY = y+netLength;\n        ctx.beginPath();\n        ctx.strokeStyle = 'white';\n        \n        ctx.moveTo(startX, startY);\n        ctx.lineTo(x+16, endY);\n        ctx.stroke();\n        ctx.moveTo(startX+8, startY);\n        ctx.lineTo(x+24, endY);\n        ctx.stroke();\n        ctx.moveTo(startX+16, startY);\n        ctx.lineTo(x+32, endY);\n        ctx.stroke();\n        ctx.moveTo(startX+24, startY);\n        ctx.lineTo(x+40, endY);\n        ctx.stroke();\n        ctx.moveTo(startX+32, startY);\n        ctx.lineTo(x+48, endY);\n        ctx.stroke();\n        ctx.moveTo(startX+40, startY);\n        ctx.lineTo(x+56, endY);\n        ctx.stroke();\n\n        ctx.moveTo(startX+48, startY);\n        ctx.lineTo(x+60, endY-16);\n        ctx.stroke();\n        ctx.moveTo(startX+56, startY);\n        ctx.lineTo(x+64, endY-36);\n        ctx.stroke();\n        // ctx.moveTo(startX+62, startY);\n        // ctx.lineTo(x+68, endY-52);\n        // ctx.stroke();\n        \n        // ctx.moveTo(cWidth-100, startY);\n        // ctx.lineTo(cWidth-110, y+58);\n        // ctx.stroke();\n        ctx.moveTo(endX-56, startY);\n        ctx.lineTo(x+width-64, endY-36);\n        ctx.stroke();\n        ctx.moveTo(endX-48, startY);\n        ctx.lineTo(x+width-60, endY-16);\n        ctx.stroke();\n\n        ctx.moveTo(endX-40, startY);\n        ctx.lineTo(x+width-56, endY);\n        ctx.stroke();\n        ctx.moveTo(endX-32, startY);\n        ctx.lineTo(x+width-48, endY);\n        ctx.stroke();\n        ctx.moveTo(endX-24, startY);\n        ctx.lineTo(x+width-40, endY);\n        ctx.stroke();\n        ctx.moveTo(endX-16, startY);\n        ctx.lineTo(x+width-32, endY);\n        ctx.stroke();\n        ctx.moveTo(endX-8, startY);\n        ctx.lineTo(x+width-24, endY);\n        ctx.stroke();\n        ctx.moveTo(endX, startY);\n        ctx.lineTo(x+width-16, endY);\n        ctx.stroke();\n        \n    \n        ctx.closePath();\n    }\n\n    drawBackboard(ctx) {\n        const { x, y, width, height } = this.backboard;\n        ctx.beginPath();\n        ctx.rect(x, y, width, height);\n        ctx.fillStyle = 'white';\n        ctx.fill();\n        ctx.closePath();\n    }\n\n    drawPole(ctx) {\n        const poleY = _index_js__WEBPACK_IMPORTED_MODULE_0__[\"cHeight\"]-600;\n        ctx.beginPath();\n        ctx.rect(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"cWidth\"]-60, poleY, 40, 8);\n        ctx.rect(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"cWidth\"] - 25, poleY, 8, _index_js__WEBPACK_IMPORTED_MODULE_0__[\"ground\"]-120);\n        ctx.fillStyle = 'gray';\n        ctx.fill();\n        ctx.closePath();\n    }\n}\n\n//# sourceURL=webpack:///./src/hoop.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: canvas, cHeight, cWidth, gravity, ground */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"canvas\", function() { return canvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cHeight\", function() { return cHeight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cWidth\", function() { return cWidth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gravity\", function() { return gravity; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ground\", function() { return ground; });\n/* harmony import */ var _basketball_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basketball.js */ \"./src/basketball.js\");\n/* harmony import */ var _hoop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hoop.js */ \"./src/hoop.js\");\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n\n\n\n\nconst canvas = document.getElementById('canvas');\nconst ctx = canvas.getContext(\"2d\");\n\nconst cHeight = canvas.height;\nconst cWidth = canvas.width;\nconst gravity = 9.81;\nconst ground = cHeight - (cHeight/4);\n\nconst drawScene = () => {\n    ctx.fillStyle=\"rgba(0,0, 200, 0.2)\";\n    ctx.fillRect(0,0, cWidth, ground);\n    ctx.beginPath();\n    ctx.lineTo(cWidth, ground);\n    ctx.strokeStyle=\"rgba(0, 100, 50, 0.6)\"; \n    ctx.stroke();\n    ctx.fillStyle = \"rgba(0, 200, 100, 0.6)\";\n    ctx.fillRect(0, ground, cWidth, cHeight);\n};\n\nconst playerHeight = 200;\nlet playerX = cWidth-880;\nlet playerY = ground-playerHeight;\nlet basketballX = playerX + 100;\nlet basketballY = playerY - 4;\nlet isThrown = false;\nlet collided = false;\nlet initialVelocites;\nlet vX, vY, t;\nlet angle = 45;\n\nconst basketball = new _basketball_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconst hoop = new _hoop_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nconst player = new _player_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](playerHeight);\n\nconst drawArrow = (theta) => {\n    const startX = basketballX+36;\n    const startY = basketballY-8;\n    ctx.beginPath();\n    ctx.moveTo(startX, startY);\n    const endX = startX + 30*Math.cos(theta * Math.PI / 180);\n    const endY = startY - 30*Math.sin(theta * Math.PI / 180);\n    ctx.lineTo(endX, endY);\n    ctx.moveTo(endX, endY);\n    ctx.stroke();\n    ctx.closePath();\n};\n\nconst draw = () => {\n    ctx.clearRect(0,0, cWidth, cHeight);\n    drawScene();\n    player.draw(ctx, playerX, playerY);\n    hoop.draw(ctx, cWidth);\n    if (isThrown) {\n        t += 10;\n\n        collided = collisionDetection(basketball, hoop.rim, basketballY) \n          || collisionDetection(basketball, hoop.backboard);\n        if (collided) {\n            vX = -vX;\n            collided = false;\n        }\n       [basketballX, basketballY] = moveBall(vX, vY, t);\n    } else {\n        drawArrow(angle);\n    } \n    basketball.draw(ctx, basketballX, basketballY);\n};\n\nconst moveBall = (x, y, time) => {\n    if (basketballX > cWidth || basketballY > cHeight || basketballX < 0) {\n        basketballX =  playerX + 100;\n        basketballY = playerY - 4;\n        isThrown = false;\n        collided = false;\n        t = null;\n        return [basketballX, basketballY];\n    }\n    basketballX += x;\n    basketballY -= y - (gravity * time/1000);\n    return [basketballX, basketballY];\n};\n\nconst collisionDetection = (ball, obstacle, prevBallY) => {\n    const ballX = ball.position.x;\n    const ballY = ball.position.y;\n    const ballEndX = ballX + ball.diameter;\n    const ballEndY = ballY + ball.diameter;\n    const { x, y, width, height } = obstacle;\n    const endX = x + width;\n    const endY = y + height;\n    if ( (ballEndX > x && ballEndY > y && ballY < endY)  ) {\n        if (prevBallY && (prevBallY+ball.diameter) < y) {\n            console.log([y,prevBallY]);\n            return false;\n        }\n        // console.log('ballEnd :',[ballEndX, ballEndY], '\\nobstacle: ',  [x,y]);\n        return true; \n    }\n    return false; \n};\n\n\nlet startTime;\nlet elapsed;\nconst keydownHandler = e => {\n    e.preventDefault();\n    if (e.keyCode === 32) {\n        startTime = startTime || Date.now();  \n    }\n    if (e.keyCode === 37) {\n        playerX += -8;\n        basketballX += -8;\n    }\n    if (e.keyCode === 39) {\n        playerX += 8;\n        basketballX += 8;\n    }\n};\n\nconst keyupHandler = e => {\n    e.preventDefault();\n    if (e.keyCode === 32) {\n        if (!isThrown) {\n            elapsed = (Date.now() - startTime)/1000;\n            startTime = null;\n               initialVelocites = basketball.getInitialVelocity(elapsed, angle);\n               vX = initialVelocites.vX;\n               vY = initialVelocites.vY;\n            isThrown = true;\n            t = 0;\n        }\n    }\n    if (e.keyCode === 37) {\n        playerX += -8;\n        basketballX += -8;\n    }\n    if (e.keyCode === 39) {\n        playerX += 8;\n        basketballX += 8;\n    }\n    if (e.keyCode === 38) {\n        angle += 4;\n    }\n    if (e.keyCode === 40) {\n        angle -= 4;\n    }\n};\n\n\ndocument.addEventListener('keydown', keydownHandler);\ndocument.addEventListener('keyup', keyupHandler);\n\nsetInterval(draw, 10);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\nclass Player {\n    constructor(height) {\n        this.height = height;\n        this.shotAngle = 45;\n        this.image = new Image();\n        this.image.src = './assets/images/player-2.svg';\n    }\n\n    draw(ctx, x, y) {\n        const imgWidth = 156;\n        const imgHeight = 324;\n        // ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);\n        ctx.drawImage(this.image, 380, 180, imgWidth, imgHeight, x, y, imgWidth-30, imgHeight);\n    }\n\n}\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ })

/******/ });