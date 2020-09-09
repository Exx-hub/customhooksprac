import { useEffect } from "react";

export const useBackgroundChanger = (color1 = "red", color2 = "blue") => {
  useEffect(() => {
    const changeBG = (e) => {
      if (e.key === "f") {
        document.body.style.backgroundColor = color1;
      } else {
        document.body.style.backgroundColor = color2;
      }
    };

    document.addEventListener("keyup", changeBG);

    return () => {
      document.removeEventListener("keyup", changeBG);
      document.body.style.backgroundColor = "white";
    };
  }, [color1, color2]);
};
