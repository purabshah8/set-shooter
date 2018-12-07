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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Basketball; });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\nclass Basketball {\n    constructor(ctx, x, y, rotationAngle) {\n        this.ctx = ctx;\n        this.mass = 0.625;\n        this.image = new Image();\n        this.image.src = './assets/images/ball.png';\n        this.diameter = 36;\n        this.x = x;\n        this.y = y;\n        this.rotationAngle = rotationAngle;\n    }\n\n    draw() {\n        if (this.rotationAngle !== 0) {\n            this.ctx.save();\n            this.ctx.translate(this.x+this.diameter/2, this.y+this.diameter/2);\n            this.ctx.rotate(this.rotationAngle * Math.PI/180);\n            this.ctx.drawImage(this.image, 0-this.diameter/2, 0-this.diameter/2, 36, 36);\n            this.ctx.restore();\n        } else\n            this.ctx.drawImage(this.image, this.x, this.y, 36, 36);\n    }\n    \n    getInitialVelocity(time, angle) {\n        const initialVelocity = time*20;\n        return {\n            vX: initialVelocity * Math.cos(angle * Math.PI/180),\n            vY: initialVelocity * Math.sin(angle * Math.PI/180)\n        };\n    }\n    \n    setPosition(x, y) {\n        this.x = x;\n        this.y = y;\n    }\n\n    move(vX, vY, time) {\n        this.x += vX;\n        this.y -= vY - (_index_js__WEBPACK_IMPORTED_MODULE_0__[\"gravity\"] * time/1000);\n        return [this.x, this.y];\n    }\n}\n\n//# sourceURL=webpack:///./src/basketball.js?");

/***/ }),

/***/ "./src/hoop.js":
/*!*********************!*\
  !*** ./src/hoop.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Hoop; });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\nclass Hoop {\n    constructor(ctx) {\n        this.ctx = ctx;\n        this.rim = {\n            x: _index_js__WEBPACK_IMPORTED_MODULE_0__[\"cWidth\"] - 144,\n            y: _index_js__WEBPACK_IMPORTED_MODULE_0__[\"cHeight\"] - 580,\n            width: 80,\n            height: 5,\n        };\n\n        this.backboard = {\n            x: _index_js__WEBPACK_IMPORTED_MODULE_0__[\"cWidth\"] - 64,\n            y: _index_js__WEBPACK_IMPORTED_MODULE_0__[\"cHeight\"]-680,\n            width: 8,\n            height: 140,\n        };\n    }\n\n    draw() {\n        this.drawPole();\n        this.drawBackboard();\n        this.drawNet();\n        this.drawRim();\n    }\n\n    drawRim() {\n        const { x, y, width, height } = this.rim;\n        this.ctx.beginPath();\n        this.ctx.rect(x, y, width, height);\n        this.ctx.fillStyle = 'red';\n        this.ctx.fill();\n        this.ctx.closePath();\n    }\n\n    drawNet() {\n        const netLength = 64;\n        const { x, y, width } = this.rim;\n        const startX = x + 2;\n        const endX = x + width - 2;\n        const startY = y + 2;\n        const endY = y+netLength;\n        this.ctx.beginPath();\n        this.ctx.strokeStyle = 'white';\n        this.ctx.lineWidth = '1';\n\n        this.ctx.moveTo(startX, startY);\n        this.ctx.lineTo(x+16, endY);\n        this.ctx.stroke();\n        this.ctx.moveTo(startX+8, startY);\n        this.ctx.lineTo(x+24, endY);\n        this.ctx.stroke();\n        this.ctx.moveTo(startX+16, startY);\n        this.ctx.lineTo(x+32, endY);\n        this.ctx.stroke();\n        this.ctx.moveTo(startX+24, startY);\n        this.ctx.lineTo(x+40, endY);\n        this.ctx.stroke();\n        this.ctx.moveTo(startX+32, startY);\n        this.ctx.lineTo(x+48, endY);\n        this.ctx.stroke();\n        this.ctx.moveTo(startX+40, startY);\n        this.ctx.lineTo(x+56, endY);\n        this.ctx.stroke();\n        this.ctx.moveTo(startX+48, startY);\n        this.ctx.lineTo(x+64, endY);\n        this.ctx.stroke();\n\n        this.ctx.moveTo(startX+56, startY);\n        this.ctx.lineTo(x+68, endY-16);\n        this.ctx.stroke();\n        this.ctx.moveTo(startX+64, startY);\n        this.ctx.lineTo(x+72, endY-36);\n        this.ctx.stroke();\n        // this.ctx.moveTo(startX+62, startY);\n        // this.ctx.lineTo(x+68, endY-52);\n        // this.ctx.stroke();\n        \n        // this.ctx.moveTo(cWidth-100, startY);\n        // this.ctx.lineTo(cWidth-110, y+58);\n        // this.ctx.stroke();\n        this.ctx.moveTo(endX-64, startY);\n        this.ctx.lineTo(x+width-72, endY-36);\n        this.ctx.stroke();\n        this.ctx.moveTo(endX-56, startY);\n        this.ctx.lineTo(x+width-68, endY-16);\n        this.ctx.stroke();\n        \n        this.ctx.moveTo(endX-48, startY);\n        this.ctx.lineTo(x+width-64, endY);\n        this.ctx.stroke();\n        this.ctx.moveTo(endX-40, startY);\n        this.ctx.lineTo(x+width-56, endY);\n        this.ctx.stroke();\n        this.ctx.moveTo(endX-32, startY);\n        this.ctx.lineTo(x+width-48, endY);\n        this.ctx.stroke();\n        this.ctx.moveTo(endX-24, startY);\n        this.ctx.lineTo(x+width-40, endY);\n        this.ctx.stroke();\n        this.ctx.moveTo(endX-16, startY);\n        this.ctx.lineTo(x+width-32, endY);\n        this.ctx.stroke();\n        this.ctx.moveTo(endX-8, startY);\n        this.ctx.lineTo(x+width-24, endY);\n        this.ctx.stroke();\n        this.ctx.moveTo(endX, startY);\n        this.ctx.lineTo(x+width-16, endY);\n        this.ctx.stroke();\n        \n    \n        this.ctx.closePath();\n    }\n\n    drawBackboard() {\n        const { x, y, width, height } = this.backboard;\n        this.ctx.beginPath();\n        this.ctx.rect(x, y, width, height);\n        this.ctx.fillStyle = 'white';\n        this.ctx.fill();\n        this.ctx.closePath();\n    }\n\n    drawPole() {\n        const poleY = _index_js__WEBPACK_IMPORTED_MODULE_0__[\"cHeight\"]-600;\n        this.ctx.beginPath();\n        this.ctx.rect(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"cWidth\"]-60, poleY, 40, 12);\n        this.ctx.rect(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"cWidth\"] - 25, poleY, 12, _index_js__WEBPACK_IMPORTED_MODULE_0__[\"ground\"]-120);\n        this.ctx.fillStyle = 'gray';\n        this.ctx.fill();\n        this.ctx.closePath();\n    }\n}\n\n//# sourceURL=webpack:///./src/hoop.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: canvas, cHeight, cWidth, gravity, ground */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"canvas\", function() { return canvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cHeight\", function() { return cHeight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cWidth\", function() { return cWidth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gravity\", function() { return gravity; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ground\", function() { return ground; });\n/* harmony import */ var _basketball_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basketball.js */ \"./src/basketball.js\");\n/* harmony import */ var _hoop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hoop.js */ \"./src/hoop.js\");\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n\n\n\n\nconst canvas = document.getElementById('canvas');\nconst ctx = canvas.getContext(\"2d\");\n\nwindow.requestAnimationFrame = window.requestAnimationFrame || \nwindow.webkitRequestAnimationFrame || \nwindow.mozRequestAnimationFrame ||\nwindow.oRequestAnimationFrame || \nwindow.msRequestAnimationFrame;\n\nconst cHeight = canvas.height;\nconst cWidth = canvas.width;\nconst gravity = 9.81;\nconst ground = cHeight - (cHeight/4);\n\nfunction init() {\n}\n\nconst drawScene = () => {\n    ctx.fillStyle=\"rgba(0,0, 200, 0.2)\";\n    ctx.fillRect(0,0, cWidth, ground);\n    ctx.beginPath();\n    ctx.lineTo(cWidth, ground);\n    ctx.strokeStyle=\"rgba(0, 100, 50, 0.6)\"; \n    ctx.stroke();\n    ctx.fillStyle = \"rgba(0, 200, 100, 0.6)\";\n    ctx.fillRect(0, ground, cWidth, cHeight);\n};\n\nlet playerX = cWidth-880;\nlet playerY = ground-200;\nlet basketballX = playerX + 100;\nlet basketballY = playerY - 4;\nlet prevBallY;\nlet isThrown = false;\nlet collided = false;\nlet initialVelocites;\nlet vX, vY, t;\nlet angle = 45;\nlet score = 0;\nlet scored = false;\nlet rotationAngle = 0;\n\n\nconst basketball = new _basketball_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, basketballX, basketballY, rotationAngle);\nconst hoop = new _hoop_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx);\nconst player = new _player_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](ctx, playerX, playerY);\nwindow.ctx = ctx;\nwindow.basketball = basketball;\n\nconst drawArrow = (theta) => {\n    const startX = basketball.x+36;\n    const startY = basketball.y-8;\n    ctx.beginPath();\n    ctx.moveTo(startX, startY);\n    const endX = startX + 50*Math.cos(theta * Math.PI / 180);\n    const endY = startY - 50*Math.sin(theta * Math.PI / 180);\n    ctx.lineTo(endX, endY);\n    ctx.moveTo(endX, endY);\n    ctx.strokeStyle = 'red';\n    ctx.lineWidth = '3';\n    ctx.stroke();\n    ctx.closePath();\n};\n\nconst drawScore = () => {\n    ctx.font = '48px Oswald';\n    ctx.fillStyle = 'white';\n    ctx.fillText(`Score: ${score}`,10, 50);\n};\n\nconst clear = () => {\n    ctx.clearRect(0,0, cWidth, cHeight);\n    drawScene();\n    hoop.draw();\n    drawScore();\n};\n\nconst draw = () => {\n    clear();\n    player.setPosition(playerX, playerY);\n    player.draw();\n    reset();\n    prevBallY = basketballY;\n    if (isThrown) {\n      handleThrownBall();  \n    } else {\n        drawArrow(angle);\n    }\n    basketball.setPosition(basketballX, basketballY);\n    basketball.draw();\n};\n\nconst handleThrownBall = () => {\n    t += 10;\n    rotationAngle -= Math.sqrt(vX * vX + vY * vY)/2;\n    if (collided) {\n        console.log(collided, [basketball.x, basketball.y]);\n        if (collided.type === 'vertical')\n            vX = -vX;\n        else \n            vY = -vY;\n        collided = false;\n    }\n    [basketballX, basketballY] = basketball.move(vX, vY, t);\n    collided = collisionDetection(basketball, hoop.backboard) \n    || collisionDetection(basketball, hoop.rim, prevBallY);\n};\n\nconst reset = () => {\n    if (basketball.x > cWidth || basketball.y > cHeight || \n        basketball.x < 0 || basketball.y > ground) {\n\n        basketballX =  player.x + 100;\n        basketballY = player.y - 4;\n        isThrown = false;\n        if (scored) {\n            score += 1;\n            scored = false;\n        }\n        collided = false;\n        t = null;\n        rotationAngle = 0;\n    }\n};\n\nconst collisionDetection = (ball, obstacle, prevY) => {\n    const ballX = ball.x + vX;\n    const ballY = ball.y + vY;\n    const ballEndX = ballX + ball.diameter;\n    const ballEndY = ballY + ball.diameter;\n    const { x, y, width, height } = obstacle;\n    const endX = x + width;\n    const endY = y + height;\n    if ( (ballY >= y && ballEndY <= endY) \n     && (ballEndX >= x || (ballX <= endX && ballEndX > endX) ) ) {\n        return { type: 'vertical'};\n    } else if ( (ballX > x && ballEndX < endX) \n     && (ballEndY >= y && ballY < endY || ballY <= endY && ballEndY > y) ) {\n        if (prevY && ballY > y && prevY < y) {\n            console.log(`rim: ${y}` ,`prevY: ${prevY}`, `ball: ${[ballX, ballY]}`);\n            scored = true;\n            debugger\n            return false;\n        }\n        return {type: 'horizontal'};\n    }\n    return false; \n};\n\nlet startTime;\nlet elapsed;\n\nconst keydownHandler = e => {\n    e.preventDefault();\n    if (e.keyCode === 32) {\n        startTime = startTime || Date.now();\n        if (isThrown)\n            startTime = null;  \n    }\n    if (e.keyCode === 37) {\n        playerX += -8;\n        basketballX += -8;\n    }\n    if (e.keyCode === 39) {\n        playerX += 8;\n        basketballX += 8;\n    }\n};\n\nconst keyupHandler = e => {\n    e.preventDefault();\n    if (e.keyCode === 32) {\n        if (!isThrown) {\n            elapsed = (Date.now() - startTime)/1000;\n            startTime = null;\n               initialVelocites = basketball.getInitialVelocity(elapsed, angle);\n               vX = initialVelocites.vX;\n               vY = initialVelocites.vY;\n            isThrown = true;\n            t = 0;\n        }\n    }\n    if (e.keyCode === 37) {\n        playerX += -8;\n        basketballX += -8;\n    }\n    if (e.keyCode === 39) {\n        playerX += 8;\n        basketballX += 8;\n    }\n    if (e.keyCode === 38) {\n        angle = Math.min(angle+5, 90);\n    }\n    if (e.keyCode === 40) {\n        angle = Math.max(angle-5, 0);\n    }\n};\n\n\ndocument.addEventListener('keydown', keydownHandler);\ndocument.addEventListener('keyup', keyupHandler);\n\nsetInterval(draw, 10);\n// window.requestAnimationFrame(\n//     () => basketball.draw(ctx, basketballX, basketballY, rotationAngle)\n//     );\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\nclass Player {\n    constructor(ctx, x, y) {\n        this.ctx = ctx;\n        this.x = x;\n        this.y = y;\n        this.image = new Image();\n        this.image.src = './assets/images/player-2.svg';\n    }\n\n    draw() {\n        const imgWidth = 156;\n        const imgHeight = 324;\n        // ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);\n        this.ctx.drawImage(this.image, 380, 180, imgWidth, imgHeight, this.x, this.y, imgWidth-30, imgHeight);\n    }\n\n    setPosition(x, y) {\n        this.x = x;\n        this.y = y;\n    }\n\n}\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ })

/******/ });