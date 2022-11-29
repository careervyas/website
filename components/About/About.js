import Card from "./Card";
import Bolt from "./Elements/Bolt";
import Ellipse from "./Elements/Ellipse";
import Lines from "./Elements/Lines";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className=" w-full h-full flex flex-col relative">
      <div
        className="flex flex-col lg:flex-row bg-[#A9B2FF] w-full h-72 
      mb-24  items-start lg:items-center relative"
      >
        <div className="flex flex-row">
          <svg
            className="hidden md:block"
            width="92"
            height="51"
            viewBox="0 0 92 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-14 14.4829C-9.81152 12.2516 17.3067 -4.04747 22.6041 6.54734C27.6544 16.648 3.4288 34.8753 16.1774 44.4367C27.1014 52.6297 49.2049 42.9479 59.8787 38.5689C67.0086 35.6438 72.9054 30.8747 79.494 27.1686C79.974 26.8986 83.9573 24.542 82.5677 24.542"
              stroke="white"
              stroke-opacity="0.8"
              stroke-width="5"
              stroke-linecap="round"
            />
            <path
              d="M72.5085 19.5126C76.4435 19.2128 91.6332 14.6424 88.6031 22.3068C86.9847 26.4006 85.5854 29.1555 85.5854 33.5953"
              stroke="white"
              stroke-opacity="0.8"
              stroke-width="5"
              stroke-linecap="round"
            />
          </svg>

          <div className="flex flex-col mx-2">
            <h1 className="text-3xl text-white font-semibold">Career Vyas</h1>
            <p className="text-lg text-white font-semibold w-full sm:w-96">
              Career Vyas is one stop solution to all the Career and College
              Queries. We are bridging the gap of School to College.
            </p>
          </div>
        </div>

        <motion.div
          whileInView={{ y: ["-20vh", "0vh"] }}
          transition={{ duration: 2 }}
          className="block md:absolute top-1/2 right-1/4 ring-2 ring-white bg-white 
        rounded-lg m-3 md:m-0"
        >
          <img
            className=" ring-2 ring-blue-400 rounded-lg p-1"
            alt="Career Vyas team"
            src="https://firebasestorage.googleapis.com/v0/b/carrervyaswebsite.appspot.com/o/About%2FRectangle%20107.png?alt=media&token=c208cc15-4ba6-4448-83cd-527a83a5cf14"
            width="300px"
            height="300px"
          />
        </motion.div>
      </div>
      <div className="flex flex-col lg:flex-row w-full h-full items-center relative">
        <Ellipse />
        <Lines />
        <div
          className="flex flex-col w-1/2 h-full items-center justify-center
        relative"
        >
          <motion.div
           whileInView={{ y: ["-30vh", "0vh"] }}
           transition={{ duration: 2 }}
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/carrervyaswebsite.appspot.com/o/About%2FRectangle%2016.svg?alt=media&token=f32a2fd7-c99b-41f8-bfb3-15da631179e3"
              height="500"
              width="300"
              className="border-8 border-blue-400 rounded-md"
            />
          </motion.div>

          <Bolt />
        </div>
        <motion.div 
        whileInView={{y:["-30vh","0vh"]}}
        transition={{duration:2}}
        className="grid grid-cols-1 md:grid-cols-2 h-full  gap-4 lg:gap-8 m-2">
          <Card
            title={"Mission"}
            content={
              "To assist people in exploring various career options and the opportunities that come with them by providing valuable mentoring and guidance. "
            }
          />
          <Card
            title={"Vision"}
            content={
              "Strengthening the vector of education to create an ecosystem where every student can discover the future that they dream of."
            }
          />
          <Card
            title={"What do we do?"}
            content={
              "Career Vyas is a career and mentoring platform that serves as a stepping stone to uplifting one's unique qualities by guiding one down the right career path."
            }
          />
          <Card
            title={"Why us?"}
            content={
              "We match students with the best and most renowned mentors in the country, one Stop Solution to all Admission Related Quries and organized information for 200+ courses, 300+ Indian Colleges, and 400+ career profiles."
            }
          />
        </motion.div>
      </div>
      <div
        className="flex flex-col w-full h-full bg-[url('https://firebasestorage.googleapis.com/v0/b/carrervyaswebsite.appspot.com/o/Background%2FBackground%20(1).svg?alt=media&token=8caf9e7c-b9dc-4deb-8efe-487b71ecc568')]
        bg-cover bg-no-repeat"
      >
        <h1 className="text-3xl font-semibold text-center m-10">
          Some Moments that we live for ❤️
        </h1>
        <div
          className="flex flex-col md:flex-row items-center 
        justify-center w-full h-full"
        >
          <div className="flex flex-col">
            <img
              className="h-auto md:h-[450px] m-2 md:m-0"
              src="https://firebasestorage.googleapis.com/v0/b/carrervyaswebsite.appspot.com/o/Team%20Images%2F1.jpeg?alt=media&token=5adf5f61-7ab6-474f-bc03-764bc04a5cea"
            />
            <img
              className="h-auto md:h-[450px] m-2 md:m-0"
              src="https://firebasestorage.googleapis.com/v0/b/carrervyaswebsite.appspot.com/o/Team%20Images%2F3.jpg?alt=media&token=afaac5dc-dd1e-4460-8eb6-f8f0bbe3415a"
            />
          </div>
          <div className="flex flex-col">
            <img
              className="h-auto md:h-[200px] m-2 md:m-0"
              src="https://firebasestorage.googleapis.com/v0/b/carrervyaswebsite.appspot.com/o/Team%20Images%2FRectangle%20111.png?alt=media&token=f6a9cef4-4a41-4dab-8c91-a1ac8a77b5e8"
            />
            <img
              className="h-auto md:h-[300px] m-2 md:m-0"
              src="https://firebasestorage.googleapis.com/v0/b/carrervyaswebsite.appspot.com/o/Team%20Images%2FRectangle%20113.png?alt=media&token=0ff13226-0211-4241-b112-d4e81cc89397"
            />
            <img
              className="h-auto md:h-[400px] m-2 md:m-0"
              src="https://firebasestorage.googleapis.com/v0/b/carrervyaswebsite.appspot.com/o/Team%20Images%2FIMG_20221017_130140.jpg?alt=media&token=1420a7a9-bfad-4189-92b5-edeaa826be89"
            />
          </div>
          <div className="flex flex-col ">
            <img
              className="h-auto md:h-[300px] m-2 md:m-0"
              src="https://firebasestorage.googleapis.com/v0/b/carrervyaswebsite.appspot.com/o/Team%20Images%2FRectangle%20112.png?alt=media&token=4120d9d5-2e3b-46b9-88a8-36c325fe38a5"
            />
            <img
              className="h-auto md:h-[300px] m-2 md:m-0"
              src="https://firebasestorage.googleapis.com/v0/b/carrervyaswebsite.appspot.com/o/Team%20Images%2FRectangle%20110.png?alt=media&token=a0705668-abca-486f-8591-085eeef773ec"
            />
            <img
              className="h-auto md:h-[300px] m-2 md:m-0"
              src="https://firebasestorage.googleapis.com/v0/b/carrervyaswebsite.appspot.com/o/Team%20Images%2FIMG_20221017_130118.jpg?alt=media&token=17ee9068-d5a8-4799-aa43-f09a51d74e06"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
