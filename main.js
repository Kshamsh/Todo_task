const form = document.querySelector(".form");
const todoList = document.querySelector(".todo-list");
const total = document.querySelector("#total");
const all = document.querySelector(".all");
const display = document.querySelector(".display");
const clearCompleted = document.querySelector(".clear-checked");
const footer = document.querySelector(".hide");
let i = 0;
form.addEventListener("submit", addTodo);
form.addEventListener("click", checkAll)
todoList.addEventListener("click", removeAndCompleteTask);
display.addEventListener("click", filterButtons);
clearCompleted.addEventListener("click", removeCompletedTasks);
function addTodo(e) {
    e.preventDefault();
    const inputValue = form.addinput.value;
    if (form.addinput.value === "") return;
    form.addinput.value = "";
    generateTodoTemplate(inputValue);
  }
  function generateTodoTemplate(value) {
    const template = ` <li class="task active-task"><div class="li-block">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon-check" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M5 12l5 5l10 -10"></path>
 </svg> <div class="text-content">${value}</div></div><div><svg xmlns="http://www.w3.org/2000/svg" class="remove-icon" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
 </svg></div></li>`;
    todoList.innerHTML += template;
    i++;
    total.textContent = i;
    if (total.textContent > 0) {
      footer.classList.add("show");
    }
  }
  function removeAndCompleteTask(event) {
    if (event.target.classList.contains("remove-icon")) {
      event.target.closest("li").remove();
      i--;
      total.textContent = i;
      if (!document.getElementsByClassName("task").length) {
        footer.classList.remove("show");
      }
    }
    if (event.target.classList.contains("icon-check")) {
      total.textContent = i;
      event.target.classList.toggle("checked");
      event.target.closest("li").classList.toggle("complete-task");
      event.target.closest("li").classList.toggle("active-task");
      let a = document.getElementsByClassName("complete-task");
      let b = document.getElementsByClassName("task");
      i = b.length - a.length;
      total.textContent = i;
    }
  }
  function filterButtons(event) {
    const arr = Array.from(todoList.children);
    if (event.target.classList.contains("all")) {
      arr.forEach((element) => {
        if (element.classList.contains("task")) {
          element.style.display = "flex";
        }
      });
    } else if (event.target.classList.contains("completed")) {
      arr.forEach((element) => {
        if (element.classList.contains("task")) {
          element.style.display = "none";
        }
      });
      arr.forEach((element) => {
        if (element.classList.contains("complete-task")) {
          element.style.display = "flex";
        }
      });
    } else if (event.target.classList.contains("active")) {
      arr.forEach((element) => {
        if (element.classList.contains("complete-task")) {
          element.style.display = "none";
        }
      });
      arr.forEach((element) => {
        if (element.classList.contains("active-task")) {
          element.style.display = "flex";
        }
      });
    }
  }
  function removeCompletedTasks(event) {
    if (event.target.classList.contains("clear-checked"))
      [...document.getElementsByClassName("complete-task")].forEach((element) => {
        element.remove();
      });
    if (!document.getElementsByClassName("task").length) {
      footer.classList.remove("show");
      total.textContent = 0;
    }
  }
  function checkAll(event){
    const arr = Array.from(todoList.children);
    if(event.target.classList.contains("icon")){
      event.target.classList.toggle("check-all-icon")
      arr.forEach((element) => element.classList.toggle("complete-task"))
      arr.forEach((element) => element.classList.toggle("active-task"))
      arr.forEach((element) => element.firstElementChild.firstElementChild.classList.toggle("checked"))
    }
  }
  total.textContent = i;