import { gravity, ground, cHeight, cWidth } from './index.js';

export default class Hoop {
    constructor() {
        this.rim = {
            x: cWidth - 136,
            y: cHeight - 610,
            width: 72,
            height: 5,
        };

        this.backboard = {
            x: cWidth - 64,
            y: cHeight-690,
            width: 5,
            height: 120,
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
        const netLength = 64;
        const { x, y, width } = this.rim;
        const startX = x + 2;
        const endX = x + width - 2;
        const startY = y + 2;
        const endY = y+netLength;
        ctx.beginPath();
        ctx.strokeStyle = 'white';
        
        ctx.moveTo(startX, startY);
        ctx.lineTo(x+16, endY);
        ctx.stroke();
        ctx.moveTo(startX+8, startY);
        ctx.lineTo(x+24, endY);
        ctx.stroke();
        ctx.moveTo(startX+16, startY);
        ctx.lineTo(x+32, endY);
        ctx.stroke();
        ctx.moveTo(startX+24, startY);
        ctx.lineTo(x+40, endY);
        ctx.stroke();
        ctx.moveTo(startX+32, startY);
        ctx.lineTo(x+48, endY);
        ctx.stroke();
        ctx.moveTo(startX+40, startY);
        ctx.lineTo(x+56, endY);
        ctx.stroke();

        ctx.moveTo(startX+48, startY);
        ctx.lineTo(x+60, endY-16);
        ctx.stroke();
        ctx.moveTo(startX+56, startY);
        ctx.lineTo(x+64, endY-36);
        ctx.stroke();
        // ctx.moveTo(startX+62, startY);
        // ctx.lineTo(x+68, endY-52);
        // ctx.stroke();
        
        // ctx.moveTo(cWidth-100, startY);
        // ctx.lineTo(cWidth-110, y+58);
        // ctx.stroke();
        ctx.moveTo(endX-56, startY);
        ctx.lineTo(x+width-64, endY-36);
        ctx.stroke();
        ctx.moveTo(endX-48, startY);
        ctx.lineTo(x+width-60, endY-16);
        ctx.stroke();

        ctx.moveTo(endX-40, startY);
        ctx.lineTo(x+width-56, endY);
        ctx.stroke();
        ctx.moveTo(endX-32, startY);
        ctx.lineTo(x+width-48, endY);
        ctx.stroke();
        ctx.moveTo(endX-24, startY);
        ctx.lineTo(x+width-40, endY);
        ctx.stroke();
        ctx.moveTo(endX-16, startY);
        ctx.lineTo(x+width-32, endY);
        ctx.stroke();
        ctx.moveTo(endX-8, startY);
        ctx.lineTo(x+width-24, endY);
        ctx.stroke();
        ctx.moveTo(endX, startY);
        ctx.lineTo(x+width-16, endY);
        ctx.stroke();
        
    
        ctx.closePath();
    }

    drawBackboard(ctx) {
        const { x, y, width, height } = this.backboard;
        ctx.beginPath();
        ctx.rect(x, y, width, height);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.closePath();
    }

    drawPole(ctx) {
        const poleY = cHeight-600;
        ctx.beginPath();
        ctx.rect(cWidth-60, poleY, 40, 8);
        ctx.rect(cWidth - 25, poleY, 8, ground-120);
        ctx.fillStyle = 'gray';
        ctx.fill();
        ctx.closePath();
    }
}