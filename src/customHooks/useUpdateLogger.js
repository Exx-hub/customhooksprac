import { useEffect } from "react";

export default function useUpdateLogger(anyValue) {
  useEffect(() => {
    console.log(anyValue);
  }, [anyValue]);
}
