import React, { useState } from "react";
import statsBg1 from "../../assets/image 13.png";
import statsBg2 from "../../assets/image 14.png";
import howAreWeDoingIcon from "../../assets/icons/HowAreWeDoing.png";

export default function Stats() {
  const [projectsCount, setProjectsCount] = useState(0);
  const [satisfactionCount, setSatisfactionCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const targetProjects = 48;
  const targetSatisfaction = 100;

  const triggerAnimation = () => {
    if (hasAnimated) return;

    setHasAnimated(true);

    const duration = 2000;
    const steps = 50;
    const stepTime = duration / steps;

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep += 1;

      setProjectsCount(
        Math.min(
          Math.round((targetProjects / steps) * currentStep),
          targetProjects
        )
      );

      setSatisfactionCount(
        Math.min(
          Math.round((targetSatisfaction / steps) * currentStep),
          targetSatisfaction
        )
      );

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepTime);
  };

  const handleCardClick = () => {
    if (!hasAnimated) {
      triggerAnimation();
      return;
    }

    if (projectsCount === targetProjects) {
      setProjectsCount((previousCount) => previousCount + 1);
    }
  };

  return (
    <section className="bg-[#F8F5F1] px-[5%] py-16 text-center sm:py-20">
      {/* Section Heading */}
      <h2 className="mb-12 flex flex-col items-center justify-center gap-3 text-3xl font-semibold text-[#483832] sm:flex-row md:text-[2.2rem]">
        <img
          src={howAreWeDoingIcon}
          alt=""
          className="h-9 w-9 object-contain"
        />

        <span>How are we doing?</span>

        <button
          type="button"
          onClick={triggerAnimation}
          title="Click to animate counter metrics"
          className="
            ml-0
            cursor-pointer
            border-0
            bg-transparent
            p-0
            font-script
            text-2xl
            font-normal
            normal-case
            text-[#D8B57A]
            transition-colors
            duration-300
            hover:text-[#C49D62]
            sm:ml-2
            sm:text-3xl
          "
        >
          Click to find out
        </button>
      </h2>

      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Projects Completed */}
        <div
          className="
            group
            relative
            flex
            h-[200px]
            cursor-pointer
            select-none
            items-center
            justify-between
            overflow-hidden
            rounded-[24px]
            bg-cover
            bg-center
            p-5
            text-white
            shadow-[0_16px_40px_rgba(72,56,50,0.16)]
            transition-all
            duration-500
            hover:-translate-y-1
            hover:shadow-[0_24px_55px_rgba(72,56,50,0.26)]
            sm:h-[250px]
            sm:p-10
          "
          style={{ backgroundImage: `url(${statsBg1})` }}
          onClick={handleCardClick}
          title={
            hasAnimated
              ? "Click to increment projects completed"
              : "Click to find out"
          }
        >
          {/* Espresso Overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#483832]/78 via-[#483832]/58 to-[#483832]/28" />

          {/* Subtle Bottom Gradient */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#483832]/45 via-transparent to-transparent" />

          {/* Label */}
          <div className="relative z-20 flex max-w-[45%] flex-col items-start">
            <h3 className="text-left text-lg font-semibold leading-snug text-white sm:text-[1.8rem]">
              Projects Completed
            </h3>

            <div className="mt-4 h-[3px] w-14 rounded-full bg-[#D8B57A] transition-all duration-500 group-hover:w-24" />
          </div>

          {/* Metric */}
          <div className="relative z-20 flex items-center gap-2 sm:gap-6">
            <svg
              className="
                h-8
                w-8
                shrink-0
                text-[#D8B57A]
                transition-all
                duration-500
                group-hover:scale-110
                group-hover:rotate-6
                sm:h-14
                sm:w-14
              "
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
              <path d="M9 18h6" />
              <path d="M10 22h4" />
            </svg>

            <span className="text-4xl font-bold leading-none text-[#D8B57A] sm:text-7xl lg:text-8xl">
              {projectsCount}
            </span>
          </div>
        </div>

        {/* Customer Satisfaction */}
        <div
          className="
            group
            relative
            flex
            h-[200px]
            cursor-pointer
            select-none
            items-center
            justify-between
            overflow-hidden
            rounded-[24px]
            bg-cover
            bg-center
            p-5
            text-white
            shadow-[0_16px_40px_rgba(72,56,50,0.16)]
            transition-all
            duration-500
            hover:-translate-y-1
            hover:shadow-[0_24px_55px_rgba(72,56,50,0.26)]
            sm:h-[250px]
            sm:p-10
          "
          style={{ backgroundImage: `url(${statsBg2})` }}
          onClick={handleCardClick}
          title={
            hasAnimated ? "Customer satisfaction count" : "Click to find out"
          }
        >
          {/* Espresso Overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#483832]/78 via-[#483832]/58 to-[#483832]/28" />

          {/* Subtle Bottom Gradient */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#483832]/45 via-transparent to-transparent" />

          {/* Label */}
          <div className="relative z-20 flex max-w-[45%] flex-col items-start">
            <h3 className="text-left text-lg font-semibold leading-snug text-white sm:text-[1.8rem]">
              Customers Satisfied
            </h3>

            <div className="mt-4 h-[3px] w-14 rounded-full bg-[#D8B57A] transition-all duration-500 group-hover:w-24" />
          </div>

          {/* Metric */}
          <div className="relative z-20 flex items-center gap-2 sm:gap-6">
            <svg
              className="
                h-8
                w-8
                shrink-0
                text-[#D8B57A]
                transition-all
                duration-500
                group-hover:scale-110
                group-hover:rotate-6
                sm:h-14
                sm:w-14
              "
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 14s1.5 2 4 2 4-2 4-2" />
              <line x1="9" x2="9.01" y1="9" y2="9" />
              <line x1="15" x2="15.01" y1="9" y2="9" />
            </svg>

            <span className="text-4xl font-bold leading-none text-[#D8B57A] sm:text-7xl lg:text-8xl">
              {satisfactionCount}%
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}