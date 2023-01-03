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
          <div className="w-[90vw] max-w-[500px] h-[500px] relative">
            <Image
              layout="fill"
              src={poster}
              alt="ModalImage"
              objectFit="contain"
            />
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
            <p className="mb-4 font-bold text-lg">
              😃 Discover your Path with Us!!
            </p>
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
                className="shadow-xl rounded-md w-64 py-4 bg-[#2F43FD] text-white font-extrabold"
                id={styles.animateBounce1}
              >
                Ask your Query for ₹1
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
                id={styles.animateBounce2}
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
          <div className="absolute lg:-top-16 2xl:top-0 lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] 2xl:w-[600px] 2xl:h-[600px] lg:right-44 xl:right-64 2xl:right-36">
            <Lines className="absolute top-[12%] z-10 lg:-right-[25%] xl:-right-[10%] 2xl:right-[28%]" />
            <Image src={side1} alt="student carrer vyas" />
            <div className="bg-white absolute top-[60%] -left-20 min-w-[120px] w-fit px-4 py-2 rounded-md shadow-md font-extrabold">
              1 on 1 Mentorship
            </div>
            <div className="bg-white absolute top-[35%] left-36 min-w-[120px] w-fit px-4 py-2 rounded-md shadow-md font-extrabold">
              Peer 2 Peer Learning
            </div>
          </div>
          <div className="absolute lg:top-32 xl:top-0 lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] right-0">
            <Image src={side2} alt="students carrer vyas" layout="fill" />
            <div className="bg-white absolute top-[60%] left-1/3 min-w-[120px] w-fit px-4 py-2 rounded-md shadow-md font-extrabold">
              Get your Doubt Solved
            </div>
            <div className="bg-white absolute top-[90%] left-2/3 min-w-[120px] w-fit px-4 py-2 rounded-md shadow-md font-extrabold">
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
          <div className="flex items-center py-3 px-7 h-8 rounded-3xl w-fit">
            <p className="text-sm sm:text-md text-center font-semibold align-middle">
              # Bridging the gap between{" "}
              <span className="text-blue-700">School</span>
              {""} to <span className="text-blue-700"> College </span>{" "}
            </p>
          </div>
          <div className="absolute z-10 top-52 mobile:top-40 600:top-32 flex flex-col items-center justify-center pt-6">
            <div className="flex flex-col">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowQueryModal(true);
                }}
                className="shadow-xl rounded-md py-2 px-4 sm:w-64 sm:py-4 bg-[#2F43FD] text-white font-extrabold"
                id={styles.animateBounce1}
              >
                Ask your Query for ₹1
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
                id={styles.animateBounce2}
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
        <div className="relative top-12 mt-36 mobile:mt-24 flex flex-row w-full">
          <div className="w-[400px] relative">
            <Image src={side1} alt="student carrer vyas" objectFit="cover" />
            <div className="z-10 absolute top-[25%] 600:top-[50%] left-[80%] bg-white w-[90px] 420:w-[180px] rounded-md shadow-md text-[8px] 420:text-base font-extrabold px-1 420:px-2">
              1 on 1 Mentorship
            </div>
            <div className="z-10 absolute top-[40%] 600:top-[30%] md:top-[35%] left-[60%] bg-white w-[90px] 420:w-[180px] rounded-md shadow-md text-[8px] 420:text-base font-extrabold px-1 420:px-2">
              Peer 2 Peer Learning
            </div>
          </div>

          <div className="w-[500px] relative">
            <Image src={side2} alt="students carrer vyas" objectFit="cover" />
            <div className="z-10 absolute top-[55%] 600:top-[65%] md:top-[80%] md:-left-[10%] bg-white w-fit rounded-md shadow-md text-[8px] 420:text-base font-extrabold px-1 420:px-2">
              Get your Doubt Solved
            </div>
            <div className="z-10 absolute top-[70%] 600:top-[40%] md:top-[65%] left-[20%] bg-white w-[90px] 420:w-[180px] rounded-md shadow-md text-[8px] 420:text-base font-extrabold px-1 420:px-2">
              Know Your College
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
