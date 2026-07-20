import heroImage from "../../assets/hero_projectpage.png";

function Hero() {
  return (
    <section
      className="relative h-[65vh] min-h-[380px] md:h-[90vh] md:min-h-[600px] w-full overflow-hidden bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Soft Top Gradient */}
      <div className="absolute inset-x-0 top-0 z-10 h-24 md:h-40 bg-gradient-to-b from-[#483832]/40 to-transparent pointer-events-none" />

      {/* Soft Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 z-10 h-32 md:h-44 bg-gradient-to-t from-[#483832]/45 to-transparent pointer-events-none" />

      {/* Soft Dark Overlay */}
      <div className="absolute inset-0 bg-[#241C18]/10 z-10 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-20 h-full max-w-[1200px] mx-auto px-[5%] flex flex-col justify-end pb-8 sm:pb-12 md:pb-16 lg:pb-20">
        <div className="max-w-[760px]">
          {/* Heading */}
          <h1 className="font-archivo uppercase leading-[0.96] tracking-[-0.02em] font-semibold select-none">
            <span className="block text-white text-[28px] sm:text-[46px] md:text-[58px] lg:text-[68px]">
              LET'S DESIGN
            </span>

            <span className="block text-white text-[28px] sm:text-[46px] md:text-[58px] lg:text-[68px] mt-1">
              YOUR DREAM{" "}
              <span className="text-[#D8B57A] font-bold">
                PROJECT!
              </span>
            </span>
          </h1>

          {/* Gold Accent */}
          <div className="w-14 h-[3px] rounded-full bg-[#D8B57A] mt-6 mb-5" />

          {/* Subtitle */}
          <p className="max-w-[680px] text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed tracking-wide text-white">
            Let's design your dream{" "}
            <span className="font-semibold text-[#D8B57A]">
              Project!
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;