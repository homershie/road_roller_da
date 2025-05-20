document.getElementById("start-btn").addEventListener("click", () => {
  window.gameState.hp = 4;
  window.gameState.score = 0;
  window.gameState.playing = true;
  hpBar.style.width = "100%";
  scoreEl.textContent = "0";
});
