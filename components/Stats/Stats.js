import Card from "./StatCard";
import data from "./Data";
import { useEffect, useState } from "react";
import Arrow from "../Elements/ArrowAbove";
import Bolt from "../Elements/Bolt";
import Lines from "../Elements/Lines1";

export default function Stat() {
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    setCardData(data);
  });

  return (
    <div className="flex flex-col relative h-full w-full overflow-hidden">
      <Arrow className={"absolute top-0 left-0 md:left-1/4 translate-x-0 lg:translate-x-10"}/>
      <Bolt className={"absolute top-1/4 left-2"}/>
      <Lines className={"absolute top-1/4 right-0 -translate-y-10"}/>
      <div
        className="flex items-center flex-col my-4 
        w-full"
      >
        <h2 className="text-xl md:text-3xl font-semibold w-2/3 md:w-1/3 text-center
        mt-10 mb-5">
          Numbers never matter to us,but your Support Does ❣️
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-5 w-full h-full">
          {cardData.map((item, index) => {
            return (
              <Card
                title={item.title}
                counter={item.counter}
                icon={item.icon}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
