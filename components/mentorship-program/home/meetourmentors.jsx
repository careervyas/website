import Image from "next/image";
import React from "react";
import { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Mentor1 from "./Images/Mentors/1.jpg";
import styles from "./styles/MeetOurMentors.module.css";
const mentors = [
  {
    image: Mentor1,
    name: "Manas Madan",
    college: "NSUT Delhi",
  },
  {
    image: Mentor1,
    name: "Manas Madan",
    college: "NSUT Delhi",
  },
  {
    image: Mentor1,
    name: "Manas Madan",
    college: "NSUT Delhi",
  },
  {
    image: Mentor1,
    name: "Manas Madan",
    college: "NSUT Delhi",
  },
  {
    image: Mentor1,
    name: "Manas Madan",
    college: "NSUT Delhi",
  },
  {
    image: Mentor1,
    name: "Manas Madan",
    college: "NSUT Delhi",
  },
];

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
        fill="white"
        stroke="#6776FF"
        strokeWidth="2"
      />
      <path
        d="M29.4478 14.719C29.7212 14.9925 29.8748 15.3633 29.8748 15.75C29.8748 16.1367 29.7212 16.5076 29.4478 16.7811L21.7288 24.5L29.4478 32.219C29.7135 32.494 29.8604 32.8624 29.8571 33.2448C29.8538 33.6271 29.7004 33.9929 29.43 34.2633C29.1597 34.5337 28.7939 34.687 28.4115 34.6904C28.0291 34.6937 27.6608 34.5467 27.3857 34.2811L18.6357 25.5311C18.3623 25.2576 18.2087 24.8867 18.2087 24.5C18.2087 24.1133 18.3623 23.7425 18.6357 23.469L27.3857 14.719C27.6592 14.4456 28.0301 14.292 28.4168 14.292C28.8035 14.292 29.1743 14.4456 29.4478 14.719Z"
        fill="#5D5FEF"
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
        fill="white"
        stroke="#6776FF"
        strokeWidth="2"
      />
      <path
        d="M20.5522 35.281C20.2788 35.0075 20.1252 34.6367 20.1252 34.25C20.1252 33.8633 20.2788 33.4924 20.5522 33.2189L28.2712 25.5L20.5522 17.781C20.2865 17.506 20.1396 17.1376 20.1429 16.7552C20.1462 16.3729 20.2996 16.0071 20.57 15.7367C20.8403 15.4663 21.2061 15.313 21.5885 15.3096C21.9709 15.3063 22.3392 15.4533 22.6143 15.7189L31.3643 24.4689C31.6377 24.7424 31.7913 25.1133 31.7913 25.5C31.7913 25.8867 31.6377 26.2575 31.3643 26.531L22.6143 35.281C22.3408 35.5544 21.9699 35.708 21.5832 35.708C21.1965 35.708 20.8257 35.5544 20.5522 35.281Z"
        fill="#5D5FEF"
      />
    </svg>
  );
};

const MentorCard = ({ mentorData }) => {
  return (
    <div
      className={`w-[120px] h-[150px] md:w-[360px] md:h-[448px] relative text-center ${styles.mentorCard} rounded-md overflow-hidden mx-2`}
    >
      <Image src={mentorData.image} layout="fill" />
      <div className="relative bottom-16">
        <div>{mentorData.name}</div>
        <div>{mentorData.college}</div>
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
      breakpoint: { max: 1400, min: 650 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 650, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="mt-20 text-white flex items-center justify-center flex-col overflow-hidden px-12">
      <div className="text-3xl sm:text-4xl lg:text-5xl">
        Meet Your <span className="text-[#6766FF]">Mentors</span>
      </div>
      <div className="h-full flex flex-row items-center justify-center px-2">
        <LeftArrow
          className="cursor-pointer w-10"
          onClick={() => {
            carouselRef.current.previous();
          }}
        />
        <div className="min-w-[265px] bg-red-300 max-w-[1200px] w-full">
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
