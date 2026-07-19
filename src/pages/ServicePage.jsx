import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Search, CheckCircle } from "lucide-react";

// Import Figma assets
import craneBg from "../assets/figma/crane_bg_1.png";
import designBg from "../assets/figma/design_bg.png";
import renderBg from "../assets/figma/render_bg.png";
import constructionBg from "../assets/figma/construction_bg.png";
import permitBg from "../assets/figma/permit_bg.png";
import inspectionBg from "../assets/figma/inspection_bg.png";
import estimationBg from "../assets/figma/estimation_bg.png";
import procurementBg from "../assets/figma/procurement_bg.png";

// Detail overlays
import permitDetail from "../assets/figma/permit_detail.png";
import inspectionDetail from "../assets/figma/inspection_detail.png";
import estimationDetail from "../assets/figma/estimation_detail.png";
import procurementDetail from "../assets/figma/procurement_detail.png";

export default function ServicePage() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleInquire = (serviceTitle) => {
    navigate("/inquire", {
      state: {
        service: serviceTitle,
      },
    });
  };

  useEffect(() => {
    if (location.state?.service) {
      setTimeout(() => {
        const section = document.getElementById(location.state.service);
        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 300);
    }
  }, [location]);

  const popularServices = [
    {
      id: "design",
      title: "DESIGN",
      inquiryTitle: "Architectural Design",
      image: designBg,
      description:
        "CHUA has gathered multiple talented architects to help design people’s dreams. Each floor plan is created with the person in mind. Through collaboration, team work, and great effort, a blueprint that is uniquely yours is created.",
      features: [
        "Residential Design",
        "Commercial Design",
        "Renovation",
        "Space Planning",
      ],
      route: "/design",
    },
    {
      id: "3d-render",
      title: "3D RENDER",
      inquiryTitle: "3D Rendering",
      image: renderBg,
      description:
        "Visualizing your project has never been easier. With the help of 3D, rendering the project can save multiple design issues and can showcase how the building will look like. Design is one thing, but rendering is where details shine. Texture, lighting, materials, and overall structure are showcased. This lets the person visualize their home in real life before building.",
      features: [
        "Exterior Rendering",
        "Interior Rendering",
        "Walkthrough Animation",
        "Photorealistic Images",
      ],
      route: "/3d-render",
    },
    {
      id: "blueprint",
      title: "CONSTRUCTION",
      inquiryTitle: "Blueprint & Construction",
      image: constructionBg,
      description:
        "CHUA doesn't stop at 3D, no. We can help you build your dream into reality. From the very first steel beam to the very last brush stroke, CHUA is here for you! With the help of our reliable civil engineers and workers, your dream just went from paper, to 3D, and now, here in reality!",
      features: [
        "Project Management",
        "Structural Integrity",
        "Quality Craftsmanship",
        "Transparent Updates",
      ],
      route: "/blueprint",
    },
  ];

  return (
    <div className="w-full relative bg-white overflow-x-hidden font-sans">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[85vh] min-h-[550px] bg-figma-navy overflow-hidden flex items-end">
        {/* Background Image with slight opacity/mix-blend */}
        <div className="absolute inset-0 z-0">
          <img
            src={craneBg}
            alt="Construction Cranes Background"
            className="w-full h-full object-cover opacity-80"
          />
          {/* Top & Bottom gradient overlays */}
          <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-figma-navy to-transparent opacity-90" />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-figma-navy via-figma-navy/60 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 sm:px-12 pb-16 md:pb-24">
          <h1 className="font-archivo text-figma-orange text-5xl sm:text-7xl md:text-8xl lg:text-[110px] leading-[0.95] select-none tracking-tight uppercase">
            SOMETHING <br /> FOR YOU
          </h1>
          <p className="font-dm-mono text-white text-lg sm:text-xl md:text-2xl mt-6 font-light max-w-[600px] leading-relaxed">
            Designing, Rendering, <br /> Building, and more
          </p>
        </div>
      </section>

      {/* ================= INTRO SECTION ================= */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-12">
          <p className="font-dm-mono text-figma-navy text-lg sm:text-xl md:text-2xl leading-relaxed max-w-[1150px]">
            Turning a vision into a physical structure requires the perfect
            balance of creativity and technical expertise. Whether you are
            building your dream home from scratch or developing a commercial
            space, our comprehensive design-and-build services are tailored to
            bring your ideas to life with precision, safety, and quality.
          </p>
        </div>
      </section>

      {/* ================= POPULAR SERVICES SECTION ================= */}
      <section className="bg-figma-navy text-white py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-12">
          <h2 className="font-archivo text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight select-none mb-20">
            Our most popular services
          </h2>

          <div className="space-y-32">
            {popularServices.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center scroll-mt-28"
                >
                  {/* Service Image */}
                  <div
                    className={`lg:col-span-6 relative rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02] ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <img
                      src={service.image}
                      alt={`${service.title} illustration`}
                      className="w-full h-[320px] sm:h-[450px] object-cover"
                    />
                  </div>

                  {/* Service Content */}
                  <div
                    className={`lg:col-span-6 flex flex-col justify-center ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <h3 className="font-archivo text-figma-orange text-3xl sm:text-4xl md:text-[40px] uppercase select-none mb-6">
                      {service.title}
                    </h3>
                    <p className="font-dm-mono text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 text-white/90 hover:translate-x-1 transition-transform duration-300"
                        >
                          <CheckCircle className="text-figma-orange w-5 h-5 shrink-0" />
                          <span className="font-dm-mono text-base font-light">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-6 sm:gap-8 mt-2">
                      <button
                        onClick={() => navigate(service.route)}
                        className="font-dm-mono text-white text-base font-semibold underline underline-offset-8 decoration-white/45 hover:text-figma-orange hover:decoration-figma-orange transition-all duration-300 cursor-pointer"
                      >
                        See Portfolio
                      </button>

                      <button
                        onClick={() => handleInquire(service.inquiryTitle)}
                        className="bg-white text-figma-navy hover:bg-figma-orange hover:text-white px-8 py-3.5 rounded-lg font-dm-mono text-base font-bold flex items-center gap-2.5 shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
                      >
                        <Search className="w-5 h-5" />
                        Request Quote
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= OTHER SERVICES SECTION ================= */}
      <section className="bg-white">
        <div className="py-16 md:py-24 text-center">
          <h2 className="font-archivo text-figma-blue text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight select-none">
            Other services we offer
          </h2>
        </div>

        {/* 1. Building Permit Section */}
        <div className="bg-white py-16 md:py-24 border-t border-gray-100">
          <div className="max-w-[1280px] mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 relative">
              <img
                src={permitBg}
                alt="Blueprints background"
                className="w-full h-[260px] sm:h-[380px] object-cover rounded-xl shadow-lg"
              />
              <img
                src={permitDetail}
                alt="Documents cutout"
                className="absolute -bottom-8 -right-4 w-[45%] max-w-[200px] h-auto object-contain rounded-lg shadow-xl border border-white/10"
              />
            </div>
            <div className="lg:col-span-6">
              <h3 className="font-archivo text-figma-orange text-2xl sm:text-3xl md:text-[36px] uppercase leading-tight mb-5 select-none">
                Building Permit & Document Processing
              </h3>
              <p className="font-dm-mono text-figma-navy text-base sm:text-lg leading-relaxed mb-8">
                Taking the stress out of paperwork. We handle the entire legal
                processing phase, preparing and submitting structural
                blueprints, zoning requirements, and clearances to secure your
                local government building permits.
              </p>
              <button
                onClick={() =>
                  handleInquire("Building Permit & Document Processing")
                }
                className="bg-figma-navy text-white hover:bg-figma-orange hover:text-white px-8 py-3.5 rounded-lg font-dm-mono text-base font-bold flex items-center gap-2.5 shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
              >
                <Search className="w-5 h-5" />
                Request Quote
              </button>
            </div>
          </div>
        </div>

        {/* 2. Site Inspection Section */}
        <div className="bg-figma-navy text-white py-20 md:py-28">
          <div className="max-w-[1280px] mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 relative lg:order-2">
              <img
                src={inspectionBg}
                alt="Site Inspection background"
                className="w-full h-[260px] sm:h-[380px] object-cover rounded-xl shadow-lg"
              />
              <img
                src={inspectionDetail}
                alt="Clipboard cutout"
                className="absolute -bottom-8 -left-4 w-[45%] max-w-[200px] h-auto object-contain rounded-lg shadow-xl border border-white/10"
              />
            </div>
            <div className="lg:col-span-6 lg:order-1">
              <h3 className="font-archivo text-figma-orange text-2xl sm:text-3xl md:text-[36px] uppercase leading-tight mb-5 select-none">
                Site Inspection & Structural Assessment
              </h3>
              <p className="font-dm-mono text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
                Evaluating safety and viability before you build. Our team
                conducts detailed on-site evaluations, checking soil conditions,
                existing structural integrity, and land topography to prevent
                costly future issues.
              </p>
              <button
                onClick={() =>
                  handleInquire("Site Inspection & Structural Assessment")
                }
                className="bg-white text-figma-navy hover:bg-figma-orange hover:text-white px-8 py-3.5 rounded-lg font-dm-mono text-base font-bold flex items-center gap-2.5 shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
              >
                <Search className="w-5 h-5" />
                Request Quote
              </button>
            </div>
          </div>
        </div>

        {/* 3. Project Estimation Section */}
        <div className="bg-white py-16 md:py-24">
          <div className="max-w-[1280px] mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 relative">
              <img
                src={estimationBg}
                alt="Cost calculator background"
                className="w-full h-[260px] sm:h-[380px] object-cover rounded-xl shadow-lg"
              />
              <img
                src={estimationDetail}
                alt="Calculator detail cutout"
                className="absolute -bottom-8 -right-4 w-[45%] max-w-[200px] h-auto object-contain rounded-lg shadow-xl border border-white/10"
              />
            </div>
            <div className="lg:col-span-6">
              <h3 className="font-archivo text-figma-orange text-2xl sm:text-3xl md:text-[36px] uppercase leading-tight mb-5 select-none">
                Project Estimation & Cost Consultation
              </h3>
              <p className="font-dm-mono text-figma-navy text-base sm:text-lg leading-relaxed mb-8">
                Accurate budgeting before breaking ground. We provide detailed
                Bills of Materials (BOM) and cost estimates so you know exactly
                what your project will cost, preventing unexpected financial
                surprises.
              </p>
              <button
                onClick={() =>
                  handleInquire("Project Estimation & Cost Consultation")
                }
                className="bg-figma-navy text-white hover:bg-figma-orange hover:text-white px-8 py-3.5 rounded-lg font-dm-mono text-base font-bold flex items-center gap-2.5 shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
              >
                <Search className="w-5 h-5" />
                Request Quote
              </button>
            </div>
          </div>
        </div>

        {/* 4. Procurement Section */}
        <div className="bg-figma-navy text-white py-20 md:py-28">
          <div className="max-w-[1280px] mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 relative lg:order-2">
              <img
                src={procurementBg}
                alt="Procurement materials background"
                className="w-full h-[260px] sm:h-[380px] object-cover rounded-xl shadow-lg"
              />
              <img
                src={procurementDetail}
                alt="Procurement tools cutout"
                className="absolute -bottom-8 -left-4 w-[45%] max-w-[200px] h-auto object-contain rounded-lg shadow-xl border border-white/10"
              />
            </div>
            <div className="lg:col-span-6 lg:order-1">
              <h3 className="font-archivo text-figma-orange text-2xl sm:text-3xl md:text-[36px] uppercase leading-tight mb-5 select-none">
                Procurement & Purchasing
              </h3>
              <p className="font-dm-mono text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
                Sourcing the best materials at the right price. We handle the
                sourcing, negotiating, and logistics for all structural and
                finishing materials, ensuring high-quality, cost-effective
                supplies are delivered to the site exactly when needed.
              </p>
              <button
                onClick={() => handleInquire("Procurement & Purchasing")}
                className="bg-white text-figma-navy hover:bg-figma-orange hover:text-white px-8 py-3.5 rounded-lg font-dm-mono text-base font-bold flex items-center gap-2.5 shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
              >
                <Search className="w-5 h-5" />
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}