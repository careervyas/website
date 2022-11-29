import React from "react";

export default function Side({ className }) {
  return (
    <svg
    className={className}
      width="234"
      height="400"
      viewBox="0 0 234 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_714_3)">
        <circle
          cx="34"
          cy="200"
          r="150"
          fill="url(#paint0_linear_714_3)"
          fill-opacity="0.6"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_714_3"
          x="-166"
          y="0"
          width="400"
          height="400"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="25"
            result="effect1_foregroundBlur_714_3"
          />
        </filter>
        <linearGradient
          id="paint0_linear_714_3"
          x1="-45.5181"
          y1="284.94"
          x2="229.181"
          y2="75.3012"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#6776FF" stop-opacity="0.47" />
          <stop offset="1" stop-color="#6776FF" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
