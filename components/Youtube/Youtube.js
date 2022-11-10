import Image from "next/image";
import Arrow from "./ELements/Arrow";
import Ellipse from "./ELements/Ellipse";
import youtube from "./images/youtube.svg";
import Link from "next/link";
export default function Youtube() {
  return (
    <div className=" w-full h-96 flex flex-row mb-20">
      <div className="w-7/12 h-full flex flex-row items-center justify-center bg-[#6776FF] border-2 border-blue-800 relative">
        <Arrow />
        <Ellipse />
        <div className="flex flex-col justify-center">
          <h1 className="text-xl lg:text-4xl w-4/5 text-white font-bold leading-snug">
            Explore the Well Curated Information on our Youtube Channel
          </h1>
          <Link href="https://www.youtube.com/c/CareerVyas">
            <button
              className="bg-white w-44 my-5 h-12 text-[#6776FF] font-semibold rounded-md shadow-lg hover:shadow-lg hover:shadow-slate-600 
         "
            >
              Check Out Now!
            </button>
          </Link>
        </div>
      </div>

      {/* <img src="https://firebasestorage.googleapis.com/v0/b/carrervyaswebsite.appspot.com/o/Bannner%2FRectangle%20103.svg?alt=media&token=e5c68035-ba52-4bca-bc9b-9e494281cad9" alt="youtube"
      className="h-full w-5/12 object-cover"  /> */}
      <div className="h-full w-5/12 object-cover relative">
        <Image
          src={youtube}
          alt="youtube"
          width={700}
          height={300}
          objectFit="cover"
          layout="fill"
        />
      </div>
    </div>
  );
}
