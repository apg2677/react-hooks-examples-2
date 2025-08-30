import "./App.css";
import { useEffect, useState, useContext, createContext } from "react";

const AuthContext = createContext();

function App() {
  const [user, setUser] = useState(null);

  const login = (username) => {
    setUser({ name: username });
  };
  const logout = () => {
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <Navbar />
      <MainContent />
    </AuthContext.Provider>
  );
}

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav>
      <p>{user ? `Welcome, ${user.name}` : "Not logged in"}</p>
      {user && <button onClick={logout}>Logout</button>}
    </nav>
  );
}

function MainContent() {
  const { user, login } = useContext(AuthContext);

  return (
    <div>
      {user ? (
        <p>Hello, {user.name}! enjoy</p>
      ) : (
        <button onClick={() => login("JohnDoe")}>Login</button>
      )}
    </div>
  );
}
export default App;
