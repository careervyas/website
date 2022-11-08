import Image from "next/image";
import f1 from "./images/f1.svg";
import f2 from "./images/f2.svg";
import f3 from "./images/f3.svg";
import f4 from "./images/f4.svg";
import Link from "next/link";
export default function Advertisment() {
  return (
    <div className="flex items-center justify-center w-full my-7">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-8">
        <div className="grid-rows-7 w-[300px] sm:w-[400px]">
          <h1 className="text-3xl text-black font-semibold mb-5">
            Do You Want to Get In Touch{" "}
            <span className="text-blue-700">With Us?</span>
          </h1>
          <Link href="https://docs.google.com/forms/d/1pl5We-xqOu_8NAkQWVg9QaRsOc5aqYjXZxSLqeZ05s8/viewform?edit_requested=true">
          <div className="row-span-3 mb-5 cursor-pointer">
          
            <div className="relative w-[300px] sm:w-[400px] h-[200px]">
              
                <Image
                  className="rounded-t-lg"
                  src={f1}
                  alt="career vyas"
                  height={150}
                  width={150}
                  objectFit="cover"
                  layout="fill"
                />
            
              
            </div>
            <div className="bg-[#6776FF] p-2 h-20 flex flex-col justify-center ">
              <p className="text-white text-base font-semibold">Mentor</p>
              <p className="text-white text-xs font-bold">
                Join us as our Mentor for Students across the Country.
              </p>
            </div>
          </div>
          </Link>
          <Link href="https://forms.gle/8sgST8Uo6HTEn7DTA">
          <div className="row-span-3 mb-5 cursor-pointer">
            <div className="relative  w-[300px] sm:w-[400px] h-[200px]">
              <Image
                className="rounded-t-lg"
                src={f3}
                alt="career vyas"
                height={150}
                width={150}
                objectFit="cover"
                layout="fill"
              />
            </div>
            
              
       
            <div className="bg-[#6776FF] p-2 h-20 flex flex-col justify-center">
              <p className="text-white text-base font-semibold">
                Exclusive Community{" "}
              </p>
              <p className="text-white text-xs font-bold">
                Join our Exclusive Community of Learners.
              </p>
            </div>
          </div>
          </Link>
        </div>
        

   
        <div className="grid-rows-7 w-[300px] sm:w-[400px] ">
        <Link href=" https://forms.gle/iTVVHL5KL6Z68qtd6">
          <div className="row-span-3 mb-5 cursor-pointer">
            <div className="relative  w-[300px] sm:w-[400px] h-[200px]">
              <Image
                className="rounded-t-lg"
                src={f2}
                alt="career vyas"
                height={150}
                width={150}
                objectFit="cover"
                layout="fill"
              />
            </div>

            <div className="bg-[#6776FF] p-2 h-20 flex flex-col justify-center">
              <p className="text-white text-base font-semibold">Investor</p>
              <p className="text-white text-xs font-bold">
                Finds this interesting.,Wants to invest in Career Vyas.
              </p>
            </div>
          </div>
          </Link>
          <Link href="https://forms.gle/B3aM2vm7xkq5o2Fy8">

          
          <div className="row-span-3 mb-5 w-[300px] sm:w-[400px]
          cursor-pointer">
            <div className="relative w-[300px] sm:w-[400px] h-[200px]">
              <Image
                className="rounded-t-lg"
                src={f4}
                alt="career vyas"
                height={150}
                width={150}
                objectFit="cover"
                layout="fill"
              />
            </div>

            <div className="bg-[#6776FF] p-2 h-20 flex flex-col justify-center">
              <p className="text-white text-base font-semibold">Suggestions</p>
              <p className="text-white text-xs font-bold">
                Have any Suggestion for us?? Shoot Now!!
              </p>
            </div>
          </div>
          </Link>
        </div>
 
      </div>
    </div>
  );
}
