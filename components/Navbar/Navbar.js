import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "./images/logo.svg";

export default function Navbar({ background }) {
  const pathname = useRouter().pathname;
  // Variables
  const navback = background || "#E2FBF5";
  const desktopNavbarLinks = [
    ["Home", "/"],
    ["About Us", "/about-us"],
    ["Team", "/team"],
    ["CAT Test", "/cat"],
    ["Newsletter", "https://newsletter.careervyas.com/"],
    ["Blog", "/blog"],
    ["Mentorship Program", "/mentorship-program"],
    [
      "Join Us",
      "https://docs.google.com/forms/d/1pl5We-xqOu_8NAkQWVg9QaRsOc5aqYjXZxSLqeZ05s8/viewform?edit_requested=true",
    ],
  ];
  const mobileNavbarLinks = [
    ["Home", "/"],
    ["About Us", "/about-us"],
    ["CAT Test", "/cat"],
    ["Newsletter", "https://newsletter.careervyas.com/"],
    ["Blog", "/blog"],
    ["Team", "/team"],
    [
      "Join Us",
      "https://docs.google.com/forms/d/1pl5We-xqOu_8NAkQWVg9QaRsOc5aqYjXZxSLqeZ05s8/viewform?edit_requested=true",
    ],
  ];

  // Functions
  const handleClick = () => {
    const menubar = document.getElementById("menubar");
    if (menubar.style.display == "none") {
      menubar.style.display = "block";
    } else {
      menubar.style.display = "none";
    }
  };

  // Components
  const DesktopNavbarLink = ({ detailsArray }) => {
    const isLinkCurrentPage =
      pathname.split("/")[1] == detailsArray[1].substring(1);
    if (detailsArray[1] == "/mentorship-program") {
      return (
        <Link href={detailsArray[1]}>
          <div className="inline">
            <svg
              className="absolute right-[125px] lg:right-[180px] top-14"
              width="50"
              height="23"
              viewBox="0 0 50 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.53366"
                y="3.81229"
                width="47"
                height="18"
                rx="3.5"
                transform="rotate(-4 0.53366 3.81229)"
                fill="#FFB11B"
              />
              <path
                d="M18.3014 7.35428L18.9102 16.0603L17.8899 16.1316L12.6678 9.6278L12.5828 9.63374L13.0608 16.4693L12.0066 16.543L11.3978 7.83703L12.418 7.76569L17.6583 14.2853L17.7433 14.2794L17.2641 7.42682L18.3014 7.35428ZM21.0197 15.9128L20.4109 7.20677L25.6651 6.83936L25.7305 7.77458L21.5306 8.06827L21.7363 11.0099L25.6642 10.7353L25.7296 11.6705L21.8017 11.9452L22.0086 14.9038L26.2765 14.6054L26.3419 15.5406L21.0197 15.9128ZM29.7555 15.3019L26.7661 6.76237L27.8374 6.68746L30.1526 13.6509L30.2377 13.6449L31.5953 6.42469L32.7855 6.34145L35.1348 13.3025L35.2198 13.2965L36.5434 6.07868L37.6146 6.00377L35.8429 14.8762L34.7546 14.9523L32.3481 8.1491L32.28 8.15386L30.8437 15.2258L29.7555 15.3019Z"
                fill="black"
              />
              <rect
                x="0.53366"
                y="3.81229"
                width="47"
                height="18"
                rx="3.5"
                transform="rotate(-4 0.53366 3.81229)"
                stroke="black"
              />
            </svg>

            <span
              className="px-2 lg:px-4 py-9 text-sm md:text-l cursor-pointer hover:bg-[#B1C6F9] text-[#1A1A1A]"
              style={{
                textDecoration: isLinkCurrentPage ? "underline" : "none",
                fontWeight: isLinkCurrentPage ? "bold" : "0",
                ...detailsArray[2],
              }}
            >
              {detailsArray[0]}
            </span>
          </div>
        </Link>
      );
    }
    return (
      <Link href={detailsArray[1]}>
        <span
          className="px-2 lg:px-4 py-9 text-sm md:text-l cursor-pointer hover:bg-[#B1C6F9] text-[#1A1A1A]"
          style={{
            textDecoration: isLinkCurrentPage ? "underline" : "none",
            fontWeight: isLinkCurrentPage ? "bold" : "0",
            ...detailsArray[2],
          }}
        >
          {detailsArray[0]}
        </span>
      </Link>
    );
  };

  const MobileNavbarLink = ({ detailsArray }) => {
    return (
      <Link href={detailsArray[1]}>
        <div
          className="font text-xl cursor-pointer hover:font-bold my-1 px-6"
          style={{ backgroundColor: detailsArray[2] }}
        >
          {detailsArray[0]}
        </div>
      </Link>
    );
  };

  const HamburgerIcon = () => {
    return (
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
          strokeOpacity="0.74"
          strokeWidth="2"
        />
        <line
          y1="9"
          x2="30"
          y2="9"
          stroke="black"
          strokeOpacity="0.74"
          strokeWidth="2"
        />
        <line
          y1="17"
          x2="30"
          y2="17"
          stroke="black"
          strokeOpacity="0.74"
          strokeWidth="2"
        />
      </svg>
    );
  };

  return (
    <>
      <nav
        className="flex h-[78px] md:h-[89px] justify-between flex-row items-center md:pr-4 lg:pr-12"
        style={{ background: navback }}
      >
        <Link href="/">
          <div className="relative h-[85px] w-[120px] md:ml-4 lg:ml-12">
            <Image src={logo} alt="Career Vyas logo" />
          </div>
        </Link>
        <div className="hidden items-center text-black md:block">
          {desktopNavbarLinks.map((detailsArray, index) => (
            <DesktopNavbarLink key={index} detailsArray={detailsArray} />
          ))}
        </div>
        <div className="flex items-center md:hidden">
          <HamburgerIcon />
        </div>
      </nav>
      <div className="hidden" id="menubar">
        <div
          className="flex flex-col items-center text-black bg-[#E2FBF5] "
          style={{ background: navback }}
        >
          {mobileNavbarLinks.map((detailsArray, index) => (
            <MobileNavbarLink key={index} detailsArray={detailsArray} />
          ))}
        </div>
      </div>
    </>
  );
}
