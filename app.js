const title = document.querySelector(".hello h1");

function handleTitleClick() {
  title.style.color = "red";
}
function handleMouseEnter() {
  title.innerText = "mouse is here !!!";
}
function handleMouseLeave() {
  title.innerText = "mouse is leave !!!";
}
function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy() {
  alert("copied!");
}
function handleWindowOffline() {
  alert("no wifi....");
}
function handleWindowOnline() {
  alert("connected wifi....");
}
title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
