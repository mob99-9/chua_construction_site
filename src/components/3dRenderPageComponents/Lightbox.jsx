import React, { useEffect } from "react";
import { X } from "lucide-react";

export default function Lightbox({ selectedImage, onClose }) {
  useEffect(() => {
    if (!selectedImage) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

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
      aria-label="Portfolio image preview"
      onClick={onClose}
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        bg-[#241C18]/90
        p-4
        backdrop-blur-md
        transition-all
        duration-300
        sm:p-6
      "
    >
      {/* Close Button */}
      <button
        type="button"
        aria-label="Close image preview"
        onClick={(event) => {
          event.stopPropagation();
          onClose();
        }}
        className="
          absolute
          right-4
          top-4
          z-10
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          border
          border-[#D8B57A]/40
          bg-[#483832]/70
          text-white
          shadow-[0_10px_30px_rgba(0,0,0,0.25)]
          backdrop-blur-md
          transition-all
          duration-300
          hover:scale-105
          hover:border-[#D8B57A]
          hover:bg-[#D8B57A]
          hover:text-[#483832]
          sm:right-8
          sm:top-8
          sm:h-12
          sm:w-12
        "
      >
        <X size={24} />
      </button>

      {/* Image Container */}
      <div
        onClick={(event) => event.stopPropagation()}
        className="
          flex
          max-h-[90vh]
          max-w-[92vw]
          items-center
          justify-center
          overflow-hidden
          rounded-[24px]
          border
          border-[#E8DED3]/30
          bg-[#483832]/20
          shadow-[0_30px_80px_rgba(0,0,0,0.45)]
        "
      >
        <img
          src={selectedImage}
          alt="Portfolio Preview"
          className="
            max-h-[90vh]
            max-w-[92vw]
            object-contain
          "
        />
      </div>
    </div>
  );
}