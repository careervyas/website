import React, { useState } from "react";
import Modal from "../Modal/Modal";
import mentorsData from "./data";
import MentorShipForm from "../Forms/MentorShipForm.js";
import Link from "next/link";

const MentorCard = ({ mentorData }) => {
  return (
    <div className="w-[200px] mr-8 h-fit">
      <div className="w-[200px] my-4 flex flex-col items-center justify-center">
        <div className="w-[120px] h-[120px] rounded-full border-2 border-[#6776FF]">
          <svg
            className="w-[120px] h-[120px]"
            viewBox="0 0 40 81"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M33.0791 78.1605C25.9816 67.928 19.1968 58.1904 12.4521 47.6463C9.23507 42.617 6.00172 36.6463 3 31.4335C9.62656 30.7622 13.2411 31.5158 19.8461 30.7647C19.8487 30.7647 17.1861 14.5973 15.6188 2.97668C25.3275 14.5295 33.1895 34.1752 37 45.2819C32.3399 45.5924 27.5754 45.8247 22.9072 45.6791C26.1801 56.5446 29.6932 67.3484 33.0791 78.1605Z"
              fill="#F1FFED"
              stroke="#5D5FEF"
              strokeWidth="5"
              strokeMiterlimit="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="mt-4 flex flex-col items-center justify-center">
          <h1 className="font-semibold text-sm">{mentorData.name}</h1>
          <h1 className="text-[#6776FF] font-extrabold text-[8px] mb-2">
            {mentorData.college.toUpperCase()}
          </h1>
          <h1 className="px-2 bg-[#6776FF] text-white text-[8px] rounded-sm">
            {mentorData.role}
          </h1>
        </div>
      </div>
    </div>
  );
};
const CrossIcon = () => (
  <svg
    className="relative float-right"
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.9998 28.3334C22.3636 28.3334 28.3332 22.3639 28.3332 15.0001C28.3332 7.63628 22.3636 1.66675 14.9998 1.66675C7.63604 1.66675 1.6665 7.63628 1.6665 15.0001C1.6665 22.3639 7.63604 28.3334 14.9998 28.3334Z"
      stroke="#6776FF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19 11L11 19"
      stroke="#6776FF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11 11L19 19"
      stroke="#6776FF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function OurRockstarMentors() {
  const [showMentorShipModal, setShowMentorShipModal] = useState(false);

  return (
    <>
      <Modal
        modalState={[showMentorShipModal, setShowMentorShipModal]}
        className="w-full grid place-items-center"
      >
        <div className="z-50 bg-white w-3/4 p-6">
          <div
            onClick={() => setShowMentorShipModal(false)}
            className="cursor-pointer"
          >
            <CrossIcon />
          </div>
          <MentorShipForm />
        </div>
      </Modal>
      <div className="bg-[#C1FFF0] flex flex-col py-12">
        <h1 className="text-center mb-6 text-[#6776FF] text-4xl md:text-5xl font-extrabold">
          Our Rockstar Mentors
        </h1>

        <div className="overflow-x-scroll flex 2xl:justify-center scrollbar-hide">
          {mentorsData.map((mentorData, index) => (
            <MentorCard mentorData={mentorData} key={index} />
          ))}
        </div>
        <Link href="/mentorship-program/story#book-mentor">
          <div
            className="cursor-pointer w-full px-4 grid place-items-center mt-8"
            // onClick={(e) => {
            // e.stopPropagation();
            // window.scrollTo(0, 0);
            // setShowMentorShipModal(true);
            // }}
          >
            <div className="px-2 py-4 bg-[#FFB11B] w-full mobile:w-2/3 max-w-[650px] text-center font-extrabold">
              REGISTER YOUR FREE SESSION WITH YOUR ROCKSTAR MENTOR NOW!!
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
