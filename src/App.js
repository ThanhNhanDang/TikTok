import React, { useReducer } from "react";
import "./App.css";
// useState
// 1. Init state: 0.
// 2. Actions: Up (state + 1) / Down (state - 1)

// useReducer
// 1. Init state: 0.
// 2. Actions: Up (state + 1) / Down (state - 1)
// 3. Reducer
// 4. Dispatch

//Init state
const initState = 0;

// Actions
const UP_ACTION = "up";
const DOWN_ACTION = "down";

// Reducer
const reducer = (state, action) => {
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error("Invalid action");
  }
};



function App() {
  const [count, disPatch] = useReducer(reducer, initState);

  return (
    <React.Fragment>
      <h1>{count}</h1>
      <button onClick={() => disPatch(DOWN_ACTION)}>Down</button>
      <button onClick={() => disPatch(UP_ACTION)}>Up</button>
    </React.Fragment>
  );
}

export default App;
