import React, { useEffect, useLayoutEffect, useState } from "react";
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

///////////////////////

// useEffect
// 1. Cập nhật lại state
// 2. Cập nhật lại DOM (mutated)
// 3. Render lại UI
// 4. Gọi cleanup nep deps thay đổi
// 5. Gọi useEffect callback

// useLayoutEffect
// 1. Cập nhật lại state
// 2. Cập nhật lại DOM (mutated)
// 3. Gọi cleanup nếu deps thay đổi (sync)
// 4. Gọi useLayoutEffect callback (sync)
// 5. Render lai UI

function Content() {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    if (count > 3) setCount(0);
  }, [count]);

  const handle = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handle}>Click me!</button>
    </div>
  );
}

export default Content;
