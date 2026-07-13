import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ServicesOffer() {
  const navigate = useNavigate();
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
  id="services"
  className="pt-16 pb-6 px-[5%] bg-white text-center flex flex-col items-center">
      <h2 className="text-[#F87400] text-3xl sm:text-4xl font-bold mb-4">
        What services do we offer?
      </h2>
      <p className="text-slate-900 text-xl sm:text-[1.75rem] font-medium mb-12 max-w-[800px]">
        Here in <span className="text-[#F87400] font-bold">CHUA</span> we offer the following services:
      </p>
      
      {/* Clickable tabs that smooth scroll to details */}
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 justify-center items-center">
      </div>
    </section>
  );
}
