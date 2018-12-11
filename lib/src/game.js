import Basketball from './basketball.js';
import Hoop from './hoop.js';
import Player from './player.js';
import ShotHelpers from './shot_helpers.js';
import { ground, cHeight, cWidth } from './index.js';


export default class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.player = new Player(ctx, cWidth - 620, ground-150);
        this.basketball = new Basketball(ctx, this.player.x + 100, this.player.y - 4, -90);
        this.hoop = new Hoop(ctx);
        this.isThrown = false;
        this.collided = false;
        this.initialVelocities = null;
        this.vX = null;
        this.vY = null;
        this.t = null;
        this.shotAngle = 60;
        this.score = 0;
        this.scored = false;
        this.missedShots = 0;
        this.shotHelpers = new ShotHelpers(ctx, this.basketball);
        this.draw = this.draw.bind(this);
        this.clearCanvas = this.clearCanvas.bind(this);
    }

    drawScene() {
        this.ctx.beginPath();
        this.ctx.fillStyle = "rgba(50, 100, 75)";
        this.ctx.fillRect(0, ground, cWidth, cHeight);
        this.ctx.ellipse(cWidth-10, ground+95, 750, 85, 0, -Math.PI/2, Math.PI/2+.111, true);
        this.ctx.strokeStyle = 'white';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();
        this.ctx.moveTo(cWidth-4, ground);
        this.ctx.lineTo(cWidth-100, cHeight);
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.beginPath();
        this.ctx.save();
        this.ctx.transform(1,0,-0.5,1,0,0);
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(cWidth-192, ground+48, 472, 84);
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(cWidth-188, ground+50, 470, 80);
        this.ctx.closePath();
        this.ctx.restore();
    }

    drawScore() {
        this.ctx.font = '48px Oswald';
        this.ctx.fillStyle = 'red';
        this.ctx.fillText(`Score: ${this.score}`,450, 50);
    }
    
    clearCanvas() {
        this.ctx.clearRect(0,0, cWidth, cHeight);
        this.drawScene();
        this.hoop.draw();
        this.drawScore();
    }

    resetVars() {
        if (this.player.x < 64) {
            this.player.x = 64;
        } else if (this.player.x > 752) {
            this.player.x = 752;
        }
        if (this.basketball.x > (this.player.x + 100) && this.player.x >= 752 || 
            this.basketball.x < (this.player.x + 100) || 
            this.basketball.y > ground+80) {
    
            this.basketball.x =  this.player.x + 100;
            this.basketball.y = this.player.y - 4;
            this.isThrown = false;
            if (this.scored) {
                this.score += 2;
                if (this.player.x < 184)
                    this.score += 1;
                this.scored = false;
            } else {
                this.missedShots += 1;
            }
            this.collided = false;
            this.t = null;
            this.basketball.rotationAngle = -90;
        }
    }

    collisionDetection(obstacle) {
        const ballX = this.basketball.x + this.vX;
        const ballY = this.basketball.y - (this.vY - (9.81 * this.t));
        const ballEndX = ballX + this.basketball.diameter;
        const ballEndY = ballY + this.basketball.diameter;
        let { x, y, width, height } = obstacle;
        let endX = x + width;
        let endY = y + height;
  
        if (obstacle.type === 'Rim' && !(this.basketball.y > endY)) {
            if ( (ballX >= x+4 && ballEndX <= endX-4) && (ballEndY >= y && ballY <= y) ) {
                this.scored = true;
                return false;
            }
            const rimLeft = { x, y, width: 4, height };
            const rimRight = { x: x+76, y, width: 4, height };
            this.collisionDetection(rimLeft);
            this.collisionDetection(rimRight);
        } else if (
            ( (ballEndY >= y && ballY <= y) || (ballY <= endY && ballEndY >= endY) ) &&
            ( (ballX <= x && ballEndX >= x) || (ballX >= x && ballEndX <= endX) || (ballX <= x && ballEndX >= endX) || (ballX <= endX && ballEndX >= endX) )
        ) {
            // console.log(`Horizontal, Current Pos: ${[this.basketball.x, this.basketball.y]}, New Pos: ${[ballX, ballY]}, ${obstacle.type}`);
            return {type: 'horizontal'};
        }
        else if ( 
            ( (ballEndX >= x && ballX <= x) || (ballX <= endX && ballEndX >= endX) ) &&
            ( (ballY <= y && ballEndY >= y) || (ballY <= y && ballEndY >= endY) || (ballY <= endY && ballEndY >= endY)  || (ballY >= y && ballEndY <= endY) ) 
        ) {
            // console.log(`Vertical, Current Pos: ${[this.basketball.x, this.basketball.y]}, New Pos: ${[ballX, ballY]}, ${obstacle.type}`);
            return { type: 'vertical'};
        }
        return false;
    }

    handleThrownBall() {
        this.collided = this.collisionDetection(this.hoop.backboard) 
        || this.collisionDetection(this.hoop.rim, this.basketball.lastY);
        if (this.collided) {
            if (this.collided.type === 'vertical')
            this.vX = -this.vX;
            else {
                this.vY = -this.vY;
                this.t = 0;
            }
            // console.log(this.collided, [this.basketball.x, this.basketball.y], this.vY-(9.81 * this.t));
            this.collided = false;
        }
        this.basketball.lastX = this.basketball.x;
        this.basketball.lastY = this.basketball.y;
        [this.basketball.x, this.basketball.y] = this.basketball.move(this.vX, this.vY, this.t);
        this.t += 1/60;
    }

    draw() {
        this.clearCanvas();
        this.player.draw();
        this.resetVars();
        if (this.isThrown) {
            this.handleThrownBall();
        } else {
            this.shotHelpers.drawArrow(this.shotAngle);
        }
        this.shotHelpers.drawPowerBar();
        this.basketball.draw();
        window.requestAnimationFrame(this.draw);
    }

}