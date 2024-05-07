//bom challenge

let add_button = document.querySelector(".add");
let output_div = document.querySelector(".tasks");
let input_task_name = document.querySelector(".input");

add_button.addEventListener("click", function (e) {
  create_task();
});

window.addEventListener("load", function (event) {
  if (
    window.localStorage.getItem("tasks") &&
    window.localStorage.getItem("tasks").length > 0
  ) {
    let tasks = JSON.parse(window.localStorage.getItem("tasks"));
    tasks.forEach((task) => {
      let out_div = initializeTaskCss();
      let task_text = create_task_text(task["title"]);
      out_div.appendChild(task_text);
      out_div.appendChild(create_delete_button());
      output_div.appendChild(out_div);
    });
  }
});

function create_task() {
  if (input_task_name.value !== "") {
    let counter = output_div.children.length;
    let out_div = initializeTaskCss();
    let task_text = create_task_text();
    out_div.appendChild(task_text);
    out_div.appendChild(create_delete_button());
    output_div.appendChild(out_div);
    if (!window.localStorage.getItem("tasks")) {
      let tasks = [];
      tasks.push({ id: counter + 1, title: task_text.textContent });
      add_to_local_storage(tasks);
    } else {
      let tasks = JSON.parse(window.localStorage.getItem("tasks"));
      tasks.push({ id: counter + 1, title: task_text.textContent });
      add_to_local_storage(tasks);
    }
  } else {
    alert("Please Enter Task Name");
  }
}

function create_delete_button() {
  let delete_button = document.createElement("button");
  delete_button.classList.add("delete-task");
  delete_button.style.backgroundColor = "#FC1601";
  delete_button.style.color = "white";
  delete_button.style.border = "5px solid white";
  delete_button.style.cursor = "pointer";
  delete_button.style.borderRadius = "10px";
  delete_button.appendChild(document.createTextNode("Delete"));
  delete_task_litener(delete_button);
  return delete_button;
}

function create_task_text(task_text) {
  if (task_text) {
    return document.createTextNode(task_text);
  } else {
    let task_text = document.createTextNode(input_task_name.value);
    return task_text;
  }
}

function delete_task_litener(delete_button) {
  delete_button.addEventListener("click", function (event) {
    let delete_buttons = document.querySelectorAll(`.delete-task`);
    let index = Array.from(delete_buttons).indexOf(this);
    delete_from_local_storage(index);
    delete_button.parentElement.remove();
  });
}

function add_to_local_storage(tasks) {
  window.localStorage.setItem("tasks", JSON.stringify(tasks));
}

function delete_from_local_storage(index) {
  let tasks = JSON.parse(window.localStorage.getItem("tasks"));
  tasks = tasks.filter(function (task, ind) {
    if (ind !== index) {
      return task["id"];
    }
  });
  window.localStorage.setItem("tasks", JSON.stringify(tasks));
}

function initializeTaskCss() {
  let out_div = document.createElement("div");
  out_div.style.display = "flex";
  out_div.style.justifyContent = "space-between";
  out_div.style.alignItems = "center";
  out_div.style.backgroundColor = "white";
  out_div.style.padding = "5px 10px";
  out_div.style.margin = "10px";
  out_div.style.borderRadius = "5px";
  return out_div;
}
