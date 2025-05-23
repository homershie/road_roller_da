function alertDifficulty() {
  return Swal.fire({
    title: "難度設定",
    text:
      "目前難度設定為： " +
      window.gameState.difficulty.toString().toUpperCase(),
    background: "#FFF",
    color: "#000",
    allowOutsideClick: true,
  });
}
