import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroImage from "./Images/HeroImage.png";

export default function hero() {
  return (
    <div className="flex text-white items-center justify-center mt-16 flex-col-reverse lg:flex-row lg:px-8 xl:px-32">
      <div className="lg:w-1/2 flex flex-col justify-center mx-8 mt-7">
        <div className="text-2xl mb-4">🚀🚀</div>
        <div className="text-2xl leading-9 sm:text-5xl sm:leading-[58px] mb-7">
          Skyrocket your <span className="text-[#6766FF]">JEE/NEET</span>{" "}
          preperation with Mentors from{" "}
          <span className="text-[#6766FF]">IITs and AIIMs</span>
        </div>
        <div className="text-[#979797] leading-7 sm:w-2/3">
          Bringing you the{" "}
          <span className="text-white mx-2">
            brightest minds from IITs and AIIMS
          </span>{" "}
          to make your dreams true
        </div>
        <div className="text-[#14FFEC] mt-12 mb-2">ABSOLUTELY FREE 😊</div>
        <Link href="#book-mentor">
          <div
            className="420:w-1/2 rounded-xl py-3 text-center cursor-pointer"
            style={{
              background:
                "linear-gradient(92.43deg, #6766FF 0%, #908FFF 97.66%)",
            }}
          >
            Book Your Session Now
          </div>
        </Link>
      </div>
      <div className="lg:w-1/2 px-8 lg:px-14 flex items-center justify-center">
        <Image src={HeroImage} />
      </div>
    </div>
  );
}
