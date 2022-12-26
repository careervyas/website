import Card from "./StatCard";
import cardData from "./Data";
import Arrow from "../Elements/ArrowAbove";
import Bolt from "../Elements/Bolt";
import Lines from "../Elements/Lines1";

export default function Stat() {
  return (
    <div className="flex flex-col mt-8 relative h-full w-full overflow-hidden">
      <Arrow
        className="invisible md:visible absolute top-2 left-1/4 -translate-x-8 md:-translate-x-20 xl:-translate-x-40 translate-y-1"
        width="40px"
      />
      <Bolt
        className="absolute top-1/4 left-2 invisible sm:visible"
        width="32"
      />
      <Lines
        className="absolute top-1/4 right-0 -translate-y-20 invisible sm:visible"
        width="64"
      />
      <div className="flex items-center flex-col my-4 w-full">
        <h2 className="text-xl md:text-5xl font-semibold w-11/12 md:w-7/12 text-center mt-10 mb-5">
          Numbers never matter to us,but your Support Does ❣️
        </h2>
        <div
          className="grid m-5 w-full h-full justify-center"
          style={{
            gridTemplateColumns:
              "repeat(auto-fit, minmax(0, max(300px, 100%/4)))",
          }}
        >
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
