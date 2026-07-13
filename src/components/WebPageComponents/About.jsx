import React from "react";
import aboutImg from "../../assets/image 2.png";
import logo from "../../assets/logo.png";
import { MapPin } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-24 px-[5%]"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT IMAGE */}

        <div className="relative group overflow-hidden rounded-3xl shadow-2xl h-[620px]">

          <img
            src={aboutImg}
            alt="CHUA Construction"
            className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
          />

          {/* Dark Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10"></div>

          {/* Logo */}

          <div className="absolute inset-0 flex items-center justify-center">

            <img
              src={logo}
              alt="CHUA Logo"
              className="
                w-72
                md:w-80
                drop-shadow-[0_15px_40px_rgba(0,0,0,.6)]
                transition-all
                duration-500
                group-hover:scale-110
              "
            />

          </div>

        </div>

        {/* RIGHT CONTENT */}

        <div>

          <p className="uppercase tracking-[4px] text-primary-orange font-bold text-sm">
            Welcome to CHUA Construction!
          </p>

          {/* Logo */}

          <div className="flex items-center gap-5 mt-8">

            <img
              src={logo}
              alt="logo"
              className="h-20 object-contain"
            />

            <div className="w-px h-16 bg-gray-300"></div>

            <span className="uppercase font-bold tracking-[2px] text-primary-orange">
              Construction Company
            </span>

          </div>

          {/* Quote */}

          <h2
            className="
              font-script
              text-[3rem]
              text-[#001186]
              mt-8
            "
          >
            "Serving customers since 2020"
          </h2>

          {/* Orange Divider */}

          <div className="w-28 h-1 bg-primary-orange rounded-full mt-5 mb-8"></div>

          {/* Description */}

          <div className="space-y-6 text-gray-600 text-lg leading-9">

            <p>
              CHUA is a Filipino-led architectural and construction company
              established in May 2020.
            </p>

            <p>
              We specialize in architectural design while also providing
              complete construction services for residential, commercial,
              office, and institutional projects.
            </p>

            <p>
              Our team is committed to transforming ideas into functional,
              beautiful, and sustainable spaces through quality workmanship,
              innovative planning, and client-focused solutions.
            </p>

          </div>

          {/* Location */}

          <div className="flex items-center gap-4 mt-10">

            <MapPin
              size={34}
              className="text-primary-orange shrink-0"
            />

            <p className="font-semibold text-primary-orange text-lg">
              Located at Unit 2 & 3, Floor 3, Tower A,
              IT Park, Makati City
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}