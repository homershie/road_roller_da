// Spawns road roller
function summonDIO() {
  let randomNum = Math.floor(Math.random() * 100);
  const dio = document.createElement("img");
  dio.src = "./images/dio.png";
  dio.className = "dio";
  dio.style.left = randomNum + "%";
  dio.style.top = "50%";
  game.appendChild(dio);

  const roller = document.createElement("img");
  roller.src = "./images/roadroller.png";
  roller.className = "roller";
  roller.style.left = randomNum + "%";
  roller.style.top = "50%";
  game.appendChild(roller);

  let scale = 1;
  let fall = setInterval(() => {
    scale += 0.02; // 放大速度可調整
    if (!window.gameState.playing) return;
    const pos = roller.offsetTop;
    roller.style.transform = `scale(${scale})`;

    // 持續放大
    if (scale < 4) {
      scale += 0.02; // 放大速度可調整
    }

    // If hits bottom
    if (pos > window.innerHeight - 100) {
      clearInterval(fall);
      // 2秒後再移除roller並扣血
      setTimeout(() => {
        roller.remove();
        reduceHealth();
      }, 2000);
    }
  }, 30);

  // 過 5 秒後移除
  setTimeout(() => {
    clearInterval(fall);
    roller.remove();
    dio.remove();
  }, 5000);

  roller.addEventListener("click", () => {
    clearInterval(fall);
    roller.remove();
    dio.remove();
    // You can add sound/effects here
  });
}

setInterval(summonDIO, 1500);
