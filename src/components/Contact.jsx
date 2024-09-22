import React from "react";
import ContactImg from "../assets/Contact1.jpg";
import { FaInstagram } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { SlSocialSpotify } from "react-icons/sl";
import { SiSoundcloud } from "react-icons/si";
import { AiOutlineYoutube } from "react-icons/ai";

export default function Contact() {
  return (
    <div className="w-full h-screen bg-[#282828] p-5 lg:pt-24 lg:px-36" id="contact">
      <h1 className="text-5xl md:text-7xl text-center font-semibold mb-5 text-offWhite font-inter">
        CONTACT
      </h1>
      <div className="flex flex-col lg:flex-row justify-between items-center p-4 lg:p-10 lg:space-x-10 border">
        <div className="w-[50%] lg:w-[30%] text-offWhite text-center text-xs lg:text-base">
          <img src={ContactImg} alt="image" className="rounded-full mb-5" />
          <p>Om Petle</p>
          <p>ompetle183@gmail.com</p>
          <div className="mt-5">
            <li className="list-none space-x-5 flex text-xl items-center justify-center">
              <a href="https://www.instagram.com/om.petle/" target="_blank">
                <FaInstagram className="hover:scale-110 duration-300 cursor-pointer hover:text-red-400" />
              </a>
              <a href="mailto:abhishekchavan940@gmail.com" target="_blank">
                <MdAlternateEmail className="hover:scale-110 duration-300 cursor-pointer hover:text-blue-400" />
              </a>
              <a href="https://open.spotify.com/" target="_blank">
                <SlSocialSpotify className="hover:scale-110 duration-300 cursor-pointer hover:text-green-400" />
              </a>
              <a href="https://soundcloud.com/" target="_blank">
                <SiSoundcloud className="hover:scale-110 duration-300 cursor-pointer hover:text-orange-400" />
              </a>
              <a href="https://www.youtube.com/@ompetle" target="_blank">
                <AiOutlineYoutube className="hover:scale-110 duration-300 cursor-pointer hover:text-red-600" />
              </a>
            </li>
          </div>
        </div>
        <div className="flex flex-col space-y-8 w-full lg:w-[70%] mt-5 lg:mt-0">
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 outline-none rounded-3xl bg-transparent border text-white"
          />
          <textarea
            name="Message"
            id="Message"
            className="h-[50%] p-4 outline-none rounded-3xl bg-transparent border text-white"
            placeholder="Message"
          ></textarea>
          <button className="p-4 rounded-full bg-green-300 font-bold w-[30%] hover:text-white hover:bg-green-600 duration-500 m-auto">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
