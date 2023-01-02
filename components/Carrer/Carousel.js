import React, { useEffect, useState } from "react";
import Image from "next/image";
import Image1 from "./images/1.svg";
import Image2 from "./images/2.svg";
import Image3 from "./images/3.svg";
import Image4 from "./images/4.svg";
import Image5 from "./images/5.svg";
import Image6 from "./images/6.svg";

const data = [Image1, Image2, Image3, Image4, Image5, Image6];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const length = data.length;
  useEffect(() => {
    const func = () => {
      setCurrent((current) => {
        if (current === length - 1) {
          return 0;
        }
        return current + 1;
      });
    };
    const id = setInterval(func, 1500);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div className="flex flex-row-reverse md:flex-row items-center justify-center mt-12">
      <div className="h-[500px] grid place-items-center w-5/6">
        {data.map((image, index) => {
          if (index === current) {
            return (
              <div
                className={`h-[500px] w-[280px] mobile:w-[350px] sm:w-[400px] mb-24 opacity-0 ${
                  index === current ? "opacity-100" : ""
                } ${index === current ? "scale-110" : ""}`}
                style={{ transition: "ease 1s" }}
                key={index}
              >
                {index === current && (
                  <Image
                    src={image}
                    alt="Carrer Vyas"
                    layout="fill"
                    width={350}
                    height={500}
                    objectFit="contain"
                  />
                )}
              </div>
            );
          } else {
            return <div key={index}></div>;
          }
        })}
      </div>
      <div className="flex flex-col gap-4">
        {[...Array(length)].map((_, index) => {
          return (
            <div
              className={`w-2 h-8 border-2 border-[#6776FF] rounded-md ${
                index === current ? "bg-[#6776FF]" : ""
              }`}
              key={index}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
