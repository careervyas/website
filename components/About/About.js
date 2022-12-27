import Card from "./Card";
import Bolt from "./Elements/Bolt";
import Ellipse from "./Elements/Ellipse";
import Lines from "./Elements/Lines";
import Arrow from "./Elements/arrow";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className=" w-full h-full flex flex-col relative">
      <div className="flex flex-col lg:flex-row bg-[#A9B2FF] w-full h-72 mb-24 items-start lg:items-center relative">
        <div className="flex flex-row">
          <Arrow className="hidden md:block" width="92" height="51" />

          <div className="flex flex-col mx-2">
            <h1 className="text-3xl text-white font-semibold">Career Vyas</h1>
            <p className="text-lg text-white font-semibold w-full sm:w-96">
              Career Vyas is one stop solution to all the Career and College
              Queries. We are bridging the gap of School to College.
            </p>
          </div>
        </div>

        <motion.div
          animate={{ y: ["-20vh", "0vh"] }}
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
            animate={{ y: ["-30vh", "0vh"] }}
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
          animate={{ y: ["-30vh", "0vh"] }}
          transition={{ duration: 2 }}
          className="grid grid-cols-1 md:grid-cols-2 h-full  gap-4 lg:gap-8 m-2"
        >
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
