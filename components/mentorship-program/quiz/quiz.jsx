import Image from "next/image";
import React from "react";
import QuizComponent from "./QuizComponent.jsx";
import QuizResults from "./QuizResults.jsx";
import { useState } from "react";
import { toast } from "react-toastify";
import GirlImage from "./girl.png";

const { GoogleSpreadsheet } = require("google-spreadsheet");
async function loadSheet() {
  const SHEET_ID = "1NBazdBL_rPHdGpLTXlgTCna1ROd1CZTR1zl60T8PLS0";
  const CLIENT_EMAIL =
    "careervyas-com-sheetapi@carrervyaswebsite.iam.gserviceaccount.com";
  const PRIVATE_KEY =
    "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDGh6Cd9kIRdn9k\nb4N3GSCg8wtIliCHI4nAmV0bC80RTQJqraY0y3pU4kQVNaK6wKjpaKss2QNJQyY4\nHVi9JpNn5zR3YUn+luqqUQ5c9hrwT3/7Z5bC1ACP1eriBK1D6b7NjhYtlg6+y2X7\nT6zzC3clmtxHv5WGI2RxcLxSvvFPLMJpGbSX5U0ymARWTmV2vkANpTO/GEm8iUAr\n20IKVQTsH0PJR4Feg4MqN5JNpFAyvbZVvzBZcrNkbYBvkmG6zjBJNI5OHhjZE+GA\nDsfZrQt8M+l5wdnSxi1sBhI6SE9Sxh8wYMnt5OOCVojpIw0LyQE/l2BNC0ADHDmz\ncl/NrdjHAgMBAAECggEAX9ITYFp87e/LMd8uzTuIB5b3EbxAC+nHsXl0OjsaaajJ\nK1MP3vh83V5uLOx70/ZsMGfwAo/lqaUq27eyXm0xhVtO8/W1oJcXwUepDo5MV0OP\nynhniDaJ5OKDYT6PoDFAAfd71dnQ2R7T5JXCrHYStkhF3K1oDlujvasDgk6dqq/e\nsBaAESCmmRrkrIiG3UULQc19Md259G9S0czSuFQYBkVlxeTe52GpibsSQidP0fnl\ncXOO9o0DbOatxBR54a3vDTqMw6d8Rs0NhqP7iOll67P8sC3f4PjEuQ0GyLmo9NHV\neq5WSw0QrVvLpDGxXIu7WTCQl96dcyC7tbpQQZRv6QKBgQDiLjXT7FCgeXtIE/1C\nFxFMw/6nVnUwl1eEjD8x5/4KbtiR6/Zt5zM0HvAQP4flsRn0HYCUQWQ4hGlqbLLx\n87Sazg3CT0tIXCQfbwRx3yqCU5dwn+1yOCz9QSxAfQ4bl9p3ZVA687jZnf/hlqNo\nyog6586I0CQGzo8oKSFbPjczqQKBgQDgtC5vWSZXpCrIbYI7eyDim94NOKQabT/z\nWixBXSR0LgYt83yioO+9ytDtNATbYUHNpP0i7xGZoDhxjiq7ZTCejFUkglHbolQZ\nVHTm0LaPafLHYLsNYt8ZhBewZ8Fq7xx4oD2y0qqNwEFT+XucWp/by2ihrklGJfxh\nL48lN6Ju7wKBgB78+8z8PJOv8S8P5gvvAyTEWZhtpQKySYBUgrgAs/KT+0IK1Sl7\nmq1Sa8ueGK1klUy32gz15JhFs/erytyRajYncwUjPgo87YoM+MvtKnLOpxn8H1kd\nzzQngLuZJpyrMnhXPiXFjJbsKcmrjNnnncCMT+S4t6bjGAQFlpdcr815AoGAdHGr\nJpTCY+R1L0xgksZp8kTnu15A3FkFLOzrxiuoenRnS2TEj9pqoqX5wxKT+cPav+Di\nNTpCmqQG3AHabyYvHdqHPNYz6WejwUSdGAfMs2EqKNwd0wALsUNcq1P5TZr/3Bre\nHk9Bhxe8QvIkdpAYC2TLog2Zdzq0IQDuY1EDYg0CgYAN2XeWWllB4wTmPTgQP+Xf\nkQg3eGeN8WEHc85k1DG7+oxv8UAZtG2FlgA/yCauox50+bjHsRHtiziiYNuPbfDS\nbY5kDrwxmU9TI9bYAs4fWaUYjKX5d0iU15rAsEZCKs/SFkm9Ek+G/O53MqJYxIli\nOKAQ8zI6I+cqP+8IbuowZQ==\n-----END PRIVATE KEY-----\n";

  const doc = new GoogleSpreadsheet(SHEET_ID);
  await doc.useServiceAccountAuth({
    client_email: CLIENT_EMAIL,
    private_key: PRIVATE_KEY.replace(/\\n/g, ""),
  });
  await doc.loadInfo();
  return doc;
}
const handleSubmit = async (
  e,
  examTargeting,
  setQuizStarted,
  setUserDetails
) => {
  e.preventDefault();
  try {
    const name = document.getElementById("joinOurTeamFormUsername").value;
    const emailID = document.getElementById("joinOurTeamFormUseremail").value;
    const phone = document.getElementById("joinOurTeamFormUserphone").value;
    const userClass = document.getElementById("joinOurTeamFormUserclass").value;
    setUserDetails({
      name: name,
      email: emailID,
      contact: phone,
      class: userClass,
    });
    if (name === "" || emailID === "" || phone === "" || userClass === "") {
      toast.warn("Please Fill Up All Details");
      return;
    }

    const docs = await loadSheet();
    const SHEET_NAME = "Sheet1";
    const sheet = docs.sheetsByTitle[SHEET_NAME];
    sheet.addRow({
      timeStamp: new Date(),
      Name: name,
      Email: emailID,
      Contact: phone,
      Class: userClass,
      ExamTargeting: examTargeting,
    });
    setQuizStarted(true);
    toast.success("Quiz Started");
  } catch (e) {
    toast.error("Oops, Something Went Wrong !");
  }
};

const formFields = [
  {
    id: "name",
    label: "Name",
    inputType: "text",
    inputPlaceHolder: "Enter Your Name",
  },
  {
    id: "email",
    label: "Email",
    inputType: "email",
    inputPlaceHolder: "Email Address",
  },
  {
    id: "phone",
    label: "Contact No.",
    inputType: "tel",
    inputPlaceHolder: "Enter the Mobile No.",
  },
  {
    id: "class",
    label: "Class",
    inputType: "text",
    inputPlaceHolder: "Class in which you Study",
  },
];

const FormField = ({ id, label, inputType, inputPlaceHolder }) => {
  const inputId = `joinOurTeamFormUser${id}`;
  return (
    <div className="mb-4">
      <label htmlFor={inputId}>{label}</label>
      <input
        id={inputId}
        type={inputType}
        className="w-full bg-white border-2 p-1 rounded-md"
        placeholder={inputPlaceHolder}
      />
    </div>
  );
};

export default function Quiz() {
  const [examTargeting, setExamTargeting] = useState("");
  const [quizStarted, setQuizStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    contact: "",
    class: "",
  });
  const onSubmitScore = async (score) => {
    const docs = await loadSheet();
    const SHEET_NAME = "Sheet2";
    const sheet = docs.sheetsByTitle[SHEET_NAME];
    sheet.addRow({
      Name: userDetails.name,
      Email: userDetails.email,
      Contact: userDetails.contact,
      Class: userDetails.class,
      ExamTargeting: examTargeting,
      score: score,
    });
  };

  if (!quizStarted) {
    return (
      <div className="text-white flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2">
          <Image src={GirlImage} objectFit="contain" />
        </div>
        <div className="md:w-1/2 my-8 flex flex-col items-center justify-center text-black text-sm sm:text-base">
          <div className="p-8 bg-white rounded-lg">
            <div className="text-[#6776FF] font-extrabold text-2xl text-center mb-4">
              Enter your Details Below
            </div>
            <div className="pr-4 pl-1">
              {formFields.map((formField, index) => (
                <FormField {...formField} key={index} />
              ))}

              <div className="mb-4">
                <div className="mb-1">Exam Targetting</div>
                <span className="mr-4">
                  <input
                    type="radio"
                    name="same2"
                    className="bg-white border-2 mr-2 rounded-md accent-white invert checked:invert-1"
                    onClick={(e) => {
                      if (e.target.checked) {
                        setExamTargeting("JEE");
                      }
                    }}
                  />
                  <span>JEE</span>
                </span>
                <span>
                  <input
                    type="radio"
                    name="same2"
                    className="bg-white border-2 mr-2 rounded-md accent-white invert checked:invert-1"
                    onClick={(e) => {
                      if (e.target.checked) {
                        setExamTargeting("NEET");
                      }
                    }}
                  />
                  <span>NEET</span>
                </span>
              </div>

              <div className="w-full grid place-items-center mt-4">
                <button
                  className="bg-[#6776FF] px-12 py-2 text-white"
                  onClick={(e) =>
                    handleSubmit(
                      e,
                      examTargeting,
                      setQuizStarted,
                      setUserDetails
                    )
                  }
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (submitted) {
    return <QuizResults score={score} />;
  }

  return (
    <QuizComponent
      setSubmitted={setSubmitted}
      setScore={setScore}
      onSubmit={onSubmitScore}
    />
  );
}
