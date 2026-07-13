import React from "react";
import featImg1 from "../../assets/image 3.png";
import featImg2 from "../../assets/image 15.png";
import featImg3 from "../../assets/BluePrint.png";

export default function Features() {
  const featuresList = [
    {
      title: "Quality Plans",
      desc: "Detailed blueprints for your convenience",
      script: "Let's build together!",
      bg: featImg1,
      color: "text-primary-orange",

      overlay:
        "bg-gradient-to-br from-[#001286]/45 via-[#001286]/30 to-[#001286]/15",

      icon: (
        <svg
          width="56"
          height="56"
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
      title: "ALL IN ONE",
      desc: "From floor plans to construction",
      script: "We're here for you!",
      bg: featImg2,
      color: "text-[#001186]",

      overlay:
        "bg-gradient-to-br from-[#F87400]/35 via-[#F87400]/20 to-transparent",

      icon: (
        <svg
          width="56"
          height="56"
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
      color: "text-primary-orange",

      overlay:
        "bg-gradient-to-br from-[#001286]/45 via-[#001286]/30 to-[#001286]/15",

      icon: (
        <svg
          width="56"
          height="56"
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
    <section className="py-20 px-[5%] bg-white">
      <div className="grid lg:grid-cols-3 gap-8">
        {featuresList.map((feat, index) => (
          <div
            key={index}
            className="
              group
              relative
              h-[280px]
              rounded-3xl
              overflow-hidden
              shadow-[0_20px_45px_rgba(0,0,0,.15)]
              cursor-pointer
              transition-all
              duration-500
              hover:-translate-y-3
              hover:shadow-[0_30px_60px_rgba(0,0,0,.25)]
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
                transition-all
                duration-700
                group-hover:scale-110
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
                group-hover:brightness-75
              `}
            />

            {/* Content */}
            <div
              className="
                absolute
                inset-0
                z-20
                flex
                flex-col
                justify-end
                p-8
                text-white
              "
            >
              {/* Icon */}
              <div
                className={`
                  ${feat.color}
                  mb-4
                  transition-transform
                  duration-500
                  group-hover:scale-110
                `}
              >
                {feat.icon}
              </div>

              {/* Title */}
              <h3
                className={`
                  text-[2.1rem]
                  font-bold
                  leading-none
                  ${feat.color}
                `}
              >
                {feat.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-[15px] text-white whitespace-nowrap">
                {feat.desc}
              </p>

              {/* Script */}
              <span
                className="
                  font-script
                  text-[2rem]
                  mt-5
                  transition-all
                  duration-500
                  group-hover:translate-x-2
                "
              >
                {feat.script}
              </span>

              {/* Underline */}
              <div
                className={`
                  h-[3px]
                  rounded-full
                  mt-4
                  transition-all
                  duration-500
                  group-hover:w-36
                  w-20
                  ${
                    feat.color === "text-[#001186]"
                      ? "bg-[#001186]"
                      : "bg-primary-orange"
                  }
                `}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}