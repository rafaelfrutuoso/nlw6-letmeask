import { useState } from "react";

export function Button() {

    const [couter,setCouter] = useState(0)
    function inc() {
        setCouter (couter + 1)
    }
    return (
      <button onClick={inc}>{couter}</button>
    );
  }
  

  