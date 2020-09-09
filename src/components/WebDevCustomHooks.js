import React from "react";
import useLocalStorage from "../customHooks/useLocalStorage";
import useUpdateLogger from "../customHooks/useUpdateLogger";

function WebDevCustomHooks() {
  const [name, setName] = useLocalStorage("name", "");
  const [show, setShow] = useLocalStorage("status", true);
  useUpdateLogger(name);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={() => setShow(!show)}>{show ? "off" : "on"}</button>
    </div>
  );
}

export default WebDevCustomHooks;
