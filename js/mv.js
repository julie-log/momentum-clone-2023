const songs = [
  {
    song: "-GQg25oP0S4",
    artist: "손오공",
  },
  {
    song: "gRnuFC4Ualw",
    artist: "HOT",
  },
  {
    song: "F9CrRG6j2SM",
    artist: "HIT",
  },
  {
    song: "9kpuOoIh3wU",
    artist: "FML",
  },
  {
    song: "ap14O5-G7UA",
    artist: "독 : Fear",
  },
  {
    song: "jjCBYlzwaY8",
    artist: "Anyone",
  },
  {
    song: "HdZdxocqzq4",
    artist: "Left & Right",
  },
  {
    song: "ADU8EiZBPog",
    artist: "Darl+ing",
  },
  {
    song: "VqfiJCCbTjY",
    artist: "Snap Shoot",
  },
  {
    song: "PQOJJ037ys8",
    artist: "My My",
  },
];
const iframe = document.querySelector(".left-top iframe");
const artist = document.querySelector("#songs span");
const changeBtn = document.querySelector(".left-top .random-button");
const urlBtn = document.querySelector(".left-top .url-button");
let url;
function randomSong() {
  const number = Math.floor(Math.random() * songs.length);
  artist.innerText = `Now playing - SEVENTEEN 🎵 ${songs[number].artist} 🎶`;
  iframe.src = `https://www.youtube.com/embed/${songs[number].song}?mute=1&autoplay=1`;
  url = `https://www.youtube.com/embed/${songs[number].song}?autoplay=1`;
}
randomSong();

function goMovie() {
  window.open(url);
}

changeBtn.addEventListener("click", randomSong);
urlBtn.addEventListener("click", goMovie);
