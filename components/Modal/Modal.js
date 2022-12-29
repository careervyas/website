import React from "react";

export default function Modal({ children, className, modalState }) {
  return (
    <div
      className={`myModals ${
        modalState[0] ? "absolute" : "hidden"
      } ${className}`}
    >
      {children}
    </div>
  );
}
