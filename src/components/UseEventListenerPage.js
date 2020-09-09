import React, { useState, useCallback } from "react";
import useEventListener from "../customHooks/useEventListener";

function UseEventListenerPage() {
  const handler = useCallback(() => {
    console.log("clicked");
  }, []);

  useEventListener("click", handler);

  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  return (
    <div>
      <h1>use event listener hook</h1>
      <button onClick={() => setCount((c) => c + 1)}>hello{count}</button>
      <button onClick={() => setName("alvin")}>HI{name}</button>
    </div>
  );
}

export default UseEventListenerPage;
