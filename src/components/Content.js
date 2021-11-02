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

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(()=>{
    const handleResize = ()=>{
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);


    return()=>{
      window.removeEventListener('resize', handleResize);
    }
  },[])
  return (
    <div>
      <h1>{width}</h1>
    </div>
  );
}

export default Content;
