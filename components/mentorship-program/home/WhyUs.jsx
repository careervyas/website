import Link from "next/link";
import React from "react";
import Img from "./Images/WhyUs.jpg";
import data from "./data/whyus.js";
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

const Card = ({ cardDetails }) => (
  <div className="bg-[#212121] border-[1px] border-[#7A7AFF] w-11/12 xl:w-3/4 max-w-[280px] py-6 px-5 font-semibold">
    <div className="text-2xl leading-8 mb-5 text-[#7A7AFF]">
      {cardDetails.text1}
    </div>
    <div className="text-base leading-6">{cardDetails.text2}</div>
  </div>
);

export default function WhyUs() {
  return (
    <>
      {/* For Bigger Screens (screen-size >= 1024px) */}
      <div className="hidden lg:flex mt-24 text-white">
        <div className="flex w-1/2 bg-[#3F3F3F] h-[580px]">
          <div className="flex flex-col items-center justify-around h-full w-1/2">
            <Card cardDetails={data[0]} />
            <Card cardDetails={data[2]} />
          </div>
          <div className="flex flex-col items-center justify-center h-full w-1/2">
            <Card cardDetails={data[1]} />
          </div>
        </div>
        <div
          className="w-1/2 h-[580px] relative bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${Img.src})` }}
        >
          <div
            className="absolute w-full h-full z-10"
            style={{
              background:
                "linear-gradient(360deg, #000000 -10.34%, rgba(0, 0, 0, 0.06) 76.2%)",
            }}
          ></div>
          <div className="absolute bottom-[5%] z-10 w-4/5 mx-12">
            <div className="font-bold text-[32px]">
              Why <span className="text-[#6766FF]">Career Vyas</span> Mentorship
              Program?
            </div>
            <div className="text-lg leading-8 font-semibold mt-1">
              Just like ferromagnetic materials align parallel to the direction
              of magnetic field 🧲
            </div>
            <div className="text-lg leading-8 font-semibold mb-1">
              We are here to help you align parallel in the direction of your
              dreams.
            </div>
            <Link href="/mentorship-program/story">
              <div className="cursor-pointer text-[#14FFEC] flex items-center font-bold text-sm leading-7">
                <span className="underline underline-offset-4">
                  CHECK OUT HOW ?{" "}
                </span>
                <CheckOutSVG />
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* For Smaller Screens (screen-size < 1024px) */}
      <div className="flex flex-col-reverse lg:hidden mt-10 text-white">
        <div className="flex flex-col gap-8 bg-[#3F3F3F] py-12 items-center mobile:items-start">
          {data.map((d, index) => (
            <div className="ml-6" key={index}>
              <Card cardDetails={d} />
            </div>
          ))}
        </div>
        <div
          className="w-full h-[580px] relative bg-no-repeat bg-center bg-cover mb-8"
          style={{ backgroundImage: `url(${Img.src})` }}
        >
          <div
            className="absolute w-full h-full z-10"
            style={{
              background:
                "linear-gradient(360deg, #000000 -10.34%, rgba(0, 0, 0, 0.06) 76.2%)",
            }}
          ></div>
          <div className="absolute w-4/5 mx-4 bottom-[5%] z-10">
            <div className="font-bold text-lg">
              Why <span className="text-[#6766FF]">Career Vyas</span> Mentorship
              Program?
            </div>
            <div className="text-xs leading-5 font-semibold mt-1">
              Just like ferromagnetic materials align parallel to the direction
              of magnetic field 🧲
            </div>
            <div className="text-xs leading-5 font-semibold mb-1">
              We are here to help you align parallel in the direction of your
              dreams.
            </div>
            <Link href="/mentorship-program/story">
              <div className="cursor-pointer text-[#14FFEC] flex items-center font-bold text-sm leading-7">
                <span className="underline underline-offset-4">
                  CHECK OUT HOW ?{" "}
                </span>
                <CheckOutSVG />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Register Button - All Screens Same */}
      <Link href="/mentorship-program#book-mentor">
        <div className="cursor-pointer text-center flex text-white items-center justify-center m-6 sm:m-12">
          <div
            className="w-full max-w-[974px] p-4 font-bold"
            style={{
              background:
                "linear-gradient(92.43deg, #6766FF 0%, #908FFF 97.66%)",
            }}
          >
            <span className="hidden md:block text-xl">
              Register Now to get your Mentor from Top IIT’s, NIT’s and Medical
              Colleges 🚀🚀
            </span>
            <span className="md:hidden block text-md mobile:text-lg">
              Register Now to get your Mentor 🚀🚀
            </span>
          </div>
        </div>
      </Link>
    </>
  );
}
