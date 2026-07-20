import React from "react";
import { useNavigate } from "react-router-dom";

import imgDesign from "../../assets/Design.png";
import imgRender from "../../assets/3DRender.png";
import imgBlueprint from "../../assets/BluePrint.png";

import iconDesign from "../../assets/icons/Design.png";
import iconRender from "../../assets/icons/3dRender.png";
import iconBlueprint from "../../assets/icons/BluePrint.png";

export default function ServiceDetails() {
  const navigate = useNavigate();

  const services = [
    {
      id: "design",
      title: "Architectural Design",
      icon: iconDesign,
      description:
        "We create functional, elegant, and sustainable architectural spaces that are carefully designed to suit your vision and lifestyle.",
      image: imgDesign,
      route: "/design",
      features: [
        "Residential Design",
        "Commercial Design",
        "Renovation",
        "Space Planning",
      ],
    },
    {
      id: "3d-render",
      title: "3D Rendering",
      icon: iconRender,
      description:
        "Visualize your future project before construction through high-quality photorealistic renderings and immersive presentations.",
      image: imgRender,
      route: "/3d-render",
      features: [
        "Exterior Rendering",
        "Interior Rendering",
        "Walkthrough Animation",
        "Photorealistic Images",
      ],
    },
    {
      id: "blueprint",
      title: "Blueprint & Construction",
      icon: iconBlueprint,
      description:
        "Complete construction drawings and technical documentation prepared for permits, contractors, and actual project execution.",
      image: imgBlueprint,
      route: "/blueprint",
      features: [
        "Floor Plans",
        "Structural Drawings",
        "Electrical Layout",
        "Plumbing Layout",
      ],
    },
  ];

  return (
    <section className="bg-[#F8F5F1] px-[5%] py-16 sm:py-20">
      <div className="mx-auto max-w-[1180px] space-y-16 lg:space-y-20">
        {services.map((service, index) => (
          <article
            key={service.id}
            id={service.id}
            className="
              group
              grid
              grid-cols-1
              lg:grid-cols-2
              lg:items-stretch
              overflow-hidden
              rounded-[30px]
              border
              border-[#E8DED3]
              bg-white
              shadow-[0_18px_45px_rgba(72,56,50,0.12)]
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-[#D8B57A]/50
              hover:shadow-[0_30px_70px_rgba(72,56,50,0.20)]
            "
          >
            {/* IMAGE LEFT */}
            {index % 2 === 0 && (
              <div className="relative h-[320px] sm:h-[380px] lg:h-auto lg:min-h-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#483832]/35 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 h-[4px] w-full origin-left scale-x-0 bg-[#D8B57A] transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            )}

            {/* CONTENT */}
            <div className="flex h-full flex-col justify-center p-8 sm:p-10 lg:p-14">
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#D8B57A]/40
                    bg-[#F6EFE7]
                    transition-all
                    duration-500
                    group-hover:bg-[#483832]
                  "
                >
                  <img
                    src={service.icon}
                    alt=""
                    className="
                      h-8
                      w-8
                      object-contain
                      transition-all
                      duration-500
                      group-hover:brightness-0
                      group-hover:invert
                    "
                  />
                </div>

                <h2 className="text-3xl font-bold leading-tight text-[#483832] sm:text-4xl">
                  {service.title}
                </h2>
              </div>

              <div className="mt-5 h-[3px] w-16 rounded-full bg-[#D8B57A] transition-all duration-500 group-hover:w-28" />

              <p className="mt-7 text-base leading-8 text-[#6B5B52] sm:text-lg">
                {service.description}
              </p>

              <div className="mt-9 grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="
                      flex
                      items-center
                      gap-3
                      text-[#5A4A42]
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    <div
                      className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#D8B57A]/50
                        bg-[#F6EFE7]
                        font-bold
                        text-[#483832]
                      "
                    >
                      ✓
                    </div>

                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-11">
                <button
                  type="button"
                  onClick={() => navigate(service.route)}
                  className="
                    rounded-full
                    bg-[#483832]
                    px-9
                    py-3.5
                    font-semibold
                    tracking-wide
                    text-white
                    shadow-[0_12px_28px_rgba(72,56,50,0.18)]
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:bg-[#D8B57A]
                    hover:text-[#483832]
                    hover:shadow-[0_18px_35px_rgba(72,56,50,0.22)]
                    active:scale-95
                  "
                >
                  View Service →
                </button>
              </div>
            </div>

            {/* IMAGE RIGHT */}
            {index % 2 === 1 && (
              <div className="relative h-[320px] sm:h-[380px] lg:h-auto lg:min-h-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#483832]/35 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 h-[4px] w-full origin-left scale-x-0 bg-[#D8B57A] transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}