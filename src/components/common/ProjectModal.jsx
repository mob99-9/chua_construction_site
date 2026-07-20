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
      bg-black/60
      backdrop-blur-md
      flex
      items-center
      justify-center
      p-4
      sm:p-6
      animate-fadeIn
      "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
        relative
        bg-white
        rounded-[24px]
        sm:rounded-[30px]
        shadow-2xl
        w-full
        max-w-5xl
        max-h-[90vh]
        flex
        flex-col
        lg:flex-row
        overflow-hidden
        animate-scaleIn
        "
      >
        {/* Close Button - pinned at the top-right of the card */}
        <button
          onClick={onClose}
          className="
          absolute
          top-4
          right-4
          z-[99]
          bg-white/90
          backdrop-blur-sm
          w-10
          h-10
          sm:w-12
          sm:h-12
          rounded-full
          shadow-md
          hover:bg-orange-500
          hover:text-white
          transition-all
          duration-300
          flex
          items-center
          justify-center
          border-none
          cursor-pointer
          "
        >
          <FaTimes className="text-lg" />
        </button>

        {/* LEFT/TOP IMAGE COLUMN */}
        <div className="relative w-full h-[200px] sm:h-[280px] lg:h-auto lg:w-[45%] shrink-0 overflow-hidden bg-gray-100">
          <img
            src={project.image}
            alt={project.title}
            className="
            w-full
            h-full
            object-cover
            absolute
            inset-0
            "
          />

          {/* Previous Button */}
          {onPrev && (
            <button
              onClick={onPrev}
              className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              bg-white/90
              w-10
              h-10
              rounded-full
              shadow-lg
              hover:bg-orange-500
              hover:text-white
              transition
              flex
              items-center
              justify-center
              border-none
              cursor-pointer
              z-20
              "
            >
              <FaArrowLeft />
            </button>
          )}

          {/* Next Button */}
          {onNext && (
            <button
              onClick={onNext}
              className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              bg-white/90
              w-10
              h-10
              rounded-full
              shadow-lg
              hover:bg-orange-500
              hover:text-white
              transition
              flex
              items-center
              justify-center
              border-none
              cursor-pointer
              z-20
              "
            >
              <FaArrowRight />
            </button>
          )}
        </div>

        {/* RIGHT/BOTTOM DETAILS COLUMN */}
        <div className="flex-1 p-6 sm:p-10 lg:p-12 overflow-y-auto pr-16 lg:pr-12">
          <span className="uppercase tracking-[3px] sm:tracking-[5px] text-xs sm:text-sm text-orange-500 font-semibold block">
            {project.service}
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#001186] mt-3 sm:mt-4 leading-tight">
            {project.title}
          </h2>

          <p className="text-gray-600 leading-relaxed text-sm sm:text-base mt-4 sm:mt-6">
            {project.description}
          </p>

          <div className="grid grid-cols-2 gap-4 sm:gap-8 mt-6 sm:mt-8">
            <div>
              <p className="text-xs text-gray-400">Category</p>
              <h4 className="font-semibold text-sm sm:text-base mt-1">
                {project.category}
              </h4>
            </div>

            <div>
              <p className="text-xs text-gray-400">Status</p>
              <h4 className="font-semibold text-sm sm:text-base mt-1">
                Completed
              </h4>
            </div>

            <div>
              <p className="text-xs text-gray-400">Software</p>
              <h4 className="font-semibold text-sm sm:text-base mt-1">
                AutoCAD • SketchUp • Lumion
              </h4>
            </div>

            <div>
              <p className="text-xs text-gray-400">Year</p>
              <h4 className="font-semibold text-sm sm:text-base mt-1">
                2026
              </h4>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <h3 className="text-lg sm:text-xl font-bold text-[#001186] flex items-center gap-2">
              <img src={projectOverviewIcon} alt="" className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
              Project Overview
            </h3>

            <p className="text-gray-600 leading-relaxed text-sm sm:text-base mt-3">
              This project demonstrates our commitment to
              functionality, aesthetics, and quality design.
              Every space is carefully planned to maximize
              usability while maintaining a clean and timeless
              architectural style.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-8 pt-4">
            <button
              onClick={() => navigate(`/projects/${project.id}`)}
              className="
              bg-orange-500
              hover:bg-orange-600
              text-white
              px-6
              sm:px-8
              py-2.5
              sm:py-3
              rounded-full
              font-semibold
              transition
              text-sm
              sm:text-base
              border-none
              cursor-pointer
              "
            >
              Read More →
            </button>

            <button
              onClick={onClose}
              className="
              border
              border-gray-300
              px-6
              sm:px-8
              py-2.5
              sm:py-3
              rounded-full
              hover:border-black
              transition
              text-sm
              sm:text-base
              bg-transparent
              cursor-pointer
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