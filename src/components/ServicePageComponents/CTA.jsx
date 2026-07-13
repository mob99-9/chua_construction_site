import React from "react";
import { useNavigate } from "react-router-dom";
import ctaBg from "../../assets/WantToWorkWithUs.png";

export default function CTA() {
  const navigate = useNavigate();

  return (
    <section className="relative mt-20">

      <div
        id="cta"
        className="
          relative
          w-full
          h-[240px]
          overflow-hidden
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: `url(${ctaBg})`,
        }}
      >

        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-[#001186]/92"></div>

        {/* Content */}
        <div className="relative z-20 h-full max-w-[1280px] mx-auto px-[5%] flex items-center justify-between">

          {/* Left */}
          <div>

            <h2 className="text-white text-[3rem] font-bold">
              Want to work with us?
            </h2>

            <p className="mt-3 text-xl text-white/85">
              Let's build your dream project together.
            </p>

          </div>

          {/* Right */}
          <button
            onClick={() => navigate("/inquire")}
            className="
              bg-[#F87400]
              text-white
              font-bold
              text-lg
              px-12
              py-5
              rounded-full
              shadow-xl
              hover:bg-orange-500
              hover:scale-105
              duration-300
            "
          >
            Contact Us
          </button>

        </div>

      </div>

    </section>
  );
}