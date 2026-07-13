import "./Hero.css";
import { useNavigate } from "react-router-dom";
import heroVideo from "../../assets/hero-video.mp4";
import Button from "../common/Button";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="project-hero">
      <video className="project-hero-video" autoPlay muted loop playsInline>
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="project-hero-overlay"></div>

      {/* Top gradient */}
      <div className="absolute top-0 left-0 w-full h-[220px] bg-gradient-to-b from-[#00062E] via-[#00062E]/80 to-transparent pointer-events-none z-10"></div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-[180px] bg-gradient-to-t from-[#00062E] via-[#00062E]/85 to-transparent pointer-events-none z-10"></div>

      <div className="project-hero-container !z-20">
        <div className="project-hero-content">
          <h1>
            Our <span>Projects</span>
          </h1>

          <p>
            Explore our completed construction and architectural works.
          </p>
        </div>

        <div className="project-hero-button">
        
        </div>
      </div>
    </section>
  );
}

export default Hero;