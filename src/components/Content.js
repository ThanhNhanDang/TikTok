import React, { useEffect, useRef, useState } from "react";
import "../App.css";

//useRef
// Lưu một giá trị qua một tham chiếu bên ngoài commponent
function Content() {
  const [count, setCount] = useState(60);

  const timerId = useRef()
  const prevCount = useRef()
  const h1Ref = useRef()

  useEffect(()=>{
    prevCount.current = count
  },[count])

  useEffect(()=>{
    const rect = h1Ref.current.getBoundingClientRect()
    console.log(rect)
  })

  const handleStart = () => {
    timerId.current = setInterval(()=>{
      setCount(prevCount=>prevCount-1)
    },1000)
  };

  const handleStop = () => {
    clearInterval(timerId.current);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1 ref={h1Ref}>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <h2>
        {count} : {prevCount.current}
      </h2>
    </div>
  );
}

export default Content;
