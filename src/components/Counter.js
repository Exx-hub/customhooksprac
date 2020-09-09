import React from "react";
import { useDocumentCount } from "../customHooks/useDocumentCount";
import { useBackgroundChanger } from "../customHooks/useBackgroundChanger";

function Counter() {
  const { count, increment, decrement } = useDocumentCount();

  useBackgroundChanger("rebeccapurple", "teal"); // custom hook

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
