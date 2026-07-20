import React, { useEffect } from "react";
import { X } from "lucide-react";

export default function Lightbox({ selectedImage, onClose }) {
  useEffect(() => {
    if (!selectedImage) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
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
        sm:p-6
        transition-all
        duration-300
      "
    >
      {/* Close Button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="
          absolute
          top-6
          right-6
          sm:top-8
          sm:right-8
          flex
          items-center
          justify-center
          w-11
          h-11
          sm:w-12
          sm:h-12
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
          hover:scale-105
        "
      >
        <X size={24} />
      </button>

      {/* Image */}
      <img
        src={selectedImage}
        alt="Blueprint Preview"
        onClick={(e) => e.stopPropagation()}
        className="
          max-w-[92vw]
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