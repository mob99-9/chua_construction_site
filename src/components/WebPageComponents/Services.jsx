import React from "react";
import { Link } from "react-router-dom";
import {
  PencilRuler,
  Boxes,
  ScrollText,
  CheckCircle2,
} from "lucide-react";

import mostBookedIcon from "../../assets/icons/MostBookedServices.png";

export default function Services() {
  const servicesList = [
    {
      name: "Design",
      desc: "Designing floor plans that are functional, aesthetic, and tailored to your needs.",
      icon: PencilRuler,
      route: "/design",
      features: [
        "Concept Development",
        "Space Planning",
        "Detailed Floor Plans",
      ],
    },
    {
      name: "3D Render",
      desc: "Rendering floor plans with realistic visuals to help you visualize your future space.",
      icon: Boxes,
      route: "/3d-render",
      features: [
        "Realistic Visualization",
        "Material & Lighting",
        "Interior & Exterior Views",
      ],
    },
    {
      name: "Blueprint",
      desc: "Actualizing the plans through complete construction-ready technical drawings.",
      icon: ScrollText,
      route: "/blueprint",
      features: [
        "Construction Drawings",
        "Structural Details",
        "Permit-Ready Plans",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="bg-[#F8F5F1] py-24 px-[5%]"
    >
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="flex items-center justify-center gap-3 text-4xl md:text-5xl font-bold text-[#483832]">
          <img
            src={mostBookedIcon}
            alt=""
            className="w-10 h-10"
          />
          Most Booked Services
        </h2>

        <div className="w-24 h-[3px] bg-[#D8B57A] rounded-full mx-auto mt-5 mb-6" />

        <p className="text-[#6B5B52] text-lg leading-8">
          From concept to construction, we bring your vision to life through
          professional architectural and engineering services.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-16">
        {servicesList.map((service, index) => {
          const Icon = service.icon;

          return (
            <Link
              key={index}
              to={service.route}
              className="
                group
                flex
                flex-col
                rounded-[30px]
                bg-white
                border
                border-[#E8DED3]
                p-8
                no-underline
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-[#D8B57A]/50
                shadow-[0_16px_40px_rgba(72,56,50,0.10)]
                hover:shadow-[0_26px_60px_rgba(72,56,50,0.18)]
              "
            >
              {/* Icon */}
              <div
                className="
                  mx-auto
                  flex
                  h-28
                  w-28
                  items-center
                  justify-center
                  rounded-full
                  bg-[#F6EFE7]
                  transition-all
                  duration-500
                  group-hover:bg-[#483832]
                "
              >
                <Icon
                  size={56}
                  className="
                    text-[#D8B57A]
                    transition-colors
                    duration-500
                    group-hover:text-white
                  "
                />
              </div>

              {/* Title */}
              <h3 className="mt-8 text-center text-[32px] font-bold text-[#483832]">
                {service.name}
              </h3>

              {/* Accent */}
              <div className="w-14 h-[3px] bg-[#D8B57A] rounded-full mx-auto mt-4 mb-6 transition-all duration-500 group-hover:w-24" />

              {/* Description */}
              <p className="min-h-[90px] text-center leading-7 text-[#6B5B52]">
                {service.desc}
              </p>

              {/* Divider */}
              <div className="my-8 border-t border-[#EFE6DC]" />

              {/* Features */}
              <div className="space-y-4">
                {service.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={20}
                      className="text-[#D8B57A] flex-shrink-0"
                    />

                    <span className="font-medium text-[#483832]">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}