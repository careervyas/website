import clap from "./images/clap.svg";
import clap1 from "./images/clap1.svg";
import clock from "./images/clock.svg";
import account from "./images/account.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Blog({ author, date, readtime, id }) {
  let d = new Date(date);
  const [Clap, setClap] = useState(false);

  useEffect(() => {
    const c = localStorage.getItem(id);
    if (c) setClap(true);
  }, []);

  const handleClap = () => {
    setClap(!Clap);
    localStorage.setItem(id, !Clap);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center text- md:text-md">
      <div className="flex flex-row items-center">
        <Image
          src={account}
          width={20}
          height={20}
          layout="intrinsic"
          alt="career vyas blogs"
        />
        
        {author}
        <span className="ml-1 font-semibold">
          updated On {d.toString().substring(4, 16)}
        </span>
      </div>
      <div className="ml-1 flex flex-row items-center">
        <Image
          src={clock}
          width={20}
          height={20}
          layout="intrinsic"
          alt="career vyas blogs"
        />
        &nbsp;
        {readtime} minute read
        <Image
          src={Clap ? clap : clap1}
          width={30}
          height={20}
          layout="intrinsic"
          alt="career vyas blogs"
          onClick={handleClap}
        />
      </div>
    </div>
  );
}
