export default class EventHandlers {
    constructor(game, shot) {
        this.startTime;
        this.elapsed;
        this.game = game;
        this.keydownHandler = this.keydownHandler.bind(this);
        this.keyupHandler = this.keyupHandler.bind(this);
    }

    keydownHandler(e) {
        e.preventDefault();
        if (e.keyCode === 32) {
            this.startTime = this.startTime || Date.now();
            this.game.shotHelpers.startTime = this.startTime;
            // this.elapsed = (Date.now() - this.startTime)/1000;
            // console.log(this.elapsed);
            if (this.game.isThrown)
                this.startTime = null;  
        }
        if (e.keyCode === 37) {
            this.game.player.x += -4;
            this.game.basketball.x += -4;
        }
        if (e.keyCode === 39) {
            this.game.player.x += 4;
            this.game.basketball.x += 4;
        }
        if (e.keyCode === 38) {
            this.game.shotAngle = Math.min(this.game.shotAngle+2, 88);
        }
        if (e.keyCode === 40) {
            this.game.shotAngle = Math.max(this.game.shotAngle-2, 0);
        }
    }

    keyupHandler(e) {
        e.preventDefault();
        if (e.keyCode === 32) {
            if (!this.game.isThrown) {
                this.elapsed = (Date.now() - this.startTime)/1000;
                console.log(this.elapsed);
                this.elapsed = Math.min(this.elapsed, 0.75);
                this.startTime = null;
                this.game.shotHelpers.startTime = null;
                this.game.initialVelocites = this.game.basketball.getInitialVelocity(this.elapsed, this.game.shotAngle);
                this.game.vX = this.game.initialVelocites.vX;
                this.game.vY = this.game.initialVelocites.vY;
                this.game.isThrown = true;
                this.game.t = 0;
            }
        }
        if (e.keyCode === 37) {
            this.game.player.x += -4;
            this.game.basketball.x += -4;
        }
        if (e.keyCode === 39) {
            this.game.player.x += 8;
            this.game.basketball.x += 8;
        }
        if (e.keyCode === 38) {
            this.game.shotAngle = Math.min(this.game.shotAngle+2, 88);
        }
        if (e.keyCode === 40) {
            this.game.shotAngle = Math.max(this.game.shotAngle-2, 0);
        }
    }
}