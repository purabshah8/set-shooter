import { gravity, ground, cHeight, cWidth } from './index.js';

export default class Basketball {
    constructor() {
        this.mass = 0.625;
        this.image = new Image();
        this.image.src = './assets/images/ball.png';
    }

    draw(ctx, x, y) {
        if (x && y)
            this.setPosition(x,y);
        ctx.drawImage(this.image, this.position.x, this.position.y);
    }
    
    throw(time, angle) {
        const force = (time * 10);
        const forceX = force * Math.cos(angle);
        const forceY = force * Math.sin(angle);
        const accX = forceX/this.mass;
        const accY = forceY/this.mass - gravity;
        const xDelta = 0.5 * accX;
        const yDelta = 0.5 * accY;
        return [xDelta, yDelta];
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