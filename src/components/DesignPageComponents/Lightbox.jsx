import React, { useEffect } from "react";
import { X } from "lucide-react";

export default function Lightbox({ selectedImage, onClose }) {
  useEffect(() => {
    if (!selectedImage) return undefined;

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, onClose]);

  if (!selectedImage) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Enlarged architectural design"
      onClick={onClose}
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        bg-[#241C18]/85
        backdrop-blur-md
        p-4
        md:p-6
        transition-all
        duration-300
      "
    >
      {/* Close Button */}
      <button
        type="button"
        aria-label="Close image"
        onClick={(event) => {
          event.stopPropagation();
          onClose();
        }}
        className="
          absolute
          top-5
          right-5
          md:top-8
          md:right-8
          flex
          items-center
          justify-center
          w-11
          h-11
          md:w-12
          md:h-12
          rounded-full
          border
          border-[#D8B57A]/40
          bg-white/10
          backdrop-blur-md
          text-white
          shadow-lg
          transition-all
          duration-300
          hover:bg-[#D8B57A]
          hover:text-[#483832]
          hover:border-[#D8B57A]
          hover:scale-105
        "
      >
        <X className="w-6 h-6 md:w-7 md:h-7" />
      </button>

      {/* Image */}
      <img
        src={selectedImage}
        alt="Enlarged architectural design"
        onClick={(event) => event.stopPropagation()}
        className="
          max-w-[94vw]
          max-h-[90vh]
          object-contain
          rounded-[24px]
          border
          border-[#E8DED3]/30
          shadow-[0_30px_80px_rgba(0,0,0,0.45)]
          transition-all
          duration-300
        "
      />
    </div>
  );
}