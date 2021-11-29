import React from "react";
import { useStore, actions } from "./store";

function App() {
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;
  console.log('todoInput: ', todoInput);
  return (
    <>
      <input 
      value={todoInput}
      placeholder="Enter todo.."
      onChange = {e=>{
        dispatch(actions.setTodoInput(e.target.value))
      }}
      ></input>
    </>
  );
}

export default App;
