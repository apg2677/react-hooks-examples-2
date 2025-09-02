import React, { useReducer } from "react";

function themeReducer(state, action) {
  switch (action.type) {
    case "toggle":
      return state === "light" ? "dark" : "light";
    default:
      throw new Error("Unknown Action");
  }
}

function App() {
  const [theme, dispatch] = useReducer(themeReducer, "light");
  return (
    <div
      style={{
        background: theme === "light" ? "white" : "darkgray",
        color: theme === "light" ? "black" : "white",
      }}
    >
      <h1>Theme: {theme}</h1>
      <button onClick={() => dispatch({ type: "toggle" })}>Toggle Theme</button>
    </div>
  );
}

export default App;
