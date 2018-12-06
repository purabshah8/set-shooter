import { gravity, ground, cHeight, cWidth } from './index.js';

export default class Player {
    constructor(height) {
        this.height = height;
        this.shotAngle = 45;
        this.image = new Image();
        this.image.src = './assets/images/player-2.svg';
    }

    draw(ctx, x, y) {
        const imgWidth = 156;
        const imgHeight = 324;
        // ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
        ctx.drawImage(this.image, 380, 180, imgWidth, imgHeight, x, y, imgWidth-30, imgHeight);
    }

}