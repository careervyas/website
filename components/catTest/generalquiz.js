import Image from "next/image";
import { useEffect, useState } from "react";
import science from "./images/science.svg";
import aptitude from "./images/aptitude.svg";
import english from "./images/english.svg";
import Side from "./Elements/Side";
import Bottom from "./Elements/Bottom";
import EllipseRight from "./Elements/EllipseRight";
import EllipseLeft from "./Elements/EllipseLeft";

export default function generalquiz() {
  return (
    <div
      className="w-full h-[64vh] flex flex-col items-center
        bg-[url('https://firebasestorage.googleapis.com/v0/b/carrervyaswebsite.appspot.com/o/Background%2FCAT%20TEST%20(1).svg?alt=media&token=034c87dd-67e9-4e23-9e0f-86aa67ac3719')]
            bg-cover bg-no-repeat mb-10 relative"
    >
      <Side className={"absolute top-0 left-0"} />
      <Bottom className={"absolute  top-full right-0"} />
      <EllipseRight className={"absolute top-1/4 right-0"} />
      <EllipseLeft className={"absolute top-3/4 left-0 translate-y-20"} />
      <div className="w-3/4 h-full flex flex-col">
        <div className="flex flex-col md:flex-row m-5">
          <div className="flex flex-row">
            <div
              className="w-28 flex flex-row items-center h-8 shadow-md
            shadow-slate-200 border-2 border-slate-200 rounded-lg p-2 cursor-pointer
            mx-2"
            >
              <Image src={science} alt="science" width={30} height={30} />
              <p className="text-black text-md">Science</p>
            </div>
            <div
              className="w-28 flex flex-row items-center h-8 shadow-md
            shadow-slate-200 border-2 border-slate-200 rounded-lg p-2 cursor-pointer
            mx-2"
            >
              <Image src={aptitude} alt="science" width={30} height={30} />
              <p className="text-black text-md">Aptitude</p>
            </div>
          </div>
          <div className="flex flex-row">
            <div
              className="w-28 flex flex-row items-center h-8 shadow-md
            shadow-slate-200 border-2 border-slate-200 rounded-lg p-2 cursor-pointer mx-2"
            >
              <Image src={english} alt="English" width={30} height={30} />
              <p className="text-black text-md">English</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-[#6776FF] border-2 border-black w-full
        bg-opacity-50 p-6">

          <h1 className="text-2xl font-semibold">
            <span className="text-white">Ques-</span> what is the capital of India?
          </h1>
          {/* <p className="text-lg">
            <span className="text-black bg-white w-10">A</span> 
          </p> */}
        </div>
      </div>
    </div>
  );
}
