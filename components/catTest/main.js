import c1 from "./images/c1.svg";
import c2 from "./images/c2.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import firebaseConfig from "../Firebase/config";
import firebase from "firebase/app";
import "firebase/firestore";
import Router from "next/router";

export default function CAT() {
  const [showModal, setShowModal] = useState(false);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Hometown, setHometown] = useState("");
  const [Class, setClass] = useState("");
  const [nextTest, setNextTest] = useState(0);
  const handleModal = () => {
    setNextTest(1);
    setShowModal(true);
  };

  const handleModal1 = () => {
    setNextTest(2);
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const db = firebase.firestore();
    db.collection("CAT").add({
      Name: Name,
      Email: Email,
      Phone: Phone,
      Hometown: Hometown,
      Class: Class,
    });

    setName("");
    setEmail("");
    setPhone("");
    setHometown("");
    setClass("");
    setShowModal(false);
    
    console.log("Next Test", nextTest);

    if(nextTest === 1){
       Router.push("/CareerTest");
    }
    else if(nextTest === 2){
        Router.push("/StreamTest");
    }
    
  };
  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    window.onclick = function (event) {
      if (event.target == document.getElementById("myModal")) {
        setShowModal(false);
      }
    };
  }, []);
  return (
    <div
      className="w-full h-full flex flex-col items-center
    bg-[url('https://firebasestorage.googleapis.com/v0/b/carrervyaswebsite.appspot.com/o/Background%2FCAT%20TEST%20(1).svg?alt=media&token=034c87dd-67e9-4e23-9e0f-86aa67ac3719')]
        bg-cover bg-no-repeat mb-10"
    >
      <div
        className="hidden md:flex flex-row items-center justify-between mx-12 my-6 w-3/4
      bg-[#6776FF] px-4 lg:px-8 rounded-lg shadow-md h-fit md:h-[230px] bg-opacity-50 py-4 md:py-0 "
      >
        <div className="flex flex-col w-1/2 lg:w-1/3 ">
          <span className="font-bold text-xl mb-2">
            Stream Selection Assesment Test
          </span>
          <span className="text-md">
            Give this test and analyse the best Stream after Class X for you.
          </span>
          <button
            className="bg-[#6776FF] font-semibold h-12 w-24 md:w-48
          text-white mt-5 text-center align-middle rounded-xl
          hover:bg-blue-700 text-sm md:text-md"
            
            onClick={handleModal }
          >
            Start Your Test
          </button>
        </div>
        <div className="mr-1 lg:mr-10 w-1/3 h-[230px] relative">
          <Image src={c1} alt="carrer vyas" layout="fill" objectFit="contain" />
        </div>
      </div>

      {/* Mobile View */}
      <div
        className="flex md:hidden flex-col items-center justify-between mx-12 my-6 w-3/4
      bg-[#6776FF] px-4 lg:px-8 rounded-lg shadow-md h-fit md:h-[230px] bg-opacity-50 py-4 md:py-0 "
      >
        <div className="flex flex-col w-full">
          <span className="font-bold text-xl mb-2">
            Stream Selection Assesment Test
          </span>
          <span className="text-md">
            Give this test and analyse the best Stream after Class X for you.
          </span>
        </div>
        <div className="flex flex-row w-full items-center justify-between">
          <button
            className="bg-[#6776FF] font-semibold h-12 w-32 sm:w-48
          text-white mt-5 text-center align-middle rounded-xl
          hover:bg-blue-700 text-sm md:text-md p-2"
     
            onClick={handleModal }
          >
            Start Your Test
          </button>
          <div className="mr-1 lg:mr-10 w-1/3 h-[130px] relative">
            <Image src={c1} alt="carrer vyas" layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>

      <div
        className="hidden md:flex flex-row items-center justify-between mx-12 my-6 w-3/4
        bg-[#C1FFF0] px-4 lg:px-8 rounded-lg shadow-md h-fit md:h-[230px] bg-opacity-50 py-4 md:py-0"
      >
        <div className="flex flex-col w-1/2 lg:w-1/3 ">
          <span className="font-bold text-xl mb-2">Career Assesment Test</span>
          <span className="text-md">
            Overall Career Assesment for better analzying of the Career Options.
          </span>
          <button
            className="bg-[#00FFC2] font-semibold h-12 w-24 md:w-48
          text-white mt-5 text-center align-middle rounded-xl
          hover:bg-green-500 text-sm md:text-md"
       
            onClick={handleModal1 }
          >
            Start Your Test
          </button>
        </div>
        <div className="mr-1 lg:mr-10 w-1/3 h-[230px] relative">
          <Image src={c2} alt="carrer vyas" layout="fill" objectFit="cover" />
        </div>
      </div>
      {/* Mobile View */}

      <div
        className="flex md:hidden flex-col items-center justify-between mx-12 my-6 w-3/4
        bg-[#C1FFF0] px-4 lg:px-8 rounded-lg shadow-md h-fit md:h-[230px] bg-opacity-50 py-4 md:py-0 "
      >
        <div className="flex flex-col w-full">
          <span className="font-bold text-xl mb-2">Career Assesment Test</span>
          <span className="text-md">
            Overall Career Assesment for better analzying of the Career Options.
          </span>
        </div>
        <div className="flex flex-row w-full items-center justify-between">
          <button
            className="bg-[#00FFC2] font-semibold h-12 w-32 sm:w-48 
          text-white mt-5 text-center align-middle rounded-xl
          hover:bg-green-500 text-sm md:text-md"
          
            onClick={handleModal1}
          >
            Start Your Test
          </button>
          <div className="mr-1 lg:mr-10 w-1/3 h-[130px] relative">
            <Image src={c2} alt="carrer vyas" layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>

      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            id="myModal"
          >
            <div className="relative my-6 w-4/5 md:w-2/5">
              <div className="items-center border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none p-6">
                <h3 className="text-lg md:text-2xl font-semibold text-[#6776FF] mb-5">
                  Enter your details below
                </h3>
                <div className="flex flex-col w-4/5">
                  <label className="text-lg  text-black mt-3">Name</label>
                  <input
                    type="text"
                    className="w-full h-10 px-2 bg-white text-black border-2  rounded-lg border-slate-400 focus:outline-none focus:ring-2 focus:ring-[#6776FF] focus:border-transparent"
                    placeholder="Enter your name"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label className="text-lg text-black mt-3">Email</label>
                  <input
                    type="email"
                    className="w-full h-10 px-2 bg-white text-black border-2  rounded-lg border-slate-400 focus:outline-none focus:ring-2 focus:ring-[#6776FF] focus:border-transparent"
                    placeholder="Enter your Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label className="text-lg text-black mt-3">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="w-full h-10 px-2 bg-white text-black border-2  rounded-lg border-slate-400 focus:outline-none focus:ring-2 focus:ring-[#6776FF] focus:border-transparent"
                    placeholder="Enter your Mobile Number"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <label className="text-lg text-black mt-3">Class</label>
                  <input
                    type="text"
                    className="w-full h-10 px-2 bg-white text-black border-2  rounded-lg border-slate-400 focus:outline-none focus:ring-2 focus:ring-[#6776FF] focus:border-transparent"
                    placeholder="Class in which you study"
                    onChange={(e) => setClass(e.target.value)}
                  />
                  <label className="text-lg text-black mt-3">Home Town</label>
                  <input
                    type="text"
                    className="w-full h-10 px-2 bg-white text-black border-2  rounded-lg border-slate-400 focus:outline-none focus:ring-2 focus:ring-[#6776FF] focus:border-transparent"
                    placeholder="Enter your Hometown"
                    onChange={(e) => setHometown(e.target.value)}
                  />
                </div>
                <button
                  className="bg-[#6776FF] font-semibold h-12 w-32 md:w-48 my-5
                  text-center align-middle text-white rounded-lg hover:bg-blue-600"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
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
