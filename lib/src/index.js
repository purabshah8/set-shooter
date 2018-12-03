const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

const cHeight = canvas.height;
const cWidth = canvas.width;

const gravity = 9.82;
const ground = cHeight - (cHeight/4);




const rimWidth = 48;
const rimHeight = 5;

// let mousePos;
// let mouseDown = false;
// let mouseUp = false;

// function getMousePos (canvas, event) {
//     const rect = canvas.getBoundingClientRect();
//     return {
//         x: event.clientX,
//         y: event.clientY,
//     };
// }

// canvas.addEventListener('mousemove', e => {
//     mousePos = getMousePos(canvas, e);
//     mouseDown = true;
//     mouseUp = false;
// });

// canvas.addEventListener('mousedown', e => {
//     mousePos = getMousePos(canvas, e);
//     mouseDown = true;
//     mouseUp = false;
// });

// canvas.addEventListener('mousemove', e => {
//     mousePos = getMousePos(canvas, e);
//     mouseUp = true;
//     mouseDown = false;
// });

const drawPlayer = (x = 5, y = ground-100) => {
    ctx.beginPath();
    ctx.rect(x, y, 20, 100);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();
};

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

const drawRim = () => {
    ctx.beginPath();
    ctx.rect(cWidth - 118, 120, rimWidth, rimHeight);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
};

const drawBackboard = () => {
    ctx.beginPath();
    ctx.rect(cWidth - 70, 60, 5, 80);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.closePath();
};

const drawBasketball = (basketball, x = 10, y = ground-120) => {
    ctx.drawImage(basketball, x, y);
};

const basketball = new Image();
basketball.src = './assets/images/ball.png';

const draw = () => {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    drawScene();
    drawPlayer();
    drawBackboard();
    drawRim();
    drawBasketball(basketball);
};
let startTime;
let endTime;
let elapsed;
const keydownHandler = e => {
    e.preventDefault();
    if (e.keyCode === 32) {
        startTime = e.timeStamp; 
    }
};

const keyupHandler = e => {
    e.preventDefault();
    if (e.keyCode === 32) {
        elapsed = (e.timeStamp - startTime)/1000;
        console.log(startTime, e.timeStamp, elapsed);
    }
    if (e.keyCode === 37) {
        dx = -1;
    }
    if (e.keyCode === 39) {
        dx = 1;
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