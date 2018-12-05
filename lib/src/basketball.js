import { gravity, ground, cHeight, cWidth } from './index.js';

export default class Basketball {
    constructor() {
        this.mass = 0.625;
        this.image = new Image();
        this.image.src = './assets/images/ball.png';
        this.diameter = 24;
    }

    draw(ctx, x, y) {
        if (x && y)
            this.setPosition(x,y);
        // ctx.beginPath();
        // ctx.arc(this.position.x, this.position.y, 12 , 2*Math.PI, false);
        // ctx.clip();
        // ctx.stroke();
        // ctx.closePath();
        ctx.drawImage(this.image, this.position.x, this.position.y, 24, 24);
        // ctx.restore();
    }
    
    getInitialVelocity(time, angle) {
        const initialVelocity = time*20;
        return {
            vX: initialVelocity * Math.cos(angle * Math.PI/180),
            vY: initialVelocity * Math.sin(angle * Math.PI/180)
        };
    }
    
    setPosition(x, y) {
        if (x < 0)
            x = 0;
        if (x > cWidth-24)
            x = cWidth-24;
        if (y > ground)
            y = ground;
        this.position = { x, y };
    }
}