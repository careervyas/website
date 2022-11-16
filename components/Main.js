import ArrowRound from "./Elements/ArrowRound";
import Lines2 from "./Elements/Lines2";
import Lines from "./Elements/Lines";
import side1 from "./side1.svg";
import Image from "next/image";
import side2 from "./side2.svg";
import { useEffect, useState } from "react";
const { GoogleSpreadsheet } = require("google-spreadsheet");

export default function Main() {
  const [docs, setdocs] = useState("");

  async function loadSheet() {
    const SHEET_ID = process.env.SHEET_ID;

    const CLIENT_EMAIL = process.env.CLIENT_EMAIL;

    const PRIVATE_KEY = process.env.PRIVATE_KEY;

    const doc = new GoogleSpreadsheet(SHEET_ID);

    await doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY.replace(/\\n/g, ""),
    });

    await doc.loadInfo();

    setdocs(doc);
  }
  useEffect(() => {
    loadSheet();
  }, []);

  const [Email, setEmail] = useState("");

  const handleClick = async (e) => {
    // Config variables
    e.preventDefault();

    const SHEET_NAME = "Sheet1";
    const sheet = docs.sheetsByTitle[SHEET_NAME];
    sheet.addRow({
      timestamp: new Date(),
      email: Email,
    });

    alert("keep your eye on the inbox, your surprise is on the way");
    setEmail("");
  };

  const handleInput = (e) => {
    setEmail(e.target.value);
  };
  return (
    <>
      <div className="md:flex flex-row hidden bg-[url('https://firebasestorage.googleapis.com/v0/b/carrervyaswebsite.appspot.com/o/Background%2FLanding%20Page.png?alt=media&token=212d4b73-59ba-4131-8c3c-02fc082dbe20')] bg-no-repeat bg-cover w-full h-full relative">
        <Lines2
          className={"absolute top-0 left-0 w-20 lg:w-28 -translate-y-1/4"}
        />

        <div className="w-1/4 mt-10 relative h-[400px] ">
          <Image
            src={side1}
            alt="student carrer vyas"
            width={500}
            height={300}
            objectFit="cover"
            layout="fill"
          />
        </div>

        <div className="flex items-center flex-col w-1/2 relative">
          <Lines
            className={
              "absolute top-0 left-full -translate-y-1/2 -translate-x-2"
            }
          />
          <h1 className="m-2 font-bold text-5xl text-center">
            One Stop Solution to all your Career & College Queries
          </h1>
          <div
            className="flex items-center my-2 bg-white h-8 w-fit rounded-3xl py-3
          px-7"
          >
            <p className="text-lg text-center font-semibold align-middle">
              # Bridging the gap between{" "}
              <span className="text-blue-700">School</span>
              {""} to <span className="text-blue-700"> College </span>{" "}
            </p>
          </div>
          <div className="relative">
            <ArrowRound
              className={
                "absolute top-0 left-0 -translate-x-3/4 lg:-translate-x-full translate-y-3/4 w-24 hidden lg:block"
              }
            />
            <p className="mt-6 mb-1 font-semibold text-md text-center">
              Enter your Email to get the Suprise in your Inbox
            </p>

            <div className="flex flex-row justify-center items-center">
              <input
                className="m-1 ring-2 ring-slate-400 bg-white rounded-sm
                p-2 underline-offset-1 w-80"
                onChange={handleInput}
                value={Email}
              />
              <button
                onClick={handleClick}
                className="bg-[#6776FF] w-24 h-11 text-white rounded-lg
     hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </div>
        </div>

        <div className="w-1/4 mt-10 relative h-[400px]">
          <Image
            src={side2}
            alt="students carrer vyas"
            width={500}
            height={300}
            objectFit="cover"
            layout="fill"
          />
        </div>
      </div>
      <div className="flex flex-col md:hidden bg-[url('https://firebasestorage.googleapis.com/v0/b/carrervyaswebsite.appspot.com/o/Background%2FLanding%20Page.png?alt=media&token=212d4b73-59ba-4131-8c3c-02fc082dbe20')] bg-no-repeat bg-cover w-full h-full relative">
        <div className="flex items-center flex-col w-full relative">
          <h1 className="m-2 font-bold text-4xl text-center">
            One Stop Solution to all your Career & College Queries
          </h1>
          <div className="flex items-center py-3 px-7 bg-white h-8 rounded-3xl w-fit">
            <p className="text-sm sm:text-md text-center font-semibold align-middle">
              # Bridging the gap between{" "}
              <span className="text-blue-700">School</span>
              {""} to <span className="text-blue-700"> College </span>{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-row  w-full">
          <div className="w-1/2 relative h-[400px]">
            <Image
              src={side1}
              alt="student carrer vyas"
              width={100}
              height={400}
              objectFit="cover"
              layout="fill"
            />
          </div>

          <div className="w-1/2 relative h-[400px]">
            <Image
              src={side2}
              alt="students carrer vyas"
              width={100}
              height={400}
              objectFit="cover"
              layout="fill"
            />
          </div>
        </div>

        <div className="relative">
          <p className="m-4 font-semibold text-sm text-center">
            Enter your Email to get the Suprise in your Inbox
          </p>

          <div className="flex flex-row justify-center items-center">
            <input className="m-2 p-1 ring-2 ring-slate-400 bg-white rounded-lg" />
            <button
              className="bg-[#6776FF] w-24 text-white rounded-lg
      h-8 hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
