import React from "react";
import heroBg from "../../assets/service_hero.jpg";

export default function Hero() {
  return (
    <section
      className="relative h-[90vh] min-h-[600px] w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Top Espresso Gradient */}
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#483832]/55 via-[#483832]/20 to-transparent z-10 pointer-events-none" />

      {/* Bottom Espresso Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#483832]/50 via-[#483832]/15 to-transparent z-10 pointer-events-none" />

      {/* Left Reading Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#483832]/58 via-[#483832]/30 to-transparent z-10 pointer-events-none" />

      {/* Overall Overlay */}
      <div className="absolute inset-0 bg-[#483832]/12 z-10 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-20 h-full max-w-[1200px] mx-auto px-[5%] flex flex-col justify-end pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-[760px]">

          {/* Heading */}
          <h1 className="font-archivo uppercase leading-[0.94] tracking-[-0.02em] font-semibold select-none">

            <span className="block text-white text-[32px] sm:text-[42px] md:text-[54px] lg:text-[66px]">
              OUR{" "}
              <span className="text-[#D8B57A] font-bold">
                SERVICES
              </span>
            </span>

          </h1>

          {/* Accent Line */}
          <div className="w-16 h-[3px] rounded-full bg-[#D8B57A] mt-6 mb-6" />

          {/* Description */}
          <p className="max-w-[620px] text-sm sm:text-base md:text-lg lg:text-[22px] font-normal tracking-wide leading-relaxed text-white">
            Design, 3D Rendering, and Blueprint services for your construction
            needs.
          </p>

        </div>
      </div>
    </section>
  );
}