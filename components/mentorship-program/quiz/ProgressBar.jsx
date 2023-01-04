import React from "react";

const CheckSVG = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18.6668 7L9.50016 16.1667L5.3335 12"
      stroke="url(#paint0_linear_315_570)"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_315_570"
        x1="5.3335"
        y1="7"
        x2="18.8558"
        y2="7.8345"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#6766FF" />
        <stop offset="1" stop-color="#908FFF" />
      </linearGradient>
    </defs>
  </svg>
);

const QuestionNumber = ({ number, current }) => (
  <div
    className="z-10 grid leading-[0] 520:leading-normal place-items-center w-4 420:w-5 h-4 420:h-5 520:w-8 lg:w-12 520:h-8 lg:h-12 rounded-full border-2 border-[#6766FF] text-[8px] 520:text-sm lg:text-xl font-bold"
    style={{
      background: current
        ? "linear-gradient(92.43deg, #6766FF 0%, #908FFF 97.66%)"
        : "white",
      color: current ? "white" : "#6766FF",
    }}
  >
    {number}
  </div>
);
const Attempted = ({ current }) => (
  <div
    className="z-10 bg-white grid leading-[0] 520:leading-normal place-items-center w-4 420:w-5 h-4 420:h-5 520:w-8 lg:w-12 520:h-8 lg:h-12 rounded-full border-2 border-[#6766FF] text-[8px] 520:text-sm lg:text-xl font-bold"
    style={{
      background: current ? "#6766FF" : "white",
    }}
  >
    <CheckSVG />
  </div>
);

const Question = ({ number, current, attempted }) => {
  if (!attempted) {
    return <QuestionNumber number={number} current={current} />;
  } else {
    return <Attempted current={current} />;
  }
};

export default function ProgressBar({ questionsState, currentQuestion }) {
  return (
    <div className="flex items-center">
      <span className="text-xs sm:text-2xl w-1/5">Progress Bar 👉</span>
      <div className="w-4/5">
        <div className="mx-auto flex justify-center gap-2 600:gap-4 md:gap-8 w-fit max-w-[800px] relative">
          <div className="w-11/12 h-1/2 top-[2px] border-b-2 absolute border-[#6766FF]"></div>
          {questionsState.map((attempted, index) => (
            <Question
              key={index}
              number={index + 1}
              current={currentQuestion === index + 1}
              attempted={attempted}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
