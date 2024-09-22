import React from "react";
import Image from "../assets/Music_Photo.jpg";

export default function Music() {
  return (
    <div
      className="w-full bg-[#282828] px-5 pt-20 lg:pt-24 lg:px-36"
      id="music"
    >
      <div className="flex flex-col space-y-5">
        <div className="flex space-x-3 md:space-x-10">
          <div className="w-[70%] md:w-[30%]">
            <img src={Image} alt="" />
          </div>
          <div className="w-[100%] flex flex-col lg:justify-start justify-center text-offWhite font-inter">
            <h1 className="text-5xl md:text-7xl font-semibold mb-5">
              MUSIC
            </h1>
            <p className="text-xs md:text-sm text-justify">
              Learning and producing since 2020, Om finally landed his first
              label release in 2024, although having a unique catalog of tracks
              uploaded to his Soundcloud profile (link mentioned below)
              unbounded by any particular EDM genre.
            </p>
            <li className="hidden lg:block list-none space-y-5 md:mt-10">
              <iframe
                src="https://open.spotify.com/embed/track/42yGj49g1dUFjUiLFUNpnB?utm_source=generator"
                width="100%"
                height="100%"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </li>
          </div>
        </div>
        <div className="lg:hidden">
          <li className="list-none space-y-5 md:mt-10">
            <iframe
              src="https://open.spotify.com/embed/track/42yGj49g1dUFjUiLFUNpnB?utm_source=generator"
              width="100%"
              height="100%"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </li>
        </div>
      </div>
    </div>
  );
}
