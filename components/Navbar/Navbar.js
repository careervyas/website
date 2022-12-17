import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "./images/logo.svg";

export default function Navbar({ background }) {
  const [navback, setNavback] = useState("#E2FBF5");

  useEffect(() => {
    if (background != undefined) {
      setNavback("#FFFFFF");
    }
  }, []);

  const handleClick = () => {
    let menubar = document.getElementById("menubar");

    if (menubar.style.display == "none") {
      menubar.style.display = "block";
    } else {
      menubar.style.display = "none";
    }
  };

  return (
    <>
      <nav
        className="flex h-28 justify-between flex-row items-center"
        style={{ background: navback }}
      >
        <Link href="/">
          <div className="relative h-[150px] w-[100px]">
            <Image
              src={logo}
              alt="Career Vyas logo"
              width={100}
              height={200}
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>
        </Link>

        <div className="flex items-center  text-black mr-6 hidden md:block">
          <Link href="/">
            <a className="font text-l cursor-pointer tracking-tight hover:bg-[#B1C6F9] hover:font-bold py-12 px-4">
              {" "}
              Home{" "}
            </a>
          </Link>

          <Link href="/about">
            <a className="font text-l cursor-pointer tracking-tight hover:bg-[#B1C6F9] hover:font-bold py-12 px-4">
              {" "}
              About Us{" "}
            </a>
          </Link>
          <Link href="/cat" legacyBehavior>
            <a
              className="font text-l cursor-pointer tracking-tight hover:bg-[#B1C6F9] hover:font-bold py-12 px-4"
              target="_blank"
            >
              {" "}
              CAT Test{" "}
            </a>
          </Link>
          <Link href="https://newsletter.careervyas.com/" legacyBehavior>
          <a
              className="font text-l cursor-pointer tracking-tight hover:bg-[#B1C6F9] hover:font-bold py-12 px-4"
              target="_blank"
            >
              {" "}
              NewsLetter{" "}
            </a>
          </Link>
          <Link href="/blog">
            <a className="font text-l cursor-pointer tracking-tight hover:bg-[#B1C6F9] hover:font-bold py-12 px-4">
              {" "}
              Blog{" "}
            </a>
          </Link>
          <Link href="/team">
            <a className="font text-l cursor-pointer tracking-tight hover:bg-[#B1C6F9] hover:font-bold py-12 px-4">
              {" "}
              Team{" "}
            </a>
          </Link>

        
          <Link
            href="https://docs.google.com/forms/d/1pl5We-xqOu_8NAkQWVg9QaRsOc5aqYjXZxSLqeZ05s8/viewform?edit_requested=true "
            legacyBehavior
          >
            <a
              className="font text-l cursor-pointer tracking-tight hover:bg-[#B1C6F9] hover:font-bold py-12 px-4"
              target="_blank"
            >
              {" "}
              Join Us
            </a>
          </Link>
          
         
        
        </div>

        <div className="flex items-center md:hidden">
          <svg
            onClick={handleClick}
            className="mr-2"
            width="45"
            height="25"
            viewBox="0 0 30 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              y1="1"
              x2="30"
              y2="1"
              stroke="black"
              stroke-opacity="0.74"
              stroke-width="2"
            />
            <line
              y1="9"
              x2="30"
              y2="9"
              stroke="black"
              stroke-opacity="0.74"
              stroke-width="2"
            />
            <line
              y1="17"
              x2="30"
              y2="17"
              stroke="black"
              stroke-opacity="0.74"
              stroke-width="2"
            />
          </svg>
        </div>
      </nav>
      <div className="hidden" id="menubar">
        <div
          className="flex flex-col items-center  text-black 
      bg-[#E2FBF5] "
      style={{ background: navback }}
        >
          <Link href="/">
            <div className="font text-l cursor-pointer tracking-tight  hover:font-bold my-1">
              {" "}
              Home{" "}
            </div>
          </Link>

          <Link href="/about">
            <div className="font text-l cursor-pointer tracking-tight hover:font-bold my-1">
              {" "}
              About Us{" "}
            </div>
          </Link>
          <Link href="/cat" legacyBehavior>
            <a
              target="_blank"
              className="font text-l cursor-pointer tracking-tight  hover:font-bold my-1"
            >
              {" "}
              CAT Test{" "}
            </a>
          </Link>
          <Link href="https://newsletter.careervyas.com/" legacyBehavior>
          <a
              className="font text-l cursor-pointer tracking-tight hover:bg-[#B1C6F9] hover:font-bold my-1"
              target="_blank"
            >
    
              NewsLetter
            </a>
          </Link>
          <Link href="/blog">
            <div className="font text-l cursor-pointer tracking-tight hover:font-bold my-1">
              {" "}
              Blog{" "}
            </div>
          </Link>
          <Link href="/team">
            <div className="font text-l cursor-pointer tracking-tight  hover:font-bold my-1">
              {" "}
              Team{" "}
            </div>
          </Link>

          
          <Link
            href="https://docs.google.com/forms/d/1pl5We-xqOu_8NAkQWVg9QaRsOc5aqYjXZxSLqeZ05s8/viewform?edit_requested=true "
            legacyBehavior
          >
            <a
              target="_blank"
              className="font text-l cursor-pointer tracking-tight  hover:font-bold my-1"
            >
              {" "}
              Join Us
            </a>
          </Link>
          
          
        </div>
      </div>
    </>
  );
}

// #E2FBF5;
