import React from "react";
import Navbar from "../../components/mentorship-program/Navbar.jsx";
import Main from "../../components/mentorship-program/story/story.jsx";
import MentorShipForm from "../../components/Forms/MentorShipForm";
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
        <div
          id="book-mentor"
          className="bg-white mx-4 420:mx-12 sm:mx-24 md:mx-44 my-20  p-6 420:p-12"
        >
          <MentorShipForm />
        </div>
        <Footer />
      </div>
    </>
  );
}
