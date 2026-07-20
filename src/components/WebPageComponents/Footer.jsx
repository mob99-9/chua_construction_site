import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#483832] text-white pt-20 pb-10 px-[5%]">

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Company */}
        <div className="flex flex-col gap-5">

          <img
            src={logo}
            alt="CHUA Logo"
            className="h-14 object-contain self-start brightness-0 invert"
          />

          <h4 className="text-2xl font-bold text-white">
            CHUA
          </h4>

          <div className="w-12 h-[3px] rounded-full bg-[#D8B57A]" />

          <p className="text-[#E8DDD4] leading-7">
            An architectural and construction company dedicated to creating
            timeless, functional, and elegant spaces.
          </p>

          <p className="font-medium text-[#D8B57A]">
            Established on: 08/05/2000
          </p>

        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-5">

          <h4 className="text-xl font-semibold text-white">
            Navigation
          </h4>

          <div className="w-10 h-[3px] rounded-full bg-[#D8B57A]" />

          <ul className="space-y-4">

            <li>
              <Link
                to="/"
                className="text-[#E8DDD4] hover:text-[#D8B57A] transition-colors no-underline"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/services"
                className="text-[#E8DDD4] hover:text-[#D8B57A] transition-colors no-underline"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                to="/projects"
                className="text-[#E8DDD4] hover:text-[#D8B57A] transition-colors no-underline"
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                to="/privacy-policy"
                className="text-[#E8DDD4] hover:text-[#D8B57A] transition-colors no-underline"
              >
                Privacy Policy
              </Link>
            </li>

          </ul>

        </div>

        {/* Services */}
        <div className="flex flex-col gap-5">

          <h4 className="text-xl font-semibold text-white">
            Services
          </h4>

          <div className="w-10 h-[3px] rounded-full bg-[#D8B57A]" />

          <ul className="space-y-4">

            <li>
              <Link
                to="/design"
                className="text-[#E8DDD4] hover:text-[#D8B57A] transition-colors no-underline"
              >
                Floor Plans
              </Link>
            </li>

            <li>
              <Link
                to="/3d-render"
                className="text-[#E8DDD4] hover:text-[#D8B57A] transition-colors no-underline"
              >
                3D Render
              </Link>
            </li>

            <li>
              <Link
                to="/blueprint"
                className="text-[#E8DDD4] hover:text-[#D8B57A] transition-colors no-underline"
              >
                Blueprint
              </Link>
            </li>

          </ul>

        </div>

        {/* Contact */}
        <div className="flex flex-col gap-5">

          <h4 className="text-xl font-semibold text-white">
            Contact Us
          </h4>

          <div className="w-10 h-[3px] rounded-full bg-[#D8B57A]" />

          <div className="space-y-4 text-[#E8DDD4] leading-7">

            <a
              href="mailto:chuaconstruction@gmail.com"
              className="block no-underline hover:text-[#D8B57A] transition-colors"
            >
              chuaconstruction@gmail.com
            </a>

            <div>
              +63 500 173 4567
            </div>

            <div>
              Unit 2 &amp; 3, Floor 3,
              <br />
              Tower A, IT Park,
              <br />
              Makati City
            </div>

            <a
              href="https://facebook.com/chuaconstruction"
              target="_blank"
              rel="noopener noreferrer"
              className="block no-underline hover:text-[#D8B57A] transition-colors"
            >
              facebook.com/chuaconstruction
            </a>

          </div>

        </div>

      </div>

      {/* Divider */}

      <div className="max-w-[1200px] mx-auto mt-14 pt-8 border-t border-white/10">

        <p className="text-center text-[#D4C9C0] text-sm leading-7">
          © {new Date().getFullYear()} CHUA Construction. All rights reserved.
          <br />
          Feel free to reach out to us through any of the contact details above.
        </p>

      </div>

    </footer>
  );
}