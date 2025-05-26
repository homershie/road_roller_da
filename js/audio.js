document.addEventListener("DOMContentLoaded", () => {
  // BGM 音量控制
  const bgmVolume = document.getElementById("bgm-volume");
  const bgmMute = document.getElementById("bgm-mute");
  bgmVolume.addEventListener("input", (e) => {
    bgm.volume = e.target.value;
  });
  bgmMute.addEventListener("click", () => {
    bgm.muted = !bgm.muted;
    bgmMute.style.color = bgm.muted ? "white" : "grey";
  });

  // SFX 音量控制
  const sfxVolumeSlider = document.getElementById("sfx-volume");
  const sfxMute = document.getElementById("sfx-mute");
  sfxVolumeSlider.addEventListener("input", (e) => {
    sfxVolume = e.target.value;
    buttonSfx.volume = sfxVolume;
    dioSfx.volume = sfxVolume;
    hitSfxList.forEach((sfx) => (sfx.volume = sfxVolume));
  });
  sfxMute.addEventListener("click", () => {
    const muted = !buttonSfx.muted;
    buttonSfx.muted = muted;
    dioSfx.muted = muted;
    hitSfxList.forEach((sfx) => (sfx.muted = muted));
    sfxMute.style.color = muted ? "white" : "grey";
  });

  // 所有選單按鈕 hover 播放音效
  document.querySelectorAll(".button").forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      buttonSfx.currentTime = 0;
      buttonSfx.play();
    });
  });
});
