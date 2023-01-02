import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useCountUp } from "react-countup";

export default function card({ title, counter, icon }) {
  const countUpRef = useRef(null);
  const [intersectiong, setIntersectiong] = useState(false);
  const { start, pauseResume, reset, update } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: counter,
    duration: 1,
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];
      setIntersectiong(entry.isIntersecting);
    });
    observer.observe(countUpRef.current);
  }, []);

  useEffect(() => {
    if (intersectiong) {
      start();
    }
  }, [intersectiong]);

  return (
    <div className="group flex justify-center m-2 cursor-pointer">
      <div className="flex flex-row h-28 w-72 mx-3 border-2 rounded-lg bg-white shadow-lg shadow-slate-300">
        <div className="bg-[#6776FF] w-1/3 h-full flex items-center justify-center rounded-l-lg">
          <div className="group-hover:animate-bounce">{icon}</div>
        </div>
        <div className="p-2 flex flex-col justify-center w-2/3">
          <h5 className="text-blue-700 font-medium text-4xl">
            <div className="flex flex-row">
              <span ref={countUpRef}></span>+
            </div>
          </h5>
          <p className="text-lg">{title}</p>
        </div>
      </div>
    </div>
  );
}
