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

const lession = [
  {
    id: 1,
    name: "Bai Hoc 1",
  },
  {
    id: 2,
    name: "Bai hoc 2",
  },
  {
    id: 3,
    name: "bai hoc 3",
  },
];

function Content() {
  const [lessionId, setLessionId] = useState(1);

  useEffect(()=>{

    const handleComment = ({detail})=>{
      console.log(detail);
    }

    window.addEventListener(`lession-${lessionId}`, handleComment)
    return()=>{
      window.removeEventListener(`lession-${lessionId}`, handleComment)
    }
  }, [lessionId])

  return (
    <div>
      <ul>
        {lession.map((lession) => (
          <li
            key={lession.id}
            style={{
              color: lessionId === lession.id ? "red" : "#333",
            }}
            onClick={() => setLessionId(lession.id)}
          >{lession.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Content;
