const gameState = {
  hp: 5,
  rollerHp: 2,
  startTime: 0,
  seconds: 0,
  playing: false,
  summonTime: 1500,
  difficulty: "easy",
  score: 0,
  rollerCount: 0,
  averageReaction: 600,
};

const ranking = [
  { name: "Jotaro", score: 0 },
  { name: "Joseph ", score: 0 },
  { name: "Polnareff", score: 0 },
];

window.gameState = gameState;
window.gameState.startTime = Date.now();

// 儲存排行榜
if (!localStorage.getItem("ranking")) {
  localStorage.setItem("ranking", JSON.stringify(ranking));
}

// 讀取排行榜
const loaded = JSON.parse(localStorage.getItem("ranking") || "[]");

// 新紀錄加入並排序
function addScore(name, score) {
  const ranking = JSON.parse(localStorage.getItem("ranking") || "[]");
  ranking.push({ name, score });
  ranking.sort((a, b) => b.score - a.score); // 由高到低
  const top3 = ranking.slice(0, 3);
  localStorage.setItem("ranking", JSON.stringify(top3));
}

// 更新紀錄DOM顯示
function updateRankingDisplay() {
  const ranking = JSON.parse(localStorage.getItem("ranking") || "[]");
  const playerIds = ["1ST-player", "2ND-player", "3RD-player"];
  const scoreIds = ["1ST-score", "2ND-score", "3RD-score"];

  for (let i = 0; i < 3; i++) {
    const playerEl = document.getElementById(playerIds[i]);
    const scoreEl = document.getElementById(scoreIds[i]);
    if (ranking[i]) {
      playerEl.textContent = ranking[i].name;
      scoreEl.textContent = ranking[i].score;
    } else {
      playerEl.textContent = "Jotaro";
      scoreEl.textContent = "0";
    }
  }
}

/**
 * 計算分數
 * @param {number} rollerCount - 消失的roller數量
 * @param {number} surviveTime - 存活時間（秒）
 * @param {string} difficulty - 'easy' | 'normal' | 'hard'
 * @returns {number} 分數
 */

function calculateScore(rollerCount, surviveTime, difficulty) {
  let factor = 1;
  let reactionBonus = Math.max(0, 1 - window.gameState.averageReaction / 1000);
  const timeBonus = Math.pow(surviveTime, 1.2);
  if (difficulty === "normal") factor = 1.85;
  if (difficulty === "hard") factor = 2.5;
  return Math.floor(
    rollerCount * 500 * timeBonus * factor * (1 + reactionBonus)
  );
}

function loadTopScore() {
  const score = localStorage.getItem("topScore");
  const player = localStorage.getItem("topPlayer");
  if (score) window.gameState.topScore = parseInt(score, 10);
  if (player) window.gameState.topPlayer = player;
}

function saveTopScore() {
  localStorage.setItem("topScore", window.gameState.topScore);
  localStorage.setItem("topPlayer", window.gameState.topPlayer);
}

loadTopScore();
