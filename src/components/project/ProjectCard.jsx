import "./ProjectCard.css";

function ProjectCard({ image, title, category, location }) {
  return (
    <article className="project-card">
      <img src={image} alt={title} />

      <div className="project-info">
        <span>{category}</span>

        <h3>{title}</h3>

        <p>{location}</p>
      </div>
    </article>
  );
}

export default ProjectCard;