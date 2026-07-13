import React, { useState, useEffect, useRef } from "react";

import leftGraphic from "../../assets/image 16.png";

import slideDefault from "../../assets/Testaments/Property 1=Default.png";
import slideVariant2 from "../../assets/Testaments/Property 1=Variant2.png";
import slideVariant3 from "../../assets/Testaments/Property 1=Variant3.png";
import slideVariant4 from "../../assets/Testaments/Property 1=Variant4.png";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    slideDefault,
    slideVariant2,
    slideVariant3,
    slideVariant4,
  ];

  const autoPlayRef = useRef(null);

  const stopAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  };

  const startAutoPlay = () => {
    stopAutoPlay();

    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  useEffect(() => {
    startAutoPlay();

    return () => stopAutoPlay();
  }, []);

  const handleDotClick = (index) => {
    setActiveIndex(index);
    startAutoPlay();
  };

  return (
    <section className="py-24 px-[5%] bg-white">

      {/* Heading */}

      <div className="text-center mb-14">

        <p className="uppercase tracking-[4px] text-primary-orange font-bold text-sm">
          TESTIMONIALS
        </p>

        <h2 className="text-5xl font-bold text-[#001286] mt-3">
          What Our Clients Say
        </h2>

        <div className="w-24 h-1 bg-primary-orange rounded-full mx-auto mt-5"></div>

      </div>

      <div className="flex justify-center">

        <div
          onMouseEnter={stopAutoPlay}
          onMouseLeave={startAutoPlay}
          className="
            grid
            lg:grid-cols-[380px_663px]
            overflow-hidden
            rounded-[30px]
            shadow-[0_25px_60px_rgba(0,0,0,.18)]
            hover:-translate-y-2
            hover:shadow-[0_35px_70px_rgba(0,0,0,.25)]
            transition-all
            duration-500
            max-w-[1043px]
            w-full
          "
        >

          {/* LEFT */}

          <div
            className="
              relative
              h-[300px]
              bg-cover
              bg-center
              flex
              items-center
              justify-center
              text-center
              px-8
              overflow-hidden
            "
            style={{
              backgroundImage: `url(${leftGraphic})`,
            }}
          >

            {/* Background Zoom */}

            <div
              className="
                absolute
                inset-0
                bg-cover
                bg-center
                transition-transform
                duration-700
                hover:scale-105
              "
              style={{
                backgroundImage: `url(${leftGraphic})`,
              }}
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-br from-[#001286]/65 via-[#001286]/35 to-black/20"></div>

            <div className="relative z-20">

              <h2 className="font-script text-5xl text-primary-orange">
                Testimonials
              </h2>

              <div className="w-20 h-1 bg-primary-orange rounded-full mx-auto my-4"></div>

              <p className="text-[2rem] leading-tight font-semibold text-white drop-shadow-lg">
                It's always nice to hear from you!
              </p>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative h-[300px] bg-gradient-to-br from-[#001286] to-[#001A6E] overflow-hidden">

            <img
              key={activeIndex}
              src={slides[activeIndex]}
              alt="testimonial"
              className="
                w-full
                h-full
                object-cover
                transition-all
                duration-700
              "
            />

            {/* Dots */}

            <div className="absolute bottom-7 left-7 flex gap-3">


            </div>

          </div>

        </div>

      </div>

    </section>
  );
}