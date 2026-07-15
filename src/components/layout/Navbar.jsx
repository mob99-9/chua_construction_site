import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const isInquiry = location.pathname === "/inquire";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Determine current active page label
  const getActiveLabel = () => {
    if (location.pathname === "/") return "Home";
    if (location.pathname.startsWith("/services")) return "Services";
    if (location.pathname.startsWith("/projects")) return "Projects";
    if (location.pathname === "/inquire") return "Inquire";
    return "";
  };

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
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
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
            <Link to="/inquire" className="quote-btn">
              Request a Quote
            </Link>
          </nav>

          {/* Mobile Nav Interface — Matches the mobile screenshot */}
          <div className="mobile-nav-controls">
            {getActiveLabel() && (
              <div className="mobile-active-badge">
                {getActiveLabel()}
              </div>
            )}
            <Link to="/inquire" className="mobile-quote-btn">
              Request Quote
            </Link>
            <button
              className="mobile-menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        {menuOpen && (
          <div className="mobile-dropdown-menu">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "mobile-dropdown-link active" : "mobile-dropdown-link"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "mobile-dropdown-link active" : "mobile-dropdown-link"
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "mobile-dropdown-link active" : "mobile-dropdown-link"
              }
            >
              Projects
            </NavLink>
            <Link to="/inquire" className="mobile-dropdown-link quote-style">
              Request a Quote
            </Link>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;