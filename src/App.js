import React, { useReducer, useRef } from "react";
import "./App.css";

// useReducer
// 1. Init state
const initState = {
  job: "",
  jobs: [],
};

// 2. Actions
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";

const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload,
  };
};

const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload,
  };
};

const deleteJob = (payload) => {
  return {
    type: DELETE_JOB,
    payload,
  };
};

// 3. Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload,
      };
    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload], //trong es6 đối số đầu là bảo lưu cái cũ,
        // cái sau là thêm vào phần tử mới
      };
    case DELETE_JOB:
      const newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1);
      return {
        ...state,
        jobs: newJobs, //trong es6 đối số đầu là bảo lưu cái cũ,
        // cái sau là thêm vào phần tử mới
      };
    default:
      throw new Error("Invalid action.");
  }
};
// 4. Dispatch

function App() {
  const [state, dispath] = useReducer(reducer, initState);
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

export default App;
