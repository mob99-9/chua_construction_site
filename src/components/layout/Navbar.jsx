import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FaBars,
  FaTimes,
  FaPaperPlane,
  FaHome,
  FaHardHat,
  FaBuilding,
  FaChevronDown,
  FaDraftingCompass,
  FaCube,
  FaRulerCombined,
} from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  const servicesRoutes = [
    "/services",
    "/design",
    "/3d-render",
    "/blueprint",
  ];

  const isServicesActive = servicesRoutes.some(
    (route) =>
      location.pathname === route ||
      location.pathname.startsWith(`${route}/`)
  );

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  return (
    <header className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo-link" aria-label="Go to home page">
          <img src={logo} alt="Chua Construction" className="logo" />
        </Link>

        <div className="nav-right">
          <nav className="desktop-nav" aria-label="Main navigation">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "nav-btn active" : "nav-btn"
              }
            >
              <FaHome className="nav-icon" aria-hidden="true" />
              <span>Home</span>
            </NavLink>

            <div
              className="services-dropdown"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <div
                className={
                  isServicesActive
                    ? "services-nav-wrapper active"
                    : "services-nav-wrapper"
                }
              >
                <NavLink to="/services" className="services-main-link">
                  <FaHardHat className="nav-icon" aria-hidden="true" />
                  <span>Services</span>
                </NavLink>

                <button
                  type="button"
                  className="services-arrow-btn"
                  onClick={() => setServicesOpen((current) => !current)}
                  aria-label="Open services menu"
                  aria-expanded={servicesOpen}
                >
                  <FaChevronDown
                    className={
                      servicesOpen
                        ? "dropdown-arrow rotate"
                        : "dropdown-arrow"
                    }
                    aria-hidden="true"
                  />
                </button>
              </div>

              {servicesOpen && (
                <div className="services-dropdown-menu">
                  <Link to="/design" className="service-dropdown-link">
                    <span className="service-dropdown-icon">
                      <FaDraftingCompass aria-hidden="true" />
                    </span>
                    <span>
                      <strong>Architectural Design</strong>
                      <small>Functional and detailed space planning</small>
                    </span>
                  </Link>

                  <Link to="/3d-render" className="service-dropdown-link">
                    <span className="service-dropdown-icon">
                      <FaCube aria-hidden="true" />
                    </span>
                    <span>
                      <strong>3D Rendering</strong>
                      <small>Realistic interior and exterior visuals</small>
                    </span>
                  </Link>

                  <Link to="/blueprint" className="service-dropdown-link">
                    <span className="service-dropdown-icon">
                      <FaRulerCombined aria-hidden="true" />
                    </span>
                    <span>
                      <strong>Blueprint &amp; Construction</strong>
                      <small>Technical and construction-ready plans</small>
                    </span>
                  </Link>
                </div>
              )}
            </div>

            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "nav-btn active" : "nav-btn"
              }
            >
              <FaBuilding className="nav-icon" aria-hidden="true" />
              <span>Projects</span>
            </NavLink>
          </nav>

          <Link to="/inquire" className="quote-btn">
            <FaPaperPlane aria-hidden="true" />
            <span>Request Quote</span>
          </Link>

          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="navbar-dropdown"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="navbar-dropdown"
          className="dropdown-menu"
          aria-label="Mobile navigation"
        >
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "dropdown-link active" : "dropdown-link"
            }
          >
            <FaHome aria-hidden="true" />
            <span>Home</span>
          </NavLink>

          <div className="mobile-services">
            <button
              type="button"
              className={
                isServicesActive
                  ? "dropdown-link mobile-services-btn active"
                  : "dropdown-link mobile-services-btn"
              }
              onClick={() =>
                setMobileServicesOpen((current) => !current)
              }
              aria-expanded={mobileServicesOpen}
            >
              <span className="mobile-services-label">
                <FaHardHat aria-hidden="true" />
                <span>Services</span>
              </span>
              <FaChevronDown
                className={
                  mobileServicesOpen
                    ? "dropdown-arrow rotate"
                    : "dropdown-arrow"
                }
                aria-hidden="true"
              />
            </button>

            {mobileServicesOpen && (
              <div className="mobile-services-submenu">
                <Link to="/services" className="mobile-service-link">
                  <FaHardHat aria-hidden="true" />
                  <span>All Services</span>
                </Link>

                <Link to="/design" className="mobile-service-link">
                  <FaDraftingCompass aria-hidden="true" />
                  <span>Architectural Design</span>
                </Link>

                <Link to="/3d-render" className="mobile-service-link">
                  <FaCube aria-hidden="true" />
                  <span>3D Rendering</span>
                </Link>

                <Link to="/blueprint" className="mobile-service-link">
                  <FaRulerCombined aria-hidden="true" />
                  <span>Blueprint &amp; Construction</span>
                </Link>
              </div>
            )}
          </div>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "dropdown-link active" : "dropdown-link"
            }
          >
            <FaBuilding aria-hidden="true" />
            <span>Projects</span>
          </NavLink>

          <Link to="/inquire" className="dropdown-quote-link">
            <FaPaperPlane aria-hidden="true" />
            <span>Request Quote</span>
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
