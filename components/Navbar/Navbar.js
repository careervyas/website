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
    ["About Us", "/about"],
    ["Team", "/team"],
    ["CAT Test", "/cat", "bg-[#B1C6F9] font-bold"],
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
    ["About Us", "/about"],
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
    return (
      <Link href={detailsArray[1]}>
        <span
          className={`px-2 lg:px-4 py-10 text-sm md:text-l cursor-pointer hover:bg-[#B1C6F9] text-[#1A1A1A] ${detailsArray[2]}`}
          style={{
            textDecoration: isLinkCurrentPage ? "underline" : "",
            fontWeight: isLinkCurrentPage ? "bold" : "0",
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
          {desktopNavbarLinks.map((detailsArray) => (
            <DesktopNavbarLink detailsArray={detailsArray} />
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
          {mobileNavbarLinks.map((detailsArray) => (
            <MobileNavbarLink detailsArray={detailsArray} />
          ))}
        </div>
      </div>
    </>
  );
}
