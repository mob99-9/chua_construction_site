import "./Navbar.css";
import logo from "../../assets/logo.png";
import {
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";

import { useEffect, useState } from "react";

import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  const isInquiry = location.pathname === "/inquire";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ===== TOP BAR ===== */}

      {!isInquiry && (
        <div className={`top-bar ${scrolled ? "hide" : ""}`}>

          <div className="top-content">

            <div className="top-email">
              <FaEnvelope />
              <span>chuaconstruction@gmail.com</span>
            </div>

            <div className="top-socials">
              <a href="#">
                <FaFacebookF />
              </a>

              <a href="#">
                <FaInstagram />
              </a>

              <a href="#">
                <FaLinkedinIn />
              </a>
            </div>

          </div>

        </div>
      )}

      {/* ===== NAVBAR ===== */}

      <header
        className={`navbar ${scrolled ? "scrolled" : ""} ${
          isInquiry ? "inquiry-navbar" : ""
        }`}
      >
        <div className="nav-container">

          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="logo"
            />
          </Link>

          <nav>

            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "nav-btn active" : "nav-btn"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "nav-btn active" : "nav-btn"
              }
            >
              Services
            </NavLink>

            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "nav-btn active" : "nav-btn"
              }
            >
              Projects
            </NavLink>

            <Link
              to="/inquire"
              className="quote-btn"
            >
              Request a Quote
            </Link>

          </nav>

        </div>
      </header>
    </>
  );
}

export default Navbar;