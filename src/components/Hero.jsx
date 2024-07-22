import React from "react";
import HeroImage from "../assets/Logo.jpg";
import { FaArrowRight } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { SlSocialSpotify } from "react-icons/sl";
import { SiSoundcloud } from "react-icons/si";
import { AiOutlineYoutube } from "react-icons/ai";
export default function Hero() {
  return (
    <div className="w-[90%] h-[90%] flex flex-col jstify-center items-center m-auto">
      <div className="flex h-[80%] justify-center items-center text-offWhite font-inter">
        <div className="w-[55%] pr-10 ">
          <p className="text-lg mb-3 font-light">Hello! I am, </p>
          <h1 className="text-7xl font-semibold">OM PETLE</h1>
          <p className="text-lg mt-16 font-light">
            " Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatibus porro eveniet ipsa, modi repudiandae expedita totam?
            Voluptate placeat quasi ut debitis cupiditate accusantium, ducimus
            corporis. Quibusdam cupiditate eos nulla voluptas ipsa corrupti
            praesentium at veritatis sed itaque necessitatibus, molestiae
            perferendis possimus vitae totam! Ratione numquam ipsam est deleniti
            commodi. ""
          </p>
        </div>
        <div className="w-[35%] p-10 ">
          <img src={HeroImage} alt="" className="top-0" />
        </div>
      </div>
      <div className="h-[10%] flex justify-between p-0 w-full items-center">
        <div>
          <button className="flex justify-center items-center bg-gradient-to-r from-purple-400 to-yellow-500 p-4 rounded-lg hover:bg-gradient-to-r hover:from-yellow-500 hover:to-purple-400 hover:text-white ml-20 px-10 custom-shadow duration-500 ">
            CHECKOUT MY MUSIC!
            <FaArrowRight />
          </button>
        </div>
        <div className="flex text-3xl text-offWhite space-x-16 mr-28">
          <FaInstagram className="hover:scale-110 duration-300 cursor-pointer hover:text-red-400" />
          <MdAlternateEmail className="hover:scale-110 duration-300 cursor-pointer hover:text-blue-400"/>
          <SlSocialSpotify className="hover:scale-110 duration-300 cursor-pointer hover:text-green-400"/>
          <SiSoundcloud className="hover:scale-110 duration-300 cursor-pointer hover:text-orange-400"/>
          <AiOutlineYoutube className="hover:scale-110 duration-300 cursor-pointer hover:text-red-600"/>
        </div>
      </div>
    </div>
  );
}
