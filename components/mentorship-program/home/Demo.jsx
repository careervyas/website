import Image from "next/image";
import React from "react";
import MacBook from "./Images/MacBookPro.jpg";

const Icon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_279_286)">
      <path
        d="M14.6667 7.38674V8.00007C14.6658 9.43769 14.2003 10.8365 13.3395 11.988C12.4788 13.1394 11.2688 13.9817 9.89022 14.3893C8.5116 14.797 7.03815 14.748 5.68963 14.2498C4.3411 13.7516 3.18975 12.8308 2.40729 11.6248C1.62482 10.4188 1.25317 8.99212 1.34776 7.55762C1.44235 6.12312 1.99812 4.75762 2.93217 3.66479C3.86621 2.57195 5.1285 1.81033 6.53077 1.4935C7.93304 1.17668 9.40016 1.32163 10.7133 1.90674"
        stroke="url(#paint0_linear_279_286)"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.6667 2.6665L8 9.33984L6 7.33984"
        stroke="url(#paint1_linear_279_286)"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_279_286"
        x1="1.33331"
        y1="1.32959"
        x2="14.8828"
        y2="1.90446"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#6766FF" />
        <stop offset="1" stop-color="#908FFF" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_279_286"
        x1="6"
        y1="2.6665"
        x2="14.7963"
        y2="3.15119"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#6766FF" />
        <stop offset="1" stop-color="#908FFF" />
      </linearGradient>
      <clipPath id="clip0_279_286">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
const CheckOutSVG = (props) => (
  <svg
    {...props}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_278_186)">
      <path
        d="M9.16665 5.83325H4.99998C4.55795 5.83325 4.13403 6.00885 3.82147 6.32141C3.50891 6.63397 3.33331 7.05789 3.33331 7.49992V14.9999C3.33331 15.4419 3.50891 15.8659 3.82147 16.1784C4.13403 16.491 4.55795 16.6666 4.99998 16.6666H12.5C12.942 16.6666 13.3659 16.491 13.6785 16.1784C13.9911 15.8659 14.1666 15.4419 14.1666 14.9999V10.8333"
        stroke="#8585FF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.33331 11.6666L16.6666 3.33325"
        stroke="#8585FF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.5 3.33325H16.6667V7.49992"
        stroke="#8585FF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_278_186">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const ListItem = ({ title }) => (
  <li className="flex items-center gap-2">
    <Icon />
    {title}
  </li>
);

export default function Demo() {
  return (
    <div className="flex text-white mt-12 sm:mt-[6.5rem] px-7 sm:px-28">
      <div className="w-full lg:w-3/5 xl:w-2/5 flex flex-col gap-6">
        <h1
          className="tracking-wider font-medium text-4xl leading-normal"
          style={{
            background: "linear-gradient(92.43deg, #6766FF 0%, #908FFF 97.66%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
          }}
        >
          Get your First Mentorship Session from Top Mentors
        </h1>
        <p className="text-[#90A3B4] tracking-wider leading-7">
          Dedicated support of mentors from top IITs, NITs, and government
          medical colleges for guidance and support to help you crack these
          exams with ease.
        </p>
        <ul className="text-white flex flex-col gap-3">
          <ListItem title="1 on 1 Personalized Session" />
          <ListItem title="Success RoadMap" />
          <ListItem title="Basic Study Planner" />
          <ListItem title="Instant Query Answering" />
        </ul>
        <a className="cursor-pointer flex items-center w-fit px-12 py-4 text-center bg-white text-[#8585FF] text-[8px] 420:text-sm font-bold underline underline-offset-2 rounded-lg">
          WANT TO HEAR MORE? <CheckOutSVG className="sm:ml-2" />
        </a>
      </div>
      <div className="hidden lg:grid lg:w-2/5 xl:w-3/5 place-items-center">
        <Image src={MacBook} />
      </div>
    </div>
  );
}
