import React, { useRef } from "react";
import { useModalOpen } from "../customHooks/useModalOpen";
import { useStateToggler } from "../customHooks/useStateToggler";

function ModalNonCustom() {
  const [isModalOpen, setModalOpen] = useStateToggler(false);

  const ref = useRef();

  // clean custom hook. just one call passed with necessary agrs
  useModalOpen(ref, () => setModalOpen(false));

  return (
    <div>
      {isModalOpen ? (
        <div className="modal" ref={ref} style={{ border: "2px solid blue" }}>
          <p>
            <span role="img" aria-label="waving">
              123
            </span>
            Click outside of me to close.
          </p>
        </div>
      ) : (
        <button onClick={() => setModalOpen(true)}>Open Modal</button>
      )}
    </div>
  );
}

export default ModalNonCustom;
