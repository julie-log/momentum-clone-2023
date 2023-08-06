const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

function paintToDo(newToDo) {
  //   toDoList.innerHTML = `<li><span>${newToDo}</span></li>`;
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.append(span);
  span.innerText = newToDo;
  toDoList.appendChild(li);
}
function handleToDoSubmit(e) {
  e.preventDefault();
  localStorage.setItem("toDoList", toDoInput.value);
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
