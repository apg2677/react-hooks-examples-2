import React, { useReducer } from "react";

function stepReducer(state, action) {
  switch (action.type) {
    case "next":
      return { ...state, step: Math.min(state.step + 1, state.totalSteps) };
    case "prev":
      return { ...state, step: Math.max(state.step - 1, 1) };
    case "reset":
      return { ...state, step: 1 };
    default:
      throw new Error("Uknown Action!");
  }
}

function App() {
  const initialState = { step: 1, totalSteps: 3 };
  const [state, dispatch] = useReducer(stepReducer, initialState);

  return (
    <div>
      <h1>
        Step {state.step} of {state.totalSteps}
      </h1>
      <button
        disabled={state.step === 1}
        onClick={() => dispatch({ type: "prev" })}
      >
        Decrease Step
      </button>
      <button
        disabled={state.step === state.totalSteps}
        onClick={() => dispatch({ type: "next" })}
      >
        Increase Step
      </button>

      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default App;
