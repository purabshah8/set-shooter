import Basketball from './basketball.js';
import Hoop from './hoop.js';
import Player from './player.js';

export const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

export const cHeight = canvas.height;
export const cWidth = canvas.width;
export const gravity = 9.82;
export const ground = cHeight - (cHeight/4);

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

const playerHeight = 175;
let playerX = 8;
let playerY = ground-playerHeight;
let basketballX = playerX + 5;
let basketballY = playerY - 20;
const basketball = new Basketball();
const hoop = new Hoop();
const player = new Player(playerHeight);

const draw = () => {
    ctx.clearRect(0,0, cWidth, cHeight);
    drawScene();
    player.draw(ctx, playerX, playerY);
    hoop.draw(ctx, cWidth);
    basketball.draw(ctx, basketballX, basketballY);
};


let startTime;
let endTime;
let elapsed;
const keydownHandler = e => {
    e.preventDefault();
    if (e.keyCode === 32) {
        startTime = startTime || Date.now(); 
        
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
        elapsed = (Date.now() - startTime)/1000;
        startTime = null;
        console.log(elapsed);
        basketball.throw(elapsed, 45);
        
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
        dy = -1;
    }
    if (e.keyCode === 40) {
        dy = 1;
    }
};


document.addEventListener('keydown', keydownHandler);
document.addEventListener('keyup', keyupHandler);

setInterval(draw, 10);