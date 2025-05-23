function handleGameOver() {
  if (!window.gameState.playing) return;
  window.gameState.playing = false;

  // 停止壓路機生成
  if (window.rollerInterval) {
    clearInterval(window.rollerInterval);
    window.rollerInterval = null;
  }
  const swalOptions = {
    title: "遊戲結束",
    text: "你存活的時間是 " + window.gameState.score + " ！",
    icon: "info",
    iconColor: "#db0007",
    background: "#000",
    color: "#fff",
    confirmButtonText: "確定",
  };

  Swal.fire(swalOptions).then(() => {
    // 判斷是否破紀錄
    if (
      typeof window.gameState.topScore === "undefined" ||
      window.gameState.score > window.gameState.topScore
    ) {
      Swal.fire({
        title: "新紀錄！",
        text: "請輸入你的名字：",
        input: "text",
        background: "#FFF",
        color: "#000",
        inputPlaceholder: "你的名字",
        confirmButtonText: "儲存",
        inputAttributes: { maxlength: 8 },
        allowOutsideClick: false,
      }).then((result) => {
        window.gameState.topScore = window.gameState.score;
        let name =
          result.isConfirmed && result.value && result.value.trim()
            ? result.value.trim()
            : "Dr.FAT";
        window.gameState.topPlayer = name;
        // 這裡可根據你的UI更新排行榜
        // 根據難度選擇對應的排行榜元素
        let scoreEl, playerEl;
        switch (window.gameState.difficulty) {
          case "easy":
            scoreEl = elTopScoreEasy;
            playerEl = elTopPlayerEasy;
            break;
          case "normal":
            scoreEl = elTopScoreNormal;
            playerEl = elTopPlayerNormal;
            break;
          case "hard":
            scoreEl = elTopScoreHard;
            playerEl = elTopPlayerHard;
            break;
        }
        if (scoreEl) scoreEl.textContent = window.gameState.topScore;
        if (playerEl) playerEl.textContent = window.gameState.topPlayer;
        saveGameState();
        resetGameData();
      });
    } else {
      resetGameData();
    }
  });
}
