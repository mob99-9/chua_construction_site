import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Hero from "../components/ServicePageComponents/Hero";
import ServicesOffer from "../components/ServicePageComponents/ServicesOffer";
import ServiceDetails from "../components/ServicePageComponents/ServiceDetails";
import MeetTeam from "../components/ServicePageComponents/MeetTeam";
import CTA from "../components/ServicePageComponents/CTA";

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

  return (
    <div className="w-full relative bg-white overflow-x-hidden">
      <Hero />
      <ServicesOffer />
      <ServiceDetails onInquire={handleInquire} />
      <MeetTeam />
      <CTA onInquire={() => handleInquire("General Inquiry")} />
    </div>
  );
}