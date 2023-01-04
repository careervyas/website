import Image from "next/image";
import React from "react";
import data from "./data/dreamCollege.js";

const ImageComponent = ({ image }) => (
  <div className="min-w-[50px] sm:min-w-[90px] min-h-[50px] sm:min-h-[90px]">
    <Image src={image} width={90} height={90} objectFit="contain" />
  </div>
);

export default function DreamCollege() {
  return (
    <>
      <div className="bg-white my-12 py-12">
        <div className="text-lg sm:text-[22px] lg:text-4xl text-center font-bold mb-11">
          🔥 Realize your Dreams with students of your Dream College 🔥
        </div>
        <div className="w-full overflow-x-scroll flex gap-8 sm:gap-16 items-center px-4 scrollbar-hide">
          {data.map((image, index) => (
            <ImageComponent image={image} key={index} />
          ))}
        </div>
      </div>
      <div className="text-white text-center text-xs sm:text-lg font-bold mb-8 uppercase">
        🚀 Launch your Career Projectile Start your Mentorship Today 🚀
      </div>
    </>
  );
}
