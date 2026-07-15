import { useNavigate } from "react-router-dom";
import heroVideo from "../../assets/banner.mp4";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative h-[90vh] min-h-[600px] w-full overflow-hidden text-white"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Top gradient */}
      <div className="absolute top-0 left-0 w-full h-[220px] bg-gradient-to-b from-[#00062E] via-[#00062E]/80 to-transparent pointer-events-none z-10" />

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-[220px] bg-gradient-to-t from-[#0f172a]/85 via-[#00062E]/60 to-transparent pointer-events-none z-10" />

      {/* Hero content */}
      <div className="relative z-20 w-full max-w-[1200px] h-full mx-auto px-[5%] flex flex-col justify-end pb-20">

        {/* Main headline */}
        <div className="flex flex-col gap-0 select-none">

          {/* Row 1: "Built on Trust" */}
          <div className="flex items-baseline flex-wrap gap-x-3">
            <span className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white font-sans">
              Built on
            </span>
            <span className="font-script text-[#f97316] leading-none text-7xl sm:text-8xl md:text-9xl">
              Trust
            </span>
          </div>

          {/* Row 2: "Built to last" */}
          <div className="flex items-baseline flex-wrap gap-x-3 -mt-2">
            <span className="font-script text-[#f97316] leading-none text-7xl sm:text-8xl md:text-9xl">
              Built
            </span>
            <span className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white font-sans">
              to last
            </span>
          </div>

        </div>

        {/* Tagline */}
        <p className="text-lg md:text-2xl font-medium mt-6 select-none text-white">
          An architectural company{" "}
          <span className="text-[#f97316] font-bold">All in One!</span>
        </p>

      </div>
    </section>
  );
}