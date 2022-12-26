import CountUp from "react-countup";

export default function card({ title, counter, icon }) {
  return (
    <div className="group flex justify-center m-2 cursor-pointer">
      <div className="flex flex-row h-28 w-72 mx-3 border-2 rounded-lg bg-white shadow-lg shadow-slate-300">
        <div className="bg-[#6776FF] w-1/3 h-full flex items-center justify-center rounded-l-lg">
          <div className="group-hover:animate-bounce">{icon}</div>
        </div>
        <div className="p-2 flex flex-col justify-center w-2/3">
          <h5 className="text-blue-700 font-medium text-4xl">
            <div className="flex flex-row">
              <CountUp end={counter} duration={3} enableScrollSpy={true} />+
            </div>
          </h5>
          <p className="text-lg">{title}</p>
        </div>
      </div>
    </div>
  );
}
