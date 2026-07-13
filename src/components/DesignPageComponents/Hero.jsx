import React from "react";
import heroVideo from "../../assets/DesignPage/Hero Banner.mp4";

export default function Hero() {
  return (
    <section className="relative w-full h-[75vh] min-h-[600px] overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[#00062E]/65" />

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent" />

      <div className="relative z-10 h-full max-w-[1200px] mx-auto px-6 flex items-center">
        <div className="max-w-[700px] mt-28 md:mt-36">
          <p className="uppercase tracking-[0.35em] text-[#F87400] font-semibold text-sm mb-5">
            Design Services
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
            Built on{" "}
            <span className="font-['Allura'] text-[#F87400] text-5xl md:text-7xl font-normal">
              Trust
            </span>
            <br />
            <span className="font-['Allura'] text-[#F87400] text-5xl md:text-7xl font-normal">
              Built
            </span>{" "}
            to Last
          </h1>
        </div>
      </div>
    </section>
  );
}