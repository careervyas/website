import Card from "./Card";
import Lines1 from "../Elements/Lines1";
import Lines from "../Elements/Lines";
import EllipseSide from "../Elements/EllipseSide";
import { motion } from "framer-motion";
import Carousel from "./Carousel";

const data = [
  {
    title: "Cohort Shala",
    content:
      "Peer to Peer Learning Platform with a dedicated Community Manager.",
  },
  {
    title: "Content Libraries",
    content:
      "A curated database of colleges, courses, and career profiles that address admission-related queries.",
  },
  {
    title: "Mentoring and Guidance",
    content:
      "Team of in-house experts who can provide solutions to all College Related Queries",
  },
  {
    title: "College Vyas",
    content:
      "Personalized Sessions to assist students in determining their career options.",
  },
];

export default function Carrer() {
  return (
    <div
      className="w-full h-full flex flex-col justify-center items-center py-20
    relative overflow-hidden"
    >
      <h1 className="text-xl md:text-3xl w-3/5 text-center font-semibold">
        How <span className="text-blue-700"> Career Vyas</span> is changing the
        way of Career Guidance?
      </h1>
      <div className="w-full flex flex-col lg:flex-row items-center ">
        <Lines1
          className="absolute top-full right-0 -translate-y-[250px]"
          width="40"
        />
        <Lines
          className={"absolute top-6 left-[78%] w-24 lg:w-36 -translate-y-1/4"}
        />
        <EllipseSide className="absolute top-20 left-0" width="50" />
        <div className="lg:w-1/2">
          <Carousel />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col md:flex-row  justify-center items-center">
          <motion.div
            whileInView={{ y: [100, 0] }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            className="flex flex-wrap md:flex-col justify-center items-center"
          >
            <Card title={data[0].title} content={data[0].content} />
            <Card title={data[1].title} content={data[1].content} />
          </motion.div>
          <motion.div
            whileInView={{ y: [-100, 0] }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            className="flex flex-wrap md:flex-col justify-center items-center"
          >
            <Card title={data[2].title} content={data[2].content} />
            <Card title={data[3].title} content={data[3].content} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
