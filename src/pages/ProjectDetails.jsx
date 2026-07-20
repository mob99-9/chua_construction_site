import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  MapPin,
  Calendar,
  X,
  ChevronLeft,
  Building2,
  Ruler,
  Layers3,
  Users,
  ArrowUp,
  Bath,
  Landmark,
  Sparkles,
  MessageSquareText,
  PencilRuler,
  ScanSearch,
  HardHat,
} from "lucide-react";
import Navbar from "../components/layout/Navbar";

import readProjectIcon from "../assets/icons/ReadAboutOurImpressiveProjects.png";
import buildingDetailsIcon from "../assets/icons/BuildingDetails.png";
import photographsIcon from "../assets/icons/Photographs.png";
import peopleBehindIcon from "../assets/icons/ThePeopleBehindIt.png";

const projectsData = {
  "high-end-office-building": {
    title: "High-End Office Building",
    category: "Commercial Project",
    image: "/project 1.jpg",
    description:
      "An innovative, sustainable workspace design optimized for maximum productivity, sustainability, and functionality.",
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
      facilities: "Lobby and Receiving Area",
    },
    features: [
      {
        title: "Sustainable Design",
        desc: "Rainwater harvesting, solar shading, and eco-friendly materials.",
      },
      {
        title: "Natural Light",
        desc: "Large windows and open layouts maximize daylight and ventilation.",
      },
      {
        title: "Durable & Efficient",
        desc: "High-performance materials built for long-term use.",
      },
    ],
    principalArchitect: "Arch. Sarah Chua",
    projectTeam: "Engr. Robert Lee, Ar. Clara Santos",
  },

  "2-story-residence": {
    title: "2 Story Residence",
    category: "Residential Project",
    image: "/project 2.jpg",
    description:
      "A beautiful, modern residential home designed for a growing family, highlighting comfort, space efficiency, and contemporary style.",
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
      facilities: "Garage, Backyard, and Balcony",
    },
    features: [
      {
        title: "Family Centric",
        desc: "Spacious living spaces and cozy bedrooms tailored for active family life.",
      },
      {
        title: "Smart Home Integration",
        desc: "Equipped with modern energy-efficient automated features.",
      },
      {
        title: "Elegant Finishes",
        desc: "Premium wooden accents and high-end marble tiles throughout.",
      },
    ],
    principalArchitect: "Arch. Jose Chua",
    projectTeam: "Engr. Albert Tan, Ar. Lisa Cruz",
  },

  "1-story-church": {
    title: "1 Story Church",
    category: "Religious Project",
    image: "/project 3.jpg",
    description:
      "A serene house of worship designed with elegant structural arches, high ceilings for acoustic excellence, and abundant natural light.",
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
      facilities: "Sanctuary, Office, and Multi-purpose Hall",
    },
    features: [
      {
        title: "Acoustic Engineering",
        desc: "Special ceiling panels designed for clear sound propagation.",
      },
      {
        title: "High Ceilings",
        desc: "Spacious vertical volume to inspire peace and grandeur.",
      },
      {
        title: "Stained Glass",
        desc: "Beautiful custom glasswork that filters soft warm lighting.",
      },
    ],
    principalArchitect: "Arch. Manuel Perez",
    projectTeam: "Engr. Juan Dela Cruz, Ar. Maria Clara",
  },
};

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
    title,
    category: id?.includes("residence")
      ? "Residential Project"
      : "Commercial Project",
    image: id?.includes("1")
      ? "/project 1.jpg"
      : id?.includes("2")
        ? "/project 2.jpg"
        : "/project 3.jpg",
    description: `A masterfully designed ${title} project built with durable materials, high energy efficiency, and modern design principles.`,
    location: "Cebu, Philippines",
    year: "2026",
    gallery: ["/project 1.jpg", "/more2.png", "/more5.png", "/more6.png"],
    details: {
      type: id?.includes("residence")
        ? "Residential Structure"
        : "Commercial Structure",
      lotSize: "180 sqm.",
      floors: "2 Floors",
      companies: "N/A",
      elevators: "0",
      restrooms: "2",
      facilities: "Standard facilities",
    },
    features: [
      {
        title: "Modern Design",
        desc: "Clean lines and aesthetic detailing suitable for urban living.",
      },
      {
        title: "Ventilation",
        desc: "Strategically placed windows and openings for maximum airflow.",
      },
      {
        title: "Quality Build",
        desc: "High standard materials and craftsmanship for long durability.",
      },
    ],
    principalArchitect: "Arch. Jose Chua",
    projectTeam: "Engr. Juan Dela Cruz, Ar. Maria Clara",
  };
};

const detailItems = [
  { key: "type", label: "Project Type", icon: Building2 },
  { key: "lotSize", label: "Total Lot Size", icon: Ruler },
  { key: "floors", label: "No. of Floors", icon: Layers3 },
  { key: "companies", label: "Companies/Floor", icon: Users },
  { key: "elevators", label: "Elevators", icon: ArrowUp },
  { key: "restrooms", label: "Restrooms", icon: Bath },
  { key: "facilities", label: "Facilities", icon: Landmark },
];

const constructionProcess = [
  {
    step: "01",
    title: "Consultation",
    description:
      "We discuss the client's goals, preferred style, budget, site conditions, and project requirements.",
    icon: MessageSquareText,
  },
  {
    step: "02",
    title: "Concept Design",
    description:
      "Initial layouts, architectural concepts, and visual directions are developed around the approved project brief.",
    icon: PencilRuler,
  },
  {
    step: "03",
    title: "Detailed Planning",
    description:
      "Plans, technical drawings, materials, and construction requirements are refined before execution.",
    icon: ScanSearch,
  },
  {
    step: "04",
    title: "Construction",
    description:
      "The approved design is brought to life through coordinated implementation, quality control, and site supervision.",
    icon: HardHat,
  },
];

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const project = getProjectData(id);

  useEffect(() => {
    if (!selectedImage) return;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

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

      <main className="min-h-screen bg-[#F8F5F1] pt-24 text-[#483832]">
        {/* HERO */}
        <section className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-[5%] py-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:py-20">
          <div>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="group mb-6 flex items-center gap-2 border-none bg-transparent p-0 text-sm font-bold uppercase tracking-[0.14em] text-[#6B5B52] transition-colors hover:text-[#D8B57A]"
            >
              <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              Back
            </button>

            <span className="inline-flex rounded-full border border-[#D8B57A]/50 bg-[#F6EFE7] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#9C7641]">
              {project.category}
            </span>

            <h1 className="mt-6 max-w-[650px] text-4xl font-bold leading-[1.06] tracking-[-0.035em] text-[#483832] sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>

            <div className="mt-6 h-[3px] w-24 rounded-full bg-[#D8B57A]" />

            <p className="mt-7 max-w-[650px] text-base leading-8 text-[#6B5B52] sm:text-lg">
              {project.description}
            </p>

            <div className="mt-8 flex flex-col gap-4 text-[#5A4A42] sm:flex-row sm:gap-8">
              <span className="flex items-center gap-2.5 font-medium">
                <MapPin className="h-5 w-5 text-[#D8B57A]" />
                {project.location}
              </span>

              <span className="flex items-center gap-2.5 font-medium">
                <Calendar className="h-5 w-5 text-[#D8B57A]" />
                {project.year}
              </span>
            </div>

            <button
              type="button"
              onClick={handleRequestQuote}
              className="mt-10 rounded-full bg-[#483832] px-9 py-4 font-bold text-white shadow-[0_14px_30px_rgba(72,56,50,0.20)] transition-all duration-300 hover:scale-105 hover:bg-[#D8B57A] hover:text-[#483832] active:scale-95"
            >
              Request Quote
            </button>
          </div>

          <div className="group relative overflow-hidden rounded-[32px] border border-[#E8DED3] bg-white shadow-[0_24px_60px_rgba(72,56,50,0.16)]">
            <img
              className="h-[430px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[520px]"
              src={project.image}
              alt={project.title}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#483832]/40 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 h-[4px] w-full bg-[#D8B57A]" />
          </div>
        </section>

        {/* OVERVIEW + DETAILS */}
        <section className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 px-[5%] pb-20 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-[26px] border border-[#E8DED3] bg-white p-7 shadow-[0_16px_40px_rgba(72,56,50,0.09)] sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D8B57A]/40 bg-[#F6EFE7]">
                <img
                  src={readProjectIcon}
                  alt=""
                  className="h-7 w-7 object-contain"
                />
              </div>

              <h2 className="text-2xl font-bold text-[#483832] sm:text-3xl">
                Project Overview
              </h2>
            </div>

            <div className="mt-5 h-[3px] w-16 rounded-full bg-[#D8B57A]" />

            <p className="mt-6 text-base leading-7 text-[#6B5B52]">
              {project.description}
            </p>

            <p className="mt-4 text-base leading-7 text-[#6B5B52]">
              The architectural concept emphasizes transparency, openness, and
              connectivity while balancing visual character with everyday
              functionality.
            </p>

            {/* Construction Process */}
            <div className="mt-8 border-t border-[#ECE3DA] pt-7">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#D8B57A]">
                    How We Build
                  </span>

                  <h3 className="mt-2 text-xl font-bold text-[#483832] sm:text-2xl">
                    Construction Process
                  </h3>
                </div>

                <HardHat className="h-7 w-7 shrink-0 text-[#D8B57A]" />
              </div>

              <div className="relative mt-7 space-y-5">
                <div className="absolute bottom-6 left-[23px] top-6 w-px bg-[#E2D3C4]" />

                {constructionProcess.map((process) => {
                  const ProcessIcon = process.icon;

                  return (
                    <div
                      key={process.step}
                      className="group relative flex gap-4"
                    >
                      <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D8B57A]/50 bg-[#F8F5F1] text-[#483832] transition-all duration-300 group-hover:bg-[#483832] group-hover:text-[#D8B57A]">
                        <ProcessIcon className="h-5 w-5" />
                      </div>

                      <div className="flex-1 rounded-2xl border border-[#ECE3DA] bg-[#FCFAF7] px-4 py-4 transition-all duration-300 group-hover:border-[#D8B57A]/50 group-hover:shadow-[0_10px_24px_rgba(72,56,50,0.08)]">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-bold tracking-[0.14em] text-[#D8B57A]">
                            {process.step}
                          </span>

                          <h4 className="text-base font-bold text-[#483832]">
                            {process.title}
                          </h4>
                        </div>

                        <p className="mt-2 text-sm leading-6 text-[#6B5B52]">
                          {process.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </article>

          <aside className="rounded-[28px] bg-[#483832] p-8 text-white shadow-[0_18px_45px_rgba(72,56,50,0.20)] sm:p-10">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D8B57A]/45 bg-white/10">
                <img
                  src={buildingDetailsIcon}
                  alt=""
                  className="h-7 w-7 object-contain"
                />
              </div>

              <h2 className="text-2xl font-bold sm:text-3xl">
                Building Details
              </h2>
            </div>

            <div className="mt-5 h-[3px] w-16 rounded-full bg-[#D8B57A]" />

            <div className="mt-7 space-y-3">
              {detailItems.map(({ key, label, icon: Icon }) => (
                <div
                  key={key}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3.5"
                >
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[#D8B57A]" />

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#D8B57A]">
                      {label}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-[#F4ECE5]">
                      {project.details[key]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </section>

        {/* FEATURES */}
        <section className="border-y border-[#E8DED3] bg-white px-[5%] py-20">
          <div className="mx-auto max-w-[1280px]">
            <div className="text-center">
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-[#D8B57A]">
                Thoughtfully Designed
              </span>

              <h2 className="mt-3 text-3xl font-bold text-[#483832] sm:text-4xl">
                Key Features
              </h2>

              <div className="mx-auto mt-5 h-[3px] w-20 rounded-full bg-[#D8B57A]" />
            </div>

            <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-3">
              {project.features.map((feature, index) => (
                <article
                  key={`${feature.title}-${index}`}
                  className="group rounded-[26px] border border-[#E8DED3] bg-[#F8F5F1] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#D8B57A]/60 hover:shadow-[0_22px_50px_rgba(72,56,50,0.14)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D8B57A]/45 bg-white text-[#D8B57A] transition-all duration-500 group-hover:bg-[#483832]">
                    <Sparkles className="h-5 w-5" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#483832]">
                    {feature.title}
                  </h3>

                  <div className="mt-4 h-[3px] w-12 rounded-full bg-[#D8B57A] transition-all duration-500 group-hover:w-20" />

                  <p className="mt-5 leading-7 text-[#6B5B52]">
                    {feature.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="mx-auto max-w-[1280px] px-[5%] py-20">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D8B57A]/40 bg-[#F6EFE7]">
                  <img
                    src={photographsIcon}
                    alt=""
                    className="h-7 w-7 object-contain"
                  />
                </div>

                <h2 className="text-3xl font-bold text-[#483832] sm:text-4xl">
                  Project Gallery
                </h2>
              </div>

              <div className="mt-5 h-[3px] w-20 rounded-full bg-[#D8B57A]" />
            </div>

            <p className="max-w-[480px] text-sm leading-7 text-[#6B5B52] md:text-right md:text-base">
              Explore the project through selected exterior, interior, and
              architectural views. Select any image to see it in full screen.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-12 md:grid-rows-2">
            {project.gallery.map((image, index) => {
              const layoutClass =
                index === 0
                  ? "md:col-span-7 md:row-span-2 h-[360px] md:h-[625px]"
                  : index === 1
                    ? "md:col-span-5 h-[300px]"
                    : index === 2
                      ? "md:col-span-3 h-[300px]"
                      : "md:col-span-2 h-[300px]";

              return (
                <button
                  type="button"
                  key={`${image}-${index}`}
                  onClick={() => setSelectedImage(image)}
                  className={`group relative h-[300px] cursor-pointer overflow-hidden rounded-[24px] border border-[#E8DED3] bg-white p-0 text-left shadow-[0_14px_34px_rgba(72,56,50,0.10)] transition-all duration-500 hover:-translate-y-1 hover:border-[#D8B57A]/60 hover:shadow-[0_24px_55px_rgba(72,56,50,0.18)] ${layoutClass}`}
                  aria-label={`View project image ${index + 1}`}
                >
                  <img
                    src={image}
                    alt={`Project Gallery ${index + 1}`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#483832]/65 via-[#483832]/5 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#D8B57A]">
                        Project View
                      </span>

                      <p className="mt-1 text-base font-bold text-white sm:text-lg">
                        Image {String(index + 1).padStart(2, "0")}
                      </p>
                    </div>

                    <span className="flex h-11 w-11 shrink-0 translate-y-2 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white opacity-0 backdrop-blur-sm transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                      <Sparkles className="h-5 w-5" />
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#D8B57A] transition-all duration-500 group-hover:w-full" />
                </button>
              );
            })}
          </div>
        </section>

        {/* PEOPLE */}
        <section className="bg-[#483832] px-[5%] py-20 text-white">
          <div className="mx-auto max-w-[1280px]">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D8B57A]/45 bg-white/10">
                <img
                  src={peopleBehindIcon}
                  alt=""
                  className="h-7 w-7 object-contain"
                />
              </div>

              <h2 className="text-3xl font-bold sm:text-4xl">
                The People Behind It
              </h2>
            </div>

            <div className="mt-5 h-[3px] w-20 rounded-full bg-[#D8B57A]" />

            <div className="mt-10 grid grid-cols-1 gap-7 md:grid-cols-2">
              <article className="rounded-[24px] border border-white/10 bg-white/[0.06] p-8">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#D8B57A]">
                  Principal Architect
                </span>

                <h3 className="mt-3 text-2xl font-bold">
                  {project.principalArchitect}
                </h3>
              </article>

              <article className="rounded-[24px] border border-white/10 bg-white/[0.06] p-8">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#D8B57A]">
                  Project Team
                </span>

                <h3 className="mt-3 text-2xl font-bold leading-9">
                  {project.projectTeam}
                </h3>
              </article>
            </div>
          </div>
        </section>

        {/* LIGHTBOX */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#241C18]/95 p-5 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Project image preview"
          >
            <button
              type="button"
              className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all hover:scale-105 hover:bg-[#D8B57A] hover:text-[#483832]"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image preview"
            >
              <X size={26} />
            </button>

            <img
              src={selectedImage}
              alt="Enlarged Project"
              className="max-h-[88vh] max-w-[94vw] rounded-[24px] border border-white/15 object-contain shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            />
          </div>
        )}
      </main>
    </>
  );
}

export default ProjectDetails;