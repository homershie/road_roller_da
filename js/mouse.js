// Fist follows mouse
document.addEventListener("mousemove", (e) => {
  fist.style.left = e.pageX - 50 + "px";
  fist.style.top = e.pageY - 50 + "px";
});

// Fist hover effect
document.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("roller")) {
    fist.setAttribute("src", "./images/fist_g.png");
  }
});
document.addEventListener("mouseout", (e) => {
  if (e.target.classList.contains("roller")) {
    fist.setAttribute("src", "./images/fist.png");
  }
});
