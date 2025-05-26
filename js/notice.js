function showNotice(msg, topPercent = 20) {
  const notice = document.createElement("div");
  notice.textContent = msg;
  notice.classList.add("notice");
  notice.style.top = topPercent + "%";
  document.body.appendChild(notice);

  setTimeout(() => {
    notice.style.opacity = "0";
    setTimeout(() => notice.remove(), 1000);
  }, 1200);
}
