const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

function handleToDoSubmit(e) {
  e.preventDefault();
  localStorage.setItem("toDoList", toDoInput.value);
  toDoInput.value = "";
  console.log(localStorage.getItem("toDoList"));
}

toDoForm.addEventListener("submit", handleToDoSubmit);
