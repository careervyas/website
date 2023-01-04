import React from "react";
import JoinOurTeamForm from "../Forms/JoinOurTeamForm";

const Circle = () => (
  <svg viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect
      x="12.5"
      y="12.5"
      width="42"
      height="42"
      rx="21"
      fill="url(#paint0_linear_4_6)"
      stroke="url(#paint1_linear_4_6)"
    />
    <rect
      x="1"
      y="1"
      width="65"
      height="65"
      rx="32.5"
      stroke="url(#paint2_linear_4_6)"
      stroke-width="2"
    />
    <defs>
      <linearGradient
        id="paint0_linear_4_6"
        x1="12"
        y1="12"
        x2="55.697"
        y2="13.854"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#6766FF" />
        <stop offset="1" stop-color="#908FFF" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_4_6"
        x1="12"
        y1="12"
        x2="55.697"
        y2="13.854"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#6766FF" />
        <stop offset="1" stop-color="#908FFF" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_4_6"
        x1="2"
        y1="2"
        x2="66.0211"
        y2="4.71627"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#6766FF" />
        <stop offset="1" stop-color="#908FFF" />
      </linearGradient>
    </defs>
  </svg>
);

export default function JoinOurTeam() {
  return (
    <div className="text-white flex flex-col lg:flex-row my-12 relative">
      <div className="absolute left-2 lg:left-12 w-12">
        <Circle />
      </div>
      <div className="absolute right-12 top-[30%] lg:right-1/2 lg:top-[70%] w-8">
        <Circle />
      </div>
      <div className="my-24 lg:m-0 lg:w-1/2 grid place-items-center">
        <div className="lg:w-2/3 xl:w-1/2 w-11/12 mb-12 lg:m-0">
          <h1 className="text-3xl sm:text-5xl mb-4">Join Our Team!</h1>
          <h3 className="text-xl sm:text-3xl">
            Want to Mentor and Guide India&apos;s Sharpest Minds 👉
          </h3>
        </div>
      </div>
      <div className="lg:w-1/2 grid place-items-center">
        <div className="bg-white py-12 mx-8 px-8">
          <JoinOurTeamForm />
        </div>
      </div>
    </div>
  );
}
