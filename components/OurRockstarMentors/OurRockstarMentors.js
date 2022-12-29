import React from "react";
import mentorsData from "./data";

const MentorCard = ({ mentorData }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="my-4 flex flex-col items-center justify-center">
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
          <h1 className="font-bold">{mentorData.name}</h1>
          <h1 className="text-[#6776FF] font-extrabold">
            {mentorData.college}
          </h1>
          <h1 className="bg-[#6776FF] text-white px-2 rounded-md">
            {mentorData.role}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default function OurRockstarMentors() {
  return (
    <div className="bg-[#C1FFF0] flex flex-col py-12">
      <h1 className="text-center mb-6 text-[#6776FF] text-4xl md:text-5xl font-extrabold">
        Our Rockstar Mentors
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {mentorsData.map((mentorData, index) => (
          <MentorCard mentorData={mentorData} key={index} />
        ))}
      </div>
    </div>
  );
}
