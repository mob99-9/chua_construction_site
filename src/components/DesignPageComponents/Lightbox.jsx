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
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#00062E]/95 backdrop-blur-md p-4 md:p-6"
    >
      <button
        type="button"
        aria-label="Close image"
        onClick={onClose}
        className="absolute top-5 right-5 md:top-8 md:right-8 rounded-full bg-white/10 hover:bg-white/20 text-white p-3 transition-colors"
      >
        <X className="w-7 h-7" />
      </button>

      <img
        src={selectedImage}
        alt="Enlarged architectural design"
        onClick={(event) => event.stopPropagation()}
        className="max-w-[94vw] max-h-[90vh] object-contain rounded-xl shadow-2xl border border-white/10"
      />
    </div>
  );
}