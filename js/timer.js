// Score timer
setInterval(() => {
  if (window.gameState.playing) {
    window.gameState.score++;
    scoreEl.textContent = window.gameState.score;
  }
}, 1000);
