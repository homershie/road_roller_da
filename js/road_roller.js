// Spawns road roller
function summonDIO() {
  const roller = document.createElement("img");
  roller.src = "steamroller.png";
  roller.className = "roller";
  roller.style.left = Math.random() * (window.innerWidth - 100) + "px";
  roller.style.top = "0px";
  game.appendChild(roller);

  let fall = setInterval(() => {
    if (!window.gameState.playing) return;
    const pos = roller.offsetTop;
    roller.style.top = pos + 5 + "px";

    // If hits bottom
    if (pos > window.innerHeight - 100) {
      clearInterval(fall);
      roller.remove();
      reduceHealth();
    }
  }, 30);

  roller.addEventListener("click", () => {
    clearInterval(fall);
    roller.remove();
    // You can add sound/effects here
  });
}

setInterval(summonDIO, 1500);
