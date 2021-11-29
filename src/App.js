import React from "react";
import { setTodoInput, addTodo, useStore } from "./store";

function App() {
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;
  const handleAdd = () => {
    dispatch(addTodo(todoInput));
  };

  return (
    <>
      <input
        value={todoInput}
        placeholder="Enter todo.."
        onChange={(e) => {
          dispatch(setTodoInput(e.target.value));
        }}
      ></input>

      <button onClick={handleAdd}>Add</button>

      {todos.map((todo,index)=>(
        <li key={index}>{todo}</li>
      ))}
    </>
  );
}

export default App;
