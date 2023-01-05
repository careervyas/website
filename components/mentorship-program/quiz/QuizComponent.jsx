import React from "react";
import { useState } from "react";
import ProgressBar from "./ProgressBar.jsx";
import questions from "./data.js";
import emojis from "./emojis";
import { useEffect } from "react";
import { toast } from "react-toastify";

const max = (a, b) => (a > b ? a : b);
const min = (a, b) => (a > b ? b : a);
const ArrowSVG = (props) => (
  <svg
    {...props}
    width="37"
    height="37"
    viewBox="0 0 37 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="18.1452"
      cy="18.1452"
      r="17.1452"
      fill="white"
      stroke="#EEF0F2"
      stroke-width="2"
    />
    <path
      d="M21.3737 10.6832C21.5721 10.8816 21.6836 11.1508 21.6836 11.4315C21.6836 11.7122 21.5721 11.9813 21.3737 12.1798L15.7712 17.7823L21.3737 23.3848C21.5665 23.5844 21.6732 23.8518 21.6708 24.1293C21.6684 24.4068 21.557 24.6723 21.3608 24.8685C21.1646 25.0648 20.8991 25.1761 20.6215 25.1785C20.344 25.1809 20.0766 25.0742 19.877 24.8814L13.5262 18.5306C13.3278 18.3321 13.2163 18.063 13.2163 17.7823C13.2163 17.5016 13.3278 17.2324 13.5262 17.034L19.877 10.6832C20.0755 10.4847 20.3447 10.3732 20.6254 10.3732C20.906 10.3732 21.1752 10.4847 21.3737 10.6832Z"
      fill="#5D5FEF"
    />
  </svg>
);

const OptionCard = ({ optionNumber, option, clickFunction, selected }) => {
  return (
    <div
      className="cursor-pointer flex flex-col text-black w-[120px] 520:w-[175px] bg-white px-4 py-2 rounded-md mb-4"
      onClick={clickFunction}
      style={{
        background: selected
          ? "linear-gradient(58.54deg, #5a5ae0 3.55%, rgba(255, 255, 255, 0.71) 96.97%)"
          : "linear-gradient(58.54deg, #FDFDFF 3.55%, rgba(255, 255, 255, 0.71) 96.97%)",
        boxShadow: "0px 4px 40px rgba(65, 66, 74, 0.2)",
      }}
    >
      <div className="flex">
        <div className="bg-[#C4C4FF] rounded grid place-items-center px-4 mr-2">
          {String.fromCharCode(65 + optionNumber)}
        </div>
        {emojis[optionNumber]}
      </div>
      <div className="mt-4 text-xs 520:text-base">{option}</div>
    </div>
  );
};

export default function QuizComponent({ setSubmitted, setScore, onSubmit }) {
  const [questionsState, setQuestionsState] = useState([
    ...Array(questions.length).fill(false),
  ]);
  // Can be 1,2,3,4
  const [currentQuestion, setCurrentQuestion] = useState(1);
  // Can be 1,2,3,4
  const [selectedOption, setSelectedOption] = useState(
    questionsState[currentQuestion]
  );

  const submitQuiz = () => {
    const score = 0;
    for (let i = 0; i < questions.length; i++) {
      if (questionsState[i] === false) {
        toast.error("Attempt All Questions");
        return;
      } else {
        switch (questionsState[i]) {
          case 1:
            score += 10;
            break;
          case 2:
            score += 7.5;
            break;
          case 3:
            score += 5;
            break;
          case 4:
            score += 2.5;
            break;
          default:
            break;
        }
      }
    }
    toast.success("Submitted");
    setSubmitted(true);
    setScore(score);
    onSubmit(score);
  };

  useEffect(() => {
    setSelectedOption(questionsState[currentQuestion - 1]);
  }, [currentQuestion]);

  useEffect(() => {
    console.log(questionsState);
  }, [questionsState]);

  return (
    <div className="text-white flex flex-col px-4 lg:px-8 xl:px-32 py-12">
      <ProgressBar
        questionsState={questionsState}
        currentQuestion={currentQuestion}
      />
      <div
        className="w-full mt-12 rounded-lg flex flex-col px-4 520:px-10 py-7"
        style={{
          background: "linear-gradient(92.43deg, #6766FF 0%, #908FFF 97.66%)",
        }}
      >
        <div className="flex flex-col">
          <div className="flex w-full justify-between">
            <div className="font-bold 520:text-xl">
              Que - {currentQuestion} {questions[currentQuestion - 1].statement}
            </div>
            <div className="flex gap-4 ml-4">
              <ArrowSVG
                className="cursor-pointer"
                onClick={() => setCurrentQuestion(max(currentQuestion - 1, 1))}
              />
              <ArrowSVG
                className="cursor-pointer scale-x-[-1]"
                onClick={() =>
                  setCurrentQuestion(min(currentQuestion + 1, questions.length))
                }
              />
            </div>
          </div>
          <div className="mt-12 grid grid-rows-2 grid-cols-2 lg:grid-cols-4 lg:grid-rows-1 max-w-[800px]">
            {questions[currentQuestion - 1].options.map((option, index) => (
              <OptionCard
                option={option}
                optionNumber={index}
                clickFunction={() => {
                  setSelectedOption(index + 1);
                }}
                selected={index + 1 == selectedOption}
                key={index}
              />
            ))}
          </div>
          <button
            className="bg-black mt-4 w-fit self-end text-white px-4 py-2 rounded-md"
            onClick={() => {
              if (!selectedOption) {
                toast.warn("Select A Option First");
                return;
              }

              questionsState[currentQuestion - 1] = selectedOption;
              setQuestionsState(questionsState);
              if (currentQuestion !== questions.length) {
                setCurrentQuestion(currentQuestion + 1);
              } else {
                submitQuiz();
              }
            }}
          >
            {currentQuestion !== questions.length
              ? "MARK AS DONE"
              : "SUBMIT QUIZ"}
          </button>
        </div>
      </div>
    </div>
  );
}
