const API_KEY = "8cf9a5326b05f7d65055185e5fe65e5e";
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.latitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric&lang=kr`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const name = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      name.innerText = data.name;
      weather.innerText = `${data.weather[0].main} @ ${data.main.temp}`;
    });
}
function onGeoError() {
  alert("Can't find you... No weather for you...");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
