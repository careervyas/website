import Link from "next/link";
import { useEffect, useState } from "react";
import firebaseConfig from "../Firebase/config";
import firebase from "firebase/app";
import "firebase/firestore";
import Lines from "../Elements/Lines";
import Arrow from "../Elements/Arrow";

const socialMediaIcons = [
  [
    "https://www.facebook.com/people/Career-Vyas/100086391339652/",
    <svg
      key="1"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.36538 12.5416H7.69874V7.86914H9.80113L10.0321 5.54728H7.69874V4.37492C7.69874 4.05276 7.9599 3.79159 8.28207 3.79159H10.0321V1.45825H8.28207C6.6712 1.45825 5.36538 2.76409 5.36538 4.37492V5.54728H4.19871L3.96777 7.86914H5.36538V12.5416Z"
        fill="#F2F2F2"
      />
    </svg>,
  ],
  [
    "https://discord.com/invite/a5dRVB63GM",
    <svg
      key="2"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_975_278)">
        <path
          d="M11.8516 2.62039C10.9593 2.21752 10.0024 1.92071 9.00194 1.75071C8.98374 1.74743 8.96554 1.75563 8.95615 1.77203C8.83307 1.9874 8.69674 2.26836 8.60131 2.48919C7.52523 2.33068 6.4547 2.33068 5.40069 2.48919C5.30521 2.26345 5.16395 1.9874 5.04033 1.77203C5.03095 1.75618 5.01275 1.74798 4.99453 1.75071C3.99461 1.92017 3.03774 2.21698 2.14488 2.62039C2.13715 2.62367 2.13053 2.62914 2.12613 2.63625C0.311145 5.30432 -0.186054 7.90679 0.057855 10.477C0.0589586 10.4896 0.0661325 10.5016 0.0760655 10.5093C1.27354 11.3746 2.4335 11.8999 3.57191 12.2481C3.59013 12.2536 3.60944 12.247 3.62103 12.2322C3.89033 11.8704 4.13037 11.4889 4.3362 11.0876C4.34834 11.0641 4.33675 11.0362 4.31192 11.0269C3.93116 10.8848 3.5686 10.7115 3.21984 10.5148C3.19226 10.4989 3.19005 10.4601 3.21543 10.4415C3.28882 10.3874 3.36223 10.3311 3.43231 10.2743C3.44499 10.2639 3.46266 10.2617 3.47756 10.2682C5.76875 11.2975 8.24921 11.2975 10.5134 10.2682C10.5283 10.2611 10.546 10.2633 10.5592 10.2737C10.6293 10.3305 10.7027 10.3874 10.7766 10.4415C10.802 10.4601 10.8004 10.4989 10.7728 10.5148C10.424 10.7154 10.0615 10.8848 9.68013 11.0264C9.65533 11.0357 9.64425 11.0641 9.65638 11.0876C9.86668 11.4883 10.1067 11.8698 10.371 12.2317C10.3821 12.247 10.4019 12.2536 10.4201 12.2481C11.5641 11.8999 12.724 11.3746 13.9215 10.5093C13.932 10.5016 13.9386 10.4901 13.9397 10.4776C14.2316 7.5061 13.4508 4.92497 11.8698 2.63679C11.8659 2.62914 11.8593 2.62367 11.8516 2.62039ZM4.67835 8.91205C3.98854 8.91205 3.42016 8.28888 3.42016 7.5236C3.42016 6.75833 3.97752 6.13521 4.67835 6.13521C5.38467 6.13521 5.94755 6.76381 5.93653 7.5236C5.93653 8.28888 5.37916 8.91205 4.67835 8.91205ZM9.33024 8.91205C8.64051 8.91205 8.07211 8.28888 8.07211 7.5236C8.07211 6.75833 8.62943 6.13521 9.33024 6.13521C10.0366 6.13521 10.5995 6.76381 10.5884 7.5236C10.5884 8.28888 10.0366 8.91205 9.33024 8.91205Z"
          fill="#F2F2F2"
        />
      </g>
      <defs>
        <clipPath id="clip0_975_278">
          <rect width="14" height="14" fill="white" />
        </clipPath>
      </defs>
    </svg>,
  ],
  [
    "https://www.instagram.com/careervyas/?utm_medium=copy_link",
    <svg
      key="3"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_975_280)">
        <path
          d="M7.00033 1.16675C8.58524 1.16675 8.78299 1.17258 9.40483 1.20175C10.0261 1.23091 10.449 1.32833 10.8212 1.473C11.2062 1.62116 11.5305 1.82183 11.8548 2.14558C12.1514 2.43719 12.381 2.78992 12.5274 3.17925C12.6715 3.55083 12.7695 3.97433 12.7987 4.59558C12.8261 5.21741 12.8337 5.41516 12.8337 7.00008C12.8337 8.585 12.8278 8.78275 12.7987 9.40458C12.7695 10.0258 12.6715 10.4487 12.5274 10.8209C12.3814 11.2105 12.1518 11.5633 11.8548 11.8546C11.5631 12.1511 11.2104 12.3806 10.8212 12.5272C10.4496 12.6712 10.0261 12.7692 9.40483 12.7984C8.78299 12.8258 8.58524 12.8334 7.00033 12.8334C5.41541 12.8334 5.21766 12.8276 4.59583 12.7984C3.97458 12.7692 3.55166 12.6712 3.17949 12.5272C2.79002 12.381 2.43722 12.1515 2.14583 11.8546C1.84915 11.563 1.61962 11.2103 1.47324 10.8209C1.32858 10.4493 1.23116 10.0258 1.20199 9.40458C1.17458 8.78275 1.16699 8.585 1.16699 7.00008C1.16699 5.41516 1.17283 5.21741 1.20199 4.59558C1.23116 3.97375 1.32858 3.55141 1.47324 3.17925C1.61921 2.78969 1.84879 2.43685 2.14583 2.14558C2.4373 1.8488 2.79008 1.61926 3.17949 1.473C3.55166 1.32833 3.97399 1.23091 4.59583 1.20175C5.21766 1.17433 5.41541 1.16675 7.00033 1.16675ZM7.00033 4.08341C6.22678 4.08341 5.48491 4.39071 4.93793 4.93769C4.39095 5.48467 4.08366 6.22653 4.08366 7.00008C4.08366 7.77363 4.39095 8.51549 4.93793 9.06248C5.48491 9.60946 6.22678 9.91675 7.00033 9.91675C7.77387 9.91675 8.51574 9.60946 9.06272 9.06248C9.6097 8.51549 9.91699 7.77363 9.91699 7.00008C9.91699 6.22653 9.6097 5.48467 9.06272 4.93769C8.51574 4.39071 7.77387 4.08341 7.00033 4.08341ZM10.792 3.93758C10.792 3.74419 10.7152 3.55873 10.5784 3.42198C10.4417 3.28524 10.2562 3.20841 10.0628 3.20841C9.86944 3.20841 9.68397 3.28524 9.54723 3.42198C9.41048 3.55873 9.33366 3.74419 9.33366 3.93758C9.33366 4.13097 9.41048 4.31643 9.54723 4.45318C9.68397 4.58993 9.86944 4.66675 10.0628 4.66675C10.2562 4.66675 10.4417 4.58993 10.5784 4.45318C10.7152 4.31643 10.792 4.13097 10.792 3.93758ZM7.00033 5.25008C7.46445 5.25008 7.90957 5.43446 8.23776 5.76264C8.56595 6.09083 8.75033 6.53595 8.75033 7.00008C8.75033 7.46421 8.56595 7.90933 8.23776 8.23752C7.90957 8.56571 7.46445 8.75008 7.00033 8.75008C6.5362 8.75008 6.09108 8.56571 5.76289 8.23752C5.4347 7.90933 5.25033 7.46421 5.25033 7.00008C5.25033 6.53595 5.4347 6.09083 5.76289 5.76264C6.09108 5.43446 6.5362 5.25008 7.00033 5.25008Z"
          fill="#F2F2F2"
        />
      </g>
      <defs>
        <clipPath id="clip0_975_280">
          <rect width="14" height="14" fill="white" />
        </clipPath>
      </defs>
    </svg>,
  ],
  [
    "https://www.linkedin.com/company/career-vyas",
    <svg
      key="4"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_975_284)">
        <path
          d="M12.1453 0.875H1.92172C1.36309 0.875 0.875 1.27695 0.875 1.82902V12.0753C0.875 12.6304 1.36309 13.125 1.92172 13.125H12.1423C12.7039 13.125 13.125 12.6271 13.125 12.0753V1.82902C13.1283 1.27695 12.7039 0.875 12.1453 0.875ZM4.67223 11.086H2.9173V5.62953H4.67223V11.086ZM3.85547 4.79992H3.84289C3.28125 4.79992 2.91758 4.38184 2.91758 3.85848C2.91758 3.32555 3.29082 2.9173 3.86504 2.9173C4.43926 2.9173 4.79062 3.32254 4.8032 3.85848C4.80293 4.38184 4.43926 4.79992 3.85547 4.79992ZM11.086 11.086H9.33105V8.1025C9.33105 7.38773 9.07566 6.89937 8.44074 6.89937C7.95566 6.89937 7.66855 7.2275 7.54086 7.54715C7.49301 7.66199 7.48016 7.8184 7.48016 7.97809V11.086H5.72523V5.62953H7.48016V6.38887C7.73555 6.0252 8.13449 5.50184 9.06281 5.50184C10.2148 5.50184 11.0862 6.26117 11.0862 7.89824L11.086 11.086Z"
          fill="#F2F2F2"
        />
      </g>
      <defs>
        <clipPath id="clip0_975_284">
          <rect width="14" height="14" fill="white" />
        </clipPath>
      </defs>
    </svg>,
  ],
  [
    "https://twitter.com/career_vyas?t=l8Z6rBmtIrWOgeHxFl8UTQ&s=09",
    <svg
      key="5"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.5625 2.99414C13.0702 3.20807 12.5492 3.34901 12.0162 3.4125C12.5764 3.08448 12.9977 2.56336 13.201 1.94688C12.6714 2.25657 12.0929 2.47387 11.4904 2.58946C11.2367 2.32355 10.9315 2.11201 10.5935 1.9677C10.2555 1.82339 9.89164 1.74933 9.5241 1.75C8.03605 1.75 6.83184 2.93672 6.83184 4.39961C6.83078 4.6031 6.8541 4.80597 6.90129 5.00391C5.83425 4.95389 4.7894 4.68169 3.83359 4.20472C2.87778 3.72776 2.03205 3.05653 1.35051 2.23399C1.11141 2.63707 0.984958 3.09697 0.984375 3.56563C0.984375 4.48438 1.46371 5.29649 2.1875 5.77227C1.75868 5.76209 1.33864 5.64859 0.963047 5.44141V5.47422C0.963047 6.75938 1.89273 7.82852 3.1232 8.07188C2.89182 8.13356 2.65337 8.16481 2.41391 8.16485C2.24399 8.16514 2.07445 8.14866 1.90777 8.11563C2.24984 9.16836 3.24543 9.93399 4.42477 9.95586C3.46647 10.6944 2.28993 11.0936 1.08008 11.0906C0.865325 11.0903 0.650772 11.0775 0.4375 11.0523C1.66829 11.8383 3.09899 12.254 4.5593 12.25C9.51836 12.25 12.2276 8.21133 12.2276 4.7086C12.2276 4.59375 12.2246 4.47891 12.2191 4.3668C12.7449 3.99275 13.1999 3.52793 13.5625 2.99414Z"
        fill="#F2F2F2"
      />
    </svg>,
  ],
];

const SocialMediaIconLink = ({ link, imageSrc }) => {
  return (
    <div className="h-[30px] w-[30px] relative mr-2 cursor-pointer">
      <Link href={link}>
        <div className="bg-[#000000] w-[30px] p-2 rounded-full opacity-30">
          {imageSrc}
        </div>
      </Link>
    </div>
  );
};

export default function ReachOut() {
  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }, []);

  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [Phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      FirstName.trim() === "" ||
      LastName.trim() === "" ||
      Email.trim() === "" ||
      Message.trim() === "" ||
      Phone.trim() === ""
    ) {
      alert("Invalid Form Data...");
      return;
    }
    try {
      const db = firebase.firestore();
      const docref = db.collection("contact us").doc();
      await docref.set({
        FirstName,
        LastName,
        Email,
        Message,
        Phone,
      });
      alert("Our Team Will Contact You Soon...");
    } catch (e) {
      alert("Oops Something Went Wrong...");
    }
  };
  return (
    <div
      className="w-full h-full flex flex-col lg:flex-row
    bg-[url('https://firebasestorage.googleapis.com/v0/b/carrervyaswebsite.appspot.com/o/Background%2Fcontact%20us%20(1).svg?alt=media&token=8f9ddd8c-1cca-4f8b-bf0e-81fab36bf3df')]
        bg-cover bg-no-repeat"
    >
      <div
        className="w-full lg:w-1/2 h-full flex flex-col
      mx-5 lg:mx-20 my-5 relative"
      >
        <h1 className="text-4xl font-bold ">Contact Us</h1>
        <Lines className="absolute -top-20 left-[37%]" />

        <p className=" text-xl font-semibold mt-5">
          Please use this form to contact us and we will get back to you as soon
          as possible!
        </p>
        <div className="text-xl mt-5">
          <p>
            <span className="font-semibold">Mobile No: </span>
            91032-43760 , 84373-99123
          </p>
          <p>
            <span className="font-semibold">Email: </span>
            info@careervyas.com
          </p>
        </div>

        <div className="relative">
          <h3 className="text-2xl mt-5 font-bold">Locate Us At</h3>
          <Arrow className="absolute w-32 -top-1 -left-[25%]" />
        </div>

        <div className="mapouter my-5 ">
          <div className="gmap_canvas">
            <iframe
              className="w-3/4 h-[250px]"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=4/290%20kala%20kuan%20housing%20board%20alwar%20rajasthan&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
        </div>

        <div className="flex flex-col text-xl font-bold">
          Connect with us
          <div className="flex flex-row">
            {socialMediaIcons.map(([link, imageSrc], index) => (
              <SocialMediaIconLink
                key={index}
                link={link}
                imageSrc={imageSrc}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full sm:w-4/5 lg:w-1/2 h-fit flex flex-col justify-center items-center border-2 border-slate-400 rounded-md my-5 p-5 mx-1 sm:mx-5 lg:mr-10">
        <h1 className="text-4xl font-bold mb-7">Contact Us</h1>
        <div className="flex flex-col lg:flex-row w-3/4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full lg:w-1/2 h-12 border-2 border-slate-400 rounded-md my-3 p-2 bg-white mr-0 lg:mr-2"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full lg:w-1/2 h-12 border-2 border-slate-400 rounded-md ml-0 lg:ml-2 my-3 p-2 bg-white"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
        <input
          type="text"
          placeholder="Email"
          className="w-3/4 h-12 border-2 border-slate-400 rounded-md  my-3 p-2 bg-white"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="w-3/4 h-12 border-2 border-slate-400 rounded-md  my-3 p-2 bg-white"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <textarea
          placeholder="Message"
          className="w-3/4 h-32 border-2 border-slate-400 rounded-md  my-3 p-2 bg-white"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button
          className="mt-5 w-1/2 h-12 bg-[#6776FF] rounded-md text-white font-bold"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
