function pad(n) {
  return n.toString().padStart(2, "0");
}

let lastNotice10 = -1;
let lastNotice30 = -1;

setInterval(() => {
  if (window.gameState.playing) {
    window.gameState.seconds++;
    const min = Math.floor(window.gameState.seconds / 60);
    const sec = window.gameState.seconds % 60;
    timeEl.textContent = `${pad(min)}:${pad(sec)}`;

    // 只在新10秒/30秒時提醒
    if (
      window.gameState.seconds % 30 === 0 &&
      window.gameState.seconds !== lastNotice30
    ) {
      showNotice("壓路機點擊次數+1！", 30);
      lastNotice30 = window.gameState.seconds;
    }
    if (
      window.gameState.seconds % 10 === 0 &&
      window.gameState.seconds !== lastNotice10
    ) {
      showNotice("壓路機飛行速度提升！", 20);
      lastNotice10 = window.gameState.seconds;
    }
  }
}, 1000);
