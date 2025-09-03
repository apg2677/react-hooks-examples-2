import React, { useReducer, useState } from "react";
import "./App.css";
function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        { id: Date.now(), text: action.text, completed: false },
      ];
    case "toggle":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo,
      );

    case "delete":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => dispatch({ type: "add", text })}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
            <button onClick={() => dispatch({ type: "toggle", id: todo.id })}>
              Toggle
            </button>
            <button onClick={() => dispatch({ type: "delete", id: todo.id })}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
