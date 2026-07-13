import React, { useEffect } from "react";
import { X } from "lucide-react";

export default function Lightbox({ selectedImage, onClose }) {
  useEffect(() => {
    if (!selectedImage) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, onClose]);

  if (!selectedImage) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-6"
    >
      <button
        onClick={onClose}
        className="absolute top-8 right-8 bg-white/10 hover:bg-white/20 transition rounded-full p-3 text-white"
      >
        <X size={28} />
      </button>

      <img
        src={selectedImage}
        alt="Blueprint Preview"
        onClick={(e) => e.stopPropagation()}
        className="max-w-[92vw] max-h-[90vh] object-contain rounded-xl shadow-2xl border border-white/10"
      />
    </div>
  );
}