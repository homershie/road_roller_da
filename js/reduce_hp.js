function reduceHealth() {
  window.gameState.hp--;
  switch (window.gameState.difficulty) {
    case "easy":
      maxHp = 10;
      break;
    case "normal":
      maxHp = 5;
      break;
    case "hard":
      maxHp = 1;
      break;
  }
  hpBar.style.width = (window.gameState.hp / 4) * 100 + "%";
  if (window.gameState.hp <= 0) {
    handleGameOver();
  }
}
