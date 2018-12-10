import Basketball from './basketball.js';
import Hoop from './hoop.js';
import Player from './player.js';

import { ground, cHeight, cWidth } from './index.js';


export default class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.playerX = cWidth - 880;
        this.playerY = ground - 200;
        this.basketballX = this.playerX + 100;
        this.basketballY = this.playerY = this.playerY - 4;
        this.isThrown = false;
        this.collided = false;
        this.initialVelocities;
        this.vX;
        this.vY;
        this.t;
        this.shotAngle = 45;
        this.score = 0;
        this.scored = false;
        this.hoop = new Hoop(ctx);
        this.player = new Player(ctx, this.playerX, this.playerY);
        this.basketball = new Basketball(ctx, this.basketballX, this.basketballY, 0);
        this.draw = this.draw.bind(this);
        this.clearCanvas = this.clearCanvas.bind(this);
    }

    drawScene() {
        this.ctx.fillStyle="rgba(0,0, 200, 0.2)";
        this.ctx.fillRect(0,0, cWidth, ground);
        this.ctx.beginPath();
        this.ctx.lineTo(cWidth, ground);
        this.ctx.strokeStyle="rgba(0, 100, 50, 0.6)"; 
        this.ctx.stroke();
        this.ctx.fillStyle = "rgba(0, 200, 100, 0.6)";
        this.ctx.fillRect(0, ground, cWidth, cHeight);
    }

    drawScore() {
        this.ctx.font = '48px Oswald';
        this.ctx.fillStyle = 'white';
        this.ctx.fillText(`Score: ${this.score}`,10, 50);
    }
    
    clearCanvas() {
        this.ctx.clearRect(0,0, cWidth, cHeight);
        this.drawScene();
        this.hoop.draw();
        this.drawScore();
    }

    resetVars() {
        if (this.basketball.x > cWidth || 
            this.basketball.x < 0 || 
            this.basketball.y > ground) {
    
            this.basketballX =  this.player.x + 100;
            this.basketballY = this.player.y - 4;
            this.isThrown = false;
            if (this.scored) {
                this.score += 1;
                this.scored = false;
            }
            this.collided = false;
            this.t = null;
            this.basketball.rotationAngle = 0;
        }
    }

    drawArrow() {
        const startX = this.basketball.x+36;
        const startY = this.basketball.y-8;
        this.ctx.beginPath();
        this.ctx.moveTo(startX, startY);
        const endX = startX + 50*Math.cos(this.shotAngle * Math.PI / 180);
        const endY = startY - 50*Math.sin(this.shotAngle * Math.PI / 180);
        this.ctx.lineTo(endX, endY);
        this.ctx.moveTo(endX, endY);
        this.ctx.strokeStyle = 'red';
        this.ctx.lineWidth = '3';
        this.ctx.stroke();
        this.ctx.closePath();
    }

    collisionDetection(obstacle, prevY) {
        const ballX = this.basketball.x + this.vX;
        const ballY = this.basketball.y + this.vY;
        const ballEndX = ballX + this.basketball.diameter;
        const ballEndY = ballY + this.basketball.diameter;
        const { x, y, width, height } = obstacle;
        const endX = x + width;
        const endY = y + height;
        if ( (ballY >= y && ballEndY <= endY) && 
        (ballEndX >= x || (ballX <= endX && ballEndX > endX) ) ) {
            return { type: 'vertical'};
        } else if ( (ballX > x && ballEndX < endX) && 
        (ballEndY >= y && ballY < endY || ballY <= endY && ballEndY > y) ) {
            if (prevY && ballY > y && prevY < y) {
                console.log(`rim: ${y}` ,`prevY: ${prevY}`, `ball: ${[ballX, ballY]}`);
                this.scored = true;
                // debugger
                return false;
            }
            return {type: 'horizontal'};
        }
        return false;
    }

    handleThrownBall() {
        this.t += 10;
        if (this.collided) {
            console.log(this.collided, [this.basketball.x, this.basketball.y]);
            if (this.collided.type === 'vertical')
                this.vX = -this.vX;
            else 
                this.vY = -this.vY;
            this.collided = false;
        }
        [this.basketballX, this.basketballY] = this.basketball.move(this.vX, this.vY, this.t);
        this.collided = this.collisionDetection(this.hoop.backboard) 
        || this.collisionDetection(this.hoop.rim, this.prevBallY);
    }

    draw() {
        this.clearCanvas();
        this.player.setPosition(this.playerX, this.playerY);
        this.player.draw();
        this.resetVars();
        this.prevBallY = this.basketballY;
        if (this.isThrown) {
        this.handleThrownBall();  
        } else {
            this.drawArrow(this.shotAngle);
        }
        this.basketball.setPosition(this.basketballX, this.basketballY);
        this.basketball.draw();
        window.requestAnimationFrame(this.draw);
    }

}