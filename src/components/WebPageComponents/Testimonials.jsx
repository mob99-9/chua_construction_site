import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import testimonialsIcon from "../../assets/icons/Testimonials.png";

import leftGraphic from "../../assets/image 16.png";

import slide1 from "../../assets/Testaments/a61dd6dc-70c3-4bc9-9f85-08530b2b86a7.jpg";
import slide2 from "../../assets/Testaments/b3d83406-fc9d-4079-b5ef-7d2a6e775034.jpg";
import slide3 from "../../assets/Testaments/b260f1fe-0db5-46e4-b2e3-60af6e5a75bc.jpg";
import slide4 from "../../assets/Testaments/d22e1b7f-6ebf-462e-9905-854ebeca4bdf.jpg";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    slide1,
    slide2,
    slide3,
    slide4,
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
    <section className="bg-[#F8F5F1] py-24 px-[5%]">

      {/* Heading */}

      <div className="text-center mb-14">

        <h2 className="flex items-center justify-center gap-3 text-4xl md:text-5xl font-bold text-[#483832]">

          <img
            src={testimonialsIcon}
            alt=""
            className="w-10 h-10 object-contain"
          />

          What Our Clients Say

        </h2>

        <div className="w-24 h-[3px] bg-[#D8B57A] rounded-full mx-auto mt-5 mb-6" />

        <p className="text-[#6B5B52] text-lg max-w-2xl mx-auto leading-8">
          Hear what our valued clients have to say about their experience
          working with our team.
        </p>

      </div>

      <div className="max-w-[1500px] mx-auto">

        <div
          onMouseEnter={stopAutoPlay}
          onMouseLeave={startAutoPlay}
          className="
            group
            grid
            grid-cols-1
            md:grid-cols-[38%_62%]
            overflow-hidden
            rounded-[30px]
            bg-white
            border
            border-[#E8DED3]
            shadow-[0_18px_45px_rgba(72,56,50,0.12)]
            hover:-translate-y-2
            hover:shadow-[0_30px_65px_rgba(72,56,50,0.20)]
            transition-all
            duration-500
          "
        >

          {/* LEFT PANEL */}

          <div className="relative h-[240px] md:h-[400px] overflow-hidden">

            <img
              src={leftGraphic}
              alt="Testimonials"
              className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />

            {/* Espresso Overlay */}

            <div className="absolute inset-0 bg-gradient-to-br from-[#483832]/78 via-[#483832]/58 to-[#483832]/28" />

            <div className="relative z-20 flex flex-col items-center justify-center h-full px-8 text-center">

              <h2 className="text-white text-3xl md:text-[2.3rem] font-bold leading-tight">
                It's always nice
                <br />
                to hear from you!
              </h2>

              <div className="w-20 h-[3px] bg-[#D8B57A] rounded-full mt-5" />

            </div>

          </div>

          {/* RIGHT PANEL */}

          <div className="relative w-full aspect-[2.2/1] md:aspect-none md:h-[400px] overflow-hidden bg-[#3A2B24] group/slider">

            <img
              key={activeIndex}
              src={slides[activeIndex]}
              alt="testimonial"
              className="
                w-full
                h-full
                object-cover
                scale-[1.03]
                transition-all
                duration-700
              "
            />

            {/* Slider Controls */}

            <div className="absolute bottom-2.5 right-2.5 sm:bottom-4 sm:right-4 flex items-center gap-2 z-30">

              <button
                type="button"
                onClick={handlePrev}
                className="
                  w-7
                  h-7
                  sm:w-9
                  sm:h-9
                  rounded-full
                  bg-black/50
                  backdrop-blur-sm
                  hover:bg-[#D8B57A]
                  hover:text-[#483832]
                  text-white
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-300
                  border-none
                  cursor-pointer
                  shadow-md
                "
              >
                <FaChevronLeft className="text-[10px] sm:text-xs" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="
                  w-7
                  h-7
                  sm:w-9
                  sm:h-9
                  rounded-full
                  bg-black/50
                  backdrop-blur-sm
                  hover:bg-[#D8B57A]
                  hover:text-[#483832]
                  text-white
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-300
                  border-none
                  cursor-pointer
                  shadow-md
                "
              >
                <FaChevronRight className="text-[10px] sm:text-xs" />
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}