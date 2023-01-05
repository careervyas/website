import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
const { GoogleSpreadsheet } = require("google-spreadsheet");
async function loadSheet() {
  const SHEET_ID = "1rv8y4yxOfVekDL3GM_UYEvo-aYIkaXAw_S8ETET8XFY";
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
  applyingFor,
  hasMentoredBefore,
  motivation,
  hasPenTab
) => {
  e.preventDefault();
  try {
    const name = document.getElementById("joinOurTeamFormUsername").value;
    const emailID = document.getElementById("joinOurTeamFormUseremail").value;
    const phone = document.getElementById("joinOurTeamFormUserphone").value;
    const userCollege = document.getElementById(
      "joinOurTeamFormUsercollege"
    ).value;
    const id = document.getElementById("joinOurTeamFormUserid").value;
    const yearOfStudy = document.getElementById(
      "joinOurTeamFormUserYearOfStudy"
    ).value;
    const about = document.getElementById("joinOurTeamFormUserabout").value;
    const linkedin = document.getElementById(
      "joinOurTeamFormUserlinkedin"
    ).value;
    const skills = document.getElementById("joinOurTeamFormUserSkills").value;
    const query = document.getElementById("joinOurTeamFormUserquery").value;
    const remarks = document.getElementById("joinOurTeamFormUserremarks").value;
    const rank = document.getElementById("joinOurTeamFormUserRank").value;
    const languages = document.getElementById(
      "joinOurTeamFormUserLanguages"
    ).value;

    if (
      name === "" ||
      emailID === "" ||
      phone === "" ||
      userCollege === "" ||
      query === "" ||
      id === "" ||
      yearOfStudy === "" ||
      about === "" ||
      linkedin === "" ||
      remarks === "" ||
      rank === "" ||
      languages === "" ||
      applyingFor === "" ||
      motivation === ""
    ) {
      toast.warn("Please Fill Up All Details");
      return;
    }

    const docs = await loadSheet();
    const SHEET_NAME = "Sheet1";
    const sheet = docs.sheetsByTitle[SHEET_NAME];
    sheet.addRow({
      timestamp: new Date(),
      Name: name,
      Email: emailID,
      ApplyingFor: applyingFor,
      ContactNo: phone,
      College: userCollege,
      Year: yearOfStudy,
      Rank: rank,
      CollegeID: id,
      Languages: languages,
      About: about,
      Linkedin: linkedin,
      MentoredBefore: hasMentoredBefore,
      MotivationToMentor: motivation,
      Skills: skills,
      HasPenTab: hasPenTab,
      Query: query,
      Remarks: remarks,
    });
    toast.success("Our Team Will Contact You Soon...");
  } catch (e) {
    toast.error("Oops Something Went Wrong...");
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
    inputPlaceHolder: "Enter the Contact No.",
  },
  {
    id: "college",
    label: "College",
    inputType: "text",
    inputPlaceHolder: "College in which you Study",
  },
  {
    id: "id",
    label: "Google Drive Link To College ID(Make Link Access to all)",
    inputType: "text",
    inputPlaceHolder: "Link to College ID",
  },
  {
    id: "about",
    label: "Tell us About Yourself(in about 100 words)",
    inputType: "text",
    inputPlaceHolder: "Answer",
  },
  {
    id: "linkedin",
    label: "Your LinkedIn Profile",
    inputType: "text",
    inputPlaceHolder: "Link to Profile",
  },
  {
    id: "query",
    label: "Any Queries or Questions for us?",
    inputType: "text",
    inputPlaceHolder: "Problem you are facing",
  },
  {
    id: "remarks",
    label: "Any Remarks or suggestions for us?",
    inputType: "text",
    inputPlaceHolder: "Any Remarks or Suggestions",
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

export default function JoinOurTeamForm() {
  const [applyingFor, setApplyingFor] = useState("");
  const [hasMentoredBefore, setHasMentoredBefore] = useState(null);
  const [motivation, setMotivation] = useState("");
  const [hasPenTab, setHasPenTab] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center text-black text-sm sm:text-base">
      <div
        className={`overflow-y-scroll overflow-x-hidden max-h-[400px] customScrollbar`}
      >
        <div className="text-[#6776FF] font-extrabold text-2xl text-center mb-4">
          Enter your Details Below
        </div>
        <div className="pr-4 pl-1">
          {formFields.slice(0, 2).map((formField, index) => (
            <FormField {...formField} key={index} />
          ))}

          <div className="mb-4">
            <div className="mb-1">You are a College Student applying for?</div>
            <span className="mr-4">
              <input
                type="radio"
                name="same2"
                className="bg-white border-2 mr-2 rounded-md accent-white invert checked:invert-1"
                onClick={(e) => {
                  if (e.target.checked) {
                    setApplyingFor("JEE Mentor");
                  }
                }}
              />
              <span>JEE Mentor</span>
            </span>
            <span>
              <input
                type="radio"
                name="same2"
                className="bg-white border-2 mr-2 rounded-md accent-white invert checked:invert-1"
                onClick={(e) => {
                  if (e.target.checked) {
                    setApplyingFor("NEET Mentor");
                  }
                }}
              />
              <span>NEET Mentor</span>
            </span>
          </div>

          {formFields.slice(2, 4).map((formField, index) => (
            <FormField {...formField} key={index} />
          ))}
          <div>
            <label for="joinOurTeamFormUserYearOfStudy">Year of Study</label>
            <select
              id="joinOurTeamFormUserYearOfStudy"
              className="border-2 mb-4 w-full text-black py-2 bg-white rounded-md"
            >
              <option value="" disabled selected>
                Year in which you Study
              </option>
              <option value="First">First</option>
              <option value="Second">Second</option>
              <option value="Third">Third</option>
              <option value="Fourth">Fourth</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="joinOurTeamFormUserRank">
              <div>
                For JEE Mentor : General Rank in JEE Mains/Advanced (whichever
                better)
              </div>
              <div>For NEET Mentor : General Rank in NEET</div>
              <div className="mt-4">P.S.- Don&apos;t put the Category Rank</div>
            </label>
            <input
              id="joinOurTeamFormUserRank"
              type="number"
              className="w-full bg-white border-2 p-1 rounded-md"
              placeholder="Enter your Rank"
            />
          </div>

          <div>
            <label for="joinOurTeamFormUserLanguages">
              Language you are comfortable in
            </label>
            <select
              id="joinOurTeamFormUserLanguages"
              className="border-2 mb-4 w-full text-black py-2 bg-white rounded-md"
            >
              <option value="" disabled selected>
                Choose/Enter the language
              </option>
              <option value="Hindi">Hindi</option>
              <option value="English">English</option>
            </select>
          </div>

          {formFields.slice(4, 7).map((formField, index) => (
            <FormField {...formField} key={index} />
          ))}

          <div className="mb-4">
            <div className="mb-1">
              Have you ever mentored students for IIT-JEE/NEET or related exams?
            </div>
            <span className="mr-4">
              <input
                name="hasMentoredBefore"
                type="radio"
                className="bg-white border-2 mr-2 rounded-md accent-white invert checked:invert-1"
                onClick={(e) => {
                  if (e.target.checked) {
                    setHasMentoredBefore(true);
                  }
                }}
              />
              <span>YES</span>
            </span>
            <span>
              <input
                name="hasMentoredBefore"
                type="radio"
                className="bg-white border-2 mr-2 rounded-md accent-white invert checked:invert-1"
                onClick={(e) => {
                  if (e.target.checked) {
                    setHasMentoredBefore(false);
                  }
                }}
              />
              <span>NO</span>
            </span>
          </div>

          <div className="mb-4">
            <div className="mb-1">What motivates you to mentor students?</div>
            <div className="mr-4">
              <input
                type="radio"
                name="same"
                className="bg-white border-2 mr-2 rounded-md accent-white invert checked:invert-1"
                onClick={() => {
                  setMotivation("Self Satisfaction of seeing students succeed");
                }}
              />
              <span>Self Satisfaction of seeing students succeed</span>
            </div>
            <div className="mr-4">
              <input
                type="radio"
                name="same"
                className="bg-white border-2 mr-2 rounded-md accent-white invert checked:invert-1"
                onClick={() => {
                  setMotivation("Personal Growth and Development");
                }}
              />
              <span>Personal Growth and Development</span>
            </div>
            <div className="mr-4">
              <input
                type="radio"
                name="same"
                className="bg-white border-2 mr-2 rounded-md accent-white invert checked:invert-1"
                onClick={() => {
                  setMotivation(
                    "Networking with Peers from top notch institutes"
                  );
                }}
              />
              <span>Networking with Peers from top notch institutes</span>
            </div>
            <div className="mr-4">
              <input
                type="radio"
                name="same"
                className="bg-white border-2 mr-2 rounded-md accent-white invert checked:invert-1"
                onClick={(e) => {
                  setMotivation("Monetary Benefits");
                }}
              />
              <span>Monetary Benefits</span>
            </div>
            <div className="mr-4">
              <input
                type="radio"
                name="same"
                className="bg-white border-2 mr-2 rounded-md accent-white invert checked:invert-1"
                onClick={(e) => {
                  setMotivation("You love to do so");
                }}
              />
              <span>You love to do so</span>
            </div>
          </div>

          <div>
            <label for="joinOurTeamFormUserSkills">
              What additional skills do you have?
            </label>
            <select
              id="joinOurTeamFormUserSkills"
              className="border-2 mb-4 w-full text-black py-2 bg-white rounded-md"
            >
              <option value="" disabled selected>
                Choose/Enter your additional skills
              </option>
              <option value="Good Anchor">Good Anchor</option>
              <option value="Graphic Designer">Graphic Designer</option>
              <option value="Video Editor">Video Editor</option>
              <option value="Content Writing">Content Writing</option>
              <option value="Youtuber">Youtuber</option>
            </select>
          </div>

          <div className="mb-4">
            <div className="mb-1">Do you have a Pen-Tab?</div>
            <span className="mr-4">
              <input
                name="hasPenTab"
                type="radio"
                className="bg-white border-2 mr-2 rounded-md accent-white invert checked:invert-1"
                onClick={(e) => {
                  if (e.target.checked) {
                    setHasPenTab(true);
                  }
                }}
              />
              <span>YES</span>
            </span>
            <span>
              <input
                name="hasPenTab"
                type="radio"
                className="bg-white border-2 mr-2 rounded-md accent-white invert checked:invert-1"
                onClick={(e) => {
                  if (e.target.checked) {
                    setHasPenTab(false);
                  }
                }}
              />
              <span>NO</span>
            </span>
          </div>

          {formFields.slice(7, 9).map((formField, index) => (
            <FormField {...formField} key={index} />
          ))}

          <div className="w-full grid place-items-center mt-4">
            <button
              className="bg-[#6776FF] px-12 py-2 text-white"
              onClick={(e) =>
                handleSubmit(
                  e,
                  applyingFor,
                  hasMentoredBefore ? "Yes" : "No",
                  motivation,
                  hasPenTab ? "Yes" : "No"
                )
              }
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
