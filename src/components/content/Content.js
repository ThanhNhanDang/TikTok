import React, { useEffect, useRef, useState, memo } from "react";
import "../../App.css";
import Video from "../video/Video";

// 1. memo() -> Higher Order Commponent (HOC)
// 2. useCallback()

function Content({onIncrease}) {
  console.log("re-render")

  return (
    <>
      <button onClick={onIncrease}>Click me!</button>
      <Video />
    </>
  );
}

export default memo(Content);
