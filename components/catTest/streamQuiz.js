import Image from "next/image";
import { useEffect, useState } from "react";
import science from "./images/science.svg";
import aptitude from "./images/aptitude.svg";
import english from "./images/english.svg";
import Side from "./Elements/Side";
import Bottom from "./Elements/Bottom";
import EllipseRight from "./Elements/EllipseRight";
import EllipseLeft from "./Elements/EllipseLeft";
import left from "./images/left.svg";
import right from "./images/right.svg";
import data from "./data";
import congo from "./images/congo.svg";
import first from "./images/first.svg";
import second from "./images/second.svg";
import last from "./images/last.svg";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import whatsapp from "./images/whatsapp.svg";
import telegram from "./images/telegram.svg";
import streamSelector from "./images/streamSelector.svg";

export default function GeneralQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [title, setTitle] = useState(data.Aptitude[0].question);
  const [option1, setOption1] = useState(data.Aptitude[0].a);
  const [option2, setOption2] = useState(data.Aptitude[0].b);
  const [option3, setOption3] = useState(data.Aptitude[0].c);
  const [option4, setOption4] = useState(data.Aptitude[0].d);
  const [correct, setCorrect] = useState(data.Aptitude[0].ans);

  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [selectedbg, setSelectedbg] = useState(0);
  const [attempted, setAttempted] = useState([]);
  const [category, setCategory] = useState("Aptitude");
  const [showModal, setShowModal] = useState(false);
  const [ModalImage, setModalImage] = useState();
  const [ModalText, setModalText] = useState();
  const [ModalTitle, setModalTitle] = useState();
  const [showModal2, setShowModal2] = useState(false);
  const [stream, setStream] = useState("");
  const [pcm, setPcm] = useState(0);
  const [pcb, setPcb] = useState(0);
  const [commerce, setCommerce] = useState(0);
  const [arts, setArts] = useState(0);

  useEffect(() => {
    window.onclick = function (event) {
      if (event.target == document.getElementById("myModal")) {
        setShowModal(false);
        setShowModal2(false);
      }
    };
  }, []);

  const handleMark = (e) => {
    e.preventDefault();
    if (selected === "") {
      toast.error("Please select an option");
      return;
    } else if (category === "streamSelector") {
      if (selected === "Yes" || selected === "Yes, Will love to") {
        if (data[category][currentQuestion].id === "PCM") {
          setPcm(pcm + 1);
        } else if (data[category][currentQuestion].id === "PCB") {
          setPcb(pcb + 1);
        } else if (data[category][currentQuestion].id === "Commerce") {
          setCommerce(commerce + 1);
        } else if (data[category][currentQuestion].id === "humanities") {
          setArts(arts + 1);
        } else if (data[category][currentQuestion].id === "PCB,PCM") {
          setPcm(pcm + 1);
          setPcb(pcb + 1);
        }
      }
    } else if (selected === correct) {
      setScore(score + 1);
    }

    attempted.push({
      id: currentQuestion,
      selected: selected,
      selectedbg: selectedbg,
      category: category,
    });

    setSelected("");
    setSelectedbg(0);

    moveright();
  };

  const moveleft = () => {
    if (currentQuestion > 0) {
      console.log("left:", attempted);

      setSelected("");
      setSelectedbg(0);

      for (let i = 0; i < attempted.length; i++) {
        if (attempted[i].id === currentQuestion - 1) {
          setSelected(attempted[i].selected);
          setSelectedbg(attempted[i].selectedbg);
        }
      }

      setCurrentQuestion(currentQuestion - 1);
      setTitle(data[category][currentQuestion - 1].question);
      setOption1(data[category][currentQuestion - 1].a);
      setOption2(data[category][currentQuestion - 1].b);
      setOption3(data[category][currentQuestion - 1].c);
      setOption4(data[category][currentQuestion - 1].d);
      setCorrect(data[category][currentQuestion - 1].ans);
    }
  };

  const moveright = () => {
    if (currentQuestion === data[category].length - 1) {
      if (category === "Aptitude") {
        if (attempted.length === data[category].length) {
          setCategory("English");
          setCurrentQuestion(0);
          setTitle(data.English[0].question);
          setOption1(data.English[0].a);
          setOption2(data.English[0].b);
          setOption3(data.English[0].c);
          setOption4(data.English[0].d);
          setCorrect(data.English[0].ans);
          setSelected("");
          setSelectedbg(0);

          setModalImage(first);
          setModalTitle("You are going great!");
          setModalText("Two More Sections to go...");
          setShowModal(true);
        } else {
          toast.warn("Please attempt all the questions in Aptitude Section");
        }
      } else if (category === "English") {
        if (attempted.length === data[category].length + data.Aptitude.length) {
          setCategory("Science");
          setCurrentQuestion(0);
          setTitle(data.Science[0].question);
          setOption1(data.Science[0].a);
          setOption2(data.Science[0].b);
          setOption3(data.Science[0].c);
          setOption4(data.Science[0].d);
          setCorrect(data.Science[0].ans);
          setSelected("");
          setSelectedbg(0);

          setModalImage(second);
          setModalTitle("well done!!");
          setModalText("You have completed this section");
          setShowModal(true);
        } else {
          toast.warn("Please attempt all the questions in English Section");
        }
      } else if (category === "Science") {
        if (
          attempted.length ===
          data[category].length + data.Aptitude.length + data.English.length
        ) {
          setCategory("streamSelector");
          setCurrentQuestion(0);
          setTitle(data.streamSelector[0].question);
          setOption1(data.streamSelector[0].a);
          setOption2(data.streamSelector[0].b);
          setOption3(data.streamSelector[0].c);
          setOption4(data.streamSelector[0].d);
          setCorrect(data.streamSelector[0].ans);
          setSelected("");
          setSelectedbg(0);

          setModalImage(last);
          setModalTitle("well done!!");
          setModalText("You have completed this section");
          setShowModal(true);
        } else {
          toast.warn("Please attempt all the questions in Science Section");
        }
      } else if (category === "streamSelector") {
        if (
          attempted.length ===
          data[category].length +
            data.Aptitude.length +
            data.English.length +
            data.Science.length
        ) {
          let max = Math.max(pcm, pcb, commerce, arts);
          let str = "";

          if (max === pcm) {
            str += "PCM";
          }
          if (max === pcb) {
            str += "PCB";
          }
          if (max === commerce) {
            str += "Commerce";
          }
          if (max === arts) {
            str += "Humanities";
          }
          setStream(str);
          setShowModal2(true);
        } else {
          toast.warn(
            "Please attempt all the questions in streamSelector Section"
          );
        }
      }
    } else if (currentQuestion < data[category].length - 1) {
      console.log("right:", attempted);

      setSelected("");
      setSelectedbg(0);

      for (let i = 0; i < attempted.length; i++) {
        if (
          attempted[i].id === currentQuestion + 1 &&
          attempted[i].category === category
        ) {
          setSelected(attempted[i].selected);
          setSelectedbg(attempted[i].selectedbg);
        }
      }

      setCurrentQuestion(currentQuestion + 1);
      setTitle(data[category][currentQuestion + 1].question);
      setOption1(data[category][currentQuestion + 1].a);
      setOption2(data[category][currentQuestion + 1].b);
      setOption3(data[category][currentQuestion + 1].c);
      setOption4(data[category][currentQuestion + 1].d);
      setCorrect(data[category][currentQuestion + 1].ans);
    } else {
      return;
    }
  };

  return (
    <div
      className="w-full h-[64vh] flex flex-col items-center
        bg-[url('https://firebasestorage.googleapis.com/v0/b/carrervyaswebsite.appspot.com/o/Background%2FCAT%20TEST%20(1).svg?alt=media&token=034c87dd-67e9-4e23-9e0f-86aa67ac3719')]
            bg-cover bg-no-repeat mb-10 relative"
    >
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
              <Image src={aptitude} alt="science" width={30} height={30} />
              <p className="text-black text-md">Aptitude</p>
            </div>
            <div
              className="w-28 flex flex-row items-center h-8 shadow-md
            shadow-slate-200 border-2 border-slate-200 rounded-lg p-2 cursor-pointer
            mx-2"
            >
              <Image src={science} alt="science" width={30} height={30} />
              <p className="text-black text-md">Science</p>
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
            <div
              className="w-42 flex flex-row items-center h-8 shadow-md
            shadow-slate-200 border-2 border-slate-200 rounded-lg p-2 cursor-pointer mx-2"
            >
              <Image src={streamSelector} alt="English" width={30} height={30} />
              <p className="text-black text-md">Stream Selector</p>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col bg-[#6776FF] border-2 border-black w-full
        bg-opacity-50 p-6"
        >
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-2xl font-semibold w-3/4">
              <span className="text-white">Ques-{currentQuestion + 1} </span>{" "}
              {title}
            </h1>
            <div className="flex flex-row ">
              <div className="mx-2 cursor-pointer" onClick={moveleft}>
                <Image src={left} alt="left" width={40} height={40} />
              </div>
              <div className="mx-2 cursor-pointer" onClick={moveright}>
                <Image src={right} alt="right" width={40} height={40} />
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-5">
            <div
              className="flex flex-row items-center  cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                setSelected(option1);
                if (selectedbg === 1) {
                  setSelectedbg(0);
                } else {
                  setSelectedbg(1);
                }
              }}
            >
              <p
                className="w-6 h-6 bg-white  border-2
              text-center align-middle"
                style={{
                  backgroundColor: selectedbg == 1 ? "blue" : "white",
                  color: selectedbg == 1 ? "white" : "black",
                }}
              >
                A.
              </p>
              <p className=" ml-2 text-xl">{option1}</p>
            </div>
          </div>

          <div className="flex flex-col mt-5">
            <div
              className="flex flex-row items-center cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                setSelected(option2);
                if (selectedbg === 2) {
                  setSelectedbg(0);
                } else {
                  setSelectedbg(2);
                }
              }}
            >
              <p
                className="w-6 h-6 bg-white  border-2
              text-center align-middle cursor-pointer"
                style={{
                  backgroundColor: selectedbg == 2 ? "blue" : "white",
                  color: selectedbg == 2 ? "white" : "black",
                }}
              >
                B.
              </p>
              <p className=" ml-2 text-xl">{option2}</p>
            </div>
          </div>

          <div className="flex flex-col mt-5">
            <div
              className="flex flex-row items-center cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                setSelected(option3);
                if (selectedbg === 3) {
                  setSelectedbg(0);
                } else {
                  setSelectedbg(3);
                }
              }}
            >
              <p
                className="w-6 h-6 bg-white  border-2
              text-center align-middle cursor-pointer"
                style={{
                  backgroundColor: selectedbg == 3 ? "blue" : "white",
                  color: selectedbg == 3 ? "white" : "black",
                }}
              >
                C.
              </p>
              <p className=" ml-2 text-xl">{option3}</p>
            </div>
          </div>

          <div className="flex flex-col mt-5">
            <div
              className="flex flex-row items-center cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                setSelected(option4);
                if (selectedbg === 4) {
                  setSelectedbg(0);
                } else {
                  setSelectedbg(4);
                }
              }}
            >
              <p
                className="w-6 h-6 bg-white  border-2
              text-center align-middle "
                style={{
                  backgroundColor: selectedbg == 4 ? "blue" : "white",
                  color: selectedbg == 4 ? "white" : "black",
                  visibility: option4 === "" ? "hidden" : "visible",
                }}
              >
                D.
              </p>
              <p className=" ml-2 text-xl">{option4}</p>
            </div>
          </div>

          <div className="flex flex-row justify-end mt-2">
            <button
              className="w-36 h-10 bg-[#6776FF] text-white
            rounded-lg hover:bg-blue-600"
              onClick={handleMark}
            >
              Mark as done
            </button>
          </div>
        </div>
      </div>

      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            id="myModal"
          >
            <div className="relative my-6 w-4/5 md:w-1/2 h-[500px]">
              <div
                className="items-center border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none p-6
              h-full"
              >
                <div className="h-full w-full relative">
                  <Image
                    src={ModalImage}
                    alt="ModalImage"
                    width={300}
                    height={300}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <p className="text-2xl font-semibold mt-5 text-[#6776FF]">
                  {ModalTitle}
                </p>
                <p className="text-xl font-semibold mt-5">{ModalText}</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

      {showModal2 ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            id="myModal"
          >
            <div className="relative my-6 w-4/5 md:w-1/2 h-[500px]">
              <div
                className="items-center border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none p-6
              h-full"
              >
                <div className="h-full w-full relative">
                  <Image
                    src={congo}
                    alt="ModalImage"
                    width={300}
                    height={300}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <p className="text-xl font-semibold mt-5 text-[#6776FF]">
                  Congratulations!!
                </p>
                <p className="text-2xl font-semibold mt-1">
                  You are done with the test!!
                </p>
                <p className="text-md mt-3">Your Complete test Score is</p>
                <p className="text-6xl font-semibold mt-1 text-[#6776FF]">
                  {score}
                </p>
                <p className="text-md mt-3">Your Preffered Stream </p>
                <p className="text-6xl font-semibold mt-1 text-[#6776FF]">
                  {stream}
                </p>
                <div className="flex flex-row justify-end mt-2">
                  <Image src={whatsapp} alt="whatsapp" width={50} height={50} />
                  <Image src={telegram} alt="whatsapp" width={50} height={50} />
                </div>


              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
