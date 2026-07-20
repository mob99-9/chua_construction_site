import React from "react";
import heroVideo from "../../assets/BlueprintPage/6614807-uhd_3840_2160_25fps.mp4";

export default function Hero() {
  return (
    <section className="relative w-full h-[65vh] min-h-[380px] md:h-[75vh] md:min-h-[600px] overflow-hidden">
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

      {/* Soft Dark Overlay */}
      <div className="absolute inset-0 bg-[#241C18]/10 z-10"></div>

      {/* Soft Top Gradient */}
      <div className="absolute inset-x-0 top-0 z-20 h-24 md:h-40 bg-gradient-to-b from-[#483832]/40 to-transparent" />

      {/* Soft Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 z-20 h-32 md:h-44 bg-gradient-to-t from-[#483832]/45 to-transparent" />

      {/* Hero Content */}
      <div className="relative z-30 h-full max-w-[1200px] mx-auto px-[5%] flex flex-col justify-end pb-8 sm:pb-12 md:pb-16 lg:pb-20">
        <div className="max-w-[760px]">
          {/* Small Label */}
          <p className="uppercase tracking-[0.3em] text-[#D8B57A] font-medium text-xs sm:text-sm mb-5">
            Blueprint Services
          </p>

          {/* Heading */}
          <h1 className="font-archivo uppercase leading-[0.96] tracking-[-0.02em] font-semibold select-none">
            <span className="block text-white text-[28px] sm:text-[46px] md:text-[58px] lg:text-[68px]">
              MAKE YOUR DREAMS
            </span>

            <span className="block text-white text-[28px] sm:text-[46px] md:text-[58px] lg:text-[68px] mt-1">
              COME TO{" "}
              <span className="text-[#D8B57A] font-bold">
                LIFE!
              </span>
            </span>
          </h1>

          {/* Accent Line */}
          <div className="w-14 h-[3px] rounded-full bg-[#D8B57A] mt-6" />
        </div>
      </div>
    </section>
  );
}