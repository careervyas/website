import React from "react";
import Navbar from "../../components/mentorship-program/Navbar.jsx";
import Hero from "../../components/mentorship-program/home/hero";
import MeetOurMentors from "../../components/mentorship-program/home/meetourmentors";
import Quiz from "../../components/mentorship-program/home/Quiz.jsx";
import Benfits from "../../components/mentorship-program/home/Benfits.jsx";
import Testimonials from "../../components/mentorship-program/home/Testimonials.jsx";
import WhyUs from "../../components/mentorship-program/home/WhyUs.jsx";
import DreamCollege from "../../components/mentorship-program/home/DreamCollege.jsx";
import Pricing from "../../components/mentorship-program/home/Pricing.jsx";
import Demo from "../../components/mentorship-program/home/Demo.jsx";
import MentorShipForm from "../../components/Forms/MentorShipForm";
import Questions from "../../components/mentorship-program/home/Questions.jsx";
import Footer from "../../components/mentorship-program/Footer.jsx";
import Head from "next/head.js";
export default function index() {
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
      <div className="bg-black" style={{ fontFamily: "'Lato', sans-serif" }}>
        <Navbar />
        <Hero />
        <MeetOurMentors />
        <Quiz />
        <Benfits />
        <Testimonials />
        <WhyUs />
        <DreamCollege />
        <div id="pricing">
          <Pricing />
        </div>
        <Demo />
        <div
          id="book-mentor"
          className="bg-white mx-4 420:mx-12 sm:mx-24 md:mx-48 my-20 sm:my-44 p-6 420:p-12"
        >
          <MentorShipForm />
        </div>
        <Questions />
        <Footer />
      </div>
    </>
  );
}
