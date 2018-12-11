export default class ShotHelpers {
    constructor(ctx, basketball) {
        this.ctx = ctx;
        this.basketball = basketball;
        this.startTime = null;
    }

    drawArrow(shotAngle) {
        const startX = this.basketball.x+36;
        const startY = this.basketball.y-8;
        this.ctx.beginPath();
        this.ctx.moveTo(startX, startY);
        const endX = startX + 50*Math.cos(shotAngle * Math.PI / 180);
        const endY = startY - 50*Math.sin(shotAngle * Math.PI / 180);
        this.ctx.lineTo(endX, endY);
        this.ctx.moveTo(endX, endY);
        this.ctx.strokeStyle = 'red';
        this.ctx.lineWidth = '3';
        this.ctx.stroke();
        this.ctx.closePath();
    }

    drawPowerBar() {
        const barX = 20;
        const barY = 240;
        const height = 300;
        const width = 50; 
        let elapsed = this.startTime ? (Date.now() - this.startTime)/1000 : 0;
        elapsed = Math.min(elapsed, 0.75);
        const power = 320 * elapsed;
        const displacement = 300 - 400*elapsed;
        console.log(elapsed);
        this.ctx.strokeStyle = 'white';
        this.ctx.lineWidth = 3;
        this.ctx.strokeRect(barX, barY, width, height);
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(barX, barY, width, height);
        this.ctx.fillStyle = 'green';
        this.ctx.fillRect(barX, barY+displacement, width, 400*elapsed);
    }
}

// t = 0, y = barY + 300
// t = 0.375 y = barY + 150
// t = 0.75 y = barY + 0
// y = barY + (300 - 400t)