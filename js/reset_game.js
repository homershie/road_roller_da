function resetGameData() {
  // 重設遊戲狀態
  switch (window.gameState.difficulty) {
    case "easy":
      window.gameState.hp = 10;
      break;
    case "normal":
      window.gameState.hp = 5;
      break;
    case "hard":
      window.gameState.hp = 1;
      break;
    default:
      window.gameState.hp = 5;
  }
  window.gameState.seconds = 0;
  window.gameState.playing = false;

  // 重設 UI
  hpBar.style.width = "100%";
  scoreEl.textContent = "00:00";

  // 清除遊戲區所有壓路機和DIO
  document.querySelectorAll(".roller, .dio").forEach((el) => el.remove());

  // 回到選單畫面
  menu.classList.remove("hidden");
  game.classList.add("hidden");
}
