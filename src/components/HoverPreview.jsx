import "./HoverPreview.css";

export default function HoverPreview({
  visible,
  image,
  title,
  description,
  x,
  y,
}) {
  if (!visible) return null;

  return (
    <div
      className="hover-preview"
      style={{
        top: y + 20,
        left: x + 20,
      }}
    >
      <img src={image} alt={title} />

      <div className="hover-content">
        <h3>{title}</h3>

        <p>{description}</p>

        <span>Click to view gallery →</span>
      </div>
    </div>
  );
}