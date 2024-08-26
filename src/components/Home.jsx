import React from "react";
import Hero from "./Hero";

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen bg-[#282828] pt-20 overflow-x-hidden" id="home">
        <Hero />
        <div className="bg-purple-400 w-[10%] h-[20%] absolute top-36 left-[-5%] rounded-full blur-3xl">
          .
        </div>
        <div className="bg-yellow-400 w-[20%] h-[20%] absolute -bottom-[10%] right-0 overflow-x-hidden rounded-full blur-3xl">
          .
        </div>
      </div>
    </>
  );
}
