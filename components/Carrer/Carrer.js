import Card from "./Card";
import Lines1 from "../Elements/Lines1";
import EllipseSide from "../Elements/EllipseSide";
import side from "./images/side.svg";
import Image from "next/image";
import { useEffect } from "react";
import { useMediaQuery } from "../../utils/media";

let data = [
  {
    title: "Cohort Shala",
    content:
      "Peer to Peer Learning Platform with a dedicated Community Manager.",
  },
  {
    title: "Mentoring and Guidance",
    content:
      "Team of in-house experts who can provide solutions to all College Related Queries",
  },
  {
    title: "Content Libraries",
    content:
      "A curated database of colleges, courses, and career profiles that address admission-related queries.",
  },
  {
    title: "College Vyas",
    content:
      "Personalized Sessions to assist students in determining their career options.",
  },
];

export default function Carrer() {
  const isSmall = useMediaQuery('(min-width: 480px)');
  const isMedium = useMediaQuery('(min-width: 768px)');

  return (
    <div
      className="w-full h-full flex flex-col justify-center items-center my-4
    relative"
    >
      <h1 className="text-3xl w-5/12 text-center font-semibold relative">
        How <span className="text-blue-700"> Career Vyas </span> is changing the
        way of Career Guidance?
      </h1>
      <div className="w-full flex flex-col lg:flex-row relative ">
        <Lines1 className={"absolute top-full right-0 -translate-y-1/2"} />
        <EllipseSide className={"absolute top-1/4 left-0"} />
        <div
          className="w-full lg:w-1/2 flex flex-row justify-center items-center"
        >
          {/* <img
            className="w-3/4"
            src=
              "https://firebasestorage.googleapis.com/v0/b/carrervyaswebsite.appspot.com/o/Bannner%2FFrame%2019.svg?alt=media&token=5113e65b-48cb-4b42-a496-5ae8979767ab"
            /> */}
          
            <Image
              src={side}
              alt="Carrer Vyas"
              width={500}
              height={400}
              layout="intrinsic"
            />
        
        </div>

        <div
          className="w-full lg:w-1/2 flex flex-col md:flex-row  justify-center items-center"
        >
          <div className="flex flex-col justify-center items-center">
            <Card title={data[0].title} content={data[0].content} />
            <Card title={data[1].title} content={data[1].content} />
          </div>
          <div className="flex flex-col justify-center items-center">
            <Card title={data[2].title} content={data[2].content} />
            <Card title={data[3].title} content={data[3].content} />
          </div>
        </div>
      </div>
    </div>
  );
}
