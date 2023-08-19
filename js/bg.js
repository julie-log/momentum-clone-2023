const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
  "#f7cac9",
  "#92a8d1",
];

const body = document.querySelector("body");
const button = document.querySelector("button");

function handleBackground() {
  const random = Math.floor(Math.random() * colors.length);
  const first = colors[random];
  const newColor = colors.filter((item) => item !== first);
  const second = newColor[random];

  body.style.background = `linear-gradient(45deg, ${first}, ${second})`;
  console.log(first, second);
}
handleBackground();
button.addEventListener("click", handleBackground);
