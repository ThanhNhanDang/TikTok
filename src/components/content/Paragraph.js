import React, { useContext } from "react";
import "../../App.css";
import { ThemeContext } from "../Theme/ThemeContext";

function Paragraph() {
  const context = useContext(ThemeContext);

  return (
    <p className={context.theme}>
      hello hello hello hello hello hello hellohellohello hello
    </p>
  );
}

export default Paragraph;
