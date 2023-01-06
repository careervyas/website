import React from "react";
import { useState } from "react";

export default function Cookies() {
  const [cookies, setCookies] = useState(false);
  return (
    <div
      className="transition-all text-xs mobile:text-sm sticky w-full bg-white py-2 max-h-[50px] z-[100] flex items-center justify-center px-4 border-t-2"
      style={{
        bottom: !cookies ? "0px" : "-50px",
        display: cookies ? "none" : "",
      }}
    >
      Our Website Uses Cookies to enhance you experience
      <button
        className="bg-amber-300 px-4 py-1 ml-4"
        onClick={() => setCookies(true)}
      >
        OK
      </button>
    </div>
  );
}
