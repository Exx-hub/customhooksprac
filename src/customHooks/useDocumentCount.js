import { useState, useEffect } from "react";

export const useDocumentCount = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count is ${count}`;

    return () => {
      document.title = "React App";
    };
  }, [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const decrement = () => {
    setCount((c) => c - 1);
  };

  return { count, increment, decrement };
};
