import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectModal from "./ProjectModal";

export default function Gallery({ categories, service }) {

  const navigate = useNavigate();

  const [hoveredProject, setHoveredProject] = useState(null);

  const [selectedProject, setSelectedProject] = useState(null);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  return (

    <>

      <section className="w-full bg-white py-16">

        <div className="max-w-[1200px] mx-auto px-6">

          <div className="space-y-20">

            {categories.map((category) => (

              <section key={category.id}>

                <h3 className="text-3xl font-bold text-[#001186] mb-3">
                  {category.heading}
                </h3>

                <p className="text-gray-500 text-lg mb-8">
                  {category.description}
                </p>

                <div className="flex gap-5 overflow-hidden">

                  {category.images.map((image, index) => {

                    const id = `${category.id}-${index}`;

                    const active = hoveredProject === id;

                    return (

                      <div

                        key={id}

                        onMouseEnter={(e) => {

                          setHoveredProject(id);

                          setMousePosition({
                            x: e.clientX,
                            y: e.clientY,
                          });

                        }}

                        onMouseMove={(e) => {

                          setMousePosition({
                            x: e.clientX,
                            y: e.clientY,
                          });

                        }}

                        onMouseLeave={() =>
                          setHoveredProject(null)
                        }

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
                          relative
                          h-[260px]
                          rounded-3xl
                          overflow-hidden
                          cursor-pointer
                          shadow-lg
                          transition-all
                          duration-500
                          ${active ? "flex-[2]" : "flex-1"}
                        `}
                      >
                        <img
  src={image}
  alt={category.title}
  className="
    absolute
    inset-0
    w-full
    h-full
    object-cover
    transition-transform
    duration-700
    group-hover:scale-110
  "
/>

<div
  className={`
    absolute
    inset-0
    bg-black/50
    transition-all
    duration-500
    ${active ? "opacity-100" : "opacity-20"}
  `}
/>

<div
  className="
    absolute
    bottom-0
    left-0
    right-0
    p-6
    text-white
    bg-gradient-to-t
    from-black/90
    to-transparent
  "
>

  <h4 className="text-xl font-bold">
    {category.title}
  </h4>

  {active && (
    <>
      <p className="mt-3 text-sm text-gray-200">
        {category.description}
      </p>

      <button
        onClick={(e) => {
          e.stopPropagation();
          navigate(`/projects/${category.id}`);
        }}
        className="
          mt-5
          bg-[#F87400]
          px-5
          py-2
          rounded-full
          font-semibold
          hover:bg-orange-500
          transition
        "
      >
        Read More →
      </button>
    </>
  )}

</div>

{/* ================= HOVER PREVIEW ================= */}

{active && (
  <div
    className="
      fixed
      z-[9999]
      w-[330px]
      rounded-3xl
      overflow-hidden
      bg-white/95
      backdrop-blur-xl
      shadow-[0_30px_60px_rgba(0,0,0,.22)]
      border
      border-white/40
      pointer-events-none
    "
    style={{
      top: mousePosition.y + 25,
      left: mousePosition.x + 25,
      animation: "fade .25s ease",
    }}
  >

    <img
      src={image}
      alt={category.title}
      className="w-full h-48 object-cover"
    />

    <div className="p-5">

      <span className="text-xs uppercase tracking-[3px] text-[#F87400] font-bold">
        {service}
      </span>

      <h3 className="mt-2 text-2xl font-bold text-[#001186]">
        {category.title}
      </h3>

      <p className="mt-3 text-gray-600 text-sm leading-6">
        {category.description}
      </p>

      <div className="mt-5 flex justify-between items-center">

        <span className="font-semibold text-[#F87400]">
          Click to view →
        </span>

        <span className="text-xs text-gray-400">
          Preview
        </span>

      </div>

    </div>

  </div>
)}