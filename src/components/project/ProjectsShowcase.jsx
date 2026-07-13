import { Link } from "react-router-dom";
import "./ProjectsShowcase.css";


const featuredProjects = [
  {
    id: "high-end-office-building",
    title: "High-End Office Building",
    category: "Commercial",
    image: "/project 1.jpg",
  },
  {
    id: "2-story-residence",
    title: "2 Story Residence",
    category: "Residential",
    image: "/project 2.jpg",
  },
  {
    id: "1-story-church",
    title: "1 Story Church",
    category: "Religious",
    image: "/project 3.jpg",
  },
];

const moreProjects = [
  {
    id: "apartment",
    title: "Apartment",
    desc: "1 Story, 3 Bedroom",
    image: "/more1.png",
  },
  {
    id: "residence-1",
    title: "Residence",
    desc: "1 Story, 1 Bedroom",
    image: "/more2.png",
  },
  {
    id: "residence-2",
    title: "Residence",
    desc: "2 Story, 2 Bedroom",
    image: "/more3.png",
  },
  {
    id: "residence-3",
    title: "Residence",
    desc: "2 Story, 3 Bedroom",
    image: "/more4.png",
  },
  {
    id: "residence-4",
    title: "Residence",
    desc: "2 Story, 2 Bedroom",
    image: "/more5.png",
  },
  {
    id: "residence-5",
    title: "Residence",
    desc: "1 Story, 3 Bedroom",
    image: "/more6.png",
  },
];


function ProjectsShowcase() {
  return (
    <section className="projects-showcase">
      <div className="projects-intro">
        <span>About Our Work</span>

        <h2>
          Built with passion. <br />
          Designed to <strong>inspire.</strong>
        </h2>

        <p>
          ARKI has done many great projects throughout the years. From dream
          homes, tall buildings, cozy cafes, and practical spaces.
        </p>
      </div>

      <div className="featured-header">
        <p>Some of our</p>
        <h2>
          Most Impressive <strong>Projects</strong>
        </h2>
      </div>

      <div className="featured-grid">
        {featuredProjects.map((project, index) => (
          <article className="featured-project-card" key={index}>
            <img src={project.image} alt={project.title} />

            <div className="featured-project-info">
              <span>{project.category}</span>
              <h3>{project.title}</h3>
              <p>
                A modern architectural project designed with function,
                durability, and visual appeal in mind.
              </p>

              <Link to={`/projects/${project.id}`} className="read-more">
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </div>
<div className="more-projects-section">

  <div className="more-projects-header">
    <h2>More Projects</h2>
    <button>View All Projects →</button>
  </div>

  <div className="more-projects-grid">
  {moreProjects.map((project) => (
    <Link
      to={`/projects/${project.id}`}
      className="small-project-card"
      key={project.id}
    >
      <img src={project.image} alt={project.title} />

      <div>
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
      </div>
    </Link>
  ))}
</div>

</div>   {/* <-- You were missing this */}

</section>
 );
}

export default ProjectsShowcase;