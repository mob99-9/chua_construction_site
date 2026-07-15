import "./ProjectDetails.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MapPin, Calendar, X } from "lucide-react";
import logo from "../assets/logo.png";

import readProjectIcon from "../assets/icons/ReadAboutOurImpressiveProjects.png";
import buildingDetailsIcon from "../assets/icons/BuildingDetails.png";
import photographsIcon from "../assets/icons/Photographs.png";
import peopleBehindIcon from "../assets/icons/ThePeopleBehindIt.png";

function ProjectDetails() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const projectTitle = "High-End Office Building";

  const galleryImages = [
    "/project 1.jpg",
    "/more2.png",
    "/more5.png",
    "/more6.png",
  ];

  const handleRequestQuote = () => {
    navigate("/inquire", {
      state: {
        project: projectTitle,
      },
    });
  };

  return (
    <main className="project-details-page">
      <header className="details-nav">
        <img src={logo} alt="CHUA Logo" />

        <nav>
          <Link to="/projects">Projects</Link>
          <span>|</span>
          <span>Article</span>
        </nav>
      </header>

      <section className="details-hero">
        <div className="details-content">
          <span className="details-category">Commercial Project</span>

          <h1>
            High-End <br />
            Office Building
          </h1>

          <p>
            An innovative, sustainable workspace design optimized for maximum
            productivity, sustainability, and functionality.
          </p>

          <div className="details-meta">
            <span className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#f97400]" />
              Mactan Channel, Cebu
            </span>

            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#f97400]" />
              2024
            </span>
          </div>

          <div className="details-actions">
            <button
              type="button"
              onClick={handleRequestQuote}
              className="request-quote-btn"
            >
              Request Quote
            </button>
          </div>
        </div>

        <img
          className="details-main-img"
          src="/project 1.jpg"
          alt={projectTitle}
        />
      </section>

      <section className="details-grid">
        <div className="overview">
          <h2 className="flex items-center gap-2">
            <img src={readProjectIcon} alt="" className="w-6 h-6 object-contain" />
            Project Overview
          </h2>

          <p>
            Located in the heart of Mactan Channel, this high-end office
            building addresses the challenges of rapid urban growth and site
            topography.
          </p>

          <p>
            The architectural concept emphasizes transparency, openness, and
            connectivity.
          </p>
        </div>

        <aside className="building-card">
          <h2 className="flex items-center gap-2">
            <img src={buildingDetailsIcon} alt="" className="w-6 h-6 object-contain" />
            Building Details
          </h2>

          <ul>
            <li><b>Project Type:</b> Commercial Office</li>
            <li><b>Total Lot Size:</b> 174 sqm.</li>
            <li><b>No. of Floors:</b> 10 Floors</li>
            <li><b>Companies/Floor:</b> 5</li>
            <li><b>Elevators:</b> 2</li>
            <li><b>Restrooms:</b> 4</li>
            <li><b>Facilities:</b> Lobby and Receiving Area</li>
          </ul>
        </aside>
      </section>

      <section className="features-section">
        <h2>Key Features</h2>

        <div className="features-grid">
          <div>
            <h3>Sustainable Design</h3>
            <p>Rainwater harvesting, solar shading, and eco-friendly materials.</p>
          </div>

          <div>
            <h3>Natural Light</h3>
            <p>Large windows and open layouts maximize daylight and ventilation.</p>
          </div>

          <div>
            <h3>Durable & Efficient</h3>
            <p>High-performance materials built for long-term use.</p>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <h2 className="flex items-center gap-2">
          <img src={photographsIcon} alt="" className="w-6 h-6 object-contain" />
          Project Gallery
        </h2>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="gallery-hover-card"
              onClick={() => setSelectedImage(image)}
            >
              <img src={image} alt={`Project Gallery ${index + 1}`} />

              <div className="gallery-hover-overlay">
                <span>View Image</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="people-section">
        <h2 className="flex items-center gap-2">
          <img src={peopleBehindIcon} alt="" className="w-6 h-6 object-contain" />
          The People Behind It
        </h2>

        <div className="people-grid">
          <div>
            <h3>Principal Architect</h3>
            <p>[ Name ]</p>
          </div>

          <div>
            <h3>Project Team</h3>
            <p>[ Name 1, Name 2 ]</p>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="project-lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="project-lightbox-close"
            onClick={() => setSelectedImage(null)}
          >
            <X size={28} />
          </button>

          <img
            src={selectedImage}
            alt="Enlarged Project"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}

export default ProjectDetails;