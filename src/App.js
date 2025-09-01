import React, { createContext, useContext, useState } from "react";
import "./App.css";

const ThemeContext = createContext();
const AuthContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState(null);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <AuthContext.Provider value={{ user, setUser }}>
        <Main />
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
}

function Main() {
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(AuthContext);

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
      }}
    >
      <h1>{user ? `Hello ${user.name}` : "Welcome!"}</h1>
      <ThemeToggle />
      <LoginButton />
    </div>
  );
}

function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Toggle Theme
    </button>
  );
}

function LoginButton() {
  const { user, setUser } = useContext(AuthContext);

  return user ? (
    <button onClick={() => setUser(null)}>Logout</button>
  ) : (
    <button onClick={() => setUser({ name: "John" })}>Login</button>
  );
}
export default App;
