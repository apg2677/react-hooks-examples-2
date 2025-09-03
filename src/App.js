import React, { useReducer, useState } from "react";

function accountReducer(state, action) {
  switch (action.type) {
    case "deposit":
      return { ...state, balance: state.balance + action.amount };
    case "withdraw":
      return { ...state, balance: state.balance - action.amount };
    case "reset":
      return { balance: 0 };
    default:
      throw new Error("Unknown Action");
  }
}

function App() {
  const [state, dispatch] = useReducer(accountReducer, { balance: 0 });
  const [inputAmount, setInputAmount] = useState(0);
  return (
    <div>
      <h1>Bank Account</h1>
      <p>Balance: ${state.balance}</p>
      <label>Amount:</label>
      <input
        type="number"
        value={inputAmount}
        onChange={(e) => setInputAmount(e.target.value)}
      />
      <button
        onClick={() => dispatch({ type: "deposit", amount: +inputAmount })}
      >
        Deposit
      </button>
      <button
        onClick={() => dispatch({ type: "withdraw", amount: +inputAmount })}
      >
        Withdraw
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default App;
