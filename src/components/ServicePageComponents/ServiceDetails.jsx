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

  const handleViewService = (route) => {
    navigate(route);
  };

  return (
    <section className="max-w-[1180px] mx-auto px-6 py-14 space-y-20">

      {services.map((service, index) => (

        <article
          key={service.id}
          id={service.id}
          className="
            group
            grid
            grid-cols-1
            lg:grid-cols-2
            rounded-[30px]
            overflow-hidden
            bg-white
            border
            border-gray-100
            shadow-xl
            transition-all
            duration-500
            hover:-translate-y-2
            hover:shadow-[0_30px_70px_rgba(0,0,0,.14)]
            scroll-mt-28
          "
        >

          {/* IMAGE LEFT */}

          {index % 2 === 0 && (

            <div className="overflow-hidden">

              <img
                src={service.image}
                alt={service.title}
                className="
                  w-full
                  h-[320px]
                  sm:h-[380px]
                  lg:h-[420px]
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-105
                "
              />

            </div>

          )}

          {/* CONTENT */}

          <div className="flex flex-col justify-center p-10 lg:p-14">

            <h2 className="text-4xl font-bold text-[#001186] leading-tight flex items-center gap-3">
              <img src={service.icon} alt="" className="w-8 h-8 object-contain" />
              {service.title}
            </h2>

            <div
              className="
                w-16
                h-1
                rounded-full
                bg-[#F87400]
                mt-5
                transition-all
                duration-500
                group-hover:w-28
              "
            />

            <p className="mt-7 text-gray-600 text-lg leading-8">
              {service.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-10 mt-10">

              {service.features.map((feature) => (

                <div
                  key={feature}
                  className="
                    flex
                    items-center
                    gap-3
                    text-gray-700
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                  "
                >

                  <div
                    className="
                      w-7
                      h-7
                      rounded-full
                      bg-orange-100
                      flex
                      items-center
                      justify-center
                      text-[#F87400]
                      font-bold
                      shrink-0
                    "
                  >
                    ✓
                  </div>

                  <span className="font-medium">
                    {feature}
                  </span>

                </div>

              ))}

            </div>

            <div className="mt-12">

              <button
                type="button"
                onClick={() => handleViewService(service.route)}
                className="
                  bg-[#F87400]
                  text-white
                  px-9
                  py-3.5
                  rounded-full
                  font-semibold
                  tracking-wide
                  transition-all
                  duration-300
                  hover:bg-orange-600
                  hover:scale-105
                  hover:shadow-[0_18px_35px_rgba(248,116,0,.35)]
                  active:scale-95
                "
              >
                View Service →
              </button>

            </div>

          </div>

          {/* IMAGE RIGHT */}

          {index % 2 === 1 && (

            <div className="overflow-hidden">

              <img
                src={service.image}
                alt={service.title}
                className="
                  w-full
                  h-[320px]
                  sm:h-[380px]
                  lg:h-[420px]
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-105
                "
              />

            </div>

          )}

        </article>

      ))}

    </section>
  );
}