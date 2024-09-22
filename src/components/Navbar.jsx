import React, { useState } from "react";
import NavbarLogo from "../assets/Logo-PNG.png";
import { useLocation } from "react-router-dom";
import MenuIcon from "../assets/MenuIcon.png";

export default function Navbar() {
  const location = useLocation();
  const [nav, setNav] = useState(true);
  const [rotate, setRotate] = useState(true);
  const handleClick = () => {
    setNav(!nav);
    setRotate(!rotate);
  };
  return (
    <div className="w-full h-[10%] fixed top-0 bg-[#282828] bg-opacity-90 shadow-lg shadow-black flex justify-between items-center z-50">
      <div className="object-contain w-[15%] md:w-[5%] ml-4 md:ml-36">
        <img src={NavbarLogo} alt="" className=" hover:cursor-pointer" />
      </div>
      <div className="hidden md:block">
        <li className="list-none flex mr-36 space-x-16 font-semibold text-[#D4B200] font-inter text-xl">
          <a
            href="#home"
            className={
              location.hash === "#home" || location.hash === ""
                ? "text-white"
                : "text-[#D4B200] hover:scale-110 hover:text-white duration-500 cursor-pointer"
            }
          >
            Home
          </a>
          <a
            href="#epk"
            className={
              location.hash === "#epk"
                ? "text-white"
                : "text-[#D4B200] hover:scale-110 hover:text-white duration-500 cursor-pointer"
            }
          >
            EPK
          </a>
          <a
            href="#music"
            className={
              location.hash === "#music"
                ? "text-white"
                : "text-[#D4B200] hover:scale-110 hover:text-white duration-500 cursor-pointer"
            }
          >
            Music
          </a>
          <a
            href="#contact"
            className={
              location.hash === "#contact"
                ? "text-white"
                : "text-[#D4B200] hover:scale-110 hover:text-white duration-500 cursor-pointer"
            }
          >
            Contact
          </a>
        </li>
      </div>
      <button className="block md:hidden mr-2 p-1" onClick={handleClick}>
        {nav ? (
          <img
            src={MenuIcon}
            alt="Icon"
            className="rotate-0 duration-300 w-[70%]"
          />
        ) : (
          <img
            src={MenuIcon}
            alt="Icon"
            className="rotate-45 duration-300 w-[70%]"
          />
        )}
      </button>
      <div
        className={
          nav
            ? "fixed top-20 right-[-100%] duration-500 p-2 border-l w-36 h-screen bg-black  opcaity-50 z-10"
            : "fixed top-20 right-0 duration-500 p-2 border-l w-36 h-screen bg-opacity-90 bg-black z-10"
        }
      >
        <ul className="flex flex-col space-y-2">
          <a
            href="#home"
            className={
              location.hash === "#home" || location.hash === ""
                ? "text-white"
                : "text-[#D4B200] hover:scale-110 hover:text-white duration-500 cursor-pointer"
            }
          >
            Home
          </a>
          <a
            href="#epk"
            className={
              location.hash === "#epk"
                ? "text-white"
                : "text-[#D4B200] hover:scale-110 hover:text-white duration-500 cursor-pointer"
            }
          >
            EPK
          </a>
          <a
            href="#music"
            className={
              location.hash === "#music"
                ? "text-white"
                : "text-[#D4B200] hover:scale-110 hover:text-white duration-500 cursor-pointer"
            }
          >
            Music
          </a>
          <a
            href="#contact"
            className={
              location.hash === "#contact"
                ? "text-white"
                : "text-[#D4B200] hover:scale-110 hover:text-white duration-500 cursor-pointer"
            }
          >
            Contact
          </a>
        </ul>
      </div>
    </div>
  );
}
