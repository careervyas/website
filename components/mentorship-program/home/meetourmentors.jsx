import Image from "next/image";
import React from "react";
import { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./styles/MeetOurMentors.module.css";
import mentors from "./data/mentors";
const LeftArrow = (props) => {
  return (
    <svg
      {...props}
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="25"
        cy="25"
        r="24"
        fill="#323232"
        stroke="#6766FF"
        stroke-width="2"
      />
      <path
        d="M29.4477 14.719C29.7211 14.9925 29.8747 15.3633 29.8747 15.75C29.8747 16.1367 29.7211 16.5076 29.4477 16.7811L21.7287 24.5L29.4477 32.219C29.7133 32.494 29.8603 32.8624 29.857 33.2448C29.8537 33.6272 29.7003 33.9929 29.4299 34.2633C29.1595 34.5337 28.7938 34.6871 28.4114 34.6904C28.029 34.6937 27.6606 34.5467 27.3856 34.2811L18.6356 25.5311C18.3622 25.2576 18.2086 24.8867 18.2086 24.5C18.2086 24.1133 18.3622 23.7425 18.6356 23.469L27.3856 14.719C27.6591 14.4456 28.0299 14.292 28.4166 14.292C28.8033 14.292 29.1742 14.4456 29.4477 14.719Z"
        fill="#6766FF"
      />
    </svg>
  );
};

const RightArrow = (props) => {
  return (
    <svg
      {...props}
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="25"
        cy="25"
        r="24"
        transform="rotate(-180 25 25)"
        fill="#323232"
        stroke="#6766FF"
        stroke-width="2"
      />
      <path
        d="M20.5523 35.281C20.2789 35.0075 20.1253 34.6367 20.1253 34.25C20.1253 33.8633 20.2789 33.4924 20.5523 33.2189L28.2713 25.5L20.5523 17.781C20.2867 17.506 20.1397 17.1376 20.143 16.7552C20.1463 16.3728 20.2997 16.0071 20.5701 15.7367C20.8405 15.4663 21.2062 15.3129 21.5886 15.3096C21.971 15.3063 22.3394 15.4533 22.6144 15.7189L31.3644 24.4689C31.6378 24.7424 31.7914 25.1133 31.7914 25.5C31.7914 25.8867 31.6378 26.2575 31.3644 26.531L22.6144 35.281C22.3409 35.5544 21.9701 35.708 21.5834 35.708C21.1967 35.708 20.8258 35.5544 20.5523 35.281Z"
        fill="#6766FF"
      />
    </svg>
  );
};

const MentorCard = ({ mentorData }) => {
  return (
    <div
      className={`w-[120px] h-[150px] 420:w-[180px] 420:h-[250px] 900:w-[350px] 900:h-[489px] relative text-center ${styles.mentorCard} rounded-md mx-auto`}
    >
      <Image src={mentorData.image} layout="fill" />
      <div className="absolute bottom-8 left-2 sm:font-extrabold 420:left-7 900:left-[23%] text-white">
        <div className="lg:text-3xl 420:text-xl">{mentorData.name}</div>
        <div className="lg:text-2xl 420:text-lg text-[#FFFFFF] opacity-60">
          {mentorData.college}
        </div>
      </div>
    </div>
  );
};

export default function MeetOurMentors() {
  const carouselRef = useRef(null);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1400 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1400, min: 900 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 900, min: 0 },
      items: 2,
    },
  };
  return (
    <div className="mt-20 text-white flex items-center justify-center flex-col md:px-12 overflow-hidden">
      <div className="text-3xl sm:text-4xl lg:text-5xl">
        Meet Your <span className="text-[#6766FF]">Mentors</span>
      </div>
      <div className="h-full flex flex-row items-center justify-center px-2 mt-5 sm:mt-12">
        <LeftArrow
          className="cursor-pointer w-10"
          onClick={() => {
            carouselRef.current.previous();
          }}
        />
        <div className="min-w-[265px] max-w-[1200px] w-screen sm:w-[90vw] px-4">
          <Carousel
            ref={carouselRef}
            responsive={responsive}
            infinite={true}
            focusOnSelect={true}
            arrows={false}
            draggable={false}
          >
            {mentors.map((mentorData, index) => (
              <MentorCard mentorData={mentorData} key={index} />
            ))}
          </Carousel>
        </div>
        <RightArrow
          className="cursor-pointer w-10"
          onClick={() => {
            carouselRef.current.next();
          }}
        />
      </div>
    </div>
  );
}
