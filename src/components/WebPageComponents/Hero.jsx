import { useNavigate } from "react-router-dom";
import heroImage from "../../assets/bg_hero_webpage.jpg";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative h-[90vh] min-h-[600px] w-full overflow-hidden bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Top Gradient */}
      <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-[#00062E] via-[#00062E]/80 to-transparent z-10" />

      {/* Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#00062E]/95 via-[#00062E]/60 to-transparent z-10" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/25 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 h-full max-w-[1200px] mx-auto px-[5%] flex flex-col justify-end pb-14 md:pb-16 lg:pb-20">
        {/* Headline */}
        <h1 className="font-archivo uppercase leading-[0.96] tracking-[-0.02em] font-semibold select-none">
          <span className="block text-white text-[34px] sm:text-[46px] md:text-[58px] lg:text-[68px]">
            BUILT ON{" "}
            <span className="text-[#F97400] font-bold">
              TRUST
            </span>
          </span>

          <span className="block text-white text-[34px] sm:text-[46px] md:text-[58px] lg:text-[68px] mt-1">
            BUILT TO{" "}
            <span className="text-[#F97400] font-bold">
              LAST
            </span>
          </span>
        </h1>

        {/* Accent Line */}
        <div className="w-14 h-[3px] rounded-full bg-[#F97400] mt-6 mb-5" />

        {/* Tagline */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal tracking-wide text-white">
          An architectural company{" "}
          <span className="text-[#F97400] font-semibold">
            All in One!
          </span>
        </p>
      </div>
    </section>
  );
}