import React from "react";
import Hero from "./Hero";
import Background from "../assets/EPK.png";
import { FaArrowRight } from "react-icons/fa6";

export default function EPK() {
  return (
    <div className="w-full bg-[#282828] lg:py-24 lg:px-36" id="epk">
      <div className="relative flex justify-center items-center">
        <img src={Background} alt="" className="blur-sm" />
        <button className="absolute flex space-x-3 justify-center items-center bg-white px-4 py-2 lg:px-6 lg:py-4 text-sm lg:text-3xl bg-gradient-to-r from-purple-400 to-yellow-500 p-4  rounded-lg hover:bg-gradient-to-r hover:from-yellow-500 hover:to-purple-400 hover:text-white custom-shadow duration-500">
          <span>View EPK </span>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
