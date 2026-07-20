import heroImage from "../../assets/hero_projectpage.png";

function Hero() {
  return (
    <section
      className="relative h-[65vh] min-h-[380px] md:h-[90vh] md:min-h-[600px] w-full overflow-hidden bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Top Gradient */}
      <div className="absolute inset-x-0 top-0 z-10 h-32 md:h-56 bg-gradient-to-b from-[#00062E] via-[#00062E]/80 to-transparent pointer-events-none" />

      {/* Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 z-10 h-36 md:h-64 bg-gradient-to-t from-[#00062E]/95 via-[#00062E]/65 to-transparent pointer-events-none" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />

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
              <span className="text-[#F97400] font-bold">
                PROJECT!
              </span>
            </span>
          </h1>

          {/* Orange Accent */}
          <div className="w-14 h-[3px] bg-[#F97400] rounded-full mt-6 mb-5" />

          {/* Subtitle */}
          <p className="max-w-[680px] text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed tracking-wide text-white">
            Let's design your dream{" "}
            <span className="text-[#F97400] font-semibold">
              Project!
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;