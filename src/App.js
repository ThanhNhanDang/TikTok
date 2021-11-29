import React, { useRef } from "react";
import Videos from "./Videos";

function App() {
  const videoRef = useRef();
  
  const handlePlay = () => {
    videoRef.current.play();
  };
  const handlePause = () => {
    videoRef.current.pause();
  };
  return (
    <>
      <h1>Hello</h1>
      <Videos ref={videoRef} />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </>
  );
}

export default App;
