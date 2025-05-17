// Fist follows mouse
document.addEventListener("mousemove", (e) => {
  fist.style.left = e.pageX - 50 + "px";
  fist.style.top = e.pageY - 50 + "px";
});
