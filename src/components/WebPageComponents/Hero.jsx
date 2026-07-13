import { useNavigate } from "react-router-dom";
import heroVideo from "../../assets/banner.mp4";
import Button from "../common/Button";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative h-[90vh] min-h-[600px] w-full overflow-hidden text-white"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 w-full h-[220px] bg-gradient-to-b from-[#00062E] via-[#00062E]/80 to-transparent pointer-events-none z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-[180px] bg-gradient-to-t from-[#00062E] via-[#00062E]/85 to-transparent pointer-events-none z-10"></div>

      <div className="relative z-20 w-full max-w-[1200px] h-full mx-auto px-[5%] flex flex-col lg:flex-row justify-end lg:justify-between items-start lg:items-end gap-8 text-left pb-16">
        <div className="flex flex-col max-w-[850px] justify-center">
          <h1 className="font-bold leading-none select-none text-white flex flex-wrap items-baseline gap-y-2">
            <span className="text-4xl sm:text-5xl md:text-6xl tracking-wide mr-3">
              We help
            </span>

            <span className="font-script text-[#F87400] text-7xl sm:text-8xl md:text-9xl relative -bottom-2 leading-none">
              Design
            </span>

            <span className="text-lg sm:text-xl font-bold mx-4 self-center">
              and
            </span>

            <br className="hidden lg:inline w-full" />

            <span className="font-script text-[#F87400] text-7xl sm:text-8xl md:text-9xl mr-4 relative -bottom-2 leading-none">
              Build
            </span>

            <span className="text-4xl sm:text-5xl md:text-6xl tracking-wide">
              your dreams
            </span>
          </h1>

          <p className="text-lg md:text-xl font-medium mt-6 select-none">
            An architectural company{" "}
            <span className="text-primary-orange font-bold">
              All in One!
            </span>
          </p>
        </div>

        <div className="lg:mb-2 self-start lg:self-end">
          
        </div>
      </div>
    </section>
  );
}