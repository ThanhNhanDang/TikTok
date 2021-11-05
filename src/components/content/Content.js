import React, { useEffect, useRef, useState, memo } from "react";
import "../../App.css";
import Video from '../video/Video'

// 1. memo() -> Higher Order Commponent (HOC)
// 2. useCallback()

function Content() {
  
  const [count, setCount] = useState(0);

  const increase = ()=>{
    setCount(count + 1)
  }

  return (
    <div>
      <h1>{count}</h1>
    <button onClick={increase}>Click me!</button>
    <Video/>
    </div>
  );
}

export default Content;
