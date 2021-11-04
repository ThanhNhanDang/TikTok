import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//Fake comments
function emitComment(id) {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`lession-${id}`, {
        detail: `Nội dung comment của lession ${id}`,
      })
    );
  }, 2000);
}

emitComment(1);
emitComment(2);
emitComment(3);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
