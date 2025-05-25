function pad(n) {
  return n.toString().padStart(2, "0");
}

// Score timer
setInterval(() => {
  if (window.gameState.playing) {
    window.gameState.seconds++;
    const min = Math.floor(window.gameState.seconds / 60);
    const sec = window.gameState.seconds % 60;
    timeEl.textContent = `${pad(min)}:${pad(sec)}`;
  }
}, 1000);
