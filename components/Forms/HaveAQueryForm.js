import Image from "next/image";
import React from "react";
import { toast } from "react-toastify";
import img from "./queryform.png";
const { GoogleSpreadsheet } = require("google-spreadsheet");

export default function HaveAQueryForm() {
  async function loadSheet() {
    const SHEET_ID = "1CXbufNTuf7NJqFSklXsJ9eekMIKYSaMPPQbTN9Q2T-s";
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const name = document.getElementById("queryFormUserNameInput").value;
      const emailID = document.getElementById("queryFormUserEmailInput").value;
      const phone = document.getElementById("queryFormUserPhoneInput").value;
      const userclass = document.getElementById(
        "queryFormUserClassInput"
      ).value;
      const query = document.getElementById("queryFormUserQueryInput").value;
      const docs = await loadSheet();
      const SHEET_NAME = "Sheet1";
      const sheet = docs.sheetsByTitle[SHEET_NAME];
      sheet.addRow({
        timestamp: new Date(),
        name: name,
        emailID: emailID,
        phone: phone,
        userclass: userclass,
        query: query,
        isParent: "-",
        via: "QueryFormModal",
      });
      toast.success("Our Team Will Contact You Soon...");
    } catch (e) {
      toast.error("Oops Something Went Wrong...");
    }
  };
  return (
    <div className="flex flex-col justify-center items-center lg:flex-row">
      <div className="flex flex-col lg:w-1/2">
        <div className="w-11/12">
          <div className="text-[#6776FF] font-extrabold text-2xl">
            Having Doubt !!
          </div>
          <div className="text-lg font-bold text-[#5C5959] mt-4">
            Don’t Be Sad, Just Fill the Form and We will reply to you on Call or
            Email with 24 Hours
          </div>
        </div>
        <div className="w-full">
          <Image src={img} />
        </div>
      </div>
      <div className="flex flex-col lg:w-1/2">
        <span className="text-[#6776FF] font-extrabold text-2xl">
          Lets get your Queries Solved !!
        </span>
        <div className="w-full mt-6 z-10 flex flex-col justify-evenly h-4/5">
          <div className="mb-4">
            <label htmlFor="queryFormUserNameInput">Name</label>
            <input
              id="queryFormUserNameInput"
              type="text"
              className="w-full bg-white border-2 p-1 rounded-md"
              placeholder="Enter your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="queryFormUserEmailInput">Email</label>
            <input
              id="queryFormUserEmailInput"
              type="email"
              className="w-full bg-white border-2 p-1 rounded-md"
              placeholder="Email Address"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="queryFormUserPhoneInput">Mobile No.</label>
            <input
              id="queryFormUserPhoneInput"
              type="tel"
              className="w-full bg-white border-2 p-1 rounded-md"
              placeholder="Enter the Mobile No."
            />
          </div>
          <div className="mb-4">
            <label htmlFor="queryFormUserClassInput">Class</label>
            <input
              id="queryFormUserClassInput"
              type="text"
              className="w-full bg-white border-2 p-1 rounded-md"
              placeholder="Class in which you Study"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="queryFormUserQueryInput">Your Queries</label>
            <textarea
              id="queryFormUserQueryInput"
              type="text"
              className="w-full bg-white border-2 p-1 rounded-md min-h-[100px]"
              placeholder="Problem you are facing"
            />
          </div>
          <div className="w-full grid place-items-center mt-4">
            <button
              className="bg-[#6776FF] px-12 py-2 text-white"
              onClick={handleSubmit}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
