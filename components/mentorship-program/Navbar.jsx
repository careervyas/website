import React from "react";

const Logo = (props) => (
  <svg
    {...props}
    viewBox="0 0 102 92"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <rect y="-10" width="102" height="102" fill="url(#pattern0)" />
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_16_14" transform="scale(0.000244141)" />
      </pattern>
      <image
        id="image0_16_14"
        width="4096"
        height="4096"
      />
    </defs>
  </svg>
);

export default function Navbar() {
  return (
    <div className="bg-[#212121] h-24 flex items-center justify-between px-6 900:px-12 text-white">
      <Logo className="bg-white rounded-full w-[80px] h-[80px]" />
      <div>
        <span className="hidden 900:inline mr-6 font-medium text-xl">
          Want to Mentor and Guide India&apos;s Sharpest Minds 👉
        </span>
        <button className="bg-[#6766FF] px-2 900:px-4 py-2">
          BECOME A MENTOR
        </button>
      </div>
    </div>
  );
}