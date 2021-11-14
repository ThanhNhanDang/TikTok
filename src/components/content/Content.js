import React, { useEffect, useRef, useState, memo } from "react";
import "../../App.css";
import Paragraph from "./Paragraph";

function Content() {
  return <Paragraph />;
}

export default memo(Content);
