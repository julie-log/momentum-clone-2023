const clock = document.querySelector("#clock");
clock.innerHTML = "00:00:00";

function getClock() {
  const date = new Date();
  clock.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
getClock();
setInterval(getClock, 1000);
