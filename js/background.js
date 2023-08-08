const images = [
  "00.gif",
  "01.gif",
  "02.gif",
  "03.gif",
  "04.gif",
  "05.gif",
  "06.gif",
  "07.gif",
  "08.gif",
  "09.gif",
  "10.gif",
  "11.gif",
];

const number = Math.floor(Math.random() * images.length);
const chosenImage = images[number];
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);
