const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");
function onLoginSubmit(e) {
  e.preventDefault();
  console.log(e);
}
function handleLinkClick(e) {
  e.preventDefault();
  console.dir(e);
}
loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);
