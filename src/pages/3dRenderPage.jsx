import React, { useState } from "react";
import Hero from "../components/3dRenderPageComponents/Hero";
import Gallery from "../components/3dRenderPageComponents/Gallery";
import Lightbox from "../components/3dRenderPageComponents/Lightbox";

export default function ThreeDRenderPage() {
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