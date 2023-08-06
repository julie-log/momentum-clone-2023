const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const toDos = [];

function deleteToDo(e) {
  const li = e.target.parentElement;
  li.remove();
}

function saveToDos(toDos) {
  localStorage.setItem("toDoList", JSON.stringify(toDos));
}
function paintToDo(newToDo) {
  //   toDoList.innerHTML = `<li><span>${newToDo}</span></li>`;
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newToDo;
  const button = document.createElement("button");
  button.innerText = "✖";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}
function handleToDoSubmit(e) {
  e.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newToDo);
  paintToDo(newToDo);
  saveToDos(toDos);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
