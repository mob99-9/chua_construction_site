import React, { useState } from "react";
import Hero from "../components/DesignPageComponents/Hero";
import Gallery from "../components/DesignPageComponents/Gallery";
import Lightbox from "../components/DesignPageComponents/Lightbox";

export default function DesignPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="w-full min-h-screen bg-white">
      <main>
        <Hero />
        <Gallery onImageClick={setSelectedImage} />
      </main>

      <Lightbox
        selectedImage={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
}