import React, { useReducer } from "react";

function accordianReducer(state, action) {
  switch (action.type) {
    case "toggle":
      return state === action.id ? null : action.id;
    default:
      throw new Error("Unknown Action!");
  }
}

function App() {
  const [openSection, dispatch] = useReducer(accordianReducer, null);
  const sections = [
    { id: 1, title: "Section 1", content: "Content 1" },
    { id: 2, title: "Section 2", content: "Content 2" },
    { id: 3, title: "Section 3", content: "Content 3" },
  ];

  return (
    <div>
      {sections.map((section) => (
        <div key={section.id}>
          <h3 onClick={() => dispatch({ type: "toggle", id: section.id })}>
            {section.title}
          </h3>{" "}
          {openSection === section.id && <p>{section.content}</p>}
        </div>
      ))}
    </div>
  );
}

export default App;
