import tele from "./tele.png";
import Image from "next/image";
import Link from "next/link";
export default function Telegram() {
 
  return (
    <div
      className="flex flex-col justify-center items-center
    bg-[url('https://firebasestorage.googleapis.com/v0/b/carrervyaswebsite.appspot.com/o/Footer%2FRectangle%20106.svg?alt=media&token=7288d83b-afea-42a3-bc3c-11f9e54698df')]
    bg-no-repeat bg-cover h-full sm:h-96 w-full p-2 md:p-10"
    >
      <h1
        className="text-white font-bold text-center
            text-xl md:text-6xl align-middle m-4"
      >
        {" "}
        Join Our Community to get Better EveryDay!!
      </h1>
      <p
        className="text-white font-semibold text-center
            text-sm md:text-4xl align-middle m-4"
      >
        FIND PEERS | STAY UPDATED | KEEP LEARNING
      </p>

      <Link href=" https://t.me/CareerVyaschat" legacyBehavior>
        <a target="_blank">
          <div className="m-5 md:m-10 cursor-pointer">
            <Image
              src={tele}
              alt="CareerVyas Telegram"
              width={240}
              height={50}
            />
          </div>
        </a>
      </Link>
    </div>
  );
}
