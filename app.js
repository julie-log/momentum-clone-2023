const title = document.querySelector(".hello h1");

function handleTitleClick() {
  const currentColor = title.style.color;
  let newColor;
  if (currentColor !== "red") {
    newColor = "red";
  } else {
    newColor = "white";
  }
  title.style.color = newColor;
}

title.addEventListener("click", handleTitleClick);
