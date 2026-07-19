import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  Church,
  Grid2X2,
  Home,
  House,
  Landmark,
  Warehouse,
} from "lucide-react";
import "./ProjectsShowcase.css";

const featuredProjects = [
  {
    id: "high-end-office-building",
    title: "High-End Office Building",
    category: "Commercial",
    icon: Building2,
  },
  {
    id: "2-story-residence",
    title: "2 Story Residence",
    category: "Residential",
    icon: House,
  },
  {
    id: "1-story-church",
    title: "1 Story Church",
    category: "Religious",
    icon: Church,
  },
];

const moreProjects = [
  {
    id: "apartment",
    title: "Apartment",
    desc: "1 Story, 3 Bedroom",
    icon: Building2,
  },
  {
    id: "residence-1",
    title: "Residence",
    desc: "1 Story, 1 Bedroom",
    icon: Home,
  },
  {
    id: "residence-2",
    title: "Residence",
    desc: "2 Story, 2 Bedroom",
    icon: House,
  },
  {
    id: "residence-3",
    title: "Residence",
    desc: "2 Story, 3 Bedroom",
    icon: Warehouse,
  },
  {
    id: "residence-4",
    title: "Residence",
    desc: "2 Story, 2 Bedroom",
    icon: Landmark,
  },
  {
    id: "residence-5",
    title: "Residence",
    desc: "1 Story, 3 Bedroom",
    icon: Home,
  },
];

function ProjectsShowcase() {
  return (
    <section className="projects-showcase">
      <div className="projects-showcase__container">
        <div className="projects-showcase__top">
          <aside className="projects-intro">
            <span className="projects-label">About Our Work</span>
            <span className="projects-label-line" />

            <h2 className="projects-intro-title">
              Built with passion.
              <br />
              Designed to <span>inspire.</span>
            </h2>

            <span className="projects-title-line" />

            <p className="projects-intro-copy">
              ARKI has done many great projects throughout the years. From dream
              homes, tall buildings, cozy cafes, and practical spaces.
            </p>

            <div className="projects-blueprint" aria-hidden="true">
              <Building2 />
            </div>
          </aside>

          <div className="featured-projects">
            <div className="featured-heading">
              <div className="featured-heading-label">
                <span>Some of Our</span>
                <span className="featured-heading-line" />
              </div>

              <h2>
                Most Impressive <span>Projects</span>
              </h2>
            </div>

            <div className="featured-grid">
              {featuredProjects.map((project) => {
                const Icon = project.icon;

                return (
                  <article className="featured-card" key={project.id}>
                    <div className="featured-card-icon-area">
                      <span className="featured-card-halo" />
                      <Icon
                        className="featured-card-icon"
                        strokeWidth={1.45}
                        aria-hidden="true"
                      />
                    </div>

                    <div className="featured-card-body">
                      <span className="featured-card-category">
                        {project.category}
                      </span>

                      <h3>{project.title}</h3>

                      <span className="featured-card-line" />

                      <p>
                        A modern architectural project designed with function,
                        durability, and visual appeal in mind.
                      </p>

                      <Link
                        to={`/projects/${project.id}`}
                        className="featured-card-link"
                      >
                        Read More
                        <ArrowRight size={20} />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        <section className="more-projects">
          <div className="more-projects-header">
            <div className="more-projects-heading">
              <Grid2X2 className="more-projects-icon" size={28} />
              <h2>More Projects</h2>
              <span />
            </div>
          </div>

          <div className="more-projects-grid">
            {moreProjects.map((project) => {
              const Icon = project.icon;

              return (
                <Link
                  to={`/projects/${project.id}`}
                  className="more-project-card"
                  key={project.id}
                >
                  <div className="more-project-icon-wrap">
                    <span />
                    <Icon
                      className="more-project-icon"
                      strokeWidth={1.45}
                      aria-hidden="true"
                    />
                  </div>

                  <h3>{project.title}</h3>
                  <span className="more-project-card-line" />
                  <p>{project.desc}</p>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </section>
  );
}

export default ProjectsShowcase;
