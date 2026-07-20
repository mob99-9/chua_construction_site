import React from "react";
import featImg1 from "../../assets/image 3.png";
import featImg2 from "../../assets/image 15.png";
import featImg3 from "../../assets/image 5.png";

export default function Features() {
  const featuresList = [
    {
      title: "Quality Plans",
      desc: "Detailed blueprints for your convenience",
      script: "Let's build together!",
      bg: featImg1,
      color: "text-[#D8B57A]",
      overlay:
        "bg-gradient-to-br from-[#483832]/75 via-[#483832]/50 to-[#483832]/20",
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 64 64"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 12h24l8 8v32H16z" />
          <path d="M40 12v8h8" />
          <path d="M22 30h20" />
          <path d="M22 38h16" />
          <path d="M22 46h20" />
        </svg>
      ),
    },
    {
      title: "ALL in ONE",
      desc: "From floor plans to construction",
      script: "We're here for you!",
      bg: featImg2,
      color: "text-[#D8B57A]",
      overlay:
        "bg-gradient-to-br from-[#483832]/75 via-[#483832]/50 to-[#483832]/20",
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 64 64"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="12" y="20" width="16" height="32" />
          <rect x="34" y="12" width="18" height="40" />
          <path d="M20 28v4" />
          <path d="M20 38v4" />
          <path d="M42 20v4" />
          <path d="M42 30v4" />
          <path d="M42 40v4" />
          <path d="M8 52h48" />
        </svg>
      ),
    },
    {
      title: "Unique Design",
      desc: "A design that is truly yours",
      script: "Let's design together!",
      bg: featImg3,
      color: "text-[#D8B57A]",
      overlay:
        "bg-gradient-to-br from-[#483832]/75 via-[#483832]/50 to-[#483832]/20",
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 64 64"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 48L48 16" />
          <path d="M18 18l10 10" />
          <path d="M36 36l10 10" />
          <path d="M14 50l14-4-10-10z" />
          <path d="M50 14l-4 14-10-10z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 px-[5%] bg-[#F8F5F1]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
        {featuresList.map((feat, index) => (
          <div
            key={index}
            className="
              group
              relative
              h-[280px]
              sm:h-[300px]
              rounded-[28px]
              overflow-hidden
              shadow-[0_18px_45px_rgba(72,56,50,0.18)]
              cursor-pointer
              transition-all
              duration-500
              hover:-translate-y-2
              hover:shadow-[0_28px_60px_rgba(72,56,50,0.28)]
            "
          >
            {/* Background */}
            <img
              src={feat.bg}
              alt={feat.title}
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

            {/* Overlay */}
            <div
              className={`
                absolute
                inset-0
                ${feat.overlay}
                transition-all
                duration-500
                group-hover:brightness-95
              `}
            />

            {/* Content */}
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-7 sm:p-8 text-white">

              {/* Icon */}
              <div className={`${feat.color} mb-4 transition-transform duration-500 group-hover:scale-105`}>
                {feat.icon}
              </div>

              {/* Title */}
              <h3 className={`text-[30px] sm:text-[34px] font-bold leading-none ${feat.color}`}>
                {feat.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-base leading-relaxed text-white/90">
                {feat.desc}
              </p>

              {/* Script */}
              <span className="font-script text-[30px] text-white mt-5 transition-all duration-500 group-hover:translate-x-1">
                {feat.script}
              </span>

              {/* Accent Line */}
              <div
                className="
                  mt-4
                  h-[3px]
                  w-16
                  rounded-full
                  bg-[#D8B57A]
                  transition-all
                  duration-500
                  group-hover:w-32
                "
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}