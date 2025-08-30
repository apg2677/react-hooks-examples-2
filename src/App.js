import "./App.css";
import { useEffect, useState } from "react";

function CountdownTimer({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    if (count === 0) return;

    const timer = setTimeout(() => {
      setCount(count - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count]);
  return (
    <div>
      <h2>Countdown: {count}</h2>
      {count === 0 && <p>Countdown Complete!</p>}
    </div>
  );
}

function App() {
  return (
    <div>
      <CountdownTimer initialCount={10} />
    </div>
  );
}

export default App;
