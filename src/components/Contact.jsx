import React from "react";
import Typewriter from "./Typer";
import { MAP_URL } from "../utils/constants";
import { FaLocationArrow } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col gap-2 bg-gray-950 h-full text-white py-8 sm:py-12 md:py-14 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="flex flex-col gap-1 sm:gap-2 items-center justify-center text-center">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold">
          Contact Us
        </p>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-[#c434b8]">
          get in touch
        </p>
      </div>
      <div className="flex flex-col md:flex-row w-full gap-4 sm:gap-6 md:gap-4 mt-4 sm:mt-6 md:mt-8">
        <section className="w-full md:w-1/2 flex flex-col justify-center gap-2 sm:gap-3 md:gap-4 px-1 sm:px-2 md:px-6 lg:px-10 text-center md:text-left">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold flex flex-wrap justify-center md:justify-start items-center">
            Get in touch
          </p>

          <span className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
            If you have any queries or would like to collaborate for events,
            feel free to contact us by email, and we will get back to you as
            soon as possible.
          </span>

          <span className="flex items-start gap-2 text-xs sm:text-sm md:text-base justify-center md:justify-start">
            <FaLocationArrow className="mt-0.5 shrink-0"/>  
            <span>Room No. 109, Students Activity Centre, IIT Roorkee, India</span>
          </span>
        </section>
        <section className="w-full md:w-1/2 flex items-center justify-center px-1 sm:px-0">
          <iframe
            src={MAP_URL}
            className="w-full h-44 sm:h-56 md:h-64 lg:h-80 rounded-lg border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </div>
    </div>
  );
};

export default Contact;
