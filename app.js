const title = document.querySelector(".hello h1");
const titles = document.querySelectorAll(".hello h1");

function handleTitleClick() {
  console.log("h1 is " + titles[0].style.color + "!!!");
}
title.style.color = "red";
titles[0].addEventListener("click", handleTitleClick);
titles[1].addEventListener("click", handleTitleClick);
titles[2].addEventListener("click", handleTitleClick);
console.log(title.innerHTML);
console.log(titles[0]);
