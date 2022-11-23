const form = document.getElementById("todo");
let todos = [];
function addTodo() {
  let todo = form.value;
  if (todo != "") {
    todos.push(todo);
    localStorage.setItem("todos", todos);
  } else {
    alert("This application does not accept a null or empty value");
  }
}

function getTodos() {}
