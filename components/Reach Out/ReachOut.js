import instagram from "../Footer/images/instagram.svg";
import facebook from "../Footer/images/facebook.svg";
import twitter from "../Footer/images/twitter.svg";
import linkedin from "../Footer/images/linkedin.svg";
import discord from "../Footer/images/discord.svg";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import firebaseConfig from "../Firebase/config";
import firebase from "firebase/app";
import 'firebase/firestore';
import {addDoc, collection} from "firebase/firestore";

export default function ReachOut() {
  useEffect(()=>{
    if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
    }
  },[])
  
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [Phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const db=firebase.firestore();

      const docref=db.collection('contact us').doc();

      await docref.set({
        FirstName,
        LastName,
        Email,
        Message,
        Phone
      });
      
    } 
    catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  return (
    <div
      className="w-[100vw] h-full flex flex-col lg:flex-row
    bg-[url('https://firebasestorage.googleapis.com/v0/b/carrervyaswebsite.appspot.com/o/Background%2Fcontact%20us%20(1).svg?alt=media&token=8f9ddd8c-1cca-4f8b-bf0e-81fab36bf3df')]
        bg-cover bg-no-repeat"
    >
      <div
        className="w-full lg:w-1/2 h-full flex flex-col
      mx-5 lg:mx-20 my-5"
      >
        <h1 className="text-4xl font-bold ">Contact Us</h1>
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
        
        </div>
        

        <div className="mapouter my-5 ">
          <div className="gmap_canvas">
            <iframe
              className="w-3/4 h-[250px]"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=4/290%20kala%20kuan%20housing%20board%20alwar%20rajasthan&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          
          </div>
        </div>

        <div className="flex flex-col text-xl font-bold">
            Connect with us
            <div className="flex flex-row">
              <div
                className="h-[30px] w-[30px] relative m-1
              cursor-pointer"
              >
                <Link href="https://www.instagram.com/careervyas/?utm_medium=copy_link">
                  <Image
                    src={instagram}
                    alt="career vyas"
                    objectFit="cover"
                    layout="fill"
                  />
                </Link>
              </div>
              <div
                className="h-[30px] w-[30px] relative m-1
                cursor-pointer"
              >
                <Link href="https://discord.gg/a5dRVB63GM">
                  <Image
                    src={discord}
                    alt="career vyas"
                    height={30}
                    width={30}
                    objectFit="cover"
                    layout="fill"
                  />
                </Link>
              </div>
              <div
                className="h-[30px] w-[30px] relative m-1
                cursor-pointer"
              >
                <Link href="https://www.linkedin.com/company/career-vyas">
                  <Image
                    src={linkedin}
                    alt="career vyas"
                    height={30}
                    width={30}
                    objectFit="cover"
                    layout="fill"
                  />
                </Link>
              </div>
              <div
                className="h-[30px] w-[30px] relative m-1
                cursor-pointer"
              >
                <Link href="https://twitter.com/career_vyas?t=l8Z6rBmtIrWOgeHxFl8UTQ&s=09">
                  <Image
                    src={twitter}
                    alt="career vyas"
                    height={30}
                    width={30}
                    objectFit="cover"
                    layout="fill"
                  />
                </Link>
              </div>
              <div
                className="h-[30px] w-[30px] relative m-1
                cursor-pointer"
              >
                <Link href="https://www.facebook.com/profile.php?id=100086391339652">
                  <Image
                    src={facebook}
                    alt="career vyas"
                    height={30}
                    width={30}
                    objectFit="cover"
                    layout="fill"
                  />
                </Link>
              </div>
            </div>
          </div>
      </div>
      <div className="w-full sm:w-4/5 lg:w-1/2 h-fit flex flex-col justify-center items-center
      border-2 border-slate-400 rounded-md my-5 p-5 mx-1 sm:mx-5 lg:mr-10">
        <h1 className="text-4xl font-bold mb-7">Contact Us</h1>
            <div className="flex flex-col lg:flex-row w-3/4">
            <input type="text" placeholder="First Name" className="w-full lg:w-1/2 h-12 border-2 border-slate-400 rounded-md my-3 p-2 bg-white mr-0 lg:mr-2"
            onChange={(e)=>{
                setFirstName(e.target.value)
            }}/>
            <input type="text" placeholder="Last Name" className="w-full lg:w-1/2 h-12 border-2 border-slate-400 rounded-md ml-0 lg:ml-2 my-3 p-2 bg-white"
            onChange={(e)=>{
              setLastName(e.target.value)
            }}
            />
            </div>
            <input type="text" placeholder="Email" className="w-3/4 h-12 border-2 border-slate-400 rounded-md  my-3 p-2 bg-white"
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            />
            <input type="text" placeholder="Phone Number" className="w-3/4 h-12 border-2 border-slate-400 rounded-md  my-3 p-2 bg-white"
            onChange={(e)=>{
              setPhone(e.target.value)
            }}/>
            <textarea placeholder="Message" className="w-3/4 h-32 border-2 border-slate-400 rounded-md  my-3 p-2 bg-white"
            onChange={(e)=>{
              setMessage(e.target.value)
            }}/>
            <button className="mt-5 w-1/2 h-12 bg-[#6776FF] rounded-md text-white font-bold"
            onClick={handleSubmit}
            >Submit</button>
        </div>
    </div>
  );
}
