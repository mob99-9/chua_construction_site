import React from "react";

import projImg1 from "../../assets/image 3 (4).png";
import projImg2 from "../../assets/image 3 (5).png";
import projImg3 from "../../assets/image 3 (6).png";
import projImg4 from "../../assets/image 3 (7).png";
import projImg5 from "../../assets/image 3 (8).png";
import projImg6 from "../../assets/image 3 (9).png";

import recentProjectsIcon from "../../assets/icons/RecentProjects.png";

export default function Projects() {
  const projectsList = [
    {
      name: "Apartment",
      desc: "1 story, 3 apartments",
      image: projImg1,
    },
    {
      name: "Residence",
      desc: "2 story, 3 bedrooms",
      image: projImg2,
    },
    {
      name: "Residence",
      desc: "2 story, 2 bedrooms",
      image: projImg3,
    },
    {
      name: "Residence",
      desc: "3 story, 5 bedrooms",
      image: projImg4,
    },
    {
      name: "Residence",
      desc: "2 story, 2 bedrooms",
      image: projImg5,
    },
    {
      name: "Apartment",
      desc: "2 story, 6 apartments",
      image: projImg6,
    },
  ];

  return (
    <section
      id="projects"
      className="bg-[#F8F5F1] px-[5%] py-24 text-center"
    >
      {/* Heading */}
      <div className="mx-auto max-w-3xl">
        <h2 className="flex items-center justify-center gap-3 text-4xl font-bold text-[#483832] md:text-5xl">
          <img
            src={recentProjectsIcon}
            alt=""
            className="h-10 w-10 object-contain"
          />

          <span>Recent Projects</span>
        </h2>

        <div className="mx-auto mb-6 mt-5 h-[3px] w-24 rounded-full bg-[#D8B57A]" />

        <p className="text-base leading-7 text-[#6B5B52] sm:text-lg">
          Explore some of our recent residential and apartment projects,
          carefully designed and built around each client&apos;s needs.
        </p>
      </div>

      {/* Project Cards */}
      <div className="mx-auto mt-16 grid max-w-[1200px] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectsList.map((project, index) => (
          <article
            key={`${project.name}-${index}`}
            className="
              group
              flex
              flex-col
              overflow-hidden
              rounded-[26px]
              border
              border-[#E8DED3]
              bg-white
              shadow-[0_14px_35px_rgba(72,56,50,0.10)]
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-[#D8B57A]/50
              hover:shadow-[0_26px_55px_rgba(72,56,50,0.20)]
            "
          >
            {/* Image */}
            <div className="relative h-[210px] overflow-hidden bg-[#F3EDE7] sm:h-[250px] md:aspect-square md:h-auto">
              <img
                src={project.image}
                alt={`${project.name} - ${project.desc}`}
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              {/* Espresso Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#483832]/45 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-40" />

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 h-[4px] w-full origin-left scale-x-0 bg-[#D8B57A] transition-transform duration-500 group-hover:scale-x-100" />
            </div>

            {/* Card Content */}
            <div className="flex flex-1 flex-col items-center px-6 py-7">
              <h3 className="text-2xl font-bold text-[#483832]">
                {project.name}
              </h3>

              <div className="my-4 h-[3px] w-12 rounded-full bg-[#D8B57A] transition-all duration-500 group-hover:w-20" />

              <p className="text-sm leading-6 text-[#6B5B52] sm:text-base">
                {project.desc}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}