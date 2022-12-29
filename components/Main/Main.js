import Lines2 from "../Elements/Lines2";
import Lines from "../Elements/Lines";
import side1 from "./side1.svg";
import Image from "next/image";
import side2 from "./side2.svg";
import { useEffect } from "react";
import BackImage from "./LandingPage.png";
import styles from "./Main.module.css";
import Modal from "../../components/Modal/Modal";
import HaveAQueryForm from "../Query/HaveAQueryForm";
import MentorShipForm from "../Query/MentorShipForm.js";
import { useState } from "react";

const CheckSVG = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <rect width="26" height="26" fill="url(#pattern0)" />
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlinkHref="#image0_998_322"
          transform="translate(-1.02488 -0.301075) scale(0.0048062 0.00444444)"
        />
      </pattern>
      <image
        id="image0_998_322"
        width="666"
        height="375"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

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

export default function Main() {
  /*
  const [showModal, setShowModal] = useState(false);
  {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            id="myModal"
          >
            <div className="relative my-6 w-4/5 md:w-1/2 h-[500px]">
              <div
                className="items-center border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none p-2
              h-full"
              >
                <div className="h-full w-full relative">
                  <img
                    src={
                      "https://drive.google.com/uc?id=1Fx04bpey7SqG0znOeLYmkgsez5bCiHve"
                    }
                    alt="ModalImage"
                    className="absolute top-0 left-0 w-full h-full object-contain border-2 border-blue-400 
                    rounded-md"
                  />
                </div>
                <Link href="https://sessions-careervyas.typedream.app/">
                  <p className="text-3xl font-semibold mt-5 text-[#6776FF] cursor-pointer mb-5">
                    Register Now
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
      // useEffect(() => {
      //   window.onclick = function (event) {
      //     if (event.target == document.getElementById("myModal")) {
      //       setShowModal(false);
      //     }
      //   };
      // }, []);
  */

  const [showQueryModal, setShowQueryModal] = useState(false);
  const [showMentorShipModal, setShowMentorShipModal] = useState(false);

  return (
    <>
      <Modal
        modalState={[showQueryModal, setShowQueryModal]}
        className="w-full grid place-items-center"
      >
        <div className="z-50 bg-white w-3/4 p-6">
          <div
            onClick={() => setShowQueryModal(false)}
            className="cursor-pointer"
          >
            <CrossIcon />
          </div>
          <HaveAQueryForm />
        </div>
      </Modal>
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
      <div
        className={`hidden h-[800px] pt-14 lg:flex bg-no-repeat bg-cover relative ${styles.slanted} overflow-hidden`}
        style={{
          backgroundImage: `url(${BackImage.src})`,
        }}
      >
        <div className="relative w-1/2 pl-6">
          <Lines2
            className={"absolute top-6 left-0 w-24 lg:w-36 -translate-y-1/4"}
          />
          <div className="text-[#333333]">
            <p className="mb-8">😀 Single One Liner</p>
            <h1 className="font-bold text-6xl leading-tight">
              One Stop Solution to all your Career & College Queries
            </h1>
          </div>
          <div className="text-2xl my-8">
            <p className="text-2xl tracking-normal font-semibold align-middle">
              # Bridging the gap between{" "}
              <span className="text-blue-700">School</span> to{" "}
              <span className="text-blue-700"> College </span>
            </p>
          </div>
          <div className="flex flex-col xl:flex-row justify-center">
            <div className="flex flex-col items-center justify-center">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowQueryModal(true);
                }}
                className="ml-8 rounded-md w-64 py-4 bg-[#2F43FD] text-white font-extrabold"
              >
                Ask your Query for Free
              </button>
              <div className="flex text-lg font-extrabold mt-4">
                <CheckSVG />
                <span className="ml-4 text-2xl mr-2">300+ </span>Doubts Solved
              </div>
            </div>
            <div className="flex flex-col mt-2 items-center justify-center">
              <button
                className="ml-8 rounded-md w-64 py-4 bg-[#FFB11B] font-extrabold"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowMentorShipModal(true);
                }}
              >
                Book Free Mentorship Session
              </button>
              <div className="flex text-lg font-extrabold mt-4">
                <CheckSVG />
                <span className="ml-4 text-2xl mr-2">50+ </span>Mentorship
                Session Done
              </div>
            </div>
          </div>
        </div>
        <div className="flex relative w-1/2">
          <div className="absolute -top-16">
            <Lines className="absolute -top-4 left-full translate-y-[50%] -translate-x-[80px]" />
            <Image src={side1} alt="student carrer vyas" />
            <div className="bg-white w-fit px-4 py-2 rounded-md absolute top-2/3 -left-20 shadow-md font-extrabold">
              1 on 1 Mentorship
            </div>
            <div className="bg-white w-fit px-4 py-2 rounded-md absolute top-[40%] -right-2 shadow-md font-extrabold">
              Peer 2 Peer Mentorship
            </div>
          </div>
          <div className="absolute top-20 lg:-right-[92%] xl:-right-[75%] 2xl:-right-[70%] w-[1000px]">
            <Image src={side2} alt="students carrer vyas" />
            <div className="bg-white w-fit px-4 py-2 rounded-md absolute top-2/3 left-28 shadow-md font-extrabold">
              Get your Doubt Solved
            </div>
            <div className="bg-white w-fit px-4 py-2 rounded-md absolute bottom-0 left-1/4 shadow-md font-extrabold">
              Know Your College
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col lg:hidden bg-no-repeat bg-cover w-full h-full"
        style={{
          backgroundImage: `url(${BackImage.src})`,
        }}
      >
        <div className="flex items-center flex-col w-full relative">
          <h1 className="m-2 font-bold text-4xl text-center">
            One Stop Solution to all your Career & College Queries
          </h1>
          <div className="flex items-center py-3 px-7 bg-white h-8 rounded-3xl w-fit">
            <p className="text-sm sm:text-md text-center font-semibold align-middle">
              # Bridging the gap between{" "}
              <span className="text-blue-700">School</span>
              {""} to <span className="text-blue-700"> College </span>{" "}
            </p>
          </div>
          <div className="absolute z-10 top-44 mobile:top-40 sm:top-32 flex flex-col items-center justify-center pt-6">
            <div className="flex flex-col items-center justify-center">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowQueryModal(true);
                }}
                className="ml-8 rounded-md py-1 px-2 sm:w-64 sm:py-4 bg-[#2F43FD] text-white font-extrabold"
              >
                Ask your Query for Free
              </button>
              <div className="flex text-md font-extrabold mt-1">
                <CheckSVG />
                <span className="ml-4 mr-2">300+ </span>Doubts Solved
              </div>
            </div>
            <div className="flex flex-col mt-2 items-center justify-center">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowMentorShipModal(true);
                }}
                className="ml-8 rounded-md py-1 px-2 sm:w-64 sm:py-4 bg-[#FFB11B] font-extrabold"
              >
                Book Free Mentorship Session
              </button>
              <div className="flex text-md font-extrabold mt-1">
                <CheckSVG />
                <span className="ml-4 mr-2">50+ </span>Mentorship Session Done
              </div>
            </div>
          </div>
        </div>
        <div className="mt-36 mobile:mt-24 flex flex-row w-full relative top-0">
          <div className="w-[500px] relative">
            <Image src={side1} alt="student carrer vyas" objectFit="cover" />
          </div>

          <div className="top-0 mobile:top-8 w-[600px] relative">
            <Image src={side2} alt="students carrer vyas" objectFit="cover" />
          </div>
          <div className="bg-white w-fit px-2 rounded-md absolute top-[60%] left-1/2 shadow-md font-extrabold">
            1 on 1 Mentorship
          </div>
          <div className="bg-white w-fit px-2 rounded-md absolute top-[40%] left-1/3 shadow-md font-extrabold">
            Peer 2 Peer Mentorship
          </div>
          <div className="left-[25%] top-[50%] sm:left-[45%] bg-white w-fit px-2 rounded-md absolute sm:top-[50%] shadow-md font-extrabold">
            Get your Doubt Solved
          </div>
          <div className="bg-white w-fit px-2 rounded-md absolute top-[75%] left-1/4 shadow-md font-extrabold">
            Know Your College
          </div>
        </div>
      </div>
    </>
  );
}
