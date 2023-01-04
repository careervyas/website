import React from "react";

const PlusSVG = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_280_384)">
      <path
        d="M15 6.25V23.75"
        stroke="url(#paint0_linear_280_384)"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.25 15H23.75"
        stroke="url(#paint1_linear_280_384)"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15 6.25V23.75"
        stroke="url(#paint2_linear_280_384)"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.25 15H23.75"
        stroke="url(#paint3_linear_280_384)"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_280_384"
        x1="15"
        y1="6.25"
        x2="16.018"
        y2="6.25247"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#6766FF" />
        <stop offset="1" stop-color="#908FFF" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_280_384"
        x1="6.25"
        y1="15"
        x2="17.7345"
        y2="23.527"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#6766FF" />
        <stop offset="1" stop-color="#908FFF" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_280_384"
        x1="15"
        y1="6.25"
        x2="16.018"
        y2="6.25247"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#6766FF" />
        <stop offset="1" stop-color="#908FFF" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_280_384"
        x1="6.25"
        y1="15"
        x2="17.7345"
        y2="23.527"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#6766FF" />
        <stop offset="1" stop-color="#908FFF" />
      </linearGradient>
      <clipPath id="clip0_280_384">
        <rect width="30" height="30" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const AccordionItem = ({ index }) => (
  <li class="bg-[#313131] accordionItem w-4/5 px-6 rounded-lg">
    <input
      type="checkbox"
      id={"faq" + index.toString()}
      class="peer appearance-none"
    />
    <label for={"faq" + index.toString()} class="py-4 cursor-pointer grow">
      <p>What is your name?</p>
    </label>
    <div class="accordionContent">
      <p>My name is Manas Madan</p>
    </div>
    <div
      className="absolute right-[12%] cursor-pointer"
      onClick={() =>
        (document.getElementById("faq" + index.toString()).checked =
          !document.getElementById("faq" + index.toString()).checked)
      }
    >
      <PlusSVG />
    </div>
  </li>
);

export default function Questions() {
  return (
    <div className="mb-36">
      <div className="text-white font-bold text-xl 420:text-3xl sm:text-5xl text-center mb-11">
        <span
          style={{
            background: "linear-gradient(92.43deg, #6766FF 0%, #908FFF 97.66%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
          }}
        >
          Questions
        </span>{" "}
        that you might have
      </div>
      <div className="text-white">
        <ul class="w-full flex flex-col items-center justify-center gap-6">
          {[...Array(6)].map((_, index) => (
            <AccordionItem index={index} key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
}
