import React from "react";
import logo from "../../assets/logo.png";
import bannerImg from "../../assets/image 2.png";

export default function About() {
  return (
    <section id="about" className="bg-white">

      {/* ================= Banner ================= */}

      <div className="max-w-[1500px] mx-auto px-6 mt-10">

        <div
          className="
            group
            relative
            h-[300px]
            md:h-[380px]
            overflow-hidden
            rounded-[32px]
            shadow-2xl
            transition-all
            duration-700
            hover:shadow-[0_35px_80px_rgba(0,17,134,.35)]
          "
        >

          {/* Banner Image */}

          <img
            src={bannerImg}
            alt="CHUA Construction Banner"
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              transition-all
              duration-700
              group-hover:scale-105
            "
          />

          {/* Dark Overlay */}

          <div className="absolute inset-0 bg-[#00062e]/55"></div>

          {/* Logo */}

          <div className="relative z-10 flex items-center justify-center h-full">

            <img
              src={logo}
              alt="CHUA Logo"
              className="
                h-44
                md:h-60
                object-contain

                animate-float

                transition-all
                duration-700

                group-hover:scale-110
                group-hover:-translate-y-4

                drop-shadow-[0_20px_40px_rgba(0,0,0,.55)]
                group-hover:drop-shadow-[0_40px_90px_rgba(248,116,0,.45)]
              "
            />

          </div>

        </div>

      </div>

      {/* ================= Content ================= */}

      <div className="max-w-[1220px] mx-auto px-[5%] py-16">

        <div className="flex flex-col items-center mb-10">

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-slate-900">
            CHUA Construction Company
          </h2>

          <p className="font-script text-[#001186] text-3xl md:text-4xl mt-2 text-center">
            Serving customers since 2020
          </p>

          <div className="w-28 h-1 bg-[#F87400] rounded-full mt-4"></div>

        </div>

        <div className="text-xl leading-relaxed space-y-6 text-slate-900">

          <div>

            <h3 className="font-bold text-xl mb-2">
              COMPANY OVERVIEW
            </h3>

            <p>

              <span className="text-[#F87400]">
                Chua Constructions
              </span>{" "}

              is a Filipino-led, premier, full-service architectural and construction firm dedicated to transforming visions into enduring realities. Founded on the principles of integrity, innovation, and exceptional craftsmanship, we seamlessly integrate cutting-edge architectural design with robust engineering and construction management.

            </p>

            <p className="mt-4">

              We cater to residential, commercial, and industrial clients, delivering bespoke spaces that perfectly balance aesthetic elegance with structural functionality. From initial conceptual blueprints to the final structural handover, Chua Constructions handles every phase of the building lifecycle with absolute precision and professional care.

            </p>

          </div>

          <div>

            <h3 className="font-bold text-xl mb-2">
              WHY CHUA?
            </h3>

            <p>

              <span className="text-[#F87400]">
                Integrated Design-Build Approach:
              </span>{" "}

              By housing both architecture and construction under one roof, we eliminate communication gaps, streamline timelines, and significantly reduce unexpected project costs.

            </p>

            <p className="mt-3">

              <span className="text-[#F87400]">
                Commitment to Quality:
              </span>{" "}

              We partner with trusted suppliers and employ skilled craftsmen to ensure every structure we build stands the test of time.

            </p>

            <p className="mt-3">

              <span className="text-[#F87400]">
                Client-Centric Philosophy:
              </span>{" "}

              We believe that great architecture is collaborative. We work closely with our clients at every step, ensuring their unique style, needs, and goals are reflected in the final space.

            </p>

          </div>

          <div>

            <h3 className="font-bold text-xl mb-2">
              COMPANY LOCATION
            </h3>

            <p>

              Visit us on{" "}

              <span className="text-[#F87400]">
                Unit 2 &amp; 3, Floor 3, Tower A, IT Park, Makati City
              </span>

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}