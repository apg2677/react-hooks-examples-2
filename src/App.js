import "./App.css";

import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState(() => {
    return localStorage.getItem("name") || "";
  });

  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  return (
    <div>
      <h2>Enter your name: </h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h3>Name: {name} </h3>
    </div>
  );
}

export default App;
