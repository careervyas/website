import clap from "./images/clap.svg";
import clap1 from "./images/clap1.svg";
import clock from "./images/clock.svg";
import account from "./images/account.svg";
import calendar from "./images/cal.svg";

import Image from "next/image";
import { useEffect, useState } from "react";
import firebaseConfig from "../Firebase/config";
import firebase from "firebase/app";
import "firebase/firestore";

export default function Blog({ author, date, readtime, id, countclap, slug }) {
  let d = new Date(date);
  const [Clap, setClap] = useState(false);
  const [count, setcount] = useState(countclap);

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    const c = localStorage.getItem(id);
    if (c) setClap(true);
  }, []);

  const handleClap = () => {
   
    if (!Clap) {
      localStorage.setItem(id, true);
      setClap(true);
      setcount(count + 1);

      const db = firebase.firestore();
      const docref = db.collection("comments").doc(slug);

      docref.get().then((doc) => {
        if (doc.exists) {
          docref.update({
            clap: doc.data().clap + 1,
          });
        } else {
          docref.set({
            clap: 1,
          });
        }
      });
    }
  };

  return (
    <div className="w-full  flex flex-col text- md:text-md">
      <div className="flex flex-row items-center m-1">
        <Image
          src={account}
          width={20}
          height={20}
          layout="intrinsic"
          alt="career vyas blogs"
        />
        &nbsp;
        {author}
      </div>

      <div className="flex flex-row justify-between">
        <div className="flex flex-col sm:flex-row m-1 items-center">
          <div className="font-semibold mr-3 flex flex-row items-center">
          <Image
              src={calendar}
              width={20}
              height={20}
              layout="intrinsic"
              alt="career vyas blogs"
            />
            <span className="m-1">
            {d.toString().substring(4, 16)}
              </span>
          </div>

          <div className="flex flex-row items-center">
            <Image
              src={clock}
              width={20}
              height={20}
              layout="intrinsic"
              alt="career vyas blogs"
            />
            <span className="m-1"> {readtime} minute read</span>
          </div>
        </div>

        <div className="flex flex-row items-center mr-4 cursor-pointer">
          <Image
            src={Clap ? clap : clap1}
            width={30}
            height={20}
            layout="intrinsic"
            alt="career vyas blogs"
            onClick={handleClap}
          />
          <span className="m-1">{countclap}</span>
        </div>
      </div>
    </div>
  );
}
