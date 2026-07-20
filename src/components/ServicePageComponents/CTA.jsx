import React from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";

import ctaBg from "../../assets/image 12.png";

export default function CTA() {
  const navigate = useNavigate();
return (
  <section
    id="cta"
    className="relative bg-[#F8F5F1] py-24 overflow-hidden"
  >
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center opacity-15"
      style={{ backgroundImage: `url(${ctaBg})` }}
    />

    {/* Cream Overlay */}
    <div className="absolute inset-0 bg-[#F8F5F1]/95" />

    <div className="relative z-20 max-w-[1280px] mx-auto px-[5%]">

      {/* CTA Card */}
      <div className="bg-white rounded-[32px] shadow-[0_20px_55px_rgba(72,56,50,0.12)] border border-[#E8DED3] overflow-hidden">

        {/* Top */}
        <div className="px-10 md:px-16 py-14 flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left">

          <div>
            <h2 className="text-[#483832] text-4xl md:text-5xl font-bold">
              Interested?
            </h2>

            <p className="mt-4 text-[#6B5B52] text-lg leading-8 max-w-xl">
              Ready to bring your dream project to life? Let's discuss your
              ideas and create a space that's beautifully designed and built
              to last.
            </p>

            <div className="w-20 h-[3px] bg-[#D8B57A] rounded-full mt-6 mx-auto lg:mx-0" />
          </div>

          <button
            onClick={() => navigate("/inquire")}
            className="
              px-10
              py-4
              rounded-full
              bg-[#483832]
              text-white
              font-bold
              text-lg
              hover:bg-[#D8B57A]
              hover:text-[#483832]
              transition-all
              duration-300
              hover:scale-105
              shadow-lg
            "
          >
            Request a Quote
          </button>

        </div>

        {/* Divider */}
        <div className="border-t border-[#ECE3DA]" />

        {/* Contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 md:px-16 py-8">

          <a
            href="mailto:chuaconstruction@gmail.com"
            className="flex items-center gap-4 text-[#6B5B52] no-underline hover:text-[#483832] transition-colors"
          >
            <span className="w-12 h-12 rounded-full bg-[#F6EFE7] border border-[#D8B57A]/50 flex items-center justify-center text-[#483832]">
              <Mail size={18} />
            </span>

            <span>chuaconstruction@gmail.com</span>
          </a>

          <div className="flex items-center justify-center gap-4 text-[#6B5B52]">

            <span className="w-12 h-12 rounded-full bg-[#F6EFE7] border border-[#D8B57A]/50 flex items-center justify-center text-[#483832]">
              <Phone size={18} />
            </span>

            <span>500 - 173 - 4567</span>

          </div>

          <a
            href="https://facebook.com/chuaconstruction"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-start md:justify-end gap-4 text-[#6B5B52] no-underline hover:text-[#483832] transition-colors"
          >
            <span className="w-12 h-12 rounded-full bg-[#F6EFE7] border border-[#D8B57A]/50 flex items-center justify-center text-[#483832]">
              <FaFacebookF size={17} />
            </span>

            <span>facebook.com/chuaconstruction</span>
          </a>

        </div>

      </div>

    </div>

  </section>
);
}