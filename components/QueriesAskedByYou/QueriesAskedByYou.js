import React, { useEffect } from "react";
import queryData from "./queryData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useRef } from "react";
import LeftArrow from "./Elements/LeftArrow";
import RightArrow from "./Elements/RightArrow";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1250 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1250, min: 700 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 700, min: 0 },
    items: 1,
  },
};

const QueryComponent = ({ query }) => {
  return (
    <div className="flex shadow-lg border-[1px] flex-col w-[270px] lg:w-[360px] h-[300px] 700:mx-4">
      <div className="w-full flex items-center px-6 h-[80px] bg-[#6776FF]">
        <div className="rounded-full h-fit mr-4">{query.askedBy.image}</div>
        <div className="flex flex-col text-2xl w-full text-white">
          <p className="text-base">{query.askedBy.name}</p>
          <p className="text-xs opacity-80">{query.askedBy.class}</p>
        </div>
        <div className="text-sm bg-white px-4 py-1 rounded-md text-[#6776FF]">
          {query.askedBy.board}
        </div>
      </div>
      <div>
        <h1 className="text-sm mt-4 text-[#6776FF] px-4 line-clamp-2">
          {query.title}
        </h1>
        <h1 className="text-xs mt-4 px-4 line-clamp-[8]">{query.query}</h1>
      </div>
    </div>
  );
};

export default function QueriesAskedByYou() {
  const carouselRef = useRef(null);
  let intervalId;
  useEffect(() => {
    intervalId = setInterval(() => {
      carouselRef.current.next();
    }, 2000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="py-12 grid place-items-center text-3xl md:text-5xl font-extrabold overflow-hidden">
      <h1>Queries Asked By You!!</h1>

      <div className="mt-12 h-full flex flex-row items-center justify-center w-screen">
        <LeftArrow
          className="cursor-pointer w-10"
          onClick={() => {
            clearInterval(intervalId);
            carouselRef.current.previous();
            intervalId = setInterval(() => {
              carouselRef.current.next();
            }, 2000);
          }}
        />
        <div className="w-[270px] 700:w-[80%] lg:w-[90%]">
          <div className="min-w-[320px] h-[360px]">
            <Carousel
              ref={carouselRef}
              responsive={responsive}
              infinite={true}
              focusOnSelect={true}
              arrows={false}
              draggable={false}
            >
              {queryData.map((query, index) => (
                <QueryComponent key={index} query={query} />
              ))}
            </Carousel>
          </div>
        </div>
        <RightArrow
          className="cursor-pointer w-10"
          onClick={() => {
            clearInterval(intervalId);
            carouselRef.current.next();
            intervalId = setInterval(() => {
              carouselRef.current.next();
            }, 2000);
          }}
        />
      </div>
    </div>
  );
}
