import { useState } from "react";

import Hero from "../components/Hero/Hero";
import ProjectsShowcase from "../components/project/ProjectsShowcase";
import CTA from "../components/ServicePageComponents/CTA";


function Project() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService] = useState("Design");

  return (
    <>
      <Hero setIsModalOpen={setIsModalOpen} />
      <ProjectsShowcase />

      <CTA
        selectedService={selectedService}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />

      
    </>
  );
}

export default Project;