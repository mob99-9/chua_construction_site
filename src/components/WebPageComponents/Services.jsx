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
      className="bg-white py-24 px-[5%]"
    >
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-dark-navy flex justify-center items-center gap-3">
          <img
            src={mostBookedIcon}
            alt=""
            className="w-10 h-10"
          />
          Most Booked Services
        </h2>

        <div className="w-24 h-1 bg-primary-orange rounded-full mx-auto mt-5 mb-6" />

        <p className="text-gray-text text-lg">
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
              className="group bg-white rounded-3xl border border-gray-200 hover:border-primary-orange/40 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-8 no-underline flex flex-col"
            >
              {/* Icon */}
              <div className="mx-auto w-28 h-28 rounded-full bg-orange-50 flex items-center justify-center group-hover:bg-primary-orange transition-all duration-300">
                <Icon
                  size={58}
                  className="text-primary-orange group-hover:text-white transition-colors duration-300"
                />
              </div>

              {/* Title */}
              <h3 className="mt-8 text-3xl font-bold text-center text-dark-navy">
                {service.name}
              </h3>

              <div className="w-14 h-1 bg-primary-orange rounded-full mx-auto mt-4 mb-6" />

              {/* Description */}
              <p className="text-center text-gray-text leading-7 min-h-[90px]">
                {service.desc}
              </p>

              {/* Divider */}
              <div className="border-t border-gray-200 my-8" />

              {/* Features */}
              <div className="space-y-4">
                {service.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={20}
                      className="text-primary-orange flex-shrink-0"
                    />

                    <span className="text-dark-navy font-medium">
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