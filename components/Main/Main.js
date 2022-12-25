import Lines2 from "../Elements/Lines2";
import Lines from "../Elements/Lines";
import side1 from "./side1.svg";
import Image from "next/image";
import side2 from "./side2.svg";
import { useEffect } from "react";
import BackImage from "./LandingPage.png";
import styles from "./Main.module.css";

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
  */

  useEffect(() => {
    window.onclick = function (event) {
      if (event.target == document.getElementById("myModal")) {
        setShowModal(false);
      }
    };
  }, []);

  return (
    <>
      <div
        className={`hidden pt-14 md:flex bg-no-repeat bg-cover relative ${styles.slanted}`}
        style={{
          backgroundImage: `url(${BackImage.src})`,
        }}
      >
        <div className="flex flex-col w-[46%] pl-[60px] relative">
          <Lines2
            className={"absolute top-6 left-0 w-24 lg:w-36 -translate-y-1/4"}
          />
          <div class="text-[#333333]">
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
        </div>
        <div className="w-1/2 flex">
          <div className="w-2/3 relative h-2/3">
            <div>
              <Lines className="absolute -top-4 left-full translate-y-[50%] -translate-x-[80px]" />
              <Image
                src={side1}
                alt="student carrer vyas"
                width={500}
                height={300}
                objectFit="cover"
                layout="fill"
              />
            </div>
          </div>
          <div className="w-1/2 relative h-[600px]">
            <Image
              src={side2}
              alt="students carrer vyas"
              width={500}
              height={300}
              objectFit="cover"
              layout="fill"
            />
          </div>
        </div>
      </div>
      <div
        className="flex flex-col md:hidden bg-no-repeat bg-cover w-full h-full relative"
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
        </div>
        <div className="flex flex-row  w-full">
          <div className="w-1/2 relative h-[400px]">
            <Image
              src={side1}
              alt="student carrer vyas"
              width={100}
              height={400}
              objectFit="cover"
              layout="fill"
            />
          </div>

          <div className="w-1/2 relative h-[400px]">
            <Image
              src={side2}
              alt="students carrer vyas"
              width={100}
              height={400}
              objectFit="cover"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </>
  );
}
