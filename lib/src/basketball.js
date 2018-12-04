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
        // const { x, y } = this.position;
        const initialVelocity = time*20;
        // debugger
        return {
            vX: initialVelocity * Math.cos(angle * Math.PI/180),
            vY: initialVelocity * Math.sin(angle * Math.PI/180)
        };
        // const initialVelocity = Math.sqrt( (x*x*gravity) / (x*Math.sin(2*angle) - (2*y * Math.cos(angle) * Math.cos(angle)) ) );
        // const force = (time * 10);
        // const forceX = force * Math.cos(angle);
        // const forceY = force * Math.sin(angle);
        // const accX = 0;
        // const accY = -gravity;
        // const xDelta = initialVelocity * Math.cos(angle);
        // const yDelta = initialVelocity * Math.sin(angle) - 0.5 * gravity * time;
        // return {xDelta, yDelta};
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