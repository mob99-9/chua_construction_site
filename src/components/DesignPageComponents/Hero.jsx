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

      <div className="relative z-10 h-full max-w-[1200px] mx-auto px-6 flex items-center justify-center text-center">
        <div className="max-w-[800px] mt-28 md:mt-36">
          <p className="uppercase tracking-[0.35em] text-[#F87400] font-semibold text-sm mb-5 font-sans">
            Design Services
          </p>

          <h1 className="flex flex-col select-none text-white leading-tight">
            {/* Let's Design */}
            <span className="flex items-baseline flex-wrap gap-x-3 justify-center">
              <span className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold">
                Let's
              </span>
              <span className="font-script text-[#f97316] leading-none text-7xl sm:text-8xl md:text-9xl">
                Design
              </span>
            </span>

            {/* your dream Project! */}
            <span className="flex items-baseline flex-wrap gap-x-3 justify-center -mt-2">
              <span className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold">
                your dream
              </span>
              <span className="font-script text-[#f97316] leading-none text-7xl sm:text-8xl md:text-9xl">
                Project!
              </span>
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}