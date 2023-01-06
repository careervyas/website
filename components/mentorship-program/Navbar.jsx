import Link from "next/link.js";
import React from "react";
import Logo from "./Logo.jsx";

export default function Navbar() {
  return (
    <div className="bg-[#212121] h-24 flex items-center justify-between px-6 900:px-12 text-white">
      <Link href="/">
        <Logo className="cursor-pointer bg-white rounded-full w-[80px] h-[80px]" />
      </Link>
      <div>
        <span className="hidden 900:inline mr-6 font-medium text-xl">
          Want to Mentor and Guide India&apos;s Sharpest Minds 👉
        </span>
        <Link href="/mentorship-program/join-our-team">
          <span className="bg-[#6766FF] px-2 900:px-4 py-2 cursor-pointer">
            BECOME A MENTOR
          </span>
        </Link>
      </div>
    </div>
  );
}
