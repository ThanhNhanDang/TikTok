import React, { useReducer, useRef } from "react";
import "../../App.css";
import { addJob, deleteJob, setJob } from "./actions";
import logger from "./logger";
import reducer, { initState } from "./reducer";

// useReducer
// 1. Init state

// 2. Actions


// 3. Reducer

// 4. Dispatch

function TodoApp() {
  const [state, dispath] = useReducer(logger(reducer), initState);
  const { job, jobs } = state;
  const inputRef = useRef();

  const handleSubmit = () => {
    dispath(addJob(job));
    dispath(setJob(""));
    inputRef.current.focus();
  };

  return (
    <React.Fragment>
      <h3>Todo</h3>
      <input
        value={job}
        ref={inputRef}
        onChange={(e) => {
          dispath(setJob(e.target.value));
        }}
        placeholder="Enter todo..."
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <span onClick={() => dispath(deleteJob(index))}> &times;</span>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default TodoApp;
