// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";

export default function App() {
  return React.createElement(Form);
}

function Form() {
  const [items, setItems] = useState([]);

  const handleAddItem = (e) => {
    e.preventDefault();
    const input = document.getElementById("inputField");
    const newItem = input.value.trim();
    if (!newItem) {
      alert("Please enter an item before adding!");
      return;
    }
    setItems([...items, newItem]);
    input.value = "";
  };

  const handleRemoveItem = (index) => {
    setItems(items.filter((item, i) => i !== index));
  };

  const inputField = React.createElement("input", {
    id: "inputField",
    type: "text",
    placeholder: "Enter TODO items.",
  });

  const addButton = React.createElement(
    "button",
    { type: "submit" },
    "Add Item"
  );

  const formElement = React.createElement(
    "form",
    { onSubmit: handleAddItem },
    inputField,
    addButton
  );

  const listItems = items.map((item, index) =>
    React.createElement(
      "li",
      {
        key: index,
        onClick: () => handleRemoveItem(index),
      },
      item
    )
  );

  const itemList = React.createElement("ul", null, listItems);

  return React.createElement("div", null, formElement, itemList);
}

