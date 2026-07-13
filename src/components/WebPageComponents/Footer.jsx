import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary-orange text-dark-navy pt-20 px-[5%] pb-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-5">
          <h4 className="text-xl font-extrabold tracking-wide">CHUA Construction</h4>
          <p className="text-[0.95rem] leading-relaxed opacity-95">
            An architectural and construction company
          </p>
          <p className="text-[0.95rem] leading-relaxed opacity-95 font-semibold">
            Established on: 08/05/2000
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <h4 className="text-xl font-extrabold tracking-wide">LINKS</h4>
          <ul className="list-none p-0 m-0 flex flex-col gap-3">
            <li><Link to="/" className="text-dark-navy no-underline font-medium">&gt; Home</Link></li>
            <li><Link to="/services" className="text-dark-navy no-underline font-medium">&gt; Services</Link></li>
            <li><Link to="/projects" className="text-dark-navy no-underline font-medium">&gt; Projects</Link></li>
            <li><Link to="/privacy-policy" className="text-dark-navy no-underline font-medium">&gt; Privacy Policy</Link></li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h4 className="text-xl font-extrabold tracking-wide">SERVICES</h4>
          <ul className="list-none p-0 m-0 flex flex-col gap-3">
            <li>
              <Link to="/services" state={{ service: "design" }} className="text-dark-navy no-underline font-medium">
                Floor Plans
              </Link>
            </li>
            <li>
              <Link to="/services" state={{ service: "3d-render" }} className="text-dark-navy no-underline font-medium">
                3D Render
              </Link>
            </li>
            <li>
              <Link to="/services" state={{ service: "blueprint" }} className="text-dark-navy no-underline font-medium">
                Blueprint
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h4 className="text-xl font-extrabold tracking-wide">HAVE A QUESTION?</h4>
          <div className="flex flex-col gap-3 text-[0.95rem]">
            <a href="mailto:chuaconstruction@gmail.com" className="text-dark-navy no-underline font-medium">
              chuaconstruction@gmail.com
            </a>
            <div className="font-medium">500 - 173 - 4567</div>
            <div>
              Unit 2 & 3, Floor 3, Tower A, <br />
              IT Park, Makati City
            </div>
          </div>
        </div>
      </div>

      <div className="bg-dark-navy text-white flex flex-col sm:flex-row justify-between items-center py-5 px-[5.3%] text-xs mt-16 -mx-[5.3%]">
        <span>Copyright @ 2026</span>
      </div>
    </footer>
  );
}