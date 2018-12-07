import { gravity, ground, cHeight, cWidth } from './index.js';

export default class Basketball {
    constructor(ctx, x, y, rotationAngle) {
        this.ctx = ctx;
        this.mass = 0.625;
        this.image = new Image();
        this.image.src = './assets/images/ball.png';
        this.diameter = 36;
        this.x = x;
        this.y = y;
        this.rotationAngle = rotationAngle;
    }

    draw() {
        if (this.rotationAngle !== 0) {
            this.ctx.save();
            this.ctx.translate(this.x+this.diameter/2, this.y+this.diameter/2);
            this.ctx.rotate(this.rotationAngle * Math.PI/180);
            this.ctx.drawImage(this.image, 0-this.diameter/2, 0-this.diameter/2, 36, 36);
            this.ctx.restore();
        } else
            this.ctx.drawImage(this.image, this.x, this.y, 36, 36);
    }
    
    getInitialVelocity(time, angle) {
        const initialVelocity = time*20;
        return {
            vX: initialVelocity * Math.cos(angle * Math.PI/180),
            vY: initialVelocity * Math.sin(angle * Math.PI/180)
        };
    }
    
    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }

    move(vX, vY, time) {
        this.x += vX;
        this.y -= vY - (gravity * time/1000);
        return [this.x, this.y];
    }
}