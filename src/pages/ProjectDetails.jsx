import "./ProjectDetails.css";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MapPin, Calendar, X, ChevronLeft } from "lucide-react";
import Navbar from "../components/layout/Navbar";

import readProjectIcon from "../assets/icons/ReadAboutOurImpressiveProjects.png";
import buildingDetailsIcon from "../assets/icons/BuildingDetails.png";
import photographsIcon from "../assets/icons/Photographs.png";
import peopleBehindIcon from "../assets/icons/ThePeopleBehindIt.png";

// Project metadata database
const projectsData = {
  "high-end-office-building": {
    title: "High-End Office Building",
    category: "Commercial Project",
    image: "/project 1.jpg",
    description: "An innovative, sustainable workspace design optimized for maximum productivity, sustainability, and functionality.",
    location: "Mactan Channel, Cebu",
    year: "2024",
    gallery: ["/project 1.jpg", "/more2.png", "/more5.png", "/more6.png"],
    details: {
      type: "Commercial Office",
      lotSize: "174 sqm.",
      floors: "10 Floors",
      companies: "5",
      elevators: "2",
      restrooms: "4",
      facilities: "Lobby and Receiving Area"
    },
    features: [
      { title: "Sustainable Design", desc: "Rainwater harvesting, solar shading, and eco-friendly materials." },
      { title: "Natural Light", desc: "Large windows and open layouts maximize daylight and ventilation." },
      { title: "Durable & Efficient", desc: "High-performance materials built for long-term use." }
    ],
    principalArchitect: "Arch. Sarah Chua",
    projectTeam: "Engr. Robert Lee, Ar. Clara Santos"
  },
  "2-story-residence": {
    title: "2 Story Residence",
    category: "Residential Project",
    image: "/project 2.jpg",
    description: "A beautiful, modern residential home designed for a growing family, highlighting comfort, space efficiency, and contemporary style.",
    location: "Banilad, Cebu City",
    year: "2025",
    gallery: ["/project 2.jpg", "/more1.png", "/more3.png", "/more4.png"],
    details: {
      type: "Residential House",
      lotSize: "250 sqm.",
      floors: "2 Floors",
      companies: "N/A (Private)",
      elevators: "0",
      restrooms: "3",
      facilities: "Garage, Backyard, and Balcony"
    },
    features: [
      { title: "Family Centric", desc: "Spacious living spaces and cozy bedrooms tailored for active family life." },
      { title: "Smart Home Integration", desc: "Equipped with modern energy-efficient automated features." },
      { title: "Elegant Finishes", desc: "Premium wooden accents and high-end marble tiles throughout." }
    ],
    principalArchitect: "Arch. Jose Chua",
    projectTeam: "Engr. Albert Tan, Ar. Lisa Cruz"
  },
  "1-story-church": {
    title: "1 Story Church",
    category: "Religious Project",
    image: "/project 3.jpg",
    description: "A serene house of worship designed with elegant structural arches, high ceilings for acoustic excellence, and abundant natural light.",
    location: "Mandaue City, Cebu",
    year: "2023",
    gallery: ["/project 3.jpg", "/more2.png", "/more5.png", "/more6.png"],
    details: {
      type: "Religious Building",
      lotSize: "400 sqm.",
      floors: "1 Floor",
      companies: "N/A",
      elevators: "0",
      restrooms: "2",
      facilities: "Sanctuary, Office, and Multi-purpose Hall"
    },
    features: [
      { title: "Acoustic Engineering", desc: "Special ceiling panels designed for clear sound propagation." },
      { title: "High Ceilings", desc: "Spacious vertical volume to inspire peace and grandeur." },
      { title: "Stained Glass", desc: "Beautiful custom glasswork that filters soft warm lighting." }
    ],
    principalArchitect: "Arch. Manuel Perez",
    projectTeam: "Engr. Juan Dela Cruz, Ar. Maria Clara"
  }
};

// Helper resolver for fallback dynamic generation
const getProjectData = (id) => {
  if (id && projectsData[id]) {
    return projectsData[id];
  }
  
  const title = id
    ? id
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "Project Details";
    
  return {
    title: title,
    category: id?.includes("residence") ? "Residential Project" : "Commercial Project",
    image: id?.includes("1") ? "/project 1.jpg" : id?.includes("2") ? "/project 2.jpg" : "/project 3.jpg",
    description: `A masterfully designed ${title} project built with durable materials, high energy efficiency, and modern design principles.`,
    location: "Cebu, Philippines",
    year: "2026",
    gallery: ["/project 1.jpg", "/more2.png", "/more5.png", "/more6.png"],
    details: {
      type: id?.includes("residence") ? "Residential Structure" : "Commercial Structure",
      lotSize: "180 sqm.",
      floors: "2 Floors",
      companies: "N/A",
      elevators: "0",
      restrooms: "2",
      facilities: "Standard facilities"
    },
    features: [
      { title: "Modern Design", desc: "Clean lines and aesthetic detailing suitable for urban living." },
      { title: "Ventilation", desc: "Strategically placed windows and openings for maximum airflow." },
      { title: "Quality Build", desc: "High standard materials and craftsmanship for long durability." }
    ],
    principalArchitect: "Arch. Jose Chua",
    projectTeam: "Engr. Juan Dela Cruz, Ar. Maria Clara"
  };
};

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const project = getProjectData(id);

  const handleRequestQuote = () => {
    navigate("/inquire", {
      state: {
        project: project.title,
      },
    });
  };

  return (
    <>
      <Navbar />

      <main className="project-details-page pt-24">
        <section className="details-hero">
          <div className="details-content">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-1.5 text-slate-500 hover:text-[#f97400] transition-colors font-semibold mb-5 bg-transparent border-none cursor-pointer group p-0"
            >
              <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
              <span className="text-[13px] tracking-wider uppercase font-sans font-bold">Back</span>
            </button>

            <span className="details-category">{project.category}</span>

            <h1>{project.title}</h1>

            <p>{project.description}</p>

            <div className="details-meta">
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#f97400]" />
                {project.location}
              </span>

              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#f97400]" />
                {project.year}
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
            src={project.image}
            alt={project.title}
          />
        </section>

        <section className="details-grid">
          <div className="overview">
            <h2 className="flex items-center gap-2">
              <img src={readProjectIcon} alt="" className="w-6 h-6 object-contain" />
              Project Overview
            </h2>

            <p>{project.description}</p>

            <p>
              The architectural concept emphasizes transparency, openness, and
              connectivity, ensuring every element is aligned with aesthetic and functional targets.
            </p>
          </div>

          <aside className="building-card">
            <h2 className="flex items-center gap-2">
              <img src={buildingDetailsIcon} alt="" className="w-6 h-6 object-contain" />
              Building Details
            </h2>

            <ul>
              <li><b>Project Type:</b> {project.details.type}</li>
              <li><b>Total Lot Size:</b> {project.details.lotSize}</li>
              <li><b>No. of Floors:</b> {project.details.floors}</li>
              <li><b>Companies/Floor:</b> {project.details.companies}</li>
              <li><b>Elevators:</b> {project.details.elevators}</li>
              <li><b>Restrooms:</b> {project.details.restrooms}</li>
              <li><b>Facilities:</b> {project.details.facilities}</li>
            </ul>
          </aside>
        </section>

        <section className="features-section">
          <h2>Key Features</h2>

          <div className="features-grid">
            {project.features.map((feature, idx) => (
              <div key={idx}>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="gallery-section">
          <h2 className="flex items-center gap-2">
            <img src={photographsIcon} alt="" className="w-6 h-6 object-contain" />
            Project Gallery
          </h2>

          <div className="gallery-grid">
            {project.gallery.map((image, index) => (
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
              <p>{project.principalArchitect}</p>
            </div>

            <div>
              <h3>Project Team</h3>
              <p>{project.projectTeam}</p>
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
    </>
  );
}

export default ProjectDetails;