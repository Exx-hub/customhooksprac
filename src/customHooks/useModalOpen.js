import { useEffect } from "react";

export const useModalOpen = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      // do nothing if clicking ref's element or descendant elements or undefined
      if (!ref.current || ref.current.contains(event.target)) return;

      // else we close it
      handler();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [handler, ref]);
};
