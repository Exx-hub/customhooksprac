import { useState } from "react";

export const useStateToggler = (defaultState) => {
  const [isActive, setIsActive] = useState(defaultState);

  return [isActive, setIsActive];
};
