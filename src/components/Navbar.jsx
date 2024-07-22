import React from "react";
import NavbarLogo from "../assets/Logo-PNG.png";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  return (
    <div className="w-full h-[10%] fixed top-0 bg-[#282828] bg-opacity-90 shadow-lg shadow-black flex justify-between items-center z-10">
      <div className=" object-contain w-[5%] ml-24">
        <img src={NavbarLogo} alt="" className=" hover:cursor-pointer" />
      </div>
      <div>
        <li className=" list-none flex mr-24 space-x-16 font-semibold text-[#D4B200] font-inter text-xl">
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
    </div>
  );
}
