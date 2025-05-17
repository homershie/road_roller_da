const game = document.getElementById("game");
const fist = document.getElementById("fist");
const hpBar = document.getElementById("hp-bar");
const scoreEl = document.getElementById("score");

const gameState = {
  hp: 4,
  score: 0,
  playing: false,
  topScore: 0,
  topPlayer: "Jotaro Kujo",
};

window.gameState = gameState;
