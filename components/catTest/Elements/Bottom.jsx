import React from "react";

export default function Bottom({ className }) {
  return (
    <svg
      className={className}
      width="182"
      height="155"
      viewBox="0 0 182 155"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_714_19)">
        <circle
          cx="133"
          cy="133"
          r="83"
          fill="url(#paint0_linear_714_19)"
          fillOpacity="0.6"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_714_19"
          x="0"
          y="0"
          width="266"
          height="266"
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
            result="effect1_foregroundBlur_714_19"
          />
        </filter>
        <linearGradient
          id="paint0_linear_714_19"
          x1="89"
          y1="180"
          x2="241"
          y2="64"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#6776FF" stop-opacity="0.47" />
          <stop offset="1" stop-color="#6776FF" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
