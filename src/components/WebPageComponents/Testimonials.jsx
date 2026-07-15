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

      <div className="text-center mb-12">

        <h2 className="text-3xl md:text-[2.2rem] font-extrabold text-slate-900 flex items-center justify-center gap-3">

          <img
            src={testimonialsIcon}
            alt=""
            className="w-9 h-9 object-contain"
          />

          What Our Clients Say

        </h2>

        <div className="w-20 h-1 bg-[#F87400] rounded-full mx-auto mt-5"></div>

      </div>

      <div className="max-w-[1500px] mx-auto px-6 mt-10">

        <div
          onMouseEnter={stopAutoPlay}
          onMouseLeave={startAutoPlay}
          className="
            group
            grid
            lg:grid-cols-[40%_60%]
            h-[300px]
            md:h-[380px]
            overflow-hidden
            rounded-[32px]
            shadow-2xl
            hover:-translate-y-2
            hover:shadow-[0_35px_70px_rgba(0,0,0,.25)]
            transition-all
            duration-500

            w-full
          "
        >

          <div className="relative h-full overflow-hidden">

  {/* Background Image */}
  <img
    src={leftGraphic}
    alt="Testimonials"
    className="
      absolute
      inset-0
      w-full
      h-full
      object-cover
      transition-all
      duration-700
      group-hover:scale-105
    "
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-[#001286]/55"></div>

  {/* Text */}
  <div className="relative z-20 flex flex-col items-center justify-center h-full px-8 text-center">

    <h2 className="text-3xl md:text-[2.2rem] font-extrabold text-white leading-tight">
      It's always nice
      <br />
      to hear from you!
    </h2>

    <div className="w-20 h-1 bg-[#F87400] rounded-full mt-5"></div>

  </div>

</div>

          {/* RIGHT */}

          <div className="relative h-full bg-gradient-to-br from-[#001286] to-[#001A6E] overflow-hidden group/slider">

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

            {/* Previous */}

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
            >
              <FaChevronLeft size={16} />
            </button>

            {/* Next */}

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
            >
              <FaChevronRight size={16} />
            </button>

            {/* Dots */}

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
                    ${
                      activeIndex === index
                        ? "bg-[#F87400] w-6"
                        : "bg-white/40 hover:bg-white/70"
                    }
                  `}
                />
              ))}
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}