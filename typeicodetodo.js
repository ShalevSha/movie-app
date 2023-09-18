function getTodo() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => data.forEach((todo) => addTodoDom(todo)));
}
function addTodoDom(todo) {
  const div = document.createElement("div");
  div.appendChild(document.createTextNode(todo.title));
  document.getElementById("to-do").appendChild(div);
  div.classList.add("task");
  div.setAttribute("data-id", todo.id);
  if (todo.completed) {
    div.classList.add("complete");
  }
}
function createTodo(e) {
  e.preventDefault();
  const input = document.querySelector("input");
  const newTodo = {
    title: input.value,
    completed: false,
  };
  fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "post",
    body: JSON.stringify(newTodo),
    Headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => addTodoDom(newTodo));
}

function toggleComplete(e) {
  if (e.target.classList.contains("task")) {
    e.target.classList.toggle("complete");
    const dataId = e.target.getAttribute("data-id");
    const ifComplete = e.target.classList.contains("complete");
  }

  updatetask(
    e.target.getAttribute("data-id"),
    e.target.classList.contains("complete")
  );
}
function updatetask(dataId, ifcompleted) {
  fetch("https://jsonplaceholder.typicode.com/todos/" + dataId, {
    method: "put",
    body: JSON.stringify({
      id: dataId,
      completed: ifcompleted,
    }),
    headers: {
      "Comtent-Type": "application/json",
    },
  });
}
function deleteTask(e) {
  if (e.target.classList.contains("task")) {
    const dataId = e.target.getAttribute("data-id");
    fetch("https://jsonplaceholder.typicode.com/todos/" + dataId, {
      method: "delete",
    }).then((res) => e.target.remove());
  }
}
getTodo();
document.querySelector("form").addEventListener("submit", createTodo);
document.querySelector("#to-do").addEventListener("click", toggleComplete);
document.querySelector("#to-do").addEventListener("dblclick", deleteTask);
