import React from "react";

const link =
  "https://wa.me/918437399123?text=Hello%20Career%20Vyas%2C%0AAre%20you%20there%20%3F%3F%20I%20have%20a%20query%20to%20solve!!%0A%0A";

export default function QuerySolutionat1() {
  return (
    <>
      <div className="hidden 900:flex sticky top-0 z-[1000] bg-white py-1 items-center justify-center">
        <div className="text-lg font-extrabold">
          GET THE SOLUTION OF YOUR QUERIES AT
          <span className="text-[#6776FF] ml-2 text-3xl">₹1</span>
        </div>
        <a
          href={link}
          target="_blank"
          className="bg-[#FFB11B] px-2 py-1 mx-2 rounded-lg text-sm"
          rel="noreferrer"
        >
          CLICK HERE TO GET STARTED
        </a>
        <div className="text-[10px]">
          Just Drop 👋 “Hi” at the WhatsApp Link
        </div>
      </div>
      <div className="bg-white sticky top-0 z-[1000] 900:hidden flex py-1 items-center justify-center">
        <a
          href={link}
          target="_blank"
          className="text-center 420:text-lg 420:font-extrabold"
          rel="noreferrer"
        >
          GET THE SOLUTION OF YOUR QUERIES AT
          <span className="text-[#6776FF] ml-2 text-xl 420:text-3xl">₹1</span>
        </a>
      </div>
    </>
  );
}
