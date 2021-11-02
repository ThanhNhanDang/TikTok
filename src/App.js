import React, { useState } from "react";
import Content from "./components/Content";
import "./App.css"
function App() {
  const [mounted, setMounted] = useState(false);
  return (
    <React.Fragment>
      <div className="row">
        <button onClick={() => setMounted(!mounted)}>
          Toggle
        </button>
        {mounted && <Content />}
      </div>
    </React.Fragment>
  );
}

export default App;
