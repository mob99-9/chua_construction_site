import React from "react";
import { useNavigate } from "react-router-dom";
import { FaQuestionCircle } from "react-icons/fa";

export default function ServicesOffer() {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="services"
      className="pt-16 pb-6 px-[5%] bg-white text-center flex flex-col items-center"
    >
      {/* Heading */}

      <h2 className="text-[#F87400] text-4xl md:text-5xl font-extrabold mb-4 flex items-center justify-center gap-4">

        <FaQuestionCircle className="text-[#F87400] text-4xl md:text-5xl" />

        What services do we offer?

      </h2>

      {/* Description */}

      <p className="text-slate-900 text-xl sm:text-[1.75rem] font-medium mb-12 max-w-[800px]">
        Here in <span className="text-[#F87400] font-bold">CHUA</span> we offer
        the following services:
      </p>

      {/* Clickable tabs */}

      <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 justify-center items-center">
      </div>

    </section>
  );
}