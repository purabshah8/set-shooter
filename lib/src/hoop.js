import { gravity, ground, cHeight, cWidth } from './index.js';

export default class Hoop {
    constructor() {
        this.rim = {
            x: cWidth - 120,
            y: 120,
            width: 52,
            height: 5,
        };

        this.backboard = {
            x: cWidth - 68,
            y: 60,
            width: 5,
            height: 80,
        };
    }

    draw(ctx) {
        this.drawPole(ctx);
        this.drawBackboard(ctx);
        this.drawNet(ctx);
        this.drawRim(ctx);
    }

    drawRim(ctx) {
        const { x, y, width, height } = this.rim;
        ctx.beginPath();
        ctx.rect(x, y, width, height);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.closePath();
    }

    drawNet(ctx) {
        ctx.beginPath();
        ctx.moveTo(cWidth-118, 125);
        ctx.lineTo(cWidth-106, 165);
        ctx.strokeStyle = 'white';
        ctx.stroke();
        ctx.moveTo(cWidth-112, 125);
        ctx.lineTo(cWidth-100, 165);
        ctx.strokeStyle = 'white';
        ctx.stroke();
        ctx.moveTo(cWidth-106, 125);
        ctx.lineTo(cWidth-94, 165);
        ctx.strokeStyle = 'white';
        ctx.stroke();
        ctx.moveTo(cWidth-100, 125);
        ctx.lineTo(cWidth-88, 165);
        ctx.strokeStyle = 'white';
        ctx.moveTo(cWidth-94, 125);
        ctx.lineTo(cWidth-82, 160);
        ctx.strokeStyle = 'white';
        ctx.stroke();
        ctx.moveTo(cWidth-88, 125);
        ctx.lineTo(cWidth-78, 152);
        ctx.strokeStyle = 'white';
        ctx.stroke();
        ctx.moveTo(cWidth-82, 125);
        ctx.lineTo(cWidth-74, 144);
        ctx.strokeStyle = 'white';
        ctx.stroke();
        ctx.moveTo(cWidth-76, 125);
        ctx.lineTo(cWidth-72, 134);
        ctx.strokeStyle = 'white';
        ctx.stroke();
    
        ctx.moveTo(cWidth-70, 125);
        ctx.lineTo(cWidth-82, 165);
        ctx.strokeStyle = 'white';
        ctx.stroke();
        ctx.moveTo(cWidth-76, 125);
        ctx.lineTo(cWidth-88, 165);
        ctx.strokeStyle = 'white';
        ctx.stroke();
        ctx.moveTo(cWidth-82, 125);
        ctx.lineTo(cWidth-94, 165);
        ctx.strokeStyle = 'white';
        ctx.stroke();
        ctx.moveTo(cWidth-88, 125);
        ctx.lineTo(cWidth-100, 165);
        ctx.strokeStyle = 'white';
        ctx.stroke();
        ctx.moveTo(cWidth-94, 125);
        ctx.lineTo(cWidth-106, 165);
        ctx.strokeStyle = 'white';
        ctx.stroke();
        ctx.moveTo(cWidth-100, 125);
        ctx.lineTo(cWidth-110, 160);
        ctx.strokeStyle = 'white';
        ctx.stroke();
        ctx.moveTo(cWidth-106, 125);
        ctx.lineTo(cWidth-112, 148);
        ctx.strokeStyle = 'white';
        ctx.stroke();
        ctx.moveTo(cWidth-112, 125);
        ctx.lineTo(cWidth-116, 138);
        ctx.strokeStyle = 'white';
        ctx.stroke();
    
        ctx.closePath();
    }

    drawBackboard(ctx) {
        ctx.beginPath();
        ctx.rect(cWidth - 68, 60, 5, 80);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.closePath();
    }

    drawPole(ctx) {
        ctx.beginPath();
        ctx.rect(cWidth-65, 100, 40, 8);
        ctx.rect(cWidth - 25, 100, 8, 350);
        ctx.fillStyle = 'gray';
        ctx.fill();
        ctx.closePath();
    }
}