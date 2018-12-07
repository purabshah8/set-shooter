import { gravity, ground, cHeight, cWidth } from './index.js';

export default class Player {
    constructor(ctx, x, y) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.image = new Image();
        this.image.src = './assets/images/player-2.svg';
    }

    draw() {
        const imgWidth = 156;
        const imgHeight = 324;
        // ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
        this.ctx.drawImage(this.image, 380, 180, imgWidth, imgHeight, this.x, this.y, imgWidth-30, imgHeight);
    }

    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }

}