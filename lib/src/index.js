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

const game = new Game(ctx);
const eventHandlers = new EventHandlers(game);

document.addEventListener('keydown', eventHandlers.keydownHandler);
document.addEventListener('keyup', eventHandlers.keyupHandler);
window.requestAnimationFrame(game.draw);

// test
window.game = game;
window.basketball = game.basketball;