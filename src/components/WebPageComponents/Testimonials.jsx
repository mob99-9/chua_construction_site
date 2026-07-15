import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import testimonialsIcon from "../../assets/icons/Testimonials.png";

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

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
    startAutoPlay();
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % slides.length);
    startAutoPlay();
  };

  return (
    <section className="py-24 px-[5%] bg-white">

      {/* Heading */}

      <div className="text-center mb-14">

        <p className="uppercase tracking-[4px] text-primary-orange font-bold text-sm flex items-center justify-center gap-2">
          <img src={testimonialsIcon} alt="" className="w-5 h-5 object-contain" />
          TESTIMONIALS
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#001286] mt-3">
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
              h-[220px]
              lg:h-[300px]
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

              <h2 className="font-script text-4xl lg:text-5xl text-primary-orange">
                Testimonials
              </h2>

              <div className="w-20 h-1 bg-primary-orange rounded-full mx-auto my-3"></div>

              <p className="text-2xl lg:text-[2rem] leading-tight font-semibold text-white drop-shadow-lg">
                It's always nice to hear from you!
              </p>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative h-[280px] lg:h-[300px] bg-gradient-to-br from-[#001286] to-[#001A6E] overflow-hidden group/slider">

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

            {/* Absolute navigation arrows */}
            <button
              type="button"
              onClick={handlePrev}
              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                w-10
                h-10
                rounded-full
                bg-black/30
                hover:bg-[#F87400]
                text-white
                flex
                items-center
                justify-center
                opacity-100
                lg:opacity-0
                lg:group-hover/slider:opacity-100
                transition-all
                duration-300
                z-30
                border-none
                cursor-pointer
              "
              aria-label="Previous slide"
            >
              <FaChevronLeft size={16} />
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="
                absolute
                right-4
                top-1/2
                -translate-y-1/2
                w-10
                h-10
                rounded-full
                bg-black/30
                hover:bg-[#F87400]
                text-white
                flex
                items-center
                justify-center
                opacity-100
                lg:opacity-0
                lg:group-hover/slider:opacity-100
                transition-all
                duration-300
                z-30
                border-none
                cursor-pointer
              "
              aria-label="Next slide"
            >
              <FaChevronRight size={16} />
            </button>

            {/* Dots Pagination */}
            <div className="absolute bottom-6 left-6 flex gap-2.5 z-30">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleDotClick(index)}
                  className={`
                    w-3
                    h-3
                    rounded-full
                    transition-all
                    duration-300
                    border-none
                    cursor-pointer
                    ${activeIndex === index ? "bg-[#F87400] w-6" : "bg-white/40 hover:bg-white/70"}
                  `}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}