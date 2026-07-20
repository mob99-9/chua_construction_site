import { useNavigate } from "react-router-dom";
import heroImage from "../../assets/bg_hero_webpage.jpg";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative h-[90vh] min-h-[600px] overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Top Espresso Gradient */}
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#483832]/55 via-[#483832]/20 to-transparent z-10" />

      {/* Bottom Espresso Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#483832]/50 via-[#483832]/15 to-transparent z-10" />

      {/* Left Reading Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#483832]/58 via-[#483832]/30 to-transparent z-10" />

      {/* Overall Overlay */}
      <div className="absolute inset-0 bg-[#483832]/12 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 h-full max-w-[1200px] mx-auto px-[5%] flex flex-col justify-end pb-16 md:pb-20 lg:pb-24">

        {/* Headline */}
        <h1 className="font-archivo uppercase leading-[0.94] tracking-[-0.02em] font-semibold select-none">

          <span className="block text-white text-[32px] sm:text-[42px] md:text-[54px] lg:text-[66px]">
            BUILT ON{" "}
            <span className="text-[#D8B57A] font-bold">
              TRUST
            </span>
          </span>

          <span className="block text-white text-[32px] sm:text-[42px] md:text-[54px] lg:text-[66px] mt-1">
            BUILT TO{" "}
            <span className="text-[#D8B57A] font-bold">
              LAST
            </span>
          </span>

        </h1>

        {/* Accent Line */}
        <div className="w-16 h-[3px] rounded-full bg-[#D8B57A] mt-6 mb-6" />

        {/* Tagline */}
        <p className="text-white text-sm sm:text-base md:text-lg lg:text-[22px] font-normal tracking-wide leading-relaxed max-w-[580px]">
          An architectural company{" "}
          <span className="text-[#D8B57A] font-semibold">
            All in One!
          </span>
        </p>

      </div>
    </section>
  );
}