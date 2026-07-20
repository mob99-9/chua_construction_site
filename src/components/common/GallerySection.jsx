import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectModal from "./ProjectModal";

import iconDesign from "../../assets/icons/Design.png";
import iconRender from "../../assets/icons/3dRender.png";
import iconBlueprint from "../../assets/icons/BluePrint.png";

import iconResidential from "../../assets/icons/Residential.png";
import iconCommercial from "../../assets/icons/Commercial.png";
import iconOfficeSpace from "../../assets/icons/OfficeSpace.png";
import iconReligious from "../../assets/icons/Religious.png";

const getMainIcon = (title) => {
  if (title === "Design") return iconDesign;
  if (title === "3D Render") return iconRender;
  if (title === "Blueprint") return iconBlueprint;

  return null;
};

const getCategoryIcon = (categoryTitle) => {
  if (categoryTitle === "Residential") return iconResidential;
  if (categoryTitle === "Commercial") return iconCommercial;
  if (categoryTitle === "Office Space") return iconOfficeSpace;
  if (categoryTitle === "Religious") return iconReligious;

  return null;
};

export default function GallerySection({
  title,
  service,
  categories,
}) {
  const navigate = useNavigate();

  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  return (
    <>
      <section className="w-full bg-[#F8F5F1] py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-5 md:px-6">
          {/* Page Heading */}
          <div className="mb-16">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <h2 className="flex items-center gap-2 text-3xl font-extrabold text-[#D8B57A] sm:gap-3 sm:text-4xl md:text-5xl">
                {getMainIcon(title) && (
                  <img
                    src={getMainIcon(title)}
                    alt=""
                    className="h-8 w-8 object-contain sm:h-10 sm:w-10"
                  />
                )}

                {title}
              </h2>

              <span className="hidden text-4xl text-[#483832] sm:inline md:text-5xl">
                |
              </span>

              <span className="text-3xl font-semibold text-[#483832] sm:text-4xl md:text-5xl">
                Services
              </span>
            </div>

            <p className="mt-4 text-base text-[#6B5B52] sm:text-lg">
              Check out our previous {service.toLowerCase()} projects below.
            </p>

            <div className="mt-6 h-[3px] w-16 rounded-full bg-[#D8B57A]" />
          </div>

          {/* Categories */}
          <div className="space-y-20">
            {categories.map((category) => (
              <section key={category.id}>
                {/* Category Heading */}
                <div className="mb-4 flex items-center">
                  {getCategoryIcon(category.title) ? (
                    <img
                      src={getCategoryIcon(category.title)}
                      alt={category.heading}
                      className="h-10 object-contain md:h-12"
                    />
                  ) : (
                    <h3 className="text-3xl font-bold text-[#483832]">
                      {category.heading}
                    </h3>
                  )}
                </div>

                <p className="mb-8 mt-3 max-w-[760px] text-lg leading-8 text-[#6B5B52]">
                  {category.description}
                </p>

                {/* Project Cards */}
                <div className="grid grid-cols-1 gap-5 overflow-visible sm:grid-cols-2 md:flex">
                  {category.images.map((image, index) => {
                    const id = `${category.id}-${index}`;
                    const active = hoveredProject === id;

                    return (
                      <article
                        key={id}
                        onMouseEnter={() => setHoveredProject(id)}
                        onMouseMove={(event) => {
                          setMousePosition({
                            x: event.clientX,
                            y: event.clientY,
                          });
                        }}
                        onMouseLeave={() => setHoveredProject(null)}
                        onClick={() =>
                          setSelectedProject({
                            id: category.id,
                            image,
                            title: `${category.title} Project ${index + 1}`,
                            category: category.title,
                            service,
                            description: category.description,
                          })
                        }
                        className={`
                          group
                          relative
                          h-[260px]
                          cursor-pointer
                          overflow-hidden
                          rounded-[24px]
                          border
                          border-[#E8DED3]
                          bg-white
                          shadow-[0_16px_36px_rgba(72,56,50,0.12)]
                          transition-all
                          duration-500
                          hover:border-[#D8B57A]/70
                          hover:shadow-[0_24px_55px_rgba(72,56,50,0.2)]
                          ${active ? "flex-[2]" : "flex-1"}
                        `}
                      >
                        {/* Project Image */}
                        <img
                          src={image}
                          alt={category.title}
                          className="
                            absolute
                            inset-0
                            h-full
                            w-full
                            object-cover
                            transition-transform
                            duration-700
                            group-hover:scale-110
                          "
                        />

                        {/* Warm Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#241C18]/90 via-[#483832]/30 to-transparent" />

                        {/* Gold Hover Border */}
                        <div
                          className="
                            pointer-events-none
                            absolute
                            inset-0
                            rounded-[24px]
                            border
                            border-transparent
                            transition-colors
                            duration-500
                            group-hover:border-[#D8B57A]/60
                          "
                        />

                        {/* Project Information */}
                        <div className="absolute bottom-0 p-6 text-white">
                          <h4 className="text-2xl font-bold">
                            {category.title}
                          </h4>

                          <p className="mt-1 text-sm text-[#F8F5F1]/80">
                            Project {index + 1}
                          </p>

                          {active && (
                            <div className="mt-4 animate-fadeIn">
                              <p className="text-sm leading-6 text-[#F8F5F1]/85">
                                {category.description}
                              </p>

                              <button
                                type="button"
                                onClick={(event) => {
                                  event.stopPropagation();
                                  navigate(`/projects/${category.id}`);
                                }}
                                className="
                                  mt-5
                                  rounded-full
                                  border
                                  border-[#D8B57A]
                                  bg-[#D8B57A]
                                  px-6
                                  py-3
                                  font-semibold
                                  text-[#483832]
                                  transition-all
                                  duration-300
                                  hover:bg-[#C9A467]
                                  hover:shadow-[0_10px_25px_rgba(216,181,122,0.3)]
                                "
                              >
                                Read More →
                              </button>
                            </div>
                          )}
                        </div>

                        {/* Desktop Hover Preview */}
                        {active && (
                          <div
                            className="
                              pointer-events-none
                              fixed
                              z-[99999]
                              hidden
                              w-[420px]
                              overflow-hidden
                              rounded-[30px]
                              border
                              border-[#E8DED3]
                              bg-white
                              shadow-[0_25px_80px_rgba(72,56,50,0.25)]
                              animate-[fade_.25s_ease]
                              md:block
                            "
                            style={{
                              top: mousePosition.y - 260,
                              left: mousePosition.x + 30,
                            }}
                          >
                            <img
                              src={image}
                              alt=""
                              className="h-60 w-full object-cover"
                            />

                            <div className="p-7">
                              <p className="text-xs font-bold uppercase tracking-[5px] text-[#D8B57A]">
                                {service}
                              </p>

                              <h2 className="mt-2 text-3xl font-bold text-[#483832]">
                                {category.title}
                              </h2>

                              <p className="mt-4 leading-7 text-[#6B5B52]">
                                {category.description}
                              </p>

                              <div className="mt-6 flex items-center justify-between">
                                <span className="font-bold text-[#D8B57A]">
                                  Click to explore →
                                </span>

                                <span className="text-sm text-[#9A8C83]">
                                  Preview
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                      </article>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}