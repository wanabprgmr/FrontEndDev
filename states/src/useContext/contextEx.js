import React, { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";

export const AppContext = createContext(null);

function ContextTutorial() {
  const [username, setUsername] = useState("");

  return (
    <>
    <h1>createContext</h1>
    <AppContext.Provider value={{ username, setUsername }}>
      <Login /> <User />
    </AppContext.Provider>
    <p>------------------------------------------------------</p>
    </>)
}

export default ContextTutorial;
