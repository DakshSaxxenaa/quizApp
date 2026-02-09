import React from "react";
import QCG from "../assets/qcg_logo-preview.png";
import Typewriter from "./Typer";
import { CLUB_INFO } from "../utils/constants";
import { FaInstagram, FaYoutube, FaLinkedin, FaMedium, FaTwitter } from "react-icons/fa";

const About = () => {
  return (
    <div className="flex flex-col gap-2 bg-white h-full text-black py-8 sm:py-12 md:py-14 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="flex flex-col gap-1 sm:gap-2 items-center justify-center text-center">
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">About Us</p>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-[#c434b8]">who we are</p>
      </div>
      <div className="flex flex-col md:flex-row w-full gap-4 sm:gap-6 md:gap-4 mt-4 sm:mt-6 md:mt-8">
        <section className="w-full md:w-2/5 flex items-center justify-center">
          <img src={QCG} alt="qcg_logo" className="w-40 sm:w-48 md:w-auto md:h-full max-h-48 sm:max-h-56 md:max-h-72 lg:max-h-80 object-contain" />
        </section>
        <section className="w-full md:w-3/5 flex flex-col justify-center gap-2 sm:gap-3 md:gap-4 px-1 sm:px-2 md:px-6 lg:px-10 text-center md:text-left">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold flex flex-wrap justify-center md:justify-start items-center">
            We work around Quantum <Typewriter />
          </p>
          <p className="text-[11px] sm:text-xs md:text-sm lg:text-base leading-relaxed">{CLUB_INFO}</p>
          <span className="flex gap-3 sm:gap-4 text-lg sm:text-xl md:text-xl lg:text-2xl justify-center md:justify-start">
            <FaInstagram />
            <FaYoutube />
            <FaLinkedin />
            <FaMedium />
            <FaTwitter />
          </span>
        </section>
      </div>
    </div>
  );
};

export default About;
