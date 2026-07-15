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
      p-6
      animate-fadeIn
      "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
        relative
        bg-white
        rounded-[30px]
        overflow-hidden
        shadow-2xl
        w-full
        max-w-6xl
        max-h-[92vh]
        grid
        lg:grid-cols-2
        animate-scaleIn
        "
      >
        {/* LEFT IMAGE */}

        <div className="relative bg-gray-200">

          <img
            src={project.image}
            alt={project.title}
            className="
            w-full
            h-full
            object-cover
            min-h-[650px]
            "
          />

          {/* Previous */}

          {onPrev && (
            <button
              onClick={onPrev}
              className="
              absolute
              left-5
              top-1/2
              -translate-y-1/2
              bg-white/90
              w-12
              h-12
              rounded-full
              shadow-lg
              hover:bg-orange-500
              hover:text-white
              transition
              "
            >
              <FaArrowLeft className="mx-auto" />
            </button>
          )}

          {/* Next */}

          {onNext && (
            <button
              onClick={onNext}
              className="
              absolute
              right-5
              top-1/2
              -translate-y-1/2
              bg-white/90
              w-12
              h-12
              rounded-full
              shadow-lg
              hover:bg-orange-500
              hover:text-white
              transition
              "
            >
              <FaArrowRight className="mx-auto" />
            </button>
          )}
        </div>

        {/* RIGHT */}

        <div className="relative p-12 overflow-y-auto">

          {/* Close */}

          <button
            onClick={onClose}
            className="
            absolute
            top-6
            right-6
            bg-gray-100
            w-12
            h-12
            rounded-full
            hover:bg-orange-500
            hover:text-white
            transition
            "
          >
            <FaTimes className="mx-auto" />
          </button>

          <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
            {project.service}
          </span>

          <h2 className="text-5xl font-bold text-[#001186] mt-4">
            {project.title}
          </h2>

          <p className="text-gray-600 leading-8 mt-8">
            {project.description}
          </p>

          <div className="grid grid-cols-2 gap-8 mt-12">

            <div>
              <p className="text-sm text-gray-400">Category</p>
              <h4 className="font-semibold mt-2">
                {project.category}
              </h4>
            </div>

            <div>
              <p className="text-sm text-gray-400">Status</p>
              <h4 className="font-semibold mt-2">
                Completed
              </h4>
            </div>

            <div>
              <p className="text-sm text-gray-400">Software</p>
              <h4 className="font-semibold mt-2">
                AutoCAD • SketchUp • Lumion
              </h4>
            </div>

            <div>
              <p className="text-sm text-gray-400">Year</p>
              <h4 className="font-semibold mt-2">
                2026
              </h4>
            </div>

          </div>

          <div className="mt-12 pt-8 border-t">

            <h3 className="text-xl font-bold text-[#001186] flex items-center gap-2">
              <img src={projectOverviewIcon} alt="" className="w-6 h-6 object-contain" />
              Project Overview
            </h3>

            <p className="text-gray-600 leading-8 mt-4">
              This project demonstrates our commitment to
              functionality, aesthetics, and quality design.
              Every space is carefully planned to maximize
              usability while maintaining a clean and timeless
              architectural style.
            </p>

          </div>

          <div className="flex gap-5 mt-12">

            <button
              onClick={() =>
                navigate(`/projects/${project.id}`)
              }
              className="
              bg-orange-500
              hover:bg-orange-600
              text-white
              px-8
              py-3
              rounded-full
              font-semibold
              transition
              "
            >
              Read More →
            </button>

            <button
              onClick={onClose}
              className="
              border
              border-gray-300
              px-8
              py-3
              rounded-full
              hover:border-black
              transition
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