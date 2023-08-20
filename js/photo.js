const photoChangeBtn = document.querySelector(".photo");
const photoImg = document.querySelector(".photo img");
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
  "12.gif",
  "13.gif",
  "14.gif",
  "15.gif",
  "16.gif",
  "17.gif",
  "18.gif",
  "19.gif",
  "20.gif",
  "21.gif",
  "22.gif",
  "23.gif",
  "24.gif",
  "25.gif",
  "26.gif",
  "27.gif",
  "28.gif",
  "29.gif",
  "30.gif",
  "31.gif",
  "32.gif",
  "33.gif",
];

function photoChange() {
  const number = Math.floor(Math.random() * images.length);
  const chosenImage = images[number];
  photoImg.src = `img/${chosenImage}`;
}

photoChangeBtn.addEventListener("click", photoChange);

const number = Math.floor(Math.random() * images.length);
const chosenImage = images[number];
photoImg.src = `img/${chosenImage}`;
