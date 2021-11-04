import React, { useEffect, useState } from "react";
import "../App.css";
// 1. useEffect (callback)
//  - Callback luôn gọi khi component re-render
//  - Gọi callback sau khi component thêm element vào DOM
// 2. useEffect (callback,[])
//  - Chỉ gọi callback 1 lần mỗi khi component được mounted
// 3. useEffect (callback,[deps])
//  - Callback sẽ được gọi lại mỗi khi deps thay đổi
//================

// 1. Callback luôn gọi khi component được mounted

function Content() {
  const [countdown, setCountdown] = useState(180);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCountdown((prevState) => prevState - 1); 
    }, 1000);

    return ()=>clearInterval(timerId);
  }, []);

  return (
    <div>
      <h1>{countdown}</h1>
    </div>
  );
}

export default Content;
