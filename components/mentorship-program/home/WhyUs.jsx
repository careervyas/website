import Image from "next/image";
import React from "react";
import Img from "./Images/WhyUs.jpg";

const Card = (cardDetails) => (
  <div className="bg-[#212121] border-[1px] border-[#7A7AFF] w-11/12 xl:w-3/4 max-w-[280px] py-6 px-5 font-semibold">
    <div className="text-2xl leading-8 mb-5 text-[#7A7AFF]">
      1 on 1 Personal Mentorship
    </div>
    <div className="text-base leading-6">
      Mentors from top IITs, NITs, Medical Colleges
    </div>
  </div>
);

export default function WhyUs() {
  return (
    <>
      {/* For Bigger Screens (screen-size >= 1024px) */}
      <div className="hidden lg:flex mt-24 text-white">
        <div className="flex w-1/2 bg-[#3F3F3F] h-[580px]">
          <div className="flex flex-col items-center justify-around h-full w-1/2">
            <Card />
            <Card />
          </div>
          <div className="flex flex-col items-center justify-center h-full w-1/2">
            <Card />
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
          {/* <Image src={Img} /> */}
        </div>
      </div>
      {/* For Smaller Screens (screen-size < 1024px) */}
      <div className="flex flex-col lg:hidden mt-10 text-white">
        <div className="flex flex-col">
          <Card />
          <div className="self-end">
            <Card />
          </div>
          <Card />
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
          {/* <Image src={Img} /> */}
        </div>
      </div>
    </>
  );
}
