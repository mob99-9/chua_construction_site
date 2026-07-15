import React from "react";
import logo from "../../assets/logo.png";
import bannerImg from "../../assets/image 2.png";

export default function About() {
  return (
    <section id="about" className="bg-white">

      {/* Wide banner with logo centered — matches screenshot 2 */}
      <div className="relative w-full h-[280px] md:h-[340px] overflow-hidden">
        <img
          src={bannerImg}
          alt="CHUA Construction Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#00062e]/55" />

        {/* Centered logo */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full gap-3">
          <img
            src={logo}
            alt="CHUA Logo"
            className="h-28 md:h-36 object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)]"
          />
        </div>
      </div>

      {/* Text content block below banner */}
      <div className="max-w-[1220px] mx-auto px-[5%] py-16">

        {/* Company name + tagline */}
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-slate-900 font-sans">
            CHUA Construction Company
          </h2>
          <p className="font-script text-[#001186] text-3xl md:text-4xl mt-2 text-center">
            Serving customers since 2020
          </p>
          <div className="w-28 h-1 bg-[#f97400] rounded-full mt-4" />
        </div>

        {/* Body text */}
        <div className="text-xl leading-relaxed space-y-6 text-slate-900">

          {/* Company Overview */}
          <div>
            <h3 className="font-bold text-slate-900 text-xl mb-1">COMPANY OVERVIEW</h3>
            <p>
              <span className="text-[#f97400]">Chua Constructions</span>
              {" "}is a Filipino-lead, premier, full-service architectural and construction firm dedicated to transforming visions into enduring realities. Founded on the principles of integrity, innovation, and exceptional craftsmanship, we seamlessly integrate cutting-edge architectural design with robust engineering and construction management.
            </p>
            <p className="mt-4">
              We cater to residential, commercial, and industrial clients, delivering bespoke spaces that perfectly balance aesthetic elegance with structural functionality. From initial conceptual blueprints to the final structural handover, Chua Constructions handles every phase of the building lifecycle with absolute precision and professional care.
            </p>
          </div>

          {/* Why Chua */}
          <div>
            <h3 className="font-bold text-slate-900 text-xl mb-2">WHY CHUA?</h3>
            <p>
              <span className="text-[#f97400]">Integrated Design-Build Approach:</span>
              {" "}By housing both architecture and construction under one roof, we eliminate communication gaps, streamline timelines, and significantly reduce unexpected project costs.
            </p>
            <p className="mt-3">
              <span className="text-[#f97400]">Commitment to Quality:</span>
              {" "}We partner with trusted suppliers and employ skilled craftsmen to ensure every structure we build stands the test of time.
            </p>
            <p className="mt-3">
              <span className="text-[#f97400]">Client-Centric Philosophy:</span>
              {" "}We believe that great architecture is collaborative. We work closely with our clients at every step, ensuring their unique style, needs, and goals are reflected in the final space.
            </p>
          </div>

          {/* Company Location */}
          <div>
            <h3 className="font-bold text-slate-900 text-xl mb-1">COMPANY LOCATION</h3>
            <p>
              Visit us on{" "}
              <span className="text-[#f97400]">Unit 2 &amp; 3, Floor 3, Tower A, IT Park, Makati City</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}