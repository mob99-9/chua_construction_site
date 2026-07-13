import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/BlueprintComponents/Hero";
import Gallery from "../components/BlueprintComponents/Gallery";
import Lightbox from "../components/BlueprintComponents/Lightbox";

export default function BlueprintPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Navbar only for Blueprint page */}
      <Navbar />

      <Hero />

      <Gallery onImageClick={setSelectedImage} />

      <Lightbox
        selectedImage={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
}