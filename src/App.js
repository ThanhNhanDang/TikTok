import React, { useState, useCallback } from "react";
import Content from "./components/content/Content";
import "./App.css";
function App() {
  const [mounted, setMounted] = useState(false);
  const [count, setCount] = useState(0);

  const handleIncrease = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
  return (
    <React.Fragment>
      <div className="row">
        <button onClick={() => setMounted(!mounted)}>Toggle</button>
        {mounted && <h1>{count}</h1>}
        {mounted && <Content onIncrease={handleIncrease} />}
      </div>
    </React.Fragment>
  );
}

export default App;
