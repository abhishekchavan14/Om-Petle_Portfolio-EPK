import React, { useState } from "react";
import Background from "../assets/EPK.png";
import { FaArrowRight } from "react-icons/fa6";
import HomeBg from "../assets/EPK/Home.png";
import AboutBg from "../assets/EPK/About.png";
import MusicBg from "../assets/EPK/Music.png";
import ContactBg from "../assets/EPK/Contact.png";
import HomeMobBg from "../assets/EPK/HomeMob.png";
import AboutMobBg from "../assets/EPK/AboutMob.png";
import MusicMobBg from "../assets/EPK/MusicMob.png";
import ContactMobBg from "../assets/EPK/ContactMob.png";
import { IoMdPlay } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { SlSocialSpotify } from "react-icons/sl";
import { SiSoundcloud } from "react-icons/si";
import { AiOutlineYoutube } from "react-icons/ai";
import EPKPDF from "../assets/Om_Petle_EPK.pdf";

export default function EPK() {
  const [isEPKVisible, setIsEPKVisible] = useState(false);

  // Show the EPK popup
  const handleViewEPK = () => {
    setIsEPKVisible(true); // Show the EPK popup
  };

  // Hide the EPK popup
  const handleCloseEPK = () => {
    setIsEPKVisible(false); // Close the EPK popup
  };

  // Close the popup when clicking outside of it
  const handleOverlayClick = (e) => {
    if (e.target.id === "epk-overlay") {
      handleCloseEPK(); // Close if clicked outside the popup div
    }
  };

  return (
    <div className="w-full bg-[#282828] lg:py-24 lg:px-36" id="epk">
      {/* Background and Button */}
      <div className="relative flex justify-center items-center">
        <img src={Background} alt="" className="blur-sm" />
        <button
          className="absolute flex space-x-3 justify-center items-center bg-white px-4 py-2 lg:px-6 lg:py-4 text-sm lg:text-3xl bg-gradient-to-r from-purple-400 to-yellow-500 p-4 rounded-lg hover:bg-gradient-to-r hover:from-yellow-500 hover:to-purple-400 hover:text-white custom-shadow duration-500"
          onClick={handleViewEPK}
        >
          <span>View EPK</span>
          <FaArrowRight />
        </button>
      </div>

      {/* Overlay and EPK Section */}
      {isEPKVisible && (
        <div
          id="epk-overlay"
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleOverlayClick}
        >
          <div className="bg-white rounded-lg p-8 max-w-4xl w-full h-3/4 overflow-auto relative">
            {/* Close Button inside the popup */}
            <button
              className="absolute top-0 right-0 z-10 text-white bg-red-500 hover:bg-red-600 rounded-full mb-2 w-8 h-8 flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 ml-auto"
              onClick={handleCloseEPK}
            >
              &times;
            </button>

            {/* Sections with respective backgrounds */}
            <div id="Home">
              <img
                src={HomeMobBg}
                alt="Home Background"
                className="w-full h-auto md:hidden"
              />
              <img
                src={HomeBg}
                alt="Home Background"
                className="w-full h-auto hidden md:block"
              />
            </div>
            <div id="About">
              <img
                src={AboutBg}
                alt="About Background"
                className="w-full h-auto hidden md:block"
              />
              <img
                src={AboutMobBg}
                alt="About Background"
                className="w-full h-auto md:hidden"
              />
            </div>
            <div id="Music" className="relative">
              <img
                src={MusicBg}
                alt="Music Background"
                className="w-full h-auto hidden md:block"
              />
              <img
                src={MusicMobBg}
                alt="Music Background"
                className="w-full h-auto md:hidden"
              />
              {/* Spotify embed - positioned absolutely on the right */}
              <div className="hidden absolute top-0 right-5 w-1/2 h-full lg:flex justify-end items-center">
                <iframe
                  src="https://open.spotify.com/embed/track/42yGj49g1dUFjUiLFUNpnB?utm_source=generator"
                  width="100%"
                  height="20%"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </div>
              <div className="lg:hidden flex absolute top-10 right-1 h-full items-center">
                <a
                  href="https://open.spotify.com/embed/track/42yGj49g1dUFjUiLFUNpnB?utm_source=generator"
                  target="_blank"
                  className="font-bold underline text-black text-xs flex justify-center items-center"
                >
                  <IoMdPlay />
                  Dream - Om Petle
                </a>
              </div>
            </div>
            <div id="Contact" className="relative">
              <img
                src={ContactBg}
                alt="Contact Background"
                className="w-full h-auto hidden md:block"
              />
              <img
                src={ContactMobBg}
                alt="Contact Background"
                className="w-full h-auto md:hidden"
              />
              <div className="hidden absolute bottom-20 left-16 h-full lg:flex items-end">
                <li className="list-none space-x-5 flex text-xl items-center justify-center text-white">
                  <a href="https://www.instagram.com/om.petle/" target="_blank">
                    <FaInstagram className="hover:scale-110 duration-300 cursor-pointer hover:text-red-400" />
                  </a>
                  <a href="mailto:ompetle183@gmail.com" target="_blank">
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
              <div className="lg:hidden absolute flex bottom-10 left-16 h-full items-end">
                <li className="list-none space-x-5 flex text-xl items-center justify-center text-white">
                  <a href="https://www.instagram.com/om.petle/" target="_blank">
                    <FaInstagram className="hover:scale-110 duration-300 cursor-pointer hover:text-red-400" />
                  </a>
                  <a href="mailto:ompetle183@gmail.com" target="_blank">
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
          </div>
        </div>
      )}
    </div>
  );
}
