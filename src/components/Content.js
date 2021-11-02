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

const tabs= ['posts', 'comments', 'photos']

function Content() {
  const [title, setTitle] = useState("");
  const [datas, setDatas] = useState([]);
  const [type, setType]   = useState("posts");
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((datas) => {
        setDatas(datas);
      });
  },[type]);

  return (
    <div>
      <div className="tabs">
      {tabs.map((tab)=>(
        <button 
        key={tab}
        className={type === tab ? "active" : " "}
        onClick={()=> setType(tab)}
        >
          {tab}
        </button>
      ))}
      </div>
      <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
      <h2>Title: {title}</h2>
      <h2>Type: {type}</h2>
      <ul>
        {datas.map((post) => (
          <li key={post.id}>{ post.email || post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Content;
