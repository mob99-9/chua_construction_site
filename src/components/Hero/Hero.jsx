import "./Hero.css";
import heroVideo from "../../assets/hero-video.mp4";

function Hero() {
  return (
    <section className="project-hero">
      <video className="project-hero-video" autoPlay muted loop playsInline>
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="project-hero-overlay"></div>

      {/* Top gradient */}
      <div className="absolute top-0 left-0 w-full h-[220px] bg-gradient-to-b from-[#00062E] via-[#00062E]/80 to-transparent pointer-events-none z-10" />

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-[220px] bg-gradient-to-t from-[#0f172a]/85 via-[#00062E]/60 to-transparent pointer-events-none z-10" />

      <div className="project-hero-container !z-20">
        <div className="project-hero-content">
          <h1 className="flex flex-col select-none text-center justify-center">
            WITH EXPERIENCE <br /> YOU CAN TRUST!
          </h1>

          <p className="text-white/95 text-lg md:text-2xl font-semibold mt-6 select-none font-sans">
            Homes, hotels, cafes,{" "}
            <span className="text-[#f97316] font-bold">and More!</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;