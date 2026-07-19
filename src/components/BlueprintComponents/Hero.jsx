import React from "react";
import heroVideo from "../../assets/BlueprintPage/6614807-uhd_3840_2160_25fps.mp4";

export default function Hero() {
  return (
    <section className="relative w-full h-[75vh] min-h-[600px] overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/25 z-10"></div>

      {/* Top Gradient */}
      <div className="absolute inset-x-0 top-0 z-20 h-56 bg-gradient-to-b from-[#00062E] via-[#00062E]/80 to-transparent" />

      {/* Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 z-20 h-64 bg-gradient-to-t from-[#00062E]/95 via-[#00062E]/65 to-transparent" />

      {/* Hero Content */}
      <div className="relative z-30 h-full max-w-[1200px] mx-auto px-[5%] flex flex-col justify-end pb-14 md:pb-16 lg:pb-20">
        <div className="max-w-[760px]">
          {/* Small Label */}
          <p className="uppercase tracking-[0.3em] text-[#F97400] font-medium text-xs sm:text-sm mb-5">
            Blueprint Services
          </p>

          {/* Heading */}
          <h1 className="font-archivo uppercase leading-[0.96] tracking-[-0.02em] font-semibold select-none">
            <span className="block text-white text-[34px] sm:text-[46px] md:text-[58px] lg:text-[68px]">
              MAKE YOUR DREAMS
            </span>

            <span className="block text-white text-[34px] sm:text-[46px] md:text-[58px] lg:text-[68px] mt-1">
              COME TO{" "}
              <span className="text-[#F97400] font-bold">
                LIFE!
              </span>
            </span>
          </h1>

          {/* Accent Line */}
          <div className="w-14 h-[3px] rounded-full bg-[#F97400] mt-6" />
        </div>
      </div>
    </section>
  );
}