import "./ProjectSection.css";
import ProjectCard from "./ProjectCard";

import sampleProject from "../../assets/project1.jpg";

function ProjectSection() {
  return (
    <section className="projects-section">

      <div className="section-header">

        <span>OUR PORTFOLIO</span>

        <h2>Featured Projects</h2>

        <p>
          Explore some of our recent residential and commercial projects.
        </p>

      </div>

      <div className="projects-grid">

        <ProjectCard
          image={sampleProject}
          title="Modern Residential House"
          category="Residential"
          location="Laguna, Philippines"
        />

        <ProjectCard
          image={sampleProject}
          title="Luxury Villa"
          category="Residential"
          location="Batangas, Philippines"
        />

        <ProjectCard
          image={sampleProject}
          title="Commercial Office"
          category="Commercial"
          location="Makati City"
        />

      </div>

    </section>
  );
}

export default ProjectSection;