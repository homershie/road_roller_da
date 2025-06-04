function reduceHealth() {
  window.gameState.hp--;
  let maxHp;
  switch (window.gameState.difficulty) {
    case "easy":
      maxHp = 10;
      break;
    case "normal":
      maxHp = 5;
      break;
    case "hard":
      maxHp = 2;
      break;
    default:
      maxHp = 4;
  }
  hpBar.style.width = (window.gameState.hp / maxHp) * 100 + "%";
  if (window.gameState.hp <= 0) {
    handleGameOver();
  }
}
