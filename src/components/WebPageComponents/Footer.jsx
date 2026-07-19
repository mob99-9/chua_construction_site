import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// Import figma footer building image
import footerBg from "../../assets/figma/footer_bg_1.png";

export default function Footer() {
  return (
    <footer className="w-full relative bg-white overflow-hidden">
      {/* ================= CONTACTS & LINKS SECTION (WHITE BACKGROUND) ================= */}
      <div className="bg-white text-figma-navy py-16 md:py-24">
        {/* Heading */}
        <div className="max-w-[1280px] mx-auto px-6 sm:px-12 mb-16 text-left">
          <h2 className="font-archivo text-figma-blue text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight select-none mb-4">
            Have some questions? <br /> Contact us.
          </h2>
          <p className="font-dm-mono text-figma-navy text-base sm:text-lg max-w-[800px] leading-relaxed">
            Drop us a line, and let's discuss how we can make your dream project a structural reality.
          </p>
        </div>

        {/* Content Layout */}
        <div className="max-w-[1280px] mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Building Photo */}
          <div className="lg:col-span-6 relative rounded-xl overflow-hidden shadow-md">
            <img
              src={footerBg}
              alt="Apartment building under construction"
              className="w-full h-[280px] sm:h-[400px] object-cover hover:scale-[1.02] transition-transform duration-500"
            />
          </div>

          {/* Right: Company & Contacts Links */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 lg:pl-6">
            {/* Company Column */}
            <div>
              <h4 className="font-archivo text-figma-orange text-xl sm:text-2xl uppercase mb-6 select-none">
                Company
              </h4>
              <ul className="space-y-4 font-dm-mono text-base sm:text-lg font-light text-figma-blue list-none p-0 m-0">
                <li>
                  <Link to="/" className="hover:text-figma-orange transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-figma-orange transition-colors">
                    Rating
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-figma-orange transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="hover:text-figma-orange transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-figma-orange transition-colors">
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    to="/inquire"
                    className="hover:text-figma-orange font-medium text-figma-orange transition-colors"
                  >
                    Request Quote
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contacts Column */}
            <div>
              <h4 className="font-archivo text-figma-orange text-xl sm:text-2xl uppercase mb-6 select-none">
                Contacts
              </h4>
              <ul className="space-y-6 font-dm-mono text-base sm:text-lg font-light text-figma-navy list-none p-0 m-0">
                <li className="flex items-start gap-3">
                  <Mail className="text-figma-blue w-6 h-6 shrink-0 mt-0.5" />
                  <a
                    href="mailto:chuaconstruction@gmail.com"
                    className="hover:text-figma-orange transition-colors break-all"
                  >
                    chuaconstruction@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="text-figma-blue w-6 h-6 shrink-0 mt-0.5" />
                  <span className="whitespace-nowrap">408 317 3645</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="text-figma-blue w-6 h-6 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    H Building, Floor 2, BGC, Cavite, Philippines
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ================= COPYRIGHT BAR (NAVY BACKGROUND) ================= */}
      <div className="bg-figma-navy py-8 border-t border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Copyright */}
          <p className="font-dm-mono text-white/80 text-sm sm:text-base text-center md:text-left m-0">
            Copyright @ 2026 chua. All rights reserved.
          </p>

          {/* Middle: Socials */}
          <div className="flex items-center gap-6">
            <a
              href="https://facebook.com/chuaconstruction"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-figma-orange hover:-translate-y-0.5 transition-all duration-300"
              aria-label="Facebook"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              className="text-white hover:text-figma-orange hover:-translate-y-0.5 transition-all duration-300"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="text-white hover:text-figma-orange hover:-translate-y-0.5 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>

          {/* Right: Legal links */}
          <div className="flex items-center gap-6 font-dm-mono text-sm sm:text-base text-white/85">
            <Link to="/privacy-policy" className="hover:text-figma-orange transition-colors">
              Privacy Policy
            </Link>
            <Link to="/privacy-policy" className="hover:text-figma-orange transition-colors">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}