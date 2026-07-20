import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import projectOverviewIcon from "../../assets/icons/ReadAboutOurImpressiveProjects.png";

export default function ProjectModal({
  project,
  onClose,
  onNext,
  onPrev,
}) {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && onNext) onNext();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onNext, onPrev]);

  if (!project) return null;

  return (
    <div
      onClick={onClose}
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        bg-[#241C18]/70
        p-4
        backdrop-blur-md
        animate-fadeIn
        sm:p-6
      "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          relative
          flex
          max-h-[90vh]
          w-full
          max-w-5xl
          flex-col
          overflow-hidden
          rounded-[24px]
          border
          border-[#E8DED3]
          bg-[#F8F5F1]
          shadow-[0_35px_100px_rgba(36,28,24,0.35)]
          animate-scaleIn
          sm:rounded-[30px]
          lg:flex-row
        "
      >
        {/* Close Button */}
        <button
          type="button"
          aria-label="Close project modal"
          onClick={onClose}
          className="
            absolute
            right-4
            top-4
            z-[99]
            flex
            h-10
            w-10
            cursor-pointer
            items-center
            justify-center
            rounded-full
            border
            border-[#E8DED3]
            bg-white/90
            text-[#483832]
            shadow-md
            backdrop-blur-sm
            transition-all
            duration-300
            hover:scale-105
            hover:border-[#D8B57A]
            hover:bg-[#D8B57A]
            hover:text-[#483832]
            sm:h-12
            sm:w-12
          "
        >
          <FaTimes className="text-lg" />
        </button>

        {/* Left / Top Image Column */}
        <div className="relative h-[200px] w-full shrink-0 overflow-hidden bg-[#EFE8E1] sm:h-[280px] lg:h-auto lg:w-[45%]">
          <img
            src={project.image}
            alt={project.title}
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
            "
          />

          {/* Soft Image Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#241C18]/20 via-transparent to-transparent" />

          {/* Previous Button */}
          {onPrev && (
            <button
              type="button"
              aria-label="Previous project"
              onClick={onPrev}
              className="
                absolute
                left-4
                top-1/2
                z-20
                flex
                h-10
                w-10
                -translate-y-1/2
                cursor-pointer
                items-center
                justify-center
                rounded-full
                border
                border-[#E8DED3]
                bg-white/90
                text-[#483832]
                shadow-lg
                transition-all
                duration-300
                hover:scale-105
                hover:border-[#D8B57A]
                hover:bg-[#D8B57A]
              "
            >
              <FaArrowLeft />
            </button>
          )}

          {/* Next Button */}
          {onNext && (
            <button
              type="button"
              aria-label="Next project"
              onClick={onNext}
              className="
                absolute
                right-4
                top-1/2
                z-20
                flex
                h-10
                w-10
                -translate-y-1/2
                cursor-pointer
                items-center
                justify-center
                rounded-full
                border
                border-[#E8DED3]
                bg-white/90
                text-[#483832]
                shadow-lg
                transition-all
                duration-300
                hover:scale-105
                hover:border-[#D8B57A]
                hover:bg-[#D8B57A]
              "
            >
              <FaArrowRight />
            </button>
          )}
        </div>

        {/* Right / Bottom Details Column */}
        <div className="flex-1 overflow-y-auto p-6 pr-16 sm:p-10 lg:p-12 lg:pr-12">
          <span className="block text-xs font-semibold uppercase tracking-[3px] text-[#D8B57A] sm:text-sm sm:tracking-[5px]">
            {project.service}
          </span>

          <h2 className="mt-3 text-2xl font-bold leading-tight text-[#483832] sm:mt-4 sm:text-4xl lg:text-[2.6rem]">
            {project.title}
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-[#6B5B52] sm:mt-6 sm:text-base">
            {project.description}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:mt-8 sm:gap-8">
            <div>
              <p className="text-xs text-[#9A8C83]">
                Category
              </p>

              <h4 className="mt-1 text-sm font-semibold text-[#483832] sm:text-base">
                {project.category}
              </h4>
            </div>

            <div>
              <p className="text-xs text-[#9A8C83]">
                Status
              </p>

              <h4 className="mt-1 text-sm font-semibold text-[#483832] sm:text-base">
                Completed
              </h4>
            </div>

            <div>
              <p className="text-xs text-[#9A8C83]">
                Software
              </p>

              <h4 className="mt-1 text-sm font-semibold text-[#483832] sm:text-base">
                AutoCAD • SketchUp • Lumion
              </h4>
            </div>

            <div>
              <p className="text-xs text-[#9A8C83]">
                Year
              </p>

              <h4 className="mt-1 text-sm font-semibold text-[#483832] sm:text-base">
                2026
              </h4>
            </div>
          </div>

          {/* Project Overview */}
          <div className="mt-8 border-t border-[#E8DED3] pt-6">
            <h3 className="flex items-center gap-2 text-lg font-bold text-[#483832] sm:text-xl">
              <span
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#D8B57A]/40
                  bg-[#F1E8DE]
                "
              >
                <img
                  src={projectOverviewIcon}
                  alt=""
                  className="h-5 w-5 object-contain sm:h-6 sm:w-6"
                />
              </span>

              Project Overview
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-[#6B5B52] sm:text-base">
              This project demonstrates our commitment to functionality,
              aesthetics, and quality design. Every space is carefully planned
              to maximize usability while maintaining a clean and timeless
              architectural style.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 pt-4">
            <button
              type="button"
              onClick={() => navigate(`/projects/${project.id}`)}
              className="
                cursor-pointer
                rounded-full
                border
                border-[#D8B57A]
                bg-[#D8B57A]
                px-6
                py-2.5
                text-sm
                font-semibold
                text-[#483832]
                transition-all
                duration-300
                hover:scale-105
                hover:bg-[#C9A467]
                hover:shadow-[0_10px_24px_rgba(216,181,122,0.3)]
                sm:px-8
                sm:py-3
                sm:text-base
              "
            >
              Read More →
            </button>

            <button
              type="button"
              onClick={onClose}
              className="
                cursor-pointer
                rounded-full
                border
                border-[#CFC1B4]
                bg-transparent
                px-6
                py-2.5
                text-sm
                font-semibold
                text-[#483832]
                transition-all
                duration-300
                hover:border-[#483832]
                hover:bg-[#483832]
                hover:text-white
                sm:px-8
                sm:py-3
                sm:text-base
              "
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}