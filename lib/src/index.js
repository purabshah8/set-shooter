import Basketball from './basketball.js';
import Hoop from './hoop.js';
import Player from './player.js';

export const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

window.requestAnimationFrame = window.requestAnimationFrame || 
window.webkitRequestAnimationFrame || 
window.mozRequestAnimationFrame ||
window.oRequestAnimationFrame || 
window.msRequestAnimationFrame;

export const cHeight = canvas.height;
export const cWidth = canvas.width;
export const gravity = 9.81;
export const ground = cHeight - (cHeight/4);

function init() {
}

const drawScene = () => {
    ctx.fillStyle="rgba(0,0, 200, 0.2)";
    ctx.fillRect(0,0, cWidth, ground);
    ctx.beginPath();
    ctx.lineTo(cWidth, ground);
    ctx.strokeStyle="rgba(0, 100, 50, 0.6)"; 
    ctx.stroke();
    ctx.fillStyle = "rgba(0, 200, 100, 0.6)";
    ctx.fillRect(0, ground, cWidth, cHeight);
};

let playerX = cWidth-880;
let playerY = ground-200;
let basketballX = playerX + 100;
let basketballY = playerY - 4;
let prevBallY;
let isThrown = false;
let collided = false;
let initialVelocites;
let vX, vY, t;
let angle = 45;
let score = 0;
let scored = false;
let rotationAngle = 0;


const basketball = new Basketball(ctx, basketballX, basketballY, rotationAngle);
const hoop = new Hoop(ctx);
const player = new Player(ctx, playerX, playerY);
window.ctx = ctx;
window.basketball = basketball;

const drawArrow = (theta) => {
    const startX = basketball.x+36;
    const startY = basketball.y-8;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    const endX = startX + 50*Math.cos(theta * Math.PI / 180);
    const endY = startY - 50*Math.sin(theta * Math.PI / 180);
    ctx.lineTo(endX, endY);
    ctx.moveTo(endX, endY);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = '3';
    ctx.stroke();
    ctx.closePath();
};

const drawScore = () => {
    ctx.font = '48px Oswald';
    ctx.fillStyle = 'white';
    ctx.fillText(`Score: ${score}`,10, 50);
};

const clear = () => {
    ctx.clearRect(0,0, cWidth, cHeight);
    drawScene();
    hoop.draw();
    drawScore();
};

const draw = () => {
    clear();
    player.setPosition(playerX, playerY);
    player.draw();
    reset();
    prevBallY = basketballY;
    if (isThrown) {
      handleThrownBall();  
    } else {
        drawArrow(angle);
    }
    basketball.setPosition(basketballX, basketballY);
    basketball.draw();
};

const handleThrownBall = () => {
    t += 10;
    rotationAngle -= Math.sqrt(vX * vX + vY * vY)/2;
    if (collided) {
        console.log(collided, [basketball.x, basketball.y]);
        if (collided.type === 'vertical')
            vX = -vX;
        else 
            vY = -vY;
        collided = false;
    }
    [basketballX, basketballY] = basketball.move(vX, vY, t);
    collided = collisionDetection(basketball, hoop.backboard) 
    || collisionDetection(basketball, hoop.rim, prevBallY);
};

const reset = () => {
    if (basketball.x > cWidth || basketball.y > cHeight || 
        basketball.x < 0 || basketball.y > ground) {

        basketballX =  player.x + 100;
        basketballY = player.y - 4;
        isThrown = false;
        if (scored) {
            score += 1;
            scored = false;
        }
        collided = false;
        t = null;
        rotationAngle = 0;
    }
};

const collisionDetection = (ball, obstacle, prevY) => {
    const ballX = ball.x + vX;
    const ballY = ball.y + vY;
    const ballEndX = ballX + ball.diameter;
    const ballEndY = ballY + ball.diameter;
    const { x, y, width, height } = obstacle;
    const endX = x + width;
    const endY = y + height;
    if ( (ballY >= y && ballEndY <= endY) 
     && (ballEndX >= x || (ballX <= endX && ballEndX > endX) ) ) {
        return { type: 'vertical'};
    } else if ( (ballX > x && ballEndX < endX) 
     && (ballEndY >= y && ballY < endY || ballY <= endY && ballEndY > y) ) {
        if (prevY && ballY > y && prevY < y) {
            console.log(`rim: ${y}` ,`prevY: ${prevY}`, `ball: ${[ballX, ballY]}`);
            scored = true;
            debugger
            return false;
        }
        return {type: 'horizontal'};
    }
    return false; 
};

let startTime;
let elapsed;

const keydownHandler = e => {
    e.preventDefault();
    if (e.keyCode === 32) {
        startTime = startTime || Date.now();
        if (isThrown)
            startTime = null;  
    }
    if (e.keyCode === 37) {
        playerX += -8;
        basketballX += -8;
    }
    if (e.keyCode === 39) {
        playerX += 8;
        basketballX += 8;
    }
};

const keyupHandler = e => {
    e.preventDefault();
    if (e.keyCode === 32) {
        if (!isThrown) {
            elapsed = (Date.now() - startTime)/1000;
            startTime = null;
               initialVelocites = basketball.getInitialVelocity(elapsed, angle);
               vX = initialVelocites.vX;
               vY = initialVelocites.vY;
            isThrown = true;
            t = 0;
        }
    }
    if (e.keyCode === 37) {
        playerX += -8;
        basketballX += -8;
    }
    if (e.keyCode === 39) {
        playerX += 8;
        basketballX += 8;
    }
    if (e.keyCode === 38) {
        angle = Math.min(angle+5, 90);
    }
    if (e.keyCode === 40) {
        angle = Math.max(angle-5, 0);
    }
};


document.addEventListener('keydown', keydownHandler);
document.addEventListener('keyup', keyupHandler);

setInterval(draw, 10);
// window.requestAnimationFrame(
//     () => basketball.draw(ctx, basketballX, basketballY, rotationAngle)
//     );