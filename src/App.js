import "./App.css";
import { useEffect, useState, useContext, createContext } from "react";

const UserContext = createContext();

function App() {
  const [user, setUser] = useState({ name: "John" });
  return (
    <UserContext.Provider value={user}>
      <Dashboard />
    </UserContext.Provider>
  );
}

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Sidebar />
    </div>
  );
}

function Sidebar() {
  return (
    <div>
      <h2>Sidebar</h2>
      <Profile />
    </div>
  );
}

function Profile() {
  const user = useContext(UserContext);
  return (
    <div>
      <h2>Profile</h2>
      <p>User Name: {user.name} </p>
    </div>
  );
}
export default App;
