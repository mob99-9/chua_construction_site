import React from "react";
import heroBg from "../../assets/service_hero.jpg";

export default function Hero() {
  return (
    <section
      className="relative h-[90vh] min-h-[600px] w-full overflow-hidden bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Top Gradient */}
      <div className="absolute inset-x-0 top-0 z-10 h-56 bg-gradient-to-b from-[#00062E] via-[#00062E]/80 to-transparent pointer-events-none" />

      {/* Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 z-10 h-64 bg-gradient-to-t from-[#00062E]/95 via-[#00062E]/65 to-transparent pointer-events-none" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/20 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-20 h-full w-full max-w-[1200px] mx-auto px-[5%] flex flex-col justify-end pb-14 md:pb-16 lg:pb-20">
        <div className="max-w-[760px]">
          {/* Heading */}
          <h1 className="font-archivo uppercase leading-[0.96] tracking-[-0.02em] font-semibold select-none">
            <span className="block text-white text-[34px] sm:text-[46px] md:text-[58px] lg:text-[68px]">
              OUR{" "}
              <span className="text-[#F97400] font-bold">
                SERVICES
              </span>
            </span>
          </h1>

          {/* Accent Line */}
          <div className="w-14 h-[3px] rounded-full bg-[#F97400] mt-6 mb-5" />

          {/* Description */}
          <p className="max-w-[680px] text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed tracking-wide text-white">
            Design, 3D Rendering, and Blueprint services for your construction
            needs.
          </p>
        </div>
      </div>
    </section>
  );
}