const form = document.querySelector(".form");
const todoList = document.querySelector(".todo-list");
const total = document.querySelector("#total");
const all = document.querySelector(".all");
const display = document.querySelector(".display");
const clearCompleted = document.querySelector(".clear-checked");
const footer = document.querySelector(".hide");
let i = 0;
form.addEventListener("submit", addTodo);
todoList.addEventListener("click", removeAndCompleteTask);
function addTodo(e) {
    e.preventDefault();
    const inputValue = form.addinput.value;
    if (form.addinput.value === "") return;
    form.addinput.value = "";
    generateTodoTemplate(inputValue);
  }
  function generateTodoTemplate(value) {
    const template = ` <li class="active-task"><div class="li-block">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon-check" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M5 12l5 5l10 -10"></path>
 </svg> <span class="text-content">${value}</span></div><div><svg xmlns="http://www.w3.org/2000/svg" class="remove-icon" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
 </svg></div></li>`;
    todoList.innerHTML += template;
    i++;
    total.textContent = i;
  }
  function removeAndCompleteTask(event) {
    if (event.target.classList.contains("remove-icon")) {
      event.target.closest("li").remove();
      i--;
      total.textContent = i;
    }
    if (event.target.classList.contains("icon-check")) {
      total.textContent = i;
      event.target.classList.toggle("checked");
      event.target.closest("li").classList.toggle("complete-task");
      event.target.closest("li").classList.toggle("active-task");
    }
  }