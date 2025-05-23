window.gameState = window.gameState || {};

// 點擊 window 區塊外也能關閉視窗
document.addEventListener("mousedown", (e) => {
  // 只在有視窗顯示時才判斷
  const windows = [optionDiv, rankingDiv, creditDiv];
  windows.forEach((win) => {
    if (!win.classList.contains("hidden") && !win.contains(e.target)) {
      win.classList.add("hidden");
    }
  });
});

// START 按鈕
startBtn.addEventListener("click", () => {
  // 頁面管理
  body.style.background = "url(../images/bg_game.png) no-repeat center center";
  body.style.backgroundSize = "cover";
  menu.classList.add("hidden");
  game.classList.remove("hidden");
  // 遊戲初始化
  window.gameState.hp = 4;
  window.gameState.score = 0;
  window.gameState.playing = true;
  hpBar.style.width = "100%";
  scoreEl.textContent = "0";

  // 這裡可加遊戲開始的初始化
  if (!window.rollerInterval) {
    window.rollerInterval = setInterval(summonDIO, window.gameState.summonTime);
  }
});

// OPTION 按鈕
optionBtn.addEventListener("click", () => {
  optionDiv.classList.remove("hidden");
});

// 難度選擇按鈕
optionEasyBtn.addEventListener("click", () => {
  window.gameState.rollerHp = 1;
  window.gameState.hp = 10;
  window.gameState.summonTime = 2000;
  window.gameState.difficulty = "easy";
  alertDifficulty();
});

optionNormalBtn.addEventListener("click", () => {
  window.gameState.rollerHp = 2;
  window.gameState.hp = 5;
  window.gameState.summonTime = 1000;
  window.gameState.difficulty = "normal";
  alertDifficulty();
});

optionHardBtn.addEventListener("click", () => {
  window.gameState.rollerHp = 4;
  window.gameState.hp = 1;
  window.gameState.summonTime = 600;
  window.gameState.difficulty = "hard";
  alertDifficulty();
});

// RANKING 按鈕
rankingBtn.addEventListener("click", () => {
  rankingDiv.classList.remove("hidden");
});

// CREDIT 按鈕
creditBtn.addEventListener("click", () => {
  creditDiv.classList.remove("hidden");
});

// 關閉視窗按鈕
closeWindowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const parentDiv = btn.closest(".window");
    if (parentDiv) {
      parentDiv.classList.add("hidden");
    }
  });
});
