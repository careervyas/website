import React, { useEffect, useState } from "react";
import Image from "next/image";
import Image1 from "./images/1.png";
import Image2 from "./images/2.png";
import Image3 from "./images/3.png";
import Image4 from "./images/4.png";
import Image5 from "./images/5.png";
import Image6 from "./images/6.png";

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
    const id = setInterval(func, 2000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div className="flex gap-4 lg:gap-0 xl:gap-8 flex-row-reverse md:flex-row items-center justify-center my-12">
      <div className="h-[260px] mobile:h-[300px] 600:h-[400px] lg:h-[500px] grid place-items-center">
        {data.map((image, index) => {
          if (index === current) {
            return (
              <div
                className={`w-[260px] h-[260px] mobile:w-[300px] mobile:h-[300px] 600:w-[400px] 600:h-[400px] lg:w-[500px] lg:h-[500px] grid place-items-center mb-24 opacity-0 ${
                  index === current ? "opacity-100" : ""
                } ${index === current ? "scale-90" : ""}`}
                style={{ transition: "ease 1s" }}
                key={index}
              >
                {index === current && (
                  <Image src={image} alt="Carrer Vyas" objectFit="contain" />
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
