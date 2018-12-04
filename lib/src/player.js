import { gravity, ground, cHeight, cWidth } from './index.js';

export default class Player {
    constructor(height) {
        this.height = height;
    }

    draw(ctx, x=5, y=ground-this.height) {
        if (x < 0)
            x = 0;
        if (x > cWidth-20)
            x = cWidth-20;
        ctx.beginPath();
        ctx.rect(x, y, 20, this.height);
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.closePath();
    }

}