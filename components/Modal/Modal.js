import React from "react";

export default function Modal({ children, className, modalState }) {
  return (
    <div
      className={`${
        modalState[0] ? "absolute" : "hidden"
      } w-full h-[180vh] lg:h-[150vh] z-40 bg-[#000000] bg-opacity-30 top-0`}
    >
      <div
        className={`myModals ${
          modalState[0] ? "absolute" : "hidden"
        } ${className} top-[90px] z-50`}
      >
        {children}
      </div>
    </div>
  );
}
