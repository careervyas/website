import React from "react";
import Navbar from "../../components/mentorship-program/Navbar.jsx";
import Main from "../../components/mentorship-program/JoinOurTeam.jsx";
import Footer from "../../components/mentorship-program/Footer.jsx";
import Head from "next/head.js";
export default function JoinOurTeam() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="bg-black" style={{ fontFamily: "Lato" }}>
        <Navbar />
        <Main />
        <Footer />
      </div>
    </>
  );
}
