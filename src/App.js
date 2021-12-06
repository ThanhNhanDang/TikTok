import React, { useRef } from "react";
import Button from "./components/Button/Button";

function App() {
  
  return (
    <>
      <Button/>
      <Button primary/>
      <Button primary disabled/>
    </>
  );
}

export default App;
