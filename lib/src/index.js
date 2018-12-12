import Game from './game.js';
import EventHandlers from './event_handlers.js';


window.requestAnimationFrame = window.requestAnimationFrame || 
window.webkitRequestAnimationFrame || 
window.mozRequestAnimationFrame ||
window.oRequestAnimationFrame || 
window.msRequestAnimationFrame;

export const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");
export const cHeight = canvas.height;
export const cWidth = canvas.width;
export const ground = cHeight - (cHeight/4);

let game = new Game(ctx);
const eventHandlers = new EventHandlers(game);

const playNewGame = () => {
    game = new Game(ctx);
};

export const playButton = document.getElementById('play-button');
const playAgainButton = document.getElementById('play-again-button');

let handlePlay = () => {
    document.getElementsByClassName('start-screen')[0].classList.add('hidden');
    window.requestAnimationFrame(game.draw);
};

let handlePlayAgain = (playNewGame) => {
    return e => {
        const gameOverScreen = document.getElementsByClassName('end-screen')[0];
        console.log(game);
        gameOverScreen.classList.add('hidden');
        playNewGame();
        console.log(game);
        window.requestAnimationFrame(game.draw);
    };
};

// handlePlay = handlePlay.bind(this);

playButton.addEventListener('click', handlePlay);
playAgainButton.addEventListener('click', handlePlayAgain(playNewGame));
document.addEventListener('keydown', eventHandlers.keydownHandler);
document.addEventListener('keyup', eventHandlers.keyupHandler);

game.drawScene(); 

// test
window.game = game;
window.basketball = game.basketball;