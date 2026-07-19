import React from "react";
import heroVideo from "../../assets/3DRenderPage/Hero Banner.mp4";

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
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent"></div>

      {/* Hero Content */}
      <div className="relative z-10 h-full max-w-[1200px] mx-auto px-6 flex items-center justify-center text-center">
        <div className="max-w-[800px] mt-28 md:mt-36">
          <p className="uppercase tracking-[0.35em] text-[#F87400] font-semibold text-sm mb-5 font-sans">
            Portfolio
          </p>

          <h1 className="font-archivo text-[#f97400] text-4xl sm:text-6xl md:text-7xl lg:text-[80px] leading-[0.95] select-none tracking-tight uppercase">
            DIGITALLY, <br /> BRING IT TO LIFE!
          </h1>
        </div>
      </div>
    </section>
  );
}