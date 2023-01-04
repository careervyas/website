import React from "react";
import Navbar from "../../components/mentorship-program/Navbar.jsx";
import Main from "../../components/mentorship-program/quiz/quiz.jsx";
import Footer from "../../components/mentorship-program/Footer.jsx";
import Head from "next/head.js";
export default function Story() {
  return (
    <>
      <Head>
        <style>
          @import
          url(&apos;https://fonts.googleapis.com/css2?family=Lato&display=swap&apos&apos;);
        </style>
      </Head>
      <div className="bg-black" style={{ fontFamily: "Lato" }}>
        <Navbar />
        <Main />
        <Footer />
      </div>
    </>
  );
}
