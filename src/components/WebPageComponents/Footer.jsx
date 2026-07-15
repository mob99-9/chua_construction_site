import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#F87400] text-slate-900 pt-16 px-[5%] pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-[1200px] mx-auto">

        {/* CHUA Column */}
        <div className="flex flex-col gap-5">
          <img src={logo} alt="CHUA Logo" className="h-14 object-contain self-start brightness-0" />
          <h4 className="text-xl font-semibold tracking-wide text-slate-900">CHUA</h4>
          <p className="text-[0.95rem] leading-relaxed text-slate-900/80">
            An architectural and construction company
          </p>
          <p className="text-[0.95rem] leading-relaxed text-slate-900/80 font-semibold">
            Established on: 08/05/2000
          </p>
        </div>

        {/* LINKS Column */}
        <div className="flex flex-col gap-5">
          <h4 className="text-xl font-semibold tracking-wide text-slate-900">LINKS</h4>
          <ul className="list-none p-0 m-0 flex flex-col gap-3">
            <li>
              <Link to="/" className="text-slate-900/80 no-underline font-medium hover:text-white transition-colors">
                &gt; Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-slate-900/80 no-underline font-medium hover:text-white transition-colors">
                &gt; Services
              </Link>
            </li>
            <li>
              <Link to="/projects" className="text-slate-900/80 no-underline font-medium hover:text-white transition-colors">
                &gt; Projects
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="text-slate-900/80 no-underline font-medium hover:text-white transition-colors">
                &gt; Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* SERVICES Column */}
        <div className="flex flex-col gap-5">
          <h4 className="text-xl font-semibold tracking-wide text-slate-900">SERVICES</h4>
          <ul className="list-none p-0 m-0 flex flex-col gap-3">
            <li>
              <Link to="/design" className="text-slate-900/80 no-underline font-medium hover:text-white transition-colors">
                Floor Plans
              </Link>
            </li>
            <li>
              <Link to="/3d-render" className="text-slate-900/80 no-underline font-medium hover:text-white transition-colors">
                3D Render
              </Link>
            </li>
            <li>
              <Link to="/blueprint" className="text-slate-900/80 no-underline font-medium hover:text-white transition-colors">
                Blueprint
              </Link>
            </li>
          </ul>
        </div>

        {/* HAVE A QUESTION? Column */}
        <div className="flex flex-col gap-5">
          <h4 className="text-xl font-semibold tracking-wide text-slate-900">HAVE A QUESTION?</h4>
          <div className="flex flex-col gap-3 text-[0.95rem]">
            <a
              href="mailto:chuaconstruction@gmail.com"
              className="text-slate-900/80 no-underline font-medium hover:text-white transition-colors"
            >
              chuaconstruction@gmail.com
            </a>
            <div className="font-medium text-slate-900/80">500 - 173 - 4567</div>
            <div className="text-slate-900/80">
              Unit 2 &amp; 3, Floor 3, Tower A, <br />
              IT Park, Makati City
            </div>
            <a
              href="https://facebook.com/chuaconstruction"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-900/80 no-underline font-medium hover:text-white transition-colors"
            >
              chuaconstruction.facebook.com
            </a>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="mt-12 border-t border-slate-900/20 pt-6 text-center text-slate-900/60 text-sm">
        Feel free to reach out to us through the contacts provided above.
      </div>
    </footer>
  );
}