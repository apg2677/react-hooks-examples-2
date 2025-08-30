import "./App.css";
import { useEffect, useState } from "react";

function ConditionEffectComponent() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (count > 5) {
      setMessage("Count is greater than 5");
    } else {
      setMessage("");
    }
  }, [count]);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {message && <p>Message: {message}</p>}
    </div>
  );
}

function App() {
  return (
    <div>
      <ConditionEffectComponent />
    </div>
  );
}

export default App;
