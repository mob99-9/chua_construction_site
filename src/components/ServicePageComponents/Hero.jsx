import React from "react";
import { useNavigate } from "react-router-dom";
import heroBg from "../../assets/bannerS.mp4";
import Button from "../common/Button";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden text-white">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroBg} type="video/mp4" />
      </video>

      {/* Top gradient */}
      <div className="absolute top-0 left-0 w-full h-[220px] bg-gradient-to-b from-[#00062E] via-[#00062E]/80 to-transparent pointer-events-none z-10"></div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-[180px] bg-gradient-to-t from-[#00062E] via-[#00062E]/85 to-transparent pointer-events-none z-10"></div>

      <div className="relative z-20 h-full w-full max-w-[1200px] mx-auto px-[5%] flex flex-col lg:flex-row justify-end lg:justify-between items-start lg:items-end gap-8 pb-16">
        <div className="flex flex-col max-w-[850px]">
          <h1 className="font-bold leading-none text-white flex flex-wrap items-baseline gap-y-2">
            <span className="text-4xl sm:text-5xl md:text-6xl tracking-wide mr-3">
              Our
            </span>

            <span className="font-script text-orange-500 text-7xl sm:text-8xl md:text-9xl relative -bottom-2 leading-none">
              Services
            </span>
          </h1>

          <p className="text-lg md:text-xl font-medium mt-6">
            Design, 3D Rendering, and Blueprint services for your construction
            needs.
          </p>
        </div>

        <div className="lg:mb-2">
          
        </div>
      </div>
    </section>
  );
}