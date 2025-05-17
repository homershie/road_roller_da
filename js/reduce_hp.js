function reduceHealth() {
  window.gameState.hp--;
  hpBar.style.width = (window.gameState.hp / 4) * 100 + "%";
  if (window.gameState.hp <= 0) {
    window.gameState.playing = false;
    handleGameOver();
  }
}
