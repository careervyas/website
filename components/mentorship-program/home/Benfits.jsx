import React from "react";
import benefits from "./data/benefits";

const CheckOutSVG = (props) => (
  <svg
    {...props}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_410_1225)">
      <path
        d="M9.16668 5.83337H5.00001C4.55798 5.83337 4.13406 6.00897 3.8215 6.32153C3.50894 6.63409 3.33334 7.05801 3.33334 7.50004V15C3.33334 15.4421 3.50894 15.866 3.8215 16.1786C4.13406 16.4911 4.55798 16.6667 5.00001 16.6667H12.5C12.942 16.6667 13.366 16.4911 13.6785 16.1786C13.9911 15.866 14.1667 15.4421 14.1667 15V10.8334"
        stroke="#14FFEC"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.33334 11.6667L16.6667 3.33337"
        stroke="#14FFEC"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.5 3.33337H16.6667V7.50004"
        stroke="#14FFEC"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_410_1225">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const BenefitBox = ({ benefit }) => {
  const { icon, title, description } = benefit;
  return (
    <div className="flex flex-col justify-between h-[290px] max-w-[300px]">
      <div className="flex flex-col">
        <div className="p-[14px] bg-[#212121] w-fit h-fit border-[1px] border-[#6766FF] rounded-2xl">
          {icon}
        </div>
        <div className="text-[#6766FF] text-2xl font-bold my-[18px] leading-7">
          {title}
        </div>
        <div className="text-lg font-[500] leading-7">{description}</div>
      </div>
      <a className="text-[#14FFEC] mt-6 flex items-center font-bold text-sm leading-7">
        <span className="underline underline-offset-4">CHECK OUT HOW ? </span>
        <CheckOutSVG className="ml-2" />
      </a>
    </div>
  );
};

const LinkButton = () => (
  <>
    <div
      className="hidden sm:block px-24 py-3 mt-[4.5rem] w-fit"
      style={{
        background: "linear-gradient(92.43deg, #6766FF 0%, #908FFF 97.66%)",
      }}
    >
      <a>REGISTER FOR THIS MENTORSHIP PROGRAM NOW</a>
    </div>
    <div
      className="sm:hidden block px-2 mobile:px-6 420:px-12 py-3 mt-[4.5rem] w-fit"
      style={{
        background: "linear-gradient(92.43deg, #6766FF 0%, #908FFF 97.66%)",
      }}
    >
      <a>Register Now to get your Mentor 🚀🚀</a>
    </div>
  </>
);

export default function Benfits() {
  return (
    <div className="mt-24 py-20 text-white bg-[#303030] flex flex-col justify-center items-center">
      <div className="text-lg mobile:text-xl 420:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
        How this gone be
        <span className="ml-4 text-[#6766FF]">benefitting you ?</span>
      </div>
      <div className="px-8 sm:px-16 lg:px-32 xl:px-20 pt-14 grid place-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-32 mobile:gap-16">
        {benefits.map((benefit, index) => (
          <BenefitBox benefit={benefit} key={index} />
        ))}
      </div>
      <LinkButton />
    </div>
  );
}
0;
