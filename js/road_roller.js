function summonDIO() {
  let randomNum = Math.floor(Math.random() * 30 + 20);
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
  roller.style.width = "100px";
  game.appendChild(roller);

  // 設定 roller 的 hp
  roller.dataset.hp = window.gameState.rollerHp;

  // 目標位置（隨機）
  const targetLeft = Math.random() * 80; // 0~80%
  const targetTop = Math.random() * 80; // 0~80%
  let startLeft = randomNum;
  let startTop = 50;

  // 難度時間參數
  let elapsed = (Date.now() - window.gameState.startTime) / 1000; // 秒數
  // 速度隨著時間增加
  let speedFactor = 4 + Math.floor(elapsed / 10); // 每10秒加1速度
  let hpFactor = Math.min(
    window.gameState.rollerHp + Math.floor(elapsed / 30),
    10
  ); // 每30秒+1 HP，最多10
  // 更新 roller 的 hp
  roller.dataset.hp = hpFactor;

  let width = 100;
  let progress = 0; // 0~1
  let throwInterval = setInterval(() => {
    if (!window.gameState.playing) return;
    width += speedFactor;
    progress += 0.012;

    let currentLeft = startLeft + (targetLeft - startLeft) * progress;
    let currentTop = startTop + (targetTop - startTop) * progress;

    roller.style.width = width + "px";
    roller.style.height = "auto";
    roller.style.left = currentLeft + "%";
    roller.style.top = currentTop + "%";

    // 當寬度到達 400 時，扣血並移除
    if (width >= 400) {
      clearInterval(throwInterval);
      roller.remove();
      dio.remove();
      reduceHealth();
    }
  }, 30);

  // 5 秒後自動移除
  setTimeout(() => {
    clearInterval(throwInterval);
    roller.remove();
    dio.remove();
  }, 5000);

  // 滑鼠點擊 roller 時，更換圖片
  roller.addEventListener("mousedown", () => {
    roller.setAttribute("src", "./images/roadroller_e.png");
    // 只要 mouseup 就還原
    const onMouseUp = () => {
      roller.setAttribute("src", "./images/roadroller.png");
      document.removeEventListener("mouseup", onMouseUp);
    };
    document.addEventListener("mouseup", onMouseUp);
  });

  // 點擊 roller 扣 hp，hp 歸零才移除
  roller.addEventListener("click", () => {
    fist.setAttribute("src", "./images/fist.png");
    let hp = parseInt(roller.dataset.hp, 10);
    hp--;
    roller.dataset.hp = hp;
    if (hp <= 0) {
      clearInterval(throwInterval);
      window.gameState.rollerCount++;
      window.gameState.score = calculateScore(
        window.gameState.rollerCount,
        window.gameState.seconds,
        window.gameState.difficulty
      );
      scoreEl.textContent = formatNumber(window.gameState.score);
      roller.remove();
      dio.remove();
      // 可加分數或特效
    }
  });
}
