import Lines2 from "../Elements/Lines2";
import Lines from "../Elements/Lines";
import side1 from "./side1.svg";
import Image from "next/image";
import side2 from "./side2.svg";
import BackImage from "./LandingPage.png";
import Check from "./check.png";
import styles from "./Main.module.css";
import Modal from "../../components/Modal/Modal";
import HaveAQueryForm from "../Query/HaveAQueryForm";
import MentorShipForm from "../Query/MentorShipForm.js";
import { useState } from "react";
import poster from "./poster.png";

const CheckIcon = () => <Image src={Check} width={26} height={26} />;

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
  const [showQueryModal, setShowQueryModal] = useState(false);
  const [showMentorShipModal, setShowMentorShipModal] = useState(false);
  const [showModal, setShowModal] = useState(true);

  return (
    <>
      <Modal
        modalState={[showModal, setShowModal]}
        className="grid place-items-center w-full"
      >
        <div className="flex flex-col z-50 bg-white p-4">
          <div onClick={() => setShowModal(false)} className="cursor-pointer">
            <CrossIcon />
          </div>
          <div className="w-[500px] h-[500px] relative">
            <Image layout="fill" src={poster} alt="ModalImage" />
          </div>
          <a
            href="https://wa.me/918437399123?text=Hello%20Career%20Vyas%2C%0AAre%20you%20there%20%3F%3F%20I%20have%20a%20query%20to%20solve!!%0A%0A"
            target="_blank"
            className="bg-[#FFB11B] px-2 py-1 rounded-lg text-sm w-fit text-center mx-auto mt-4"
            rel="noreferrer"
          >
            OR CLICK HERE TO GET STARTED
          </a>
        </div>
      </Modal>
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
        className={`hidden pl-10 h-[800px] pt-14 lg:flex bg-no-repeat bg-cover relative ${styles.slanted} overflow-hidden`}
        style={{
          backgroundImage: `url(${BackImage.src})`,
        }}
      >
        <Lines2
          className={"absolute top-16 left-0 w-24 lg:w-36 -translate-y-1/4"}
        />
        <div className="relative w-1/2 pl-6">
          <div className="text-[#333333]">
            <p className="mb-4 font-bold text-lg">😀 Single One Liner</p>
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
          <div className="flex flex-row">
            <div className="flex flex-col">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowQueryModal(true);
                }}
                className="hover:animate-bounce shadow-xl rounded-md w-64 py-4 bg-[#2F43FD] text-white font-extrabold"
              >
                Ask your Query for Free
              </button>
              <div className="flex text-lg font-extrabold mt-4">
                <div class="max-h-[26px] w-[26px] h-[26px]">
                  <CheckIcon />
                </div>
                <span className="ml-4 text-2xl mr-2">300+ </span>Doubts Solved
              </div>
            </div>
            <div className="flex flex-col ml-8">
              <button
                className="hover:animate-bounce shadow-xl rounded-md w-64 py-4 bg-[#FFB11B] font-extrabold"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowMentorShipModal(true);
                }}
              >
                Book Free Mentorship Session
              </button>
              <div className="flex text-lg font-extrabold mt-4">
                <div class="max-h-[26px] w-[26px] h-[26px]">
                  <CheckIcon />
                </div>
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
          <div className="absolute 2xl:static 2xl:ml-60 top-20 lg:-right-[92%] xl:-right-[75%] 2xl:-right-[70%] w-[1000px]">
            <Image src={side2} alt="students carrer vyas" />
            <div className="bg-white w-fit px-4 py-2 rounded-md absolute top-2/3 left-28 2xl:static shadow-md font-extrabold">
              Get your Doubt Solved
            </div>
            <div className="bg-white w-fit px-4 py-2 rounded-md absolute bottom-0 left-1/4 2xl:static shadow-md font-extrabold">
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
            <div className="flex flex-col">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowQueryModal(true);
                }}
                className="hover:animate-bounce shadow-xl rounded-md py-1 px-2 sm:w-64 sm:py-4 bg-[#2F43FD] text-white font-extrabold"
              >
                Ask your Query for Free
              </button>
              <div className="flex text-md font-extrabold mt-1">
                <CheckIcon />
                <span className="ml-4 mr-2">300+ </span>Doubts Solved
              </div>
            </div>
            <div className="flex flex-col mt-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowMentorShipModal(true);
                }}
                className="hover:animate-bounce shadow-xl rounded-md py-1 px-2 sm:w-64 sm:py-4 bg-[#FFB11B] font-extrabold"
              >
                Book Free Mentorship Session
              </button>
              <div className="flex text-md font-extrabold mt-1">
                <CheckIcon />
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
