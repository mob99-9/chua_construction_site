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
      className="bg-[#F8F5F1] pt-20 pb-10 px-[5%] flex flex-col items-center text-center"
    >
      {/* Heading */}

      <h2 className="flex items-center justify-center gap-4 text-4xl md:text-5xl font-bold text-[#483832]">

        <FaQuestionCircle className="text-[#D8B57A] text-4xl md:text-5xl" />

        What services do we offer?

      </h2>

      {/* Accent Line */}

      <div className="w-24 h-[3px] bg-[#D8B57A] rounded-full mt-5 mb-8" />

      {/* Description */}

      <p className="max-w-[850px] text-lg md:text-[1.45rem] leading-9 text-[#6B5B52]">

        Here at{" "}
        <span className="font-bold text-[#483832]">
          CHUA
        </span>
        , we provide complete architectural and construction solutions—from
        planning and visualization to construction-ready documentation—all
        tailored to bring your vision to life.

      </p>

    </section>
  );
}