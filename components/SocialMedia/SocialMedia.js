import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Arrow from "./ELements/Arrow";
import TeleBackImage from "./images/teleBack.png";
import teleButton from "./images/teleButton.png";
import YouTubeBackImage from "./images/youtube.jpg";

export default function SocialMedia() {
  return (
    <div className="flex flex-col md:flex-row my-12 overflow-hidden">
      <Arrow className="invisible md:visible absolute w-16 h-16 text-white z-10 translate-y-16" />
      <motion.div
        className="md:overflow-hidden relative md:w-1/2 py-16 md:py-16 grid place-items-center"
        whileInView={{ x: ["50vw", "0vw"] }}
        initial="hidden"
        transition={{ duration: 0.5 }}
      >
        <div
          className="absolute w-full h-full"
          style={{
            filter: "brightness(50%)",
          }}
        >
          <Image src={YouTubeBackImage} layout="fill" />
        </div>
        <div className="w-4/5 grid gap-8 place-items-center md:place-items-start relative">
          <h1 className="text-bold text-3xl lg:text-5xl text-white">
            Explore the Well Curated Information on our Youtube Channel
          </h1>
          <a href="https://t.me/CareerVyaschat">
            <div className="w-fit cursor-pointer bg-white px-6 md:px-12 py-6 text-[#6776FF] font-extrabold">
              CHECK OUT NOW!!
            </div>
          </a>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        className="md:w-1/2 py-16 md:p-0 grid place-items-center"
        whileInView={{ x: ["-50vw", "0vw"] }}
        transition={{ duration: 0.5 }}
        style={{
          backgroundImage: `url(${TeleBackImage.src})`,
        }}
      >
        <div className="grid gap-8">
          <h1 className="text-bold text-3xl lg:text-5xl text-center text-white">
            Join Our Community to get Better Everyday!!
          </h1>
          <h3 className="text-bold text-xl text-center text-white">
            FIND PEERS | STAY UPDATED | KEEP LEARNING
          </h3>
          <a href="https://t.me/CareerVyaschat" className="text-center">
            <div className="cursor-pointer">
              <Image
                src={teleButton}
                alt="CareerVyas Telegram"
                width={240}
                height={50}
              />
            </div>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
