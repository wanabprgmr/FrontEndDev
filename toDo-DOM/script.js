const body = document.body;

const form = document.createElement("form");
form.className = "main-form";

const input = document.createElement("input");
input.placeholder = "Enter an item to add";
input.className = "input";

const button = document.createElement("button");
button.innerText = "Add Item";

const ul = document.createElement("ul");

form.onsubmit = (e) => {
  e.preventDefault();
  var toDoItem = input.value.trim();
  if (!toDoItem) {
    alert("Please enter an item before adding!");
  } else {
    const li = document.createElement("li");
    li.innerText = toDoItem;
    ul.appendChild(li);
  }
  li.onclick = () => {
    li.remove();
  };
  input.value = "";
};

form.append(input, button);
body.append(form, ul);

