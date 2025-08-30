import "./App.css";
import { useEffect, useState, useContext, createContext } from "react";

const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return (
    <div>
      <h1>Toolbar</h1>
      <ToggleTheme />
    </div>
  );
}

function ToggleTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <p>Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
export default App;
