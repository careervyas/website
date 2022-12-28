import React from "react";
import BackImage from "./main.png";
export default function JoinOurTeam() {
  return (
    <div className="relative py-12 flex flex-col items-center justify-center font-extrabold bg-[#EBEDFF]">
      <div className="z-10 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl">Join Our Team 🚀🚀</h1>
        <p className="mt-4 text-xl md:text-3xl lg:text-4xl">
          Help us to bridge the Gap of School to College
        </p>
        <a href="https://docs.google.com/forms/d/1pl5We-xqOu_8NAkQWVg9QaRsOc5aqYjXZxSLqeZ05s8/viewform?edit_requested=true">
          <button className="w-[200px] md:w-80 bg-[#2F43FD] text-white py-4 px-2 rounded-lg mt-12 text-lg">
            SEE OUR OPENINGS
          </button>
        </a>
      </div>
      <img className="relative -top-6 w-screen" src={BackImage.src} />
    </div>
  );
}
