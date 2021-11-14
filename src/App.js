import React, { useContext } from "react";
import Content from "./components/content/Content";
import { ThemeContext } from "./components/Theme/ThemeContext";

//Context
// CompA => CompB => CompC
//-> CompA => CompC

// Theme: Dark / Light

// 1. Create context
// 2. Provider
// 3. Consumer

function App() {
  const context = useContext(ThemeContext);
  return (
      <>
        <button onClick={context.toggleTheme}>Toggle theme</button>
        <Content />
      </>
  );
}

export default App;
