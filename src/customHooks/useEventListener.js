import { useEffect } from "react";

export default function useEventListener(event, handler) {
  useEffect(() => {
    console.log("effect ran");
    document.addEventListener(event, handler);

    return () => document.removeEventListener(event, handler);
  }, [event, handler]);
}
