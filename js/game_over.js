function handleGameOver() {
  if (!window.gameState.playing) return;
  window.gameState.playing = false;

  const swalOptions = {
    title: "遊戲結束",
    text: "你存活了 " + window.gameState.score + " 秒！",
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
        if (typeof elTopScore !== "undefined" && elTopScore)
          elTopScore.textContent = window.gameState.topScore;
        if (typeof elTopPlayer !== "undefined" && elTopPlayer)
          elTopPlayer.textContent = window.gameState.topPlayer;
        if (typeof saveGameState === "function") saveGameState();
        resetGameData();
      });
    } else {
      resetGameData();
    }
  });
}
