function addTask(text) {
 const list = document.getElementById("list");
 const item = document.createElement("li");
 item.textContent = text;
 list.appendChild(item);
}
addTask("Practice commits");