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
        <h1 className="font-archivo text-[#f97400] text-4xl sm:text-6xl md:text-7xl lg:text-[85px] leading-[0.95] select-none tracking-tight uppercase">
          BUILT ON TRUST <br /> BUILT TO LAST
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-2xl font-medium mt-6 select-none text-white">
          An architectural company{" "}
          <span className="text-[#f97316] font-bold">All in One!</span>
        </p>

      </div>
    </section>
  );
}