import React from "react";
import { useNavigate } from "react-router-dom";
import ctaBg from "../../assets/image 12.png";
import { Mail, Phone } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";

export default function CTA() {
  const navigate = useNavigate();

  return (
    <section className="relative mt-20" id="cta">

      {/* Background image wrapper */}
      <div
        className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ctaBg})` }}
      >
        {/* Dark navy overlay — matches the blue tint in the design */}
        <div className="absolute inset-0 bg-[#001186]/88" />

        {/* ── Top: Interested? + Request Quote ── */}
        <div className="relative z-20 w-full max-w-[1280px] mx-auto px-8 sm:px-16 py-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">

          {/* Left: heading + subtext */}
          <div>
            <h2 className="text-white text-4xl sm:text-5xl font-bold leading-tight">
              Interested?
            </h2>
            <p className="mt-2 text-white/80 text-lg">
              Let's work together!
            </p>
          </div>

          {/* Right: Request Quote button — white pill, orange text */}
          <button
            onClick={() => navigate("/inquire")}
            className="
              bg-white
              text-[#f97400]
              font-bold
              text-lg
              px-10
              py-4
              rounded-full
              shadow-lg
              border-2
              border-white
              hover:bg-[#f97400]
              hover:text-white
              hover:border-[#f97400]
              hover:scale-105
              active:scale-95
              transition-all
              duration-300
              shrink-0
              whitespace-nowrap
            "
          >
            Request Quote
          </button>

        </div>

        {/* ── Divider ── */}
        <div className="relative z-20 mx-8 sm:mx-16 border-t border-white/20" />

        {/* ── Bottom: Contact info strip ── */}
        <div className="relative z-20 w-full max-w-[1280px] mx-auto px-8 sm:px-16 py-5 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-14 text-white text-[0.95rem] font-medium">

          {/* Email */}
          <a
            href="mailto:chuaconstruction@gmail.com"
            className="flex items-center gap-3 text-white/85 hover:text-white transition-colors no-underline"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-md border border-white/40 shrink-0">
              <Mail size={17} />
            </span>
            <span>chuaconstruction@gmail.com</span>
          </a>

          {/* Phone */}
          <div className="flex items-center gap-3 text-white/85">
            <span className="flex items-center justify-center w-9 h-9 rounded-md border border-white/40 shrink-0">
              <Phone size={17} />
            </span>
            <span>500 - 173 - 4567</span>
          </div>

          {/* Facebook */}
          <a
            href="https://facebook.com/chuaconstruction"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white/85 hover:text-white transition-colors no-underline"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-md border border-white/40 shrink-0">
              <FaFacebookF size={17} />
            </span>
            <span>chuaconstruction.facebook.com</span>
          </a>

        </div>

      </div>
    </section>
  );
}