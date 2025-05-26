const game = document.getElementById("game");
const fist = document.getElementById("fist");
const hpBar = document.getElementById("hp-bar");
const timeEl = document.getElementById("time");
const scoreEl = document.getElementById("score");
const body = document.querySelector("body");
const menu = document.getElementById("menu");
const startBtn = document.getElementById("start-button");
const optionBtn = document.getElementById("option-button");
const optionDiv = document.getElementById("option");
const rankingBtn = document.getElementById("ranking-button");
const rankingDiv = document.getElementById("ranking");
const creditBtn = document.getElementById("credit-button");
const creditDiv = document.getElementById("credit");
const closeWindowBtns = document.querySelectorAll(".btn-close-window");
const elTopScore = document.getElementById("top-score");
const elTopPlayer = document.getElementById("top-player");
const optionEasyBtn = document.getElementById("option-easy");
const optionNormalBtn = document.getElementById("option-normal");
const optionHardBtn = document.getElementById("option-hard");
const backBtn = document.getElementById("back-btn");
const bgm = new Audio("./audio/Stardust_Crusaders_OST.mp3");
bgm.loop = true;
bgm.volume = 0.1;

const buttonSfx = new Audio("./audio/button.mp3");
let sfxVolume = 0.4;
buttonSfx.volume = sfxVolume;

const dioSfx = new Audio("./audio/roadroller.mp3");
dioSfx.volume = sfxVolume;

const hitSfxList = [
  new Audio("./audio/metal-hit-10.mp3"),
  new Audio("./audio/metal-hit-25.mp3"),
  new Audio("./audio/metal-hit-94.mp3"),
];
hitSfxList.forEach((sfx) => (sfx.volume = sfxVolume));
