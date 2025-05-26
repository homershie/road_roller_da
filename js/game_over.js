function handleGameOver() {
  if (!window.gameState.playing) return;
  window.gameState.playing = false;

  // 停止壓路機生成
  if (window.rollerInterval) {
    clearInterval(window.rollerInterval);
    window.rollerInterval = null;
  }

  // 先計算分數並存進 gameState
  window.gameState.score = calculateScore(
    window.gameState.rollerCount,
    window.gameState.seconds,
    window.gameState.difficulty
  );
  scoreEl.textContent = formatNumber(window.gameState.score);

  const swalOptions = {
    title: "遊戲結束",
    text:
      "你的分數是 " +
      calculateScore(
        window.gameState.rollerCount,
        window.gameState.seconds,
        window.gameState.difficulty
      ) +
      " ！",
    icon: "info",
    iconColor: "#db0007",
    background: "#000",
    color: "#fff",
    confirmButtonText: "確定",
  };

  Swal.fire(swalOptions).then(() => {
    // 取得排行榜
    const ranking = JSON.parse(localStorage.getItem("ranking") || "[]");
    // 取得第三名分數（如果還沒三筆，設為0）
    const thirdScore = ranking[2] ? ranking[2].score : 0;

    // 判斷是否破紀錄
    if (
      ranking.length < 3 || // 排行榜還沒滿三筆
      window.gameState.score > thirdScore // 分數高於第三名
    ) {
      Swal.fire({
        title: "新紀錄！",
        text: "請輸入你的名字：",
        input: "text",
        background: "#FFF",
        color: "#000",
        inputPlaceholder: "你的名字",
        confirmButtonText: "儲存",
        inputAttributes: { maxlength: 10 },
        allowOutsideClick: false,
      }).then((result) => {
        window.gameState.topScore = window.gameState.score;
        let name =
          result.isConfirmed && result.value && result.value.trim()
            ? result.value.trim()
            : "Jotaro";
        window.gameState.topPlayer = name;
        // 新增：加入排行榜
        addScore(name, window.gameState.score);
        // 更新排行榜顯示
        updateRankingDisplay();
        saveTopScore();
        resetGameData();
        body.style.background =
          "url(./images/bg_menu.png) no-repeat top center";
        body.style.backgroundSize = "cover";
      });
    } else {
      resetGameData();
      body.style.background = "url(./images/bg_menu.png) no-repeat top center";
      body.style.backgroundSize = "cover";
    }
  });
}
