import React, { useState } from "react";
import useLogger from "../customHooks/useLogger";

const StateTutorial = () => {
  const [inputValue, setInputValue] = useState("Pedro");
  const logs = useLogger(inputValue)

  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
    <h1>useState</h1>
      <input placeholder="enter something..." onChange={onChange} />
      {inputValue}
      
      <p>------------------------------------------------------</p>
    </div>
  );
};

export default StateTutorial;
