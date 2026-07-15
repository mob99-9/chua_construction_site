import React, { useState } from "react";
import Hero from "../components/BlueprintComponents/Hero";
import Gallery from "../components/BlueprintComponents/Gallery";
import Lightbox from "../components/BlueprintComponents/Lightbox";

export default function BlueprintPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="w-full min-h-screen bg-white pt-24">
      <Hero />

      <Gallery onImageClick={setSelectedImage} />

      <Lightbox
        selectedImage={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
}