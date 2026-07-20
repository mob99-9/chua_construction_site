import { useNavigate } from "react-router-dom";

export default function GalleryCard({
  project,
  active,
  setActive,
}) {
  const navigate = useNavigate();

  const isActive = active === project.id;

  return (
    <div
      onMouseEnter={() => setActive(project.id)}
      onMouseLeave={() => setActive(null)}
      onClick={() => project.onOpen(project)}
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
        ease-out
        hover:border-[#D8B57A]/70
        hover:shadow-[0_24px_55px_rgba(72,56,50,0.2)]
        ${isActive ? "flex-[2]" : "flex-1"}
      `}
    >
      {/* Project Image */}
      <img
        src={project.image}
        alt={project.title}
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

      {/* Bottom Warm Gradient */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-[#241C18]/90
          via-[#483832]/30
          to-transparent
        "
      />

      {/* Default Project Information */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          p-5
          text-white
          transition-opacity
          duration-300
        "
      >
        <h3 className="text-xl font-bold">
          {project.category}
        </h3>

        <p className="mt-1 text-sm text-[#F8F5F1]/80">
          {project.title}
        </p>
      </div>

      {/* Active Project Overlay */}
      {isActive && (
        <div
          className="
            absolute
            inset-0
            flex
            flex-col
            justify-end
            bg-[#241C18]/72
            p-7
            text-white
            backdrop-blur-[2px]
            transition-all
            duration-300
          "
        >
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#D8B57A]">
            {project.category}
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {project.title}
          </h2>

          <p className="mt-3 leading-7 text-[#F8F5F1]/85">
            {project.description}
          </p>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              navigate(`/projects/${project.page}`);
            }}
            className="
              mt-5
              w-fit
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
              hover:scale-105
              hover:bg-[#C9A467]
              hover:shadow-[0_10px_25px_rgba(216,181,122,0.3)]
            "
          >
            Read More →
          </button>
        </div>
      )}

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
    </div>
  );
}