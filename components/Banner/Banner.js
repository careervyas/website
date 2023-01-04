import mobile from "./images/mobile.png";
import Image from "next/image";
import Bolt from "./Elements/bolt";
import BlueRipple from "./images/blueripple.png";
import playstore from "./images/play.svg";
import appstore from "./images/apple.svg";

const DownloadIcon = ({ icon }) => (
  <div className="cursor-pointer mix-blend-darken">
    <Image
      src={icon}
      alt="app carrer vyas"
      width={500}
      height={300}
      objectFit="cover"
    />
  </div>
);

export default function Banner() {
  return (
    <div className="flex flex-col-reverse mobile:flex-row items-center justify-center bg-[#EEECEC] relative overflow-hidden">
      <Bolt
        width="50"
        className="absolute -top-16 left-0 translate-x-full translate-y-full lg:block hidden"
      />
      <div className="grid place-items-center mobile:w-1/2 lg:w-[45%]">
        <h1 className="ml-7 text-slate-700 mb-2 font-bold text-xl md:text-4xl lg:text-[52px]">
          Get the Best Career Guidance App soon !!
        </h1>
        <p className="mt-2 ml-7 font-semibold text-sm md:text-2xl">
          Make sure you keep the eye on our App Launch 👀 👀
        </p>
        <div className="flex">
          <DownloadIcon icon={playstore} />
          <DownloadIcon icon={appstore} />
        </div>
      </div>
      <div className="mobile:w-1/2 w-full h-full relative right-8 mobile:right-10">
        <div
          className="m-10 h-[220px] md:h-[450px] lg:h-[600px] w-full relative grid place-items-center bg-contain bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${BlueRipple.src})`,
          }}
        >
          <Image
            className="z-10 block max-w-full h-auto"
            src={mobile}
            alt="student carrer vyas"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}
