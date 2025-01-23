import React from "react";
import HeroImage from "../assets/Hero.jpg";
import { FaArrowRight } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { SlSocialSpotify } from "react-icons/sl";
import { SiSoundcloud } from "react-icons/si";
import { AiOutlineYoutube } from "react-icons/ai";
export default function Hero({ targetSectionRef }) {
  const handleScroll = () => {
    targetSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="md:w-[90%] h-[90%] flex flex-col justify-center md:mt-10 m-auto">
      <div className="flex flex-col md:flex-row h-[80%] justify-center items-center text-offWhite font-inter">
        <div className="md:w-[55%] ml-2 md:ml-0 md:pr-10">
          <p className="text-lg mb-3 font-light ml-2 ">Hello! I am, </p>
          <h1 className="text-5xl md:text-7xl font-semibold">OM PETLE</h1>
          <div className="md:hidden flex mt-5">
            <div>
              <img src={HeroImage} alt="" className="md:hidden" />
            </div>
            <div className="text-3xl ml-10 mr-5 flex z-0">
              <li className="list-none space-y-5 flex flex-col justify-center items-center">
                <a href="https://www.instagram.com/om.petle/" target="_blank">
                  <FaInstagram className="hover:scale-110 duration-300 cursor-pointer hover:text-red-400" />
                </a>
                <a href="mailto:ompetle183@gmail.com" target="_blank">
                  <MdAlternateEmail className="hover:scale-110 duration-300 cursor-pointer hover:text-blue-400" />
                </a>
                <a
                  href="https://open.spotify.com/artist/6cR0FpbkQtLYeDjM79dxo1?si=h91nm4qSR8SzXWgLKV3Qhg"
                  target="_blank"
                >
                  <SlSocialSpotify className="hover:scale-110 duration-300 cursor-pointer hover:text-green-400" />
                </a>
                <a href="https://on.soundcloud.com/nMKaB" target="_blank">
                  <SiSoundcloud className="hover:scale-110 duration-300 cursor-pointer hover:text-orange-400" />
                </a>
                <a href="https://www.youtube.com/@ompetle" target="_blank">
                  <AiOutlineYoutube className="hover:scale-110 duration-300 cursor-pointer hover:text-red-600" />
                </a>
              </li>
            </div>
          </div>
          <p className="md:block text-xs md:text-lg mt-4 text-left pr-4 md:mt-16 font-light">
            Originating from India, the producer born in 2002 developed a deep
            interest in electronic dance music (EDM). Inspired by artists like
            Martin Garrix, Avicii and Alan Walker, Om Petle decided to learn the
            aspects of producing music with a dream of creating his original art
            and finding his signature sound.
          </p>
        </div>
        <div>
          <button
            className="flex md:hidden justify-center items-center text-black mt-4 text-xs bg-gradient-to-r from-purple-400 to-yellow-500 p-4  rounded-lg hover:bg-gradient-to-r hover:from-yellow-500 hover:to-purple-400 hover:text-white custom-shadow duration-500 "
            onClick={handleScroll}
          >
            CHECKOUT MY MUSIC!
            <FaArrowRight />
          </button>
        </div>
        <div className="hidden md:block w-[35%] py-20 pl-10 ">
          <img src={HeroImage} alt="" className="top-0" />
        </div>
      </div>
      <div className="h-[10%] z-10 mt-10 hidden md:flex justify-between w-full items-center">
        <div>
          <button
            className="flex justify-center items-center text-xs md:text-lg bg-gradient-to-r from-purple-400 to-yellow-500 p-4 md:p-4 rounded-lg hover:bg-gradient-to-r hover:from-yellow-500 hover:to-purple-400 hover:text-white md:ml-16 md:px-10 custom-shadow duration-500"
            onClick={handleScroll}
          >
            CHECKOUT MY MUSIC!
            <FaArrowRight />
          </button>
        </div>
        <div className="hidden md:flex text-3xl text-offWhite space-x-16 mr-16">
          <a href="https://www.instagram.com/om.petle/" target="_blank">
            <FaInstagram className="hover:scale-110 duration-300 cursor-pointer hover:text-red-400" />
          </a>
          <a href="mailto:ompetle183@gmail.com" target="_blank">
            <MdAlternateEmail className="hover:scale-110 duration-300 cursor-pointer hover:text-blue-400" />
          </a>
          <a
            href="https://open.spotify.com/artist/6cR0FpbkQtLYeDjM79dxo1?si=h91nm4qSR8SzXWgLKV3Qhg"
            target="_blank"
          >
            <SlSocialSpotify className="hover:scale-110 duration-300 cursor-pointer hover:text-green-400" />
          </a>
          <a href="https://on.soundcloud.com/nMKaB" target="_blank">
            <SiSoundcloud className="hover:scale-110 duration-300 cursor-pointer hover:text-orange-400" />
          </a>
          <a href="https://www.youtube.com/@ompetle" target="_blank">
            <AiOutlineYoutube className="hover:scale-110 duration-300 cursor-pointer hover:text-red-600" />
          </a>
        </div>
      </div>
    </div>
  );
}
